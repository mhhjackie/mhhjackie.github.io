/**
 * created by hh.m on 29/10/2018
 * 排名界面
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
var RankPage = (function (_super) {
    __extends(RankPage, _super);
    function RankPage() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/eui/RankPage.exml";
        _this.init();
        return _this;
    }
    RankPage.prototype.init = function () {
        GameUtil.showSceneAnimation(this.grpscale);
        this.addEvents();
    };
    //添加初始动画
    RankPage.prototype.addEffects = function () {
    };
    RankPage.prototype.addEvents = function () {
        this.btngohome.addEventListener(egret.TouchEvent.TOUCH_TAP, this.backHome, this);
    };
    /*
    *回到主界面
    */
    RankPage.prototype.backHome = function () {
        console.log("back home");
        Observer.getInstance().fire(Commands.CLOSE_RANK);
    };
    RankPage.getInstance = function () {
        if (this._instance === undefined) {
            this._instance = new RankPage();
        }
        return this._instance;
    };
    RankPage.destroyInstance = function () {
        this._instance = undefined;
    };
    return RankPage;
}(eui.Component));
__reflect(RankPage.prototype, "RankPage");
//# sourceMappingURL=RankPage.js.map