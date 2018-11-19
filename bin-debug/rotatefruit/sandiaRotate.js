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
 * fruit-sandia
 */
var SandiaRotate = (function (_super) {
    __extends(SandiaRotate, _super);
    function SandiaRotate() {
        var _this = _super.call(this) || this;
        _this.img.texture = RES.getRes("watermelon_png");
        _this.img_part1.texture = RES.getRes("watermelon-1_png");
        _this.img_part2.texture = RES.getRes("watermelon-2_png");
        _this.img_part3.texture = RES.getRes("watermelon-3_png");
        _this.img_part4.texture = RES.getRes("watermelon-4_png");
        _this.img_part5.texture = RES.getRes("watermelon-5_png");
        _this.img_part6.texture = RES.getRes("watermelon-6_png");
        _this.img_part7.texture = RES.getRes("watermelon-7_png");
        _this.img_part8.texture = RES.getRes("watermelon-8_png");
        _this.initRotation = 85;
        _this.rotationIndex = 1;
        _this.effectIndex = 1;
        _this.splashColor = 0xff0000;
        _this.setSize();
        return _this;
    }
    return SandiaRotate;
}(BaseRotateFruit));
__reflect(SandiaRotate.prototype, "SandiaRotate");
//# sourceMappingURL=sandiaRotate.js.map