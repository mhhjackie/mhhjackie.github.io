/**
 * 礼物界面
 */

class FruitGiftPage extends eui.Component {

    private static _instance;
    public constructor () {
        super();
        this.skinName = "resource/eui_skins/eui/GiftPage.exml";
        this.init();
    }

    private progressgift: eui.ProgressBar;

    //=====================group
    private nextgroup: eui.Group;
    private groupgift: eui.Group;//需要移动

    //=====================img
    private img1: eui.Image;
    private img2: eui.Image;
    private img3: eui.Image;
    private img4: eui.Image;
    private imgbtn: eui.Image;

    //=====================label
    private lblgold: eui.Label;
    private lblnum: eui.Label;
    private lbltext: eui.Label;
    
    //=====================pos arr
    private groupGiftPos: number[];
    private iNewestNum: number;

    //=====================
    private imggou1: egret.Bitmap;
    private imggou2: egret.Bitmap;
    private imggou3: egret.Bitmap;

    //======================
    private iPicIndex: number;

    private init () {
        var strGoldNum: string = egret.localStorage.getItem("goldNum");
        this.lblgold.text = (strGoldNum == null ? "0" : strGoldNum);  

        this.groupGiftPos = [236,333,426,515];
        let strNewestNum = egret.localStorage.getItem("classicLevelNum");
        let rightNum = Number(strNewestNum) % 4 === 0 ? 4 : Number(strNewestNum) % 4;
        this.iNewestNum = strNewestNum == null ? GameData.iClassicLevel : rightNum;

        //设置图片
        var strGobletNum: string = egret.localStorage.getItem("gobletNum");
        let picNum: number = strGobletNum == null ? 1 : Number(strGobletNum);

        let iBeginIndex: number;
        let iEndIndex: number;
        let iOuShu: boolean;
        let iArrImg: number[];
        this.iPicIndex = picNum;

        iArrImg = [];
        console.log("iPicIndex:  " + this.iPicIndex);
        if ((this.iPicIndex - 2) % 4 == 0) {
            iBeginIndex = this.iPicIndex - 1;
            iEndIndex = this.iPicIndex - 1;
            iOuShu = true;
        }else {
            iOuShu = false;
            iEndIndex = this.iPicIndex - 1;
        }

        if (!iOuShu) {
            for(let t=iEndIndex+1; t>=2; t--) {
                if (((t-2) % 4) == 0) {
                    iBeginIndex = t - 1;
                    break;
                }
            }
        }

        console.log("iBeginIndex:  " + iBeginIndex + "   iEndIndex:  "+iEndIndex);

        for(let i = iBeginIndex - 1; i < iEndIndex; i++) {
            iArrImg.push(i);
        }

        //1~4
        console.log("The length is:   " + iArrImg.length);
        for(let i = 1; i <= iArrImg.length; i++) {
            let textureName = GameUtil.getTextureByName(GameData.giftImgArr[iArrImg[i-1]]);
            this["img"+i].texture = textureName;
        }

        //设置进度
        this.progressgift.value = 25 * this.iNewestNum;

        //设置礼物头部移动
        this.groupgift.x = this.groupGiftPos[this.iNewestNum-1];
        if (this.progressgift.value == 100) {
            this.groupgift.visible = false;
        }

        for(let i = 1; i <= this.iNewestNum - 1; i++) {
            this["imggou"+i].visible = true;
        }

        this.lblnum.text = this.iNewestNum.toString();
        //记录最新的关卡数
        GameData.iClassicLevel++;
        egret.localStorage.setItem("classicLevelNum",GameData.iClassicLevel.toString());

        if (this.iNewestNum == GameData.iTotalNum) {
            this.lbltext.text = "AWARD";
            this.imgbtn.texture = GameUtil.getTextureByName("shopadd_png");
        }
        this.addEvents();
    }

    private addEvents () {
        this.nextgroup.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (this.iNewestNum >= GameData.iTotalNum) {
                //弹抽奖界面
                Observer.getInstance().fire(Commands.OPEN_RESULT);
            }else {
                Observer.getInstance().fire(Commands.CLOSE_GIFT);
            }
        }, this)
    }

    public static getInstance () {
        if (this._instance === undefined) {
            this._instance = new FruitGiftPage();
        }
        return this._instance;
    }

    public static destroyInstance() {
        if (this._instance) {
            this._instance = undefined;
        }
    }
}