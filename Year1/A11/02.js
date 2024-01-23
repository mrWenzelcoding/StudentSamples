let x = [];
let y = [];
let speedX = [];
let speedY = []
let c1;
let c2;
let i = 0
let temp;
function setup() {
  rectMode(CENTER)
  createCanvas(400, 400);
  while (i<100){
    x.push(0)
    speedX.push(0)
    speedY.push(0)
    y.push(0)
    i++
  }
  c1 = color(255, 0, 0);
  c2 = color(0, 0, 255);
  i=0
  temp = createSlider(0,10,100)
  
}

function draw() {
  background(c1);
  fill(c2);
  while (i<100){
  circle(x[i],y[i],10)
  y[i] += speedY[i];
  x[i] += speedX[i];
  if (y[i] > height-10) {
    speedY[i] = random(-1, temp.value()*-1);
  }
  if (y[i] < 10) {
    speedY[i] = random(1, temp.value());
  }
  if (x[i] > width-10) {
    speedX[i] = random(-1, temp.value()*-1);
  }
  if (x[i] < 10) {
    speedX[i] = random(1, temp.value());
  }
    i=i+1
  }
  i=0
}
