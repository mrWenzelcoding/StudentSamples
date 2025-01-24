let canvas2
let x,y
let xoff,yoff
let x2,y2,xoff2,yoff2
let img
let r,g,b
let gup,rup,bup

function preload(){
  img = loadImage("assets/city.jpg")
}

function setup() {
  createCanvas(500, 500);
  canvas2 = createGraphics(500,500)
  canvas2.noStroke()
  xoff = random(0,100)
  yoff = random(0,100)
  xoff2 = random(0,100)
  yoff2 = random(0,100)
  r = 255
  g = 0
  b = 0
  gup = 1
  rup = 1
  bup = round(random(-1,1))
}

function draw() {
  background(img,20);
  canvas2.background(110,0)
  image(canvas2,0,0)
  x = noise(xoff)*width
  x = map(x,0,width,-200,width+200)
  y = noise(yoff)*height
  y = map(y,0,height,-200,height+200)
  x2 = noise(xoff2)*width
  y2 = noise(yoff2)*height
  xoff+=0.005
  yoff+=0.005
  xoff2+=0.01
  yoff2+=0.01
  canvas2.fill(r,g,b)
  canvas2.circle(x,y,10)
  stroke(r,g,b)
  strokeWeight(6)
  line(x,y,x2,y2)
  stroke(140)
  strokeWeight(5)
  fill(180)
  ellipse(x2,y2,40,20)
  stroke(0,215,0,200)
  fill(0,255,0,200)
  circle(x2,y2-10,20)
  noStroke()
  r+=rup
  g+=gup
  b+=bup
  if(r>=255){
    rup = -1
    gup = 1
    bup = round(random(-1,1))
  }
  if(g>=255){
    rup = 1
    gup = -1
    bup = round(random(-1,1))
  }
  if(bup==0){
    bup = round(random(-1,1))
  }
}

function mouseClicked(){
  setup()
}