
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boyImage = loadImage("Images/boy.png");
	
}

function setup() {
	createCanvas(1600, 790);


	engine = Engine.create();
	world = engine.world;

	boy = createSprite(215,600,50,50);
	boy.addImage(boyImage);
	boy.scale = 0.17;


	tree = new Tree(1200,405,600,700);

	ground = new Ground(width/2, height-50, width, 150);

	stone = new Stone(115,520,50);

	mango1 = new Mango(1200,260,100);
	mango2 = new Mango(1030,300,80);
	mango3 = new Mango(1300,150,60);
	mango4 = new Mango(1300,300,70);
	mango5 = new Mango(1150,160,80);
	mango6 = new Mango(1400,300,90);
	mango7 = new Mango(1100,350,60);

	sling = new SlingShot(stone.body,{x:115,y:520});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);

  ground.display();

  drawSprites();

  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  stone.display();
  sling.display();

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);

  keyPressed();
}

function mouseDragged(){

    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){

    sling.fly();   
}
function detectollision(lstone,lmango){

	stoneBodyPosition = lstone.body.position;
	mangoBodyPosition = lmango.body.position;
	
	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);

	if(distance <=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}
function keyPressed(){

	if(keyCode == 32){
		Matter.body.setPosition(stone.body,{x:115,y:520});
	}
}