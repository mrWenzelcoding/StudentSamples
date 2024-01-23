let px = 300,
  py = 300,
  x = 0,
  x2 = 0,
  y = 0,
  jump = true,
  fall = false,
  check,
  check2,
  move = true,
  Speed = 0,
  die = false,
  Pb1 = 0,
  Pb2 = 0,
  Pb3 = 0,
  s1,
  s2,
  score = 0, lol = 100,
  end = false,
  start = false;

let bozo, bozo2;

let spike, belt = [];

function setup() {
  createCanvas(700, 400);
  bozo = new Bozo(int(random(800, 1200)), 325, 50, 0);
  bozo2 = new Bozo(int(random(800, 1200)), 0, int(random(100, 180)), 0);
  
  
  spike = loadImage('assets/Spikes.png');
  belt = loadImage('assets/Belt.gif');
  
}

function draw() {
  background(220);
  //rect(100, 350, 600, 50);
  bozo.show();
  bozo2.show2();

  //Player
  rect(x + px, py, 50, 50);
  
  //Visuals
  image(spike, 0, 350);
  for(let i = 0; i < 5; i++){
  image(belt, 80, 350);
  }
  
  
  
  //Movement
  if (move == true) {
    x = -2 + -Speed;
    x2 = x / 2;
    py += y;
    px += x;
  }

  if (die == false && move == true) {
    if (keyIsDown(RIGHT_ARROW)) {
      px += 5 + Speed;
    }

    if (keyIsDown(LEFT_ARROW)) {
      px -= 5 + Speed;
    }

    if (keyIsDown(UP_ARROW) && jump === true) {
      y -= 1.5;
      fall = true;
    }

    if (keyIsDown(DOWN_ARROW) && fall === true) {
      y += 1;
    }

    if (y < -12) {
      jump = false;
      y += 5;
    }

    if (py < 300) {
      y++;
    } else if (py > 300) {
      y = 0;
      py = 300;
      jump = true;
      fall = false;
    }
  }

  if(px > 650){
    px = 650;
  }
  
  //player hole
  if (px < 50) {
    die = true;
    y++;
  }

  if (px < 0) {
    px = 0;
  }

  if (py > 400) {
    move = false;
    end = true;
    x = 0;
    x2 = 0;
  }
  
  //score
  if(end == false){
  score++;
  }
  textSize(25);
  fill("white");
  text(score, 15, 30);

  //Leaderboard
  if (score > Pb1) {
    Pb1 = score;
  }
  if (score < Pb1 && score > Pb2) {
    Pb2 = score;
  } else if (Pb1 > s1) {
    Pb2 = s1;
  }
  if (score < Pb1 && score < Pb2 && score > Pb3) {
    Pb3 = score;
  } else if (Pb2 > s2) {
    Pb3 = s2;
  }

  //menu
  if(start == false){
    fill('grey');
    rect(0, 0, width, height);
    fill('white');
    textSize(50);
    text('Escape The Factory', 130, 130); 
    fill(lol);
    rect(275, 240, 150, 60);
    fill('white');
    text('start', 300, 285);
    move = false;
    x = 0;
    x2 = 0;
    score = -1;
  }
  
  if(mouseX > 275 && mouseX < 425 && mouseY > 240 && mouseY < 300 && start == false){
    lol = 150;
  } else {
    lol = 100;
  }
  
  
  if (end == true) {
    //Structure
    textSize(50);
    fill("white");
    text("Restart ?", 100, 180);

    fill(150, 150, 150, 250);
    rect(120, 240, 150, 58);
    fill("white");
    text("Yes", 150, 285);

    fill(150, 150, 150, 250);
    rect(380, 150, 200, 150);
    textSize(25);
    fill("white");
    text("HighScore", 425, 190);
    text("- " + Pb1 + " points", 390, 230);
    text("- " + Pb2 + " points", 390, 260);
    text("- " + Pb3 + " points", 390, 290);
  }
}

class Bozo {
  constructor(_ex, _ey, _es, _r) {
    this.ex = _ex;
    this.ey = _ey;
    this.es = _es;
    this.rando = _r;
  }

  show() {
    //Trash
    circle(this.ex, this.ey, this.es);
    this.ex += x + this.rando;

    //Hit
    check = dist(x + px + 25, py + 25, x + this.ex, this.ey);
    if (check < 50) {
      x = 0;
      this.rando = 0
      x2 = 0;
      move = false;
      end = true;
    }

    //bozo hole
    if (this.ex < 80) {
      this.ey += 10;
    }

    if (this.ex < 0) {
      this.ex = 0;
    }

    //Fall
    if (this.ey > 450) {
      this.ex = int(random(800, 1200));
      this.ey = 325;
      this.rando = random(0, x / 2);
      if (Speed < 10) {
        Speed += 0.5;
      }
    }
  }

  show2() {
    //Crane
    rect(this.ex, this.ey, 25, this.es);
    rect(this.ex - 12.5, this.ey + this.es, 50, 50);
    this.ex += x2;

    //Hit
    check2 = dist(
      x + px + 25,
      py + 25,
      x2 + this.ex + 12.5,
      this.ey + this.es + 25
    );
    if (check2 < 50) {
      x2 = 0;
      x = 0;
      bozo.rando = 0;
      move = false;
      end = true;
    }

    if (this.ex < -20) {
      this.ex = int(random(800, 1200));
    }
  }
}

function mousePressed() {
  if (
    mouseX > 120 &&
    mouseX < 270 &&
    mouseY > 240 &&
    mouseY < 298 &&
    end == true || mouseX > 275 && mouseX < 425 && mouseY > 240 && mouseY < 300 && start == false
  ) {
    score = 0;
    s1 = Pb1;
    s2 = Pb2;
    move = true;
    x = 0;
    x2 = 0;
    Speed = 0;
    bozo.ex = int(random(800, 1200));
    bozo2.ex = int(random(800, 1200));
    px = 300;
    py = 300;
    die = false;
    start = true;
    end = false;
  }
}
