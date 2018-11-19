/**
 * 主界面
 */

class FruitHomePage extends eui.Component {

    private static _instance;
    public constructor () {
        super();
        this.skinName = "resource/eui_skins/eui/HomePage.exml";
        this.init();
    }

    public sparkle: Sparkle;

    /*
    * 按钮及图片特效
    */
    private settingbtn: eui.Button;
    private rankbtn: eui.Button;
    private sharebtn: eui.Button;
    private shopbtn: eui.Button;
    private grpStart: eui.Group; //有动画
    private imgdrink: eui.Image; //有动画
    private test1:egret.tween.TweenGroup; //动画1
    private imagebottom: eui.Image; //动画中部
    private test2:egret.tween.TweenGroup; //动画2
    private imagefont: eui.Image; //字体动画
    private test3:egret.tween.TweenGroup; //动画3
    private lblnum: eui.Label; //道具商店已解锁的道具数

    /*
    *缩放组
    */
    private grpscale: eui.Group;

    /**
     * 初始化
     */
    private init () {
        // 添加顶部动画
        GameUtil.showSceneAnimation(this.grpscale);
        this.addEffects();
        // 添加事件
        this.addEvents();
        // 添加背景音乐
        var strFlag: string = egret.localStorage.getItem("soundON");
        
        if (strFlag == null || strFlag === "true") {
            this.addBgSound();
        }

        let iCount: number = 0;
        for (let i = 0; i < 12; i++) {
            let strPropName = egret.localStorage.getItem("shopprop"+i);
            if (strPropName) {
                iCount++;
            }
        }
        this.lblnum.text = iCount == 0 ? "1" : iCount.toString();
    }

    /**
     * 添加顶部动画
     */
    private addEffects() {
        // newEffect 光点特效
        // egret.setTimeout(function () {
        //     Effects.floatUpdown(this.contentTip, 500, true);
        //     Effects.rotate(this.ringDojo, 32000, true, false);
        //     Effects.rotate(this.contentDojo, 24000, true, false);
        //     Effects.rotate(this.ringNewGame, 30000, true, false);
        //     Effects.rotate(this.contentNewGame, 15000, true, false);
        //     Effects.rotate(this.ringQuit, 20000, true, true);
        //     this.sparkle = new Sparkle(30);
        //     this.sparkle.x = this.contentQuit.x - this.contentQuit.width / 2 + 5;
        //     this.sparkle.y = this.contentQuit.y - this.contentQuit.height /2 + 5;
        //     this.addChild(this.sparkle);
        // }, this, duration_headerBg + duration_headerTitle + duration_content);

        this.imagebottom.visible = false;
        this.imagefont.visible = false;
        this.test1.addEventListener("complete", this.onTween1GroupComplete, this);
        this.test2.addEventListener("complete", this.onTween2GroupComplete, this);
        this.test1.play();

        //杯子动画
        this.imgdrink.anchorOffsetX = 193/2;
        this.imgdrink.anchorOffsetY = 372/2;
        egret.Tween.get(this.imgdrink,{"loop":true}).wait(5000).to({"rotation":5},170).wait(180).to({"rotation":-4.5},180).
                to({"rotation":3.5},100).wait(50).to({"rotation":-4},100).
                to({"rotation":3},200).wait(150).to({"rotation":-2.5},200).
                to({"rotation":3},200).wait(200).to({"rotation":-3.5},150).
                to({"rotation":4.5},170).wait(150).to({"rotation":-5},190);
        
        //开始按钮动画
        this.grpStart.anchorOffsetX = 413/2;
        this.grpStart.anchorOffsetY = 165/2;
        egret.Tween.get(this.grpStart,{"loop":true}).to({"rotation":10},180).to({"rotation":-10},180).to({"rotation":0},300).wait(150).
            to({"scaleX":1.1,"scaleY":1.1},600).to({"scaleX":1,"scaleY":1}, 600);
    }

    //动画1播放完毕
    private onTween1GroupComplete(): void {
        this.imagebottom.visible = true;
        this.test2.play();
    }

    //动画2播放完毕
    private onTween2GroupComplete(): void {
        this.imagefont.visible = true;
        this.test3.play();
    }

    /**
     * 添加触摸按钮事件
     */
    private addEvents() {
        // this.contentQuit.touchEnabled = true;
        // this.contentQuit.once(egret.TouchEvent.TOUCH_TAP, function () {
        //     Observer.getInstance().fire(Commands.OPEN_QUIT);
        // }, this)
        this.settingbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goSetting, this);
        this.rankbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goRank, this);
        this.sharebtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goShare, this);
        this.shopbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goShop, this);

        //跳转到关卡选择
        this.grpStart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goSelect, this);
    }

    private goSelect() {
        Observer.getInstance().fire(Commands.OPEN_LEVELSELECT);
    }

    private goSetting() {
        Observer.getInstance().fire(Commands.OPNE_SETTING);
    }

    private goRank() {
        Observer.getInstance().fire(Commands.OPEN_RANK);
    }

    private goShare() {
        console.log("goShare");
    }

    private goShop() {   
        Observer.getInstance().fire(Commands.OPEN_SHOP);
    }

    /**
     * 添加背景音乐
     */
    private addBgSound () {
        if (GameData.channelBg == null) {
            var soundBg: egret.Sound = RES.getRes("fruitbg_mp3");
            GameData.channelBg = soundBg.play(0, 0);
        }
    }

    /**
     * 单例模式取单例
     */
    public static getInstance () {
        if (this._instance === undefined) {
            this._instance = new FruitHomePage();
        }
        return this._instance;
    }
    
    /**
     * 销毁单例
     */
    public static destroyInstance() {
        this._instance = undefined;
    }
}