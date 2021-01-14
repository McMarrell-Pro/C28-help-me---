
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree,boy,boyImg,stone,mango1,mango2,mango3;
var elastic;

function preload()
{
 boyImg = loadImage("Plucking mangoes/boy.png");


}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy = createSprite(200,600,50,50);
	boy.addImage(boyImg);
	boy.scale = 0.15;

	tree = new Tree(600,450,50,60);

	stone = new Stone(120,520,20,20);
	elastic = new Elastic(stone.body,{x:120,y:520});

	mango1 = new Mango(500,300,5,1);
	mango2 = new Mango(700,340,5,1);
	mango3 = new Mango(563,400,5,1);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  elastic.display();

}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
	
}
function mouseReleased(){
    elastic.fly();
}