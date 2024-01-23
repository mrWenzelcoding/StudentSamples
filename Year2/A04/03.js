let canva
let x
let xs
let y
let ys
let s
let xoff
let r
let g
let b
let rot
let rot2
let rot3
let rot4
let rot5
let rot6
let rot7
let xr
let yr
let xr2
let yr2
let xr3
let yr3
let xr4
let yr4
let xr5
let yr5
let xr6
let yr6
let xr7
let yr7
let laser


function setup() {
  createCanvas(1000, 1000);
  angleMode(DEGREES)
  canva= createGraphics(width,height)
  canva.noStroke()
  r=random(255)
  g=random(255)
  b=random(255)
  rot=0
  rot2=50
  rot3=100
  rot4=150
  rot5=200
  rot6=250
  rot7=300
  x=500
  y=500
  xoff = random(9999999999999)
  yoff = random(9999999999999)
  s=4
  laser=0
}

function draw() {
  xr=sin(rot)*width/2+width/2
  yr=cos(rot)*height/2+height/2
  xr2=sin(rot2)*width/2+width/2
  yr2=cos(rot2)*height/2+height/2
  xr3=sin(rot3)*width/2+width/2
  yr3=cos(rot3)*height/2+height/2
  xr4=sin(rot4)*width/2+width/2
  yr4=cos(rot4)*height/2+height/2
  xr5=sin(rot5)*width/2+width/2
  yr5=cos(rot5)*height/2+height/2
  xr6=sin(rot6)*width/2+width/2
  yr6=cos(rot6)*height/2+height/2
  xr7=sin(rot7)*width/2+width/2
  yr7=cos(rot7)*height/2+height/2
  
  background(0);
  
  image(canva,0,0)
  
   canva.fill(r,g,b)
  fill(0,0,0,0)
  
  circle(x,y,50)
  
  stroke(r,g,b)
  
  if(laser==1){
  line(xr,yr,x,y)
  line(xr2,yr2,x,y)
  line(xr3,yr3,x,y)
  line(xr4,yr4,x,y)
  line(xr5,yr5,x,y)
  line(xr6,yr6,x,y)
  line(xr7,yr7,x,y)
  
  fill(r,g,b)
  
    for (let i=0; i < 10; i++){
  line(xr,yr,xr+random(-40,40),yr+random(-40,40))
  line(xr2,yr2,xr2+random(-40,40),yr2+random(-40,40))
  line(xr3,yr3,xr3+random(-40,40),yr3+random(-40,40))
  line(xr4,yr4,xr4+random(-40,40),yr4+random(-40,40))
  line(xr5,yr5,xr5+random(-40,40),yr5+random(-40,40))
  line(xr6,yr6,xr6+random(-40,40),yr6+random(-40,40))
  line(xr7,yr7,xr7+random(-40,40),yr7+random(-40,40))
  }
  }
    fill(r,g,b)
  circle(xr,yr,10)
  circle(xr2,yr2,10)
  circle(xr3,yr3,10)  
  circle(xr4,yr4,10)
  circle(xr5,yr5,10)
  circle(xr6,yr6,10)
  circle(xr7,yr7,10)
  fill(0,0,0,0)
  
  stroke(255)
  
  circle(xr,yr,50)
  circle(xr2,yr2,50)
  circle(xr3,yr3,50)
  circle(xr4,yr4,50)
  circle(xr5,yr5,50)
  circle(xr6,yr6,50)
  circle(xr7,yr7,50)
  
  rot+=1
  rot2+=1
  rot3+=1
  rot4+=1
  rot5+=1
  rot6+=1
  rot7+=1
  
  x =+ map(noise(xoff), 0, 1, 0, width)
  y =+ map(noise(yoff), 0, 1, 0, height)
  xoff=xoff+0.003
  yoff=yoff+0.003
  r=r+random(-7,7)
  g=g+random(-7,7)
  b=b+random(-7,7)
  
  if(r>255){
    r=255
  }
  if(g>255){
    g=255
  }
  if(b>255){
    b=255
  }
  
  if(r<0){
    r=0
  }
  if(g<0){
    g=0
  }
  if(b<0){
    b=0
  }
  
  if(laser==1){
  canva.circle(x,y,s)
  }
  if(laser==0){
    stroke(r,g,b)
  circle(x,y,10)
    stroke(255)
  }
  
}

function keyPressed(){
  if(keyCode==DOWN_ARROW){
    laser=0
  }
  if(keyCode==UP_ARROW){
    laser=1
  }
  
}