const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var stand1,stand2;
var slingshot;
var knife,knifeImg;
var orange,orangeImg;
var watermelon,watermelonImg;
var pear,pearImg;

function preload(){
  knifeImg = loadImage("knife.png");
  orangeImg = loadImage("orange.png");
  watermelonImg = loadImage("watermelon.png");
  pearImg = loadImage("pear.png");
}

function setup() {
    createCanvas(900,400);

    engine = Engine.create();
    world = engine.world;

    Engine.run(engine);

    ground = new Ground();

    stand1 = new Stand(390,300,250,10);
    stand2 = new Stand(700,200,200,10);
   
    
    orange1 = new Orange(300,275,30,28);
    orange2 = new Orange(330,275,30,28);
    orange3 = new Orange(360,275,30,28);
    orange4 = new Orange(390,275,30,28);
    orange5 = new Orange(420,275,30,28);
    orange6 = new Orange(450,275,30,28);
    orange7 = new Orange(480,275,30,28);

    watermelon1 = new Watermelon(330,235,30,28);
    watermelon2 = new Watermelon(360,235,30,28);
    watermelon3 = new Watermelon(390,235,30,28);
    watermelon4 = new Watermelon(420,235,30,28);
    watermelon5 = new Watermelon(450,235,30,28);

    pear1 = new Pear(360,195,20,20);
    pear2 = new Pear(390,195,20,20);
    pear3 = new Pear(420,195,20,20);
    pear4 = new Pear(450,195,20,20);
    pear5 = new Pear(330,195,20,20);
  
    o1 = new Orange(640,175,30,28);
    o2 = new Orange(670,175,30,28);
    o3 = new Orange(700,175,30,28);
    o4 = new Orange(730,175,30,28);
    o5 = new Orange(760,175,30,28);

    w1 = new Watermelon(670,135,30,28);
    w2 = new Watermelon(700,135,30,28);
    w3 = new Watermelon(730,135,30,28);

    p9 = new Pear(700,131,20,20);

    knife = new Knife(150,100,20,35);
    

    slingshot =new Slingshot(knife.body,{x:130,y:110});
}

function draw() {
    background("darkbrown");
   
    textSize(22);
    fill("white");
    text("Drag the Knife and Release it, to launch it towards the fruits",110,30);
  
    ground.display();
    stand1.display();
    stand2.display();
    strokeWeight(3);
    stroke(10);
   
    orange1.display();
    orange2.display();
    orange3.display();
    orange4.display();
    orange5.display();
    orange6.display();
    orange7.display();
    
    watermelon1.display();
    watermelon2.display();
    watermelon3.display();
    watermelon4.display();
    watermelon5.display();
    
    pear1.display();
    pear2.display();
    pear3.display();
    pear4.display();
    pear5.display();
    
    o1.display();
    o2.display();
    o3.display();
    o4.display();
    o5.display();
    
    w1.display();
    w2.display();
    w3.display();
    
    p9.display();

    knife.display();

    
    slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(knife.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode===32){
      slingshot.attach(knife.body);
    }
}
