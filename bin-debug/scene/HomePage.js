/**
 * 主界面
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
var FruitHomePage = (function (_super) {
    __extends(FruitHomePage, _super);
    function FruitHomePage() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/eui/HomePage.exml";
        _this.init();
        return _this;
    }
    /**
     * 初始化
     */
    FruitHomePage.prototype.init = function () {
        // 添加顶部动画
        GameUtil.showSceneAnimation(this.grpscale);
        this.addEffects();
        // 添加事件
        this.addEvents();
        // 添加背景音乐
        var strFlag = egret.localStorage.getItem("soundON");
        if (strFlag == null || strFlag === "true") {
            this.addBgSound();
        }
        var iCount = 0;
        for (var i = 0; i < 12; i++) {
            var strPropName = egret.localStorage.getItem("shopprop" + i);
            if (strPropName) {
                iCount++;
            }
        }
        this.lblnum.text = iCount == 0 ? "1" : iCount.toString();
    };
    /**
     * 添加顶部动画
     */
    FruitHomePage.prototype.addEffects = function () {
        // newEffect 光点特效
        // egret.setTimeout(function () {
        //     Effects.floatUpdown(this.contentTip, 500, true);
        //     Effects.rotate(this.ringDojo, 32000, true, false);
        //     Effects.rotate(this.contentDojo, 24000, true, false);
        //     Effects.rotate(this.ringNewGame, 30000, true, false);
        //     Effects.rotate(this.contentNewGame, 15000, true, false);
        //     Effects.rotate(this.ringQuit, 20000, true, true);
        //     this.sparkle = new Sparkle(30);
        //     this.sparkle.x = this.contentQuit.x - this.contentQuit.width / 2 + 5;
        //     this.sparkle.y = this.contentQuit.y - this.contentQuit.height /2 + 5;
        //     this.addChild(this.sparkle);
        // }, this, duration_headerBg + duration_headerTitle + duration_content);
        this.imagebottom.visible = false;
        this.imagefont.visible = false;
        this.test1.addEventListener("complete", this.onTween1GroupComplete, this);
        this.test2.addEventListener("complete", this.onTween2GroupComplete, this);
        this.test1.play();
        //杯子动画
        this.imgdrink.anchorOffsetX = 193 / 2;
        this.imgdrink.anchorOffsetY = 372 / 2;
        egret.Tween.get(this.imgdrink, { "loop": true }).wait(5000).to({ "rotation": 5 }, 170).wait(180).to({ "rotation": -4.5 }, 180).
            to({ "rotation": 3.5 }, 100).wait(50).to({ "rotation": -4 }, 100).
            to({ "rotation": 3 }, 200).wait(150).to({ "rotation": -2.5 }, 200).
            to({ "rotation": 3 }, 200).wait(200).to({ "rotation": -3.5 }, 150).
            to({ "rotation": 4.5 }, 170).wait(150).to({ "rotation": -5 }, 190);
        //开始按钮动画
        this.grpStart.anchorOffsetX = 413 / 2;
        this.grpStart.anchorOffsetY = 165 / 2;
        egret.Tween.get(this.grpStart, { "loop": true }).to({ "rotation": 10 }, 180).to({ "rotation": -10 }, 180).to({ "rotation": 0 }, 300).wait(150).
            to({ "scaleX": 1.1, "scaleY": 1.1 }, 600).to({ "scaleX": 1, "scaleY": 1 }, 600);
    };
    //动画1播放完毕
    FruitHomePage.prototype.onTween1GroupComplete = function () {
        this.imagebottom.visible = true;
        this.test2.play();
    };
    //动画2播放完毕
    FruitHomePage.prototype.onTween2GroupComplete = function () {
        this.imagefont.visible = true;
        this.test3.play();
    };
    /**
     * 添加触摸按钮事件
     */
    FruitHomePage.prototype.addEvents = function () {
        // this.contentQuit.touchEnabled = true;
        // this.contentQuit.once(egret.TouchEvent.TOUCH_TAP, function () {
        //     Observer.getInstance().fire(Commands.OPEN_QUIT);
        // }, this)
        this.settingbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goSetting, this);
        this.rankbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goRank, this);
        this.sharebtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goShare, this);
        this.shopbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goShop, this);
        //跳转到关卡选择
        this.grpStart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goSelect, this);
    };
    FruitHomePage.prototype.goSelect = function () {
        Observer.getInstance().fire(Commands.OPEN_LEVELSELECT);
    };
    FruitHomePage.prototype.goSetting = function () {
        Observer.getInstance().fire(Commands.OPNE_SETTING);
    };
    FruitHomePage.prototype.goRank = function () {
        Observer.getInstance().fire(Commands.OPEN_RANK);
    };
    FruitHomePage.prototype.goShare = function () {
        console.log("goShare");
    };
    FruitHomePage.prototype.goShop = function () {
        Observer.getInstance().fire(Commands.OPEN_SHOP);
    };
    /**
     * 添加背景音乐
     */
    FruitHomePage.prototype.addBgSound = function () {
        if (GameData.channelBg == null) {
            var soundBg = RES.getRes("fruitbg_mp3");
            GameData.channelBg = soundBg.play(0, 0);
        }
    };
    /**
     * 单例模式取单例
     */
    FruitHomePage.getInstance = function () {
        if (this._instance === undefined) {
            this._instance = new FruitHomePage();
        }
        return this._instance;
    };
    /**
     * 销毁单例
     */
    FruitHomePage.destroyInstance = function () {
        this._instance = undefined;
    };
    return FruitHomePage;
}(eui.Component));
__reflect(FruitHomePage.prototype, "FruitHomePage");
//# sourceMappingURL=HomePage.js.map