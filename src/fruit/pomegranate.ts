/**
 * fruit-sandia
 */
class Pomegranate extends BaseFruit {
    constructor () {
        super();
        this.img.texture = RES.getRes("pomegranate_png");
        this.img_part1.texture = RES.getRes("pomegranate-1_png");
        this.img_part2.texture = RES.getRes("pomegranate-2_png");
        this.img_part3.texture = RES.getRes("pomegranate-3_png");
        this.img_part4.texture = RES.getRes("pomegranate-4_png");
        this.img_part5.texture = RES.getRes("pomegranate-5_png");
        this.img_part6.texture = RES.getRes("pomegranate-6_png");
        this.img_part7.texture = RES.getRes("pomegranate-7_png");
        this.img_part8.texture = RES.getRes("pomegranate-8_png");

        this.initRotation = 85;
        this.rotationIndex = 1;

        this.splashColor = 0xff0000;

        this.setSize();
    }
}