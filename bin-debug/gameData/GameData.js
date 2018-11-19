var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameData = (function () {
    function GameData() {
    }
    //从config文件中读取数据
    /**
     * 存放配置文件中读取的障碍物数据
     */
    GameData.elements = [];
    /**
     * 障碍物产生的轮数
     */
    GameData.rounds = 0;
    // 飞行角度
    GameData.angle = 0;
    // 飞刀的转动幅度
    GameData.rotation = 0;
    // 飞刀移动速度
    GameData.flatSpeed = 10;
    //舞台宽度
    GameData.stageWidth = 0;
    //舞台高度
    GameData.stageHeight = 0;
    //每次旋转水果场景的个数
    GameData.arrRotate = [6, 8, 9];
    //场景类型
    GameData.sType = "classic";
    //经典场景关卡文字(无尽模式)
    GameData.iClassicLevel = 1;
    GameData.strDefaultProp = "propwen_png";
    //经典模式胜利盘数
    GameData.iWinNum = 0;
    //旋转场景总局数(玩几局会礼物进度界面)
    GameData.iTotalNum = 4;
    //奖励弹窗奖品图片
    GameData.strImgName = "";
    //礼物图片资源
    GameData.giftImgArr = ["1_2_png", "2_2_png", "3_2_png", "4_2_png", "5_2_png", "6_2_png", "7_2_png", "8_2_png",
        "9_2_png", "10_2_png", "11_2_png", "12_2_png", "13_2_png", "14_2_png", "15_2_png", "16_2_png",
        "17_2_png", "18_2_png", "19_2_png", "20_2_png"];
    //道具商店道具图片
    GameData.shopImgArr = ["knife1_png", "knife2_png", "knife3_png", "knife4_png",
        "knife5_png", "knife6_png", "knife7_png", "knife8_png", "knife9_png", "knife10_png",
        "knife11_png", "knife12_png"];
    //水果上色图片：绿色
    GameData.juicerArr1 = ["green_1_png", "green_2_png", "green_3_png", "green_4_png",
        "green_5_png", "green_6_png", "green_7_png", "green_8_png", "green_9_png"];
    //水果上色图片：橙色
    GameData.juicerArr2 = ["Orange_1_png", "Orange_2_png", "Orange_3_png", "Orange_4_png",
        "Orange_5_png", "Orange_6_png", "Orange_7_png", "Orange_8_png", "Orange_9_png"];
    //水果上色图片：深橙色
    GameData.juicerArr3 = ["Orangered_1_png", "Orangered_2_png", "Orangered_3_png", "Orangered_4_png",
        "Orangered_5_png", "Orangered_6_png", "Orangered_7_png", "Orangered_8_png", "Orangered_9_png"];
    //水果上色图片：红色
    GameData.juicerArr4 = ["red_1_png", "red_2_png", "red_3_png", "red_4_png",
        "red_5_png", "red_6_png", "red_7_png", "red_8_png", "red_9_png"];
    //水果上色图片：白色
    GameData.juicerArr5 = ["white_1_png", "white_2_png", "white_3_png", "white_4_png",
        "white_5_png", "white_6_png", "white_7_png", "white_8_png", "white_9_png"];
    //水果上色图片: 黄色
    GameData.juicerArr6 = ["yellow_1_png", "yellow_2_png", "yellow_3_png", "yellow_4_png",
        "yellow_5_png", "yellow_6_png", "yellow_7_png", "yellow_8_png", "yellow_9_png"];
    //道具商店道具背景图
    GameData.shopPropBg = ["propbg1_png", "propbg2_png"];
    //背景音乐
    GameData.channelBg = null;
    //旋转水果cos
    GameData.cosArr = [0.9998476951563913, 0.9993908270190958, 0.9986295347545738];
    //旋转水果sin
    GameData.sinArr = [0.01745240643728351, 0.03489949670250097, 0.05233595624294383];
    //无限模式是否胜利弹窗打开
    GameData.bWuXianOpenWin = false;
    //无限模式的飞刀数目为零
    GameData.bWuXianKnifeZero = false;
    return GameData;
}());
__reflect(GameData.prototype, "GameData");
//# sourceMappingURL=GameData.js.map