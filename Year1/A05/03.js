let x;
let y;
let xSpeed = 2;
let ySpeed = 5;
let r
let g 
let b
let xStartPos
let yStartPos
let gravity = 0.2
let ballStall
function setup() {
  createCanvas(400, 400);
  noStroke();
  xStartPos = random(width);
  yStartPos = random(height/2);
  x = xStartPos
  y = yStartPos
  r = 255
  g = 255
  b = 255
  angleMode(DEGREES)
  rotate(180)
}

function draw() {

  background(0, 0, 0, 30);
  x += xSpeed;
  y += ySpeed;
  ySpeed += gravity //aplies gravity
  fill(r, g, b);
  ellipse(x, y, 20);
  if (x > width - 10|| x < 0) {
    xSpeed *= -1
   
  }
  if (y >= height-10) {
   ySpeed *= -0.8
   y = height-10//ensures it doesn't fall of canvas
     
  }
 
  
//color
  let mappedColour = map(abs(ySpeed),0,10,0,255)
  r = mappedColour
  g = 255 -mappedColour
  b = mappedColour
  
}
