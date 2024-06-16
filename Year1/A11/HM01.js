let balls = 100
let maxBalls = 50
let ballD = 10
let ball = []
let ballXS = []
let ballYS = []
let colour = []
let colourD = []
let ballR
let x,y,r;
let sx,sy
let Size = 400
let colourO = [-2,-1.5,-1,-0.5,0,0.5,1,1.5,2]

function setup() {
  ball = []
  ballXS = []
  ballYS = []
  colour = []
  colourD = []
  noStroke()
  createCanvas(Size, Size);
  for(i=0;i<balls;i++){
  ballXS.push(random(-5,5))
  ballYS.push(random(-5,5))
  ballR = random(5,15)
  ball.push({X:Size/2,Y:Size/2,R:ballR})
  colourD.push({R: random(colourO),G: random(colourO),B: random(colourO)})
  colour.push({R:random(0,50),G:random(100,200),B:random(150,255)})
  }
}

function draw() {
  background(0,20);
  x = 0
  y = 0
  for(i=0;i<balls;i++){
  fill(colour[i].R,colour[i].G,colour[i].B)
  circle(ball[i].X,ball[i].Y,ball[i].R)
  ball[i].X = ball[i].X - ballXS[i]
  ball[i].Y = ball[i].Y - ballYS[i]
  
  if(colour[i].R > 255 || colour[i].R < 0){
  colour[i].R = colourD[i].R * -1

  }
  if(colour[i].G > 255 || colour[i].G < 0){
  colour[i].G = colourD[i].G * -1
  }
  if(colour[i].B > 255 || colour[i].B < 0){
  colour[i].B = colourD[i].B * -1
  }
    
    
    
  if(ball[i].X > Size-ball[i].R) {
ballXS[i] = random(0,5)
  clone()
  colour[i].R = colour[i].R + colourD[i].R
  colour[i].G = colour[i].G + colourD[i].G
  colour[i].B = colour[i].B + colourD[i].B
  }
  if(ball[i].X < 0+ball[i].R) {
ballXS[i] = random(-5,0)
  clone()
  colour[i].R = colour[i].R + colourD[i].R
  colour[i].G = colour[i].G + colourD[i].G
  colour[i].B = colour[i].B + colourD[i].B
  }
  if(ball[i].Y > Size-ball[i].R) {
ballYS[i] = random(0,5)
  clone()
  colour[i].R = colour[i].R + colourD[i].R
  colour[i].G = colour[i].G + colourD[i].G
  colour[i].B = colour[i].B + colourD[i].B
  }
  if(ball[i].Y < 0+ball[i].R) {
ballYS[i] = random(-5,0)
  clone()
  colour[i].R = colour[i].R + colourD[i].R
  colour[i].G = colour[i].G + colourD[i].G
  colour[i].B = colour[i].B + colourD[i].B
  }
  }
  
}

function clone(){
  /*if(balls < maxBalls){
  ballXS.push(random(-2,2))
  ballYS.push(random(-2,2))
  ballR = random(5,15)
  ball.push({X:Size/2,Y:Size/2,R:ballR})
  balls++}*/
}

function mouseDragged() {
  /*ball = []
  ballXS = []
  ballYS = []*/
  //colour = []
  //colourD = []
  balls = balls + ballD
  noStroke()
  //createCanvas(Size, Size);
  for(i=0;i<ballD;i++){
  ballXS.push(random(-5,5))
  ballYS.push(random(-5,5))
  ballR = random(5,15)
  ball.push({X:mouseX,Y:mouseY,R:ballR})
  
  colourD.push({R: random(-10,10),G: random(-10,10),B: random(-10,10)})
  colour.push({R:random(0,50),G:random(100,200),B:random(150,255)})
  }//console.log(ball)
}