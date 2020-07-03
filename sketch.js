const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var platform;



function setup(){
     createCanvas(800,400);
    Engine = engine.create();
    world = engine.world;

     Engine.run(engine);
 
    platform = new Platform(400, 200, 200, 170);
    box1 = new Box(350,190,30,30);
    box2= new Box(370,190,30,30);
    box3 = new Box(390,190,30,30);
    box4 = new Box(410,190,30,30);
   // box = new Box(430,190,30,30);
    box5 = new Box(350,170,30,30);
    box6 = new Box(370,170,30,30);
    box7 = new Box(350,190,30,30);
    box8 = new Box(350,150,30,30);
    box9 = new Box(370,150,30,30);
    box10 = new Box(360,130,30,30);
    slingShot1 = new Slingshort(bird.body,{x:600,y:200});
    bird1 = new Bird(600,200)
}

function draw(){
    background("blue");
  //  Engine.update(engine);
    strokeWeight(4);
   platform.display();
   box1.display();
   box2.display();
   box3.display(); 
   box4.display();
   box5.display();
   box6.display();
   box7.display();
   box8.display();
   box9.display();
   box10.display();
   slingShot1.display();
   bird1.display();
}

//function mouseDragged(){
   // Matter.Body.setPosition(bird1.body, {x: mouseX , y: mouseY});
//}


//function mouseReleased(){
 //   slingshot1.fly();
//}