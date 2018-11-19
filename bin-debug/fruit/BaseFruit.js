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
/**
 * 水果基类
 */
var BaseFruit = (function (_super) {
    __extends(BaseFruit, _super);
    function BaseFruit() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    /**
     * 初始化水果的基本属性，添加时间和动画
     */
    BaseFruit.prototype.init = function () {
        this.img = new egret.Bitmap();
        this.img_part1 = new egret.Bitmap();
        this.img_part2 = new egret.Bitmap();
        this.img_part3 = new egret.Bitmap();
        this.img_part4 = new egret.Bitmap();
        this.img_part5 = new egret.Bitmap();
        this.img_part6 = new egret.Bitmap();
        this.img_part7 = new egret.Bitmap();
        this.img_part8 = new egret.Bitmap();
        this.addChild(this.img);
        this.accelerateX = 0;
        this.accelerateY = 700;
        this.accelerateRotate = 0;
        this.speedX = (Math.random() - 0.5) * 180;
        this.speedY = -700;
        this.speedRotate = (Math.random() - 0.5) * 360;
        var ranNum = Math.floor(Math.random() * 2);
        if (ranNum == 0) {
            this.speedX = 4 * 180;
            this.x = this.initX = -100;
        }
        else {
            this.speedX = -4 * 180;
            this.x = this.initX = GameData.stageWidth + 100;
        }
        this.y = this.initY = Math.floor(Math.random() * (GameData.stageHeight - 500) + 400);
        this.addEventListener(egret.Event.ENTER_FRAME, this.freeFalling, this);
        this.beginTime = egret.getTimer();
        this.touchEnabled = true;
        //this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.cutFruit, this);
        this.cutIndex = false;
    };
    /**
     * 自由落体位置计算
     * @param evt
     */
    BaseFruit.prototype.freeFalling = function (evt) {
        var now = (egret.getTimer() - this.beginTime) / 1000;
        this.x = this.initX + now * this.speedX;
        this.y = this.speedY * now + 0.5 * this.accelerateY * now * now + this.initY;
        this.img.rotation = now * this.speedRotate;
        if (this.y > 530 && !this.cutIndex) {
            //this.addFailed();
            this.cutIndex = true;
        }
    };
    /**
     * 设置水果的属性
     */
    BaseFruit.prototype.setSize = function () {
        this.anchorOffsetX = this.width / 2;
        this.anchorOffsetY = this.height / 2;
        this.img.anchorOffsetX = this.img.width / 2;
        this.img.anchorOffsetY = this.img.height / 2;
        for (var i = 1; i <= 8; i++) {
            var imgPart = this["img_part" + i];
            imgPart.anchorOffsetX = this.img.width / 2;
            imgPart.anchorOffsetY = this.img.height / 2;
        }
    };
    /**
     * 切开水果后的动作
     */
    BaseFruit.prototype.cutFruit = function () {
        //this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.cutFruit, this);
        this.cutIndex = true;
        /* 切开水果的刀光动画 */
        this.cutEffect();
        //this.splitEffect();
        /* 添加音效 */
        this.addCutSound();
        /* 水果一分为二 */
        /* 果汁溅射动画 */
        //this.splashEffectFun();
        /* 游戏逻辑，分数加一 */
        //this.addScore();
    };
    BaseFruit.prototype.splitEffect = function () {
        var texture = RES.getRes("star3_png");
        var config = RES.getRes("fireworks_json");
        this.cutSystem = new particle.GravityParticleSystem(texture, config);
        this.cutSystem.emissionTime = 1000;
        this.cutSystem.x = this.img.x - this.img.width;
        this.cutSystem.y = this.img.y - this.img.height * 1.5;
        this.addChild(this.cutSystem);
        this.cutSystem.start();
    };
    /**
     * 添加音效
     */
    BaseFruit.prototype.addCutSound = function () {
        var soundCut = RES.getRes("fruitbingo_mp3");
        var channelCut = soundCut.play(0, 1);
    };
    /**
     * 水果一分为二
     */
    BaseFruit.prototype.cutEffect = function () {
        if (this.img.parent) {
            this.removeChild(this.img);
        }
        for (var i = 1; i <= 8; i++) {
            var imgPart = this["img_part" + i];
            this.addChild(imgPart);
        }
        this.splitEffect();
        //this.img_part1.rotation -= 10;
        //this.img_part2.rotation += 10;
        egret.setTimeout(function () {
            if (this.cutSystem.parent) {
                this.removeChild(this.cutSystem);
            }
        }, this, 500);
        this.addEventListener(egret.Event.ENTER_FRAME, this.cutFreeFalling, this);
    };
    /**
     * 果汁溅射动画
     */
    BaseFruit.prototype.splashEffectFun = function () {
        if (this.splashColor) {
            this.splashEffect = new SplashEffect(this.splashColor);
            var initX = this.splashEffect.x = this.x - 35;
            var initY = this.splashEffect.y = this.y - 35;
            egret.setTimeout(function () {
                if (this.splashEffect.parent) {
                    this.parent.removeChild(this.splashEffect);
                }
            }, this, 400);
        }
    };
    /**
     * 被切开的水果的位置
     */
    BaseFruit.prototype.cutFreeFalling = function () {
        if (this.img_part1.parent) {
            for (var i = 1; i <= 8; i++) {
                var imgPart = this["img_part" + i];
                if (i % 2 == 0) {
                    imgPart.x += 2;
                    imgPart.rotation += 2;
                }
                else {
                    imgPart.x -= 2;
                    imgPart.rotation -= 2;
                }
            }
        }
    };
    /**
     * 积分
     */
    BaseFruit.prototype.addScore = function () {
        //Observer.getInstance().fire(Commands.ADD_SCORE);
    };
    /**
     * 结束
     */
    BaseFruit.prototype.addFailed = function () {
        //var self = this;
        // var loseLogo: egret.Bitmap = new egret.Bitmap();
        // loseLogo.texture = RES.getRes('lose_png');
        // loseLogo.anchorOffsetX = loseLogo.width / 2;
        // loseLogo.anchorOffsetY = loseLogo.height / 2;
        // loseLogo.scaleX = 0;
        // loseLogo.scaleY = 0;
        // loseLogo.x = this.x - this.width / 2;
        // loseLogo.y = 430;
        // this.parent.addChild(loseLogo);
        // var tw_loseLogo = egret.Tween.get(loseLogo).to({scaleX: 1.1, scaleY: 1.1}, 600, egret.Ease.backOut).wait(600).call(function(){
        //     self.parent.removeChild(loseLogo);
        // });
        //Observer.getInstance().fire(Commands.ADD_FAILED);
    };
    return BaseFruit;
}(egret.DisplayObjectContainer));
__reflect(BaseFruit.prototype, "BaseFruit");
//# sourceMappingURL=BaseFruit.js.map