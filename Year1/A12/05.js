let x=[]
let y=[]
let x1=[]
let y1=[]
let s=[]
let d=[]
let r=[]
let g=[]
let b=[]
let n=1
let f
function setup() {
  createCanvas(400, 400);
  noStroke()
  
  let i=0
  while(i<1000){
    x[i]=random(60,width-60)
    y[i]=random(60,height-60)
    x1[i]=random(60,width-60)
    y1[i]=random(60,height-60)
    s[i]=20
    d[i]=0
    r[i]=random(0,255)
    g[i]=random(0,255)
    b[i]=random(0,255)
    i++
}
}
function draw() {
  background(220);


  for(let i=0;i<n;i++){
    x[i]=lerp(x[i],x1[i]+1,0.05)
    y[i]=lerp(y[i],y1[i]+1,0.05)
    fill(r[i],g[i],b[i])
    ellipse(x[i],y[i],s[i])
    rect(x1[i],y1[i],5,5)
    d[i]=dist(x1[i],y1[i],x[i],y[i])
    
    if (d[i]<2){
      x1[i]=random(0,width)  
      y1[i]=random(0,height)
      r[i]+=random(-50,50)
      b[i]+=random(-50,50)
      s[i]+=20
    }
    if (s[i]>100){
      s[i]=10
      n+=1   
    }
  }
}