class GameData {
	static groundHeight:number;// 地面的高度
	
	/**
	 * 游戏是否开始
	 */
	static hasStart:boolean;
	/**
	 * 对象是否存活
	 */
	static isAlive:boolean;
	/**
	 * 是否暂停游戏
	 */
	static ispause:boolean;

	/**
	 * 穿过的障碍数
	 */
	static barrierCount:number;

	/**
	 * 鸡蛋计数
	 */
	static eggCount:number;
	/**
	 * 走过的距离 用于计算位置
	 */
	static distance:number;

	//从config文件中读取数据

	/**
	 * 存放配置文件中读取的障碍物数据
	 */
	static elements:any[] = [];

	/**
	 * 场景的移动速度
	 */
	static speed:number;
    /**
     * 重力加速度
     */
    static gravity;
    /**
     * 跳跃力度
     */
    static jumpSpeed;
	/**
	 * 障碍物最远的里程数
	 */
	static maxMileage:number;

	/*
	*飞刀
	*/
	static knife:Knife;

	/**
	 * 管道之间的缝隙宽度
	 */
	static barrierWidth:number;
	/**
	 * 障碍物产生的轮数
	 */
	static rounds:number = 0;
    // 飞行角度
    static angle:number = 0;
    // 飞刀的转动幅度
    static rotation:number = 0;
    // 飞刀移动速度
    static flatSpeed:number = 10;

	//舞台宽度
	static stageWidth: number = 0;
	//舞台高度
	static stageHeight: number = 0;

	//每次旋转水果场景的个数
	static arrRotate: number[] = [6,8,9];

	//场景类型
	static sType: string = "classic";

	//经典场景关卡文字(无尽模式)
	static iClassicLevel: number = 1;

	static strDefaultProp: string = "propwen_png";

	//经典模式胜利盘数
	static iWinNum: number = 0;

	//旋转场景总局数(玩几局会礼物进度界面)
	static iTotalNum: number = 4;

	//奖励弹窗奖品图片
	static strImgName: string = "";

	//礼物图片资源
	static giftImgArr: string[] =  ["1_2_png","2_2_png","3_2_png","4_2_png","5_2_png","6_2_png","7_2_png","8_2_png",
			"9_2_png","10_2_png","11_2_png","12_2_png","13_2_png","14_2_png","15_2_png","16_2_png",
			"17_2_png","18_2_png","19_2_png","20_2_png"];

	//道具商店道具图片
	static shopImgArr: string[] =  ["knife1_png","knife2_png","knife3_png","knife4_png",
	     "knife5_png","knife6_png","knife7_png","knife8_png","knife9_png","knife10_png",
		 "knife11_png","knife12_png"];	

	//水果上色图片：绿色
	static juicerArr1: string[] =  ["green_1_png","green_2_png","green_3_png","green_4_png",
	     "green_5_png","green_6_png","green_7_png","green_8_png","green_9_png"];	
	
	//水果上色图片：橙色
	static juicerArr2: string[] =  ["Orange_1_png","Orange_2_png","Orange_3_png","Orange_4_png",
	     "Orange_5_png","Orange_6_png","Orange_7_png","Orange_8_png","Orange_9_png"];	

	//水果上色图片：深橙色
	static juicerArr3: string[] =  ["Orangered_1_png","Orangered_2_png","Orangered_3_png","Orangered_4_png",
	     "Orangered_5_png","Orangered_6_png","Orangered_7_png","Orangered_8_png","Orangered_9_png"];

    //水果上色图片：红色
	static juicerArr4: string[] =  ["red_1_png","red_2_png","red_3_png","red_4_png",
	     "red_5_png","red_6_png","red_7_png","red_8_png","red_9_png"];
    
	//水果上色图片：白色
	static juicerArr5: string[] =  ["white_1_png","white_2_png","white_3_png","white_4_png",
	     "white_5_png","white_6_png","white_7_png","white_8_png","white_9_png"];

	//水果上色图片: 黄色
	static juicerArr6: string[] =  ["yellow_1_png","yellow_2_png","yellow_3_png","yellow_4_png",
	     "yellow_5_png","yellow_6_png","yellow_7_png","yellow_8_png","yellow_9_png"];

	//道具商店道具背景图
	static shopPropBg: string[] = ["propbg1_png","propbg2_png"];

	//背景音乐
	static channelBg: egret.SoundChannel = null;

	//旋转水果cos
	static cosArr: number[] = [0.9998476951563913, 0.9993908270190958, 0.9986295347545738];

	//旋转水果sin
	static sinArr: number[] = [0.01745240643728351, 0.03489949670250097, 0.05233595624294383];

	//无限模式是否胜利弹窗打开
	static bWuXianOpenWin: boolean = false;

	//无限模式的飞刀数目为零
	static bWuXianKnifeZero: boolean = false;
}