let x
let y
let x2
let y2
let r
let g
let b
let l
let w
function setup() {
  createCanvas(600, 600);
  x=random(600)
  y=random(600)
  r=random(255)
  g=random(255)
  b=random(255)
  w=random(10)
  l=0

}

function draw() {
  
  //Color max
  if(r>255){
    r=255
  }
  if(g>255){
    g=255
  }
  if(b>255){
    b=255
  }
  
  //Color min
  if(r<0){
    r=0
  }
  if(g<0){
    g=0
  }
  if(b<0){
    b=0
  }
  
  

 
    
}
function mousePressed(){
   background(0)
  l=l+20
  for(let i=0; i<l; i++){
    stroke(r,g,b)
    strokeWeight(w)
    x2=random(600)
    y2=random(600)
    
    line(x,y,x2,y2)
    
    x=random(600)
    y=random(600)
    r=r+random(20)-random(20)
    g=g+random(20)-random(20)
    b=b+random(20)-random(20)
    w=random(10)
    
    line(x,y,x2,y2)
  
  
}
}