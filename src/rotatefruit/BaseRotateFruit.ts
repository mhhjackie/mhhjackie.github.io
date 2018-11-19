/**
 * 水果基类
 */
class BaseRotateFruit extends egret.DisplayObjectContainer {
    constructor () {
        super();
        this.init();
    }

    public img: egret.Bitmap;
    public img_part1: egret.Bitmap;
    public img_part2: egret.Bitmap;
    public img_part3: egret.Bitmap;
    public img_part4: egret.Bitmap;
    public img_part5: egret.Bitmap;
    public img_part6: egret.Bitmap;
    public img_part7: egret.Bitmap;
    public img_part8: egret.Bitmap;

    // 初始速度、加速度
    public accelerateX: number;
    public accelerateY: number;
    public accelerateRotate: number;
    public speedX: number;
    public speedY: number;
    public speedRotate: number;

    public angel: number;
    public sin: number;
    public cos: number;


    public initRotation: number;
    public rotationIndex: number;

    // 初始时间
    public beginTime;
    public beginTimeSplash;
    public splashEffect;

    // 初始位置
    public initX: number;
    public initY: number;

    // 果汁颜色
    public splashColor;

    // 是否切开标志
    public cutIndex: boolean;

    // 切开水果飘去杯子的位置
    public flyPoint: egret.Point;

    private kkk: number;

    //水果爆破标志
    public effectIndex: number;

    //切开爆炸特效
    private cutSystem:particle.ParticleSystem;

    /**
     * 初始化水果的基本属性，添加时间和动画
     */
    public init () {
        this.img = new egret.Bitmap();
        this.img_part1 = new egret.Bitmap();
        this.img_part2 = new egret.Bitmap();
        this.img_part3 = new egret.Bitmap();
        this.img_part4 = new egret.Bitmap();
        this.img_part5 = new egret.Bitmap();
        this.img_part6 = new egret.Bitmap();
        this.img_part7 = new egret.Bitmap();
        this.img_part8 = new egret.Bitmap();

        this.addChild(this.img);
        this.x = this.y = 0;
        this.flyPoint = new egret.Point(0, 0);
        
        // this.accelerateX = 0;
        // this.accelerateY = 700;
        // this.accelerateRotate = 0;
        // this.speedX = (Math.random() - 0.5) * 180;
        // this.speedY = -700;
        // this.speedRotate = (Math.random() - 0.5) * 360;
        // let ranNum: number = Math.floor(Math.random() * 2);
        // if (ranNum == 0) {
        //     this.speedX = 4 * 180;
        //     this.x = this.initX = -100;
        // }else {
        //     this.speedX = -4 * 180;
        //     this.x = this.initX = GameData.stageWidth + 100;
        // }
        // this.y = this.initY = Math.floor(Math.random() * (GameData.stageHeight - 500) + 400);
        //this.addEventListener(egret.Event.ENTER_FRAME,this.freeFalling,this);
        //this.beginTime = egret.getTimer();
        // this.touchEnabled = true;
        //this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.cutFruit, this);
        //this.cutIndex = false;
    }

    /**
     * 自由落体位置计算
     * @param evt 
     */
    // public freeFalling (evt: egret.Event) {
    //     var now = (egret.getTimer() - this.beginTime) / 1000;
    //     this.x = this.initX + now * this.speedX;
    //     this.y = this.speedY * now + 0.5 * this.accelerateY * now * now + this.initY;
    //     this.img.rotation = now * this.speedRotate;
    //     if (this.y > 530 && !this.cutIndex) {
    //         //this.addFailed();
    //         this.cutIndex = true;
    //     }
    // }

    /**
     * 设置水果的属性
     */
    public setSize () {
        this.anchorOffsetX = this.width / 2;
        this.anchorOffsetY = this.height / 2;
        this.img.anchorOffsetX = 0;
        this.img.anchorOffsetY = 0;
    }

    /**
     * 切开水果后的动作
     */
    public cutFruit (effectIndex: number) {
        //this.cutIndex = true;
    
        /* 水果一分为二 */
        this.cutEffect(effectIndex);

        /* 果汁溅射动画 */
        //this.splashEffectFun();

        /* 游戏逻辑，分数加一 */
        //this.addScore();
         /* 添加音效 */
        //this.addCutSound();
    }

    /**
     * 切开水果的刀光动画 effectIndex 1: 绿色  2: 白色 3: 黄色  4: 红色 5: 橙色 6: 深橙色
     */
    public splitBitmap: egret.Bitmap;
    private splitEffect (effectIndex: number) {
        var textureOrgin = RES.getRes("star" + effectIndex + "_png");
        var config = RES.getRes("fireworks_json");

        this.cutSystem = new particle.GravityParticleSystem(textureOrgin, config);
        this.cutSystem.emissionTime = 1000;
        this.cutSystem.x = this.img.x - this.img.width;
        this.cutSystem.y = this.img.y - this.img.height;
        this.addChild(this.cutSystem);
        this.cutSystem.start();
    }

    /**
     * 添加音效
     */
    private addCutSound () {
        var soundCut: egret.Sound = RES.getRes("fruitbingo_mp3");
        var channelCut = soundCut.play(0, 1);
    }

    /**
     * 水果一分为二
     */
    private cutEffect(effectIndex: number) {
        if (this.img.parent) {
            this.removeChild(this.img);
        }

        for (let i = 1; i <= 8; i++) {
            let imgPart = this["img_part"+i];
            this.addChild(imgPart);
            if (i % 2 == 0) {
                imgPart.x += 10;
            }else {
                imgPart.x -= 10;
            }
        }

        this.splitEffect(effectIndex);

        /* 切开水果的刀光动画 */
        //this.img_part1.rotation -= 10;
        //this.img_part2.rotation += 10;
        egret.setTimeout(function () {
            if (this.cutSystem.parent) {
                this.removeChild(this.cutSystem);
            }
            this.cutFreeFalling();
        }, this, 200);
    }

    /**
     * 果汁溅射动画
     */
    private splashEffectFun() {
        if (this.splashColor){
            this.splashEffect = new SplashEffect(this.splashColor);
            var initX = this.splashEffect.x = this.x - 35;
            var initY = this.splashEffect.y = this.y - 35;
            egret.setTimeout(function () {
                if (this.splashEffect.parent) {
                    this.removeChild(this.splashEffect);
                }
            }, this, 1000);
        }
    }

    /**
     * 被切开的水果的位置
     */
    private cutFreeFalling () {
        if (this.parent) {
            var fruitNewGamePage = FruitNewGamePage.getInstance();
            egret.Tween.get(this).to({"x":fruitNewGamePage.grpjuice.x + fruitNewGamePage.grpjuice.width / 2 + 30, 
                    "y":fruitNewGamePage.grpjuice.y + 50}, 380, egret.Ease.sineIn).call(this.removePartImg,this);
            egret.Tween.get(this).to({"scaleX": 0.5, "scaleY":0.5}, 380);
        }
    }

    private removePartImg() {
        if(this.parent) {
            if (GameUtil.bPlaySound()) {
                GameUtil.playSound('fruityes_mp3');             
            }
            this.parent.removeChild(this);
        }

        var fruitNewGamePage = FruitNewGamePage.getInstance();
        if (fruitNewGamePage) {
            fruitNewGamePage.beiziAnimate();
        }
    }

    /**
     * 积分
     */
    private addScore () {
        //Observer.getInstance().fire(Commands.ADD_SCORE);
    }

    /**
     * 结束
     */
    public addFailed () {
        //var self = this;
        // var loseLogo: egret.Bitmap = new egret.Bitmap();
        // loseLogo.texture = RES.getRes('lose_png');
        // loseLogo.anchorOffsetX = loseLogo.width / 2;
        // loseLogo.anchorOffsetY = loseLogo.height / 2;
        // loseLogo.scaleX = 0;
        // loseLogo.scaleY = 0;
        // loseLogo.x = this.x - this.width / 2;
        // loseLogo.y = 430;
        // this.parent.addChild(loseLogo);
        // var tw_loseLogo = egret.Tween.get(loseLogo).to({scaleX: 1.1, scaleY: 1.1}, 600, egret.Ease.backOut).wait(600).call(function(){
        //     self.parent.removeChild(loseLogo);
        // });
        //Observer.getInstance().fire(Commands.ADD_FAILED);
    }
}