/**
 * created by hh.m on 29/10/2018
 * 排名界面
 */

class RankPage extends eui.Component {

    private static _instance;
    public constructor () {
        super();
        this.skinName = "resource/eui_skins/eui/RankPage.exml";
        this.init();
    }

    //public jodoInfo;
    /*
    *文本改变值
    */
    private score1: eui.Label;
    private score2: eui.Label;
    private score3: eui.Label;
    private score4: eui.Label;
    private score5: eui.Label;
    private score6: eui.Label;
    private lbltime: eui.Label;
    private lbltime1: eui.Label;

    /*
    *缩放组
    */
    private grpscale: eui.Group;

    /*
    *按钮
    */
    private btngohome: eui.Button;
    

    private init () {
        GameUtil.showSceneAnimation(this.grpscale);
        this.addEvents();
    }

    //添加初始动画
    private addEffects() {

    }

    private addEvents () {
        this.btngohome.addEventListener(egret.TouchEvent.TOUCH_TAP, this.backHome, this);
    }

    /*
    *回到主界面
    */
    private backHome() {
        console.log("back home");
        Observer.getInstance().fire(Commands.CLOSE_RANK);
    }

    public static getInstance () {
        if (this._instance === undefined) {
            this._instance = new RankPage();
        }
        return this._instance;
    }

    public static destroyInstance() {
        this._instance = undefined;
    }
}