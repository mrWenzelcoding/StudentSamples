let x,y
let move
let moveSped
function setup() {
  createCanvas(800, 400);
  strokeWeight(4)
  move = 0
  moveSped =3
    background(0);
  x =0
  y =0
  frameRate(30)
}

function draw() {

  fill(255)
  translate(move,0)
  move-=moveSped
  if (move <=-height/2){
    move = 0
  }
  for(y=0;y<height+50;y+=35){
  for(x=0;x<width*2;x+=20){
    fill(255)
  ellipse(x,y,100)
   ellipse(x,y,75)
  fill(0)
   ellipse(x,y,50)
    x+=50
  }}
    
}