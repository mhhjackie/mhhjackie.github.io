/**
 * fruit-sandia
 */
class LemonRotate extends BaseRotateFruit {
    constructor () {
        super();
        this.img.texture = RES.getRes("lemon_png");
        this.img_part1.texture = RES.getRes("lemon-1_png");
        this.img_part2.texture = RES.getRes("lemon-2_png");
        this.img_part3.texture = RES.getRes("lemon-3_png");
        this.img_part4.texture = RES.getRes("lemon-4_png");
        this.img_part5.texture = RES.getRes("lemon-5_png");
        this.img_part6.texture = RES.getRes("lemon-6_png");
        this.img_part7.texture = RES.getRes("lemon-7_png");
        this.img_part8.texture = RES.getRes("lemon-8_png");

        this.initRotation = 85;
        this.rotationIndex = 1;
        this.effectIndex = 3;

        this.splashColor = 0xff0000;

        this.setSize();
    }
}