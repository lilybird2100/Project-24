class Paper {
    constructor(x,y,raidus){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2

        }   

        this.body = Matter.Bodies.circle(x,y,raidus, options);
        this.raidus = raidus; 
        World.add(world, this.body); 
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        fill("purple");
        ellipse(0, 0, this.raidus, this.raidus); 
        pop();
    }

}