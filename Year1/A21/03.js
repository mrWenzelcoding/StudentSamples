let x;
let y;
let x2;
let y2;
let xs;
let ys;
let x2s;
let y2s;
let c;
let c1;
let scorep1 = 0;
let scorep2 = 0;
let p;
let ox = [];
let oy = [];
let bx;
let by;
let bxs;
let bys;
let p2speed;
let p1speed;
let hitx1;
let hity1;
let hitx2;
let hity2;
let credit
function setup() {
  noStroke();
credit = 0
  rectMode(CENTER);
  createCanvas(windowWidth, windowHeight);
  background("black");
  x = random(width);
  y = random(height);
  xs = 0;
  ys = 0;
  x2s = 0;
  y2s = 0;
  x2 = random(width);
  p = 0;
  y2 = random(height);
  bx = random(width);
  by = random(height);
  bys = 1;
  bxs = 1;
  p2speed = 1;
  p1speed = 1;
  hitx2 = 0;
  hity2 = 0;
  hitx1 = 0;
  hity1 = 0;
  for (i = 0; i < 15; i++) {
    ox[i] = random(width);
    oy[i] = random(height);
  }
  loop();
}

function draw() {
  //kill code
  c = get(x + 11 * hitx1, y + 11 * hity1);
  c1 = get(x2 + 11 * hitx2, y2 + 11 * hity2);
  //players
  fill("blue");
  square(x, y, 20);
  fill("green");
  square(x2, y2, 20);

  for (let i = 0; i < 15; i++) {
    fill("purple");
    square(ox[i], oy[i], 20);
  }
console.log(credit)
  //player movment
  x += xs;
  y += ys;
  x2 += x2s;
  y2 += y2s;

  //score display
  textSize(12);
  fill("red");
  text(scorep2, width - 15, 15);
  text(scorep1, 10, 15);
  fill("green");
  textSize(18);

  //score adding
  if ((c[2] >= 100 || c[1] >= 120) && xs != 0 && ys != 0) {
    scorep2 += 1;
    p = 1;
    if (scorep2 != 5) {
      text("Press SPACE to continue.", width / 2 - 115, height / 2);
      noLoop();
      //   setup();
    }
  }
  if ((c1[2] >= 100 || c1[1] >= 120) && x2s != 0 && y2s != 0) {
    noLoop();
    scorep1 += 1;
    if (scorep1 != 5) {
      text("Press SPACE to continue.", width / 2 - 115, height / 2);
      p = 1;
      //    setup();
    }
  }
//win code
  if (scorep1 == 5) {
    text("PLAYER ONE WINS!", width / 2 - 75, height / 2);
//     text("Insert 25¢.   (press 7)", width / 2  - 75, height / 2+15)

  // if(credit === 1){
//     setup()
// scorep1 = 0
// scorep2 = 0
//   }
// noLoop()
 }
  if (scorep2 == 5) {
    text("PLAYER TWO WINS!", width / 2 - 75, height / 2);
    noLoop();
  }

  //this is making them telliport to the other side
  //player 1
  if (x > width) {
    x = -20;
  }
  if (x < -20) {
    x = width;
  }
  if (y > height) {
    y = -20;
  }
  if (y < -20) {
    y = height;
  }
  //player 2
  if (x2 > width) {
    x2 = -20;
  }
  if (x2 < -20) {
    x2 = width;
  }
  if (y2 > height) {
    y2 = -20;
  }
  if (y2 < -20) {
    y2 = height;
  }
}

//controls
function keyPressed() {
  if (keyCode === 32 && p == 1) {
    setup();
  }
  //player 1
  if (keyCode === RIGHT_ARROW) {
    xs = p1speed;
    hitx1 = 1;
  }
  if (keyCode === LEFT_ARROW) {
    xs = p1speed * -1;
    hitx1 = -1;
  }
  if (keyCode === UP_ARROW) {
    ys = p1speed * -1;
    hity1 = -1;
  }
  if (keyCode === DOWN_ARROW) {
    ys = p1speed;
    hity1 = 1;
  }

  //player 2
  if (keyCode === 68) {
    x2s = p2speed;
    hitx2 = 1;
  }
  if (keyCode === 65) {
    x2s = p2speed * -1;
    hitx2 = -1;
  }
  if (keyCode === 87) {
    y2s = p2speed * -1;
    hity2 = -1;
  }
  if (keyCode === 83) {
    y2s = p2speed;
    hity2 = 1;
  }
  // speed controls
  //player 2 wasd
  //to speed up press q to slow down press e
  if (keyCode === 81 && p2speed < 3) {
    p2speed += 1;
  }
  if (keyCode === 69 && p2speed > 1) {
    p2speed -= 1;
  }
  //player 1 arrows
  //to speed up press / to slow down shift
  if (keyCode === 191 && p1speed < 3) {
    p1speed += 1;
  }
  if (keyCode === 16 && p1speed > 1) {
    p1speed -= 1;
  }
// 25¢
if(keyCode === 55 && credit != 1){
  credit = 1 
}
}
//Resizing Window Code

function mousePressed() {
  if (
    mouseX > 0 &&
    mouseX < windowWidth &&
    mouseY > 0 &&
    mouseY < windowHeight
  ) {
    let fs = fullscreen();

    fullscreen(!fs);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  setup();
}
