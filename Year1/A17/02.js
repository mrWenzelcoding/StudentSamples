let img
let x
let y
let col
let RSW,RSH
let tl, tr, br, bl
let t
function preload(){
 img = loadImage("assets/Rain Droplets.avif") 
  
  
}
function setup() {
  rectMode(CORNER)
  //You can change the rect mode to get different effects
  createCanvas(img.width, img.height);
  noStroke()
  image(img,0,0)
  t = 100
  RSW = 5
  RSH = 10
}
function draw() {

for(let i = 0; i<t; i++){
  x = int(random(width))
  y = int(random(height))
  tr = random(0,5)
  tl = random(0,5)
  br = random(0,5)
  bl = random(0,5)
  col = get(x,y)
  fill(col,0)
  rect(x,y,RSW,RSH,tr,tl,br,bl)
}
  t-=0.05
  if(t<=0){
    noLoop()
  }
  
}
function mouseClicked(){
  RSW += 1
  RSH += 2
}