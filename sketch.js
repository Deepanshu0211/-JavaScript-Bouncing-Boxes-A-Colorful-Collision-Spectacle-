var fixedrect, movingrect, box2, GameObject1, GameObject2, GameObject3, GameObject4, GameObject5;

function setup() {
  createCanvas(1000, 1000);
  fixedrect = createSprite(100, 400, 50, 50);
  movingrect = createSprite(700, 400, 50, 50);
  box2 = createSprite(200, 400, 50, 50);
  fixedrect.shapeColor = "red";
  movingrect.shapeColor = "green";
  box2.shapeColor = "blue";
  movingrect.velocityX = -5;
  fixedrect.velocityX = 5;
  box2.velocityX = 5;
  box2.velocityY = 4;

  GameObject2 = createSprite(400, 200, 50, 50);
  GameObject2.shapeColor = "blue";
}

function draw() {
  background("black");
  movingrect.x = mouseX;
  movingrect.y = mouseY;

  if (isTouching(movingrect, GameObject2)) {
    GameObject2.shapeColor = "green";
    movingrect.shapeColor = "yellow";
    bounceOffCanvasEdges(fixedrect);
    bounceOffCanvasEdges(movingrect);
    bounceOffCanvasEdges(box2);
  } else {
    GameObject2.shapeColor = "blue";
    movingrect.shapeColor = "red";
  }

  if (isTouching(box2, fixedrect) || isTouching(box2, movingrect)) {
    box2.shapeColor = "purple";
  } else {
    box2.shapeColor = "blue";
  }

  bounceoff(movingrect, fixedrect, box2);
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

function isTouching(object1, object2) {
  if (object1.x - object2.x < object2.width / 2 + object1.width / 2 &&
    object2.x - object1.x < object2.width / 2 + object1.width / 2 &&
    object1.y - object2.y < object2.height / 2 + object1.height / 2 &&
    object2.y - object1.y < object2.height / 2 + object1.height / 2) {
    return true;
  } else {
    return false;
  }
}

function bounceoff(object1, object2, object3) {
  if (object1.x - object2.x < object2.width / 2 + object1.width / 2 &&
    object2.x - object1.x < object2.width / 2 + object1.width / 2) {
    object1.velocityX = object1.velocityX * (-1);
    object2.velocityX = object2.velocityX * (-1);
  }
  if (object1.y - object2.y < object2.height / 2 + object1.height / 2 &&
    object2.y - object1.y < object2.height / 2 + object1.height / 2) {
    object1.velocityY = object1.velocityY * (-1);
    object2.velocityY = object2.velocityY * (-1);
  }

  if (object1.x - object3.x < object3.width / 2 + object1.width / 2 &&
    object3.x - object1.x < object3.width / 2 + object1.width / 2) {
    object1.velocityX = object1.velocityX * (-1);
    object3.velocityX = object3.velocityX * (-1);
  }
  if (object1.y - object3.y < object3.height / 2 + object1.height / 2 &&
    object3.y - object1.y < object3.height / 2 + object1.height / 2) {
    object1.velocityY = object1.velocityY * (-1);
    object3.velocityY = object3.velocityY * (-1);
  }
}
