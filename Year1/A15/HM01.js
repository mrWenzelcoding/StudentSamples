//declaration of variables
let x
let y
let xF
let yF
//confetti variables
let xConfetti=[]
let yConfetti=[]
let confettiSize=[]
let ySpeedConfetti=[]
let confetti=['rgb(255,0,194)','rgb(0,255,233)','rgb(122,0,255)']
//function
function setup() {
  for(let i = 0; i<4; i++){
//create canvas
  createCanvas(400, 400);
//variables
  x = 50
  y = 200
  xF = 300
  yF = 200
  size = 20
  }
}
//draw
function draw() {
//background
  background(0);
//rect mode
  rectMode(CENTER)
//lerp
  x = lerp(x,xF,0.05)
  y = lerp(y,yF,0.05)
//food pellet
  noStroke()
  fill(160,23,235)
  rect(xF,yF,10)
//cell
  fill(251,255,0)
  circle(x,y,size)
//eat food pelllet
  if(round(x) == round(xF)){
     xF = random(width)
  if(round(y) == round(yF)){
    yF = random(height)
    size=size+5
  }
  }
  if(size>50){
    fill(random(0,255),random(0,255),random(0,255))
    circle (x,y,size)
    fill(random(0,255),random(0,255),random(0,255))
    textSize(50)
    textAlign(CENTER)
    text('PARTY',200,200)
    x = lerp(x,xF,0.5)
    y = lerp(y,yF,0.5)
    
    }
  if(size>200){
    //confetti
    for(let i=0; i<100;i++){
    xConfetti[i] = random(0,400)
    yConfetti[i] = random(0,400)
    confettiSize[i] = 5
    ySpeedConfetti[i] = 3
      //
    fill(confetti)
    noStroke()
  circle(xConfetti[i],yConfetti[i],confettiSize[i])
  }
  }
  if(size>900){
    size=20
  }

}