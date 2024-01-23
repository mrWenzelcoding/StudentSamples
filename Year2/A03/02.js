let x=[]
let y=[]
let xsped=[]
let ysped=[]
let xoff=[]
let yoff=[]
let f=[]
let loff=[]
let l =[]
function setup() {
  for(let i=0; i<50; i++){
  xoff[i] = random(88888)
  yoff[i] = random(88888)
  x[i]=random(width*width)
  y[i]=random(height*height)
  f[i]=random(500)
  loff[i]=random(88888)
  }
  createCanvas(1000, 1000);
}
function draw() {
  background(0);
  for(let i=0; i<50; i++){
  xsped[i] =+ map(noise(xoff[i]), 0, 1, -width, width)
  ysped[i] =+ map(noise(yoff[i]), 0, 1, -height, height)
  l[i] = map(noise(loff[i]), 0, 1, 0, 8)
   
   
    
  fill(255,255,255)
  noStroke()
  circle(x[i],y[i],2)
  for(let j=10; j<30; j++){
  noStroke()
  fill(255,255,255,l[i])
  circle(x[i],y[i],5+j+l[i])
  }
  xoff[i] = xoff[i] + 0.02
  yoff[i] = yoff[i] + 0.02
  loff[i] = loff[i] + 0.16
  x[i]+=xsped[i]/200
  y[i]+=ysped[i]/200
  if(x[i]<-15){
  x[i]=width+15
  }
  if(x[i]>width+15){
  x[i]=-15
  }
  if(y[i]<-15){
  y[i]=height+15
  }
  if(y[i]>height+15){
  y[i]=-15
  }
  }
}