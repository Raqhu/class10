//declaring global variables
var trex, trex_running, edges;
var groundImage;
var ground;

function preload(){
  // loading animation for trex
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  //loading image for ground
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  
  // creating trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50

  //making the ground
  ground = createSprite(300,180,600,20);
  ground.x = ground.width/2;
  ground.addImage("ground1",groundImage)
}


function draw(){
  //set background color 
  background("white");
  //adding movement for the ground
  ground.velocityX = -4;
//infinite ground by resetting
  if(ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //logging the y position of the trex
  console.log(trex.y)
  
  //jump when space key is pressed
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  
  //adding an effect of gravity for trex
  trex.velocityY = trex.velocityY + 0.5;
  
  //stop trex from falling down
  trex.collide(ground);
  drawSprites();
}