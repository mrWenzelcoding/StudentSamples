let canvas2,x =[],y = [],x1,y1,xOff, yOff,x1Off =[],y1Off = [],s,rb,gb,bb,r,g,b,rOff,gOff,bOff,rbOff,gbOff,bbOff

function setup() {
  createCanvas(800, 800);
  canvas2 = createGraphics(800,800)
    noStroke()
  canvas2.noStroke()
  for(i=0;i<6;i++){
  x1Off[i] = random(1,800)
  y1Off[i] = random(1,800)
     x[i] = noise(x1Off[i]) * width
  y[i] = noise(y1Off[i]) * height
  }
  xOff = 100
  yOff = 0
  s = 10
  rbOff = 500
  gbOff = 550
  bbOff = 700
  rOff = 1000
  gOff = 1200
  bOff = 1400
}

function draw() {
  //background color
  rb = noise(rbOff) * 255
  gb = noise(gbOff) * 255
  bb = noise(bbOff) * 255
  background(rb,gb,bb)
  //paint color
   r = noise(rOff) * 255
  g = noise(gOff) * 255
  b = noise(bOff) * 255
    x1 = noise(xOff) * width
  y1 = noise(yOff) * height
  // paint
  canvas2.fill(r,g,b)
   canvas2.circle(x1,y1,s)
   image(canvas2,0,0,800,800)
  //Lasers
  for(i=0;i<6;i++){
  fill("black")
  circle(x[i],y[i],30)
    strokeWeight(2)
  stroke(r,g,b)
  line(x[i],y[i],x1,y1)
      x[i] = noise(x1Off[i]) * width
  y[i] = noise(y1Off[i]) * height
    x1Off[i]+=0.001
  y1Off[i]+=0.001
  }
  x1 = noise(xOff) * width
  y1 = noise(yOff) * height
  xOff+=0.003
  yOff+=0.003
  s+=random(-1,1)
  //color change speed
  rOff += 0.005
  gOff += 0.005
  bOff += 0.005
  rbOff += 0.003
  gbOff += 0.003
  bbOff += 0.003
}