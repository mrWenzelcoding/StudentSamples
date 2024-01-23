let x=[]
let y=[]
let xSpeed=[]
let ySpeed=[]
let ballSize=[]
let growth=[]
let r,g,b
let CCR,CCG,CCB
let ballNum = 150

function setup() {
  createCanvas(400, 400);
  noStroke()
  
  for(let i=0; i<ballNum; i++){
  x[i]=width/2
  y[i]=height/2
  
  xSpeed[i]=3
  ySpeed[i]=3
  
  growth[i] = random(0,3)
  ballSize[i]=10
  }
  
  r = 255
  g = 255
  b =255
  
  CCR = 3
  CCG =3
  CCB =3
  
}




function draw() {
  background(255,255,255,45);
  
  for(let i=0; i<ballNum; i++){
    
  fill("black")
  circle(x[i],y[i],ballSize[i])
  
  ballSize[i] += growth[i]
  if(ballSize[i] >100){
     growth[i] = random(-3,0)
     }
  if(ballSize[i]<10){
    growth[i] = random(0,3)
  }
  if(x[i]>width){
    xSpeed[i] = random(-5,0)
  }
  if(x[i]<0){xSpeed[i] = random(0,5)
  }
    
  if(y[i]>height){
    ySpeed[i] = random(-5,0)
  }
   if(y[i]<0){ySpeed[i] = random(0,5)
  }
  
  x[i]+=xSpeed[i]
  y[i]+=ySpeed[i]
  
  }
}