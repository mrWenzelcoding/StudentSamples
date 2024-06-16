//welcome! Thank you for looking at my Game, I have Apparently reached the limits of how well the p5.js browser will allow me to do (repeated crash problem when I implemented the final boss and fullscreen) but I hope you enjoy the game as it is! the controls are W to move up and S to move down, if you want to see what the 3rd boss would've been feel free to look at my project named boss3 (under the user jen311)

//final boss is here: https://editor.p5js.org/jen311/sketches/wQkFz9ulv

let px, py;
let pySped;
let sx = [];
let sy = [];
let starCount = 200;
let playerAlive;
let lives;
let mx = [];
let my = [];
let ms = [];
let meteorCount = 10;
let hit = [];
let score = 0;
let highScore;
let scoreLock;
let startScreen = true;
let meteorSpeed;
let bX; //boss x
let lY; //lazer pos
let lazerDelay;
let l; //lazer time var -deathray
let lF; //lazer freqency -deathray
let oL; // small lazer time var
let oLX;
let oLY;
let oLHit;
let attackX;
let attackY;
let aD;
let aSped;
let aS;
let bossHealth;
let fight;
let de;
let wiggle;
let wigD;
let elY;
let elD;
let fight2;
let x1;
let y1;
let x2;
let y2;
let boss2X;
let elSped;
let elHit;
let exLD;
let fuzz = [];
let fuzzOff = [];
let sLX = [];
let sLY = [];
let aY = [];
let aX;
let aHit = [];
let aDelay;
let modeEasy;

let canvasX, canvasY;
let pr 
let rSped
let sX =[]
let sR =[]
let sHit =[]
let sSped =[]
let rD
let aD3
let rR
let rHit =[]
let attackSequence
let attackTracker
let attackTracker2
let r3
let iPos
let iD
let iHit
let iPosS1=[2,3]
let iPosS2=[1,3]
let iPosS3=[1,2]
let fight3

let musicStart;
let musicBase;
let musicGameOver;
let musicBoss1;
let musicBoss2;
function preload() {
  // musicBoss2 = loadSound()
  //  musicGameOver = loadSound('GameOver.mp3')
}
function setup() {
  // musicGameOver.stop()
   canvasX = windowWidth;
  canvasY = 500;
  createCanvas(canvasX, canvasY);
  rectMode(CENTER);
  angleMode(DEGREES);
  px = 200;
  py = 200;
  fight3=false
  pySped = 1;
  attackSequence =0
  attackTracker =0
  pr=180
  rSped =0.5
  rD =0
  rR=random(360)
  aD=0
  r3=0
  iPos =int(random(1,4))
  iD=0
  iHit=false
  attackTracker2 =0
  for(let i =0;i<100;i++){
    sX[i] =0
      sR[i]=0
    sHit[i] =false
    sSped[i] =random(2,5)
    rHit[i]=false
  }
  modeEasy = false;
  scoreLock = false;
  score = 0;
  de = false;
  lF = 60;
  px = 200;
  py = 200;
  oLX = width * 0.9;
  aX = width + 20;
  for (let i = 0; i < 10; i++) {
    aY[i] = random(20) + i * 140;
    aHit[i] = false;
  }
  aDelay = 0;
  oLY = random(height * 0.8);
  playerAlive = true;
  lives = 5;
  pySped = 1;
  bX = width + 100;
  lY = random(height);
  lazerDelay = 0;
  l = 0;
  oL = 0;
  aSped = 4;
  aS = 0;
  aD = 0;
  fight = false;
  fight2 = false;
  oLHit = false;
  attackX = width * 0.9;
  attackY = random(height * 0.8);
  bossHealth = 100;
  wiggle = 20;
  wigD = 0;
  elY = random(height);
  elD = 0;
  px = 200;
  py = 250;
  x1 = 0;
  y1 = random(height);
  x2 = width * 0.6;
  y2 = height * 0.5;
  elSped = 1;
  exLD = 0;
  boss2X = width + 500;
  for (let i = 0; i < 10; i++) {
    sLX[i] = 20 + i * 70;
    sLY[i] = -20;
  }

  for (let i = 0; i < starCount; i++) {
    sx[i] = random(width);
    sy[i] = random(height);
  }
  for (let i = 0; i < meteorCount; i++) {
    mx[i] = width;
    my[i] = random(height);
    ms[i] = random(2, 5);
    hit[i] = false;
  }
  highScore = getItem("highScore");
  if (highScore === null) {
    highScore = 0;
  }
  for (let i = 0; i < 25; i++) {
    fuzz[i] = random(1, 120);
    fuzzOff[i] = random(1000);
  }
  
}
function draw() {
  if (modeEasy == true) {
    easyMode();
  }
  if (lives > 0) {
    if (startScreen == true) {
      start();
    }
    if (startScreen == false) {
      background(0, 0, 0, 200);
      stars();
      if(score<=610){
        playing();
      }
   if(score>610&&score<=620){
     //fight3=true
     gameOver()
     lives =0
   }
      if(fight3==true){
        bossFight3()
      }
      if (fight == false && fight2 == false&&fight3==false) {
        obstacleMeteors();
      }
      ground(height * 0.95);
      scoreDisplay();
      if (fight == true) {
        bossFight();
      }
      if (score >= 199 && score <= 210) {
        fight = true;
      }
      if(fight==true&&score>490){
        score=490
      }
      if (score >= 500 && score <= 510) {
        fight2 = true;
      }
      if (fight2 == true) {
        bossFight2();
      }
    }
  }
  setHighscore();
  deathCheck();
  
}
//end of draw
function player(x, y, s) {
  fill(255);
  stroke(0);
  rect(x, y, s * 2, s);
  fill(255, 0, 100);
  triangle(x, y, x - s - 5, y - s, x - s - 5, y + s);
  fill(255);
  ellipse(x - s, y, s);
  push();
  noFill();
  stroke(0, 255, 255);
  ellipse(x, y, s * 3);
  pop();
}
function playing() {
  if (playerAlive == true) {
    player(px, py, 15);
    py += pySped;
    if (py < 0) {
      pySped = 1;
    }
    if (py > height * 0.86) {
      pySped = -1;
    }
  }
}
function deathCheck() {
  if (lives <= 0) {
    playerAlive = false;
    gameOver();
  }
}
function scoreDisplay() {
  text(lives, width * 0.1, height * 0.95);
  text("lives", width * 0.08, height * 0.9);
  text(round(score, 0), width * 0.3, height * 0.95);
  text("score", width * 0.28, height * 0.9);
  text("highscore", width * 0.48, height * 0.9);
  text(highScore, width / 2, height * 0.95);
}
function setHighscore() {
  if (playerAlive == false) {
    scoreLock = true;
    if (highScore < score) {
      highScore = storeItem("highScore", round(score, 0));
    }
    highScore = getItem("highScore");
    if (playerAlive == true) {
      text(highScore, width / 2, height * 0.95);
    }
  }
}
function gameOver() {
  background(0, 20);
  stars();
  if(score<610){
  textFont("Courier New", 50);
  fill("lightgreen");
  text(round(score, 0), width * 0.7, height * 0.2);
  text(" Final Score:", width * 0.1, height * 0.2);
  text(" Highscore:", width * 0.1, height * 0.4);
  text(highScore, width * 0.7, height * 0.4);
  text(" Press R to restart", width * 0.1, height * 0.7);
  }else{
    textFont("Courier New", 60);
  fill("lightgreen");
   text(" You Win!", width * 0.28, height * 0.4);
        textFont("Courier New", 50);
     text(" Press R to restart", width * 0.1, height * 0.7);
    textFont("courier new",30)
    text(" Final boss linked in the sketch!",width*0.1,height*0.6)
  }
  //  musicGameOver.play()
}
function ground(y) {
  push();
  noStroke();
  fill(100, 100, 100);
  rect(width / 2, y, width, height / 8);
  for (let i = 0; i < 20; i++) {
    push();
    translate(i * 40, y - height * 0.05);
    rotate(i * i + 10);
    rect(0, 0, 50);
    pop();
  }
  pop();
}
function stars() {
  for (let i = 0; i < starCount; i++) {
    push();
    fill(255);
    noStroke();
    ellipse(sx[i], sy[i], 5);
    pop();
    sx[i] -= 3;
    if (score > 340) {
      sx[i] -= 1;
    }
    if (sx[i] < 0) {
      sx[i] = width;
      sy[i] = random(height * 0.9);
    }
  }
}
function keyPressed() {
  if (key === " ") {
    //pySped = -3;
  }
  if (key === "w") {
    pySped = -2;
  }
  if (key === "s") {
    pySped = 2;
  }
  if (key == "r") {
    if (playerAlive == false) {
      setup();
    }
  }
  if (key == "e") {
    if (startScreen == true) {
      if (modeEasy == false) {
        modeEasy = true;
      } else if (modeEasy == true) {
        modeEasy = false;
      }
      console.log(modeEasy);
    }
  }
}
function meteor(x, y) {
  push();
  fill(50);
  translate(x, y);
  for (let i = 0; i < 360; i += 45) {
    rotate(i);
    rect(0, 0, 25);
  }
  ellipse(0, 0, 30);
  pop();
}
function obstacleMeteors() {
  for (let i = 0; i < meteorCount; i++) {
    meteor(mx[i], my[i]);
    mx[i] -= ms[i];
    if (mx[i] < 0) {
      mx[i] = width;
      my[i] = random(height);
      if (score < 100) {
        ms[i] = random(2, 5);
      }
      if (score < 200 && score > 99) {
        ms[i] = random(4, 7);
      }
      if (score > 350) {
        ms[i] = random(6, 9);
      }
      if (hit[i] == false) {
        if (scoreLock == false) {
          score += 1;
        }
      }
      hit[i] = false;
    }
    let d = dist(px, py, mx[i], my[i]);
    if (d < 35) {
      if (hit[i] == false) {
        lives -= 1;
        hit[i] = true;
      }
    }
  }
}
function mousePressed() {
  if (
    mouseX > width * 0.25 &&
    mouseX < width * 0.43 &&
    mouseY < height * 0.75 &&
    mouseY > height * 0.65
  ) {
    startScreen = false;
  }
}
function start() {
  background(0);
  push();
  textFont("Courier New");
  textSize(50);
  stroke("lightgreen");
  fill("lightgreen");
  text("Meteor Dash", width * 0.25, height * 0.25);
  text("play", width * 0.25, height * 0.75);
  pop();
}
function boss(x, y) {
  push();
  fill(150);
  translate(x, y);
  rect(0, 0, 40, 200);
  push();
  translate(-20, -100);
  rotate(-45);
  rect(0, 0, 40, 100);
  pop();
  push();
  translate(-20, 100);
  rotate(45);
  rect(0, 0, 40, 100);
  pop();
  push();
  translate(-20, 200);
  rotate(-45);
  rect(0, 0, 40, 100);
  pop();
  push();
  translate(-20, -200);
  rotate(45);
  rect(0, 0, 40, 100);
  pop();
  rect(-50, 150, 40, 70);
  rect(-50, -150, 40, 70);
  //ellipse
  fill(150);
  ellipse(0, 80, 60);
  ellipse(0, -80, 60);
  ellipse(0, 0, 50, 70);
  fill(255, 0, 100);
  ellipse(0, 0, 30, 50);
  pop();
}
function bossEntry() {
  if (bX > width * 0.9) {
    bX--;
  }
}
function lazer(y) {
  push();
  fill(255, 0, 100);
  noStroke();
  lazerDelay++;
  if (lazerDelay < 60) {
    for (let i = 0; i < 35; i++) {
      rect(i * 30, y, 20, 10);
    }
  }
  if (lazerDelay > 60) {
    for (let i = 0; i < 35; i++) {
      ellipse(i * 30, y, 50);
      let d = dist(px, py, i * 30, y);
      if (d < 47.5) {
        lives--;
      }
    }
  }
  if (lazerDelay == 70) {
    lazerDelay = 0;
  }
  pop();
}
function bossFight() {
  boss(bX, height * 0.5);
  bossEntry();
  if (bX <= width * 0.9) {
    l++;
    //deathray
    if (l > lF) {
      lazer(lY);
    }
    if (l > lF + 70) {
      l = 0;
      lY = py;
      score += 5;
    }
    //lazer
    oLazer(oLX, oLY);
    //attacks
    fightBack(attackX, attackY);
  }
  push();
  noStroke();
  fill(255, 0, 0);
  rectMode(CORNER);
  text("Ze Destroyer", width * 0.7, height * 0.93);
  rect(width * 0.7, height * 0.95, bossHealth, 10);
  pop();
  if (bossHealth < 0) {
    bossHealth = 0;
    fight = false;
    if (de == false) {
      for (let i = 0; i < meteorCount; i++) {
        mx[i] = width;
        my[i] = random(height);
        ms[i] = random(2, 5);
        hit[i] = false;
      }
      de = true;
    }
  }
}
function oLazer(x, y) {
  oLX -= 6;
  if (oLX < 30) {
    oLX = width * 0.9;
    oLY = random(height * 0.8);
    oLHit = false;
  }
  push();
  noFill();
  stroke(255, 0, 100);
  strokeWeight(5);
  ellipse(x, y, 20);
  pop();
  let d = dist(px, py, oLX, oLY);
  if (d < 32.5) {
    if (oLHit == false) {
      lives--;
      oLHit = true;
    }
  }
}
function fightBack(x, y) {
  attackX -= aSped + aS;
  push();
  noFill();
  stroke(0, 255, 255);
  strokeWeight(5);
  ellipse(x, y, 20);
  pop();
  if (attackX < 20) {
    attackX = width * 0.9;
    attackY = random(height * 0.8);
    aS = 0;
  }
  let d = dist(px, py, attackX, attackY);
  if (d < 32.5) {
    aSped *= -1;
    aS--;
    aD++;
  }
  if (attackX > width * 0.95) {
    bossHealth -= aD;
    attackX = width * 0.9;
    attackY = random(height * 0.8);
    aSped = 4;
    aS = 0;
    score += 10;
    if (lives < 2) {
      lives += 0.5;
    }
  }
}
function bossFight2() {
  if (boss2X > width * 0.8) {
    boss2X--;
    boss2(boss2X, height * 0.5);
  }
  if (boss2X < width * 0.8 && score < 600) {
    exploitLazer();
    boss2(boss2X, height * 0.5);
    if (score < 569) {
      if (score < 549 || score > 565) {
        elazer();
      }
      score += 0.01;
      if (score > 520) {
        spectacleLazers();
      }
      if (score > 550) {
        arrows();
      }
    }
  }
  if (score > 570) {
    boss2(boss2X, height * 0.5);
    boss2X -= 3;
    if (boss2X == -width) {
      bossfight2 = false;
    }
  }
  noStroke();
  let hit = linePoint(x1, y1, x2, y2, px, py);
  if (hit && elD > 60) {
    if (elHit == false) {
      elHit = true;
      lives--;
    }
  }
}
function spectacleLazers() {
  for (let i = 0; i < 10; i++) {
    push();
    noStroke();
    push();
    fill(255, 0, 0);
    translate(sLX[i], sLY[i]);
    rect(0, 0, 5, 50);
    ellipse(0, -20, 15, 5);
    push();
    translate(0, 25);
    rotate(45);
    rect(0, 0, 10);
    pop();
    pop();
    push();
    translate(sLX[i], height - sLY[i]);
    fill(255, 0, 0);
    rect(0, 0, 5, 50);
    ellipse(0, 20, 15, 5);
    push();
    translate(0, -25);
    rotate(45);
    rect(0, 0, 10);
    pop();
    pop();
    sLY[i] += 3;
    if (sLY[i] > height * 2) {
      sLY[i] = -20;
    }
    pop();
  }
}
function boss2(x, y) {
  wigD++;
  push();
  noStroke();
  fill(150);
  translate(x, y);
  push();
  translate(-100, 50);
  rotate(20);
  rect(0, 0, 100, 300);
  pop();
  push();
  translate(-100, -50);
  rotate(-20);
  rect(0, 0, 100, 300);
  pop();
  rect(-200, 200, 300, 50);
  rect(-200, -200, 300, 50);
  rect(0, 0, 200, 300);
  push();
  translate(-200, -175);
  rotate(45);
  fill(255, 0, 0);
  rect(0, 0, 20);
  pop();
  push();
  translate(-250, -175);
  rotate(45);
  fill(255, 0, 0);
  rect(0, 0, 20);
  pop();
  push();
  translate(-200, 175);
  rotate(45);
  fill(255, 0, 0);
  rect(0, 0, 20);
  pop();
  push();
  translate(-300, -175);
  rotate(45);
  fill(255, 0, 0);
  rect(0, 0, 20);
  pop();
  push();
  translate(-250, 175);
  rotate(45);
  fill(255, 0, 0);
  rect(0, 0, 20);
  pop();
  push();
  translate(-300, 175);
  rotate(45);
  fill(255, 0, 0);
  rect(0, 0, 20);
  pop();
  fill(200);
  ellipse(-100, 0, 200);
  fill(150);
  rect(100, wiggle, 200, 300);
  fill(150);
  rect(300, -wiggle, 200, 300);
  fill(150);
  rect(500, wiggle, 200, 300);
  fill(150);
  rect(700, -wiggle, 200, 300);
  rect(900, 0, 300, 200);
  fill(255, 2, 2);
  ellipse(-150, 0, 30);
  if (wigD > 60) {
    wiggle *= -1;
    wigD = 0;
  }
  pop();
}
function elazer() {
  stroke(255, 0, 0);
  elD++;
  if (elD <= 60) {
    strokeWeight(1);
    line(x1, y1, x2, y2);
  }
  if (elD > 60) {
    strokeWeight(20);
    line(x1, y1, x2, y2);
    strokeWeight(1);
  }
  if (elD > 70) {
    elD = 0;
    elHit = false;
  }
  if (y1 < 0 || y1 > height) {
    elSped *= -1;
  }
  y1 -= elSped;
}
function exploitLazer() {
  exLD++;
  if (exLD < 70) {
    push();

    for (let i = 0; i < 23; i++) {
      noFill();
      stroke(200, 0, 0);
      fuzz[i] = noise(fuzzOff[i]) * 120;
      ellipse(300 + fuzz[i], 75, 5);
      ellipse(300 + fuzz[i], 425, 5);
      fuzzOff[i] += 0.1;
    }
    pop();
  }
  if (exLD > 70) {
    fill(255, 0, 0);
    for (let i = 0; i < 30; i++) {
      noStroke();
      ellipse(0 + i * 10, 25, 125);
      let d = dist(px, py, i * 10, 25);
      if (d < 125 / 2 + 45 / 2) {
        if (lives > 1) {
          lives = 1;
        }
      }
    }
    for (let i = 0; i < 30; i++) {
      noStroke();
      ellipse(0 + i * 10, 475, 125);
      let d = dist(px, py, i * 10, 475);
      if (d < 125 / 2 + 45 / 2) {
        if (lives > 1) {
          lives = 1;
        }
      }
    }
  }
  if (exLD > 100) {
    exLD = 0;
  }
}
function arrows() {
  for (let i = 0; i < 5; i++) {
    push();
    noStroke();
    push();
    fill(255, 0, 0);
    translate(aX, aY[i]);
    rotate(90);
    rect(0, 0, 5, 50);
    ellipse(0, -20, 15, 5);
    push();
    translate(0, 25);
    rotate(45);
    rect(0, 0, 10);
    pop();
    pop();
    pop();
    aDelay += 0.1;
    if (aDelay > 20) {
      aX -= 2;
    }

    if (aX < -50) {
      aX = width;
      for (let j = 0; j < 10; j++) {
        aHit[j] = false;
        aY[j] = random(height);
      }
      aDelay = 0;
    }
    let d = dist(px, py, aX, aY[i]);
    if (d < 45 / 2 + 3) {
      if (aHit[i] == false) {
        lives--;
        aHit[i] = true;
      }
    }
  }
}
function linePoint(x1, y1, x2, y2, px, py) {
  let d1 = dist(px, py, x1, y1);
  let d2 = dist(px, py, x2, y2);

  let lineLen = dist(x1, y1, x2, y2);

  let buffer = 1.3;

  if (d1 + d2 >= lineLen - buffer && d1 + d2 <= lineLen + buffer) {
    return true;
  } else return false;
}
function easyMode() {
  if (
    score == 50 ||
    score == 100 ||
    score == 150 ||
    score == 200 ||
    score == 250 ||
    score == 300 ||
    score == 350 ||
    score == 400 ||
    score == 450 ||
    score == 500 ||
    score == 550 ||
    score == 600 ||
    score == 650 ||
    score == 700
  ) {
    if (lives < 10) {
      lives++;
      score++;
    }
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  height = height;
  width = width;
}
function boss3(){
  for(let i=0;i<10;i++){
    noStroke()
    fill(255,i*25)
    ellipse(0,0,150-i*10)
  }
 
}
function spinny(x,y){
  push()
  translate(x,y)
  rotate(x*2)
  noStroke()
  rect(0,0,25)
  rotate(45)
  rect(0,0,25)
  ellipse(0,0,30)
  pop()
}
function rLazer(){
  rD++
  for(let i =0;i<8;i++){
    push()
  translate(width/2,height/2)
  rotate(45*i)
    rotate(rR)
    stroke(255)
    if(rD<60){
      strokeWeight(1)
    }
    if(rD>60){
      strokeWeight(15)
      let d = 45*i+rR
      if(d>360){
        d=d-360
      }
      if(pr>=d-3&&pr<=d+3){
        if(rHit[i]==false)
        console.log("rHit")
        fill(255,0,0)
        rect(0,0,100)
        rHit[i]=true
      }
} 
    if(rD>100){
      for(let j =0;j<25;j++){
        rHit[j] =false
      }
      
      rD = 0
     
    }
   
  line(0,0,width,0)
  pop()
  }
  
}
function incursion(){
  iD++
  if(iD<240&&iD>20){
    if(iPos ==1){
      incursionBeamRev(width*0.35)
    }
    if(iPos==2){
      incursionBeamRev(width*0.6)
    }
    if(iPos==3){
        incursionBeamRev(width*0.7)
    }
  }
  if(iD>240){
  if(iPos ==1){
     incursionBeam(width*0.35)
    if(pr>189&&pr<237){
      if(iHit ==false){
        rect(width/2,height/2,100)
     // console.log("i")
        iHit=true
      }
    }
    if(pr>123.5&&pr<162){
     if(iHit ==false){
        rect(width/2,height/2,100)
     // console.log("i")
        iHit=true
      }
    }
  }
  if(iPos==2){
     incursionBeam(width*0.6)
     if(pr>287&&pr<315){
     if(iHit ==false){
        rect(width/2,height/2,100)
     // console.log("i")
        iHit=true
      }
    }
    if(pr>44&&pr<72){
     if(iHit ==false){
        rect(width/2,height/2,100)
     // console.log("i")
        iHit=true
      }
  }
}
    if(iPos==3){
     incursionBeam(width*0.7)
     if(pr>324&&pr<360||pr>0&&pr<36){
     if(iHit ==false){
        rect(width/2,height/2,100)
     // console.log("i")
        iHit=true
      }
    }
    if(pr>44&&pr<72){
    if(iHit ==false){
        rect(width/2,height/2,100)
     // console.log("i")
        iHit=true
      }
  }
}
  }
  if(iD==300||iD==350||iD==400){
    iHit=false
  }
  if(iD>440){
    iD=0
    if(iPos==1){
       iPos =random(iPosS1)
    } else if(iPos==2){
       iPos =random(iPosS2)
    }else if(iPos==3){
       iPos =random(iPosS3)
    }
    iHit=false
    attackTracker2++
  }
}
function incursionBeam(x){
  push()
  noStroke()
    fill(255)
    rect(x,height/2,100,height)
  pop()
}
  function incursionBeamRev(x){
     push()
  noStroke()
    fill(255,50)
    rect(x,height/2,100,height)
  pop()
  }
function playerBoss(x,y,s){
  push()
   fill(255);
  stroke(0);
  translate(x,y)
  rotate(180)
  rect(0, 0, s * 2, s);
  fill(255, 0, 100);
  triangle(0, 0, 0 - s - 5, 0 - s, 0 - s - 5, 0 + s);
  fill(255);
  ellipse(0 - s, 0, s);
  push();
  noFill();
  stroke(0, 255, 255);
  ellipse(0, 0, s * 3);
  pop();
  pop()
}
function bossFight3() {
  if(pr==360){
    pr=0
  }
  if(pr<0){
    pr=359
  }
  if (playerAlive == true) {
    push()
    translate(width/2,height/2)
    boss3()
    rotate(pr)
    playerBoss(300, 0, 15);
  pr+=rSped
    push()
    noFill()
    stroke(255)
    ellipse(0,0,600)
    pop()
    pop()
    if(attackSequence ==0){//1
       push()//start
      translate(width/2,height/2)
    for(let i =0;i<20;i++){
      push()
      rotate(sR[i])
      spinny(sX[i],0)
      sX[i]+=sSped[i]
      if(sX[i]>300-37.5&&sX[i]<300+37.5){
        if(sR[i]<=pr+5&&sR[i]>=pr-5){
          if(sHit[i]==false){
            console.log("hit")
          fill('red')
          rect(0,0,100)
            sHit[i]=true
             lives--
          }
        }
      }
  if(sX[i]>width/1.5){
    if(attackTracker<1000){
    sX[i]=0
    sR[i] =int(random(360))
    sHit[i] =false
    sSped[i]=random(2,5)
    }
  }
      pop()
}
    pop()//end
      attackTracker++
      if(attackTracker==1200){
        console.log("+")
        attackTracker=0
        attackSequence=1
      }
    }else if(attackSequence ==1){//2
     incursion()
      rLazer()
      rR+=0.1
      if(rR==360){
        rR=0
      }
      if(attackTracker2>5){
        attackTracker2=0
        attackSequence=2
      }
    }else if(attackSequence ==2){//3
      attackTracker++
       push()//start
      translate(width/2,height/2)
    for(let i =0;i<20;i++){
      push()
      rotate(sR[i])
      spinny(sX[i],0)
      sX[i]+=sSped[i]
      if(sX[i]>300-37.5&&sX[i]<300+37.5){
        if(sR[i]<=pr+5&&sR[i]>=pr-5){
          if(sHit[i]==false){
            console.log("hit")
          fill('red')
          rect(0,0,100)
            sHit[i]=true
             lives--
          }
        }
      }
  if(sX[i]>width/1.5){
    sX[i]=0
    sR[i] =int(random(360))
    sHit[i] =false
    sSped[i]=random(2,5)
  }
      pop()
}
    pop()//end
      aD3++
    if(aD3>360){
       rLazer()
    }
      if(aD3>460){
    aD3=0
    for(let i=0;i<25;i++){
      rD=0
      rHit[i]=0
      rR=random(360)
    }
  }
    if(attackTracker>930){
      attackTracker=0
      attackSequence=0
    }  
  }
  
}
     
}