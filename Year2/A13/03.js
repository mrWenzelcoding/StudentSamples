let ball = [];
let j;
function setup() {
  createCanvas(1000, 1000);
  j = 1;
  for (let i = 0; i < j; i++) {
    ball[i] = new Ball(
      500,
      1,
      10,
      random(2, 5),
      random(2, 5),
      255,
      240,
      255,
      -1,
      0.25
    );
  }
}

function draw() {
  background(0, 0, 0, 10);

  for (let i = 0; i < j; i++) {
    ball[i].show();
    ball[i].move();
    ball[i].bounce();
    ball[i].pulse();
  }
}
class Ball {
  constructor(_x, _y, _s, _xs, _ys, _r, _g, _b, _gs, _ss) {
    this.x = _x;
    this.y = _y;
    this.s = _s;
    this.xs = _xs;
    this.ys = _ys;
    this.r = _r;
    this.g = _g;
    this.b = _b;
    this.gs = _gs;
    this.ss = _ss;
  }
  move() {
    this.y += this.ys;
    this.x += this.xs;
  }
  show() {
    circle(this.x, this.y, this.s);
    noStroke();
    fill(this.r, this.g, this.b);
  }
  bounce() {
    if (this.x > width) {
      this.xs = this.xs * -1;
      this.x = width - 1;
    }
    if (this.y > height) {
      this.ys = this.ys * -1;
      this.y = height - 1;
    }
    if (this.x < 0) {
      this.xs = this.xs * -1;
      this.x = 1;
    }
    if (this.y < 0) {
      this.ys = this.ys * -1;
      this.y = 1;
    }
  }
  pulse() {
    this.g += this.gs;
    this.s += this.ss;
    if (this.g < 50) {
      this.gs *= -1;
      this.ss *= -1;
    }
    if (this.g > 250) {
      this.gs *= -1;
      this.ss *= -1;
    }
  }
}
function mousePressed() {
  ball[j] = new Ball(
    500,
    1,
    10,
    random(2, 5),
    random(2, 5),
    255,
    240,
    255,
    -1,
    0.25
  );
  j++;
}
