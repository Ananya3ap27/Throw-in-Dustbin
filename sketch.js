
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,wall1,wall2,wall3,ball;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(width/2,650,width,20);
	
	wall1=new BinWall1(550,645-10,80,10);
	wall2=new BinWall2(550+45,610,10,60);
	wall3=new BinWall3(550-45,610,10,60);

	ball=new Ball(100,500,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball.body, ball.body.position, {x:1,y:-1})
  }
  if(ball.body.position.x>260){
	Matter.Body.applyForce(ball.body, ball.body.position, {x:-1,y:1})
  }

  ground.display();

  wall1.display();
  wall2.display();
  wall3.display();
  
  ball.display();

  
  drawSprites();
 
}



