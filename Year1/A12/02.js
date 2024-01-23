let x = []
let y = []
let s = []
let counter
let xoff = []

function setup() {
  createCanvas(650, 650);
  noStroke()
  counter = 0
  for(let i = 0; i<200; i++){
    x[i] = random(0,width)
    y[i] = random(0,height)
    s[i] = random(3,9)
    xoff[i] = random(0,100)
  }
}

function draw() {
  background(0,0,50,70);
  rect(0,height,width,counter)
  
  for(let i = 0; i<200; i++){
    circle(x[i],y[i],s[i])
    y[i]+=s[i]/3
    x[i] = (1.3-1.7*noise(xoff[i]))*width
    xoff[i]+=0.001
    //build up
    if(y[i]>height){
    y[i] = 0
    counter-=0.05
  }
 }
}