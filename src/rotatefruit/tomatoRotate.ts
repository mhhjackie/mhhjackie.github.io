/**
 * fruit-sandia
 */
class TomatoRotate extends BaseRotateFruit {
    constructor () {
        super();
        this.img.texture = RES.getRes("tomato_png");
        this.img_part1.texture = RES.getRes("tomato-1_png");
        this.img_part2.texture = RES.getRes("tomato-2_png");
        this.img_part3.texture = RES.getRes("tomato-3_png");
        this.img_part4.texture = RES.getRes("tomato-4_png");
        this.img_part5.texture = RES.getRes("tomato-5_png");
        this.img_part6.texture = RES.getRes("tomato-6_png");
        this.img_part7.texture = RES.getRes("tomato-7_png");
        this.img_part8.texture = RES.getRes("tomato-8_png");

        this.initRotation = 85;
        this.rotationIndex = 1;
        this.effectIndex = 4;

        this.splashColor = 0xff0000;

        this.setSize();
    }
}