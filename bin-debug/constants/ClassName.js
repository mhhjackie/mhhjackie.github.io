/**
 * 类名常量
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ClassName = (function () {
    function ClassName() {
    }
    // 水果类名
    ClassName.APPLE = function () { return new Apple(); };
    ClassName.BANANA = function () { return new Banana(); };
    ClassName.BASAHA = function () { return new Basaha(); };
    ClassName.PEACH = function () { return new Peach(); };
    ClassName.SANDIA = function () { return new Sandia(); };
    ClassName.COCONUT = function () { return new Coconut(); };
    ClassName.KIWI = function () { return new Kiwi(); };
    ClassName.LEMON = function () { return new Lemon(); };
    ClassName.LIME = function () { return new Lime(); };
    ClassName.ORANGE = function () { return new Orange(); };
    ClassName.PINEAPPLE = function () { return new Pineapple(); };
    ClassName.PLUM = function () { return new Plum(); };
    ClassName.POMEGRANATE = function () { return new Pomegranate(); };
    ClassName.REAAPPLE = function () { return new RedApple(); };
    ClassName.TOMATO = function () { return new Tomato(); };
    //旋转水果类名
    ClassName.APPLEROTATE = function () { return new AppleRotate(); };
    ClassName.BANANAROTATE = function () { return new BananaRotate(); };
    ClassName.BASAHAROTATE = function () { return new BasahaRotate(); };
    ClassName.PEACHROTATE = function () { return new PeachRotate(); };
    ClassName.SANDIAROTATE = function () { return new SandiaRotate(); };
    ClassName.COCONUTROTATE = function () { return new CoconutRotate(); };
    ClassName.KIWIROTATE = function () { return new KiwiRotate(); };
    ClassName.LEMONROTATE = function () { return new LemonRotate(); };
    ClassName.LIMEROTATE = function () { return new LimeRotate(); };
    ClassName.ORANGEROTATE = function () { return new OrangeRotate(); };
    ClassName.PINEAPPLEROTATE = function () { return new PineappleRotate(); };
    ClassName.PLUMROTATE = function () { return new PlumRotate(); };
    ClassName.POMEGRANATEROTATE = function () { return new PomegranateRotate(); };
    ClassName.REAAPPLEROTATE = function () { return new RedAppleRotate(); };
    ClassName.TOMATOROTATE = function () { return new TomatoRotate(); };
    return ClassName;
}());
__reflect(ClassName.prototype, "ClassName");
//# sourceMappingURL=ClassName.js.map