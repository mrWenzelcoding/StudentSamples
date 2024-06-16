function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  strokeWeight(splatSize());
  stroke(splatCol());
  point(splatX(), splatY());
}
function splatX() {
  let x;
  let r = random(1);
  if (r <= 0.02) {
    x = random((width * 7) / 8, width);
  } else if (r <= 0.1) {
    x = random((width * 6) / 8, (width * 7) / 8);
  } else if (r <= 0.25) {
    x = random((width * 5) / 8, (width * 6) / 8);
  } else if (r <= 0.5) {
    x = random((width * 4) / 8, (width * 5) / 8);
  } else if (r <= 0.75) {
    x = random((width * 3) / 8, (width * 4) / 8);
  } else if (r <= 0.9) {
    x = random((width * 2) / 8, (width * 3) / 8);
  } else if (r <= 0.98) {
    x = random((width * 1) / 8, (width * 2) / 8);
  } else {
    x = random((width * 0) / 8, (width * 1) / 8);
  }
  return x;
}
function splatY() {
  let y;
  let r = random(1);
  if (r <= 0.02) {
    y = random((height * 7) / 8, height);
  } else if (r <= 0.1) {
    y = random((height * 6) / 8, (height * 7) / 8);
  } else if (r <= 0.25) {
    y = random((height * 5) / 8, (height * 6) / 8);
  } else if (r <= 0.5) {
    y = random((height * 4) / 8, (height * 5) / 8);
  } else if (r <= 0.75) {
    y = random((height * 3) / 8, (height * 4) / 8);
  } else if (r <= 0.9) {
    y = random((height * 2) / 8, (height * 3) / 8);
  } else if (r <= 0.98) {
    y = random((height * 1) / 8, (height * 2) / 8);
  } else {
    y = random((height * 0) / 8, (height * 1) / 8);
  }
  return y;
}
function splatSize() {
  let v;
  let r = random(1);
  if (r <= 0.005) {
    v = random(30, 40);
  } else if (r <= 0.04) {
    v = random(10, 30);
  } else if (r <= 0.2) {
    v = random(5, 10);
  } else if (r <= 0.98) {
    v = random(1, 5);
  } else {
    v = random(1);
  }
  return v;
}
function splatCol() {
  let v;
  let r = random(1);
  if (r <= 0.1) {
    v = [93, 42, 66];
  } else if (r <= 0.3) {
    v = [251, 99, 118];
  } else if (r <= 0.7) {
    v = [252, 177, 166];
  } else {
    v = [255, 220, 204];
  }
  return v;
}
function mousePressed() {
  let FS = fullscreen();
  fullscreen(!FS);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  setup();
}
