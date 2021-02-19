var red,chuck

















function setup() {
  createCanvas(800,400);
  red=createSprite(200,100,50,100)
  red.shapeColor="red"
  red.debug=true
  chuck=createSprite(500,200,50,50)
  chuck.shapeColor="yellow"
  chuck.debug=true
  
}

function draw() {

  background("orange");  
  chuck.x=mouseX
  chuck.y=mouseY
  if(chuck.x-red.x<chuck.width/2+red.width/2&&
    red.x-chuck.x<chuck.width/2+red.width/2&&
    chuck.y-red.y<chuck.height/2+red.height/2&&
    red.y-chuck.y<chuck.height/2+red.height/2){
      red.velocityX=1;
      chuck.height+=20;
    }
  drawSprites();
}