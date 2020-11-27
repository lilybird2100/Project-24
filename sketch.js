
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	wall1 = new dustbin(850,325,100,PI/2); 
	wall2 = new dustbin(750, 325, 100, -PI/2);
	wall3 = new dustbin2(500, 375, 1000, 30);
	ball = new Paper(200, 200, 30); 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  wall1.display(); 
  wall2.display(); 
  wall3.display(); 
  ball.display(); 
  drawSprites();
  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	}

}



