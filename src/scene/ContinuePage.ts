/**
 * 继续界面
 */

class ContinuePage extends eui.Component {

    private static _instance;
    public constructor () {
        super();
        this.skinName = "resource/eui_skins/eui/ContinuePage.exml";
        this.init();
        this.countdown = 9;
        this.timer = new egret.Timer(1000, 9);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.onTimerHandler, this);
        this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComFunc, this);
        this.timer.start();
    }

    private lblNoThanks: eui.Label;
    private btngroup: eui.Group;
    private lbltime: eui.Label; //倒计时数字
    private countdown: number;
    private timer: egret.Timer;

    private init () {
        this.addEvents();
    }

    private onTimerHandler(event:egret.TimerEvent):void
    {
        this.lbltime.text = '0' + this.countdown;
        this.countdown--;
    }

    private timerComFunc() {
        Observer.getInstance().fire(Commands.CLOSE_NEW_GAME);
    }

    private addEvents () {
        //返回主界面
        this.lblNoThanks.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            Observer.getInstance().fire(Commands.CLOSE_NEW_GAME);
        }, this)

        //继续就关闭
        this.btngroup.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            Observer.getInstance().fire(Commands.CLOSE_CONTINUE);
        }, this)
    }

    public static getInstance () {
        if (this._instance === undefined) {
            this._instance = new ContinuePage();
        }
        return this._instance;
    }

    public static destroyInstance() {
        if (this._instance) {
            this._instance.timer.stop();
            this._instance = undefined;
        }
    }
}