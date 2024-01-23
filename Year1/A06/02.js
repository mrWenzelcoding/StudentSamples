let r;
let g;
let b;
let brush;
function setup() {
  createCanvas(600, 480);
  background("white")
  noStroke()
  r=0
  g=0
  b=0
  brush=4
  frameRate(120)
}
function mouseDragged(){
  fill(r,g,b)
  square(mouseX,mouseY,brush)
}
//THE MOTHERLOAD
function draw(){
  push()
  fill(220,220,220)
  rect(0,0,80,height)
  push()
  stroke(0,0,0)
  fill(r,g,b)
  rect(8,56,64,32)
  stroke(140,140,140)
  square(24,56,brush)
  fill(220,220,220)
  textSize(16)
  text(brush,32,76)
  stroke(0,0,0)
  fill(255,255,255)
  rect(8,104,32,32)
  rect(40,104,32,32)
  rect(8,136,32,32)
  rect(40,136,32,32)
  rect(52,116,8,8)
  rect(22,118,4,4)
  rect(18,146,12,12)
  rect(48,144,16,16)
  rect(24,184,32,32)
  rect(28,188,24,24)
  rect(32,200,16,12)
  rect(34,188,12,8)
  rect(42,190,1,4)
  pop()
  push()
  rectMode(CENTER)
  fill(255,96,93)
  square(8,8,16)
  fill(72,213,77)
  square(24,8,16)
  fill(105,108,219)
  square(40,8,16)
  fill(255,194,93)
  square(8,24,16)
  fill(57,240,255)
  square(24,24,16)
  fill(239,144,255)
  square(40,24,16)
  fill(207,60,100)
  square(56,8,16)
  fill(161,161,161)
  square(56,24,16)
  fill(0,0,0)
  square(72,8,16)
  fill(255,255,255)
  square(72,24,16)
  pop()
  pop()
}
function mousePressed(){
  if(mouseX<16 && mouseX>0 && mouseY<16 && mouseY>0){
    r=255
    g=96
    b=93
  }
  if(mouseX<32 && mouseX>16 && mouseY<16 && mouseY>0){
    r=72
    g=213
    b=77
  }
  if(mouseX<48 && mouseX>32 && mouseY<16 && mouseY>0){
    r=105
    g=108
    b=219
  }
  if(mouseX<16 && mouseX>0 && mouseY<32 && mouseY>16){
    r=255
    g=194
    b=93
  }
  if(mouseX<32 && mouseX>16 && mouseY<32 && mouseY>16){
    r=57
    g=240
    b=255
  }
  if(mouseX<48 && mouseX>32 && mouseY<32 && mouseY>16){
    r=239
    g=144
    b=255
  }
  if(mouseX<64 && mouseX>48 && mouseY<16 && mouseY>0){
    r=207
    g=60
    b=100
  }
  if(mouseX<64 && mouseX>48 && mouseY<32 && mouseY>16){
    r=161
    g=161
    b=161
  }
  if(mouseX<80 && mouseX>64 && mouseY<16 && mouseY>0){
    r=0
    g=0
    b=0
  }
  if(mouseX<80 && mouseX>64 && mouseY<32 && mouseY>16){
    r=255
    g=255
    b=255
  }
  
  if(mouseX<40 && mouseX>8 && mouseY<136 && mouseY>104){
  brush = 4
  }
  if(mouseX<72 && mouseX>40 && mouseY<136 && mouseY>104){
  brush = 8
  }
  if(mouseX<40 && mouseX>8 && mouseY<168 && mouseY>136){
  brush = 16
  }
  if(mouseX<72 && mouseX>40 && mouseY<168 && mouseY>136){
  brush = 32
  }
  if(mouseX<56 && mouseX>24 && mouseY<216 && mouseY>184){
    saveCanvas("kjpaint","png")
  }
}