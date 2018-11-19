/**
 * created by hh.m on 29/10/2018
 * 选关界面
 */

class ShopPage extends eui.Component {

    private static _instance;
    public constructor () {
        super();
        this.skinName = "resource/eui_skins/eui/ShopPage.exml";
        this.scrollershop.bounces = true;
        this.init();
    }

    /*
    *文本改变值
    */
    private lblgold: eui.Label;
    private leftnum: eui.Label;
    private rightnum: eui.Label;
    /*
    *按钮
    */
    private btngohome: eui.Button;
    private groupbuy: eui.Group;
    private groupadd: eui.Group;

    /*
    *竖直滑动列表
    */
    private scrollershop: eui.Scroller;
    private shopList: eui.List;
    private listData: eui.ArrayCollection = new eui.ArrayCollection();
    private itemSelected: ShopBarItemRender;

    /*
    *缩放组
    */
    private grpscale: eui.Group;
    
    //当前拥有的金币数
    private iOwnGoldNum: number = 0;
    
    private init () {
        GameUtil.showSceneAnimation(this.grpscale);
        var strGoldNum: string = egret.localStorage.getItem("goldNum");
        this.iOwnGoldNum = (strGoldNum == null ? 0 : Number(strGoldNum));
        this.lblgold.text = this.iOwnGoldNum.toString();
        this.addList();
        this.addEvents();
    }

    //添加列表
    private addList() {
        this.shopList.touchEnabled = true;
        this.shopList.useVirtualLayout = true;
        this.shopList.itemRenderer = ShopBarItemRender;
        let lastChoice = egret.localStorage.getItem("shopKuangIndex");

        var arr: Array<any> = [];
        for(let i = 0; i < 12; i++){ 
            var obj: any = {};
            let strPropName = egret.localStorage.getItem("shopprop"+i);
            obj.texture = strPropName == null ? GameData.strDefaultProp : strPropName;
            obj.bgtexture = strPropName == null ? GameData.shopPropBg[0] : GameData.shopPropBg[1];
            if (lastChoice && i == Number(lastChoice)) {
                obj.type = 1; //动态给数据增加type属性
                egret.localStorage.setItem("shopKuangIndex", lastChoice);
            }else {
                if (lastChoice == null && i == 0) {
                    egret.localStorage.setItem("shopKuangIndex", "0");                                        
                    obj.bgtexture = GameData.shopPropBg[1];
                    obj.texture = GameData.shopImgArr[0];
                    egret.localStorage.setItem("shopprop0", GameData.shopImgArr[0]);
                    obj.type = 1;
                }else {
                    obj.type = 0;
                }
            }
            arr.push(obj);
        }
        this.listData.source = arr;
        this.shopList.dataProvider = this.listData;
        this.shopList.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTap, this);
    }

    public onTap(e: eui.ItemTapEvent) {
        var index = e.itemIndex;
        egret.localStorage.setItem("shopKuangIndex", index.toString());
        var item = e.itemRenderer;
        var data = e.item;
        this.itemSelected = <ShopBarItemRender>item;

        var arr: Array<any> = [];
        for(let i = 0; i < 12; i++){ 
            var obj: any = {};
            let strPropName = egret.localStorage.getItem("shopprop"+i);
            obj.texture = strPropName == null ? GameData.strDefaultProp : strPropName;
            obj.bgtexture = strPropName == null ? GameData.shopPropBg[0] : GameData.shopPropBg[1];
            if(i == index) {
                obj.type = 1; //动态给数据增加type属性
            } else {
                obj.type = 0;
            }
            arr.push(obj);
        }
        this.listData.source = arr;
        this.shopList.dataProvider = this.listData;
    }

    private onChange(e:eui.PropertyEvent):void{
        //获取点击消息
        //console.log(this.shopList.selectedItem,this.shopList.selectedIndex);
    }

    private addEvents () {
        this.btngohome.addEventListener(egret.TouchEvent.TOUCH_TAP, this.backHome, this);
        this.groupbuy.addEventListener(egret.TouchEvent.TOUCH_TAP, this.leftBtnTouch, this);
        this.groupadd.addEventListener(egret.TouchEvent.TOUCH_TAP, this.rightBtnTouch, this);
    }

    /*
    *回到主界面
    */
    private backHome() {
        console.log("back home");
        Observer.getInstance().fire(Commands.CLOSE_SHOP);
    }

    /*
    *左侧购买
    */
    private leftBtnTouch() {
        console.log("leftBtnTouch");
        if (this.iOwnGoldNum >= 250) {
            this.iOwnGoldNum -= 250;
            if (this.iOwnGoldNum >=0) {
                let strRanName: string = GameData.shopImgArr[Math.floor(Math.random()*12+1)];
                egret.localStorage.setItem("shopprop"+this.itemSelected.itemIndex, strRanName);
                this.itemSelected.imgprop.texture = GameUtil.getTextureByName(strRanName);
                this.itemSelected.imgbg.texture = GameUtil.getTextureByName("propbg2_png");
            }
        }
        egret.localStorage.setItem("goldNum", this.iOwnGoldNum.toString());
        this.lblgold.text = this.iOwnGoldNum.toString();
    }

    /*
    *右侧购买
    */
    private rightBtnTouch() {
        //console.log("rightBtnTouch");
        this.iOwnGoldNum += 35;
        egret.localStorage.setItem("goldNum", this.iOwnGoldNum.toString());
        this.lblgold.text = this.iOwnGoldNum.toString();
    }

    public static getInstance () {
        if (this._instance === undefined) {
            this._instance = new ShopPage();
        }
        return this._instance;
    }

    public static destroyInstance() {
        this._instance = undefined;
    }
}