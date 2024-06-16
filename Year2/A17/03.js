let gx = [];
let gy = [];
let gs = [];
let cx = [];
let cy = [];
let sx = [];
let sy = [];
let dinospeed;
let dinoy;
let dinoyspeed;
let dinoidleimg;
let dinorunimg;
let dinorunduckimg;
let jumping;
let ducking;
let cactus = [];
let cactus1img;
let cactus2img;
let cactus3img;
let bird = [];
let birdimg;
let score;
let scoredisplay;
let highscore;
let night;
let gameover;
let assteroid;
let explosionimg;
let explosionx;
let explosiony;
let deathtimer;
let rockimg;
let rockx;
let rocky;
let start;
let death;
function preload() {
  explosionimg = loadImage("assets/boom.png");
  rockimg = loadImage("assets/rock.png");
  dinoidleimg = loadImage("assets/Idle.gif");
  dinorunimg = loadImage("assets/Run.gif");
  dinorunduckimg = loadImage("assets/RuningDuck.gif");
  birdimg = loadImage("assets/Bird.gif");
  cactus1img = loadImage("assets/cactus1.png");
  cactus2img = loadImage("assets/cactus2.png");
  cactus3img = loadImage("assets/cactus4.png");
}
function setup() {
  createCanvas(800, 400);
  rectMode(CORNERS);
  imageMode(CORNERS);

  for (let i = 0; i < 30; i++) {
    gx[i] = random(810);
    gy[i] = random(382, 398);
    gs[i] = random(PI, 10);
  }
  for (let i = 0; i < 10; i++) {
    cx[i] = random(width);
    cy[i] = random(170);
  }
  for (let i = 0; i < 140; i++) {
    sx[i] = random(width);
    sy[i] = random(370);
  }
  dinospeed = -5;
  dinoy = 340;
  dinoyspeed = 0;
  jumping = false;
  ducking = false;
  score = 0;
  highscore = score;
  night = 1;
  gameover = false;
  assteroid = 0;
  explosiony = 0;
  explosionx = 0;
  deathtimer = 0;
  rockx = 800;
  rocky = 0;
  start = true;
  death = false;
}
function draw() {
  textSize(30);

  if (start == false) {
    assteroid = random(1000000);
    if (assteroid > 999900) {
      death = true;
    }

    background(220);

    Ground();

    fill(255, 255, 255);

    //clouds and stars
    if (night / 2 == floor(night / 2)) {
      for (let i = 0; i < 140; i++) {
        circle(sx[i], sy[i], 2);
        sx[i] += dinospeed / 5;
        if (sx[i] < -10) {
          sx[i] = random(805, 810);
          sy[i] = random(370);
        }
      }
    } else
      for (let i = 0; i < 10; i++) {
        cloud(cx[i], cy[i]);
        cx[i] += dinospeed / 3;
        if (cx[i] < -20) {
          cx[i] = random(820, 860);
          cy[i] = random(170);
        }
      }
    //dino
    if (ducking == false) {
      image(dinorunimg, 60, dinoy, 80, dinoy + 40);
    } else {
      image(dinorunduckimg, 60, 360, 100, 380);
    }
    //score display
    fill(0);
    text("" + scoredisplay + " score", 20, 30);
    text("" + highscore + " highscore", 20, 60);
    if (highscore < scoredisplay) {
      highscore = scoredisplay;
    }
    //jumping/ducking
    dinoy += dinoyspeed;
    if (keyIsDown(87) == true && jumping == false) {
      dinoyspeed = -7;
      jumping = true;
    }
    if (keyIsDown(83) == true && jumping == true) {
      dinoyspeed = 18;
    }
    if (keyIsDown(83) == true && jumping == false) {
      ducking = true;
    } else {
      ducking = false;
    }
    if (jumping == true) {
      dinoyspeed += 0.3;
    }
    if (dinoy > 340) {
      dinoy = 340;
      jumping = false;
    }
    //colisions

    for (let i = 0; i < cactus.length; i++) {
      if (
        60 <= cactus[i].x &&
        100 >= cactus[i].x - cactus[i].size + 20 &&
        dinoy <= 380 &&
        dinoy + 40 >= 340 &&
        ducking == false
      ) {
        gameover = true;
      } else {
        if (
          60 <= cactus[i].x &&
          100 >= cactus[i].x - cactus[i].size &&
          dinoy <= 380 &&
          dinoy + 40 >= 360 &&
          ducking == true
        ) {
          gameover = true;
        }
      }
    }

    for (let i = 0; i < bird.length; i++) {
      if (
        80 >= bird[i].x &&
        60 <= bird[i].x + 40 &&
        dinoy <= 345 + bird[i].flying &&
        dinoy + 40 >= 320 + bird[i].flying &&
        ducking == false
      ) {
        gameover = true;
      }
      if (
        100 >= bird[i].x &&
        60 <= bird[i].x &&
        360 <= 345 + bird[i].flying &&
        380 >= 320 + bird[i].flying &&
        ducking == true
      ) {
        gameover = true;
      }
    }

    //gameover
    for (let i = 0; i < cactus.length + bird.length; i++) {
      if (gameover == true) {
        dinospeed = -5;
        night = 1;
        dinoyspeed = 0;
        dinoy = 340;
        cactus.splice(i);
        bird.splice(i);
        gameover = false;
        start = true;
        score = 0;
      }
    }
    //cactus and birds
    for (let i = 0; i < cactus.length; i++) {
      cactus[i].show();
      cactus[i].move();
      if (cactus[i].x < -55) {
        cactus.splice(i, 1);
        break;
      }
    }
    for (let i = 0; i < bird.length; i++) {
      bird[i].show();
      bird[i].move();
      if (bird[i].x < -55) {
        bird.splice(i, 1);
        break;
      }
    }
    //spawn cactus
    spawnCactus();

    //score and night cycle
    if (start == false) {
      score += 0.4;
    }
    scoredisplay = round(score);
    if (round(score) == 400 * night) {
      night += 1;
    }
    if (night / 2 == floor(night / 2)) {
      filter(INVERT);
    }
    
    dinospeed = -(score / 500) - 5;
  } else {
    background(225);
    line(0, 380, 800, 380);
    for (let i = 0; i < 30; i++) {
      point(gx[i], gy[i], 2);
    }
    for (let i = 0; i < 10; i++) {
      cloud(cx[i], cy[i]);
      cx[i] += dinospeed / 5;
      if (cx[i] < -20) {
        cx[i] = random(820, 860);
        cy[i] = random(170);
      }
    }
    rect(267, 250, 534, 150);
    rect(267, 250, 534, 150);
    fill("black");
     text("Alpaca Run",320,190)
    text("start game", 330, 230);
    if (
      mouseIsPressed &&
      mouseX > 267 &&
      mouseX < 534 &&
      mouseY > 150 &&
      mouseY < 250
    ) {
      start = false;
    }
    image(dinoidleimg, 60, dinoy, 80, dinoy + 40);
  }
  if (death == true) {
    gameover = true;
    imageMode(CENTER);
    if (deathtimer > 40) {
      explosiony = lerp(explosiony, 800, 0.01);
      explosionx = lerp(explosionx, 800, 0.01);
      image(
        explosionimg,
        400,
        400 - explosiony / 2,
        10 + explosionx,
        10 + explosiony
      );
      if (explosionx > 780) {
        death = false;
        deathtimer = 0;
        explosionx = 0;
        explosiony = 0;
        rockx = 800;
        rocky = 0;
      }
    } else {
      deathtimer += 1;
      image(rockimg, rockx, rocky, 80, 160);
      rockx -= 12;
      rocky += 9;
    }
    imageMode(CORNERS);
  }
}
function spawnCactus() {
  if (cactus.length+bird.length<4 && frameCount>random(40,120)) {
    if ( random(10) < 5 &&score > 600) {
      
      bird[bird.length] = new Bird(820, dinospeed, random(0.6));
    } else {
      cactus[cactus.length] = new Cactus(860, dinospeed, round(random(1, 3)));
    }
    frameCount = 0;
  }
}
function cloud(CX, CY) {
  fill(255);
  strokeWeight(0);
  ellipse(CX, CY - 10, 40, 20);
  ellipse(CX - 10, CY, 40, 20);
  ellipse(CX + 20, CY - 5, 20, 10);
  ellipse(CX + 10, CY, 40, 25);
  strokeWeight(1);
}
//ground
function Ground() {
  line(0, 380, 800, 380);
  for (let i = 0; i < 30; i++) {
    line(gx[i], gy[i], gx[i] + gs[i], gy[i]);
    gx[i] += dinospeed;
    if (gx[i] < -11) {
      gx[i] = 810;
      gy[i] = random(382, 398);
      gs[i] = random(PI, 10);
    }
  }
}
//cactus
class Cactus {
  constructor(_x, _xspeed, _size) {
    this.x = _x;
    this.xspeed = _xspeed;
    this.size = _size * 20;
  }
  show() {
    noFill();
    if (this.size == 20) {
      image(cactus1img, this.x - this.size, 340, this.x + 20, 380);
    }
    if (this.size == 40) {
      image(cactus2img, this.x - this.size, 340, this.x + 20, 380);
    }

    if (this.size == 60) {
      image(cactus3img, this.x - this.size, 340, this.x + 20, 380);
    }
  }
  move() {
    this.x += this.xspeed;
  }
}
class Bird {
  constructor(_x, _xspeed, _flying) {
    this.x = _x;
    this.xspeed = _xspeed;
    this.flying = round(_flying) * 35;
  }
  show() {
    noFill();
    image(birdimg, this.x, 345 + this.flying, this.x + 40, 320 + this.flying);
  }
  move() {
    this.x += this.xspeed;
  }
}
