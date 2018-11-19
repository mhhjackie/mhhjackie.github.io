/**
 * created by hh.m on 30/10/2018
 * 商店界面子项
 */

class ShopBarItemRender extends eui.ItemRenderer {

	public  imgselect: eui.Image;
	public imgbg: eui.Image;
	public imgprop: eui.Image;
	private grouptouch: eui.Group;

	public constructor() {
		super();
		this.skinName = "resource/eui_skins/eui/KnifeWidget.exml";
	}

	createChildren():void {
		super.createChildren();
		// this.bgAsset.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClick, this);
    }

	//这个函数是ItemRenderer的虚函数  当FightMapControler的this.mapDatas.addItem(data[i])时会调用dataChanged（）
    dataChanged():void {
		//这里面的this.data是继承父类ItemRenderer 的data   也就是FightMapControler的this.mapDatas.addItem(data[i])里面的data的每一个元素
        super.dataChanged();
        if (this.data) {
			//this.bg.source=this.data+"_png";
			this.RefreshDataInfo(this.data);
        }
	}       

	RefreshDataInfo(data): void {
		this.imgprop.texture = GameUtil.getTextureByName(this.data.texture);
		this.imgbg.texture = GameUtil.getTextureByName(this.data.bgtexture);
		this.imgselect.visible = data.type == 1 ? true : false;
	}
}