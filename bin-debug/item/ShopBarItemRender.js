/**
 * created by hh.m on 30/10/2018
 * 商店界面子项
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
var ShopBarItemRender = (function (_super) {
    __extends(ShopBarItemRender, _super);
    function ShopBarItemRender() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/eui/KnifeWidget.exml";
        return _this;
    }
    ShopBarItemRender.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        // this.bgAsset.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClick, this);
    };
    //这个函数是ItemRenderer的虚函数  当FightMapControler的this.mapDatas.addItem(data[i])时会调用dataChanged（）
    ShopBarItemRender.prototype.dataChanged = function () {
        //这里面的this.data是继承父类ItemRenderer 的data   也就是FightMapControler的this.mapDatas.addItem(data[i])里面的data的每一个元素
        _super.prototype.dataChanged.call(this);
        if (this.data) {
            //this.bg.source=this.data+"_png";
            this.RefreshDataInfo(this.data);
        }
    };
    ShopBarItemRender.prototype.RefreshDataInfo = function (data) {
        this.imgprop.texture = GameUtil.getTextureByName(this.data.texture);
        this.imgbg.texture = GameUtil.getTextureByName(this.data.bgtexture);
        this.imgselect.visible = data.type == 1 ? true : false;
    };
    return ShopBarItemRender;
}(eui.ItemRenderer));
__reflect(ShopBarItemRender.prototype, "ShopBarItemRender");
//# sourceMappingURL=ShopBarItemRender.js.map