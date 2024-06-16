let x,y
let xSpeed
let xSpeedRect
let ySpeed
let G
let T
let xRect
let yRect
let RectW
let RectH
let hit=false
let img
let backimg
let score=0
function preload(){
  backimg=loadImage('assets/dg34rsu-29a3d144-dc3f-473e-a949-f73a4ba1ef7c.png')
  img=loadImage('assets/Flappy-Bird-PNG-File.png')
}
function setup() {
  frameRate(30)
  createCanvas(600, 600);
  x=width/2
  y=height/2
  xSpeedRect=-5
  xSpeed=0
  ySpeed=0
  G=9.81
  T=0
  xRect=width
  yRect=0
  RectW=80
  RectH=random(50,height-50)
}

function draw() {
  background(255,255,255,200);
  image(backimg,0,0)
  backimg.resize(windowWidth,windowHeight-50)
  image(img,x-25,y-25)
  img.resize(80,50)
  xRect+=xSpeedRect
  x+=xSpeed
  y+=(ySpeed+(G*T))
  T+=(1/20)
  fill("Green")
  rect(xRect,yRect,RectW,RectH)
  rect(xRect-20,yRect+RectH-60,RectW+40,60)
  rect(xRect,height,RectW,RectH+120-height)
  rect(xRect-20,yRect+RectH+120,RectW+40,60)
  text(score,25,25)
  if(hit==true){
    stroke("black")
    fill("red")
    text("Press R to Restart",height/2,width/2)
  }
  if(xRect==0-RectW){
    xRect=width
    RectH=random(50,height-80)
    score++
  }
    if(x >= xRect-RectW+60 && y <= yRect+RectH+10 && x <= xRect+RectW){
      console.log("hello")
      hit=true
      xSpeedRect=0
      xSpeed=-5
      ySpeed=2
}
    if(x >= xRect-RectW+60 && y >= yRect+RectH+120 && x <= xRect+RectW){
        console.log("hello") 
            hit=true
      xSpeedRect=0
      xSpeed=-5
      ySpeed=2
}
}

function keyPressed() {
  if(hit==true){
   if (keyCode === 82){
     setup()
     hit=false
     score=round(score/2)
   }
  }
  if(hit==false){
  if (keyCode === UP_ARROW){
    ySpeed=-6
    T=0
  }
}
}