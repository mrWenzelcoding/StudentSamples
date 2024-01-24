let x
let y
let S
let score
let t
let r,g,b
function setup() {
  createCanvas(600, 600);
  textAlign(CENTER,CENTER)
  textSize(30)
  rectMode(CENTER)
  x=width/2
  y=height/2
  S=50
  score=0
  t=0
  r=random(0,255)
  g=random(0,255)
  b=random(0,255)
}
function draw() {
  background(0);
  circle(x,y,S)
  noFill()
  strokeWeight(5)
  stroke(r,g,b)
  rect(width/2,height/2,height)
  t++
  fill(r,g,b)
  strokeWeight(0)
  text(score,width/2,40,10,100)
  
  if (t == 120){
    t=0
    x=random(55,width-55)
     y=random(55,height-55)
    score--
  }
  }
  function mousePressed(){
   if (dist(mouseX,mouseY,x,y)<S-25){
     x=random(55,width-55)
     y=random(55,height-55)
     score++
     r=random(0,255)
     g=random(0,255)
     b=random(0,255)
     t=0
    }
} 


  
