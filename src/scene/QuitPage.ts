/**
 * QUIT界面
 */

class FruitQuitPage extends eui.Component {

    private static _instance;
    public constructor () {
        super();
        this.skinName = "resource/eui_skins/eui/QuitPage.exml";
        this.init();
    }

    private backbtn: eui.Button;
    private continuebtn: eui.Button;
    private groupgray: eui.Group;
    private imgtouch: eui.Image;

    private init () {
        this.addEvents();
    }

    private addEvents () {
        //返回主界面
        this.backbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            Observer.getInstance().fire(Commands.CLOSE_NEW_GAME);
        }, this)

        //继续就关闭
        this.continuebtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            Observer.getInstance().fire(Commands.CLOSE_QUIT);
        }, this)
    }

    public static getInstance () {
        if (this._instance === undefined) {
            this._instance = new FruitQuitPage();
        }
        return this._instance;
    }

    public static destroyInstance() {
        if (this._instance) {
            this._instance = undefined;
        }
    }
}