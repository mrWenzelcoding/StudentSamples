let balls = [];
let en = [];
let towerhp;
let towerx;
let towery;
let game;
let damagetimer;
let damage;
let xs;
let highscore;
let score;
let SpawnChance;
let d;

function setup() {
  createCanvas(800, 600);
  noStroke();
  colorMode(HSB);
  towerhp = 0;
  towerx = 40;
  towery = 220;
  game = 1;
  damagetimer = 0;
  damage = 1;
  xs = 0;
  score = 0;
  highscore = 0;
  SpawnChance = 0;
  d = 0;

  textAlign(CENTER);
  textSize(60);
}
function draw() {
  //background
  
  background("skyblue");
  fill(towerhp, 100, 100);
  rect(towerx, towery, 80, 230);
  fill("black");
  arc(towerx + 60, towery + 40, 20, 60, PI, PI + PI);
  if (game == 0 && towery < 450) {
    towerx = random(38, 41);
    towery += 0.5;
    for (let i = 0; i < 20; i++) {
      fill(39, 16, 85);
      circle(random(37, 122), random(429, 460), 20);
      frameCount = 0;
    }
  } else {
    if (game == 0 && towery > 449) {
      if (frameCount > 50) {
        towerx = 40;
        towery = 220;

        score = 0;
        en.length = 0;
        towerhp = 0;
        game = 1;
      }
    }
  }
  if (score > highscore) {
    highscore = score;
  }
  fill("lightgreen");
  rect(0, 450, 800, 200);
  fill("black");
  text("score ", 120, 100);
  text("" + score, 120, 160);

  text("highscore ", 420, 100);
  text("" + highscore, 420, 160);

  //timer
  if (damagetimer == 1) {
    damage += 0.1 * 10;
  }
  //bullets
  for (let i = 0; i < balls.length; i++) {
    balls[i].show();
    balls[i].move();
    if (balls[i].y > 620) {
      balls.splice(i, 1);
      break;
    }
  }
  //enemy
  enSpawn();

  for (let i = 0; i < en.length; i++) {
    en[i].show();
    en[i].move();
  }
  for (let i = 0; i < balls.length; i++) {
    for (let j = 0; j < en.length; j++) {
      let d = dist(balls[i].x, balls[i].y, en[j].x, 450);
      if (d < en[j].s / 2 / en[j].type) {
        en[j].health -= balls[i].damage * en[j].type * 2;
        balls.splice(i, 1);
        if (en[j].health <= 10) {
          en.splice(j, 1);
          score += 1;
        }
        break;
      }
    }
  }
  //gameover

  if (towerhp > 360) {
    game = 0;
  }
}
function enSpawn() {
  SpawnChance += 100;
  if (SpawnChance > 300 - score && en.length < score / 2 + 1) {
    en[en.length] = new Enemy(800, 50, -3, 100, random(1, 3));
    SpawnChance = 0;
  }
}
function mousePressed() {
  damagetimer += 1;
}
function mouseReleased() {
  xs = map(mouseX, 100, width, 0, 18.5);
  if (game == 1) {
    balls[balls.length] = new Ball(100, 250, 10, xs, random(-3, -5), damage, 0);
    damage = 1;
    damagetimer = 0;
  } else {
    balls.length = 0;
  }
}
class Ball {
  constructor(_x, _y, _s, _xspeed, _yspeed, _damage, gameover) {
    this.x = _x;
    this.y = _y;
    this.s = _s;
    this.xspeed = _xspeed;
    this.yspeed = _yspeed;
    this.damage = _damage;
    this.game = gameover;
  }
  show() {
    if (this.game == 0) {
      fill(0, 100, this.damage);
      circle(this.x, this.y, this.s);
    } else {
      fill(0, 100, 100);
      circle(this.x, this.y, this.s);
    }
  }
  move() {
    this.x += this.xspeed;
    this.yspeed += 0.5;
    this.y += this.yspeed;
  }
}
class Enemy {
  constructor(_x, _s, _xspeed, _health, _type) {
    this.x = _x;
    this.s = _s;
    this.xspeed = _xspeed;
    this.health = _health;
    this.type = _type;
  }
  show() {
    fill(this.type, 100, this.health);
    circle(this.x, 450, this.s / this.type);
  }
  move() {
    this.x += this.xspeed / this.type;
    if (this.x < 122 + this.s / this.type / 2 && towery < 445) {
      this.xspeed = 0;
      towerhp += 0.2;
    } else {
      this.xspeed = -3 / this.type;
    }
  }
}
