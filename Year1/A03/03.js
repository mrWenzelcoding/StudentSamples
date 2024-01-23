//pause in type codes at bottom
let x = 10;
let y = 10;
let spinSpeed = 1;
let spin = 1
let loopNum = 1
let r1 = 255
let g1 =80
let b1 =255
let rChange1 =1
let b2 = 255
let bChange2 = 1
let xSped =1
let g2 = 200
let rand1 = 1
let rand2 = 6
let b3 = 200
let bChange3 =1
let pauseVal =1
function setup() {
  createCanvas(400, 400);
   ellipseMode(CENTER);
  angleMode(DEGREES);
  background(0);
  noStroke()
}

function draw() {
  spin += spinSpeed;
   bChange1 = random(1,5)
  translate(width / 2, height / 2);
  rotate(spin);
  // first circle
  fill(r1, g1, b1);
  ellipse(x, y, 20);
  ellipse(-x, -y, 20);
  rotate(45);
  ellipse(x, y, 20);
  ellipse(-x, -y, 20);
  rotate(45);
  ellipse(x, y, 20);
  ellipse(-x, -y, 20);
  rotate(45);
  ellipse(x, y, 20);
  ellipse(-x, -y, 20);
  rotate(45);
  ellipse(x, y, 20);
  ellipse(-x, -y, 20);
  rotate(45);
  r1 -= rChange1
  if (r1 <= 0){
    rChange1 *= -1
  }
  if (r1 >= 255){
    rChange1 *= -1
  }

  
  //oritals 1
  fill(r1, 255, 255);
  ellipse(x + width / 8, y, 20);
  ellipse(-x - width / 8, -y, 20);
  rotate(45);
  // orbitals 2
  fill(255, g2, b3);
  b3 -= bChange3
  if (b3 >=200){
    bChange3 *= -1
  }
  if (b3 <= 100){
    bChange3 *= -1
  }
  ellipse(x + width / 4, y, 20);
  ellipse(-x - width / 4, -y, 20);
  rotate(45);
  ellipse(x + width / 4, y, 20);
  ellipse(-x - width / 4, -y, 20);
  rotate(45);
  ellipse(x + width / 4, y, 20);
  ellipse(-x - width / 4, -y, 20);
  rotate(45);
  ellipse(x + width / 4, y, 20);
  ellipse(-x - width / 4, -y, 20);
  rotate(45);
  // orbitals 3
  fill(255, g2, b2);
  b2 -= bChange2
  if (b2 >= 255){
    bChange2 *= -1
  }
  if (b2 <= 50){
    bChange2 *= -1
  }
  g2 += random(rand1,rand2)
  if (g2 >= 255){
    rand1 *= -1
    rand2 *= -1
  }
  if (g2 <= 50){
    rand1 *= -1
    rand2 *= -1
  }
  ellipse(x + width / 3, y + height / 16, 20);
  ellipse(-x - width / 3, -y - height / 16, 20);
  rotate(45);
  ellipse(x + width / 3, y + height / 16, 20);
  ellipse(-x - width / 3, -y - height / 16, 20);
  rotate(45);
  ellipse(x + width / 3, y + height / 16, 20);
  ellipse(-x - width / 3, -y - height / 16, 20);
  rotate(45);
  ellipse(x + width / 3, y + height / 16, 20);
  ellipse(-x - width / 3, -y - height / 16, 20);
  rotate(45);
  x += xSped
  if (x >= 200){
    xSped *= -1
  }
  if (x <= 0){
    xSped *= -1
  }
}


function keyTyped(){
  // pause/snapshot/freeze
if (key === 'p'){
  if (pauseVal === 1){
    noLoop()
    pauseVal *= -1
  } else if (pauseVal === -1){
    loop()
    pauseVal *= -1
  }
  } else if (key === 'b'){ // reset picture
   background(0)
  } else if (key === 'r'){ // reset x & y
  x = 10
    y = 10
  } else if (key === 's'){ // increase speed
 xSped *=2
    
  } else if (key === 'z'){ // reset speed
    xSped = 1
  }
}