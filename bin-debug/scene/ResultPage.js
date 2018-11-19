/**
 * 结算界面
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var FruitResultPage = (function (_super) {
    __extends(FruitResultPage, _super);
    function FruitResultPage() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/eui/ResultPage.exml";
        _this.init();
        return _this;
    }
    //索引 0: 飞镖 1 : 75  2: 50 3 : 35
    //索引 0: 飞镖 1: 75
    FruitResultPage.prototype.init = function () {
        this.deg = 0;
        this.duration = 0;
        this.iLotteryCount = 0;
        this.iGiftCount = 4;
        this.iRanGift = 0;
        this.groupturn1.touchEnabled = false;
        this.groupturn2.touchEnabled = true;
        this.grpCur = this.groupturn1;
        var strGoldNum = egret.localStorage.getItem("goldNum");
        this.lblgold.text = (strGoldNum == null ? "0" : strGoldNum);
        //四个礼物随机角度
        this.arrDegreeF = [45 + Math.floor(Math.random() * 20 + 3), 135 + Math.floor(Math.random() * 20 + 3),
            225 + Math.floor(Math.random() * 20 + 3), 315 + Math.floor(Math.random() * 20 + 3)];
        //三个礼物随机角度
        this.arrDegreeT = [45 + Math.floor(Math.random() * 20 + 3), 135 + Math.floor(Math.random() * 20 + 3),
            265 + Math.floor(Math.random() * 20 + 3)];
        this.arrGoldNum = [75, 50, 35];
        this.addEvents();
    };
    FruitResultPage.prototype.addEvents = function () {
        this.groupbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.getGift, this);
    };
    FruitResultPage.prototype.getGift = function () {
        var _this = this;
        this.groupbtn.touchEnabled = false;
        if (this.iLotteryCount >= 2) {
            this.iLotteryCount = 0;
            Observer.getInstance().fire(Commands.CLOSE_RESULT);
        }
        else {
            var ranNum = this.iLotteryCount == 0 ? 4 : 3;
            this.iRanGift = Math.floor(Math.random() * ranNum);
            if (this.iLotteryCount == 0) {
                this.deg = Math.ceil(Math.random() * 4 + 1) * 360 + this.arrDegreeF[this.iRanGift];
            }
            else {
                this.deg = Math.ceil(Math.random() * 4 + 1) * 360 + this.arrDegreeT[this.iRanGift];
            }
            this.duration = this.calcDuration(this.deg);
            this.startTurn(function () { _this.lotteryDone(); }); // 启动转盘
        }
    };
    // 根据角度计算持续时间 deg -> duration
    FruitResultPage.prototype.calcDuration = function (deg) {
        return deg * 10;
    };
    // 抽奖结束
    FruitResultPage.prototype.lotteryDone = function () {
        this.iLotteryCount++;
        var iGoldNum = 0;
        if (this.iLotteryCount == 1) {
            //索引1是金币
            if (this.iRanGift == 0) {
                egret.localStorage.setItem("shopprop7", "knife8_png");
            }
            else {
                var curGold = Number(this.lblgold.text) + this.arrGoldNum[this.iRanGift - 1];
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
        }
        else if (this.iLotteryCount >= 2) {
            if (this.iRanGift == 0) {
                egret.localStorage.setItem("shopprop7", "knife8_png");
            }
            else {
                var curGold = Number(this.lblgold.text) + this.arrGoldNum[(this.iRanGift - 1 == 1 ? 2 : this.iRanGift - 1)];
                this.lblgold.text = curGold.toString();
                egret.localStorage.setItem("goldNum", curGold.toString());
            }
            this.lblbtntext.size = 40;
            this.lblbtntext.text = "NEXT LEVEL";
            this.imgbtn.texture = GameUtil.getTextureByName("start_png");
            this.groupbtn.touchEnabled = true;
        }
    };
    // 抽奖动画
    FruitResultPage.prototype.startTurn = function (cb) {
        egret.Tween.get(this.grpCur)
            .to({ rotation: this.grpCur.rotation - 20 }, 500, egret.Ease.sineIn)
            .to({ rotation: this.deg }, this.duration, egret.Ease.backOut).call(function () {
            cb(); // 回调
        });
    };
    FruitResultPage.getInstance = function () {
        if (this._instance === undefined) {
            this._instance = new FruitResultPage();
        }
        return this._instance;
    };
    FruitResultPage.destroyInstance = function () {
        if (this._instance) {
            this._instance = undefined;
        }
    };
    return FruitResultPage;
}(eui.Component));
__reflect(FruitResultPage.prototype, "FruitResultPage");
//# sourceMappingURL=ResultPage.js.map