let x;
let y;
let x1;
let y1;
let xSpeed;
let ySpeed;
let xSpeed1;
let ySpeed1;
let xd;
let yd;
let xd1;
let yd1;
let drawer;
let drawertitle;
let c;
let title;
let gameIsRunning = false;
let p1;
let p2;
let gscore = 0;
let mscore = 0;

function setup() {
  frameRate(10)
  createCanvas(480, 480);
  background(0);
  rectMode(CENTER)
  textAlign(CENTER, CENTER)
  noStroke()
  drawer = 4
  drawertitle = 4
  c = 160

  x = width / 2 - 44
  y = height / 2 - 44
  x1 = width / 2 + 44
  y1 = height / 2 - 44

  xSpeed = 0
  ySpeed = 8
  xSpeed1 = 0
  ySpeed1 = 8

  while (drawertitle < width) {
    c += random(8, -8)
    fill(255, c, c)
    stroke(120, 0, 0)
    rect(drawertitle, 68, 8)
    rect(drawertitle, height - 4, 8)
    rect(4, drawertitle, 8)
    rect(width - 4, drawertitle, 8)
    drawertitle += 8
  }
  textSize(24)
  text("TRON-ADJACENT GAME", width / 2, 40)
  textSize(20)
  text("GREEN - WASD\nMAGENTA - ARROWS\nCLICK TO PLAY", width / 2, height / 2)
}

function mouseClicked() {
  if (!gameIsRunning) {
    resetGame()
  }
}

function resetGame() {
  x = width / 2 - 44
  y = height / 2 - 44
  x1 = width / 2 + 44
  y1 = height / 2 - 44

  xSpeed = 0
  ySpeed = 8
  xSpeed1 = 0
  ySpeed1 = 8
  xd = 0
  yd = 8
  xd1 = 0
  yd1 = 8
  drawer = 4

  noStroke()
  background(0)
  fill(0, 0, 0)
  rect(width / 2, 24, 440, 64)
  stroke(0, 80, 0)
  fill(0, 255, 0)
  rect(x, y, 8)
  circle(x + xd, y + yd, 4)
  stroke(80, 0, 80)
  fill(255, 0, 255)
  rect(x1, y1, 8)
  circle(x1 + xd1, y1 + yd1, 4)
  c = 160
  while (drawer < 480) {
    c += random(32, -32)
    fill(c, 255, 255)
    stroke(0, 120, 120)
    rect(drawer, 68, 8)
    rect(drawer, height - 4, 8)
    rect(4, drawer, 8)
    rect(width - 4, drawer, 8)
    drawer += 8

    gameIsRunning = true;
  }
}

function stopGame(incrementMagentaScore) {
  xSpeed = 0
  ySpeed = 0
  xSpeed1 = 0
  ySpeed1 = 0
  if (incrementMagentaScore) {
    mscore += 1
  } else {
    gscore += 1
  }
  drawer = 4
  noStroke()
  textSize(20)
  fill(255)
  text("GAME OVER\nPRESS R OR CLICK TO RESET", 240, 240)
  gameIsRunning = false
}

function draw() {
  loadPixels()
  strokeWeight(1)

  if (!gameIsRunning) {
    if (keyIsDown(82)) {
      resetGame();
    }
    return;
  }

  stroke(0, 80, 0)
  fill(0, 255, 0)
  rect(x, y, 8)
  circle(x + xd, y + yd, 4)
  stroke(80, 0, 80)
  fill(255, 0, 255)
  rect(x1, y1, 8)
  circle(x1 + xd1, y1 + yd1, 4)

  x += xSpeed
  y += ySpeed
  x1 += xSpeed1
  y1 += ySpeed1

  xd = x + 0
  yd = y + 8
  xd1 = x + 0
  yd1 = y + 8

  if (keyCode == RIGHT_ARROW && xSpeed1 != -8) {
    xSpeed1 = 8
    ySpeed1 = 0
  }
  if (keyCode == LEFT_ARROW && xSpeed1 != 8) {
    xSpeed1 = -8
    ySpeed1 = 0
  }
  if (keyCode == UP_ARROW && ySpeed1 != 8) {
    xSpeed1 = 0
    ySpeed1 = -8
  }
  if (keyCode == DOWN_ARROW && ySpeed1 != -8) {
    xSpeed1 = 0
    ySpeed1 = 8
  }
  if (key == 'd' && xSpeed != -8) {
    xSpeed = 8
    ySpeed = 0
  }
  if (key == 'a' && xSpeed != 8) {
    xSpeed = -8
    ySpeed = 0
  }
  if (key == 'w' && ySpeed != 8) {
    xSpeed = 0
    ySpeed = -8
  }
  if (key == 's' && ySpeed != -8) {
    xSpeed = 0
    ySpeed = 8
  }

  if (xSpeed == 8) {
    xd = 8
  }
  if (xSpeed == -8) {
    xd = -8
  }
  if (xSpeed == 0) {
    xd = 0
  }
  if (ySpeed == 8) {
    yd = 8
  }
  if (ySpeed == -8) {
    yd = -8
  }
  if (ySpeed == 0) {
    yd = 0
  }
  if (xSpeed1 == 8) {
    xd1 = 8
  }
  if (xSpeed1 == -8) {
    xd1 = -8
  }
  if (xSpeed1 == 0) {
    xd1 = 0
  }
  if (ySpeed1 == 8) {
    yd1 = 8
  }
  if (ySpeed1 == -8) {
    yd1 = -8
  }
  if (ySpeed1 == 0) {
    yd1 = 0
  }
  p1 = get(x + xd, y + yd)
  p2 = get(x1 + xd1, y1 + yd1)

  if (p1[1] > 4 || p1[2] > 4 || p1[0] > 4) {
    stopGame(true);
    return;
  }
  if (p2[1] > 4 || p2[2] > 4 || p2[0] > 4) {
    stopGame(false);
    return;
  }

  fill(255)
  text("G " + gscore, 80, 20)
  text("M " + mscore, 400, 20)
}