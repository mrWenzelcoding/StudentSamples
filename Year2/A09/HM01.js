let x = []
let y = []
let s = []
let yspeed = []
let x2 = [], y2 = [], a = []
let img = []
let timer
let x3,y3
let n
let y3speed
let counter


function preload(){
  img[0] = loadImage("assets/planet.png")
  img[1] = loadImage("assets/planet3.png")
  img[2] = loadImage("assets/planet4.png")
  img[3] = loadImage("assets/planet5.png")
  img[4] = loadImage("assets/death star.png")
}

function setup() {
  createCanvas(600, 600);
  noStroke()
  timer = 0
  x3 = random(-300,300)
  y3 = -700
  n = round(random(0,4))
  y3speed = 1
  counter = 0
  for(let i = 0; i<200; i++){
    x[i] = random(width)
    y[i] = random(height)
    s[i] = random(1,6)
    yspeed[i] = s[i]*0.6
  }
  for(let j = 0; j<10; j++){
    x2[j] = 230
    y2[j] = 375-j*5
    a[j] = 30-j
  }
}

function draw() {
  background(0);
  noStroke()
  if(timer>=240){
    image(img[n],x3,y3)
    y3+=y3speed
  }
  if(y3>=height){
      timer = 0
      y3 = -700
      x3 = random(-300,300)
      n = round(random(0,4))
    }
  timer++
  for(let i = 0; i<200; i++){
    fill(255)
    circle(x[i],y[i],s[i])
    y[i]+=yspeed[i]
    
    if(y[i] > height){
      y[i] = 0
    }
  }
   rocket()
}

function rocket(){
  //booster
  noStroke()
  for(let j = 0; j<10; j++){
    fill(0,200,255,a[j])
    rect(x2[j],y2[j],139,100)
    
  }
  noStroke()
  fill(200)
  //base
  circle(width/2,height/2,200)
  
  //front things
  triangle(202,280,280,280,270,120)
  rect(270,120,15,110)
  triangle(320,280,398,280,330,120)
  rect(315,120,15,110)
  
  //cockpit
  strokeWeight(50)
  stroke(200)
  line(340,280,390,245)
  noStroke()
  rect(376,210,39)
  triangle(376,210,386,210,386,190)
  triangle(405,210,405,190,415,210)
  rect(386,190,19,20)
  //cockpit windows
  fill(20)
  triangle(378,210,388,210,388,192)
  triangle(403,210,403,192,413,210)
  rect(390,192,11,18)
  
  //other details
  fill(200)
  rect(285,185,35,50)
  stroke(40)
  strokeWeight(2)
  circle(width/2,height/2,60)
  line(375,220,345,253)
  line(396,272,360,285)
  fill(60)
  stroke(150)
  circle(width/2,345,15)
  circle(285,340,15)
  circle(315,340,15)
  circle(width/2,370,15)
  circle(275,360,15)
  circle(325,360,15)
  stroke(0)
  line(276,320,230,372)
  line(324,320,370,372)
  line(270,300,200,300)
  line(330,300,400,300)
  line(286,185,286,273)
  line(314,185,314,273)
}