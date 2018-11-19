/**
 * QUIT界面
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
var FruitQuitPage = (function (_super) {
    __extends(FruitQuitPage, _super);
    function FruitQuitPage() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/eui/QuitPage.exml";
        _this.init();
        return _this;
    }
    FruitQuitPage.prototype.init = function () {
        this.addEvents();
    };
    FruitQuitPage.prototype.addEvents = function () {
        //返回主界面
        this.backbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            Observer.getInstance().fire(Commands.CLOSE_NEW_GAME);
        }, this);
        //继续就关闭
        this.continuebtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            Observer.getInstance().fire(Commands.CLOSE_QUIT);
        }, this);
    };
    FruitQuitPage.getInstance = function () {
        if (this._instance === undefined) {
            this._instance = new FruitQuitPage();
        }
        return this._instance;
    };
    FruitQuitPage.destroyInstance = function () {
        if (this._instance) {
            this._instance = undefined;
        }
    };
    return FruitQuitPage;
}(eui.Component));
__reflect(FruitQuitPage.prototype, "FruitQuitPage");
//# sourceMappingURL=QuitPage.js.map