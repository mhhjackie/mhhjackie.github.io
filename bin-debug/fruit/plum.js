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
var Plum = (function (_super) {
    __extends(Plum, _super);
    function Plum() {
        var _this = _super.call(this) || this;
        _this.img.texture = RES.getRes("plum_png");
        _this.img_part1.texture = RES.getRes("plum-1_png");
        _this.img_part2.texture = RES.getRes("plum-2_png");
        _this.img_part3.texture = RES.getRes("plum-3_png");
        _this.img_part4.texture = RES.getRes("plum-4_png");
        _this.img_part5.texture = RES.getRes("plum-5_png");
        _this.img_part6.texture = RES.getRes("plum-6_png");
        _this.img_part7.texture = RES.getRes("plum-7_png");
        _this.img_part8.texture = RES.getRes("plum-8_png");
        _this.initRotation = 85;
        _this.rotationIndex = 1;
        _this.splashColor = 0xff0000;
        _this.setSize();
        return _this;
    }
    return Plum;
}(BaseFruit));
__reflect(Plum.prototype, "Plum");
//# sourceMappingURL=plum.js.map