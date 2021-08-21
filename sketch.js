//declaring global variables
var ship_sailing;
var sea;
var ship;
function preload(){
ship_sailing = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
sea_water = loadAnimation("sea.png");
}

function setup(){
  createCanvas(400,400);
  
  sea = createSprite(50,200,400,400)
  sea.addAnimation("sea",sea_water);
  sea.scale = 0.4;
  sea.velocityX = -4;
  
 


  ship = createSprite(100,250,20,50);
  ship.addAnimation("sailing",ship_sailing);
  ship.scale = 0.1;

}

function draw() {
  background("blue");
  sea.velocityX = -5;

  if(sea.x < 0){
    sea.x = 825
    sea.y = 200
  }
 drawSprites();
}