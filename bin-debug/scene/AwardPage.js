/**
 * 奖励自动弹窗界面
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
var NewAwardPage = (function (_super) {
    __extends(NewAwardPage, _super);
    function NewAwardPage() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/eui/AwardPage.exml";
        _this.init();
        return _this;
    }
    NewAwardPage.prototype.init = function () {
        var strGoldNum = egret.localStorage.getItem("goldNum");
        this.lblgold.text = (strGoldNum == null ? "0" : strGoldNum);
        if (GameData.sType === "classic") {
            this.imgpic.visible = true;
            this.imggold1.visible = false;
            this.imggold2.visible = false;
            this.imggold3.visible = false;
            this.lblscore.visible = false;
            this.imgpic.texture = GameUtil.getTextureByName(GameData.strImgName);
        }
        else {
            this.imgpic.visible = false;
            this.imggold1.visible = true;
            this.imggold2.visible = true;
            this.imggold3.visible = true;
            this.lblscore.visible = true;
        }
        this.countdown = 3;
        var timer = new egret.Timer(1000, this.countdown);
        timer.addEventListener(egret.TimerEvent.TIMER, this.onTimerHandler, this);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComFunc, this);
        timer.start();
    };
    NewAwardPage.prototype.onTimerHandler = function (event) {
        this.countdown--;
    };
    NewAwardPage.prototype.timerComFunc = function () {
        if (GameData.sType === "dare") {
            GameData.bWuXianOpenWin = false; //输了一次变为false
            GameData.bWuXianKnifeZero = false;
        }
        Observer.getInstance().fire(Commands.CLOSE_AWARD);
    };
    NewAwardPage.getInstance = function () {
        if (this._instance === undefined) {
            this._instance = new NewAwardPage();
        }
        return this._instance;
    };
    NewAwardPage.destroyInstance = function () {
        if (this._instance) {
            this._instance = undefined;
        }
    };
    return NewAwardPage;
}(eui.Component));
__reflect(NewAwardPage.prototype, "NewAwardPage");
//# sourceMappingURL=AwardPage.js.map