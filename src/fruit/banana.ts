/**
 * fruit-banana
 */
class Banana extends BaseFruit {
    constructor () {
        super();
        this.img.texture = RES.getRes("banana_png");
        this.img_part1.texture = RES.getRes("banana-1_png");
        this.img_part2.texture = RES.getRes("banana-2_png");
        this.img_part3.texture = RES.getRes("banana-3_png");
        this.img_part4.texture = RES.getRes("banana-4_png");
        this.img_part5.texture = RES.getRes("banana-5_png");
        this.img_part6.texture = RES.getRes("banana-6_png");
        this.img_part7.texture = RES.getRes("banana-7_png");
        this.img_part8.texture = RES.getRes("banana-8_png");

        this.initRotation = 90;
        this.rotationIndex = 1;

        this.splashColor = null;

        this.setSize();
    }
}