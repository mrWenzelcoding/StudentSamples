let song
let fft
let waves
let x,y,x2,y2,x3,y3,x4,y4,x5,y5
let xspeed,yspeed,x2speed,y2speed,x3speed,y3speed
function preload(){
  song=loadSound('assets/Playthis.mp3')
  
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  noStroke()
  song.play()
  fft=new p5.FFT()
  fft.setInput(song)
  x=width/2
  y=height/2
  x2=width-50
  y2=100
  x3=width/2
  y3=20
  x4=200
  y4=20
  x5=20
  y5=20
  
  xspeed=3
  yspeed=0
  x=x+xspeed
  y=y+yspeed
}

function draw() {
  background(0,10);
  waves=fft.analyze()
  let bass=fft.getEnergy('bass')
  let lowMid=fft.getEnergy('lowMid')
  let mid=fft.getEnergy('mid')
  let highMid=fft.getEnergy('highMid')
  let treble=fft.getEnergy('treble')
  
  //Movement/color/reset
  fill('blue')
  ellipse(x,y,30)
  xspeed=lowMid/50
if(x>windowWidth){
   x=random(0,windowWidth)
   
  
}
  if(x<0){
    xspeed = 3
  
  }
 x=x+xspeed

  fill('red')
  ellipse(x2,y2,30)
  x2speed=bass/60
  if(x2>windowWidth){
    x2=random(0,windowWidth)
  }
if (x2<0){
  x2speed=3
}
x2=x2+x2speed
  
  fill('purple')
ellipse(x3,y3,30)
  y3speed=mid/40
if(y3>windowHeight){
  y3=20
 
}
if (y3<0){
  y3speed=3
}
y3=y3+y3speed
  fill('pink')
  ellipse(x4,y4,30)
  y4speed=highMid/50
  if(y4>windowHeight){
    y4=0
    
  }
  if(y4<0){
  y4speed=3
}
  y4=y4+y4speed
  fill('green')
  square(x5,y5,30)
  y5speed=treble/20
  
  if(y5>windowHeight){
    y5=random(10,100)
    x5=random(10,800)
}
    if(y5<0){
      y5speed=3
    }
  y5=y5+y5speed
  
  x5speed=treble/25
  
    if(x5>windowWidth){
    x5=random(10,800)
    y5=random(10,40)
  }
if (x5<0){
  x5speed=3
}
  x5=x5+x5speed
}
function mousePressed() {
  if(mouseX > 0 && mouseX < windowWidth && mouseY > 0 && mouseY <windowWidth){
    let fs = fullscreen()
    fullscreen(!fs)
  }
}
function windowResized(){
  resizeCanvas(windowWidth,windowHeight)
}