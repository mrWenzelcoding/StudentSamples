let x=[]
let y=[]
let g=[]
let h=[]
let s=[]
let a=[]
let trees
let cx
let cy
let cxspeed
function setup() {
  createCanvas(400, 400);
  noStroke()
  rectMode(CENTER)
  background("rgb(15,131,250)")
  fill("rgb(4,73,4)")
  rect(200,360,400,80)
  
  trees=20
  for(let i=0;i<trees;i++){
  x[i]=random(0,400)
  y[i]=random(300,330)
  g[i]=random(100,200)
  h[i]=random(20,-20)
  s[i]=random(50,100)
  a[i]=random(3,7)
  }
  s = sort(s, trees);

}

function draw() {
  for(let i=0;i<trees;i++){
  noStroke()
  fill("rgb(71,21,21)")
  rect(x[i],y[i]+40+h[i],0.2*s[i],80)
  fill(0,g[i],0)
  ellipse(x[i],y[i],s[i])
  stroke(0,0,0)
  fill("red")
  ellipse(x[i]+20,y[i],s[i]/a[i])
  ellipse(x[i]-10,y[i]-10,s[i]/a[i])
  ellipse(x[i],y[i]+15,s[i]/a[i])
  }
  strokeWeight(0.1)
fill("yellow")
  ellipse(340,70,60)
}