let rad;
let r,g,b;
function setup() {
  createCanvas(400, 400);
  stroke("white")
  strokeWeight(4)
  rad=0;
  r=random(0,200)
  g=random(0,200)
  b=random(0,200)
}
function draw() {
  fill(r,g,b)
  circle(width/2,height/2,rad)
  rad+=4
  r+=1
  g+=1
  b+=1
  if(rad>width){
  r=random(0,200)
  g=random(0,200)
  b=random(0,200)
  rad=0
  }
}