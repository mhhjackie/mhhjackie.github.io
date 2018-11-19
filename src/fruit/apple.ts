/**
 * fruit-apple
 */
class Apple extends BaseFruit {
    constructor () {
        super();
        this.img.texture = RES.getRes("apple_png");
        this.img_part1.texture = RES.getRes("apple-1_png");
        this.img_part2.texture = RES.getRes("apple-2_png");
        this.img_part3.texture = RES.getRes("apple-3_png");
        this.img_part4.texture = RES.getRes("apple-4_png");
        this.img_part5.texture = RES.getRes("apple-5_png");
        this.img_part6.texture = RES.getRes("apple-6_png");
        this.img_part7.texture = RES.getRes("apple-7_png");
        this.img_part8.texture = RES.getRes("apple-8_png");

        this.initRotation = -45;
        this.rotationIndex = 0;
        

        this.splashColor = 0x87c310;
        this.setSize();
    }
}