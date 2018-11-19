/**
 * 结算界面
 */

class FruitResultPage extends eui.Component {

    private static _instance;
    public constructor () {
        super();
        this.skinName = "resource/eui_skins/eui/ResultPage.exml";
        this.init();
    }

    private lblgold: eui.Label; //金币数
    private groupbtn: eui.Group; //按钮组
    private lblbtntext: eui.Label; 
    private imgbtn: eui.Image;

    private groupturn1: eui.Group;
    private groupturn2: eui.Group;

    private grpCur: eui.Group;

    private deg: number;
	private duration: number;

    private iLotteryCount: number; //抽奖次数
    private iGiftCount: number; //礼物总个数
    private arrDegreeF: number[]; //随机角度1
    private arrDegreeT: number[]; //随机角度2
    private iRanGift: number; //随机数组索引
    private arrGoldNum: number[];

    //索引 0: 飞镖 1 : 75  2: 50 3 : 35
    //索引 0: 飞镖 1: 75

    private init () {
        this.deg = 0;
		this.duration = 0;
        this.iLotteryCount = 0;
        this.iGiftCount = 4;
        this.iRanGift = 0;
        this.groupturn1.touchEnabled = false;
        this.groupturn2.touchEnabled = true;
        this.grpCur = this.groupturn1;
        var strGoldNum: string = egret.localStorage.getItem("goldNum");
        this.lblgold.text = (strGoldNum == null ? "0" : strGoldNum); 

        //四个礼物随机角度
        this.arrDegreeF = [45+Math.floor(Math.random()*20+3), 135+Math.floor(Math.random()*20+3),
            225+Math.floor(Math.random()*20+3), 315+Math.floor(Math.random()*20+3)];

        //三个礼物随机角度
        this.arrDegreeT = [45+Math.floor(Math.random()*20+3), 135+Math.floor(Math.random()*20+3),
            265+Math.floor(Math.random()*20+3)];
        
        this.arrGoldNum = [75,50,35];
        this.addEvents();
    }

    private addEvents () {
        this.groupbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.getGift, this);
    }

    private getGift() {
        this.groupbtn.touchEnabled = false;	
        if (this.iLotteryCount >= 2) {
            this.iLotteryCount = 0;
            Observer.getInstance().fire(Commands.CLOSE_RESULT);
        }else {
            let ranNum: number = this.iLotteryCount == 0 ? 4: 3;
            this.iRanGift = Math.floor(Math.random() * ranNum);
            if (this.iLotteryCount == 0) {
                this.deg = Math.ceil(Math.random() * 4 + 1) * 360 + this.arrDegreeF[this.iRanGift];
            }else {
                this.deg = Math.ceil(Math.random() * 4 + 1) * 360 + this.arrDegreeT[this.iRanGift];
            }

		    this.duration = this.calcDuration(this.deg);
            this.startTurn(() => {this.lotteryDone()}); // 启动转盘
        }
    }

    // 根据角度计算持续时间 deg -> duration
	private calcDuration(deg: number): number {
		return deg * 10;
	}

    // 抽奖结束
	private lotteryDone(): void {
        this.iLotteryCount++;
        let iGoldNum: number = 0;
        if (this.iLotteryCount == 1)  {
            //索引1是金币
            if (this.iRanGift == 0) {
                egret.localStorage.setItem("shopprop7", "knife8_png");
            }else {
                let curGold: number = Number(this.lblgold.text) + this.arrGoldNum[this.iRanGift-1];
                this.lblgold.text = curGold.toString();
                egret.localStorage.setItem("goldNum", curGold.toString());
            }
            egret.setTimeout(function () {
                this.groupturn1.visible = false;
                this.groupturn2.visible = true;
                this.grpCur = this.groupturn2;
                this.lblbtntext.size = 32;
                this.lblbtntext.text = "SPIN AGAIN";
                this.iGiftCount = 3;
                this.groupbtn.touchEnabled = true;
            }, this, 2000);
        } else if(this.iLotteryCount >= 2) {
            if (this.iRanGift == 0) {
                egret.localStorage.setItem("shopprop7", "knife8_png");
            }else {
                let curGold: number = Number(this.lblgold.text) + this.arrGoldNum[(this.iRanGift-1 == 1 ? 2 : this.iRanGift-1)];
                this.lblgold.text = curGold.toString();
                egret.localStorage.setItem("goldNum", curGold.toString());
            }

            this.lblbtntext.size = 40;
            this.lblbtntext.text = "NEXT LEVEL";
            this.imgbtn.texture = GameUtil.getTextureByName("start_png");
            this.groupbtn.touchEnabled = true;
        }
	}

	// 抽奖动画
	private startTurn(cb: Function): void {
        egret.Tween.get(this.grpCur)
			.to({ rotation: this.grpCur.rotation - 20 }, 500, egret.Ease.sineIn)
			.to({ rotation: this.deg }, this.duration, egret.Ease.backOut).call(() => {
                    cb(); // 回调
			});
	}

    public static getInstance () {
        if (this._instance === undefined) {
            this._instance = new FruitResultPage();
        }
        return this._instance;
    }

    public static destroyInstance() {
        if (this._instance) {
            this._instance = undefined;
        }
    }
}