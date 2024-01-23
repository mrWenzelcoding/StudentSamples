let a
let b
let c
let d
let e
let f
let r
let bi
let g
let sec
function setup() {
  noStroke()
  createCanvas(600, 600);
  background(1)
  
  //point location start
a=(300)
b=(300)
c=(300)
d=(300)
e=(300)
f=(300)
sec=(0)
  
  //Color start
r=(random(255))
bi=(random(255))
g=(random(255))
}

function draw() {
  
  //Triangle
  fill(r,g,bi)
  triangle(a,b,c,d,e,f)
  
  //Timer
  sec++
  
  //Size random ajustment
  a=(a+random(10)-random(10))
  b=(b+random(10)-random(10))
  c=(c+random(10)-random(10))
  d=(d+random(10)-random(10))
  e=(e+random(10)-random(10))
  f=(f+random(10)-random(10))
  
  //Color random ajustment
  r=(r+random(5)-random(5))
  bi=(bi+random(5)-random(5))
  g=(g+random(5)-random(5))
  
  //Boundry Check
  if(a<0)
    a=1
  if(a>600)
    a=599
  if(b<0)
    b=1
  if(b>600)
    b=599
  if(c>600)
    c=599
  if(c<0)
    c=1
  if(d>600)
    d=599
  if(d<0)
    d=1
  if(e>600)
    e=599
  if(e<0)
    e=1
  if(f>600)
    f=599
  if(f<0)
    f=1
  
  //Color check
  if(r<0)
    r=1
  if(r>255)
    r=254
  if(bi<0)
    bi=1
  if(bi>255)
    bi=254
  if(g>255)
    g=254
  if(g<0)
    g=1
  
  //Second converter
  
  if(sec>300)
    r=(random(255))
  
  if(sec>300)
    bi=(random(255))  
  
  if(sec>300)
    g=(random(255))
  
  if(sec>300)
    a=(random(600))
  
  if(sec>300)
    b=(random(600))
  
  if(sec>300)
    c=(random(600))
    
  if(sec>300)
    d=(random(600))
  
  if(sec>300)
    e=(random(600))
  
  if(sec>300)
    f=(random(600))
  
  
  if(sec>300)
    sec=0
  
    
  }