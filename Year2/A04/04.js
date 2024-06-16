let canvas2
let x
let y
let x1 = []
let y1 = []
let xSpeed = []
let ySpeed = []
let xOff
let yOff
let r, g, b
let r1, b1, g1

function setup() {
  createCanvas(600, 600);
  
  canvas2 = createGraphics(600, 600)
  
  r = random(255)
  g = random(255)
  b = random(255)
  
  r1 = random(255)
  g1 = random(255)
  b1 = random(255)
  
  xOff = random(-20, 20)
  yOff = random(-20, 20)
  
  x = 0
  y = 0
  
  for(let i = 0; i < 20; i++){
    xSpeed[i] = random(-10, 10)
    ySpeed[i] = random(-10, 10)
    x1[i] = width/2
    y1[i] = height/2
  }
  
  
  
  
  //noStroke()
  canvas2.noStroke()
  canvas2.background(0);
  
}

function draw() {
  background(0);
  
  
  image(canvas2, 0, 0)
  
  canvas2.fill(r,g,b,15)
  canvas2.ellipse(x, y, 25)
  
  r = lerp(r, r1, 0.01)
  g = lerp(g, g1, 0.01)
  b = lerp(b, b1, 0.01)
  
  if(dist(r, g, b, r1, g1, b1) < 0.01){
    r1 = random(255)
    g1 = random(255)
    b1 = random(255)
  }
  
  x = noise(xOff)*width
  xOff += 0.002+random(0,0.005)
  y = noise(yOff)*height
  yOff += 0.002+random(0,0.005)
  
  fill(r,g,b)
  ellipse(x, y, 10)
  
  
  if(mouseIsPressed == true){
    
    for(let i = 0; i < 20; i++){
      
      
      ellipse(x1[i], y1[i], 12)
      
      line(x1[i], y1[i], x, y)
      
      x1[i] += xSpeed[i]
      y1[i] += ySpeed[i]
      
      if(x1[i] >= width){
        xSpeed[i] = -random(10)
      }
      if(x1[i] <= 0){
        xSpeed[i] = random(10)
      }
      if(y1[i] >= height){
        ySpeed[i] = -random(10)
      }
      if(y1[i] <= 0){
        ySpeed[i] = random(10)
      }
      
    }
    
  
  }else if(mouseIsPressed == false){
    //x1 = mouseX
    //y1 = mouseY
  
    stroke(255, 255, 255)
    line(mouseX + 25, mouseY + 25, x,y)
    line(mouseX + 25, mouseY - 25, x,y)
    line(mouseX - 25, mouseY + 25, x,y)
    line(mouseX - 25, mouseY - 25, x,y)
    line(mouseX + 35, mouseY, x,y)
    line(mouseX - 35, mouseY, x,y)
    line(mouseX, mouseY + 35, x,y)
    line(mouseX, mouseY - 35, x,y)

    stroke(255, 255, 255)
    ellipse(mouseX + 25, mouseY + 25, 12)
    ellipse(mouseX + 25, mouseY - 25, 12)
    ellipse(mouseX - 25, mouseY + 25, 12)
    ellipse(mouseX - 25, mouseY - 25, 12)
    ellipse(mouseX - 35, mouseY, 12)
    ellipse(mouseX + 35, mouseY, 12)
    ellipse(mouseX, mouseY + 35, 12)
    ellipse(mouseX, mouseY - 35, 12)
  }
  
}

