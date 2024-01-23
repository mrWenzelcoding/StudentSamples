let x = []
let y = []
let size = []
let speed = []
let pileAhSnow 
let xoff = []
function setup() {
  createCanvas(500, 500);
  background(45,40,90)
  pileAhSnow = height*1.5
  let j =0
  while(j<300){
    x[j] = random(width) 
    y[j] = random(height/2)
    size[j] = random(3,10)
    speed[j] = random(1,3)
    xoff[j] = random(500)
    j++
  }
  noStroke()
  rectMode(CENTER)
}

function draw() {
  background(45,40,90,200);
  for(let i = 0;i<300;i++){
    ellipse(x[i],y[i],size[i])
    rect(width/2,pileAhSnow,width)
    y[i] += size[i]/2
    x[i] = -200 + noise(xoff[i])*width*2
    xoff[i]+=0.01
    if(y[i]>=pileAhSnow){
      y[i] = -10
      x[i] = noise(xoff[i])*width
      size[i] = random(3,10)
      pileAhSnow-=0.01
    }
  }
}