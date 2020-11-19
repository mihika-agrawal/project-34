class Bob {
  constructor(x, y, color) {
    var options = {
      restitution: 1,
        friction:0.4,
       frictionAir:0.0,
       slop:1,
       inertia: Infinity 
    }
    this.body = Bodies.rectangle(x, y,40,40, options);
    this.x= x;
    this.y=y;
    this.color=color;
    World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle;
    var p= this.body.position;
    push();
    translate(p.x, p.y); 
    rotate(angle);
    ellipseMode(CENTER);
    strokeWeight(3);
    fill(this.color);
    ellipse(0, 0, 60,60);
    pop();
  }
}


