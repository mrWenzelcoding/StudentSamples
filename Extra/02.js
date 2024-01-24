let x =[]
let y =[]
let ySped =[]
let xSped =[]
let ballA =[]
let grav = 0.3
let bS =50
let ballAs =0
function setup() {
  createCanvas(windowWidth, windowHeight);
  bS=50
  ballAs=0
  grav = 0.3
  for(let i =0;i<1000;i++){
    y[i] = random(-height/2,height/2)
  x[i] =random(-width/2,width/2)
    ySped[i] =1
    xSped[i]=0
    ballA[i]=false
  }
  
  background(255)
  noStroke()
}

function draw() {
  background(255,20);
  //background(255)
  translate(width/2,height/2)
    grav+=0.0001
  fill(0,150,200)
  for(let i =0;i<500;i++){
  ellipse(x[i],y[i],10)
  y[i]+=ySped[i]
  x[i]+=xSped[i]
  if(x[i]>0&&y[i]>0){
     ySped[i] -=grav
  xSped[i]-=grav
  }
  if(x[i]>0&&y[i]<0){
     ySped[i] +=grav
  xSped[i]-=grav
  }
  if(x[i]<0&&y[i]>0){
     ySped[i] -=grav
  xSped[i]+=grav
  }
  if(x[i]<0&&y[i]<0){
     ySped[i] +=grav
  xSped[i] +=grav
  }
    let d = dist(0,0,x[i],y[i])
    if(d<bS/2 -5){
    if(ballA[i]==false){
      xSped[i] =0
      ySped[i] =0
      bS+=0.1
      ballA[i]=true
      ballAs++
    }
      xSped[i] =0
      ySped[i] =0
    }
  }
  fill(0)
   ellipse(0,0,bS)
  if(ballAs>=500){
    setup()
   
  }
}
function mousePressed(){
  let FS =fullscreen();
  fullscreen(!FS)
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  setup()
  
}