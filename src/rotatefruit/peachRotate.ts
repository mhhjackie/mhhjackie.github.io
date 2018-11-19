/**
 * fruit-peach
 */
class PeachRotate extends BaseRotateFruit {
    constructor () {
        super();
        this.img.texture = RES.getRes("pear_png");
        this.img_part1.texture = RES.getRes("pear-1_png");
        this.img_part2.texture = RES.getRes("pear-2_png");
        this.img_part3.texture = RES.getRes("pear-3_png");
        this.img_part4.texture = RES.getRes("pear-4_png");
        this.img_part5.texture = RES.getRes("pear-5_png");
        this.img_part6.texture = RES.getRes("pear-6_png");
        this.img_part7.texture = RES.getRes("pear-7_png");
        this.img_part8.texture = RES.getRes("pear-8_png");


        this.initRotation = -45;
        this.rotationIndex = 0;
        this.effectIndex = 1;

        this.splashColor = 0xf8860d;

        this.setSize();
    }
}