function setup() {
  createCanvas(500, 500);
  noStroke();
  background(0, 0, 0);
}
let radius = 0;
let radius1 = 0;
let r = 0,
  g = 0,
  b = 0;
let r1 = 4,
  g1 = 4,
  b1 = 4;

function draw() {
  fill(r, g, b);
  circle(width / 2, height / 2, radius);
  radius += 3;
  if (radius >= 750) {
    radius = 0;
    r = random(0, 255);
    g = random(0, 255);
    b = random(0, 255);
  }
  if (radius1 >= 350) {
    radius = 350;
    r = r1;
    b = b1;
    g = g1;
  }
  fill(r1, g1, b1);
  circle(width / 2, height / 2, radius1);
  radius1 += 3;
  if (radius1 >= 360) {
    radius1 = 0;
    r1 = random(0, 255);
    g1 = random(0, 255);
    b1 = random(0, 255);
  }
  if (r == 0) {
    if (g == 0) {
      if (b == 0) {
        if (radius <= 350) {
          radius1 = 0;
        }
      }
    }
  }
}
