/**
 * created by hh.m on 29/10/2018
 * 设置界面
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
var SettingPage = (function (_super) {
    __extends(SettingPage, _super);
    function SettingPage() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/eui/SettingPage.exml";
        _this.init();
        return _this;
    }
    SettingPage.prototype.init = function () {
        // 添加初始动画
        GameUtil.showSceneAnimation(this.grpscale);
        var strFlag = egret.localStorage.getItem("soundON");
        if (strFlag == null || strFlag === "true") {
            this.togglesound.label = "ON";
            this.togglesound.selected = false;
        }
        else {
            this.togglesound.label = "OFF";
            this.togglesound.selected = true;
        }
        var strShakeFlag = egret.localStorage.getItem("shakeON");
        if (strShakeFlag == null || strShakeFlag === "true") {
            this.toggleshake.label = "ON";
            this.toggleshake.selected = false;
        }
        else {
            this.toggleshake.label = "OFF";
            this.toggleshake.selected = true;
        }
        this.addEvents();
    };
    SettingPage.prototype.addEvents = function () {
        //this.touchEnabled = true;
        // this.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
        //     Observer.getInstance().fire(Commands.CLOSE_JODO);
        // }, this)
        this.btngohome.addEventListener(egret.TouchEvent.TOUCH_TAP, this.backHome, this);
        this.togglesound.addEventListener(eui.UIEvent.CHANGE, this.soundChange, this);
        this.toggleshake.addEventListener(eui.UIEvent.CHANGE, this.shakeChange, this);
    };
    SettingPage.prototype.soundChange = function (evt) {
        console.log("soundChange:  " + evt.target.selected);
        var txtSound = (evt.currentTarget);
        var bSelected = evt.currentTarget.selected;
        if (bSelected) {
            txtSound.label = "OFF";
            egret.localStorage.setItem("soundON", "false");
            if (GameData.channelBg) {
                GameData.channelBg.stop();
            }
        }
        else {
            txtSound.label = "ON";
            egret.localStorage.setItem("soundON", "true");
            var soundBg = RES.getRes("fruitbg_mp3");
            GameData.channelBg = soundBg.play(0, 0);
        }
    };
    SettingPage.prototype.shakeChange = function (evt) {
        console.log("shakeChange:  " + evt.target.selected);
        var txtShake = (evt.currentTarget);
        var bSelected = evt.currentTarget.selected;
        if (bSelected) {
            txtShake.label = "OFF";
            egret.localStorage.setItem("shakeON", "false");
        }
        else {
            txtShake.label = "ON";
            egret.localStorage.setItem("shakeON", "true");
        }
    };
    SettingPage.prototype.backHome = function () {
        console.log("back home");
        Observer.getInstance().fire(Commands.CLOSE_SETTING);
    };
    SettingPage.getInstance = function () {
        if (this._instance === undefined) {
            this._instance = new SettingPage();
        }
        return this._instance;
    };
    SettingPage.destroyInstance = function () {
        this._instance = undefined;
    };
    return SettingPage;
}(eui.Component));
__reflect(SettingPage.prototype, "SettingPage");
//# sourceMappingURL=SettingPage.js.map