/**
 * fruit-sandia
 */
class RedAppleRotate extends BaseRotateFruit {
    constructor () {
        super();
        this.img.texture = RES.getRes("redapple_png");
        this.img_part1.texture = RES.getRes("redapple-1_png");
        this.img_part2.texture = RES.getRes("redapple-2_png");
        this.img_part3.texture = RES.getRes("redapple-3_png");
        this.img_part4.texture = RES.getRes("redapple-4_png");
        this.img_part5.texture = RES.getRes("redapple-5_png");
        this.img_part6.texture = RES.getRes("redapple-6_png");
        this.img_part7.texture = RES.getRes("redapple-7_png");
        this.img_part8.texture = RES.getRes("redapple-8_png");

        this.initRotation = 85;
        this.rotationIndex = 1;
        this.effectIndex = 6;

        this.splashColor = 0xff0000;

        this.setSize();
    }
}