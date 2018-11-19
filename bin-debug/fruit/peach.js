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
 * fruit-peach
 */
var Peach = (function (_super) {
    __extends(Peach, _super);
    function Peach() {
        var _this = _super.call(this) || this;
        _this.img.texture = RES.getRes("pear_png");
        _this.img_part1.texture = RES.getRes("pear-1_png");
        _this.img_part2.texture = RES.getRes("pear-2_png");
        _this.img_part3.texture = RES.getRes("pear-3_png");
        _this.img_part4.texture = RES.getRes("pear-4_png");
        _this.img_part5.texture = RES.getRes("pear-5_png");
        _this.img_part6.texture = RES.getRes("pear-6_png");
        _this.img_part7.texture = RES.getRes("pear-7_png");
        _this.img_part8.texture = RES.getRes("pear-8_png");
        _this.initRotation = -45;
        _this.rotationIndex = 0;
        _this.splashColor = 0xf8860d;
        _this.setSize();
        return _this;
    }
    return Peach;
}(BaseFruit));
__reflect(Peach.prototype, "Peach");
//# sourceMappingURL=peach.js.map