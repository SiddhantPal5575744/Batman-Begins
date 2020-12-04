const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var walkingAnimation
var boy,gound
particles1=[];

var umbrella
 

function preload(){
   walkingAnimation=loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png");
    
}

function setup(){
    createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;
    boy=createSprite(300,500,50,50);
    boy.addAnimation("walking",walkingAnimation);
    boy.scale=0.2;

    umbrella=new Umbrella(300,490,50);
   
    
}

function draw(){
    background("black");
    Engine.update(engine);



     
    if(frameCount%1===0){
        particles1.push(new Particle(random(50,550), 3,3));
      
      }
     
      for (var j = 0; j < particles1.length; j++) {
        
        particles1[j].display();
      }

      umbrella.display();

      


      
      

       
      

 

      
// ground.display();
      drawSprites(); 
     
}  


