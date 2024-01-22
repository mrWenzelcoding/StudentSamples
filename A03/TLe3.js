let x1;
let y1;
let size1;
let r1;
let g1; 
let b1;

let x2;
let y2;
let r2;
let g2; 
let b2;

let x3;
let y3;
let r3;
let g3;
let b3;

let x4;
let y4;


function setup() {
  createCanvas(400, 400);
    background(220);
  
  background(0, 255, 196)
  
  x1=0
  y1=200
  r1 = 75;
  g1 = 30;
  b1 = 50;
  size1 = 100
  
  x2 = 200
  y2 = 0
  r2 = 100
  g2 = 200
  b2 = 70
  
  x3 = 400
  y3 = 400
  r3 = 150
  g3 = 125
  b3 = 190
  
  x4 = 125
  y4 = 150
  
 noStroke()
}

function draw() { 
   fill(r1,g1,b1)  
  circle(x1,y1,size1)
  x1 = x1 + 1
  size1 = size1 - 0.5
  r1 = r1 + random (-65, 65)
  g1 = g1 + random (-40, 40)
  b1 = b1 + random ( -20, 20)
  

  fill(r2,g2,b2)
  circle(x2, y2, size1)
  y2 = y2 + 1
  r2 = r2 + random (-80, 80)
  g2 = g2 + random (-50, 50)
  b2 = b2 + random (-30, 30)
  
  fill (r1,g2,b3)
  circle(x1, y2, size1)
  r1 = r1 + random (-50, 50)
  g2 = g2 + random (-40, 40)
  b3 = b3 + random (-40, 40)
  
  fill (r2, g1, b2)
  circle(x3, y2, size1)
  x3 = x3 - 1
  
  

  
} 