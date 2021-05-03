var score=0;
var count=50;
var gameState=1


function preload(){
dum = loadImage("dummy-removebg-preview.png")
gen = loadImage("gen2.png")
guddu = loadImage("guddu.png")
shouto=loadImage("shigaraki.png")
back=loadImage("background.png")
}
 
function setup() {
  createCanvas(displayWidth-30,displayHeight-110);
 dum1= createSprite(100, 80, 50, 50);
 dum1.addImage(dum)
 dum1.scale=0.3
 dum2= createSprite(100, 290, 50, 50);
 dum2.addImage(dum)
 dum2.scale=0.3  
 dum3= createSprite(100, 520, 50, 50);
 dum3.addImage(dum)
 dum3.scale=0.3 
 
 shooter=createSprite(width-130,height/2)
 shooter.addImage(gen)
 shooter.scale=0.4
 shooter.rotation=360

 edges=createEdgeSprites();

 bulletg=createGroup();
 obsg=createGroup();
 dumg = createGroup()
 dumg.add(dum1)
 dumg.add(dum2)
 dumg.add(dum3)
}


function draw() {
  background(back);  

  if(gameState===1){

  
shooter.velocityY=0;

fill("white")
textSize(25);
text("Score: "+ score,width-130,30)
text("Bullet: "+ count,width-130,60)
if(keyDown("UP")){
shooter.velocityY=-3
}

if(keyDown("DOWN")){
  shooter.velocityY=3
  }

shooter.collide(edges)

if(bulletg.isTouching(obsg)){
bulletg.destroyEach();
}

if(keyDown("enter") && frameCount%8===0){
  bullet=createSprite(shooter.x-130,shooter.y+10)
  count--
  bullet.addImage(guddu)
  bullet.velocityX=-30
  bullet.scale=0.09
  bulletg.add(bullet)
}

for(var i= 0;i<bulletg.length;i++){
if(bulletg.get(i).isTouching(dumg)){
bulletg.get(i).destroy();
score++;
}
}
tomura();
if(count<=0){
gameState=0
}
  }

if(gameState===0){
bulletg.destroyEach();
obsg.destroyEach();
shooter.velocityY=0

fill("white")
textSize(30);
text("Game Over!",width/2-100,height/2-50)
text("Press Space To Restart",width/2-168,height/2)
  
if(keyDown("space")){
gameState=1;
score=0;
count=50;
}

}

  drawSprites();
}
function tomura(){
if(frameCount%30===0){
 warp=createSprite(random(250,width-350),0)
warp.addImage(shouto)
warp.velocityY=8
warp.scale=0.3
obsg.add(warp)

warp.lifetime=width/8;
}


}