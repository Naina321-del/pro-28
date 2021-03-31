class Mango {

    constructor(x,y,r){

        var options = {
            isStatic : true
        }

        this.body = Bodies.circle(x, y, r, options);
        this.image = loadImage("Images/mango.png");
        World.add(world, this.body);

        this.x = x;
        this.y = y;
        this.r = r;
    }
    display(){

        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);
        pop();
    }
}