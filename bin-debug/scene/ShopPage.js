/**
 * created by hh.m on 29/10/2018
 * 选关界面
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var ShopPage = (function (_super) {
    __extends(ShopPage, _super);
    function ShopPage() {
        var _this = _super.call(this) || this;
        _this.listData = new eui.ArrayCollection();
        //当前拥有的金币数
        _this.iOwnGoldNum = 0;
        _this.skinName = "resource/eui_skins/eui/ShopPage.exml";
        _this.scrollershop.bounces = true;
        _this.init();
        return _this;
    }
    ShopPage.prototype.init = function () {
        GameUtil.showSceneAnimation(this.grpscale);
        var strGoldNum = egret.localStorage.getItem("goldNum");
        this.iOwnGoldNum = (strGoldNum == null ? 0 : Number(strGoldNum));
        this.lblgold.text = this.iOwnGoldNum.toString();
        this.addList();
        this.addEvents();
    };
    //添加列表
    ShopPage.prototype.addList = function () {
        this.shopList.touchEnabled = true;
        this.shopList.useVirtualLayout = true;
        this.shopList.itemRenderer = ShopBarItemRender;
        var lastChoice = egret.localStorage.getItem("shopKuangIndex");
        var arr = [];
        for (var i = 0; i < 12; i++) {
            var obj = {};
            var strPropName = egret.localStorage.getItem("shopprop" + i);
            obj.texture = strPropName == null ? GameData.strDefaultProp : strPropName;
            obj.bgtexture = strPropName == null ? GameData.shopPropBg[0] : GameData.shopPropBg[1];
            if (lastChoice && i == Number(lastChoice)) {
                obj.type = 1; //动态给数据增加type属性
                egret.localStorage.setItem("shopKuangIndex", lastChoice);
            }
            else {
                if (lastChoice == null && i == 0) {
                    egret.localStorage.setItem("shopKuangIndex", "0");
                    obj.bgtexture = GameData.shopPropBg[1];
                    obj.texture = GameData.shopImgArr[0];
                    egret.localStorage.setItem("shopprop0", GameData.shopImgArr[0]);
                    obj.type = 1;
                }
                else {
                    obj.type = 0;
                }
            }
            arr.push(obj);
        }
        this.listData.source = arr;
        this.shopList.dataProvider = this.listData;
        this.shopList.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTap, this);
    };
    ShopPage.prototype.onTap = function (e) {
        var index = e.itemIndex;
        egret.localStorage.setItem("shopKuangIndex", index.toString());
        var item = e.itemRenderer;
        var data = e.item;
        this.itemSelected = item;
        var arr = [];
        for (var i = 0; i < 12; i++) {
            var obj = {};
            var strPropName = egret.localStorage.getItem("shopprop" + i);
            obj.texture = strPropName == null ? GameData.strDefaultProp : strPropName;
            obj.bgtexture = strPropName == null ? GameData.shopPropBg[0] : GameData.shopPropBg[1];
            if (i == index) {
                obj.type = 1; //动态给数据增加type属性
            }
            else {
                obj.type = 0;
            }
            arr.push(obj);
        }
        this.listData.source = arr;
        this.shopList.dataProvider = this.listData;
    };
    ShopPage.prototype.onChange = function (e) {
        //获取点击消息
        //console.log(this.shopList.selectedItem,this.shopList.selectedIndex);
    };
    ShopPage.prototype.addEvents = function () {
        this.btngohome.addEventListener(egret.TouchEvent.TOUCH_TAP, this.backHome, this);
        this.groupbuy.addEventListener(egret.TouchEvent.TOUCH_TAP, this.leftBtnTouch, this);
        this.groupadd.addEventListener(egret.TouchEvent.TOUCH_TAP, this.rightBtnTouch, this);
    };
    /*
    *回到主界面
    */
    ShopPage.prototype.backHome = function () {
        console.log("back home");
        Observer.getInstance().fire(Commands.CLOSE_SHOP);
    };
    /*
    *左侧购买
    */
    ShopPage.prototype.leftBtnTouch = function () {
        console.log("leftBtnTouch");
        if (this.iOwnGoldNum >= 250) {
            this.iOwnGoldNum -= 250;
            if (this.iOwnGoldNum >= 0) {
                var strRanName = GameData.shopImgArr[Math.floor(Math.random() * 12 + 1)];
                egret.localStorage.setItem("shopprop" + this.itemSelected.itemIndex, strRanName);
                this.itemSelected.imgprop.texture = GameUtil.getTextureByName(strRanName);
                this.itemSelected.imgbg.texture = GameUtil.getTextureByName("propbg2_png");
            }
        }
        egret.localStorage.setItem("goldNum", this.iOwnGoldNum.toString());
        this.lblgold.text = this.iOwnGoldNum.toString();
    };
    /*
    *右侧购买
    */
    ShopPage.prototype.rightBtnTouch = function () {
        //console.log("rightBtnTouch");
        this.iOwnGoldNum += 35;
        egret.localStorage.setItem("goldNum", this.iOwnGoldNum.toString());
        this.lblgold.text = this.iOwnGoldNum.toString();
    };
    ShopPage.getInstance = function () {
        if (this._instance === undefined) {
            this._instance = new ShopPage();
        }
        return this._instance;
    };
    ShopPage.destroyInstance = function () {
        this._instance = undefined;
    };
    return ShopPage;
}(eui.Component));
__reflect(ShopPage.prototype, "ShopPage");
//# sourceMappingURL=ShopPage.js.map