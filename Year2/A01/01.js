let x =[]
let y =[]
let s =[]
let xSped =[]
let ySped =[]
let pXSped =[]
let pYSped =[]
let grav =0.1
let pGrav =0.02
let pX =[]
let pY =[]

function setup() {
  createCanvas(windowWidth, windowHeight);
   noStroke()
   grav =0.05
  for(let i =0;i<2000;i++){
     x[i] =random(width)
 y[i] =random(height/2)
 s[i] =20
 xSped[i] =3
 ySped[i] =2
    pXSped[i] =1
    pYSped[i] =1

  }
  for(let i =0;i<2000;i++){
     pX[i]= random(-20,20)
    pY[i]= random(-20,20)
   }
}

function draw() {
  background(255,50);
  for(let i =0;i<5;i++){
    push()
    fill(0)
    translate(x[i],y[i])
    ellipse(0,0,s[i])
    x[i]+=xSped[i]
    y[i]+=ySped[i]
    ySped[i] +=grav
    if(y[i]>height||y[i]<0){
      ySped[i]*=-1
    }
    if(x[i]>width||x[i]<0){
      xSped[i]*=-1
    }
    for(let j =0; j<20;j++){
      fill(0,255,255)
      ellipse(pX[j],pY[j],5)
      pX[j]+=pXSped[j]
      pY[j]+=pYSped[j]
      if(pX[j]>0&&pY[j]>0){
     pYSped[j] -=pGrav
  pXSped[j]-=pGrav
  }
  if(pX[j]>0&&pY[j]<0){
     pYSped[j] +=pGrav
  pXSped[j]-=pGrav
  }
  if(pX[j]<0&&pY[j]>0){
     pYSped[j] -=pGrav
  pXSped[j]+=pGrav
  }
  if(pX[j]<0&&pY[j]<0){
     pYSped[j] +=pGrav
  pXSped[j] +=pGrav
  }
    }
    pop()
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