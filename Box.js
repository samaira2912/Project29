class Box {
  constructor(x,y,width,height) {
    var options = {
        isStatic: false,
        'restitution':0.8,
        'friction':0.5,
        'density':0.8
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push();
    translate(pos.x,pos.y);
    rotate(this.body.angle);
    rectMode(CENTER);
    fill("blue");
    rect(0,0, this.width, this.height);
    pop();
  }
};