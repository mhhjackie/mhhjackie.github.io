/**
 * created by hh.m on 29/10/2018
 * 选关界面
 */

class LevelSelectPage extends eui.Component {

    private static _instance;
    public constructor () {
        super();
        this.skinName = "resource/eui_skins/eui/LevelSelectPage.exml";
        this.init();
    }

    //public jodoInfo;
    /*
    *文本改变值
    */
    private levelclassic: eui.Label;
    private leveldare: eui.Label;
    /*
    *按钮和组
    */
    private btngohome: eui.Button;
    private groupclassic: eui.Group;
    private groupdare: eui.Group;

    /*
    *缩放组
    */
    private grpscale: eui.Group;
    
    private init () {
        GameUtil.showSceneAnimation(this.grpscale);
        var strClassiclevel:string = egret.localStorage.getItem("classicLevelNum");
        this.levelclassic.text = "LEVEL " + (strClassiclevel == null ? GameData.iClassicLevel : strClassiclevel);

        var strlevel:string = egret.localStorage.getItem("dareLevelNum");
        this.leveldare.text = "LEVEL " + (strlevel == null ? "1" : strlevel);
        this.addEvents();
    }

    private addEvents () {
        this.btngohome.addEventListener(egret.TouchEvent.TOUCH_TAP, this.backHome, this);
        this.groupclassic.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goGame, this);
        this.groupdare.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goGame, this);
    }

    private goGame(evt:egret.TouchEvent) {
         if(evt.currentTarget == this.groupclassic) {
             GameData.sType = "classic";
             Observer.getInstance().fire(Commands.OPEN_NEW_GAME);
         }else if(evt.currentTarget == this.groupdare) {
             GameData.sType = "dare";
             Observer.getInstance().fire(Commands.OPEN_NEW_GAME);
         }
    }

    /*
    *回到主界面
    */
    private backHome() {
        Observer.getInstance().fire(Commands.CLOSE_LEVELSELECT);
    }

    public static getInstance () {
        if (this._instance === undefined) {
            this._instance = new LevelSelectPage();
        }
        return this._instance;
    }

    public static destroyInstance() {
        if (this._instance) {
            this._instance = undefined;
        }
    }
}