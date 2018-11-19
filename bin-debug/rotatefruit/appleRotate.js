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
 * fruit-apple
 */
var AppleRotate = (function (_super) {
    __extends(AppleRotate, _super);
    function AppleRotate() {
        var _this = _super.call(this) || this;
        _this.img.texture = RES.getRes("apple_png");
        _this.img_part1.texture = RES.getRes("apple-1_png");
        _this.img_part2.texture = RES.getRes("apple-2_png");
        _this.img_part3.texture = RES.getRes("apple-3_png");
        _this.img_part4.texture = RES.getRes("apple-4_png");
        _this.img_part5.texture = RES.getRes("apple-5_png");
        _this.img_part6.texture = RES.getRes("apple-6_png");
        _this.img_part7.texture = RES.getRes("apple-7_png");
        _this.img_part8.texture = RES.getRes("apple-8_png");
        _this.initRotation = -45;
        _this.rotationIndex = 0;
        _this.effectIndex = 1;
        _this.splashColor = 0x87c310;
        _this.setSize();
        return _this;
    }
    return AppleRotate;
}(BaseRotateFruit));
__reflect(AppleRotate.prototype, "AppleRotate");
//# sourceMappingURL=appleRotate.js.map