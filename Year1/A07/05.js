let s;
let r;
let g;
let b;
let r2;
let g2;
let b2;
let s2;
let start=true

function setup() {
  noStroke();
  createCanvas(400, 400);
  s = 2;
  r = 0;
  b = 0;
  g = 0;
  r2 = 0;
  g2 = 0;
  b2 = 0;
  s2 = 30;

  
}

function draw() {
  background(r2, g2, b2);
  fill(r, g, b);
  circle(width / 2, height / 2, s);

  if (mouseIsPressed === true) {
    s += s / -30;

    if (s < width / width) r2 = r;
    if (s < width / width) g2 = g;
    if (s < width / width) b2 = b;
  } else {
    s += s / 30;
  }
  if (s > width * 1.6) s = 2;
  if (s < width * 1.5) g += 0.1
  if (s < width * 1.5) b += 0.1
  if (s < width * 1.5) r += 0.1
  if (s < 2.1) g = random(50,150);
  if (s < 2.1) b = random(50,150);
  if (s < 2.1) r = random(50,150);

  if (s > width * 1.5) r2 = r;
  if (s > width * 1.5) g2 = g;
  if (s > width * 1.5) b2 = b;

  if (r > 200) r = 100;
  if (r < 0) r = 100;
  if (b > 200) b = 100;
  if (b < 0) b = 100;
  if (g > 200) g = 100;
  if (g < 0) g = 100;
    startScreen(start)
}

function startScreen(s){
  if(s == true){
  background("white")
  text("Click to start. Click circle to revese time.", width/2-100,height/2)
  noLoop()
  }
}

function mousePressed(){
  if(start){
    start = false
    loop()
 
  }
}