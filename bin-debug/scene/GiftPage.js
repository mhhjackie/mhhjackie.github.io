/**
 * 礼物界面
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
var FruitGiftPage = (function (_super) {
    __extends(FruitGiftPage, _super);
    function FruitGiftPage() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/eui/GiftPage.exml";
        _this.init();
        return _this;
    }
    FruitGiftPage.prototype.init = function () {
        var strGoldNum = egret.localStorage.getItem("goldNum");
        this.lblgold.text = (strGoldNum == null ? "0" : strGoldNum);
        this.groupGiftPos = [236, 333, 426, 515];
        var strNewestNum = egret.localStorage.getItem("classicLevelNum");
        var rightNum = Number(strNewestNum) % 4 === 0 ? 4 : Number(strNewestNum) % 4;
        this.iNewestNum = strNewestNum == null ? GameData.iClassicLevel : rightNum;
        //设置图片
        var strGobletNum = egret.localStorage.getItem("gobletNum");
        var picNum = strGobletNum == null ? 1 : Number(strGobletNum);
        var iBeginIndex;
        var iEndIndex;
        var iOuShu;
        var iArrImg;
        this.iPicIndex = picNum;
        iArrImg = [];
        console.log("iPicIndex:  " + this.iPicIndex);
        if ((this.iPicIndex - 2) % 4 == 0) {
            iBeginIndex = this.iPicIndex - 1;
            iEndIndex = this.iPicIndex - 1;
            iOuShu = true;
        }
        else {
            iOuShu = false;
            iEndIndex = this.iPicIndex - 1;
        }
        if (!iOuShu) {
            for (var t = iEndIndex + 1; t >= 2; t--) {
                if (((t - 2) % 4) == 0) {
                    iBeginIndex = t - 1;
                    break;
                }
            }
        }
        console.log("iBeginIndex:  " + iBeginIndex + "   iEndIndex:  " + iEndIndex);
        for (var i = iBeginIndex - 1; i < iEndIndex; i++) {
            iArrImg.push(i);
        }
        //1~4
        console.log("The length is:   " + iArrImg.length);
        for (var i = 1; i <= iArrImg.length; i++) {
            var textureName = GameUtil.getTextureByName(GameData.giftImgArr[iArrImg[i - 1]]);
            this["img" + i].texture = textureName;
        }
        //设置进度
        this.progressgift.value = 25 * this.iNewestNum;
        //设置礼物头部移动
        this.groupgift.x = this.groupGiftPos[this.iNewestNum - 1];
        if (this.progressgift.value == 100) {
            this.groupgift.visible = false;
        }
        for (var i = 1; i <= this.iNewestNum - 1; i++) {
            this["imggou" + i].visible = true;
        }
        this.lblnum.text = this.iNewestNum.toString();
        //记录最新的关卡数
        GameData.iClassicLevel++;
        egret.localStorage.setItem("classicLevelNum", GameData.iClassicLevel.toString());
        if (this.iNewestNum == GameData.iTotalNum) {
            this.lbltext.text = "AWARD";
            this.imgbtn.texture = GameUtil.getTextureByName("shopadd_png");
        }
        this.addEvents();
    };
    FruitGiftPage.prototype.addEvents = function () {
        this.nextgroup.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (this.iNewestNum >= GameData.iTotalNum) {
                //弹抽奖界面
                Observer.getInstance().fire(Commands.OPEN_RESULT);
            }
            else {
                Observer.getInstance().fire(Commands.CLOSE_GIFT);
            }
        }, this);
    };
    FruitGiftPage.getInstance = function () {
        if (this._instance === undefined) {
            this._instance = new FruitGiftPage();
        }
        return this._instance;
    };
    FruitGiftPage.destroyInstance = function () {
        if (this._instance) {
            this._instance = undefined;
        }
    };
    return FruitGiftPage;
}(eui.Component));
__reflect(FruitGiftPage.prototype, "FruitGiftPage");
//# sourceMappingURL=GiftPage.js.map