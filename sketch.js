const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var object;

function setup() {
  engine = Engine.create();
  world = Engine.world;

  createCanvas(400,400);

  object = Bodies.rectangle(400,200,100,80);
  World.add(world,object);
  //solarsystem.add(planetearth,human);

  console.log(object);

}

function draw() {
  background(220);  
  rectMode(CENTER);
  rect(object.position.x, object.position.y,100,80);
  drawSprites();

}