class Nummerbal extends Bal {
    nummer;

    constructor(_x, _y, _speedX, _speedY, _nummer) {
        super(_x, _y, _speedX, _speedY)
        this.nummer = _nummer;
    }

    show() {
        fill(0, 255, 0);
        ellipse(this.x, this.y, 50, 50);
        fill(0, 0, 0);
        textSize(32);
        text(this.nummer, this.x - 10, this.y + 10);
    }





}