/**
 * fruit-sandia
 */
class KiwiRotate extends BaseRotateFruit {
    constructor () {
        super();
        this.img.texture = RES.getRes("kiwi_png");
        this.img_part1.texture = RES.getRes("kiwi-1_png");
        this.img_part2.texture = RES.getRes("kiwi-2_png");
        this.img_part3.texture = RES.getRes("kiwi-3_png");
        this.img_part4.texture = RES.getRes("kiwi-4_png");
        this.img_part5.texture = RES.getRes("kiwi-5_png");
        this.img_part6.texture = RES.getRes("kiwi-6_png");
        this.img_part7.texture = RES.getRes("kiwi-7_png");
        this.img_part8.texture = RES.getRes("kiwi-8_png");

        this.initRotation = 85;
        this.rotationIndex = 1;
        this.effectIndex = 2;

        this.splashColor = 0xff0000;

        this.setSize();
    }
}