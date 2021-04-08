var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world, fairy,canvas;
function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}
function setup() {
	var canvas= createCanvas(800, 750);

	fairyVoice.play();

	fairy1= new Fairy(130, 520);
	fairy1.debug=true
	fairy1.setCollider("rectangle",500,-75,150,150)
	fairy1.addAnimation("fairyflying",fairyImg);  
	fairy1.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	star.Body = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  Engine.update(engine);
fairy1.display()

  drawSprites();
  //display()	var pos =star.Body.position;var angle= star.Body.angle;	push();translate(pos.x,pos.y)rotate(angle)rectMode(CENTER);fill("yellow ochre");rect(0,0,star.width, star.height);pop()

if (keyDown("left")){
	fairy1.x-=10
}
if (keyDown("right")){
	fairy1.x+=10
}
}

