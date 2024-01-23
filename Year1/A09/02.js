let x;
let y;
let c;
let r;
let g;
let b;
function setup() {
  createCanvas(400, 400);
  background("black")
  frameRate(60)
  x=5
  y=5
  r=10
  g=10
  b=10
  c=10
  noStroke()
}

function draw() {
  while(x<395){
     fill(r ,g ,b )
    circle(x, y, c)
    x= x + 10
  }
  if(x >= 395){
    x=5
    y=y+10
  }
  if( y >= 395){
    r=r+1
    g=g+5
    b=b+10
    y=5
    if(c > 5){
      c=c-1
    }
    if(c <= 5){
      c=10
    }
    
  }
}