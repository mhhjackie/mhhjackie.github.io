/**
 * 奖励自动弹窗界面
 */

class NewAwardPage extends eui.Component {

    private static _instance;
    public constructor () {
        super();
        this.skinName = "resource/eui_skins/eui/AwardPage.exml";
        this.init();
    }

    private lblgold: eui.Label;
    private countdown: number;

    //经典模式
    private imgpic: eui.Image;

    //无尽模式
    private imggold1: eui.Image;
    private imggold2: eui.Image;
    private imggold3: eui.Image;
    private lblscore: eui.Label;

    private init () {
        var strGoldNum: string = egret.localStorage.getItem("goldNum");
        this.lblgold.text = (strGoldNum == null ? "0" : strGoldNum);  

        if (GameData.sType === "classic") {
            this.imgpic.visible = true;
            this.imggold1.visible = false;
            this.imggold2.visible = false;
            this.imggold3.visible = false;
            this.lblscore.visible = false;
            this.imgpic.texture = GameUtil.getTextureByName(GameData.strImgName);
        }else {
            this.imgpic.visible = false;
            this.imggold1.visible = true;
            this.imggold2.visible = true;
            this.imggold3.visible = true;
            this.lblscore.visible = true;
        }

        this.countdown = 3;
        let timer = new egret.Timer(1000, this.countdown);
        timer.addEventListener(egret.TimerEvent.TIMER, this.onTimerHandler, this);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComFunc, this);
        timer.start();
    }

    private onTimerHandler(event:egret.TimerEvent):void
    {
        this.countdown--;
    }

    private timerComFunc() {
        if (GameData.sType === "dare") {
            GameData.bWuXianOpenWin = false; //输了一次变为false
            GameData.bWuXianKnifeZero = false;
        }
        Observer.getInstance().fire(Commands.CLOSE_AWARD);
    }

    public static getInstance () {
        if (this._instance === undefined) {
            this._instance = new NewAwardPage();
        }
        return this._instance;
    }

    public static destroyInstance() {
        if (this._instance) {
            this._instance = undefined;
        }
    }
}