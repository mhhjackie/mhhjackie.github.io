var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameUtil = (function () {
    function GameUtil() {
    }
    GameUtil.createButton = function (text) {
        var button = new egret.DisplayObjectContainer();
        var button_bg = this.createBitmapByName("button_png");
        var textField = this.createText(text);
        button.addChild(button_bg);
        button.addChild(textField);
        textField.x = button_bg.width / 2;
        textField.y = button_bg.height / 2;
        button.touchEnabled = true;
        button.touchChildren = false;
        button.anchorOffsetX = button_bg.width / 2;
        button.anchorOffsetY = button_bg.height / 2;
        return button;
    };
    GameUtil.createText = function (text) {
        var textField = new egret.TextField();
        textField.text = text;
        textField.size = 120;
        textField.anchorOffsetX = textField.width / 2;
        textField.anchorOffsetY = textField.height / 2;
        return textField;
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    GameUtil.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    /*
       根据name关键字返回texture对象
      *return a texture according to name keyword.
    */
    GameUtil.getTextureByName = function (name) {
        var texture = RES.getRes(name);
        return texture;
    };
    /*
       场景切换动画
    */
    GameUtil.showSceneAnimation = function (sceneNode) {
        sceneNode.scaleX = 0.1;
        sceneNode.scaleY = 0.1;
        egret.Tween.get(sceneNode).to({ "scaleX": 1.1, "scaleY": 1.1 }, 300, egret.Ease.sineOut).
            to({ "scaleX": 1, "scaleY": 1 }, 80, egret.Ease.sineIn);
    };
    // 播放声音
    GameUtil.playSound = function (sound) {
        var playSound = RES.getRes(sound);
        var channel = playSound.play(0, 1);
    };
    //是否播放音效
    GameUtil.bPlaySound = function () {
        var strFlag = egret.localStorage.getItem("soundON");
        if (strFlag == null || strFlag === "true") {
            return true;
        }
        return false;
    };
    //是否震动
    GameUtil.bShake = function () {
        var strFlag = egret.localStorage.getItem("shakeON");
        if (strFlag == null || strFlag === "true") {
            return true;
        }
        return false;
    };
    return GameUtil;
}());
__reflect(GameUtil.prototype, "GameUtil");
//# sourceMappingURL=GameUtil.js.map