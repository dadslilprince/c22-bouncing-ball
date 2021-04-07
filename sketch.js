
// renaming the Engine module of Matter.js library-- NameSpacing 

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies= Matter.Bodies;


var myEngine,myWorld;
var ground;
var ball;


function setup() {
  createCanvas(800,400);

  myEngine= Engine.create();

  //renaming the world object which is automatically created in the myEngine object
  myWorld = myEngine.world;
  
  //JSON object-- Java Script Object Notation
  //It has key:value pairs inside curly braces
  var options={
    isStatic:true
  }

  ground= Bodies.rectangle(400,380,800,20,options);
  World.add(myWorld,ground);

  console.log(ground);
  
  var ballOptions={
    restitution:2
  }
  ball=Bodies.circle(400,100,20,ballOptions);
  World.add(myWorld,ball);
  console.log(ball);
}

function draw() {
  background("lightgreen");  

  Engine.update(myEngine);

  // console.log(ground.position.x);
  // console.log(ground.position.y)
  
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  
}