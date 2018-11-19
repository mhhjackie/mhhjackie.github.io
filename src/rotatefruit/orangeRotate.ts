/**
 * fruit-sandia
 */
class OrangeRotate extends BaseRotateFruit {
    constructor () {
        super();
        this.img.texture = RES.getRes("orange_png");
        this.img_part1.texture = RES.getRes("orange-1_png");
        this.img_part2.texture = RES.getRes("orange-2_png");
        this.img_part3.texture = RES.getRes("orange-3_png");
        this.img_part4.texture = RES.getRes("orange-4_png");
        this.img_part5.texture = RES.getRes("orange-5_png");
        this.img_part6.texture = RES.getRes("orange-6_png");
        this.img_part7.texture = RES.getRes("orange-7_png");
        this.img_part8.texture = RES.getRes("orange-8_png");

        this.initRotation = 85;
        this.rotationIndex = 1;
        this.effectIndex = 5;

        this.splashColor = 0xff0000;

        this.setSize();
    }
}