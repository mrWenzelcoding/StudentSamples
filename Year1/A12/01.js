let xs=[];
var xoff=[];
let ys=[];
let x=[];
let xy
let y=[];
let s;
let m=[]
let l=[]
function setup() {
  
  //canvas and stroke
  createCanvas(600, 600);
  noStroke()
  
  //snow set
  s=0
  
  //variable set up
  for(let i=0; i<400; i++){
    x[i]=(i-60)*4
    y[i]=random(height)
    xs[i]=0
    ys[i]=random(3)+1
    xoff[i]=i*random(10)
  }
  
}

function draw() {
  
  //background
  background(1,1,40,100)
  
    //Moon
  for(let mi=0; mi<200; mi++){
   fill(255,255,255)
   circle(60,60,55)
    fill(255,255,255,20-mi)
    circle(60,60,55+mi)
  }
  
  //LampPole
  fill(1,1,1)
  rect(500,350,25,250)
  
  //LampBack
  rect(512,300,20,50)
  
  //LampLight
  for(let li=0; li<200; li++){
   fill(255,255,255)
   circle(512,325,40)
   fill(255,255,255,20-li)
   circle(512,325,45+li)
    

   
  }
  //LampFront
  fill(1,1,1)
  rect(491,300,10,40)
  rect(524,300,10,50)
  rect(491,340,43,20)
  rect(491,290,43,20)
  rect(508,300,10,50)
  rect(500,320,30,10)

  
  //Snow
  fill("rgb(226,222,222)")
  rect(0, height, width, s-s-s)
  
   
  

  
  for(let i=0; i<200; i++){
    
    //Snow flakes
    
    let xy = map(noise(xoff[i]), 0, 1, 0, width)
    circle(x[i]+(xy/2), y[i]-(ys[i]+20), ys[i]+5)
    y[i]=y[i]+ys[i]
    xoff[i]=xoff[i]+0.005
  
    
    
    
    if(y[i]>height+20){
      y[i]=-10
      s=s+0.01
    }
    
  }

 
  
  
}