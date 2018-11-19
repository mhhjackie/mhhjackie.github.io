/**
 * fruit-basaha
 */
class BasahaRotate extends BaseRotateFruit {
    constructor () {
        super();
        this.img.texture = RES.getRes("strawberry_png");
        this.img_part1.texture = RES.getRes("strawberry-1_png");
        this.img_part2.texture = RES.getRes("strawberry-2_png");
        this.img_part3.texture = RES.getRes("strawberry-3_png");
        this.img_part4.texture = RES.getRes("strawberry-4_png");
        this.img_part5.texture = RES.getRes("strawberry-5_png");
        this.img_part6.texture = RES.getRes("strawberry-6_png");
        this.img_part7.texture = RES.getRes("strawberry-7_png");
        this.img_part8.texture = RES.getRes("strawberry-8_png");

        this.initRotation = 45;
        this.rotationIndex = 1;
        this.effectIndex = 6;

        this.splashColor = 0xff0000;

        this.setSize();
    }
}