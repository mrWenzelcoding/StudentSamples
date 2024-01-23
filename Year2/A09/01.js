let starX = [],
  starY = [],
  starSpeed,
  starDistance = [],
  shipX,
  shipY,
  imgRest,
  img0,
  img1,
  img2,
  img3,
  rest,
  shipSpeed,
  planetType,
  planetDepth,
  planetGo,
  planetX,
  planetY,
  imgP01,
  imgP02,
  imgP11,
  imgP12,
  imgP21,
  imgP22;

//-Started Started :Planets.
//-Done :Pixel art-import to Pixlr E. Export, Import.
//-Done :Star distance-Close(bigger) move faster.

//Setup
function setup() {
  createCanvas(1800, 800);
  background(0);
  for (i = 0; i < 350; i++) {
    starX[i] = random(-100, 1800);
    starY[i] = random(-100, 1800);
    starDistance[i] = random(5, 1);
  }
  frameCount = 1;
  starSpeed = 1;
  shipSpeed = 0.7;
  shipX = 200;
  shipY = 200;
  rectMode(CENTER);
  rest = 0;
  planetX = random(2000, 2500);
  planetY = random(0, 800);
}

function preload() {
  imgRest = loadImage("assets/Spaceship Rest.png");
  img0 = loadImage("assets/pixil-frame-0.png");
  img1 = loadImage("assets/pixil-frame-1.png");
  img2 = loadImage("assets/Spaceship 2.png");
  img3 = loadImage("assets/Spaceship 3.png");
  imgP01 = loadImage("assets/Green Planet close.png");
  imgP02 = loadImage("assets/Green Planet far.png");
}

//Speed
function mouseWheel(event) {
  if (event.deltaY < 1) {
    starSpeed += 2;
    shipSpeed += 0.025;
  } else {
    starSpeed -= 2;
    shipSpeed -= 0.025;
  }
  if (starSpeed >= 70) {
    starSpeed -= 2;
  }
  if (starSpeed <= 0) {
    starSpeed += 2;
  }
  if (shipSpeed >= 1) {
    shipSpeed -= 0.025;
  }
  if (shipSpeed <= 0.5) {
    shipSpeed += 0.025;
  }
}

function planet() {
  if (frameCount > 150) {
    image(imgP01, planetX, planetY);
    planetX -= 5;
    if (planetX < -500) {
      planetX = random(2000, 2500);
      planetY = random(0, 800);
    }
  }
}

//Stars
function Stars() {
  fill("rgb(246,244,244)");
  for (i = 0; i < 350; i++) {
    circle(starX[i], starY[i], starDistance[i]);
    if (frameCount < 150) {
      starX[i] += starSpeed;
      mouseWheel(false);
    } else {
      if (starDistance[i] > 4) {
        starX[i] -= starSpeed + 5;
      }
      if ((starDistance[i] > 2) & (starDistance[i] < 4)) {
        starX[i] -= starSpeed + 3;
      }
      if ((starDistance[i] > 0) & (starDistance[i] < 2)) {
        starX[i] -= starSpeed + 1;
      }
      if (starX[i] < -10) {
        starX[i] = random(1800, 2000);
        starY[i] = random(0, 800);
      }
    }
  }
}

function ship(shipX, shipY) {
  if (frameCount < 152) {
    image(imgRest, shipX, shipY);
  } else {
    if ((rest >= 0) & (rest < 4)) {
      image(img0, shipX, shipY);
    }
    if ((rest >= 4) & (rest < 8)) {
      image(img1, shipX, shipY);
    }
    if ((rest >= 8) & (rest < 12)) {
      image(img2, shipX, shipY);
    }
    if ((rest >= 12) & (rest < 16)) {
      image(img3, shipX, shipY);
    }
    if (rest >= 16) {
      rest = 0;
      image(img0, shipX, shipY);
    }
  }
}

//Draw
function draw() {
  if (frameCount > 152) {
    background(0);
  } else {
  }
  if ((frameCount > 150) & (frameCount < 152)) {
    starSpeed = 30;
  }
  Stars();
  planet();
  if (frameCount < 152) {
    ship(200, 200);
  } else {
    ship(
      (shipX = lerp(shipX, mouseX - 200, 0.015)),
      (shipY = lerp(shipY, mouseY - 180, 0.015))
    );
    rest += shipSpeed;
  }
  //console.log(planetX);
  //console.log(starSpeed);
}
