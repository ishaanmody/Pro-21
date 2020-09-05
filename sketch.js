var bullet,wall,speed,weight;
var D,thickness;

function setup() {
  createCanvas(1600,400);
bullet=createSprite(50,200,40,5);
speed=random(223,321);
thickness=random(22,83);
weight=random(30,52);
wall=createSprite(1200,200,thickness,height/2);
wall.shapeColor="darkgrey";

D=(0.5*weight*speed*speed)/(thickness*thickness*thickness);

}

function draw() {
  background(0); 
  
  bullet.velocityX=speed;

 if(bullet.collide(wall)){
speed=0;
bullet.x=1167;

  if (D<10){
wall.shapeColor="green";
}

  if (D>10){
    wall.shapeColor="red";
    }
  }
  drawSprites();
}