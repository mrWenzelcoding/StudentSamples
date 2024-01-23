let x,y,z,s;
let x1,y1;
let t;

function setup() {
  createCanvas(800, 800);
  
x = width*0.5
y = height*0.5
x1 = width*0.5
y1 = height*0.5
z = 1
s = 1
t = 0
  
noStroke()
  
  background(0,0,0);
  
}

function draw() {
  
  x = x + random(-5,4.5)
  y = y + random(-5,4.5)
  x1 = x1 + random(-4.5,5)
  y1 = y1 + random(-4.5,5)
  z = z + 1
  t = t + 1
  s = s + 1
  
  //circleBlue
  fill(0,z,200)
  circle(x,y,20)
  
  //circleRed
  fill(200,s,100)
  circle(x1,y1,20)
  
  if(0>x>width){x=random(100,300)}
  
  if(0>y>height){y=random(100,300)}
  
  if(0>x1>width){x1=random(100,300)}
  
  if(0>y1>height){y1=random(100,300)}
  
  if(z>255){z = z - 2}
  
  if(z<0){z = z + 2}
  
  if(s>255){s = s - 2}
  
  if(s<0){s = s + 2}
  
  if(t == 260) {
    x = random(100,200)
    y = random(110,200)
    x1 = random(100,200)
    y1 = random(110,200)
    s = s - random(190,250)
    z = z - random(190,250)
    t = 0
  }
}

