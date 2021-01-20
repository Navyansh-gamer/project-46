var backgroundImg2;
var earth,earth2;
var textB;
var gameState ="serve";
var bg1,dismiss;


function preload(){
  backgroundImg2=loadImage("images/Earth.png")
  bg1=loadImage("images/ufo towards the earth.png")
}

function setup(){
  
  createCanvas(1200,600);

  
  earth=createSprite(600,300,1200,600);
  earth2=createSprite(600,300,1200,600);


  

  
  
  
}

function draw(){
  background("black");

  if ( gameState === "serve")
  {  earth2.addImage("b2",bg1);  
  
  

   dismiss=createButton("ENTER GAME");
   dismiss.position(500,550);

  dismiss.mousePressed(changeState)

  
  
  
  }
  else if (gameState ==="play"){
    earth.addImage("b1",backgroundImg2);
    textB=createInput("");
    textB.position(500,550);
    
    

  }
  

  
  
   drawSprites();
   fill("red")   
  text ("abc",100,100);
  
}
function changeState(){
  gameState="play";
 
}