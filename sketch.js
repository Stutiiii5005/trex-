
var trex ,trex_running;
function preload(){

 trexloadimage=loadAnimation("trex1.png","trex3.png","trex4.png")
}

function setup()
{
trexsprite=createSprite(200,200,50,50)
trexsprite.addAnimation("stuti",trexloadimage);

  createCanvas(600,200)
  
  //create a trex sprite
 
}

function draw(){
  background("white")
  drawSprites();
}
