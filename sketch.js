const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box1;
var box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    ground =new Ground (200,390,400,10);
    box1 =new Box (225,60,50,50);
    box2 =new Box (200,30,40,40);

}

function draw(){
    background(0);
    Engine.update(engine);
   ground.display();
   box1.display();
   box2.display();
}