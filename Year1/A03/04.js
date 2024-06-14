let x;
let x1;
let r;
let r1;
let s;
let c;
let c1;
function setup() {
  createCanvas(600, 600);
  noStroke()
  x=222
  x1=210
  r=354
  l=210
  l1=240
  l2=330
  l3=310
  t=338
  t1=364
  t2=377
  t3=350
  e=143
  e1=177
  e2=149
  e3=215
  e4=247
  e5=244
  h=165
  h1=220
  h2=187
  h3=174
  h4=210
  h5=192
  h6=155
  h7=230
  f=198
  s=random(0,600)
  s1=random(200,400)
  s3=(2,500)
  s4=(0,600)
  c=150
  cherry=330
  cherry1=287
  cherry2=331
  cherry3=260
  c1=15
}

function draw() {
  background(0,0,128);
  //stars
  fill(c1,c,255)
  square(s,width*.115,20,5)
  square(s1,s3,20,5)
  square(s1,s,20,5)
  square(s,s1,20,5)
  square(s1,s1,20,5)
  square(s,s,20,5)
  square(s1,s3,20,5)
  square(s4,s3,20,5)
  square(width*.4,width*.86,20,5)
  square(width*.86,width*.08,20,5)
  square(width*.38,width*.2,20,5)
  square(s1,s,20,5)
  square(s3,s1,20,5)
  square(s1,2,20,5)
  square(width*.01,width*.33,20,5)
  square(s,s3,20,5)
  square(s3,s4,20,5)
  
  //rainbow
  fill("red")
  rect(r,width*.38,200,20)
  fill("orange")
  rect(r,width*.4,200,15)
  fill("yellow")
  rect(r,width*.42,200,20)
  fill("green")
  rect(r,width*.44,200,20)
  fill(30,144,255)
  rect(r,width*.46,200,20)
  fill("purple")
  rect(r,width*.48,200,15)


 
  //front legs
 push()
  stroke(0)
  strokeWeight(3)
  fill(192,192,192)
  rect(l,width*.5,15,30,20)
  rect(l1,width*.5,15,30,20)
  //back legs
  rect(l2,width*.5,15,30,20)
  rect(l3,width*5,15,30,20)
  //tail
  quad(t,width*.36,t1,width*.3,t2,193,t3,233)
  pop()
  
  //nyan cat base (poptart)
  fill("beige")
rect(x1, width*.35,150 ,100, 20)
  fill("lightpink")
  rect(x,width*.37,130,80,20)
  fill(255,0,255)
  square(cherry,240,10,2)
square(cherry1,265,10,2)
  square(cherry2,260,10,2)
  square(cherry3,278,10,2)
  square(cherry1,230,10,2)
  
//head
  push()
stroke(0)
strokeWeight(3)
  fill(192,192,192)
  triangle(e,243,e1,210,e2,190)
  triangle(e3,208,e4,233,e5,190)
  circle(f,width*.438,120)
 pop()
  //face
  fill("black")
  square(h,248,10)
  fill("white")
  square(h,248,6)
  fill("black")
  square(h1,248,10)
  fill("white")
  square(h1,248,6)
  fill("black")
  square(h2,264,9)
  rect(h3,286,3,10)
  rect(h3,296,39,3)
  rect(h4,286,3,13)
  rect(h5,286,3,10)
  fill("pink")
  square(h6,258,12)
  square(h7,258,12)
x=x-7
x1=x1-7
  r=r-7
  l=l-7
  l1=l1-7
  l2=l2-7
  l3=l3-7
  t=t-7
  t1=t1-7
  t2=t2-7
  t3=t3-7
  e=e-7
  e1=e1-7
  e2=e2-7
  e3=e3-7
  e4=e4-7
  e5=e5-7
  h=h-7
  h1=h1-7
  h2=h2-7
  h3=h3-7
  h4=h4-7
  h5=h5-7
  h6=h6-7
  h7=h7-7
  f=f-7
s+=random(-2,2)
 s1+=random(-2,2)
  s3+=random(-2,3)
  s4=random(-2,2)
  c=random(255)
  cherry=cherry-7
  cherry1=cherry1-7
  cherry2=cherry2-7
  cherry3=cherry3-7
  c1=random(255)
  
  
}

function mousePressed(){

noLoop();


}