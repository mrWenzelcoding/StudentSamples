let x1 = []
let x2 = []
let x3 = []
let y1 = []
let y2 = []
let y3 = []
let triNUM = 300
let xSpeed = []
let ySpeed = []
let r,rSpeed
let g,gSpeed
let b,bSpeed

function setup() {
  createCanvas(600, 600);
  for (let i = 0;i < triNUM;i++){
    x1[i] = random(600)
    x2[i] = random(600)
    x3[i] = random(600)
    y1[i] = random(600)
    y2[i] = random(600)
    y3[i] = random(600)
    xSpeed[i] = random(-3,3)
    ySpeed[i] = random(-3,3)
  }
  r=random(255)
  g=random(255)
  b=random(255)
  rSpeed=random(-5,4)
  gSpeed=random(-5,4)
  bSpeed=random(-5,4)
}
function draw() {
  background(0,0,0,1);
  fill(0)
  stroke(r,g,b)
  r+=rSpeed
  g+=gSpeed
  b+=bSpeed
  
  if(r > 255){rSpeed = random(-3,-1)}
  if(r < 0){rSpeed = random(1,3)}
  
  if(b > 255){Speed = random(-3,-1)}
  if(b < 0){bSpeed = random(1,3)}
  
  if(g > 255){gSpeed = random(-3,-1)}
  if(g < 0){gSpeed = random(1,3)}
  
  for (let i = 0;i < triNUM;i++){
    triangle(x1[i],y1[i],x2[i],y2[i],x3[i],y3[i])
    x1[i]+=xSpeed[i]
    y1[i]+=ySpeed[i]
    x2[i]+=xSpeed[i]
    y2[i]+=ySpeed[i]
    x3[i]+=xSpeed[i]
    y3[i]+=ySpeed[i]
  }
  }