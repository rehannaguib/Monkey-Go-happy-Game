
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  
}

function food(){
  if(frameCount%80===0){
    banana = createSprite(300,100,10,10);
    banana.y = random(120,200);
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-4;
    banana.lifetime=90;
    bananaGroup.add(banana);
  }
}

function obstacle(){
  if(frameCount%300===0){
    obstacleSprite = createSprite(300,315,20,20);
    obstacleSprite.addImage(obstacleImage);
    obstacleSprite.scale=0.1;
    obstacleGroup.add(obstacleSprite);
  }
}

function draw() {
  background(220);
  
  food();
  obstacle();
  
  
  monkey.collide(ground);
  
  ground.x=ground.width/2;
  
  if(keyDown("space")&&monkey.y>100){
    monkey.y=monkey.y-50;
  }
  monkey.velocityY = monkey.velocityY + 0.8;

  
  stroke("black");
  textSize(17);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+ survivalTime,100,50);
  
  drawSprites();
}






