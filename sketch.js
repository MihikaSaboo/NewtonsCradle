const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint = Matter.Constraint;

var rod,ball1,ball2,ball3,ball4,ball5;
var engine,world;
function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  rod=new Ground(400,200,400,20);
 ball1=new Ball(400,500,30);
 sling1=new SlingShot(ball1.body,{x:400,y:200});
 ball2=new Ball(350,500,30);
 sling2=new SlingShot(ball2.body,{x:350,y:200});
 ball3=new Ball(460,500,30);
 sling3=new SlingShot(ball3.body,{x:460,y:200});
 ball4=new Ball(520,500,30);
 sling4=new SlingShot(ball4.body,{x:520,y:200});
 ball5=new Ball(290,500,30);
 sling5=new SlingShot(ball5.body,{x:290,y:200});
}

function draw() {
  Engine.update(engine);
  background(0);  
  
  rod.display();
  ball1.display();
  sling1.display();
  ball2.display();
  sling2.display();
  ball3.display();
  sling3.display();
  ball4.display();
  sling4.display();
  ball5.display();
  sling5.display();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    Matter.Body.applyForce(ball4.body,ball4.body.position,{x:550,y:0});
  }
} 
