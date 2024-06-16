circles = []
points = 9
lazer = []
lazers = 10
num = [-1,1]
speedX = 0.01
speedY = 0.01

function setup() {

  fill("red")
  angleMode(DEGREES)
  createCanvas(windowWidth, windowHeight);
  canvas2 = createGraphics(windowWidth, windowHeight)
  for(i = 0; i< points; i ++){
    circles.push({
      X:cos((360/points)*i) * width,
      Y:sin((360/points)*i) * height,
      D:(width + height)/2 / 30,
      Sin:(360/points)*i, 
      Cos:(360/points)*i
    })
  }
  for(i = 0; i < lazers; i++){
    lazer.push({
      X:random(0,width),
      Y:random(0,height),
      D:random(10),
      R:random(255),
      G:random(255),
      B:random(255),
      Xd:speedX,
      Yd:speedY,
      Rd:random(-1,1),
      Gd:random(-1,1),
      Bd:random(-1,1)
    })
  }
  background(220)
  canvas2.background(220)
}

function draw() {
  background(220)
  markings() 
  image(canvas2,0,0)
  lasers() 
  lazerMakers()
  update()
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
  canvas2.resizeCanvas(windowWidth, windowHeight)
}

function update(){
  for(i = 0; i< points; i ++){
    circles[i].Cos += 1
    circles[i].Sin += 1
  }
  for(j = 0; j < lazers; j ++){
    lazer[j].X += lazer[j].Xd
    lazer[j].Y += lazer[j].Yd
    lazer[j].R += lazer[j].Rd
    lazer[j].G += lazer[j].Gd
    lazer[j].B += lazer[j].Bd
  }  
}

function lasers(){

  for(i = 0; i< points; i ++){
    for(j = 0; j < lazers; j ++){
      stroke(abs((lazer[j].R % 511) - 255),abs((lazer[j].G % 511) - 255),abs((lazer[j].B % 511) - 255))
      line((cos(circles[i].Cos) + 1) * (width/2),(sin(circles[i].Sin) + 1) * (height/2),noise(lazer[j].X)*width,noise(lazer[j].Y)*height)
    }
  }
}

function markings(){
  canvas2.noStroke()
  for(i = 0; i< lazers; i ++){
    canvas2.fill(abs((lazer[i].R % 511) - 255),abs((lazer[i].G % 511) - 255),abs((lazer[i].B % 511) - 255))
    canvas2.circle(noise(lazer[i].X)*width,noise(lazer[i].Y)*height,lazer[i].D)
  }
}

function lazerMakers(){
  stroke(0)
  for(i = 0; i< points; i ++){
    circle((cos(circles[i].Cos) + 1) * (width/2),(sin(circles[i].Sin) + 1) * (height/2),circles[i].D)
  }
}

function mousePressed(){
  fullscreen(true)
}