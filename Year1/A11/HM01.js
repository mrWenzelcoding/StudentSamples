let x = []
let y = []
let xSpeed = []
let ySpeed = []
let w = []
let r = []
let g = []
let b = []

function setup() {
  createCanvas(400, 400);
  noStroke()
  let j = 0
  while(j<20){
    x[j] = random(50,350)
    y[j] = random(50,350)
    xSpeed[j] = random(-5,5)
    ySpeed[j] = random(-5,5)
    w[j] = random(10,50)
    r[j] = random(0,255)
    g[j] = random(0,255)
    b[j] = random(0,255)
    j++
  }
}
function draw() {
  background(220,10);
  for( let i = 0; i < 20; i++ ){
    fill(r[i],g[i],b[i])
    circle(x[i],y[i],w[i])
    x[i] += xSpeed[i]
    y[i] += ySpeed[i] 
    if(x[i] < 0 + w[i]/2|| x[i] > width-w[i]/2){
      xSpeed[i] *= -1
    }
    if(y[i] < 0 + w[i] /2|| y[i] > width-w[i]/2){
      ySpeed[i] *= -1
    }
  }
}