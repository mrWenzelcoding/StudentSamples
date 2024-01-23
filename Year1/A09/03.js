let r;
let g;
let b;
let x;
let y;
function setup() {
  createCanvas(400, 400);
  r=random(0,255)
  g=random(0,255)
  b=random(0,255)
  x=0
  y=0
  background("white")
}

function draw() {
  while(x<400){
    fill(r,g,b)
    square(x,y,5)
    x= x+5
    r=random(0,255)
    g=random(0,255)
    b=random(0,255)
  }
  y = y+5
  x= 0
  if(y>400){
    y=0
  }
}