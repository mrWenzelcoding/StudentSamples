let x1=[];
let x2=[];
let x3=[];
let y1=[];
let y2=[];
let y3=[];
let changex=[];
let changey=[];
let R=[]
let B=[]
let F;
function setup() {
  createCanvas(600, 600);
  F=0
  strokeWeight(random(0,3))
  for(let i=0; i<=100;i++){
  changey[i]=random(-2,2)
    changex[i]=random(-2,2)
  x1[i]=random(0,width)
  x2[i]=random(0,width)
  x3[i]=random(0,width)
   y1[i]=random(0,height)
  y2[i]=random(0,height)
  y3[i]=random(0,height)
  R[i]=random(100,255)
     B[i]=random(0,255)
}
}
function draw() {
  F+=0.01
  stroke(255,0,0)
  background(0,0,0,1);
  translate(1, width/width);
  rotate(F / 3.0);
  for(let i=0; i<=100;i++){
    stroke(R[i],0,B[i])
    fill(0,0,0,50)
  triangle(x1[i],y1[i],x2[i],y2[i],x3[i],y3[i])
  x1[i]+=changex[i]
  x2[i]+=changex[i]
  x3[i]+=changex[i]
  y1[i]+=changey[i]
  y2[i]+=changey[i]
  y3[i]+=changey[i]
}
}
function mouseClicked(){
F-=(random(0,1))
}