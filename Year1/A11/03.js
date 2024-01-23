let x = []
let y=[]
let xspeed=[]
let yspeed=[]
let r=[]
let g=[]
let b=[]



function setup() {
  createCanvas(600,600);
  noStroke()
  for(let i=0; i<100; i++){
  x[i]=width/2
  y[i]=width/2
  xspeed[i]=random(-3,3)
  yspeed[i]=random(-3,3)
    r[i]=random(0,255)
     g[i]=random(0,255)
     b[i]=random(0,255)
    
}
}

function draw(){
  background(0,0,0,1)
  for(let i=0; i<100; i++){
    fill(r[i],g[i],b[i])
    circle(x[i],y[i],5)
    x[i]+=xspeed[i]
    y[i]+=yspeed[i]
     if(x[i]>width){
    xspeed[i]=random(-3,0)
      
       
     }
    if(y[i]>height){
      yspeed[i]=random(-3,0)
      
     
    }
    if(x[i]<0){
      xspeed[i]=random(0,3)
     
     
    }
    if(y[i]<0){
      yspeed[i]=random(0,3)
      
      
    }
  }
}
  
  
  