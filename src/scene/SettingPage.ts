/**
 * created by hh.m on 29/10/2018
 * 设置界面
 */

class SettingPage extends eui.Component {

    private static _instance;
    public constructor () {
        super();
        this.skinName = "resource/eui_skins/eui/SettingPage.exml";
        this.init();
    }

    //public jodoInfo;
    /*
    *按钮设置
    */
    private btngohome: eui.Button;
    private togglesound: eui.ToggleSwitch;
    private toggleshake: eui.ToggleSwitch;

    /*
    *缩放组
    */
    private grpscale: eui.Group;    

    private init () {
        // 添加初始动画
        GameUtil.showSceneAnimation(this.grpscale);
        var strFlag: string = egret.localStorage.getItem("soundON");
        if (strFlag == null || strFlag === "true") {
            this.togglesound.label = "ON";
            this.togglesound.selected = false;
        }else {
            this.togglesound.label = "OFF";
            this.togglesound.selected = true;
        }

        var strShakeFlag: string = egret.localStorage.getItem("shakeON");
        if (strShakeFlag == null || strShakeFlag === "true") {
            this.toggleshake.label = "ON";
            this.toggleshake.selected = false;
        }else {
            this.toggleshake.label = "OFF";
            this.toggleshake.selected = true;
        }
        this.addEvents();
    }
    
    private addEvents () {
        //this.touchEnabled = true;
        // this.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
        //     Observer.getInstance().fire(Commands.CLOSE_JODO);
        // }, this)
        
        this.btngohome.addEventListener(egret.TouchEvent.TOUCH_TAP, this.backHome, this);
        this.togglesound.addEventListener(eui.UIEvent.CHANGE, this.soundChange, this);
        this.toggleshake.addEventListener(eui.UIEvent.CHANGE, this.shakeChange, this);
    }

    private soundChange(evt: eui.UIEvent) {
        console.log("soundChange:  " + evt.target.selected);
        let txtSound: eui.ToggleSwitch = <eui.ToggleSwitch>(evt.currentTarget);
        let bSelected = evt.currentTarget.selected;
    
        if (bSelected) {
            txtSound.label = "OFF";
            egret.localStorage.setItem("soundON", "false");
            if (GameData.channelBg) {
                GameData.channelBg.stop();
            }
        }else{
            txtSound.label = "ON";
            egret.localStorage.setItem("soundON", "true");
            var soundBg: egret.Sound = RES.getRes("fruitbg_mp3");
            GameData.channelBg = soundBg.play(0, 0);
        }
    }

    private shakeChange(evt: eui.UIEvent) {
       console.log("shakeChange:  " + evt.target.selected);
        let txtShake: eui.ToggleSwitch = <eui.ToggleSwitch>(evt.currentTarget);
        let bSelected = evt.currentTarget.selected;

        if (bSelected) {
            txtShake.label = "OFF";
            egret.localStorage.setItem("shakeON", "false");
        }else{
            txtShake.label = "ON";
            egret.localStorage.setItem("shakeON", "true");
        }
    }

    private backHome() {
        console.log("back home");
        Observer.getInstance().fire(Commands.CLOSE_SETTING);
    }

    public static getInstance () {
        if (this._instance === undefined) {
            this._instance = new SettingPage();
        }
        return this._instance;
    }

    public static destroyInstance() {
        this._instance = undefined;
    }
}