//Controls breakdown
//to use ANY controls first click on the canvas
//player one is blue and uses WASD to control and Q to dash
//player two is pink and uses arrow keys to control and Shift to dash
//player three is grey/white and uses TFGH to control and Y to dash
//player four is yellow and uses IJKL to control and O to dash
//while on title screen control number of players using up and down arrow,
//to start game press enter
//to turn dash on or off press SpaceBar
//while in game use 1 key to return to title or P to pause
//use 2 to turn on/off hidden events function,console will indicate if its on or off *warning* this causes a bug I can't seem to fix that messes with scoring,
//*note* when ANY key is pressed the players will begin moving to start the game

//music credit to Bit by Bit sound (https://bit-by-bit-sound.itch.io/16-bit-starter-pack?download)












// player 1
let x;
let y;
let xf1, yf1;
let backgroundCheck;
let xSpeed = 0;
let ySpeed = 0;
let p1Alive = true;
let p1Score = 0;
//player 2
let x2;
let y2;
let xf2, yf2;
let xSpeed2 = 0;
let ySpeed2 = 0;
let p2Alive = true;
let p2Score = 0;
//player 3
let x3;
let y3;
let xf3, yf3;
let xSpeed3 = 0;
let ySpeed3 = 0;
let p3Alive = true;
let p3Score = 0;
//player 4
let x4;
let y4;
let xf4, yf4;
let xSpeed4 = 0;
let ySpeed4 = 0;
let p4Alive = true;
let p4Score = 0;
//start screen
let startScreen = true;
let AX = [];
let AY = [];
let AYL = [];
let xOff = [];
let yOff = [];
//logic
let size =10
let time = 0;
let eventTime =0
let gameSep = 200;
let checkerDis
let playerNum = 2;
let pS = false;
let mySound;
let soloTime = 0;
let dashEnabled = false;
let s = true
let stageSizeW
let StageSizeY
//events
let eventsOn = false
let slashX =[]
let slashY =[]
let slashC =40
let slashTime
function preload() {
  soundFormats("mp3", "ogg");
  mySound = loadSound("assets/music.ogg");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  stageSizeW = width
  stageSizeY = height
  eventTime =0
  background(0);
  backgroundCheck = get(1, 1);
  checkerDis = size/2 +1
  angleMode(DEGREES);
  x = random(20, width / 2);
  y = random(20, height * 0.7);
  x2 = random(width / 2, width - 20);
  y2 = random(20, height * 0.7);
  x3 = random(20, width / 2);
  y3 = random(20, height * 0.7);
  x4 = random(width / 2, width - 20);
  y4 = random(20, height * 0.7);
  rectMode(CENTER);
  for (let i = 0; i < 100; i++) {
    AX[i] = 0;
    AY[i] = random(height);
    AYL[i] = random(height / 2, height);
    xOff[i] = random(200);
    yOff[i] = random(200);
  }
  mySound.loop();
  slashX[0]=random(width)
      slashY[0]=random(height/3)
  slashX[-1]=slashX[0]
   slashY[-1]=slashY[0]
    for(let i =0;i<100000;i++){
      slashX[i]=slashX[i-1] +random(-35,35)
      slashY[i]= slashY[i-1] +random(-35,35)
    }
  
}

function draw() {
  //title
  if (startScreen == true) {
    fill(255);
    stroke(255);
    for (let i = 0; i < 100; i++) {
      push();
      stroke(100, 255, 255);
      fill(0, 150, 200);
      rect(AX[i], AY[i], 10);
      stroke(255, 100, 255);
      fill(200, 0, 150);
      rect(width - AX[i], AY[i], 10);
      AX[i] += noise(xOff[i]) * 5;
      xOff[i] += 0.005;
      if (AX[i] > width) {
        AX[i] = 0;
        AY[i] = random(height);
      }
      pop();
    }
    textSize(75);
    textFont("georgia");
    stroke(255);
    fill(255);
    text("Neon Runners", width*0.3, height / 2);
    textSize(25);
    text("player count", width * 0.82, height * 0.2);
    text(playerNum, width * 0.94, height * 0.2);
    text("dash ", width * 0.85, height * 0.8);
    if (dashEnabled == true) {
      text("on", width * 0.85, height * 0.85);
    }
    if (dashEnabled == false) {
      text("off", width * 0.85, height * 0.85);
    }
    
  }

  //game
  if (startScreen == false) {
    stroke(255);
    if(eventsOn ==true){
       if(xSpeed != 0 || ySpeed !=0){
       eventTime++
    }
    }
   
    line(0, height * 0.8, width, height * 0.8);
    noFill();
    stroke(150, 150, 150);
    rect(width / 2, height / 2, stageSizeW, stageSizeY);
    //screenShrink
    if(eventsOn ==true){
    if(eventTime>=1000){
      if(stageSizeW>width-100){
        stageSizeW--
      }
      if(stageSizeY>height-100){
        stageSizeY--
      }
      if(eventTime>=2000){
        if(stageSizeW>width-200){
        stageSizeW--
      }
      if(stageSizeY>height-200){
        stageSizeY--
      }
      }
        if(eventTime>=3000){
        if(stageSizeW>width-300){
        stageSizeW--
      }
      if(stageSizeY>height-300){
        stageSizeY--
      }
        }
          if(eventTime>=4000){
        if(stageSizeW>width-400){
        stageSizeW--
      }
      if(stageSizeY>height-400){
        stageSizeY--
      }
          }
            if(eventTime>=5000){
        if(stageSizeW>width-500){
        stageSizeW--
      }
      if(stageSizeY>height-500){
        stageSizeY--
      }
            }
              if(eventTime>=6000){
        if(stageSizeW>width-600){
        stageSizeW--
      }
      if(stageSizeY>height-600){
        stageSizeY--
      }
      }
    }
    //crevass
    if(eventTime>=500){
      slashTime++
      for(let i =0;i<slashC;i++){
      line(slashX[i],slashY[i],slashX[i-1],slashY[i-1])
    }
      if(slashTime>=1500){
        slashC +=700
        slashTime =0
      }
    }
    }
    //players alive
    fill(255);
    if (p1Alive == true) {
      push();
      stroke(100, 255, 255);
      fill(0, 150, 200);
      translate(x, y);
      rect(0, 0, size);
      pop();
      x += xSpeed;
      y += ySpeed;
    }
    if (playerNum >= 2) {
      if (p2Alive == true) {
        push();
        stroke(255, 100, 255);
        fill(200, 0, 150);
        translate(x2, y2);
        rect(0, 0, size);
        pop();
        x2 += xSpeed2;
        y2 += ySpeed2;
      }
    }
    if (playerNum >= 3) {
      if (p3Alive == true) {
        push();
        stroke(255, 255, 255);
        fill(0, 0, 0);
        translate(x3, y3);
        rect(0, 0, size);
        pop();
        x3 += xSpeed3;
        y3 += ySpeed3;
      }
    }
    if (playerNum >= 4) {
      if (p4Alive == true) {
        push();
        stroke(255, 255, 100);
        fill(200, 150, 0);
        translate(x4, y4);
        rect(0, 0, size);
        pop();
        x4 += xSpeed4;
        y4 += ySpeed4;
      }
    }

    //border and life checkers
    if (playerNum >= 1) {
      if (x > width || x < 3 || y > height || y < 3) {
        p1Alive = false;
      }
    }
    if (playerNum >= 2) {
      if (x2 > width || x2 < 3 || y2 > height || y2 < 3) {
        p2Alive = false;
      }
    }
    if (playerNum >= 3) {
      if (x3 > width || x3 < 3 || y3 > height || y3 < 3) {
        p3Alive = false;
      }
    }
    if (playerNum >= 4) {
      if (x4 > width || x4 < 3 || y4 > height || y4 < 3) {
        p4Alive = false;
      }
    }
    //overlap check
    //p1 x
    if (xSpeed == 1) {
      xf1 = get(x + checkerDis, y);
    }
    if (xSpeed == -1) {
      xf1 = get(x - checkerDis, y);
    }
    if (xf1 > backgroundCheck || xf1 < backgroundCheck) {
      p1Alive = false;
    }

    //p2 x
    if (xSpeed2 == 1) {
      xf2 = get(x2 + checkerDis, y2);
    }
    if (xSpeed2 == -1) {
      xf2 = get(x2 - checkerDis, y2);
    }
    if (xf2 > backgroundCheck || xf2 < backgroundCheck) {
      p2Alive = false;
    }
    //p1 y
    if (ySpeed == 1) {
      yf1 = get(x, y + checkerDis);
    }
    if (ySpeed == -1) {
      yf1 = get(x, y - checkerDis);
    }
    if (yf1 > backgroundCheck || yf1 < backgroundCheck) {
      p1Alive = false;
    }

    //p2 y
    if (ySpeed2 == 1) {
      yf2 = get(x2, y2 + checkerDis);
    }
    if (ySpeed2 == -1) {
      yf2 = get(x2, y2 - checkerDis);
    }
    if (yf2 > backgroundCheck || yf2 < backgroundCheck) {
      p2Alive = false;
    }
    //p3 y
    if (ySpeed3 == 1) {
      yf3 = get(x3, y3 + checkerDis);
    }
    if (ySpeed3 == -1) {
      yf3 = get(x3, y3 - checkerDis);
    }
    if (yf3 > backgroundCheck || yf3 < backgroundCheck) {
      p3Alive = false;
    }
    //p3 x
    if (xSpeed3 == 1) {
      xf3 = get(x3 + checkerDis, y3);
    }
    if (xSpeed3 == -1) {
      xf3 = get(x3 - checkerDis, y3);
    }
    if (xf3 > backgroundCheck || xf3 < backgroundCheck) {
      p3Alive = false;
    }
    //p4 y
    if (ySpeed4 == 1) {
      yf4 = get(x4, y4 + checkerDis);
    }
    if (ySpeed4 == -1) {
      yf4 = get(x4, y4 - checkerDis);
    }
    if (yf4 > backgroundCheck || yf4 < backgroundCheck) {
      p4Alive = false;
    }
    //p4 x
    if (xSpeed4 == 1) {
      xf4 = get(x4 + checkerDis, y4);
    }
    if (xSpeed4 == -1) {
      xf4 = get(x4 - checkerDis, y4);
    }
    if (xf4 > backgroundCheck || xf4 < backgroundCheck) {
      p4Alive = false;
    }
    //points and reset
    if (playerNum == 1) {
      soloTime++;
      if (p1Alive == false) {
        textSize(75);
        text("game over", width * 0.35, height *0.45);
        xf1 = get(1, 1);
        yf1 = get(1, 1);
        xf2 = get(1, 1);
        yf2 = get(1, 1);
        xf3 = get(1, 1);
        yf3 = get(1, 1);
        xf4 = get(1, 1);
        yf4 = get(1, 1);
        time++;
        xSpeed = 0;
        ySpeed = 0;
        xSpeed2 = 0;
        ySpeed2 = 0;
        xSpeed3 = 0;
        ySpeed3 = 0;
        xSpeed4 = 0;
        ySpeed4 = 0;
        if (time == gameSep) {
          x = random(20, width / 2);
          y = random(20, height * 0.6);
          x2 = random(width / 2, width - 20);
          y2 = random(20, height * 0.6);
          x3 = random(20, width - 20);
          y3 = random(20, height * 0.7);
          x4 = random(20, width - 20);
          y4 = random(20, height * 0.7);
          background(0);
          time = 0;
          p1Alive = true;
          p2Alive = true;
          p3Alive = true;
          p4Alive = true;
          soloTime = 0;
          stageSizeW = width
  stageSizeY = height
  eventTime =0
        }
      }
    }
    //2 player
    if (playerNum == 2) {
      if (p1Alive == false) {
        textSize(75);
        text("player 2 wins", width * 0.35, height *0.45);
        xf1 = get(1, 1);
        yf1 = get(1, 1);
        xf2 = get(1, 1);
        yf2 = get(1, 1);
        xf3 = get(1, 1);
        yf3 = get(1, 1);
        xf4 = get(1, 1);
        yf4 = get(1, 1);
        time++;
        xSpeed = 0;
        ySpeed = 0;
        xSpeed2 = 0;
        ySpeed2 = 0;
        xSpeed3 = 0;
        ySpeed3 = 0;
        xSpeed4 = 0;
        ySpeed4 = 0;
        if (time == gameSep) {
          x = random(20, width / 2);
          y = random(20, height * 0.6);
          x2 = random(width / 2, width - 20);
          y2 = random(20, height * 0.6);
          x3 = random(20, width - 20);
          y3 = random(20, height * 0.7);
          x4 = random(20, width - 20);
          y4 = random(20, height * 0.7);
          background(0);
          time = 0;
          p1Alive = true;
          p2Alive = true;
          p3Alive = true;
          p4Alive = true;
          p2Score++;
          stageSizeW = width
  stageSizeY = height
  eventTime =0
        }
      }
      if (p2Alive == false) {
        textSize(75);
        text("player 1 wins", width * 0.35, height *0.45);
        xf1 = get(1, 1);
        yf1 = get(1, 1);
        xf2 = get(1, 1);
        yf2 = get(1, 1);
        xf3 = get(1, 1);
        yf3 = get(1, 1);
        xf4 = get(1, 1);
        yf4 = get(1, 1);
        time++;
        xSpeed = 0;
        ySpeed = 0;
        xSpeed2 = 0;
        ySpeed2 = 0;
        xSpeed3 = 0;
        ySpeed3 = 0;
        xSpeed4 = 0;
        ySpeed4 = 0;
        if (time == gameSep) {
          x = random(20, width / 2);
          y = random(20, height * 0.6);
          x2 = random(width / 2, width - 20);
          y2 = random(20, height * 0.6);
          x3 = random(20, width - 20);
          y3 = random(20, height * 0.7);
          x4 = random(20, width - 20);
          y4 = random(20, height * 0.7);
          background(0);
          time = 0;
          p1Alive = true;
          p2Alive = true;
          p3Alive = true;
          p4Alive = true;
          p1Score++;
          stageSizeW = width
  stageSizeY = height
  eventTime =0
        }
      }
    }
    //3 player
    if (playerNum == 3) {
      if (p2Alive == false && p3Alive == false) {
        textSize(75);
        text("player 1 wins", width * 0.35, height *0.45);
        xf1 = get(1, 1);
        yf1 = get(1, 1);
        xf2 = get(1, 1);
        yf2 = get(1, 1);
        xf3 = get(1, 1);
        yf3 = get(1, 1);
        xf4 = get(1, 1);
        yf4 = get(1, 1);
        time++;
        xSpeed = 0;
        ySpeed = 0;
        xSpeed2 = 0;
        ySpeed2 = 0;
        xSpeed3 = 0;
        ySpeed3 = 0;
        xSpeed4 = 0;
        ySpeed4 = 0;
        if (time == gameSep) {
          x = random(20, width / 2);
          y = random(20, height * 0.6);
          x2 = random(width / 2, width - 20);
          y2 = random(20, height * 0.6);
          x3 = random(20, width - 20);
          y3 = random(20, height * 0.7);
          x4 = random(20, width - 20);
          y4 = random(20, height * 0.7);
          background(0);
          time = 0;
          p1Alive = true;
          p2Alive = true;
          p3Alive = true;

          p1Score++;
          stageSizeW = width
  stageSizeY = height
  eventTime =0
        }
      }

      if (p1Alive == false && p3Alive == false) {
        textSize(75);
        text("player 2 wins", width * 0.35, height *0.45);
        xf1 = get(1, 1);
        yf1 = get(1, 1);
        xf2 = get(1, 1);
        yf2 = get(1, 1);
        xf3 = get(1, 1);
        yf3 = get(1, 1);
        xf4 = get(1, 1);
        yf4 = get(1, 1);
        time++;
        xSpeed = 0;
        ySpeed = 0;
        xSpeed2 = 0;
        ySpeed2 = 0;
        xSpeed3 = 0;
        ySpeed3 = 0;
        xSpeed4 = 0;
        ySpeed4 = 0;
        if (time == gameSep) {
          x = random(20, width / 2);
          y = random(20, height * 0.6);
          x2 = random(width / 2, width - 20);
          y2 = random(20, height * 0.6);
          x3 = random(20, width - 20);
          y3 = random(20, height * 0.7);
          x4 = random(20, width - 20);
          y4 = random(20, height * 0.7);
          background(0);
          time = 0;
          p1Alive = true;
          p2Alive = true;
          p3Alive = true;
          p4Alive = true;
          p2Score++;
          stageSizeW = width
  stageSizeY = height
  eventTime =0
        }
      }
      if (p1Alive == false && p2Alive == false) {
        textSize(75);
        text("player 3 wins",  width * 0.35, height *0.45);
        xf1 = get(1, 1);
        yf1 = get(1, 1);
        xf2 = get(1, 1);
        yf2 = get(1, 1);
        xf3 = get(1, 1);
        yf3 = get(1, 1);
        xf4 = get(1, 1);
        yf4 = get(1, 1);
        time++;
        xSpeed = 0;
        ySpeed = 0;
        xSpeed2 = 0;
        ySpeed2 = 0;
        xSpeed3 = 0;
        ySpeed3 = 0;
        xSpeed4 = 0;
        ySpeed4 = 0;
        if (time == gameSep) {
          x = random(20, width / 2);
          y = random(20, height * 0.6);
          x2 = random(width / 2, width - 20);
          y2 = random(20, height * 0.6);
          x3 = random(20, width - 20);
          y3 = random(20, height * 0.7);
          x4 = random(20, width - 20);
          y4 = random(20, height * 0.7);
          background(0);
          time = 0;
          p1Alive = true;
          p2Alive = true;
          p3Alive = true;
          p4Alive = true;
          p3Score++;
          stageSizeW = width
  stageSizeY = height
  eventTime =0
        }
      }
    }
    //four player
    if (playerNum == 4) {
      if (p1Alive == false && p3Alive == false && p4Alive == false) {
        textSize(75);
        text("player 2 wins",  width * 0.35, height *0.45);
        xf1 = get(1, 1);
        yf1 = get(1, 1);
        xf2 = get(1, 1);
        yf2 = get(1, 1);
        xf3 = get(1, 1);
        yf3 = get(1, 1);
        xf4 = get(1, 1);
        yf4 = get(1, 1);
        time++;
        xSpeed = 0;
        ySpeed = 0;
        xSpeed2 = 0;
        ySpeed2 = 0;
        xSpeed3 = 0;
        ySpeed3 = 0;
        xSpeed4 = 0;
        ySpeed4 = 0;
        if (time == gameSep) {
          x = random(20, width - 20);
          y = random(20, height * 0.7);
          x2 = random(20, width - 20);
          y2 = random(20, height * 0.7);
          x3 = random(20, width - 20);
          y3 = random(20, height * 0.7);
          x4 = random(20, width - 20);
          y4 = random(20, height * 0.7);

          background(0);
          time = 0;
          p1Alive = true;
          p2Alive = true;
          p3Alive = true;
          p4Alive = true;

          p2Score++;
          stageSizeW = width
  stageSizeY = height
  eventTime =0
        }
      }
      if (p2Alive == false && p3Alive == false && p4Alive == false) {
        textSize(75);
        text("player 1 wins", width * 0.35, height *0.45);
        xf1 = get(1, 1);
        yf1 = get(1, 1);
        xf2 = get(1, 1);
        yf2 = get(1, 1);
        xf3 = get(1, 1);
        yf3 = get(1, 1);
        xf4 = get(1, 1);
        yf4 = get(1, 1);
        time++;
        xSpeed = 0;
        ySpeed = 0;
        xSpeed2 = 0;
        ySpeed2 = 0;
        xSpeed3 = 0;
        ySpeed3 = 0;
        xSpeed4 = 0;
        ySpeed4 = 0;
        if (time == gameSep) {
          x = random(20, width / 2);
          y = random(20, height * 0.6);
          x2 = random(width / 2, width - 20);
          y2 = random(20, height * 0.6);
          x3 = random(20, width - 20);
          y3 = random(20, height * 0.7);
          x4 = random(20, width - 20);
          y4 = random(20, height * 0.7);
          background(0);
          time = 0;
          p1Alive = true;
          p2Alive = true;
          p3Alive = true;
          p4Alive = true;
          p1Score++;
          stageSizeW = width
  stageSizeY = height
  eventTime =0
        }
      }
      if (p1Alive == false && p2Alive == false && p3Alive == false) {
        textSize(75);
        text("player 4 wins", width * 0.35, height *0.45);
        xf1 = get(1, 1);
        yf1 = get(1, 1);
        xf2 = get(1, 1);
        yf2 = get(1, 1);
        xf3 = get(1, 1);
        yf3 = get(1, 1);
        xf4 = get(1, 1);
        yf4 = get(1, 1);
        time++;
        xSpeed = 0;
        ySpeed = 0;
        xSpeed2 = 0;
        ySpeed2 = 0;
        xSpeed3 = 0;
        ySpeed3 = 0;
        xSpeed4 = 0;
        ySpeed4 = 0;
        if (time == gameSep) {
          x = random(20, width / 2);
          y = random(20, height * 0.6);
          x2 = random(width / 2, width - 20);
          y2 = random(20, height * 0.6);
          x3 = random(20, width - 20);
          y3 = random(20, height * 0.7);
          x4 = random(20, width - 20);
          y4 = random(20, height * 0.7);
          background(0);
          time = 0;
          p1Alive = true;
          p2Alive = true;
          p3Alive = true;
          p4Alive = true;
          p4Score++;
          stageSizeW = width
  stageSizeY = height
  eventTime =0
        }
      }
      if (p1Alive == false && p2Alive == false && p4Alive == false) {
        textSize(75);
        text("player 3 wins",  width * 0.35, height *0.45);
        xf1 = get(1, 1);
        yf1 = get(1, 1);
        xf2 = get(1, 1);
        yf2 = get(1, 1);
        xf3 = get(1, 1);
        yf3 = get(1, 1);
        xf4 = get(1, 1);
        yf4 = get(1, 1);
        time++;
        xSpeed = 0;
        ySpeed = 0;
        xSpeed2 = 0;
        ySpeed2 = 0;
        xSpeed3 = 0;
        ySpeed3 = 0;
        xSpeed4 = 0;
        ySpeed4 = 0;
        if (time == gameSep) {
          x = random(20, width / 2);
          y = random(20, height * 0.6);
          x2 = random(width / 2, width - 20);
          y2 = random(20, height * 0.6);
          x3 = random(20, width - 20);
          y3 = random(20, height * 0.7);
          x4 = random(20, width - 20);
          y4 = random(20, height * 0.7);
          background(0);
          time = 0;
          p1Alive = true;
          p2Alive = true;
          p3Alive = true;
          p4Alive = true;
          p3Score++;
          stageSizeW = width
  stageSizeY = height
  eventTime =0
        }
      }
    }
    //player 1 display
    textSize(10);
    stroke(0);
    fill(10)
    rect(width / 2, height * 0.9, width, 170);
    stroke(255);
    fill(255);
    text("player 1 alive?", width * 0.05, height * 0.85);
    text(p1Alive, width * 0.05, height * 0.9);
    if (playerNum > 1) {
      text("p1 points", width * 0.05, height * 0.95);
      text(p1Score, width * 0.085, height * 0.95);
    } else {
      text("time survived", width * 0.05, height * 0.95);
      text(int(soloTime / 60), width * 0.17, height * 0.95);
    }
    //player 2 display
    if (playerNum >= 2) {
      stroke(255);
      fill(255);
      text("player 2 alive?", width * 0.3, height * 0.85);
      text(p2Alive, width * 0.3, height * 0.9);
      text("p2 points", width * 0.3, height * 0.95);
      text(p2Score, width * 0.335, height * 0.95);
    }
    if (playerNum >= 3) {
      stroke(255);
      fill(255);
      text("player 3 alive?", width * 0.5, height * 0.85);
      text(p3Alive, width * 0.5, height * 0.9);
      text("p3 points", width * 0.5, height * 0.95);
      text(p3Score, width * 0.535, height * 0.95);
    }
    if (playerNum >= 4) {
      stroke(255);
      fill(255);
      text("player 4 alive?", width * 0.7, height * 0.85);
      text(p4Alive, width * 0.7, height * 0.9);
      text("p4 points", width * 0.7, height * 0.95);
      text(p4Score, width * 0.735, height * 0.95);
    }
  }
}

function keyPressed() {
  if (
    p1Alive == true ||
    p2Alive == true ||
    p3Alive == true ||
    p4Alive == true
  ) {
    if (
      xSpeed == 0 &&
      xSpeed2 == 0 &&
      ySpeed == 0 &&
      ySpeed2 == 0 &&
      ySpeed3 == 0 &&
      ySpeed4 == 0 &&
      xSpeed3 == 0 &&
      xSpeed4 == 0 &&
      startScreen == false
    ) {
      xSpeed = 1;
      xSpeed2 = -1;
      ySpeed = 0;
      ySpeed2 = 0;
      xSpeed3 = 1;
      xSpeed4 = -1;
      ySpeed3 = 0;
      ySpeed4 = 0;
    }

    if (key === "d") {
      //p1 controls
      if (xSpeed == 0) {
        xSpeed = size/10;
        ySpeed = 0;
      }
    } else if (key === "s") {
      if (ySpeed == 0) {
        ySpeed = size/10;
        xSpeed = 0;
      }
    } else if (key === "a") {
      if (xSpeed == 0) {
        ySpeed = 0;
        xSpeed = -size/10;
      }
    } else if (key === "w") {
      if (ySpeed == 0) {
        ySpeed = -size/10;
        xSpeed = 0;
      }
    } else if (key === "q") {
      if (dashEnabled == true) {
        if (xSpeed == 1) {
          x += size*2;
        } else if (xSpeed == -1) {
          x -= size*2;
        } else if (ySpeed == 1) {
          y += size*2;
        } else if (ySpeed == -1) {
          y -= size*2;
        }
      }
    }

    if (keyCode === RIGHT_ARROW) {
      //p2 controls
      if (xSpeed2 == 0) {
        xSpeed2 = size/10;
        ySpeed2 = 0;
      }
    } else if (keyCode === DOWN_ARROW) {
      if (startScreen == false) {
        if (ySpeed2 == 0) {
          ySpeed2 = size/10;
          xSpeed2 = 0;
        }
      }
      if (startScreen == true) {
        if (playerNum > 1) {
          fill(0);
          rect(width * 0.945, height * 0.189, 20,33);
          playerNum--;
          rect(width * 0.945, height * 0.189, 20,33);
        }
      }
    } else if (keyCode === LEFT_ARROW) {
      if (xSpeed2 == 0) {
        ySpeed2 = 0;
        xSpeed2 = -size/10;
      }
    } else if (keyCode === UP_ARROW) {
      if (startScreen == false) {
        if (ySpeed2 == 0) {
          ySpeed2 = -size/10;
          xSpeed2 = 0;
        }
      }
      if (startScreen == true) {
        if (playerNum < 4) {
          fill(0);
          rect( width * 0.945, height * 0.189, 20,33);
          playerNum++;
          rect( width * 0.945, height * 0.189, 20,33);
        }
      }
    } else if (keyCode === SHIFT) {
      if (dashEnabled == true) {
        if (xSpeed2 == 1) {
          x2 += size*2;
        } else if (xSpeed2 == -1) {
          x2 -= size*2;
        } else if (ySpeed2 == 1) {
          y2 += size*2;
        } else if (ySpeed2 == -1) {
          y2 -= size*2;
        }
      }
    } else if (key === "h") {
      //player3 controls
      if (xSpeed3 == 0) {
        xSpeed3 = size/10;
        ySpeed3 = 0;
      }
    } else if (key === "f") {
      if (xSpeed3 == 0) {
        ySpeed3 = 0;
        xSpeed3 = -size/10;
      }
    } else if (key === "g") {
      if (ySpeed3 == 0) {
        ySpeed3 = size/10;
        xSpeed3 = 0;
      }
    } else if (key === "t") {
      if (ySpeed3 == 0) {
        ySpeed3 = -size/10;
        xSpeed3 = 0;
      }
    } else if (key === "y") {
      if (dashEnabled == true) {
        if (xSpeed3 == 1) {
          x3 += size*2;
        } else if (xSpeed3 == -1) {
          x3 -= size*2;
        } else if (ySpeed3 == 1) {
          y3 += size*2;
        } else if (ySpeed3 == -1) {
          y3 -= size*2;
        }
      }
    } else if (key === "l") {
      //player 4
      if (xSpeed4 == 0) {
        xSpeed4 = size/10;
        ySpeed4 = 0;
      }
    } else if (key === "j") {
      if (xSpeed4 == 0) {
        ySpeed4 = 0;
        xSpeed4 = -size/10;
      }
    } else if (key === "k") {
      if (ySpeed4 == 0) {
        ySpeed4 = size/10;
        xSpeed4 = 0;
      }
    } else if (key === "i") {
      if (ySpeed4 == 0) {
        ySpeed4 = -size/10;
        xSpeed4 = 0;
      }
    } else if (key === "o") {
      if (dashEnabled == true) {
        if (xSpeed4 == 1) {
          x4 += size*2;
        } else if (xSpeed4 == -1) {
          x4 -= size*2;
        } else if (ySpeed4 == 1) {
          y4 += size*2;
        } else if (ySpeed4 == -1) {
          y4 -= size*2;
        }
      }
    }
  }
  if (keyCode === ENTER) {
    if (startScreen == true) {
      background(0);
      startScreen = false;
    }
  } else if (key === "p") {
    if (startScreen == false) {
      if (pS == false) {
        noLoop();
        pS = true;
        console.log("paused");
      } else if (pS == true) {
        loop();
        pS = false;
        console.log("unpaused");
      }
    }
  } else if (key === "1") {
    background(0);
    startScreen = true;
    p1Score = 0;
    p2Score = 0;
    p3Score = 0;
    p4Score = 0;
    p1Alive = true;
    p2Alive = true;
    p3Alive = true;
    p4Alive = true;
  } else if (key == " ") {
    if (startScreen == true) {  
      noStroke()
      if (dashEnabled == true) {
        dashEnabled = false;
        fill(0);
        rect( width * 0.86, height * 0.84,50,30);
      } else if (dashEnabled == false) {
        dashEnabled = true;
        fill(0);
        rect( width * 0.86, height * 0.84,50,30);
      }
    }
  }else if(key =="2"){
    if(startScreen == true){
      if(eventsOn ==false){
        eventsOn =true
        console.log(eventsOn)
      }else if(eventsOn ==true){
        eventsOn =false
        console.log(eventsOn)
      }
    }
  }
}
function mousePressed() {
      let FS =fullscreen();
  fullscreen(!FS)
  for (let i = 0; i < 100; i++) {
    AX[i] = 0;
    AY[i] = random(height);
    xOff[i] = random(200);
    yOff[i] = random(200);
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  stageSizeW = width
  stageSizeY =height
  for (let i = 0; i < 100; i++) {
    AX[i] = 0;
    AY[i] = random(height);
    AYL[i] = random(height / 2, height);
    xOff[i] = random(200);
    yOff[i] = random(200);
  }
}