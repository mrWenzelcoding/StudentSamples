let x = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let speed = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
function setup() {
  createCanvas(400, 400);
  let i = 0;
  while(i<20){
    speed[i] = random(1,4);
    i++;
    noStroke()
  }
}
function draw() {
background(10,80,120);  
  let j = 0;
  while(j<20){
    fill(240,40,0)
    ellipse(x[j],20*j+10,32,16);
    triangle(x[j]-20,j*20+18,x[j]-20,j*20+2,x[j],j*20+10);
    fill("cornsilk")
    ellipse(x[j]+8,20*j+10,8,8);
    x[j] = x[j] + speed[j];
    if(x[j] > width+40){
    x[j]=-40;
  }
    j++;
  }
}