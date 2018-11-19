/**
 * 场景管理类
 */

class SceneManager {
    constructor () {
        this.registObserver();
    }

    /**
     * 注册命令
     */
    private registObserver () {
        Observer.getInstance().regist(Commands.CLOSE_QUIT, this.closeQuit, this);
        Observer.getInstance().regist(Commands.OPEN_QUIT, this.openQuit, this);

        Observer.getInstance().regist(Commands.CLOSE_GIFT, this.closeGift, this);
        Observer.getInstance().regist(Commands.OPEN_GIFT, this.openGift, this);

        Observer.getInstance().regist(Commands.CLOSE_REPLAY, this.closeReplay, this);
        Observer.getInstance().regist(Commands.OPEN_REPLAY, this.openReplay, this);

        Observer.getInstance().regist(Commands.CLOSE_CONTINUE, this.closeContinue, this);
        Observer.getInstance().regist(Commands.OPEN_CONTINUE, this.openContinue, this);

        ///////////////////
        Observer.getInstance().regist(Commands.OPNE_SETTING, this.openSetting, this); 
        Observer.getInstance().regist(Commands.CLOSE_SETTING, this.closeSetting, this);

        Observer.getInstance().regist(Commands.OPEN_RANK, this.openRank, this); 
        Observer.getInstance().regist(Commands.CLOSE_RANK, this.closeRank, this);

        Observer.getInstance().regist(Commands.OPEN_LEVELSELECT, this.openLevelSelect, this); 
        Observer.getInstance().regist(Commands.CLOSE_LEVELSELECT, this.closeLevelSelect, this);

        Observer.getInstance().regist(Commands.OPEN_SHOP, this.openShop, this); 
        Observer.getInstance().regist(Commands.CLOSE_SHOP, this.closeShop, this);

        Observer.getInstance().regist(Commands.OPEN_NEW_GAME, this.openNewGame, this); 
        Observer.getInstance().regist(Commands.CLOSE_NEW_GAME, this.closeNewGame, this);

        Observer.getInstance().regist(Commands.OPEN_RESULT, this.openResult, this); 
        Observer.getInstance().regist(Commands.CLOSE_RESULT, this.closeResult, this);

        Observer.getInstance().regist(Commands.OPEN_AWARD, this.openAward, this); 
        Observer.getInstance().regist(Commands.CLOSE_AWARD, this.closeAward, this);
    }

    private openSetting() {
        console.log("openSetting openSetting openSetting openSetting openSetting")
        var fruithomePage = FruitHomePage.getInstance();
        var dur = 500;
        egret.setTimeout(function () {
            var parentNode = fruithomePage.parent;
            if (parentNode) {
                parentNode.removeChild(fruithomePage);
            }
            FruitHomePage.destroyInstance();
            var settingPage = SettingPage.getInstance();
            parentNode.addChild(settingPage);
        }, this, dur + 100);
    }    

    private closeSetting() {
        console.log("closeSetting closeSetting closeSetting closeSetting closeSetting")
        var settingPage = SettingPage.getInstance();
        var dur = 500;
        egret.setTimeout(function () {
            var parentNode = settingPage.parent;
            if (parentNode) {
                parentNode.removeChild(settingPage);
            }
            SettingPage.destroyInstance();
            var fruithomePage = FruitHomePage.getInstance();
            parentNode.addChild(fruithomePage);
        }, this, dur + 100);
    }

     private openRank() {
        console.log("openRank openRank openRank openRank openRank")
        var fruithomePage = FruitHomePage.getInstance();
        var dur = 500;
        egret.setTimeout(function () {
            var parentNode = fruithomePage.parent;
            parentNode.removeChild(fruithomePage);
            FruitHomePage.destroyInstance();
            var rankPage = RankPage.getInstance();
            parentNode.addChild(rankPage);
        }, this, dur + 100);
    }    

    private closeRank() {
        console.log("closeRank closeRank closeRank closeRank closeRank")
        var rankPage = RankPage.getInstance();
        var dur = 500;
        //this.disappearJodoPage(settingPage, dur);
        egret.setTimeout(function () {
            var parentNode = rankPage.parent;
            parentNode.removeChild(rankPage);
            RankPage.destroyInstance();
            var fruithomePage = FruitHomePage.getInstance();
            parentNode.addChild(fruithomePage);
        }, this, dur + 100);
    }

    private openLevelSelect() {
        console.log("openLevelSelect openLevelSelect openLevelSelect openLevelSelect openLevelSelect")
        var fruithomePage = FruitHomePage.getInstance();
        //fruithomePage.channelBg.stop();
        var dur = 500;
        //this.disappearHomePage(fruithomePage, dur);
        egret.setTimeout(function () {
            var parentNode = fruithomePage.parent;
            if (parentNode) {
                parentNode.removeChild(fruithomePage);
            }
            FruitHomePage.destroyInstance();
            var levelselectPage = LevelSelectPage.getInstance();
            if (parentNode) {
                parentNode.addChild(levelselectPage);
            }
        }, this, dur + 100);
    }

    private closeLevelSelect() {
        console.log("closeLevelSelect closeLevelSelect closeLevelSelect closeLevelSelect closeLevelSelect")
        var levelselectPage = LevelSelectPage.getInstance();
        var dur = 500;
        //this.disappearJodoPage(settingPage, dur);
        egret.setTimeout(function () {
            var parentNode = levelselectPage.parent;
            parentNode.removeChild(levelselectPage);
            LevelSelectPage.destroyInstance();
            var fruithomePage = FruitHomePage.getInstance();
            parentNode.addChild(fruithomePage);
        }, this, dur + 100);
    }

    private openShop() {
         console.log("openShop openShop openShop openShop openShop")
        var fruithomePage = FruitHomePage.getInstance();
        //fruithomePage.channelBg.stop();
        var dur = 500;
        //this.disappearHomePage(fruithomePage, dur);
        egret.setTimeout(function () {
            var parentNode = fruithomePage.parent;
            parentNode.removeChild(fruithomePage);
            FruitHomePage.destroyInstance();
            var shopPage = ShopPage.getInstance();
            parentNode.addChild(shopPage);
        }, this, dur + 100);
    }

    private closeShop() {
        console.log("closeShop closeShop closeShop closeShop closeShop")
        var shopPage = ShopPage.getInstance();
        var dur = 500;
        //this.disappearJodoPage(settingPage, dur);
        egret.setTimeout(function () {
            var parentNode = shopPage.parent;
            if (parentNode) {
                parentNode.removeChild(shopPage);
            }
            ShopPage.destroyInstance();
            var fruithomePage = FruitHomePage.getInstance();
            parentNode.addChild(fruithomePage);
        }, this, dur + 100);
    }

    private openNewGame () {
        var levelselectPage = LevelSelectPage.getInstance();
        var dur = 500;
        egret.setTimeout(function () {
            var parentNode = levelselectPage.parent;
            if (parentNode) {
                parentNode.removeChild(levelselectPage);
            }
            LevelSelectPage.destroyInstance();
            var fruitNewGamePage = FruitNewGamePage.getInstance();
            parentNode.addChild(fruitNewGamePage);
        }, this, dur + 100);
    }

    //var soundStart: egret.Sound = RES.getRes("over_mp3");
    //var channelStart = soundStart.play(0, 1);
    private closeNewGame () {
        console.log("closeNewGame closeNewGame closeNewGame closeNewGame closeNewGame")
        var dur = 500;
        var fruitNewGamePage = FruitNewGamePage.getInstance();
        var fruitQuitPage = FruitQuitPage.getInstance();
        if (fruitQuitPage) {
            FruitQuitPage.destroyInstance();
            egret.ticker.resume();
        }

        var continuePage = ContinuePage.getInstance();
        if (continuePage) {
            ContinuePage.destroyInstance();
        }

        egret.setTimeout(function () {
            var parentNode = fruitNewGamePage.parent;
            if (parentNode) {
                parentNode.removeChild(fruitNewGamePage);
            }
            FruitNewGamePage.destroyInstance();

            var fruithomePage = FruitHomePage.getInstance();
            if (parentNode) {
                parentNode.addChild(fruithomePage);
            }
            
            var levelselectPage = LevelSelectPage.getInstance();
            if (levelselectPage){
                LevelSelectPage.destroyInstance();
            }
        }, this, dur + 100);
    }

    private openQuit () {
        console.log("openQuit openQuit openQuit openQuit openQuit")
        var fruithomePage = FruitNewGamePage.getInstance();
        var dur = 500;
        
        //this.disappearHomePage(fruithomePage, dur);
        egret.setTimeout(function () {
            var fruitQuitPage = FruitQuitPage.getInstance();
            fruithomePage.addChildAt(fruitQuitPage, 999);
            egret.ticker.pause();
        }, this, dur + 100);
    }

    private closeQuit () {
        console.log("closeQuit closeQuit closeQuit closeQuit closeQuit")
        var fruitQuitPage = FruitQuitPage.getInstance();
        var dur = 500;
        egret.ticker.resume();
        //this.disappearQuitPage(fruitQuitPage, dur);
        egret.setTimeout(function () {
            var parentNode = fruitQuitPage.parent;
            if (parentNode) {
                parentNode.removeChild(fruitQuitPage);
            }
            FruitQuitPage.destroyInstance();
        }, this, dur + 100);
    }

    private openContinue () {
        console.log("openContinue openContinue openContinue openContinue openContinue")
        var fruithomePage = FruitNewGamePage.getInstance();
        var dur = 500;
        
        egret.setTimeout(function () {
            var continuePage = ContinuePage.getInstance();
            fruithomePage.addChild(continuePage);
            //egret.ticker.pause();
        }, this, dur + 100);
    }

    private closeContinue() {
        console.log("closeContinue closeContinue closeContinue closeContinue closeContinue")
        var continuePage = ContinuePage.getInstance();
        var dur = 500;
        //egret.ticker.resume();
        egret.setTimeout(function () {
            var parentNode = continuePage.parent;
            if (parentNode) {
                parentNode.removeChild(continuePage);
            }
            ContinuePage.destroyInstance();
        }, this, dur + 100);
    }

    private openReplay() {
        console.log("openReplay openReplay openReplay openReplay openReplay")
        var fruithomePage = FruitNewGamePage.getInstance();
        var dur = 500;
        
        egret.setTimeout(function () {
            var replayPage = FruitReplayPage.getInstance();
            fruithomePage.addChild(replayPage);
            //egret.ticker.pause();
        }, this, dur + 100);
    }

    private closeReplay() {
        console.log("closeReplay closeReplay closeReplay closeReplay closeReplay")
        var replayPage = FruitReplayPage.getInstance();
        var fruitGamePage = FruitNewGamePage.getInstance();
        var dur = 500;
        //egret.ticker.resume();
        egret.setTimeout(function () {
            var parentNode = replayPage.parent;
            if (parentNode) {
                parentNode.removeChild(replayPage);
            }
            FruitReplayPage.destroyInstance();
            if (fruitGamePage) {
                fruitGamePage.resetData();
            }
        }, this, dur + 100);
    }

    private openGift () {
        console.log("openGift openGift openGift openGift openGift")
        var fruitNewGamePage = FruitNewGamePage.getInstance();
        var dur = 500;
        
        //this.disappearHomePage(fruithomePage, dur);
        egret.setTimeout(function () {
            var fruitgiftPage = FruitGiftPage.getInstance();
            fruitNewGamePage.addChildAt(fruitgiftPage, 999);
            //egret.ticker.pause();
        }, this, dur + 100);
    }

    private closeGift() {
        console.log("closeGift closeGift closeGift closeGift closeGift")
        var fruitgiftPage = FruitGiftPage.getInstance();
        var dur = 500;
        //egret.ticker.resume();
        egret.setTimeout(function () {
            var parentNode = fruitgiftPage.parent;
            if (parentNode) {
                parentNode.removeChild(fruitgiftPage);
            }
            FruitGiftPage.destroyInstance();
        }, this, dur + 100);
    }
    
    private openResult () {
        console.log("openResult openResult openResult openResult openResult")
        var fruiGiftPage = FruitGiftPage.getInstance();
        var fruitResultPage = FruitResultPage.getInstance();
        var dur = 500;

        egret.setTimeout(function () {
            var parentNode = fruiGiftPage.parent;
            parentNode.removeChild(fruiGiftPage);
            FruitGiftPage.destroyInstance();
            parentNode.addChild(fruitResultPage);
        }, this, dur + 100);
    }

    private closeResult() {
        console.log("closeResult closeResult closeResult closeResult closeResult")
        var fruitResultPage = FruitResultPage.getInstance();
        var dur = 500;
        egret.setTimeout(function () {
            var parentNode = fruitResultPage.parent;
            if (parentNode) {
                parentNode.removeChild(fruitResultPage);
            }
            FruitResultPage.destroyInstance();
        }, this, dur + 100);
    }

    private openAward() {
        console.log("openAward openAward openAward openAward openAward")
        var fruithomePage = FruitNewGamePage.getInstance();
        var dur = 500;
        
        egret.setTimeout(function () {
            var awardPage = NewAwardPage.getInstance();
            fruithomePage.addChildAt(awardPage, 999);
        }, this, dur + 100);
    }


    private closeAward() {
        console.log("closeAward closeAward closeAward closeAward closeAward")
        if (GameData.sType === "dare") {
            NewAwardPage.destroyInstance();
            var fruitNewGamePage = FruitNewGamePage.getInstance();
            var parentNode = fruitNewGamePage.parent;
            if (parentNode) {
                parentNode.removeChild(fruitNewGamePage);
            }
            FruitNewGamePage.destroyInstance();
            var levelselectPage = LevelSelectPage.getInstance();
            if (parentNode) {
                parentNode.addChild(levelselectPage);
            }
        }else {
            var awardPage = NewAwardPage.getInstance();
            var dur = -100;
            egret.setTimeout(function () {
                var parentNode = awardPage.parent;
                if (parentNode) {
                    parentNode.removeChild(awardPage);
                }
                NewAwardPage.destroyInstance();
            }, this, dur + 100);
        }        
    }
}