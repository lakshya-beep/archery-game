const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var line1;

var ground;

var box1;

var rope;

var myengine,myworld;

var bow,bowimage;
var e;
var enemy = [];

var hint,hintmessage;

var enemy1image,enemy2image,enemy3image;

var enemy1,enemy2,eemy3;

var image1,image2,image3;

var gamestate = "attach";

function preload(){

  bowimage = loadImage("bow.png");
  loadImage("enemy1.png");

  image2 = loadImage("enemy1.png");
  image2 = loadImage("enemy2.png");
  image3 = loadImage("enemy3.png");

}

function setup() {
  createCanvas(displayWidth-100,displayHeight-210);

  myengine = Engine.create();
  myworld = myengine.world;

  line1 = new Box(100,200,50,50);
  box1 = new Box(500,300,40,18); 

  rope = new Bow(line1.body, {x:200, y:400});

  ground = new Ground(displayWidth/2,displayHeight/2+220,displayWidth,20);

  bow = createSprite(200,300);

  hint = createButton('Hint');
  hint.position(250, 200);

 
 


 // for(var i = 1; i<700; i+=100){
 

 // bow.addImage(bowimage);

}


var angle = 0;

function draw() {
  background(255,255,255);  
  Engine.update(myengine);

  
  line1.display();
  box1.display();

  rope.display();

  ground.display();

  hint.mousePressed(()=>{
    
    hintmessage = createElement('p');
    hintmessage.html('Welcome to the archery game.Compleately userly friendly game.Try to make the best of your high scores and share it with as many as possible') ;
  hintmessage.position(200,20);
 })


   
darts();



 for(var j =  0; j<enemy.length; j++ )
{
  enemy[j].display();
}
 
/*fill(255)
  angle += 5;
  translate(60,60);
  rotate(angle);
  rectMode(CENTER);
  rect(0,0,50,50);
 */
 
  drawSprites();
  
fill(0);
//text(mouseX+","+mouseY, mouseX,mouseY);

}

function darts(){
  if(frameCount%150 === 0){
    e = enemy.push(new Line1(Math.round(random(displayWidth/2,1200)),0,50,50));
    }
  
}

function mouseDragged() {
  
  if (gamestate === "attach") {
    Matter.Body.setPosition(line1.body,{x: mouseX, y: mouseY});
  }
}

function mouseReleased() {

  rope.fly();
  gamestate = "fly";
}
  
function keyPressed(){
  if(keyCode === 32){
    rope.reattach(line1.body);
    gamestate = "attach";

  }
}