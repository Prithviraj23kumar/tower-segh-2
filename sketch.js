const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var band;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

   box2 = new Box(330,233,30,40);
    box3 = new Box(360,233,30,40);
    box1 = new Box(390,233,30,40);
    box4 = new Box(420,233,30,40);
    box5 = new Box(450,233,30,40);

    box6 = new Box(360,195,30,40);
    box7 = new Box(390,195,30,40);
    box8 = new Box(420,195,30,40);
    box9 = new Box(390,155,30,40);

    box10 = new Box(800,133,30,40);
    box11 = new Box(830,133,30,40);
    box12 = new Box(860,133,30,40);
    box13 = new Box(890,133,30,40);
    box14 = new Box(920,133,30,40);

    box15 = new Box(830,95,30,40);
    box16= new Box(860,95,30,40);
    box17= new Box(890,95,30,40);
    box18= new Box(860,55,30,40);

    ground1 = new Ground(380,352,200,20)
    ground2 = new Ground(850,184,200,20)
    ground = new Ground(600,height,1200,20)

    // pig1 = new Pig(810,350)
    // pig2 = new Pig(810,220)
     bird = new Bird(50,150)
    // log1 = new Log(810,260,300,PI/2)
    // log2 = new Log(810,180,300,PI/2)
    // log3 = new Log(750,120,150,PI/7)
    // log4 = new Log(850,120,150,-PI/7)
   band = new Slingshot(bird.body,{x:50,y:150})
}

function draw(){
    background(0);
    textSize(30)
    fill("red")
    text(mouseX+" "+mouseY,100,100)
    Engine.update(engine);
    
    ground.display();
    ground1.display();
    ground2.display();
    bird.display();

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
    box11.display();
    box12.display();
    box13.display();
    box14.display();

    box15.display();
    box16.display();
    box17.display();
    box18.display();

    band.display();

}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    band.fly();
}