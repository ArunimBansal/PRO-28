
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy,tree
function preload()
{
	boy=loadImage("boy.png")
	tree=loadImage("tree.png")
}

function setup() {
	createCanvas(1200, 700);
tree1=createSprite(1000,350,450,600)
tree1.addImage(tree)
tree1.scale=0.5
mango1=new Mango(1000,200,30)
mango1.scale=0.1
mango2=new Mango(1100,300,30)
mango3=new Mango(750,290,30)
mango4=new Mango(900,330,30)
stone1=new Stone(220,470,20)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	 launcher = new Launcher(stone.body,{x:200,y:100});
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  image(boy,200,400,200,300)
  drawSprites();
 mango1.display()
 mango2.display()
 mango3.display()
 mango4.display()
 stone1.display()
 launcher.display()
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
	
	
	
	}
	function mouseReleased(){
	
	 launcher.fly()   
	}

