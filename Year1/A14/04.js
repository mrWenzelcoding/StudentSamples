///Declaration//
//Positions
let x=[]
let y=[]
let x2=[]
let y2=[]
let x3=[]
let y3=[]
//Color
let r=[]
let g=[]
let b=[]
//Speeds
let xSpeed=[]
let xSpeed2=[]
let xSpeed3=[]
let ySpeed=[]
let ySpeed2=[]
let ySpeed3=[]

function setup() {
  createCanvas(600, 600);
  
  ///Initialization///
  for(let i=0;i<30;i++){
    //Positions
    x[i]=random(width)
    x2[i]=random(width)
    x3[i]=random(width)
    y[i]=random(height)
    y2[i]=random(height)
    y3[i]=random(height)
    //Color 
    r[i]=random(3,252)
    g[i]=random(23,3)
    b[i]=random(252,136)
    //Speeds
    xSpeed[i]=random(-3,5)
    xSpeed2[i]=random(-3,5)
    xSpeed3[i]=random(-3,5)
    ySpeed[i]=random(-3,5)
    ySpeed2[i]=random(-3,5)
    ySpeed3[i]=random(-3,5)
   
     
  }
}
//Color Changer
function mousePressed(){
  
   for(let i=0;i<30;i++){
     r[i]+=random(-255,255)
    g[i]+=random(-255,255)
    b[i]+=random(-255,255)
     
   }
}


function draw() {
  background(0,0,0,1);
  
  for(let i=0;i<30;i++){
    stroke(r[i],g[i],b[i])
    strokeWeight(3)
    noFill()
    triangle(x[i],y[i],x2[i],y2[i],x3[i],y3[i])
    
    
    //Position Change
    x[i]+=xSpeed[i]
    x2[i]+=xSpeed2[i]
    x3[i]+=xSpeed3[i]
    y[i]+=ySpeed[i]
    y2[i]+=ySpeed2[i]
    y3[i]+=ySpeed3[i]
    
    //Boundaries
     if(x[i]<0 || x[i]>width||x2[i]<0 || x2[i]>width || x3[i]<0 || x3[i]>width){
    xSpeed[i]*=-1
    xSpeed2[i]*=-1
    xSpeed3[i]*=-1
    }
  
    if(y[i]<0 || y[i]>height ||y2[i]<0 || y2[i]>height || y3[i]<0 || y3[i]>height){
    ySpeed[i]*=-1
    ySpeed2[i]*=-1
    ySpeed3[i]*=-1
   
 }

  
    
    
    
  }
}