/**
 * created by hh.m on 30/10/2018
 * 小李飞刀
 */

class Knife extends GameObject{
	public constructor(strName: string) {
		super();
		this.init(strName);
	}

    // 飞刀
	private _role:egret.Bitmap;

	// flappy bird 加速度
	//private acceleration:number = 0;

	private init(strName: string){
		this._role = GameUtil.createBitmapByName(strName);
		this.addChild( this._role );
	}

    //飞刀在空中飞舞的方法
    public fly() {
		this.y -= GameData.flatSpeed * 5;
		egret.Tween.get(this,{loop:true}).to({rotation:360}, 130);
    }

	update(timeStamp:number){
        // 不停的更新小球的位置
        this.fly()
	}
}