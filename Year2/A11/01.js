let x = [];
let y = [];
let s = [];
let t = [];
let d = [];
let r = [];
let g = [];
let b = [];
let points;
let xOff = [];
let yOff = [];
let tOff = [];
let timer;
let w;
let ball = [];
function setup() {
  // createCanvas(windowWidth, windowHeight);
  createCanvas(400,400)
  strokeWeight(0);
  timer = 0;
  points = 0;
  w = 0;
  for (let i = 0; i < 100; i++) {
    x[i] = random(0, width);
    y[i] = random(0, height);
    s[i] = 40;
    t[i] = 255;
    r[i] = random(55, 155);
    g[i] = random(55, 155);
    b[i] = random(55, 155);
    xOff[i] = random(0, width);
    yOff[i] = random(0, height);
    xOff[i] = random(0, 255);
  }
}
function draw() {
  background(0, 0, 0);
  fill("white");
  rect(0, 110, width, height);
  noStroke();
  for (let i = 0; i < w; i++) {
    fill(r[i], g[i], b[i]);
    x[i] = noise(xOff[i]) * width;
    y[i] = noise(yOff[i]) * width;
    tOff[i] += 0.01;
    xOff[i] += 0.004;
    yOff[i] += 0.004;
    x[i] = map(x[i], 0, width, -100, width + 100);
    y[i] = map(y[i], 0, height, -100, height + 100);
    ball[i].x = x[i];
    ball[i].y += ball[i].yspeed;
    ball[i].yspeed += 0.4;
    circle(ball[i].x, ball[i].y, 20);
    d[i] = dist(ball[i].x, ball[i].y, mouseX, height/1.333);

    if (d[i] < height/14) {
      ball[i].y = 950;
      points += 1;
    }
  }
  fill("black");
  arc(mouseX, height/1.333, width/8, height/8, 0, PI);
  fill("white");
  text("" + points+"/100", width/2.2222, height/8);
  if (timer > 20) {
    newball = {
      x: 200,
      y: 100,
      xspeed: random(-5, 5),
      yspeed: -5,
    };
    ball.push(newball);
    timer = 0;
    w += 1;
  }
  timer += 1;
}

// function mousePressed(){
//   fullscreen(true)  
// }

// function windowResized(){
//   resizeCanvas(windowWidth,windowHeight)
// }