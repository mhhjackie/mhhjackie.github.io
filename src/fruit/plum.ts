/**
 * fruit-sandia
 */
class Plum extends BaseFruit {
    constructor () {
        super();
        this.img.texture = RES.getRes("plum_png");
        this.img_part1.texture = RES.getRes("plum-1_png");
        this.img_part2.texture = RES.getRes("plum-2_png");
        this.img_part3.texture = RES.getRes("plum-3_png");
        this.img_part4.texture = RES.getRes("plum-4_png");
        this.img_part5.texture = RES.getRes("plum-5_png");
        this.img_part6.texture = RES.getRes("plum-6_png");
        this.img_part7.texture = RES.getRes("plum-7_png");
        this.img_part8.texture = RES.getRes("plum-8_png");

        this.initRotation = 85;
        this.rotationIndex = 1;

        this.splashColor = 0xff0000;

        this.setSize();
    }
}