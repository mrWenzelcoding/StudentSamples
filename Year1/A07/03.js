let r
let g
let b
let r2
let g2
let b2
let rf
let gf
let bf
let s
let s2
let sped

function setup() {
  createCanvas(600, 600);
  s=1
  s2=1
  r=random(255)
  g=random(255)
  b=random(255)
  rf=random(255)
  gf=random(255)
  bf=random(255)
  r2=random(255)
  g2=random(255)
  b2=random(255)
  sped=1
}


function draw() {
  
  
  //No stroke
  noStroke()
  
  
  //background
  background(rf,gf,bf)
  
  //Circle 1
  fill(r,g,b,)
  circle(300,300,s)
  
  //Circle 2
  fill(r2,g2,b2)
  circle(300,300,s2)
  
  //Acelleration
  s=s+sped
  sped=sped+0.01
  
  if (s>900){
    s=s2
    rf=r
    bf=b
    gf=g
    r=r2
    g=g2
    b=b2
    s2=0
    r2=random(255)
    g2=random(255)
    b2=random(255)
  
}

    if (s>300){
  s2=s2+sped
    }

  
  
}