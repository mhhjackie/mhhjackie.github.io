/**
 * created by hh.m on 30/10/2018
 * 小李飞刀
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
var Knife = (function (_super) {
    __extends(Knife, _super);
    function Knife(strName) {
        var _this = _super.call(this) || this;
        _this.init(strName);
        return _this;
    }
    // flappy bird 加速度
    //private acceleration:number = 0;
    Knife.prototype.init = function (strName) {
        this._role = GameUtil.createBitmapByName(strName);
        this.addChild(this._role);
    };
    //飞刀在空中飞舞的方法
    Knife.prototype.fly = function () {
        this.y -= GameData.flatSpeed * 5;
        egret.Tween.get(this, { loop: true }).to({ rotation: 360 }, 130);
    };
    Knife.prototype.update = function (timeStamp) {
        // 不停的更新小球的位置
        this.fly();
    };
    return Knife;
}(GameObject));
__reflect(Knife.prototype, "Knife");
//# sourceMappingURL=Knife.js.map