const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 700;
const explosions = [];

class Explosion {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.spriteWidth = 200;
        this.spriteHeight = 179;
        this.width = spriteWidth * 0.5;
        this.height = spriteHeight * 0.5;
        this.image = new Image();
        this.image.src = "images/boom.png";
        this.frame = 0;
    }
}