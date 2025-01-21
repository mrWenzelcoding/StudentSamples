let yup
let hat

function setup() {
  createCanvas(600, 600);
  background(random(255),random(255),random(255))
  yup = round(random(0,1))
  hat = 0
  rectMode(CENTER)
}

function draw() {
  //background(220);
}

function emoji(x,y,s,r,g,b,feat){
  strokeWeight(s*0.03)
  stroke(0)
  fill(r,g,b)
  circle(x,y,s)
  strokeWeight(s*0.1)
  fill(0)
  stroke(255)
  circle(x-s*0.2,y-s*0.1,s*0.25)
  circle(x+s*0.2,y-s*0.1,s*0.25)
  strokeWeight(s*0.07)
  stroke(0)
  line(x-s*0.25,y+s*0.2,x+s*0.25,y+s*0.2)
  if(hat == true){
    rect(x,y-s*0.48,s,s*0.12)
    rect(x,y-s*0.7,s*0.6,s*0.4)
  }
}
function mousePressed(){
  yup = round(random(0,1))
  hat = 0
  
  if(yup == 0){
    hat = true
  }
  if(yup == 1){
    hat = false
  }
  emoji(random(width),random(height),random(70,150),random(255),random(255),random(255),hat)
}
