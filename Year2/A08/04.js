
let x
let y
let s
let r
let g
let b
let xa
let ya
let sa
let ca
let ssider
let csider
function setup() {

  
  createCanvas(400, 500);
  x=random(400)
  y=random(400)
  s=random(20)
  r=244
  g=244
  b=48
  xa=random(100)
  ya=random(100)
  sa=random(100)
  ca=random(100)
  background(255)
  sslider= createSlider(-10,10)
  rslider= createSlider(-255,255)
  gslider= createSlider(-255,255)
  bslider= createSlider(-255,255)
  sslider.position(20,410)
  rslider.position(190,410)
  gslider.position(190,430)
  bslider.position(190,450)
  
  
  
  
  
  fill("rgb(0,0,0)")
  text('size',0,425)
  text('red',160,425)
  text('green',160,445)
  text('blue',160,465)
}

function draw() {
  strokeWeight(2)
  line(0,410,400,410)
  strokeWeight(0)
  ss=sslider.value()
  rc=rslider.value()
  gc=gslider.value()
  bc=bslider.value()
  fill(r+rc,g+gc,b+bc)
  circle(x,y,s+ss)
  x=random(100)
  y=random(100)
  s=random(3)
  r=random(0,255)
  g=random(0,255)
  b=random(0,255)
  xa=random(100)
  ya=random(100)
  sa=random(100)
  ca=random(100)
  xcordnet()
  ycordnet()
  size()
  colour()
}
  function xcordnet(){
  
  if(xa>98){
    x=random(0,50) 
   return x
  }else if(xa>90){
    x=random(50,100) 
    return x
  }else if(xa>75){
   x=random(100,150) 
    return x
  }else if(xa>50){
   x=random(150,200) 
    return x
  }else if(xa>25){
   x=random(200,250) 
    return x
  }else if(xa>10){
   x=random(250,300) 
    return x
  }else if(xa>2){
   x=random(300,350) 
    return x
  }else{
} 
   x=random(350,400) 
  return x
}  
  function ycordnet(){
  
  if(ya>98){
    y=random(0,50) 
   return y
  }else if(ya>90){
    y=random(50,100) 
    return y
  }else if(ya>75){
   y=random(100,150) 
    return y
  }else if(ya>50){
   y=random(150,200) 
    return y
  }else if(ya>25){
   y=random(200,250) 
    return y
  }else if(ya>10){
   y=random(250,300) 
    return y
  }else if(ya>2){
   y=random(300,350) 
    return y
  }else {   
  }
   y=random(350,400) 
    return y
  
  }
  function size(){
   
  if(sa>98){
    s=random(0,2.5)
   return s
  }else if(sa>90){
    s=random(2.5,5)
    return s
  }else if(sa>75){
   s=random(5,7.5) 
    return s
  }else if(sa>50){
   s=random(7.5,10)
    return s
  }else if(sa>25){
   s=random(10,12.5) 
    return s
  }else if(sa>10){
   s=random(12.5,15) 
    return s
  }else if(sa>2){
   s=random(15,17.5) 
    return s
  }else {   
  }
   s=random(17.5,20) 
    return s
  
}
  function colour(){
  
  if(ca>98){
    r= 242
    g= 242
    b= 48
    return r
    return g
    return b
  }else if(sa>90){
    r= 194
    g= 242
    b= 97
    return r
    return g
    return b
  }else if(ca>75){
    r= 145
    g= 242
    b= 145
    return r
    return g
    return b
  }else if(ca>50){
    r= 48
    g= 242
    b= 242
    return r
    return g
    return b
  }else if(ca>25){
    r= 97
    g= 242
    b= 194
    return r
    return g
    return b
  }else if(ca>10){
    r= 145
    g= 242
    b= 145
    return r
    return g
    return b
  }else if(ca>2){
    r= 194
    g= 242
    b= 97
    return r
    return g
    return b
  }else {   
  }
    r= 242
    g= 242
    b= 48
    return r
    return g
    return b
}