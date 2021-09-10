class Bal{
x;
y;
speedX;
speedY;

constructor(_x, _y) {
    this.x = _x;
    this.y = _y;
    speedX = 3;
    speedY = -2;
}

show() {
    fill(255, 0, 0);
    ellipse(this.x, this.y, 50, 50);
}

update(){
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;

    if(this.x <= 0|| this.x >= 1280){
        this.speedX = this.speedX * -1;
    }

    if(this.y <= 0|| this.y >= 1280){
        this.speedY = this.speedY * -1;
    }
}

}

