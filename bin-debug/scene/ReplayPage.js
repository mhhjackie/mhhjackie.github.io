/**
 * 无限模式重玩界面
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
var FruitReplayPage = (function (_super) {
    __extends(FruitReplayPage, _super);
    function FruitReplayPage() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/eui/ReplayPage.exml";
        _this.init();
        return _this;
    }
    FruitReplayPage.prototype.init = function () {
        var strGoldNum = egret.localStorage.getItem("goldNum");
        this.lblgold.text = (strGoldNum == null ? "0" : strGoldNum);
        //显示经典场景的进度
        var strCurLevel = egret.localStorage.getItem("classicLevelNum");
        var strLevelNum = strCurLevel == null ? 1 : strCurLevel;
        this.lblNum.text = "Level " + strLevelNum;
        var strReplayNum = egret.localStorage.getItem("replayNum");
        var strCurFirstNum = strReplayNum == null ? 1 : 1 + Number(strReplayNum) % 4;
        this.lblprogress.text = strCurFirstNum + "/4";
        this.addEvents();
    };
    FruitReplayPage.prototype.addEvents = function () {
        //返回主界面
        this.btngohome.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            Observer.getInstance().fire(Commands.CLOSE_NEW_GAME);
        }, this);
        //购买
        this.buygroup.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            console.log("购买");
        }, this);
        //重玩
        this.replaygroup.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            Observer.getInstance().fire(Commands.CLOSE_REPLAY);
            if (GameData.sType === "dare") {
                GameData.bWuXianKnifeZero = false;
            }
        }, this);
    };
    FruitReplayPage.getInstance = function () {
        if (this._instance === undefined) {
            this._instance = new FruitReplayPage();
        }
        return this._instance;
    };
    FruitReplayPage.destroyInstance = function () {
        if (this._instance) {
            this._instance = undefined;
        }
    };
    return FruitReplayPage;
}(eui.Component));
__reflect(FruitReplayPage.prototype, "FruitReplayPage");
//# sourceMappingURL=ReplayPage.js.map