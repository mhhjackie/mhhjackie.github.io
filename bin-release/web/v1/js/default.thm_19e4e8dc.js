window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/eui/AwardPage.exml'] = window.AwardPage = (function (_super) {
	__extends(AwardPage, _super);
	function AwardPage() {
		_super.call(this);
		this.skinParts = ["imgtouch","imggold1","imggold2","imggold3","imgtitle","imgpic","lbllevel","lblscore","lblgold"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Group1_i(),this._Image1_i(),this.lblgold_i()];
	}
	var _proto = AwardPage.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1334;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.imgtouch_i(),this.imggold1_i(),this.imggold2_i(),this.imggold3_i(),this.imgtitle_i(),this.imgpic_i(),this.lbllevel_i(),this.lblscore_i()];
		return t;
	};
	_proto.imgtouch_i = function () {
		var t = new eui.Image();
		this.imgtouch = t;
		t.height = 1334;
		t.scale9Grid = new egret.Rectangle(80,14,482,91);
		t.source = "background_jpg";
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.imggold1_i = function () {
		var t = new eui.Image();
		this.imggold1 = t;
		t.horizontalCenter = 46;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopgold_png";
		t.verticalCenter = -64;
		t.visible = false;
		t.x = 101;
		return t;
	};
	_proto.imggold2_i = function () {
		var t = new eui.Image();
		this.imggold2 = t;
		t.horizontalCenter = 132;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopgold_png";
		t.verticalCenter = -62;
		t.visible = false;
		t.x = 101;
		return t;
	};
	_proto.imggold3_i = function () {
		var t = new eui.Image();
		this.imggold3 = t;
		t.horizontalCenter = 84;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "shopgold_png";
		t.verticalCenter = -71.5;
		t.visible = false;
		t.x = 101;
		return t;
	};
	_proto.imgtitle_i = function () {
		var t = new eui.Image();
		this.imgtitle = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "redtitle_png";
		t.verticalCenter = -447;
		t.x = 101;
		return t;
	};
	_proto.imgpic_i = function () {
		var t = new eui.Image();
		this.imgpic = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "1_1_png";
		t.verticalCenter = 60;
		t.x = 101;
		return t;
	};
	_proto.lbllevel_i = function () {
		var t = new eui.Label();
		this.lbllevel = t;
		t.horizontalCenter = 10;
		t.size = 40;
		t.text = "LEVEL 4 COMPLETED！";
		t.textColor = 0xffff00;
		t.top = 156;
		return t;
	};
	_proto.lblscore_i = function () {
		var t = new eui.Label();
		this.lblscore = t;
		t.anchorOffsetX = 1;
		t.left = 235;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 75;
		t.text = "+35";
		t.verticalCenter = -58.5;
		t.visible = false;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopgold_png";
		t.x = 651.82;
		t.y = 27.46;
		return t;
	};
	_proto.lblgold_i = function () {
		var t = new eui.Label();
		this.lblgold = t;
		t.anchorOffsetX = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 50;
		t.text = "334";
		t.x = 548.5200000000001;
		t.y = 42.85;
		return t;
	};
	return AwardPage;
})(eui.Skin);generateEUI.paths['resource/eui_skins/eui/ContinuePage.exml'] = window.FruitContinuePage = (function (_super) {
	__extends(FruitContinuePage, _super);
	function FruitContinuePage() {
		_super.call(this);
		this.skinParts = ["imgtouch","lbltime","btngroup","lblNoThanks","groupgray"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.groupgray_i()];
	}
	var _proto = FruitContinuePage.prototype;

	_proto.groupgray_i = function () {
		var t = new eui.Group();
		this.groupgray = t;
		t.height = 1334;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.imgtouch_i(),this._Label1_i(),this.lbltime_i(),this.btngroup_i(),this.lblNoThanks_i(),this._Image3_i()];
		return t;
	};
	_proto.imgtouch_i = function () {
		var t = new eui.Image();
		this.imgtouch = t;
		t.height = 1334;
		t.scale9Grid = new egret.Rectangle(80,14,482,91);
		t.source = "background_jpg";
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 60;
		t.text = "CONTINUE？";
		t.textColor = 0xf7d320;
		t.top = 141;
		return t;
	};
	_proto.lbltime_i = function () {
		var t = new eui.Label();
		this.lbltime = t;
		t.horizontalCenter = 0.5;
		t.size = 40;
		t.text = "10";
		t.top = 235;
		return t;
	};
	_proto.btngroup_i = function () {
		var t = new eui.Group();
		this.btngroup = t;
		t.height = 165;
		t.horizontalCenter = 0.5;
		t.verticalCenter = 356.5;
		t.width = 413;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Label2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = -9;
		t.horizontalCenter = 0;
		t.source = "start_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.left = 28;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "shopblueadd_png";
		t.top = 37;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetY = -12.12;
		t.size = 45;
		t.text = "CONTINUE";
		t.x = 152.49;
		t.y = 51.76;
		return t;
	};
	_proto.lblNoThanks_i = function () {
		var t = new eui.Label();
		this.lblNoThanks = t;
		t.anchorOffsetY = -12.12;
		t.bottom = 95;
		t.horizontalCenter = 0.5;
		t.size = 45;
		t.text = "NO THANKS";
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 73;
		t.source = "timeicon_png";
		t.verticalCenter = -57.5;
		return t;
	};
	return FruitContinuePage;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/eui/GiftPage.exml'] = window.GiftPage = (function (_super) {
	__extends(GiftPage, _super);
	function GiftPage() {
		_super.call(this);
		this.skinParts = ["imgtouch","progressgift","img1","img2","img4","img3","imggou1","imggou2","imggou3","lblgold","lblnum","groupgift","groupgray","imgbtn","lbltext","nextgroup"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.groupgray_i(),this.nextgroup_i()];
	}
	var _proto = GiftPage.prototype;

	_proto.groupgray_i = function () {
		var t = new eui.Group();
		this.groupgray = t;
		t.height = 1334;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.imgtouch_i(),this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.progressgift_i(),this._Image5_i(),this.img1_i(),this.img2_i(),this.img4_i(),this.img3_i(),this._Image6_i(),this.imggou1_i(),this.imggou2_i(),this.imggou3_i(),this.lblgold_i(),this.groupgift_i()];
		return t;
	};
	_proto.imgtouch_i = function () {
		var t = new eui.Image();
		this.imgtouch = t;
		t.height = 1334;
		t.scale9Grid = new egret.Rectangle(80,14,482,91);
		t.source = "background_jpg";
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "giftbottom_png";
		t.verticalCenter = -152.5;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -210;
		t.source = "giftbottom_png";
		t.verticalCenter = 39.5;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 210;
		t.source = "giftbottom_png";
		t.verticalCenter = 39.5;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.bottom = 365;
		t.horizontalCenter = 0;
		t.source = "giftbottom_png";
		return t;
	};
	_proto.progressgift_i = function () {
		var t = new eui.ProgressBar();
		this.progressgift = t;
		t.height = 47;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "skins.ProgressBarSkin";
		t.value = 0;
		t.width = 380;
		t.x = 172.83000000000004;
		t.y = 160.84;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.left = 85;
		t.source = "giftbox_png";
		t.verticalCenter = -483;
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Image();
		this.img1 = t;
		t.horizontalCenter = -13;
		t.source = "propwen_png";
		t.verticalCenter = -266;
		return t;
	};
	_proto.img2_i = function () {
		var t = new eui.Image();
		this.img2 = t;
		t.horizontalCenter = 197;
		t.source = "propwen_png";
		t.verticalCenter = -74;
		return t;
	};
	_proto.img4_i = function () {
		var t = new eui.Image();
		this.img4 = t;
		t.horizontalCenter = -227;
		t.source = "propwen_png";
		t.verticalCenter = -74;
		return t;
	};
	_proto.img3_i = function () {
		var t = new eui.Image();
		this.img3 = t;
		t.horizontalCenter = -11;
		t.source = "propwen_png";
		t.verticalCenter = 130;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopgold_png";
		t.x = 651.82;
		t.y = 27.46;
		return t;
	};
	_proto.imggou1_i = function () {
		var t = new eui.Image();
		this.imggou1 = t;
		t.left = 236;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "gou_png";
		t.top = 127;
		t.visible = false;
		return t;
	};
	_proto.imggou2_i = function () {
		var t = new eui.Image();
		this.imggou2 = t;
		t.left = 333;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "gou_png";
		t.top = 127;
		t.visible = false;
		return t;
	};
	_proto.imggou3_i = function () {
		var t = new eui.Image();
		this.imggou3 = t;
		t.left = 426;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "gou_png";
		t.top = 127;
		t.visible = false;
		return t;
	};
	_proto.lblgold_i = function () {
		var t = new eui.Label();
		this.lblgold = t;
		t.anchorOffsetX = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 50;
		t.text = "334";
		t.x = 548.5200000000001;
		t.y = 42.85;
		return t;
	};
	_proto.groupgift_i = function () {
		var t = new eui.Group();
		this.groupgift = t;
		t.x = 236;
		t.y = 103;
		t.elementsContent = [this._Image7_i(),this.lblnum_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "gifticon_png";
		t.width = 60;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lblnum_i = function () {
		var t = new eui.Label();
		this.lblnum = t;
		t.anchorOffsetX = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "1";
		t.x = 22;
		t.y = 6.97;
		return t;
	};
	_proto.nextgroup_i = function () {
		var t = new eui.Group();
		this.nextgroup = t;
		t.bottom = 120;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.elementsContent = [this.imgbtn_i(),this.lbltext_i(),this._Image8_i()];
		return t;
	};
	_proto.imgbtn_i = function () {
		var t = new eui.Image();
		this.imgbtn = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "start_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lbltext_i = function () {
		var t = new eui.Label();
		this.lbltext = t;
		t.anchorOffsetX = 1;
		t.right = 84;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 50;
		t.text = "NEXT LEVEL";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.right = 12;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "jiantou_png";
		t.verticalCenter = 0;
		return t;
	};
	return GiftPage;
})(eui.Skin);generateEUI.paths['resource/eui_skins/eui/HomePage.exml'] = window.HomePage = (function (_super) {
	__extends(HomePage, _super);
	var HomePage$Skin1 = 	(function (_super) {
		__extends(HomePage$Skin1, _super);
		function HomePage$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","setting_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HomePage$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "setting_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HomePage$Skin1;
	})(eui.Skin);

	var HomePage$Skin2 = 	(function (_super) {
		__extends(HomePage$Skin2, _super);
		function HomePage$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","rank_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HomePage$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "rank_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HomePage$Skin2;
	})(eui.Skin);

	var HomePage$Skin3 = 	(function (_super) {
		__extends(HomePage$Skin3, _super);
		function HomePage$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","share_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HomePage$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "share_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HomePage$Skin3;
	})(eui.Skin);

	var HomePage$Skin4 = 	(function (_super) {
		__extends(HomePage$Skin4, _super);
		function HomePage$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","shop_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HomePage$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "shop_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HomePage$Skin4;
	})(eui.Skin);

	var HomePage$Skin5 = 	(function (_super) {
		__extends(HomePage$Skin5, _super);
		function HomePage$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","start_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HomePage$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "start_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HomePage$Skin5;
	})(eui.Skin);

	function HomePage() {
		_super.call(this);
		this.skinParts = ["test1","test2","test3","settingbtn","rankbtn","sharebtn","shopbtn","imgdrink","startbtn","jiantou","lbltext","grpStart","image","image0","groupani","imagebottom","imagefont","lblnum","grpNum","grpscale"];
		
		this.height = 1334;
		this.width = 750;
		this.test1_i();
		this.test2_i();
		this.test3_i();
		this.elementsContent = [this._Image1_i(),this.grpscale_i()];
		
		eui.Binding.$bindProperties(this, ["groupani"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [1.1],[],this._Object1,"scaleX");
		eui.Binding.$bindProperties(this, [1.1],[],this._Object1,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"scaleY");
		eui.Binding.$bindProperties(this, ["imagebottom"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object3,"alpha");
		eui.Binding.$bindProperties(this, [1.1],[],this._Object3,"scaleX");
		eui.Binding.$bindProperties(this, [1.1],[],this._Object3,"scaleY");
		eui.Binding.$bindProperties(this, [31],[],this._Object3,"x");
		eui.Binding.$bindProperties(this, [91],[],this._Object3,"y");
		eui.Binding.$bindProperties(this, [1],[],this._Object4,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object4,"scaleY");
		eui.Binding.$bindProperties(this, [31],[],this._Object4,"x");
		eui.Binding.$bindProperties(this, [91],[],this._Object4,"y");
		eui.Binding.$bindProperties(this, ["imagefont"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [11],[],this._Object5,"alpha");
		eui.Binding.$bindProperties(this, [1.35],[],this._Object5,"scaleX");
		eui.Binding.$bindProperties(this, [1.35],[],this._Object5,"scaleY");
		eui.Binding.$bindProperties(this, [9],[],this._Object5,"x");
		eui.Binding.$bindProperties(this, [103],[],this._Object5,"y");
		eui.Binding.$bindProperties(this, [1],[],this._Object6,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object6,"scaleY");
		eui.Binding.$bindProperties(this, [110.91],[],this._Object6,"x");
		eui.Binding.$bindProperties(this, [138.62],[],this._Object6,"y");
	}
	var _proto = HomePage.prototype;

	_proto.test1_i = function () {
		var t = new egret.tween.TweenGroup();
		this.test1 = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto.test2_i = function () {
		var t = new egret.tween.TweenGroup();
		this.test2 = t;
		t.items = [this._TweenItem2_i()];
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Wait1_i(),this._Set2_i(),this._To2_i()];
		return t;
	};
	_proto._Wait1_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 200;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto.test3_i = function () {
		var t = new egret.tween.TweenGroup();
		this.test3 = t;
		t.items = [this._TweenItem3_i()];
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.paths = [this._Wait2_i(),this._Set3_i(),this._To3_i()];
		return t;
	};
	_proto._Wait2_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 450;
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 300;
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "background_jpg";
		return t;
	};
	_proto.grpscale_i = function () {
		var t = new eui.Group();
		this.grpscale = t;
		t.height = 1334;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 750;
		t.elementsContent = [this.settingbtn_i(),this.rankbtn_i(),this.sharebtn_i(),this.shopbtn_i(),this.imgdrink_i(),this.grpStart_i(),this.groupani_i(),this.imagebottom_i(),this.imagefont_i(),this.grpNum_i()];
		return t;
	};
	_proto.settingbtn_i = function () {
		var t = new eui.Button();
		this.settingbtn = t;
		t.label = "";
		t.left = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = -8;
		t.x = 30;
		t.y = 600;
		t.skinName = HomePage$Skin1;
		return t;
	};
	_proto.rankbtn_i = function () {
		var t = new eui.Button();
		this.rankbtn = t;
		t.label = "";
		t.right = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = -8;
		t.x = 603;
		t.y = 600;
		t.skinName = HomePage$Skin2;
		return t;
	};
	_proto.sharebtn_i = function () {
		var t = new eui.Button();
		this.sharebtn = t;
		t.label = "";
		t.left = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 139;
		t.x = 30;
		t.y = 747;
		t.skinName = HomePage$Skin3;
		return t;
	};
	_proto.shopbtn_i = function () {
		var t = new eui.Button();
		this.shopbtn = t;
		t.label = "";
		t.right = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 139;
		t.x = 603;
		t.y = 747;
		t.skinName = HomePage$Skin4;
		return t;
	};
	_proto.imgdrink_i = function () {
		var t = new eui.Image();
		this.imgdrink = t;
		t.horizontalCenter = -0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "drink_png";
		t.verticalCenter = 62;
		t.x = 278;
		t.y = 543;
		return t;
	};
	_proto.grpStart_i = function () {
		var t = new eui.Group();
		this.grpStart = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 445;
		t.x = 169;
		t.y = 1030;
		t.elementsContent = [this.startbtn_i(),this.jiantou_i(),this.lbltext_i()];
		return t;
	};
	_proto.startbtn_i = function () {
		var t = new eui.Button();
		this.startbtn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.skinName = HomePage$Skin5;
		return t;
	};
	_proto.jiantou_i = function () {
		var t = new eui.Image();
		this.jiantou = t;
		t.right = 29;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "jiantou_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.lbltext_i = function () {
		var t = new eui.Label();
		this.lbltext = t;
		t.horizontalCenter = -10;
		t.size = 65;
		t.stroke = 1;
		t.strokeColor = 0x000000;
		t.text = "START";
		t.verticalCenter = 0;
		return t;
	};
	_proto.groupani_i = function () {
		var t = new eui.Group();
		this.groupani = t;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.x = 155.00000000000003;
		t.y = 25;
		t.elementsContent = [this.image_i(),this.image0_i()];
		return t;
	};
	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "aniimg1_png";
		t.x = 11.529999999999973;
		t.y = -23.53;
		return t;
	};
	_proto.image0_i = function () {
		var t = new eui.Image();
		this.image0 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "aniimg2_png";
		t.x = -109.15;
		t.y = 33.33;
		return t;
	};
	_proto.imagebottom_i = function () {
		var t = new eui.Image();
		this.imagebottom = t;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.source = "aniimg3_png";
		t.x = 31;
		t.y = 91;
		return t;
	};
	_proto.imagefont_i = function () {
		var t = new eui.Image();
		this.imagefont = t;
		t.scaleX = 1.35;
		t.scaleY = 1.35;
		t.source = "slicerfont_png";
		t.x = 9;
		t.y = 103;
		return t;
	};
	_proto.grpNum_i = function () {
		var t = new eui.Group();
		this.grpNum = t;
		t.horizontalCenter = 234;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 87;
		t.elementsContent = [this._Image2_i(),this.lblnum_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "shopbtnbg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.lblnum_i = function () {
		var t = new eui.Label();
		this.lblnum = t;
		t.horizontalCenter = -1.5;
		t.text = "1";
		t.verticalCenter = -1.5;
		return t;
	};
	return HomePage;
})(eui.Skin);generateEUI.paths['resource/eui_skins/eui/JodoPage.exml'] = window.JodoPage = (function (_super) {
	__extends(JodoPage, _super);
	function JodoPage() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i()];
	}
	var _proto = JodoPage.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.source = "background_jpg";
		return t;
	};
	return JodoPage;
})(eui.Skin);generateEUI.paths['resource/eui_skins/eui/KnifeWidget.exml'] = window.KnifeWidget = (function (_super) {
	__extends(KnifeWidget, _super);
	function KnifeWidget() {
		_super.call(this);
		this.skinParts = ["imgselect","imgbg","imgprop","grouptouch"];
		
		this.height = 230;
		this.width = 180;
		this.elementsContent = [this.grouptouch_i()];
	}
	var _proto = KnifeWidget.prototype;

	_proto.grouptouch_i = function () {
		var t = new eui.Group();
		this.grouptouch = t;
		t.height = 230;
		t.width = 180;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.imgselect_i(),this.imgbg_i(),this.imgprop_i()];
		return t;
	};
	_proto.imgselect_i = function () {
		var t = new eui.Image();
		this.imgselect = t;
		t.height = 230;
		t.source = "propselect_png";
		t.visible = false;
		t.width = 180;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.imgbg_i = function () {
		var t = new eui.Image();
		this.imgbg = t;
		t.height = 200;
		t.source = "propbg1_png";
		t.width = 150;
		t.x = 15;
		t.y = 15;
		return t;
	};
	_proto.imgprop_i = function () {
		var t = new eui.Image();
		this.imgprop = t;
		t.horizontalCenter = 0.5;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "propwen_png";
		t.verticalCenter = 0;
		return t;
	};
	return KnifeWidget;
})(eui.Skin);generateEUI.paths['resource/eui_skins/eui/LevelSelectPage.exml'] = window.FruitLevelSelectPage = (function (_super) {
	__extends(FruitLevelSelectPage, _super);
	var FruitLevelSelectPage$Skin6 = 	(function (_super) {
		__extends(FruitLevelSelectPage$Skin6, _super);
		function FruitLevelSelectPage$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","back_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = FruitLevelSelectPage$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "back_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return FruitLevelSelectPage$Skin6;
	})(eui.Skin);

	function FruitLevelSelectPage() {
		_super.call(this);
		this.skinParts = ["imgtop","grouptop","levelclassic","groupclassic","leveldare","groupdare","btngohome","grpscale"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this.grpscale_i()];
	}
	var _proto = FruitLevelSelectPage.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.source = "background_jpg";
		return t;
	};
	_proto.grpscale_i = function () {
		var t = new eui.Group();
		this.grpscale = t;
		t.height = 1334;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 750;
		t.elementsContent = [this.grouptop_i(),this.groupclassic_i(),this.groupdare_i(),this.btngohome_i()];
		return t;
	};
	_proto.grouptop_i = function () {
		var t = new eui.Group();
		this.grouptop = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 38;
		t.x = 37;
		t.y = 38;
		t.elementsContent = [this.imgtop_i(),this._Label1_i()];
		return t;
	};
	_proto.imgtop_i = function () {
		var t = new eui.Image();
		this.imgtop = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.9000000000000001;
		t.scaleY = 0.9000000000000001;
		t.source = "redtop_png";
		t.x = -247.00000000000006;
		t.y = 111.97999999999999;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0.5;
		t.size = 45;
		t.text = "MODE CHOICE";
		t.y = 126.88;
		return t;
	};
	_proto.groupclassic_i = function () {
		var t = new eui.Group();
		this.groupclassic = t;
		t.horizontalCenter = 6;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = -140;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Label2_i(),this._Image5_i(),this.levelclassic_i(),this._Image6_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "rankblue_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "dare_png";
		t.x = 7.19;
		t.y = -39.44;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "greenselect_png";
		t.x = 295.95;
		t.y = -32.47;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 45;
		t.text = "CLASSIC";
		t.x = 112.82;
		t.y = 27.09;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "roundrect_png";
		t.y = 259.63;
		return t;
	};
	_proto.levelclassic_i = function () {
		var t = new eui.Label();
		this.levelclassic = t;
		t.bottom = 65;
		t.horizontalCenter = -40;
		t.size = 60;
		t.text = "LEVEL 3";
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.bottom = 61;
		t.right = 150;
		t.source = "jiantou_png";
		return t;
	};
	_proto.groupdare_i = function () {
		var t = new eui.Group();
		this.groupdare = t;
		t.horizontalCenter = 6;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 352;
		t.elementsContent = [this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Label3_i(),this._Image10_i(),this.leveldare_i(),this._Image11_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "rankgreen_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "classic_png";
		t.x = 7.19;
		t.y = -39.44;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "redselect_png";
		t.x = 295.95;
		t.y = -32.47;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.size = 45;
		t.text = "DARE";
		t.x = 137.06;
		t.y = 39.21;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "roundrect_png";
		t.y = 259.63;
		return t;
	};
	_proto.leveldare_i = function () {
		var t = new eui.Label();
		this.leveldare = t;
		t.bottom = 65;
		t.horizontalCenter = -40;
		t.size = 60;
		t.text = "LEVEL 3";
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.bottom = 61;
		t.right = 150;
		t.source = "jiantou_png";
		return t;
	};
	_proto.btngohome_i = function () {
		var t = new eui.Button();
		this.btngohome = t;
		t.label = "";
		t.left = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 39;
		t.skinName = FruitLevelSelectPage$Skin6;
		return t;
	};
	return FruitLevelSelectPage;
})(eui.Skin);generateEUI.paths['resource/eui_skins/eui/NewGamePage.exml'] = window.NewGamePage = (function (_super) {
	__extends(NewGamePage, _super);
	var NewGamePage$Skin7 = 	(function (_super) {
		__extends(NewGamePage$Skin7, _super);
		function NewGamePage$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","gamepause_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NewGamePage$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "gamepause_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NewGamePage$Skin7;
	})(eui.Skin);

	function NewGamePage() {
		_super.call(this);
		this.skinParts = ["imgBackground","gameScoreIcon","gameScore","gameBestScore","gameover","btnpause","progresswin","imgicon","lblgold","imgclassic","knifeicon","lblKnifenum","imgbeizi","imgjuicer1","imgjuicer2","imgjuicer3","imgjuicer4","imgjuicer5","imgjuicer6","imgjuicer7","imgjuicer8","imgjuicer9","grpjuice"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.imgBackground_i(),this.gameScoreIcon_i(),this.gameScore_i(),this.gameBestScore_i(),this.gameover_i(),this.btnpause_i(),this.progresswin_i(),this.imgicon_i(),this._Image1_i(),this.lblgold_i(),this.imgclassic_i(),this.knifeicon_i(),this.lblKnifenum_i(),this.grpjuice_i()];
	}
	var _proto = NewGamePage.prototype;

	_proto.imgBackground_i = function () {
		var t = new eui.Image();
		this.imgBackground = t;
		t.fillMode = "scale";
		t.scaleX = 1;
		t.source = "background_jpg";
		return t;
	};
	_proto.gameScoreIcon_i = function () {
		var t = new eui.Image();
		this.gameScoreIcon = t;
		t.source = "score_png";
		t.visible = false;
		t.x = -65;
		t.y = 4.5;
		return t;
	};
	_proto.gameScore_i = function () {
		var t = new eui.Label();
		this.gameScore = t;
		t.bold = true;
		t.text = "0";
		t.textColor = 0xf98e07;
		t.visible = false;
		t.x = -18;
		t.y = 8;
		return t;
	};
	_proto.gameBestScore_i = function () {
		var t = new eui.Label();
		this.gameBestScore = t;
		t.size = 15;
		t.text = "BEST 999";
		t.textColor = 0xf96a07;
		t.visible = false;
		t.x = -67;
		t.y = 42;
		return t;
	};
	_proto.gameover_i = function () {
		var t = new eui.Image();
		this.gameover = t;
		t.alpha = 0;
		t.anchorOffsetX = 245;
		t.anchorOffsetY = 42.5;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "game-over_png";
		t.visible = false;
		t.x = 320;
		t.y = 240;
		return t;
	};
	_proto.btnpause_i = function () {
		var t = new eui.Button();
		this.btnpause = t;
		t.label = "";
		t.left = 40;
		t.top = 57;
		t.skinName = NewGamePage$Skin7;
		return t;
	};
	_proto.progresswin_i = function () {
		var t = new eui.ProgressBar();
		this.progresswin = t;
		t.height = 47;
		t.skinName = "skins.ProgressBarSkin";
		t.width = 330;
		t.x = 209.19;
		t.y = 76;
		return t;
	};
	_proto.imgicon_i = function () {
		var t = new eui.Image();
		this.imgicon = t;
		t.source = "gameicon1_png";
		t.x = 148.25;
		t.y = 21.28;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.right = 16;
		t.source = "shopgold_png";
		t.top = 67;
		return t;
	};
	_proto.lblgold_i = function () {
		var t = new eui.Label();
		this.lblgold = t;
		t.anchorOffsetX = 1;
		t.right = 99;
		t.size = 40;
		t.text = "0";
		t.top = 82;
		return t;
	};
	_proto.imgclassic_i = function () {
		var t = new eui.Image();
		this.imgclassic = t;
		t.bottom = 0;
		t.source = "deskbottom_png";
		t.x = 0;
		return t;
	};
	_proto.knifeicon_i = function () {
		var t = new eui.Image();
		this.knifeicon = t;
		t.bottom = 79;
		t.left = 9;
		t.source = "knife5_png";
		t.visible = false;
		return t;
	};
	_proto.lblKnifenum_i = function () {
		var t = new eui.Label();
		this.lblKnifenum = t;
		t.size = 50;
		t.text = "X 5";
		t.visible = false;
		t.x = 158;
		t.y = 1133;
		return t;
	};
	_proto.grpjuice_i = function () {
		var t = new eui.Group();
		this.grpjuice = t;
		t.anchorOffsetY = 0;
		t.bottom = 155;
		t.x = 68;
		t.elementsContent = [this.imgbeizi_i(),this.imgjuicer1_i(),this.imgjuicer2_i(),this.imgjuicer3_i(),this.imgjuicer4_i(),this.imgjuicer5_i(),this.imgjuicer6_i(),this.imgjuicer7_i(),this.imgjuicer8_i(),this.imgjuicer9_i()];
		return t;
	};
	_proto.imgbeizi_i = function () {
		var t = new eui.Image();
		this.imgbeizi = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "beizi_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.imgjuicer1_i = function () {
		var t = new eui.Image();
		this.imgjuicer1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "green_1_png";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.imgjuicer2_i = function () {
		var t = new eui.Image();
		this.imgjuicer2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "green_2_png";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.imgjuicer3_i = function () {
		var t = new eui.Image();
		this.imgjuicer3 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "green_3_png";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.imgjuicer4_i = function () {
		var t = new eui.Image();
		this.imgjuicer4 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "green_4_png";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.imgjuicer5_i = function () {
		var t = new eui.Image();
		this.imgjuicer5 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "green_5_png";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.imgjuicer6_i = function () {
		var t = new eui.Image();
		this.imgjuicer6 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "green_6_png";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.imgjuicer7_i = function () {
		var t = new eui.Image();
		this.imgjuicer7 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "green_7_png";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.imgjuicer8_i = function () {
		var t = new eui.Image();
		this.imgjuicer8 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "green_8_png";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.imgjuicer9_i = function () {
		var t = new eui.Image();
		this.imgjuicer9 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "green_9_png";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return NewGamePage;
})(eui.Skin);generateEUI.paths['resource/eui_skins/eui/QuitPage.exml'] = window.QuitPage = (function (_super) {
	__extends(QuitPage, _super);
	var QuitPage$Skin8 = 	(function (_super) {
		__extends(QuitPage$Skin8, _super);
		function QuitPage$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","switchbtn2_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = QuitPage$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "switchbtn2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return QuitPage$Skin8;
	})(eui.Skin);

	var QuitPage$Skin9 = 	(function (_super) {
		__extends(QuitPage$Skin9, _super);
		function QuitPage$Skin9() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","switchbtn1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = QuitPage$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "switchbtn1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return QuitPage$Skin9;
	})(eui.Skin);

	function QuitPage() {
		_super.call(this);
		this.skinParts = ["imgtouch","backbtn","continuebtn","groupgray"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.groupgray_i()];
	}
	var _proto = QuitPage.prototype;

	_proto.groupgray_i = function () {
		var t = new eui.Group();
		this.groupgray = t;
		t.height = 1334;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.imgtouch_i(),this._Image1_i(),this._Label1_i(),this.backbtn_i(),this.continuebtn_i()];
		return t;
	};
	_proto.imgtouch_i = function () {
		var t = new eui.Image();
		this.imgtouch = t;
		t.height = 1334;
		t.scale9Grid = new egret.Rectangle(80,14,482,91);
		t.source = "roundrect_png";
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "roundrectgray_png";
		t.top = 300;
		t.x = 101;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 9.5;
		t.size = 35;
		t.text = "WHAT YOU WANT？";
		t.textColor = 0xffff00;
		t.top = 360;
		return t;
	};
	_proto.backbtn_i = function () {
		var t = new eui.Button();
		this.backbtn = t;
		t.label = "back";
		t.left = 150;
		t.y = 473.15;
		t.skinName = QuitPage$Skin8;
		return t;
	};
	_proto.continuebtn_i = function () {
		var t = new eui.Button();
		this.continuebtn = t;
		t.label = "continue";
		t.right = 150;
		t.y = 473.15;
		t.skinName = QuitPage$Skin9;
		return t;
	};
	return QuitPage;
})(eui.Skin);generateEUI.paths['resource/eui_skins/eui/RankPage.exml'] = window.FruitRankPage = (function (_super) {
	__extends(FruitRankPage, _super);
	var FruitRankPage$Skin10 = 	(function (_super) {
		__extends(FruitRankPage$Skin10, _super);
		function FruitRankPage$Skin10() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","back_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = FruitRankPage$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "back_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return FruitRankPage$Skin10;
	})(eui.Skin);

	function FruitRankPage() {
		_super.call(this);
		this.skinParts = ["imgtop","grouptop","score1","score2","score3","score4","score5","score6","lbltime1","lbltime","btngohome","grpscale"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this.grpscale_i()];
	}
	var _proto = FruitRankPage.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.source = "background_jpg";
		return t;
	};
	_proto.grpscale_i = function () {
		var t = new eui.Group();
		this.grpscale = t;
		t.height = 1334;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 750;
		t.elementsContent = [this.grouptop_i(),this._Group1_i(),this._Group2_i(),this.lbltime1_i(),this.lbltime_i(),this.btngohome_i()];
		return t;
	};
	_proto.grouptop_i = function () {
		var t = new eui.Group();
		this.grouptop = t;
		t.horizontalCenter = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 139;
		t.elementsContent = [this.imgtop_i(),this._Label1_i()];
		return t;
	};
	_proto.imgtop_i = function () {
		var t = new eui.Image();
		this.imgtop = t;
		t.scaleX = 0.9000000000000001;
		t.scaleY = 0.9000000000000001;
		t.source = "redtop_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 45;
		t.text = "STATISTICS";
		t.verticalCenter = -15;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = -167;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i(),this.score1_i(),this.score2_i(),this.score3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "rankblue_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "dare_png";
		t.x = 7.19;
		t.y = -39.44;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 45;
		t.text = "CLASSIC";
		t.x = 112.82;
		t.y = 39.21;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.size = 43;
		t.text = "CLASSIC RANKING";
		t.x = 49.88;
		t.y = 135.82;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.size = 43;
		t.text = "SUCCESSES";
		t.x = 49.88;
		t.y = 218.88;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.size = 43;
		t.text = "FAILS";
		t.x = 49.88;
		t.y = 301;
		return t;
	};
	_proto.score1_i = function () {
		var t = new eui.Label();
		this.score1 = t;
		t.size = 43;
		t.text = "8";
		t.x = 581;
		t.y = 135.82;
		return t;
	};
	_proto.score2_i = function () {
		var t = new eui.Label();
		this.score2 = t;
		t.size = 43;
		t.text = "3";
		t.x = 581;
		t.y = 218.88;
		return t;
	};
	_proto.score3_i = function () {
		var t = new eui.Label();
		this.score3 = t;
		t.size = 43;
		t.text = "5";
		t.x = 581;
		t.y = 301;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 294;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this._Label6_i(),this._Label7_i(),this._Label8_i(),this._Label9_i(),this.score4_i(),this.score5_i(),this.score6_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "rankgreen_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "classic_png";
		t.x = 7.19;
		t.y = -39.44;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.size = 45;
		t.text = "DARE";
		t.x = 137.06;
		t.y = 39.21;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.size = 43;
		t.text = "DARE RANKING";
		t.x = 49.88;
		t.y = 135.82;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.size = 43;
		t.text = "SUCCESSES";
		t.x = 49.88;
		t.y = 218.88;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.size = 43;
		t.text = "FAILS";
		t.x = 49.88;
		t.y = 301;
		return t;
	};
	_proto.score4_i = function () {
		var t = new eui.Label();
		this.score4 = t;
		t.size = 43;
		t.text = "25";
		t.x = 568.88;
		t.y = 135.82;
		return t;
	};
	_proto.score5_i = function () {
		var t = new eui.Label();
		this.score5 = t;
		t.size = 43;
		t.text = "0";
		t.x = 581;
		t.y = 218.88;
		return t;
	};
	_proto.score6_i = function () {
		var t = new eui.Label();
		this.score6 = t;
		t.size = 43;
		t.text = "0";
		t.x = 581;
		t.y = 301;
		return t;
	};
	_proto.lbltime1_i = function () {
		var t = new eui.Label();
		this.lbltime1 = t;
		t.bottom = 85;
		t.left = 62;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 43;
		t.text = "TIME IN GAME";
		return t;
	};
	_proto.lbltime_i = function () {
		var t = new eui.Label();
		this.lbltime = t;
		t.bottom = 85;
		t.right = 79;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 43;
		t.text = "00:25:18";
		return t;
	};
	_proto.btngohome_i = function () {
		var t = new eui.Button();
		this.btngohome = t;
		t.label = "";
		t.left = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 39;
		t.skinName = FruitRankPage$Skin10;
		return t;
	};
	return FruitRankPage;
})(eui.Skin);generateEUI.paths['resource/eui_skins/eui/ReplayPage.exml'] = window.ReplayPage = (function (_super) {
	__extends(ReplayPage, _super);
	var ReplayPage$Skin11 = 	(function (_super) {
		__extends(ReplayPage$Skin11, _super);
		function ReplayPage$Skin11() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","shopadd_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ReplayPage$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "shopadd_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ReplayPage$Skin11;
	})(eui.Skin);

	var ReplayPage$Skin12 = 	(function (_super) {
		__extends(ReplayPage$Skin12, _super);
		function ReplayPage$Skin12() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","start_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ReplayPage$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "start_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ReplayPage$Skin12;
	})(eui.Skin);

	var ReplayPage$Skin13 = 	(function (_super) {
		__extends(ReplayPage$Skin13, _super);
		function ReplayPage$Skin13() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","back_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ReplayPage$Skin13.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "back_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ReplayPage$Skin13;
	})(eui.Skin);

	function ReplayPage() {
		_super.call(this);
		this.skinParts = ["imgtouch","lblprogress","lblNum","replaybtn","replaygroup","buybtn","lbgold","buygroup","groupgray","btngohome","lblgold"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.groupgray_i(),this.btngohome_i(),this.lblgold_i(),this._Image6_i()];
	}
	var _proto = ReplayPage.prototype;

	_proto.groupgray_i = function () {
		var t = new eui.Group();
		this.groupgray = t;
		t.height = 1334;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.imgtouch_i(),this._Image1_i(),this._Image2_i(),this.lblprogress_i(),this.lblNum_i(),this.replaygroup_i(),this.buygroup_i()];
		return t;
	};
	_proto.imgtouch_i = function () {
		var t = new eui.Image();
		this.imgtouch = t;
		t.height = 1334;
		t.scale9Grid = new egret.Rectangle(80,14,482,91);
		t.source = "background_jpg";
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "replay2_png";
		t.top = 300;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -24;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "replay1_png";
		t.top = 198;
		return t;
	};
	_proto.lblprogress_i = function () {
		var t = new eui.Label();
		this.lblprogress = t;
		t.horizontalCenter = -17.5;
		t.size = 65;
		t.text = "1/4";
		t.textColor = 0xffffff;
		t.top = 345;
		return t;
	};
	_proto.lblNum_i = function () {
		var t = new eui.Label();
		this.lblNum = t;
		t.horizontalCenter = 0;
		t.size = 65;
		t.text = "Level 1";
		t.textColor = 0xFFFFFF;
		t.top = 435;
		return t;
	};
	_proto.replaygroup_i = function () {
		var t = new eui.Group();
		this.replaygroup = t;
		t.horizontalCenter = 0;
		t.y = 1078.7;
		t.elementsContent = [this.replaybtn_i(),this._Image3_i()];
		return t;
	};
	_proto.replaybtn_i = function () {
		var t = new eui.Button();
		this.replaybtn = t;
		t.label = "REPLAY";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.skinName = ReplayPage$Skin11;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.right = 23;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "jiantou2_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.buygroup_i = function () {
		var t = new eui.Group();
		this.buygroup = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 896.9;
		t.elementsContent = [this.buybtn_i(),this._Image4_i(),this._Image5_i(),this.lbgold_i()];
		return t;
	};
	_proto.buybtn_i = function () {
		var t = new eui.Button();
		this.buybtn = t;
		t.label = "";
		t.scaleX = 0.75;
		t.scaleY = 0.72;
		t.x = 0;
		t.y = 0;
		t.skinName = ReplayPage$Skin12;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.left = 32;
		t.source = "shopblueadd_png";
		t.verticalCenter = -2;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.right = 29;
		t.source = "shopgold_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.lbgold_i = function () {
		var t = new eui.Label();
		this.lbgold = t;
		t.horizontalCenter = 3.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 50;
		t.text = "+35";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0.5;
		t.x = 50;
		return t;
	};
	_proto.btngohome_i = function () {
		var t = new eui.Button();
		this.btngohome = t;
		t.label = "";
		t.x = 48.79;
		t.y = 36.52;
		t.skinName = ReplayPage$Skin13;
		return t;
	};
	_proto.lblgold_i = function () {
		var t = new eui.Label();
		this.lblgold = t;
		t.anchorOffsetX = 1;
		t.size = 50;
		t.text = "334";
		t.x = 548.52;
		t.y = 54.97;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "shopgold_png";
		t.x = 651.82;
		t.y = 36.55;
		return t;
	};
	return ReplayPage;
})(eui.Skin);generateEUI.paths['resource/eui_skins/eui/ResultPage.exml'] = window.ResultPage = (function (_super) {
	__extends(ResultPage, _super);
	function ResultPage() {
		_super.call(this);
		this.skinParts = ["imgbg","warpCir","inCir","gift1","gift2","gift3","gift4","lbl1","lbl2","lbl3","groupturn1","inCir0","gift5","gift6","gift7","lbl4","lbl5","groupturn2","imgbtn","lblbtntext","groupbtn","groupgray","lblgold"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.groupgray_i(),this.lblgold_i(),this._Image3_i()];
	}
	var _proto = ResultPage.prototype;

	_proto.groupgray_i = function () {
		var t = new eui.Group();
		this.groupgray = t;
		t.height = 1334;
		t.touchEnabled = true;
		t.touchThrough = false;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.imgbg_i(),this.warpCir_i(),this.groupturn1_i(),this.groupturn2_i(),this.groupbtn_i(),this._Image2_i()];
		return t;
	};
	_proto.imgbg_i = function () {
		var t = new eui.Image();
		this.imgbg = t;
		t.height = 1334;
		t.scale9Grid = new egret.Rectangle(80,14,482,91);
		t.source = "background_jpg";
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.warpCir_i = function () {
		var t = new eui.Image();
		this.warpCir = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "lotteryround_png";
		t.y = 212.1;
		return t;
	};
	_proto.groupturn1_i = function () {
		var t = new eui.Group();
		this.groupturn1 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = -115;
		t.elementsContent = [this.inCir_i(),this.gift1_i(),this.gift2_i(),this.gift3_i(),this.gift4_i(),this.lbl1_i(),this.lbl2_i(),this.lbl3_i()];
		return t;
	};
	_proto.inCir_i = function () {
		var t = new eui.Image();
		this.inCir = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "lottery1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.gift1_i = function () {
		var t = new eui.Image();
		this.gift1 = t;
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.source = "knife8_png";
		t.x = 142;
		t.y = 139.38;
		return t;
	};
	_proto.gift2_i = function () {
		var t = new eui.Image();
		this.gift2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopgold2_png";
		t.x = 442;
		t.y = 176.65;
		return t;
	};
	_proto.gift3_i = function () {
		var t = new eui.Image();
		this.gift3 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopgold2_png";
		t.x = 442;
		t.y = 441;
		return t;
	};
	_proto.gift4_i = function () {
		var t = new eui.Image();
		this.gift4 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopgold2_png";
		t.x = 183;
		t.y = 443;
		return t;
	};
	_proto.lbl1_i = function () {
		var t = new eui.Label();
		this.lbl1 = t;
		t.anchorOffsetX = 1;
		t.rotation = 48.1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.stroke = 3;
		t.text = "+35";
		t.x = 421;
		t.y = 202;
		return t;
	};
	_proto.lbl2_i = function () {
		var t = new eui.Label();
		this.lbl2 = t;
		t.anchorOffsetX = 1;
		t.rotation = 135.73;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.stroke = 3;
		t.text = "+50";
		t.x = 475;
		t.y = 426;
		return t;
	};
	_proto.lbl3_i = function () {
		var t = new eui.Label();
		this.lbl3 = t;
		t.anchorOffsetX = 1;
		t.rotation = 227;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.stroke = 3;
		t.text = "+75";
		t.x = 267;
		t.y = 482;
		return t;
	};
	_proto.groupturn2_i = function () {
		var t = new eui.Group();
		this.groupturn2 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = -115;
		t.visible = false;
		t.elementsContent = [this.inCir0_i(),this.gift5_i(),this.gift6_i(),this.gift7_i(),this.lbl4_i(),this.lbl5_i()];
		return t;
	};
	_proto.inCir0_i = function () {
		var t = new eui.Image();
		this.inCir0 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "lottery2_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.gift5_i = function () {
		var t = new eui.Image();
		this.gift5 = t;
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.source = "knife8_png";
		t.x = 125.82;
		t.y = 172.71;
		return t;
	};
	_proto.gift6_i = function () {
		var t = new eui.Image();
		this.gift6 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopgold2_png";
		t.x = 472.3;
		t.y = 216.78;
		return t;
	};
	_proto.gift7_i = function () {
		var t = new eui.Image();
		this.gift7 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopgold2_png";
		t.x = 306.2;
		t.y = 477.36;
		return t;
	};
	_proto.lbl4_i = function () {
		var t = new eui.Label();
		this.lbl4 = t;
		t.rotation = 53.58;
		t.size = 40;
		t.stroke = 3;
		t.text = "+35";
		t.x = 455;
		t.y = 241;
		return t;
	};
	_proto.lbl5_i = function () {
		var t = new eui.Label();
		this.lbl5 = t;
		t.rotation = 178.01;
		t.size = 40;
		t.stroke = 3;
		t.text = "+75";
		t.x = 377;
		t.y = 471;
		return t;
	};
	_proto.groupbtn_i = function () {
		var t = new eui.Group();
		this.groupbtn = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 963;
		t.elementsContent = [this.imgbtn_i(),this.lblbtntext_i(),this._Image1_i()];
		return t;
	};
	_proto.imgbtn_i = function () {
		var t = new eui.Image();
		this.imgbtn = t;
		t.left = 0;
		t.source = "shopadd_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.lblbtntext_i = function () {
		var t = new eui.Label();
		this.lblbtntext = t;
		t.anchorOffsetX = 1;
		t.right = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.text = "SPIN";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.right = 19;
		t.source = "jiantou_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 3;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "lotteryabove_png";
		t.verticalCenter = -112;
		return t;
	};
	_proto.lblgold_i = function () {
		var t = new eui.Label();
		this.lblgold = t;
		t.anchorOffsetX = 1;
		t.size = 50;
		t.text = "334";
		t.x = 548.52;
		t.y = 54.97;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "shopgold_png";
		t.x = 651.82;
		t.y = 36.55;
		return t;
	};
	return ResultPage;
})(eui.Skin);generateEUI.paths['resource/eui_skins/eui/SettingPage.exml'] = window.FruitSettingPage = (function (_super) {
	__extends(FruitSettingPage, _super);
	var FruitSettingPage$Skin14 = 	(function (_super) {
		__extends(FruitSettingPage$Skin14, _super);
		function FruitSettingPage$Skin14() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","back_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = FruitSettingPage$Skin14.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "back_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return FruitSettingPage$Skin14;
	})(eui.Skin);

	var FruitSettingPage$Skin15 = 	(function (_super) {
		__extends(FruitSettingPage$Skin15, _super);
		function FruitSettingPage$Skin15() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","switchbtn2_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = FruitSettingPage$Skin15.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "switchbtn1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return FruitSettingPage$Skin15;
	})(eui.Skin);

	var FruitSettingPage$Skin16 = 	(function (_super) {
		__extends(FruitSettingPage$Skin16, _super);
		function FruitSettingPage$Skin16() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","switchbtn2_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = FruitSettingPage$Skin16.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "switchbtn1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return FruitSettingPage$Skin16;
	})(eui.Skin);

	function FruitSettingPage() {
		_super.call(this);
		this.skinParts = ["btngohome","imgtop","grouptop","togglesound","toggleshake","grpscale"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this.grpscale_i()];
	}
	var _proto = FruitSettingPage.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.source = "background_jpg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.grpscale_i = function () {
		var t = new eui.Group();
		this.grpscale = t;
		t.height = 1334;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 750;
		t.elementsContent = [this.btngohome_i(),this.grouptop_i(),this._Label2_i(),this._Label3_i(),this.togglesound_i(),this.toggleshake_i()];
		return t;
	};
	_proto.btngohome_i = function () {
		var t = new eui.Button();
		this.btngohome = t;
		t.label = "";
		t.left = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 39;
		t.skinName = FruitSettingPage$Skin14;
		return t;
	};
	_proto.grouptop_i = function () {
		var t = new eui.Group();
		this.grouptop = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 155;
		t.x = -166.00000000000003;
		t.y = -235.99999999999997;
		t.elementsContent = [this.imgtop_i(),this._Label1_i()];
		return t;
	};
	_proto.imgtop_i = function () {
		var t = new eui.Image();
		this.imgtop = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.9000000000000001;
		t.scaleY = 0.9000000000000001;
		t.source = "redtop_png";
		t.x = -247.00000000000006;
		t.y = 111.97999999999999;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 45;
		t.text = "SETTING";
		t.y = 129.91;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.left = 140;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 45;
		t.text = "SOUND";
		t.verticalCenter = -55;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.left = 140;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 45;
		t.text = "SHAKE";
		t.verticalCenter = 128;
		return t;
	};
	_proto.togglesound_i = function () {
		var t = new eui.ToggleSwitch();
		this.togglesound = t;
		t.label = "ON";
		t.right = 130;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = -55;
		t.x = 279;
		t.skinName = FruitSettingPage$Skin15;
		return t;
	};
	_proto.toggleshake_i = function () {
		var t = new eui.ToggleSwitch();
		this.toggleshake = t;
		t.label = "ON";
		t.right = 130;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 128;
		t.x = 279;
		t.skinName = FruitSettingPage$Skin16;
		return t;
	};
	return FruitSettingPage;
})(eui.Skin);generateEUI.paths['resource/eui_skins/eui/ShopPage.exml'] = window.FruitShopPage = (function (_super) {
	__extends(FruitShopPage, _super);
	var FruitShopPage$Skin17 = 	(function (_super) {
		__extends(FruitShopPage$Skin17, _super);
		function FruitShopPage$Skin17() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","back_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = FruitShopPage$Skin17.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "back_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return FruitShopPage$Skin17;
	})(eui.Skin);

	var FruitShopPage$Skin18 = 	(function (_super) {
		__extends(FruitShopPage$Skin18, _super);
		function FruitShopPage$Skin18() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","shopbuy_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = FruitShopPage$Skin18.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "shopbuy_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return FruitShopPage$Skin18;
	})(eui.Skin);

	var FruitShopPage$Skin19 = 	(function (_super) {
		__extends(FruitShopPage$Skin19, _super);
		function FruitShopPage$Skin19() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","shopadd_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = FruitShopPage$Skin19.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "shopadd_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return FruitShopPage$Skin19;
	})(eui.Skin);

	function FruitShopPage() {
		_super.call(this);
		this.skinParts = ["imgtop","grouptop","btngohome","lblgold","leftbtn","leftnum","groupbuy","rightbtn","rightnum","groupadd","shopList","scrollershop","grpscale"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this.grpscale_i()];
	}
	var _proto = FruitShopPage.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.source = "background_jpg";
		return t;
	};
	_proto.grpscale_i = function () {
		var t = new eui.Group();
		this.grpscale = t;
		t.height = 1334;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 750;
		t.elementsContent = [this._Image2_i(),this.grouptop_i(),this.btngohome_i(),this.lblgold_i(),this._Image3_i(),this.groupbuy_i(),this.groupadd_i(),this.scrollershop_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.left = 106;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shoptarget_png";
		t.top = 94;
		return t;
	};
	_proto.grouptop_i = function () {
		var t = new eui.Group();
		this.grouptop = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 278;
		t.x = 37;
		t.y = 278;
		t.elementsContent = [this.imgtop_i(),this._Label1_i()];
		return t;
	};
	_proto.imgtop_i = function () {
		var t = new eui.Image();
		this.imgtop = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.9000000000000001;
		t.scaleY = 0.9000000000000001;
		t.source = "redtop_png";
		t.x = -247.00000000000006;
		t.y = 111.97999999999999;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0.5;
		t.size = 45;
		t.text = "KNIFE SHOP";
		t.y = 126.88;
		return t;
	};
	_proto.btngohome_i = function () {
		var t = new eui.Button();
		this.btngohome = t;
		t.label = "";
		t.left = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 39;
		t.skinName = FruitShopPage$Skin17;
		return t;
	};
	_proto.lblgold_i = function () {
		var t = new eui.Label();
		this.lblgold = t;
		t.anchorOffsetX = 1;
		t.right = 119;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 50;
		t.text = "334";
		t.top = 55;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.right = 34;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopgold_png";
		t.top = 37;
		return t;
	};
	_proto.groupbuy_i = function () {
		var t = new eui.Group();
		this.groupbuy = t;
		t.bottom = 216;
		t.height = 0;
		t.left = 50;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 0;
		t.elementsContent = [this.leftbtn_i(),this._Label2_i(),this._Image4_i(),this.leftnum_i()];
		return t;
	};
	_proto.leftbtn_i = function () {
		var t = new eui.Button();
		this.leftbtn = t;
		t.label = "";
		t.left = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.8;
		t.top = 0;
		t.skinName = FruitShopPage$Skin18;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 45;
		t.text = "BUY";
		t.x = 61.09;
		t.y = 43.16;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "shopgold2_png";
		t.x = 197.21;
		t.y = 12.07;
		return t;
	};
	_proto.leftnum_i = function () {
		var t = new eui.Label();
		this.leftnum = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "250";
		t.x = 193.72;
		t.y = 79.64;
		return t;
	};
	_proto.groupadd_i = function () {
		var t = new eui.Group();
		this.groupadd = t;
		t.bottom = 216;
		t.height = 0;
		t.right = 332;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 0;
		t.elementsContent = [this.rightbtn_i(),this._Image5_i(),this.rightnum_i(),this._Image6_i()];
		return t;
	};
	_proto.rightbtn_i = function () {
		var t = new eui.Button();
		this.rightbtn = t;
		t.label = "";
		t.left = 0;
		t.scaleX = 0.93;
		t.scaleY = 1.13;
		t.top = 0;
		t.skinName = FruitShopPage$Skin19;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.source = "shopgold2_png";
		t.x = 186.59;
		t.y = 24.19;
		return t;
	};
	_proto.rightnum_i = function () {
		var t = new eui.Label();
		this.rightnum = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 45;
		t.text = "+35";
		t.x = 102.82;
		t.y = 43.28;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopblueadd_png";
		t.x = 18.7;
		t.y = 36.76;
		return t;
	};
	_proto.scrollershop_i = function () {
		var t = new eui.Scroller();
		this.scrollershop = t;
		t.height = 470;
		t.horizontalCenter = 10;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 600;
		t.x = 85;
		t.y = 524;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.layout = this._TileLayout2_i();
		t.elementsContent = [this.shopList_i()];
		return t;
	};
	_proto._TileLayout2_i = function () {
		var t = new eui.TileLayout();
		return t;
	};
	_proto.shopList_i = function () {
		var t = new eui.List();
		this.shopList = t;
		t.height = 950;
		t.scaleX = 1;
		t.scaleY = 1;
		t.scrollEnabled = true;
		t.touchEnabled = true;
		t.width = 600;
		t.x = 0;
		t.y = 0;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		return t;
	};
	return FruitShopPage;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);