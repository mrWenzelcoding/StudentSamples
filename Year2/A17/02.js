//whatever you do, DON'T exploit the physics by jumping in Earth mode and immediately toggling Moon mode

//player variables
let y;
let ySpeed;
let midair = false;
let grav;
let acc;
//obstacle variables
let saw;
let x = [];
//other variables
let beamx;
let score;
let gameover = false;
let moongame = false;
let r,g,b;
let skyr,skyg,skyb;
let lose;

function preload(){
  saw = loadImage("grinder.png")
  lose = loadImage("youlose.png")
}

function setup() {
  createCanvas(640, 320);
  rectMode(CENTER)
  imageMode(CENTER)
  y = height-80
  ySpeed = 0
  grav = 9
  
  for(let i = 0; i < 5; i++){
  x[i] = int(random(10,40))*48
  }
  
  beamx = -160
  score = 0
  
  r = 240
  g = 200
  b = 120
  
  skyr = 200
  skyg = 180
  skyb = 240
}

function draw() {
  background(skyr,skyg,skyb);
  
  //support beams
  fill(r-40,g-40,b-40)
  for(let i = 1; i < 9; i++){
  rect(beamx+(i*160),height/2,8,height)
  rect((beamx+(i*160))-80,height/2,160,8)
  }
  beamx -= 3
  if(beamx < -321){
      beamx = -160
    }
  //floor
  //240,200,120
  fill(r,g,b)
  rect(width/2,height-56,width,16)
  
  //PLAYER
  y += ySpeed
  
  if(y < height-80){
    ySpeed += acc
    midair = true
  } else if(y > height-80){
    y = height-80
    ySpeed = 0
    midair = false
  }
    saws();
  }

function saws() {
  //OBSTACLE
  for(let i = 0; i < 5; i++){
    image(saw,x[i],height-64)
    
    x[i] -= 4
    
    if(x[i] < -44){
      x[i] = int(random(15,40))*48
    }
    
//COLLISION
  if(x[i] <= 96 && x[i] >= 64 && y >= height-96){
    console.log("yo dawg")
    end();
    }
}
  
  //moon mode. lowers gravity and changes environment (also makes visuals of player. basically half the things in the game)
  if(moongame == true) {
    grav = 5
    acc = 0.1
    r = 160
    g = 160
    b = 220
    skyr = 0
    skyg = 0
    skyb = 20
    fill(0,255,0)
    rect(80,y,16,32)
    fill(240,240,255,191)
    circle(80,y-12,24)
  } else {
    grav = 9
    acc = 0.4
    r = 240
    g = 200
    b = 120
    skyr = 200
    skyg = 180
    skyb = 240
    fill(255,215,0)
    circle(80,y-16,16)
    fill(0,255,0)
    rect(80,y,16,32)
  }
  
  //SCORE
  score += 1
  fill(0)
  rect(96,24,192,24)
  fill(255)
  textAlign(LEFT)
  textSize(20)
  textStyle(BOLDITALIC)
  text("SCORE: " + score,16,32)
  
  textAlign(RIGHT)
  text("SPACE = Jump\nM = Moon Toggle",width-16,32)
}

//ENDING
function end(){
  gameover = true
  if(gameover == true){
    noLoop();
    background(0)
    stroke(0)
    fill(215,0,0)
    image(lose, width/2, height/2)
    ellipse(96,height-64,48,16)
    fill(0,255,0)
    rect(88,height-72,32,16)
    y = 4000
  }
}

function moon() {
  
}

//controls
function keyPressed(){
  if(key == " " && midair == false){
    ySpeed = -grav
  }
  //moon mode
  if(keyCode == 77 && moongame == false){
    moongame = true
  } else if(keyCode == 77 && moongame == true){
    moongame = false
  }

}