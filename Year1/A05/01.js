function setup() {
  createCanvas(400, 400);
}
let x=200;
let y=200;
let xspeed=1;
let yspeed=1;
let bc=0;
let bc1=0;
let bc2=0;
let gc=0;
let gc1=0;
let gc2=0;

function draw() {
  background(gc,gc1,gc2);
  noStroke();
  fill(bc,bc1,bc2);
  ellipse(x, y, 20);
   y=y+yspeed;
  if(y >= 390){
    yspeed = random(-1, -10);
    bc = random(0, 255);
    bc1 = random(0, 255);
    bc2 = random(0, 255);
    gc = random(0, 255);
    gc1 = random(0, 255);
    gc2 = random(0, 255);
  }
  if(y <= 10){
  yspeed = random(1, 10);
  bc = random(0, 255);
    bc1 = random(0, 255);
    bc2 = random(0, 255);
    gc = random(0, 255);
    gc1 = random(0, 255);
    gc2 = random(0, 255);
  }
   x=x+xspeed;
  if(x >= 390){
    xspeed = random(-1, -10);
    bc = random(0, 255);
    bc1 = random(0, 255);
    bc2 = random(0, 255);
    gc = random(0, 255);
    gc1 = random(0, 255);
    gc2 = random(0, 255);
  }
  if(x <= 10){
  xspeed = random(1, 10);
  bc = random(0, 255);
    bc1 = random(0, 255);
    bc2 = random(0, 255);
    gc = random(0, 255);
    gc1 = random(0, 255);
    gc2 = random(0, 255)
  }
}