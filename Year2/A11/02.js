let ball = []
let ball1 = []
let n
let n1
let a
let x1
let y1
let a1
let x2
let y2

function setup() {
  createCanvas(600, 600);
  
  noStroke()
  
  angleMode(DEGREES)
  a = 0
  a1 = 0
  
  ball[0] = {
    x: width/2,
    y: height/2,
    xSpeed:15,
    ySpeed:15,
    s: random(1),
    r: random(0),
    g: random(0),
    b: random(0)
  }
  
  ball1[0] = {
    x: width/2,
    y: height/2,
    xSpeed: 15,
    ySpeed: 15,
    s: random(1),
    r: random(0),
    g: random(0),
    b: random(0)
  }
  
  n = 1
  n1 = 1
  background(0);
}

function draw() {
  
  noStroke()
  
  a++
  y1 = sin(a)
  y1 = map(y1, -1, 1, 50, height-50)
  x1 = cos(a)
  x1 = map(x1, -1, 1, 50, width-50)
  
  a1++
  y2 = sin(a)
  y2 = map(y2, 1, -1, 50, height-50)
  x2 = cos(a)
  x2 = map(x2, 1, -1, 50, width-50)
  
  for(let i = 0; i < n; i++){
    fill(ball[i].r, ball[i].g, ball[i].b)
    ellipse(ball[i].x,ball[i].y,ball[i].s)
    //ball[i].x+=ball[i].xSpeed
    ball[i].y+=ball[i].ySpeed
    if(ball[i].y < 0 || ball[i].y > height){
      ball.splice(i,1)
      n--
    }
  }
    
  for(let i = 0; i < n1; i++){
    fill(ball1[i].r, ball1[i].g, ball1[i].b)
    ellipse(ball1[i].x,ball1[i].y,ball1[i].s)
    ball1[i].x+=ball1[i].xSpeed
    //ball1[i].y+=ball1[i].ySpeed
    if(ball1[i].x < 0 || ball1[i].x > width){
      ball1.splice(i,1)
      n1--
    }
  }
  
  ball[n] = {
    x: x1,
    y: y1,
    xSpeed: random(1,5),
    ySpeed: random(-5,-1),
    s: random(20,30),
    r: random(12),
    g: random(14,255),
    b: random(14, 75)
  }
  n++
  
  ball1[n1] = {
    x: x2,
    y: y2,
    xSpeed: random(1,5),
    ySpeed: random(-5,5),
    s: random(20,30),
    r: random(150,255),
    g: random(14, 75),
    b: random(12)
  }
  
  n1++
  
  stroke(255,255,255)
  strokeWeight(5)
  fill(255,255,255, 0)
  ellipse(width/2, height/2, 500)
  
  stroke(0,0,3)
  strokeWeight(200)
  fill(0,0,255,0)
  ellipse(width/2, height/2, 700)
  
  noStroke()
  fill(255,255,255)
  ellipse(x1, y1, 10)
  ellipse(x2, y2, 10)
  
  fill(190, 14, 12)
  ellipse(70, 70, 80)
  
  fill(14, 255, 132)
  ellipse(width-70, 70, 80)
  
  fill(14, 255, 252)
  ellipse(width-70, height-70, 80)
  
  fill(244, 255, 42)
  ellipse(70, height-70, 80)
  
}