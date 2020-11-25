var fixedRect;
var movingRect;

function setup() {

  createCanvas(1200,800);

  fixedRect=createSprite(400,100,50,80);
  fixedRect.shapeColor="green";
  movingRect=createSprite(400,800,80,30);
  movingRect.shapeColor="green";
  
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background("black");

  if (movingRect.x - fixedRect.x < (fixedRect.width+movingRect.width)/2 && 
     fixedRect.x - movingRect.x < (fixedRect.width+movingRect.width)/2 ) {
       movingRect.velocityX = movingRect.velocityX*(-1);
       fixedRect.velocityX = fixedRect.velocityX*(-1);
     }
  if(movingRect.y - fixedRect.y < (fixedRect.height+movingRect.height)/2   && 
     fixedRect.y - movingRect.y < (fixedRect.height+movingRect.height)/2   ) {
   
      movingRect.velocityY = movingRect.velocityY*(-1);
       fixedRect.velocityY = fixedRect.velocityY*(-1);
  }
  drawSprites();
}