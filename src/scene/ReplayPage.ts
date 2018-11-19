/**
 * 无限模式重玩界面
 */

class FruitReplayPage extends eui.Component {

    private static _instance;
    public constructor () {
        super();
        this.skinName = "resource/eui_skins/eui/ReplayPage.exml";
        this.init();
    }

    //=================button 
    private btngohome: eui.Button;

    //=================group
    private replaygroup: eui.Group;
    private buygroup:eui.Group;

    //=================label
    private lblprogress: eui.Label; //进度
    private lblNum: eui.Label; //第几关
    private lblgold: eui.Label; //金币数
   
    private init () {
        var strGoldNum: string = egret.localStorage.getItem("goldNum");
        this.lblgold.text = (strGoldNum == null ? "0" : strGoldNum);  

        //显示经典场景的进度
        let strCurLevel = egret.localStorage.getItem("classicLevelNum");
        let strLevelNum = strCurLevel == null ? 1 : strCurLevel;
        this.lblNum.text = "Level "+strLevelNum;

        let strReplayNum = egret.localStorage.getItem("replayNum");
        let strCurFirstNum: number = strReplayNum == null ? 1 : 1 + Number(strReplayNum) % 4;
        this.lblprogress.text = strCurFirstNum +"/4";
        this.addEvents();
    }

    private addEvents () {
        //返回主界面
        this.btngohome.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            Observer.getInstance().fire(Commands.CLOSE_NEW_GAME);
        }, this)

        //购买
        this.buygroup.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            console.log("购买");
        }, this)

        //重玩
        this.replaygroup.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            Observer.getInstance().fire(Commands.CLOSE_REPLAY);
            if (GameData.sType === "dare") {
                GameData.bWuXianKnifeZero = false;
            }
        }, this)
    }

    public static getInstance () {
        if (this._instance === undefined) {
            this._instance = new FruitReplayPage();
        }
        return this._instance;
    }

    public static destroyInstance() {
        if (this._instance) {
            this._instance = undefined;
        }
    }
}