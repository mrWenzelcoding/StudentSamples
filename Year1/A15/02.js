let fx=[]
let fy=[]
let cx=[]
let cy=[]
let xs=[]
let ys=[]
let s=[]
let x=[]
let y=[]
let cxl=[]
let cyl=[]
let c=["red","green","grey","blue","purple","pink","yellow","orange","white","magenta",]
let fs=[]
function setup() {
  createCanvas(600, 600);
  rectMode(CENTER)
  
  //variables
  for(let i=0; i<10; i++){
  fx[i]=random(width)
  fy[i]=random(height)
  cx[i]=random(width)
  cy[i]=random(height)
  fs[i]=0
  s[i]=20
  //particles varibles
  for(let g=0; g<40; g++){
    xs[g+40*i]=random(-10,+10)
    ys[g+40*i]=random(-10,+10)
    x[g+40*i]=cx[i]
    y[g+40*i]=cy[i]
  }
  }
}

function draw() {
  background(220)
  //text block
  fill(0)
  rect(0,0,150,400)
  for(let i=0; i<10; i++){
  //text
  fill(c[i])
  text(c[i]+" "+fs[i],2,i*20)
  
  //Food
  fill(c[i])
  rect(fx[i],fy[i],10)
  
  //Cell
  circle(cx[i],cy[i],s[i]/2)
  fill("rgba(63,231,255,0.69)")
  circle(cx[i],cy[i],s[i])
  
  //movment
    cx[i]=lerp(cx[i],fx[i],0.05)
    cy[i]=lerp(cy[i],fy[i],0.05)

  
  //Eating mechanics
  for(let g=0; g<40; g++){
     circle(x[g+40*i],y[g+40*i],10)
      x[g+40*i]=x[g+40*i]+xs[g+40*i]
      y[g+40*i]=y[g+40*i]+ys[g+40*i]
      
  }
    
  if(cx[i]>(fx[i]-2) && cx[i]<(fx[i]+2) && cy[i]>(fy[i]-2) && cy[i]<(fy[i]+2)){
    fx[i]=random(width)
    fy[i]=random(height)
    s[i]+=5
    fs[i]=fs[i]+1
  }
  if(s[i]>80){

    for(let g=0; g<40; g++){
      x[g+40*i]=cx[i]
      y[g+40*i]=cy[i]
    }
      s[i]=10
  }
  }
}