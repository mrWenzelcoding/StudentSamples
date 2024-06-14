

let x    //The purple one is the main bouncy ball
let y
let speedx
let speedy
let r
let g
let b
function setup() {
  createCanvas(600, 600);
  //noStroke()
  r=123
  g=126
  b=132
  x=300
  y=130
  speedx=10
  speedy=10
  background(0);
}
function draw() {
  frameRate(100)
  strokeWeight(3.5)
  //stroke(r, g, b)
  fill("maroon")
  ellipse(x+35, y+65, 75)
  fill("purple")
  ellipse(x, y, 75)
  fill("darkblue")
  ellipse(x-35, y+63, 75)
x=x+speedx
y=y+speedy

if(x>width){
  speedx=-1*random(1,15)
}
if(y>height){
  speedy=-1*random(1,15)
}
if(x<0){
  speedx=1*random(1,15)
}
if(y<0){
  speedy= 1 * random(1,15)
r=r+random(-9.5, 10)
g=g+random(-10, 9.3)
b=b+random(-9.1, 10)

}
} 
  
