class Stone {

    constructor(x,y,r){

        var options = {
            isStatic : true,
            restitution : 0.1,
            friction : 1, 
            density : 1.2
        }

        this.body =  Bodies.circle(x, y, r, options);
        this.image = loadImage("Images/stone.png");
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