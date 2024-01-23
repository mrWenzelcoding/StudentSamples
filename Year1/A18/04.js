let img
let s
function preload(){
  img=loadImage("assets/cover2.jpeg")
}


function setup() {
  s = 8
  createCanvas(img.width,img.height);
  image(img,0,0)
noStroke()
  x = random(width)
  y = random(height)
}
function draw() {
  //background(220);
  s-=0.05
  for(let i = 0; i<1000; i++){
   pix = get(x,y)
  fill(pix)
  square(x,y,s)
  x = random(width)
  y = random(height)
  
  }
  }