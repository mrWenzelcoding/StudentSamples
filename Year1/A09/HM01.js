let dF
let F
let r,g,b,r1,g1,b1
let dr,dg,db

function setup() {
noStroke()
createCanvas(400,400)
background(0)
dr = 1
dg = 1
db = 1
r = 255
g = 255
b = 255
r1 = 25
g1 = 255
b1 = 255
F = 0
dF = 0
}


function draw(){
  let i = 0
  while(i < 200){
  //console.log(r)
  fill(abs(r),abs(g),abs(b))
  rect(F,0,10,height) 
  if(r <= -255){
    r = r + 510}
  if(g <= -255){
    g = g + 510}
  if(b <= -255){
    b = b + 510}
  r-=1
  g-=1
  b-=1
  i++
  F = F + 2.5
  }
  /*if(frameCount%520 === 0){
  dF+=2.3}*/
/*  if(r1 < 0 || r1 > 255){
dr = dr * -1}
  if(g1 < 0 || g1 > 255){
dg = dg * -1}
  if(b1 < 0 || b1 > 255){
db = db * -1} */

  
  
  
  r1 = r1 - dr
  g1 = g1 - dg
  b1 = b1 - db
  F = 0 - dF
  r = r1
  g = g1
  b = b1
  //console.log(r1)
}

