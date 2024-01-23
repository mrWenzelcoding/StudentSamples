let x;
let y;
let r;
let g;
let b;
let r1;
let g1;
let b1;
let x1;
let y1;
let x2;
let y2;
let x3;
let y3;
function setup() {
  createCanvas(400, 400);
  background("black")
  x=40
  y=2
  x3=-40
  y3=2
  x1=160
  y1=2
  x2=240
  y2=2
  r=255
  g=255
  b=200
  r1=200
  g1=255
  b1=255
  rectMode(CENTER)
}
function draw() {
  while(y<400){
    fill(r,g,b)
    rect(x,y,80,4)
    x+=random(-2,8)
    y+=4
    rect(x3,y3,40,4)
    x3+=random(-2,8)
    y3+=4
    r-=2
    g-=4
    b-=1.8
    fill(r1,g1,b1)
    rect(x1,y1,40,4)
    x1+=random(-2,8)
    y1+=4
    rect(x2,y2,20,4)
    x2+=random(-2,8)
    y2+=4
    r1-=4
    g1-=1
    b1-=1.8
  }
}