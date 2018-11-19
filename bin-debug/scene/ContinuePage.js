/**
 * 继续界面
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
var ContinuePage = (function (_super) {
    __extends(ContinuePage, _super);
    function ContinuePage() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/eui/ContinuePage.exml";
        _this.init();
        _this.countdown = 9;
        _this.timer = new egret.Timer(1000, 9);
        _this.timer.addEventListener(egret.TimerEvent.TIMER, _this.onTimerHandler, _this);
        _this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, _this.timerComFunc, _this);
        _this.timer.start();
        return _this;
    }
    ContinuePage.prototype.init = function () {
        this.addEvents();
    };
    ContinuePage.prototype.onTimerHandler = function (event) {
        this.lbltime.text = '0' + this.countdown;
        this.countdown--;
    };
    ContinuePage.prototype.timerComFunc = function () {
        Observer.getInstance().fire(Commands.CLOSE_NEW_GAME);
    };
    ContinuePage.prototype.addEvents = function () {
        //返回主界面
        this.lblNoThanks.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            Observer.getInstance().fire(Commands.CLOSE_NEW_GAME);
        }, this);
        //继续就关闭
        this.btngroup.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            Observer.getInstance().fire(Commands.CLOSE_CONTINUE);
        }, this);
    };
    ContinuePage.getInstance = function () {
        if (this._instance === undefined) {
            this._instance = new ContinuePage();
        }
        return this._instance;
    };
    ContinuePage.destroyInstance = function () {
        if (this._instance) {
            this._instance.timer.stop();
            this._instance = undefined;
        }
    };
    return ContinuePage;
}(eui.Component));
__reflect(ContinuePage.prototype, "ContinuePage");
//# sourceMappingURL=ContinuePage.js.map