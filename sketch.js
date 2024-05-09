var fixedrect, movingrect, box2
var GameObject1, GameObject2,GameObject3,GameObject4,GameObject5



function setup() {
  createCanvas(800, 800);
  fixedrect = createSprite(100, 400, 50, 50);
  movingrect = createSprite(800, 400, 50, 50);
  box2 =createSprite(200, 400, 50,50);
  fixedrect.shapeColor = "red";
  movingrect.shapeColor = "green";
  box2.shapeColor = "blue";
  movingrect.velocityX = -5;
  fixedrect.velocityX = 5;
  box2.velocityX=5;
  box2.velocityY=4;
}

function draw() {
  background("black");
//movingrect.x=mouseX
//movingrect.y=mouseY

//if(isTouching(movingrect, GameObject2))
//{
 // GameObject2.shapeColor= "green";
 // movingrect.shapeColor ="yellow";

 bounceOffCanvasEdges(fixedrect);
 bounceOffCanvasEdges(movingrect);
 bounceOffCanvasEdges(box2);

//}
//else{
  //GameObject2.shapeColor= "blue";
 // movingrect.shapeColor ="red";

//}


bounceoff(movingrect,fixedrect,box2);

  drawSprites();


}




function bounceOffCanvasEdges(sprite) {
  if (sprite.x < 0 || sprite.x > width) {
    sprite.velocityX = sprite.velocityX * -1;
  }
  if (sprite.y < 0 || sprite.y > height) {
    sprite.velocityY = sprite.velocityY * -1;
  }
  
}




