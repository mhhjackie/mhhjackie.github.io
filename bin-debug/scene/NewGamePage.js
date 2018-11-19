/**
 * created by hh.m on 29/10/2018
 * 主游戏界面
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
var FruitNewGamePage = (function (_super) {
    __extends(FruitNewGamePage, _super);
    function FruitNewGamePage() {
        var _this = _super.call(this) || this;
        //杯子爆炸特效
        _this.cutSystem = null;
        _this.iLastChoiceIndex = -1;
        _this.skinName = "resource/eui_skins/eui/NewGamePage.exml";
        _this.imgBackground.touchEnabled = true;
        _this.imgBackground.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onClickView, _this);
        _this.init();
        return _this;
    }
    FruitNewGamePage.prototype.init = function () {
        // 添加初始动画
        //this.addEffects();
        // 添加开始音效
        //this.addStartSound();
        var strGoldNum = egret.localStorage.getItem("goldNum");
        this.lblgold.text = (strGoldNum == null ? "0" : strGoldNum);
        this.iWinRotateNum = 0;
        this.progressValue = 0;
        this.iDisFruitClassic = 0;
        this.iAniCount = 0;
        this.iRotateDegr = 10;
        this.iGobletNum = 1;
        this.iRanFrame = 0;
        this.iPopWinNum = 0;
        this.knifeNumber = 6;
        this.rotateNum = 1;
        this.bHideFruit = false;
        this.bHideKnife = false;
        this.addEvents();
        var strlevel = egret.localStorage.getItem("dareLevelNum");
        this.iNumLevelWuxian = (strlevel == null ? 1 : Number(strlevel));
        // 初始化数据
        if (GameData.sType === "classic") {
            this.imgclassic.visible = true;
            this.knifeicon.visible = false;
            this.lblKnifenum.visible = false;
            this.imgbeizi.visible = true;
            this.progresswin.labelDisplay.visible = false;
        }
        else {
            var strMaximum = egret.localStorage.getItem("maximum");
            this.iMaxWuXianScore = (strMaximum == null ? 250 : Number(strMaximum));
            this.progresswin.value = 0;
            this.progresswin.maximum = this.iMaxWuXianScore;
            this.progresswin.minimum = 0;
            this.imgclassic.visible = false;
            this.lblKnifenum.text = "X " + this.knifeNumber;
            this.knifeicon.visible = true;
            this.lblKnifenum.visible = true;
            this.imgbeizi.visible = false;
            this.progresswin.labelDisplay.visible = true;
        }
        //飞刀水果保存列表
        this.knifeObjectList = [];
        this.fruitObjectList = [];
        this.deleteKnifeList = [];
        this.deleteFruitList = [];
        this.deleteDrinkArr = [];
        //中心环绕点
        this.centerPoint = new egret.Shape();
        this.centerPoint.graphics.beginFill(0xFFFFFF);
        this.centerPoint.graphics.drawRect(0, 0, 2, 2);
        this.centerPoint.graphics.endFill();
        this.centerPoint.x = GameData.stageWidth / 2 + 70;
        this.centerPoint.y = GameData.stageHeight / 2 - 180;
        this.centerPoint.anchorOffsetX = 1;
        this.centerPoint.anchorOffsetY = 1;
        this.addChild(this.centerPoint);
        this.centerPoint.visible = false;
        this.centerX = this.centerPoint.x;
        this.centerY = this.centerPoint.y;
        this.createNextKnife();
        if (GameData.sType === "classic") {
            this.createRotateFruit();
        }
        else {
            this.timer = new egret.Timer(350, 0);
            this.timer.addEventListener(egret.TimerEvent.TIMER, this.popupFruit, this);
            this.timer.start();
        }
        this.startTicker();
    };
    //重置数据
    FruitNewGamePage.prototype.resetData = function () {
        this.iWinRotateNum = 0;
        this.progressValue = 0;
        this.iDisFruitClassic = 0;
        this.iAniCount = 0;
        this.iRotateDegr = 10;
        this.iGobletNum = 1;
        this.iRanFrame = 0;
        this.iPopWinNum = 0;
        this.knifeNumber = 6;
        this.bHideKnife = false;
        this.bHideFruit = false;
        this.knifeObjectList = [];
        this.deleteKnifeList = [];
        this.deleteFruitList = [];
        this.deleteDrinkArr = [];
        var strlevel = egret.localStorage.getItem("dareLevelNum");
        this.iNumLevelWuxian = (strlevel == null ? 1 : Number(strlevel));
        if (GameData.sType === "classic") {
            if (this.fruitObjectList.length > 0) {
                for (var _i = 0, _a = this.fruitObjectList; _i < _a.length; _i++) {
                    var obj = _a[_i];
                    var delObj = obj;
                    if (delObj.parent) {
                        this.removeChild(delObj);
                    }
                }
            }
            this.fruitObjectList.length = 0;
            this.createRotateFruit();
        }
        else {
            var strMaximum = egret.localStorage.getItem("maximum");
            this.iMaxWuXianScore = (strMaximum == null ? 250 : Number(strMaximum));
            this.progresswin.maximum = this.iMaxWuXianScore;
        }
    };
    //经典场景
    FruitNewGamePage.prototype.createRotateFruit = function () {
        this.rotateNum = GameData.arrRotate[Math.floor(Math.random() * 3)];
        var fruitClassName = [ClassName.BANANAROTATE, ClassName.APPLEROTATE, ClassName.BASAHAROTATE, ClassName.PEACHROTATE, ClassName.SANDIAROTATE,
            ClassName.COCONUTROTATE, ClassName.KIWIROTATE, ClassName.LEMONROTATE, ClassName.LIMEROTATE, ClassName.ORANGEROTATE,
            ClassName.PINEAPPLEROTATE, ClassName.PLUMROTATE, ClassName.POMEGRANATEROTATE, ClassName.REAAPPLEROTATE, ClassName.TOMATOROTATE];
        var ranNum = Math.floor(Math.random() * 2);
        var fruitDegree = Math.floor(Math.random() * 3 + 1);
        this.fruitObjectList = [];
        var lastRan = 0;
        var fruitRan = null;
        var fruit = null;
        var xyDelta = 100;
        for (var i = 0; i < this.rotateNum; i++) {
            /*
              设置水果位置
            */
            //六个
            if (this.rotateNum == 6) {
                if (ranNum === 0) {
                    this.centerPoint.x = GameData.stageWidth / 2 + 105 - xyDelta;
                    this.centerPoint.y = GameData.stageHeight / 2 - 100 - xyDelta;
                    this.centerX = this.centerPoint.x;
                    this.centerY = this.centerPoint.y;
                    if (fruitRan == null)
                        fruitRan = Math.floor(Math.random() * 15); //0-14
                    fruit = fruitClassName[fruitRan]();
                    if (i == 0) {
                        fruit.x = GameData.stageWidth / 2 + fruit.width / 2 - xyDelta;
                        fruit.y = GameData.stageHeight / 2 - 340 - xyDelta;
                    }
                    else if (i == 1) {
                        fruit.x = GameData.stageWidth / 2 - fruit.width / 4 + 45 - xyDelta;
                        fruit.y = GameData.stageHeight / 2 - 170 - xyDelta;
                    }
                    else if (i == 2) {
                        fruit.x = GameData.stageWidth / 2 + fruit.width * 1.2 - 35 - xyDelta;
                        fruit.y = GameData.stageHeight / 2 - 170 - xyDelta;
                    }
                    else {
                        fruit.x = GameData.stageWidth / 2 + fruit.width / 2 - (4 - i) * fruit.width - xyDelta;
                        fruit.y = GameData.stageHeight / 2 - 10 - xyDelta;
                    }
                }
                else {
                    this.centerPoint.x = GameData.stageWidth / 2 + 105 - xyDelta;
                    this.centerPoint.y = GameData.stageHeight / 2 - 120 - xyDelta;
                    this.centerX = this.centerPoint.x;
                    this.centerY = this.centerPoint.y;
                    if (fruitRan == null || i == 3) {
                        fruitRan = Math.floor(Math.random() * 14 + 1);
                    }
                    fruit = fruitClassName[fruitRan]();
                    fruit.x = GameData.stageWidth / 2 + (i % 3) * (fruit.width / 2 + 50) - 50 - xyDelta;
                    fruit.y = GameData.stageHeight / 2 + (Math.floor(i / 3)) * fruit.height - 220 - xyDelta;
                }
            }
            else if (this.rotateNum == 8) {
                this.centerPoint.x = GameData.stageWidth / 2 + 100 - xyDelta;
                this.centerPoint.y = GameData.stageHeight / 2 - 70 - xyDelta;
                this.centerX = this.centerPoint.x;
                this.centerY = this.centerPoint.y;
                if (i < 4) {
                    if (fruitRan == null)
                        fruitRan = Math.floor(Math.random() * 14);
                    fruit = fruitClassName[fruitRan]();
                    if (i % 2 == 0) {
                        fruit.x = GameData.stageWidth / 2 - (i > 0 ? 150 : -340) - xyDelta;
                        fruit.y = GameData.stageHeight / 2 - 100 - xyDelta;
                    }
                    else {
                        fruit.x = GameData.stageWidth / 2 + 95 - xyDelta;
                        fruit.y = GameData.stageHeight / 2 - (i > 1 ? 300 : -100) - xyDelta;
                    }
                }
                else {
                    if (i == 4) {
                        var zhengfu = Math.floor(Math.random() * 2);
                        fruitRan += (zhengfu == 0 ? 1 : -1);
                    }
                    fruit = fruitClassName[(fruitRan == 15 || fruitRan == -1) ? 0 : fruitRan]();
                    if (i % 2 == 0) {
                        fruit.x = GameData.stageWidth / 2 - 40 - xyDelta;
                        fruit.y = GameData.stageHeight / 2 - (i == 4 ? 235 : -40) - xyDelta;
                    }
                    else {
                        fruit.x = GameData.stageWidth / 2 + 230 - xyDelta;
                        fruit.y = GameData.stageHeight / 2 - (i == 5 ? 235 : -40) - xyDelta;
                    }
                }
            }
            else {
                this.centerPoint.x = GameData.stageWidth / 2 + 115 - xyDelta;
                this.centerPoint.y = GameData.stageHeight / 2 - 70 - xyDelta;
                this.centerX = this.centerPoint.x;
                this.centerY = this.centerPoint.y;
                if (i != 4) {
                    if (fruitRan == null) {
                        fruitRan = Math.floor(Math.random() * 14 + 1);
                        lastRan = fruitRan;
                    }
                    else if (i > 4) {
                        fruitRan = lastRan;
                    }
                }
                else {
                    var zhengfu = Math.floor(Math.random() * 2);
                    fruitRan += (zhengfu == 0 ? 1 : -1);
                    fruitRan == 0 ? 2 : fruitRan;
                }
                fruit = fruitClassName[(fruitRan == 15 || fruitRan == -1) ? 2 : fruitRan]();
                fruit.x = GameData.stageWidth / 2 + (i % 3) * (fruit.width / 2 + 50) - 50 - xyDelta;
                fruit.y = GameData.stageHeight / 2 + (Math.floor(i / 3)) * (fruit.height - 15) - 265 - xyDelta;
            }
            fruit.angel = fruitDegree;
            fruit.sin = Math.sin(fruit.angel * Math.PI / 180);
            fruit.cos = Math.cos(fruit.angel * Math.PI / 180);
            fruit.flyPoint.x = this.grpjuice.x;
            fruit.flyPoint.y = this.grpjuice.y;
            this.addChild(fruit);
            this.setChildIndex(fruit, 1);
            this.fruitObjectList.push(fruit);
            fruit.addEventListener(egret.Event.ENTER_FRAME, this.fruitFrame, this);
        }
    };
    FruitNewGamePage.prototype.fruitFrame = function (evt) {
        var fruit = evt.target;
        this.iAniCount++;
        var dx = fruit.x - this.centerX;
        var dy = fruit.y - this.centerY;
        var nx = fruit.cos * dx - fruit.sin * dy * (this.iRanFrame == 0 ? -1 : 1);
        var ny = fruit.cos * dy + fruit.sin * dx * (this.iRanFrame == 0 ? -1 : 1);
        if (this.iAniCount == 2000) {
            fruit.x = fruit.x;
            fruit.y = fruit.y;
            for (var _i = 0, _a = this.fruitObjectList; _i < _a.length; _i++) {
                var obj = _a[_i];
                var delObj = obj;
                delObj.rotation = this.iRotateDegr;
            }
            egret.setTimeout(function () {
                this.iAniCount = 0;
                this.iRanFrame = Math.floor(Math.random() * 2);
                this.iRotateDegr = (this.iRanFrame == 0 ? Math.random() * 10 + 5 : -(Math.random() * 10 + 5));
                var iDegreeNum = Math.floor(Math.random() * 3);
                for (var _i = 0, _a = this.fruitObjectList; _i < _a.length; _i++) {
                    var obj = _a[_i];
                    var delObj = obj;
                    delObj.cos = GameData.cosArr[iDegreeNum];
                    delObj.sin = GameData.sinArr[iDegreeNum];
                }
            }, this, 1600);
        }
        else if (this.iAniCount > 0 && this.iAniCount <= 2000) {
            fruit.x = this.centerX + nx;
            fruit.y = this.centerY + ny;
        }
    };
    FruitNewGamePage.prototype.popupFruit = function () {
        this.fruitNum = Math.ceil(Math.random() * 3);
        var fruitClassName = [ClassName.APPLE, ClassName.BANANA, ClassName.BASAHA, ClassName.PEACH, ClassName.SANDIA,
            ClassName.COCONUT, ClassName.KIWI, ClassName.LEMON, ClassName.LIME, ClassName.ORANGE,
            ClassName.PINEAPPLE, ClassName.PLUM, ClassName.POMEGRANATE, ClassName.REAAPPLE, ClassName.TOMATO];
        for (var i = 0; i < this.fruitNum; i++) {
            var fruitIns = fruitClassName[Math.floor(Math.random() * 15)]();
            this.fruitObjectList.push(fruitIns);
            this.addChildAt(fruitIns, 1);
        }
    };
    //收集果汁打包成瓶
    FruitNewGamePage.prototype.generateAniDrink = function (bLast) {
        if (GameUtil.bPlaySound()) {
            GameUtil.playSound('fruitok_mp3');
        }
        this.imgDrink = new egret.Bitmap();
        if (bLast) {
            var strGobletNum = egret.localStorage.getItem("gobletNum");
            this.iGobletNum = strGobletNum == null ? this.iGobletNum : Number(strGobletNum);
            this.imgDrink.texture = GameUtil.getTextureByName(this.iGobletNum + "_2_png");
            if (this.iGobletNum > 20) {
                this.iGobletNum = 1;
            }
            this.iGobletNum++;
            egret.localStorage.setItem("gobletNum", this.iGobletNum.toString());
        }
        else {
            this.imgDrink.texture = GameUtil.getTextureByName("drink1_png");
        }
        this.imgDrink.anchorOffsetX = bLast ? 125 : 48;
        this.imgDrink.anchorOffsetY = bLast ? 125 : 79;
        this.imgDrink.x = 147;
        this.imgDrink.y = 880;
        this.addChild(this.imgDrink);
        this.deleteDrinkArr.push(this.imgDrink);
        this.setChildIndex(this.imgDrink, 2);
        this.setChildIndex(this.imgclassic, 1);
        egret.setTimeout(function () {
            egret.Tween.get(this.imgDrink, { "loop": true }).to({ "rotation": 360 }, 270);
            egret.Tween.get(this).to({ factor: 1 }, 1000);
        }, this, 1000);
    };
    Object.defineProperty(FruitNewGamePage.prototype, "factor", {
        get: function () {
            return 0;
        },
        set: function (value) {
            var bLast = this.iWinRotateNum % 4 == 0 ? true : false;
            var lastHeight = GameData.stageHeight - (bLast ? 300 : 250);
            this.imgDrink.x = (1 - value) * (1 - value) * 145 + 2 * value * (1 - value) * 270 + value * value * 375;
            this.imgDrink.y = (1 - value) * (1 - value) * 880 + 2 * value * (1 - value) * 710 + value * value * lastHeight;
            if (this.imgDrink.y === lastHeight) {
                egret.Tween.pauseTweens(this.imgDrink);
                this.imgDrink.rotation = 0;
                if (GameUtil.bPlaySound()) {
                    GameUtil.playSound('fruitoknext_mp3');
                }
                egret.Tween.get(this.imgDrink).wait(500).to({ "x": GameData.stageWidth + 200 }, 800).call(this.deleteObjDrink, this, [bLast, (this.iGobletNum - 1) + "_1_png"]);
            }
        },
        enumerable: true,
        configurable: true
    });
    FruitNewGamePage.prototype.deleteObjDrink = function (bLast, imgName) {
        if (this.deleteDrinkArr.length == 0) {
            return;
        }
        for (var _i = 0, _a = this.deleteDrinkArr; _i < _a.length; _i++) {
            var obj = _a[_i];
            this.removeChild(obj);
        }
        this.deleteDrinkArr.length = 0;
        if (bLast) {
            GameData.strImgName = imgName;
            Observer.getInstance().fire(Commands.OPEN_AWARD);
        }
        egret.setTimeout(function () {
            //刀子可见重新创建水果
            if (GameData.knife) {
                GameData.knife.visible = true;
                this.bHideKnife = false;
                this.imgBackground.touchEnabled = true;
            }
            this.createRotateFruit();
        }, this, 500);
    };
    FruitNewGamePage.prototype.createNextKnife = function () {
        var strKnifeName = this.getNewerKnifePic();
        GameData.knife = new Knife(strKnifeName);
        //设置锚点位置
        GameData.knife.anchorOffsetX = GameData.knife.width / 2;
        GameData.knife.anchorOffsetY = GameData.knife.height / 2;
        GameData.knife.x = GameData.stageWidth / 2;
        GameData.knife.y = GameData.stageHeight / 2 + 350;
        this.addChild(GameData.knife);
        this.setChildIndex(GameData.knife, 2);
        GameData.knife.scaleX = 0.6;
        GameData.knife.scaleY = 0.6;
        if (this.bHideKnife) {
            GameData.knife.visible = false;
        }
        //上下移动动画
        egret.Tween.get(GameData.knife).to({ "scaleX": 1, "scaleY": 1 }, 100).call(function () {
            egret.Tween.get(GameData.knife, { "loop": true }).to({ "y": GameData.stageHeight / 2 + 350 }, 500).to({ "y": GameData.stageHeight / 2 +
                    390 }, 500);
        }, this);
    };
    /*
        获取最新飞刀图片
    */
    FruitNewGamePage.prototype.getNewerKnifePic = function () {
        var lastChoiceIndex = egret.localStorage.getItem("shopKuangIndex");
        var strresultKnife = "knife1_png";
        if (lastChoiceIndex) {
            this.iLastChoiceIndex = Number(lastChoiceIndex);
            var strKnife = egret.localStorage.getItem("shopprop" + lastChoiceIndex);
            strresultKnife = strKnife == null ? strresultKnife : strKnife;
        }
        else {
            this.iLastChoiceIndex = -1;
        }
        return strresultKnife;
    };
    /*
    *飞刀
    */
    FruitNewGamePage.prototype.throwKnife = function () {
        if (GameData.knife) {
            this.knifeObjectList.push(GameData.knife);
        }
    };
    FruitNewGamePage.prototype.startTicker = function () {
        egret.ticker.$startTick(this.update, this);
    };
    FruitNewGamePage.prototype.stopTicker = function () {
        egret.ticker.$stopTick(this.update, this);
    };
    FruitNewGamePage.prototype.update = function (timeStap) {
        //更新飞刀位置
        if (this.knifeObjectList.length > 0) {
            for (var _i = 0, _a = this.knifeObjectList; _i < _a.length; _i++) {
                var knifeItem = _a[_i];
                egret.Tween.pauseTweens(knifeItem);
                knifeItem.update(timeStap);
            }
            this.collision();
        }
        return true;
    };
    //飞刀与水果碰撞
    FruitNewGamePage.prototype.collision = function () {
        var fruitRect;
        var itemFruit;
        var itemRotate;
        var item_rect;
        for (var _i = 0, _a = this.fruitObjectList; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item instanceof BaseFruit) {
                itemFruit = item;
                fruitRect = new egret.Rectangle(item.x, item.y, item.width, item.height);
            }
            else if (item instanceof BaseRotateFruit) {
                itemRotate = item;
                if (item instanceof BananaRotate) {
                    fruitRect = new egret.Rectangle(Math.round(item.x - 31), Math.round(item.y - 66), 62, 132);
                }
                else if (item instanceof AppleRotate) {
                    fruitRect = new egret.Rectangle(Math.round(item.x - 41), Math.round(item.y - 52), 82, 104);
                }
                else if (item instanceof BasahaRotate) {
                    fruitRect = new egret.Rectangle(Math.round(item.x - 39), Math.round(item.y - 49), 78, 98);
                }
                else if (item instanceof PeachRotate) {
                    fruitRect = new egret.Rectangle(Math.round(item.x - 39), Math.round(item.y - 55), 78, 110);
                }
                else if (item instanceof SandiaRotate) {
                    fruitRect = new egret.Rectangle(Math.round(item.x - 63), Math.round(item.y - 79), 126, 158);
                }
                else if (item instanceof CoconutRotate) {
                    fruitRect = new egret.Rectangle(Math.round(item.x - 58), Math.round(item.y - 76), 116, 152);
                }
                else if (item instanceof KiwiRotate) {
                    fruitRect = new egret.Rectangle(Math.round(item.x - 47), Math.round(item.y - 56), 94, 112);
                }
                else if (item instanceof LemonRotate) {
                    fruitRect = new egret.Rectangle(Math.round(item.x - 44), Math.round(item.y - 55), 88, 110);
                }
                else if (item instanceof LimeRotate) {
                    fruitRect = new egret.Rectangle(Math.round(item.x - 45), Math.round(item.y - 55), 90, 110);
                }
                else if (item instanceof OrangeRotate) {
                    fruitRect = new egret.Rectangle(Math.round(item.x - 50), Math.round(item.y - 52), 100, 104);
                }
                else if (item instanceof PineappleRotate) {
                    fruitRect = new egret.Rectangle(Math.round(item.x - 49), Math.round(item.y - 64), 98, 128);
                }
                else if (item instanceof PlumRotate) {
                    fruitRect = new egret.Rectangle(Math.round(item.x - 41), Math.round(item.y - 53), 82, 106);
                }
                else if (item instanceof PomegranateRotate) {
                    fruitRect = new egret.Rectangle(Math.round(item.x - 46), Math.round(item.y - 51), 92, 102);
                }
                else if (item instanceof RedAppleRotate) {
                    fruitRect = new egret.Rectangle(Math.round(item.x - 40), Math.round(item.y - 50), 80, 100);
                }
                else if (item instanceof TomatoRotate) {
                    fruitRect = new egret.Rectangle(Math.round(item.x - 51), Math.round(item.y - 51), 102, 102);
                }
            }
            for (var _b = 0, _c = this.knifeObjectList; _b < _c.length; _b++) {
                var hitItem = _c[_b];
                if (hitItem instanceof Knife) {
                    if (this.iLastChoiceIndex == -1 || this.iLastChoiceIndex == 0) {
                        item_rect = new egret.Rectangle(Math.round(hitItem.x + 74), Math.round(hitItem.y + 11), 72, 168);
                    }
                    else if (this.iLastChoiceIndex == 1) {
                        item_rect = new egret.Rectangle(Math.round(hitItem.x + 77), Math.round(hitItem.y + 15), 40, 178);
                    }
                    else if (this.iLastChoiceIndex == 2) {
                        item_rect = new egret.Rectangle(Math.round(hitItem.x + 73), Math.round(hitItem.y + 15), 54, 165);
                    }
                    else if (this.iLastChoiceIndex == 3) {
                        item_rect = new egret.Rectangle(Math.round(hitItem.x + 91), Math.round(hitItem.y + 13), 30, 170);
                    }
                    else if (this.iLastChoiceIndex == 4) {
                        item_rect = new egret.Rectangle(Math.round(hitItem.x + 83), Math.round(hitItem.y + 22), 44, 147);
                    }
                    else if (this.iLastChoiceIndex == 5) {
                        item_rect = new egret.Rectangle(Math.round(hitItem.x + 36), Math.round(hitItem.y + 39), 138, 138);
                    }
                    else if (this.iLastChoiceIndex == 6) {
                        item_rect = new egret.Rectangle(Math.round(hitItem.x + 37), Math.round(hitItem.y + 39), 137, 134);
                    }
                    else if (this.iLastChoiceIndex == 7) {
                        item_rect = new egret.Rectangle(Math.round(hitItem.x + 37), Math.round(hitItem.y + 39), 125, 117);
                    }
                    else if (this.iLastChoiceIndex == 8) {
                        item_rect = new egret.Rectangle(Math.round(hitItem.x + 71), Math.round(hitItem.y + 25), 63, 151);
                    }
                    else if (this.iLastChoiceIndex == 9) {
                        item_rect = new egret.Rectangle(Math.round(hitItem.x + 61), Math.round(hitItem.y + 10), 75, 175);
                    }
                    else if (this.iLastChoiceIndex == 10) {
                        item_rect = new egret.Rectangle(Math.round(hitItem.x + 68), Math.round(hitItem.y + 17), 76, 170);
                    }
                    else if (this.iLastChoiceIndex == 11) {
                        item_rect = new egret.Rectangle(Math.round(hitItem.x + 42), Math.round(hitItem.y + 13), 115, 172);
                    }
                    //飞刀与水果碰撞
                    if (item_rect.intersects(fruitRect)) {
                        // 播放音效
                        if (GameUtil.bPlaySound()) {
                            GameUtil.playSound('fruitbingo_mp3');
                        }
                        if (GameData.sType != "classic") {
                            var ranNum = Math.floor(Math.random() * 15 + 5);
                            this.produceRanNum(ranNum);
                            this.progressValue += ranNum;
                            this.progresswin.value = this.progressValue;
                        }
                        else {
                            this.iDisFruitClassic++;
                            this.bHideFruit = true;
                            var imgJuicer = this["imgjuicer" + this.iDisFruitClassic];
                            var iIndex = this.iDisFruitClassic - 1;
                            imgJuicer.visible = true;
                            //判断水果类型给容器上颜色
                            if (itemRotate instanceof AppleRotate || itemRotate instanceof LimeRotate || itemRotate instanceof PeachRotate || itemRotate instanceof SandiaRotate) {
                                imgJuicer.source = GameData.juicerArr1[iIndex];
                            }
                            else if (itemRotate instanceof CoconutRotate || itemRotate instanceof KiwiRotate) {
                                imgJuicer.source = GameData.juicerArr5[iIndex];
                            }
                            else if (itemRotate instanceof BananaRotate || itemRotate instanceof LemonRotate || itemRotate instanceof PineappleRotate) {
                                imgJuicer.source = GameData.juicerArr6[iIndex];
                            }
                            else if (itemRotate instanceof TomatoRotate || itemRotate instanceof PlumRotate) {
                                imgJuicer.source = GameData.juicerArr4[iIndex];
                            }
                            else if (itemRotate instanceof OrangeRotate) {
                                imgJuicer.source = GameData.juicerArr2[iIndex];
                            }
                            else {
                                imgJuicer.source = GameData.juicerArr3[iIndex];
                            }
                        }
                        if (item instanceof BaseFruit) {
                            this.deleteFruitList.push(itemFruit); //水果
                        }
                        else if (item instanceof BaseRotateFruit) {
                            this.deleteFruitList.push(itemRotate); //旋转水果
                        }
                        this.deleteKnifeList.push(hitItem); //飞刀
                    }
                    else {
                        if (GameData.sType === "classic") {
                            if (hitItem.y < -100) {
                                if (this.bHideFruit == false) {
                                    this.iPopWinNum++;
                                }
                            }
                        }
                    }
                }
            }
            //删除本回合中被删除的飞刀,组合2
            if (this.knifeObjectList.length > 0) {
                for (var _d = 0, _e = this.knifeObjectList; _d < _e.length; _d++) {
                    var obj = _e[_d];
                    var delObj = obj;
                    if (delObj.y < -100) {
                        this.knifeObjectList.splice(this.knifeObjectList.indexOf(delObj), 1);
                    }
                }
            }
            //删除本回合中被删除的飞刀
            if (this.deleteKnifeList.length > 0) {
                this.deleteKnifeList.length = 0;
            }
            //删除本回合中被切的水果
            if (this.deleteFruitList.length > 0) {
                for (var _f = 0, _g = this.deleteFruitList; _f < _g.length; _f++) {
                    var obj = _g[_f];
                    var deleObj = void 0;
                    if (obj instanceof BaseFruit) {
                        deleObj = obj;
                        deleObj.cutFruit();
                    }
                    else if (obj instanceof BaseRotateFruit) {
                        deleObj = obj;
                        deleObj.cutFruit(deleObj.effectIndex);
                    }
                    deleObj.removeEventListener(egret.Event.ENTER_FRAME, this.fruitFrame, this);
                    this.fruitObjectList.splice(this.fruitObjectList.indexOf(obj), 1);
                }
                this.deleteFruitList.length = 0;
            }
        }
        //判断游戏胜利与否
        if (GameData.sType === "classic") {
            if (this.iDisFruitClassic == this.rotateNum) {
                //胜利，进入下一个游戏场景
                this.bHideKnife = true;
                this.iPopWinNum = 0;
                this.progressValue += 25;
                this.progresswin.value = this.progressValue;
                this.iDisFruitClassic = 0;
                this.lblgold.text = (Number(this.lblgold.text) + 5).toString();
                egret.localStorage.setItem("goldNum", this.lblgold.text);
                this.iWinRotateNum++;
                egret.localStorage.setItem("replayNum", this.iWinRotateNum.toString());
                //隐藏所有果汁容量图片
                for (var i = 1; i <= 9; i++) {
                    var imgJuicer = this["imgjuicer" + i];
                    imgJuicer.visible = false;
                }
                this.generateAniDrink(this.iWinRotateNum % 4 == 0 ? true : false);
                if (this.iWinRotateNum > 0 && this.iWinRotateNum % 4 == 0) {
                    //弹礼物界面
                    egret.setTimeout(function () {
                        GameData.iWinNum++;
                        Observer.getInstance().fire(Commands.OPEN_GIFT);
                        this.progressValue = 0;
                        this.progresswin.value = this.progressValue;
                    }, this, 4300);
                }
            }
            if (this.iDisFruitClassic < this.rotateNum) {
                egret.setTimeout(function () {
                    if (this.iPopWinNum == 1) {
                        if (GameUtil.bShake()) {
                            if (egret.Capabilities.os == "Android") {
                                egret.ExternalInterface.call("callNative", "1");
                            }
                        }
                        Observer.getInstance().fire(Commands.OPEN_CONTINUE);
                    }
                    else if (this.iPopWinNum == 2) {
                        this.iPopWinNum = 0;
                        if (GameUtil.bShake()) {
                            if (egret.Capabilities.os == "Android") {
                                egret.ExternalInterface.call("callNative", "1");
                            }
                        }
                        Observer.getInstance().fire(Commands.OPEN_REPLAY);
                    }
                }, this, 1300);
            }
        }
        else {
            //无限模式剩余飞刀次数为零
            if (this.knifeNumber === 0) {
                GameData.bWuXianKnifeZero = true;
                this.lblKnifenum.text = "X 0";
                if (this.progressValue >= this.progresswin.maximum) {
                    GameData.bWuXianOpenWin = true;
                    this.progressValue = 0;
                    this.progresswin.value = 0;
                    this.knifeNumber = 6;
                    this.iNumLevelWuxian++;
                    this.iMaxWuXianScore += 10;
                    this.lblgold.text = (Number(this.lblgold.text) + 35).toString();
                    egret.localStorage.setItem("goldNum", this.lblgold.text);
                    egret.localStorage.setItem("maximum", this.iMaxWuXianScore.toString());
                    egret.localStorage.setItem("dareLevelNum", this.iNumLevelWuxian.toString());
                    Observer.getInstance().fire(Commands.OPEN_AWARD);
                    egret.setTimeout(function () {
                        this.lblKnifenum.text = "X " + this.knifeNumber;
                    }, this, 500);
                }
                else if (this.progressValue < this.progresswin.maximum) {
                    this.knifeNumber = 6;
                    egret.setTimeout(function () {
                        if (GameData.bWuXianOpenWin) {
                            return;
                        }
                        Observer.getInstance().fire(Commands.OPEN_REPLAY);
                        this.progressValue = 0;
                        this.progresswin.value = 0;
                        this.lblKnifenum.text = "X " + this.knifeNumber;
                    }, this, 1000);
                }
            }
            else {
                if (this.progressValue >= this.progresswin.maximum) {
                    GameData.bWuXianOpenWin = true;
                    this.progressValue = 0;
                    this.progresswin.value = 0;
                    this.knifeNumber = 6;
                    this.iMaxWuXianScore += 10;
                    egret.localStorage.setItem("maximum", this.iMaxWuXianScore.toString());
                    this.iNumLevelWuxian++;
                    this.lblgold.text = (Number(this.lblgold.text) + 35).toString();
                    egret.localStorage.setItem("goldNum", this.lblgold.text);
                    egret.localStorage.setItem("dareLevelNum", this.iNumLevelWuxian.toString());
                    Observer.getInstance().fire(Commands.OPEN_AWARD);
                    egret.setTimeout(function () {
                        this.lblKnifenum.text = "X " + this.knifeNumber;
                    }, this, 500);
                }
            }
        }
    };
    FruitNewGamePage.prototype.deleteFruit = function () {
        this.removeChild(this.curDeleteFruit);
    };
    FruitNewGamePage.prototype.addEvents = function () {
        this.btnpause.addEventListener(egret.TouchEvent.TOUCH_TAP, this.pauseGame, this);
    };
    //暂停游戏
    FruitNewGamePage.prototype.pauseGame = function () {
        Observer.getInstance().fire(Commands.OPEN_QUIT);
    };
    //中间产生数字分数
    FruitNewGamePage.prototype.produceRanNum = function (ranNum) {
        var label = new eui.Label();
        label.size = 50;
        label.x = GameData.stageWidth / 2;
        label.y = GameData.stageHeight / 2;
        label.text = "+" + ranNum;
        this.addChildAt(label, 1);
        var ranXiang = Math.floor(Math.random() * 2);
        var ranNumXiang = Math.floor(Math.random() * 80 + 30);
        egret.Tween.get(label).to({ "x": GameData.stageWidth / 2 + (ranXiang == 1 ? -ranNumXiang : ranNumXiang), "y": GameData.stageHeight / 2 + (ranXiang == 1 ? -ranNumXiang : ranNumXiang) }, 1000).call(function () {
            if (label.parent) {
                this.removeChild(label);
            }
        }, this);
    };
    //杯子缩放动画
    FruitNewGamePage.prototype.beiziAnimate = function () {
        var texture = RES.getRes("star3_png");
        var config = RES.getRes("bottlefire_json");
        if (this.cutSystem == null) {
            this.cutSystem = new particle.GravityParticleSystem(texture, config);
            this.cutSystem.emissionTime = 800;
            this.cutSystem.anchorOffsetX = this.grpjuice.width / 2;
            this.cutSystem.anchorOffsetY = this.grpjuice.height / 2;
            this.cutSystem.x = this.grpjuice.x - this.grpjuice.width / 4;
            this.cutSystem.y = this.grpjuice.y - this.grpjuice.height / 2 + 10;
            this.addChild(this.cutSystem);
            this.cutSystem.start();
            egret.setTimeout(function () {
                this.removeChild(this.cutSystem);
                this.cutSystem = null;
            }, this, 1000);
        }
        egret.Tween.get(this.grpjuice).wait(300).to({ "scaleY": 0.9 }, 150).to({ "scaleY": 1 }, 150).
            to({ "scaleY": 0.85 }, 150).to({ "scaleY": 1 }, 150).wait(300);
    };
    FruitNewGamePage.prototype.onClickView = function (evt) {
        // 点击屏幕，飞刀往上飞
        this.imgBackground.touchEnabled = false;
        if (GameData.sType === "dare") {
            if (!GameData.bWuXianKnifeZero) {
                this.knifeNumber--;
                this.lblKnifenum.text = "X " + this.knifeNumber;
            }
        }
        if (GameData.sType === "classic") {
            if (!this.bHideKnife) {
                this.throwKnife();
                this.bHideFruit = false;
                egret.setTimeout(function () {
                    this.imgBackground.touchEnabled = true;
                    this.createNextKnife();
                }, this, 1000);
            }
            else {
            }
        }
        else if (GameData.sType === "dare") {
            this.throwKnife();
            egret.setTimeout(function () {
                this.imgBackground.touchEnabled = true;
                this.createNextKnife();
            }, this, 1000);
        }
    };
    FruitNewGamePage.getInstance = function () {
        if (this._instance === undefined) {
            this._instance = new FruitNewGamePage();
        }
        return this._instance;
    };
    FruitNewGamePage.destroyInstance = function () {
        if (this._instance) {
            this._instance = undefined;
        }
    };
    return FruitNewGamePage;
}(eui.Component));
__reflect(FruitNewGamePage.prototype, "FruitNewGamePage");
//# sourceMappingURL=NewGamePage.js.map