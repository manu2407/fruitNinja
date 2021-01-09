//Game States
var PLAY=1;
var END=0;
var gameState=PLAY ;

var knife , fruitGroup ,alienGroup ,fruit1,fruit2,fruit3,fruit4 ;
var knifeImage , alien1, alien2 ;


function preload(){
  
  swordImage = loadImage("sword.png");
  
  fruit1=loadImage("fruit1.png");
   fruit2=loadImage("fruit2.png");
   fruit3=loadImage("fruit3.png");
   fruit4=loadImage("fruit4.png");
  
  alien1=loadAnimation("alien1.png");
  alien2=loadAnimation("alien2.png");
  
  gameOverImg = loadImage("gameover.png")
}




  
function setup() {
  createCanvas(600, 600);
  
  //creating sword
   sword=createSprite(40,200,20,20);
   sword.addImage(swordImage);
   sword.scale=0.7
   score=0;
  
  //set collider for sword
  sword.setCollider("rectangle",0,0,40,40);
 
  gameOver = createSprite(300,300);
  gameOver.addImage(gameOverImg);
  gameOver.scale=2
  gameOver.visible = false;
  //create fruit and monster Group variable here
 fruitGroup = new Group();
 alienGroup = new Group();
  
}

function draw() {
  background("lightblue");
  
  if(gameState===PLAY){
     
    
    
    //calling fruit and monster function
    fruits();
    Enemy();
    // Move knife with mouse
    sword.y=World.mouseY;
    sword.x=World.mouseX;
  
    // Increase score if knife touching fruit
   if( fruitGroup. isTouching(sword)){
      fruitGroup.destroyEach();
     score=score+1;
      }
    // Go to end state if knife touching enemy
        if( alienGroup. isTouching(sword)){
      alienGroup.destroyEach();
   gameState = END
  }} 
   else if (gameState === END) {
     sword.visible = false;
      gameOver.visible = true;
    console.log("hi");
    fruitGroup.setVelocityXEach(0);
    alienGroup.setVelocityXEach(0);
    
     
  
     }
  
  drawSprites();
  
  //Display score
  textSize(25);
  text("Score : "+ score,250,50);
}

function fruits(){
  if (World.frameCount%80===0 )
{ var fruit = createSprite(400,200,20,20);
  fruit. scale = 0.2;
  //fruit.debug = true;  
 var r=  Math.round(random(1,4)) ; 
  if (r==1){
    fruit.addImage(fruit1);
  }  else if(r==2){
    fruit.addImage(fruit2);
  } else if(r==3){
    fruit.addImage(fruit3);
  } else if(r==4){
    fruit.addImage(fruit4);
  }
  
   fruit.y=Math.round(random(50,340)) ;
   fruit.velocityX= -7;
   fruit.setLifetime=100;
    
   fruitGroup.add(fruit) ;
    
  }}
  
  function Enemy(){
    if (World.frameCount%200===0 )
{ var alien = createSprite(400,200,20,20);
  
  //fruit.debug = true;  
 var r=  Math.round(random(1,2)) ; 
  if (r==1){
    alien.addAnimation("moving" , alien1);
  } else if ( r==2) {
    alien.addAnimation("moving", alien2);
  }  
    
    alien.y=Math.round(random(100,300)) ;
    alien.velocityX= -8;
    alien.setLifetime=50;
  
  alienGroup.add(alien);
  
  
}}
  
