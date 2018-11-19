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
var LevelSelectPage = (function (_super) {
    __extends(LevelSelectPage, _super);
    function LevelSelectPage() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/eui/LevelSelectPage.exml";
        _this.init();
        return _this;
    }
    LevelSelectPage.prototype.init = function () {
        GameUtil.showSceneAnimation(this.grpscale);
        var strClassiclevel = egret.localStorage.getItem("classicLevelNum");
        this.levelclassic.text = "LEVEL " + (strClassiclevel == null ? GameData.iClassicLevel : strClassiclevel);
        var strlevel = egret.localStorage.getItem("dareLevelNum");
        this.leveldare.text = "LEVEL " + (strlevel == null ? "1" : strlevel);
        this.addEvents();
    };
    LevelSelectPage.prototype.addEvents = function () {
        this.btngohome.addEventListener(egret.TouchEvent.TOUCH_TAP, this.backHome, this);
        this.groupclassic.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goGame, this);
        this.groupdare.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goGame, this);
    };
    LevelSelectPage.prototype.goGame = function (evt) {
        if (evt.currentTarget == this.groupclassic) {
            GameData.sType = "classic";
            Observer.getInstance().fire(Commands.OPEN_NEW_GAME);
        }
        else if (evt.currentTarget == this.groupdare) {
            GameData.sType = "dare";
            Observer.getInstance().fire(Commands.OPEN_NEW_GAME);
        }
    };
    /*
    *回到主界面
    */
    LevelSelectPage.prototype.backHome = function () {
        Observer.getInstance().fire(Commands.CLOSE_LEVELSELECT);
    };
    LevelSelectPage.getInstance = function () {
        if (this._instance === undefined) {
            this._instance = new LevelSelectPage();
        }
        return this._instance;
    };
    LevelSelectPage.destroyInstance = function () {
        if (this._instance) {
            this._instance = undefined;
        }
    };
    return LevelSelectPage;
}(eui.Component));
__reflect(LevelSelectPage.prototype, "LevelSelectPage");
//# sourceMappingURL=LevelSelectPage.js.map