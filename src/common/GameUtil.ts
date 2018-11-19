class GameUtil {
    static createButton(text: string): egret.DisplayObjectContainer {
        let button = new egret.DisplayObjectContainer();
        let button_bg = this.createBitmapByName("button_png");
        let textField = this.createText(text);
        button.addChild(button_bg);
        button.addChild(textField);
        textField.x = button_bg.width / 2;
        textField.y = button_bg.height / 2;
        button.touchEnabled = true;
        button.touchChildren = false;
        button.anchorOffsetX = button_bg.width / 2;
        button.anchorOffsetY = button_bg.height / 2;
        return button;
    }

    static createText(text: string): egret.TextField {
        let textField = new egret.TextField();
        textField.text = text;
        textField.size = 120;
        textField.anchorOffsetX = textField.width / 2;
        textField.anchorOffsetY = textField.height / 2;
        return textField;
    }

    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    static createBitmapByName(name: string) {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

    /*
       根据name关键字返回texture对象
      *return a texture according to name keyword.
    */
    static getTextureByName(name: string) {
        let texture: egret.Texture = RES.getRes(name);
        return texture;
    }

    /*
       场景切换动画
    */
    static showSceneAnimation(sceneNode: eui.Group) {
        sceneNode.scaleX = 0.1;
        sceneNode.scaleY = 0.1;
        egret.Tween.get(sceneNode).to({"scaleX":1.1,"scaleY":1.1},300,egret.Ease.sineOut).
        to({"scaleX":1,"scaleY":1},80,egret.Ease.sineIn);
    }

    // 播放声音
    static playSound(sound: string) {
        let playSound:egret.Sound = RES.getRes( sound ); 
        let channel:egret.SoundChannel = playSound.play(0,1);
    }

    //是否播放音效
    static bPlaySound() {
        var strFlag: string = egret.localStorage.getItem("soundON");
        if (strFlag == null || strFlag === "true") {
            return true;
        }
        return false;
    }

    //是否震动
    static bShake() {
        var strFlag: string = egret.localStorage.getItem("shakeON");
        if (strFlag == null || strFlag === "true") {
            return true;
        }
        return false;
    }
}