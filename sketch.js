var backgroundImg;
var bat_left,bat_right;
var leftBatGroup,rightBatGroup;
var leftZ1Group,leftZ2Group,leftZ3Group;
var rightZ1Group,rightZ2Group,rightZ3Group;
var LZ1,LZ2,LZ3;
var RZ1,RZ2,RZ3;

function preload(){
backgroundImg = loadImage("backGround.png");

bat_left = loadAnimation("BatFlying/left_bat(1).png","BatFlying/left_bat(2).png");
bat_right = loadAnimation("BatFlying/right_bat(1).png","BatFlying/right_bat(2).png")

LZ1 = loadAnimation("LZombie/L_zombie1.png","LZombie/L_zombie1.2.png","LZombie/L_zombie1.3.png");
LZ2 = loadAnimation("LZombie/L_zombie2.png","LZombie/L_zombie2.1.png");
LZ3 = loadAnimation("LZombie/L_zombie3.png","LZombie/L_zombie3.1.png","LZombie/L_zombie3.2.png");

RZ1 = loadAnimation("RZombie/R_zombie1.png","RZombie/R_zombie1.2.png","RZombie/R_zombie1.3.png");
RZ2 = loadAnimation("RZombie/R_zombie2.png","RZombie/R_zombie2.1.png");
RZ3 = loadAnimation("RZombie/R_zombie3.png","RZombie/R_zombie3.1.png","RZombie/R_zombie3.2.png");

}

function setup(){
createCanvas(windowWidth,windowHeight);

leftBatGroup=new Group();
rightBatGroup = new Group();
leftZ1Group = new Group();
leftZ2Group = new Group();
leftZ3Group = new Group();

rightZ1Group = new Group();
rightZ2Group = new Group();
rightZ3Group = new Group();

}

function draw(){
background(backgroundImg);

spawnBats();
spawnLeftZombie();
spawnRightZombie();

drawSprites();
}

function spawnBats(){
    if(frameCount%200 === 0){
       var leftBat = createSprite(0,height-200,30,10);
       leftBat.y=Math.round(random(50,250));
       leftBat.addAnimation("flying",bat_left);
       leftBat.velocityX=3;

       leftBat.scale=0.2
       leftBatGroup.add(leftBat);
    }

    if(frameCount%150 === 0){
        var rightBat = createSprite(width-50,height-200,30,10);
        rightBat.y=Math.round(random(50,250));
        rightBat.addAnimation("flyingRight",bat_right);
        rightBat.velocityX=-3;
 
        rightBat.scale=0.2
        rightBatGroup.add(rightBat);
     }
    
}

function spawnLeftZombie(){
   if(frameCount%150 === 0){
      var leftZ1= createSprite(0,height-200,30,10);
      leftZ1.y=Math.round(random(height-220,height-300));
      leftZ1.addAnimation("moving1",LZ1);
      leftZ1.velocityX=2;

      leftZ1.scale=0.3
      leftZ1Group.add(leftZ1);
   }

   if(frameCount%170 === 0){
      var leftZ2= createSprite(-50,height-200,30,10);
      leftZ2.y=Math.round(random(height-220,height-300));
      leftZ2.addAnimation("moving2",LZ2);
      leftZ2.velocityX=1.3;
      
      leftZ2.scale=0.5
      leftZ2Group.add(leftZ2);
   }
   
   if(frameCount%190 === 0){
      var leftZ3= createSprite(-50,height-200,30,10);
      leftZ3.y=Math.round(random(height-220,height-300));
      leftZ3.addAnimation("moving3",LZ3);
      leftZ3.velocityX=1.7;
      
      leftZ3.scale=0.5
      leftZ3Group.add(leftZ3);
   }

}

function spawnRightZombie(){
   if(frameCount%150 === 0){
      var rightZ1= createSprite(width-50,height-200,30,10);
      rightZ1.y=Math.round(random(height-220,height-300));
      rightZ1.addAnimation("moving1",RZ1);
      rightZ1.velocityX=-2;

      rightZ1.scale=0.3
      rightZ1Group.add(rightZ1);
   }

   if(frameCount%170 === 0){
      var rightZ2= createSprite(width-50,height-200,30,10);
      rightZ2.y=Math.round(random(height-220,height-300));
      rightZ2.addAnimation("moving2",RZ2);
      rightZ2.velocityX=-1.3;
      
      rightZ2.scale=0.5
      rightZ2Group.add(rightZ2);
   }
   
   if(frameCount%190 === 0){
      var rightZ3= createSprite(width-50,height-200,30,10);
      rightZ3.y=Math.round(random(height-220,height-300));
      rightZ3.addAnimation("moving3",RZ3);
      rightZ3.velocityX=-1.7;
      
      rightZ3.scale=0.5
      rightZ3Group.add(rightZ3);
   }
}


