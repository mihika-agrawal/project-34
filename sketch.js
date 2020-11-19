const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var mconstraint;
var sling1, sling2,sling3,sling4,sling5;
var bob1,bob2,bob3,bob4,bob5;

function setup(){
    var canvas = createCanvas( 1000,800 );
    engine = Engine.create();
    world = engine.world;

/*let canvasmouse = Mouse.create(canvas.elt);
canvasmouse.pixelRatio = pixelDensity();
let options ={
mouse:canvasmouse
}
mconstraint= MouseConstraint.create(engine, options);
world.add(world,mConstraint);*/

bob1= new Bob(200,300,"grey");
 sling1= new Sling(bob1.body,{x:200,y:100});
 bob2= new Bob(260,300,"grey");
 sling2= new Sling(bob2.body,{x:260,y:100});
 bob3= new Bob(320,300,"grey");
 sling3= new Sling(bob3.body,{x:320,y:100});
 bob4= new Bob(380,300,"grey");
 sling4= new Sling(bob4.body,{x:380,y:100});
 bob5= new Bob(440,300,"grey");
 sling5= new Sling(bob5.body,{x:440,y:100});
}

function draw(){
    background(0);
    Engine.update(engine); 
    bob1.display();
     sling1.display();
     bob2.display();
     sling2.display();
     bob3.display();
     sling3.display();
     bob4.display();
     sling4.display();
     bob5.display();
     sling5.display();
}
 function mouseDragged(){
 Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY});
 }

