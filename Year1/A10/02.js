let x1,x2,y1,y2;
let r,g,b;

r = 0
g = 255
b = 255
x1 = 0
x2 = 0
y1 = 0
y2 = 0

function setup() {
  createCanvas(400, 400);


    
 

}
  



function draw() {
  
  background(0,10);
}
function mouseClicked() {
  
for(let i = 0; i < 20; i++) {

  strokeWeight(random(3,10))
  r = r + i
  g = g - i
  b = b - i
  r = 0
  b = 255
  g = 255
  stroke(random(0,255),random(0,255),random(0,255))
  x1 = x2
  x2 = y1
  y1 = y2
  y2 = random(10,390)
  line(x1,y1,x2,y2)
}
  
}