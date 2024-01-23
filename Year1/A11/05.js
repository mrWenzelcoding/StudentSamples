let x = []
let y =[]
let speedX = []
let speedY = []
let r =[]
let g =[]
let b =[]
let spin = []
function setup() {
  
  createCanvas(400, 400);
  noStroke()
  rectMode(CENTER)
  angleMode(DEGREES)

  for(  let j=0;j<500;j++){
    x[j] = 0;
    y[j] = 0;
    spin[j] = 0
    speedX[j]=random(1,5);
    speedY[j]=random(1,5);
  r[j] = random(255)
  g[j] = random(255)
  b[j] = random(255)
  }
   background(0,0,0,50);
}

function draw() {
  background(0,0,0,50);
 
  for( let i =0;i<25;i++){
   push()
    translate(x[i],y[i])
    rotate(spin[i])
    spin[i] +=i+1
      fill(r[i],g[i],b[i])
    rect(0,0,30)
  fill(r[i]*1.5,g[i]*1.5,b[i]*1.5)
     ellipse(0,0,30)
 pop()
     x[i]+=speedX[i]
  y[i]+=speedY[i]
    if(x[i]>width){
    speedX[i]= random(-5,0)
  r[i] = random(255)
  g[i] = random(255)
  b[i] = random(255)
  }
    if(x[i]<0){
      speedX[i]= random(5)
        r[i] = random(255)
  g[i] = random(255)
  b[i] = random(255)
    }
  if(y[i]>height){
    speedY[i] = random(-5,0)
      r[i] = random(255)
  g[i] = random(255)
  b[i] = random(255)
  }
  if(y[i]<0){
    speedY[i] = random(5)
      r[i] = random(255)
  g[i] = random(255)
  b[i] = random(255)
  }
    
  }
  
  
}