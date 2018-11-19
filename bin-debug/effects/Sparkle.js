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
 * 火花特效
 */
var Sparkle = (function (_super) {
    __extends(Sparkle, _super);
    function Sparkle(emission) {
        var _this = _super.call(this) || this;
        _this.emitterX = 60;
        _this.emitterY = 60;
        _this.emission = emission;
        _this.width = _this.emitterX * 2;
        _this.height = _this.emitterY * 2;
        _this.anchorOffsetX = _this.emitterX;
        _this.anchorOffsetY = _this.emitterY;
        _this.start();
        return _this;
    }
    /**
     * 设置火花特效的时间驱动
     */
    Sparkle.prototype.start = function () {
        this.sparkleTimer = new egret.Timer(this.emission, 0);
        this.sparkleTimer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        this.sparkleTimer.start();
    };
    /**
     * 创建粒子并添加到舞台
     */
    Sparkle.prototype.timerFunc = function () {
        this.addChild(this.creatParticle());
    };
    Sparkle.prototype.creatParticle = function () {
        /* 生成火花 */
        var singleParticle = new eui.Image();
        singleParticle.source = "flash_png";
        singleParticle.width = 25;
        singleParticle.height = 7;
        singleParticle.anchorOffsetX = singleParticle.width / 2;
        singleParticle.anchorOffsetY = singleParticle.height / 2;
        singleParticle.x = this.emitterX;
        singleParticle.y = this.emitterY;
        singleParticle.rotation = Math.random() * 360;
        var theta = singleParticle.rotation / 180 * Math.PI;
        /* 为每个火花添加动画，动画执行完毕后从舞台中移除 */
        egret.Tween.get(singleParticle).to({
            x: this.emitterX * (Math.cos(theta) + 1),
            y: this.emitterX * (Math.sin(theta) + 1),
            scaleX: 0.2,
            scaleY: 0.2
        }, (Math.random() - 0.5) * 100 + 400).call(function () {
            this.parent.removeChild(this);
        }, singleParticle);
        return singleParticle;
    };
    return Sparkle;
}(eui.Component));
__reflect(Sparkle.prototype, "Sparkle");
//# sourceMappingURL=Sparkle.js.map