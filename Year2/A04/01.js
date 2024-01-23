let ec;
let a=[];
let b=[];
let as=[];
let bs=[];
let x=200;
let y=200;
let xf=10;
let yf=1
let n=50

function setup() {
  createCanvas(800, 800);
  ec=createGraphics(800,800);
  ec.noStroke();
  for(i=0;i<n;i++){
    
    a[i]=200
    b[i]=200
    as[i]=random(-5,5)
    bs[i]=random(-5,5)
  }
}

function draw() {
  
  xf += 0.005;
  yf += 0.005;
  x = width*noise(xf)
  y = width*noise(yf)
  
  background(220);
  image(ec,0,0);
  ec.fill("orange")
  
  ec.ellipse(x,y,10);
  
 
  
  for(i=0;i<n;i++){
    
     a[i]+=as[i]
  b[i]+=bs[i]
    
     fill("navy");
  ellipse(a[i],b[i],10);
  stroke("red")
  strokeWeight(4)
  line(a[i],b[i],x,y)
    
  if(a[i] <= 0){
    as[i]=random(0,3)
    bs[i]=random(-3,3)
  }
  
  if(a[i] >= width){
    as[i]=random(0,-3)
    bs[i]=random(-3,3)
  }
   if(b[i] <= 0){
    bs[i]=random(0,3)
    as[i]=random(-3,3)
  }
  
  if(b[i] >= width){
    bs[i]=random(0,-3)
    as[i]=random(-3,3)
  }
  }
}