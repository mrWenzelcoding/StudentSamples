let vX, vY;
let vSped;
let hX, hY;
let hSped;
let size = 30;
let r = [];
let g = [];
let b = [];
let quadrant;
let cnv2;
let score = 0;
let gameOver = true;
let time;
let highScore;
let gOPX =[]
let gOPY =[]
let gSped=[]
let rG =[]
let song 
let songG
let runSong
let waves
let GOA = 'a'
function preload(){
  song = loadSound('assets/playing.mp3')
  songG = loadSound('assets/gameover.mp3')
}
function setup() {
  createCanvas(500, 500);
  cnv2 = createGraphics(500, 500);
  songG.stop()
  song.loop()
  runSong =true
  angleMode(DEGREES)
  highScore = getItem("highScore");
  if (highScore === null) {
    highScore = 0;
  }
  time = 0;
  //logic
  noStroke();
  cnv2.noStroke();
  angleMode(DEGREES);
  gameOver = false;
  score = 0;
  for(let i =0;i<30;i++){
    let side = int(random(1,3))
    if(side ==1){
       gOPX[i]=random(0,width/3.7)
    }
    if(side ==2){
      gOPX[i]=random(width*0.8,width)
    }
   gOPY[i]=0
    rG[i]=255
    gSped[i]=random(1,5)
  }
  //circle variables
  vX = width / 2;
  vY = height / 2;
  vSped = random(360);
  hX = width / 2;
  hY = height / 2;
  hSped = random(360);
  //quadrant variables
  quadrant = int(random(1, 5));
  //q1
  r[0] = 255;
  g[0] = 123;
  b[0] = 150;
  //q2
  r[1] = 150;
  g[1] = 255;
  b[1] = 123;
  //q3
  r[2] = 123;
  g[2] = 150;
  b[2] = 255;
  //q4
  r[3] = 255;
  g[3] = 200;
  b[3] = 100;
}

function draw() {
  //background(30);
  if(gameOver ==false){
    background(30);
     time++;
}
 
  //quadrants
  //q1
  fill(r[0], g[0], b[0]);
  rect(0, 0, width / 2, height / 2);
  //q2
  fill(r[1], g[1], b[1]);
  rect(0, height / 2, width / 2, height / 2);
  //q3
  fill(r[2], g[2], b[2]);
  rect(width / 2, 0, width / 2, height / 2);
  //q4
  fill(r[3], g[3], b[3]);
  rect(width / 2, height / 2, width / 2, height / 2);
  //quadrant lights
  if (quadrant == 1) {
    cnv2.clear();
    cnv2.fill(255, 100);
    cnv2.rect(0, 0, width / 2, height / 2);
  }
  if (quadrant == 2) {
    cnv2.clear();
    cnv2.fill(255, 100);
    cnv2.rect(0, height / 2, width / 2, height / 2);
  }
  if (quadrant == 3) {
    cnv2.clear();
    cnv2.fill(255, 100);
    cnv2.rect(width / 2, 0, width / 2, height / 2);
  }
  if (quadrant == 4) {
    cnv2.clear();
    cnv2.fill(255, 100);
    cnv2.rect(width / 2, height / 2, width / 2, height / 2);
  }
  //ellipses
  //1
  fill(255);
  ellipse(vX, vY, size);
  vY = sin(vSped);
  vY = map(vY, -1, 1, 0, height);
  vSped += 1 + score / 10;
  //2
  ellipse(hX, hY, size);
  hX = sin(hSped);
  hX = map(hX, -1, 1, 0, width);
  hSped += 1 + score / 10;
  image(cnv2, 0, 0);
  textFont("Courier New", 11);
  text("score:", 20, 20);
  text(score, 60, 20);
  if (gameOver == true) {
    song.stop()
    if(runSong ==true){
      songG.play()
      runSong =false
       fft = new p5.FFT();
  fft.setInput(songG);
    }
    background(0);
  if(GOA=='rain'){
    for(let i =0;i<30;i++){
      push()
      noStroke()
      fill(rG[i],255,255)
      ellipse(gOPX[i],gOPY[i],30)
      gOPY[i]+=gSped[i]
      rG[i]-=1
      if(rG[i]==0){
        rG[i]=255
      }
      if(gOPY[i]>height+15){
       let side = int(random(1,3))
    if(side ==1){
       gOPX[i]=random(0,width/3.7)
    }
    if(side ==2){
      gOPX[i]=random(width*0.8,width)
    }
   gOPY[i]=0
    rG[i]=255
    gSped[i]=random(2,5)
        
      }
      pop()
    }
  }
    if(GOA =='a'){
        wave = fft.analyze();
      for(let i =0;i<500;i++){
        fill(0,255,255)
        rect(0,i,wave[i],2)
      }
       for(let i =0;i<500;i++){
         push()
         translate(width,height)
         rotate(180)
        rect(0,i,wave[i],2)
         pop()
      }
     
    }
    if(GOA =='c'){
      wave = fft.analyze();
      for(let i =0;i<500;i++){
        fill(0,255,255)
        rect(0,i,wave[i],2)
      }
       for(let i =0;i<500;i++){
         push()
         translate(width,height)
         rotate(180)
        rect(0,i,wave[i],2)
         pop()
      }
      for(let i =0;i<500;i++){
         push()
         translate(width,0)
         rotate(90)
        rect(0,i,wave[i],2)
         pop()
      }
      for(let i =0;i<500;i++){
         push()
         translate(0,height)
         rotate(270)
        rect(0,i,wave[i],2)
         pop()
      }
    }
    stroke("palegreen");
    fill("palegreen");
    textFont("Courier New", 40);
    text("Game Over", width / 3.5, height / 3);
    textSize(20);
    text("Final Score", width / 3.5, height / 2);
    text(score, width / 1.5, height / 2);
    text("Press R to Reset", width / 3.5, height / 1.5);
    text("highscore:", width / 3.5, height * 0.8);
    if (highScore < score) {
      highScore = storeItem("highScore", score);
    }
    highScore = getItem("highScore");
    text(highScore, width / 1.5, height * 0.8);
  }
  let dV = dist(mouseX, mouseY, vX, vY);
  if (dV < size / 2) {
    gameOver = true;
  }
  let dH = dist(mouseX, mouseY, hX, hY);
  if (dH < size / 2) {
    gameOver = true;
  }
  if (time > 120) {
    score -= 1;
    time = 0;
  }
  //  console.log(quadrant)
}

function mouseClicked() {
  if (gameOver == false) {
    time = 0;
    if (quadrant == 1) {
      if (
        mouseX < width / 2 &&
        mouseX > 0 &&
        mouseY < height / 2 &&
        mouseY > 0
      ) {
        score++;
        quadrant = int(random(1, 5));
      } else {
        if (quadrant == 1) {
          gameOver = true;
        }
      }
    } else if (quadrant == 2) {
      if (mouseX < width / 2 && mouseY > height / 2) {
        score++;
        quadrant = int(random(1, 5));
      } else {
        if (quadrant === 2) {
          gameOver = true;
        }
      }
    } else if (quadrant == 3) {
      if (mouseX > width / 2 && mouseY < height / 2) {
        score++;
        quadrant = int(random(1, 5));
      } else {
        if (quadrant == 3) {
          gameOver = true;
        }
      }
    } else if (quadrant == 4) {
      if (mouseX > width / 2 && mouseY > height / 2) {
        score++;
        quadrant = int(random(1, 5));
      } else {
        if (quadrant == 4) {
          gameOver = true;
        }
      }
    }
  }
}
function keyPressed() {
  if (key === "r") {
    if (gameOver == true) {
      setup();
      loop();
    }
  }
}
