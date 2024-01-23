let x
let y
let s
let r
let g
let b
let x1
let y1
let x2
let y2
let x3
let y3
let x4
let y4
let x5
let y5
let x6
let y6

function setup() {
  createCanvas(400, 400);
  background(0);
  noStroke()
  x = 0
  y = 210
  s = 100
  r = 25
  g = 47
  b = 120
  x1 = 250
  y1 = 0
  x2 = 0
  y2 = 0
  x3 = 50
  y3 = 400
  x4 = 400
  y4 = 80
  x5 = 400
  y5 = 300
  x6 = 275
  y6 = 400
}


function draw() {
  fill(r,g,b)
  circle(x,y,s)
  s = s - 0.25
  x = x + 1
  y = y - 0.05
  r = r + 10
  g = g +1
  b = b - 1
  circle(x1,y1,s)
  x1 = x1 - 0.25
  y1 = y1 + 1
  circle(x2,y2,s)
  x2 = x2 + 1
  y2 = y2 + 1
  circle(x3,y3,s)
  x3 = x3 + 0.75
  y3 = y3 - 1
  circle(x4,y4,s)
  x4 = x4 - 1
  y4 = y4 + 0.6
  circle(x5,y5,s)
  x5 = x5 - 1
  y5 = y5 - 0.5
  circle(x6,y6,s)
  x6 = x6 - 0.375
  y6 = y6 - 1
}

function mousePressed() {
  setup()
  
}
