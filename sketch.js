const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var box1, box2, box3, box4, box5, box6, 
    box7, box8, box9, box10, box11,
    box12, box13, box14, box15, box16;

var polygon,polygon_img;
var bg,backgroundImg;
var bg = "light.png";

function preload(){
  getBackgroundImage();
  polygon_img = loadImage("polygon.png");
}

function setup() {
  createCanvas(800,400);

   engine = Engine.create();
   world = engine.world;
   
    ground = new Ground(400,380,800,20);
    
    //level 4 in stage 1
    box1 = new Box(300,275,20,30);
    box2 = new Box(320,275,20,30);
    box3 = new Box(340,275,20,30);
    box4 = new Box(360,275,20,30);
    box5 = new Box(380,275,20,30);
    box6 = new Box(400,275,20,30);
    box7 = new Box(420,275,20,30);
    //level 3 in stage 1
    box8 = new Box(320,245,20,30);
    box9 = new Box(340,245,20,30);
    box10 = new Box(360,245,20,30);
    box11 = new Box(380,245,20,30);
    box12 = new Box(400,245,20,30);
    //level 2 in stage 1
    box13 = new Box(340,205,20,30);
    box14 = new Box(360,205,20,30);
    box15 = new Box(380,205,20,30);
    //top level in stage 1
    box16 = new Box(360,175,20,30);

    box17 = new Box(520,255,20,30);
    box18 = new Box(540,255,20,30);
    box19 = new Box(560,255,20,30);
    box20 = new Box(580,255,20,30);   
    box21 = new Box(600,255,20,30);

    box22 = new Box(540,225,20,30);
    box23 = new Box(560,225,20,30);
    box24 = new Box(580,225,20,30);

    box25 = new Box(560,195,20,30);


    stand1 =  new Ground(360,285,160,10);
    stand2 = new Ground(560,265,110,10);

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);
  
    slingshot = new Slingshot(this.polygon,{x:120,y:150});

    Engine.run(engine);
   

}

function draw() {
  if(backgroundImg)
    background(backgroundImg);  
   Engine.update(engine);
   fill(255)
   textSize(25);
   text("Drag the ball to destroy the blocks!!",220,40);
   fill(255);
   textSize(20);
   text("Press the space key to get another chance!!",200,350);

   imageMode(CENTER);
   image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

   stroke(15);
   fill("red");
   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   box7.display();
   stroke(15);
   fill("orange")
   box8.display();
   box9.display();
   box10.display();
   box11.display();
   box12.display();
   stroke(15);
   fill("pink");
   box13.display();
   box14.display();
   box15.display();
   stroke(15);
   fill("yellow");
   box16.display();
   stroke(15);
   fill("red");
   box17.display(); 
   box18.display(); 
   box19.display(); 
   box20.display(); 
   box21.display(); 
   stroke(15);
   fill("orange");
   box22.display();
   box23.display();
   box24.display();
   stroke(15);
   fill("pink");
   box25.display();
 
   stand1.display();
   stand2.display();
   slingshot.display();
   stroke(2);
   ground.display();

   

}

function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(this.polygon, {x:mouseX, y:mouseY});
 // }
}

function mouseReleased(){
  slingshot.fly();
 // gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32){
     slingshot.attach(this.polygon);
    Matter.Body.setPosition(this.polygon,{x:120,y:160});
  }}
  async function getBackgroundImage(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
 
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11, 13);
    
 
    if (hour >= 06 && hour <= 18) {
      bg = "light.jpg";
    } else {
      bg = "dark.jpg";
    }
    backgroundImg = loadImage(bg);
  }
