/**
 * fruit-sandia
 */
class RedApple extends BaseFruit {
    constructor () {
        super();
        this.img.texture = RES.getRes("redApple_png");
        this.img_part1.texture = RES.getRes("redApple-1_png");
        this.img_part2.texture = RES.getRes("redApple-2_png");
        this.img_part3.texture = RES.getRes("redApple-3_png");
        this.img_part4.texture = RES.getRes("redApple-4_png");
        this.img_part5.texture = RES.getRes("redApple-5_png");
        this.img_part6.texture = RES.getRes("redApple-6_png");
        this.img_part7.texture = RES.getRes("redApple-7_png");
        this.img_part8.texture = RES.getRes("redApple-8_png");

        this.initRotation = 85;
        this.rotationIndex = 1;

        this.splashColor = 0xff0000;

        this.setSize();
    }
}