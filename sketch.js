var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world,canvas;
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

	fairy= createSprite(130, 520);
	//fairy.debug=true
	//fairy.setCollider("rectangle",500,-75,150,150)
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
		
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  star.x= starBody.position.x
  star.y= starBody.position.y
  Engine.update(engine);
fairy.display()
console.log(star.y)
if (star.y> 470 && starBody.position.y > 470){
	Matter.Body.setStatic(starBody,true);
}
  drawSprites();}
  //keyPressed()
  //display()	var pos =star.Body.position;var angle= star.Body.angle;	push();translate(pos.x,pos.y)rotate(angle)rectMode(CENTER);fill("yellow ochre");rect(0,0,star.width, star.height);pop()
function keyPressed(){
if (keyCode===LEFT_ARROW){
	fairy.x-=50
}
if (keyCode===RIGHT_ARROW){
	fairy.x+=50
}
if (keyCode===DOWN_ARROW){
	Matter.Body.setStatic(starBody,false)
}}


