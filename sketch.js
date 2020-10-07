
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1,ground1,paper1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
dustbin1= new dustbin();
ground1= new ground(400,580,800,20);
paper1 = new paper(50,550);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
ground1.display();
paper1.display();
dustbin1.display();



  drawSprites();
}
  function keyPressed(){
if (keyCode===UP_ARROW){

Matter.Body.applyForce(paper1.body,paper1.body.position,{
	x:65, y:-65
});

  }}
 




