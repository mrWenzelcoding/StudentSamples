let x1,x2,y1,y2;
let r1,g1,b1;
let r2,g2,b2;
let s1,s2,s3;

function mousePressed(){
noLoop();
}

function setup() {
  createCanvas(400, 400);
  
  x1=0
  x2=0
  y1=0
  y2=400
  r1=0
  g1=0
  b1=0
  r2=0
  g2=0
  b2=0
  s1=400
  s2=0
  s3=400
  
}

function draw() {
  background(0,0,0,20);
  
  noStroke()
  
  x1 = x1 + 5
  y1 = y1 + 5
  
  x2 = x2 + 2
  y2 = y2 - 2
  
  r1 = r1 + 1
  g1 = g1 + 1
  b1 = b1 + 1
  
  r2 = random(255)
  
  s1 = s1 - 1
  s2 = s2 + 1
  
  //triangle1
  fill(r1,0,0)
  triangle(200,200,-10,y1,x1,-10)
  
  //triangle2
  fill(0,0,b1)
  triangle(200,200,x1,y1,400,0)
  
  //triangle3
  fill(0,g1,0)
  triangle(200,200,x1,y1,0,400)
  
  //triangle1
  fill(r1,0,0)
  triangle(200,200,-10,y1,x1,-10)
  
  //circle1
  fill(r1,g1,30)
  circle(0,0,s1)
  
  //circle2
  fill(30,g1,b1)
  circle(0,0,s2)
  
  //circle3
  fill(random(200),random(200),random(200))
  circle(x2,y2,random(20,70))
  
  
  
  
}