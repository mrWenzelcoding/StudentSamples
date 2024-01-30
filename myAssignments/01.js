//Step 1: Create a map with a tower, grass and a sky. Make this a function and be sure to make it scalable. DONE

//Step 2: Create projectiles object that can be fired from the tower. Include gravity DONE

//Step 3: Create enemies. They walk towards the tower. Your tower loses health if the enemies collide with the tower DONE

//Step 4: Collisions with enemies

//Create a starting screen that allows you to restart the game. Make sure enemy array gets emptied

let bullet=[];
let charge;
let enemy = [];
let t;
let gameOverTimer=0;
let towerHealth;
let towerWidth;
let towerHeight;
let creationSpeed;
let towerY;
let enemiesDefeated;
let particles=[];
let gameState = false;

function setup() {
  createCanvas(800,600);
  noStroke();
  textAlign(CENTER);
  charge=0;
  t=300;
  enemiesDefeated=0
  towerHealth=255;
  towerWidth=70;
  towerHeight=200;
  creationSpeed=420;
  towerY=300;
  
  while(enemy.length>0){
    enemy.shift()
  }
  
  for(let i=0;i<200;i++){
    particles[i]={
      x:50+towerWidth/2,
      y:300+towerHeight/2,
      xSpeed:random(-20,20),
      ySpeed:random(-20,20),
      a: 255,
      active:false
    }
  }
}

function draw() {
  console.log(particles[0].a)
  if(!gameState){
    background(0)
    stroke(255)
    fill(255)
    textSize(100)
    text("Tower Defence",width/2,height/2)
    textSize(20)
    text("Press SPACE to start game",width/2,height/2+80)
    text("Rules: Hold the mouse down to fire faster bullets. The faster the bullet is moving the more damage it does. Make sure your tower doesn't explode!",0,height-100,width,100)
  }
  else{
    background(100,200,255,120);
    t++;
    towerExplosion()
    scenery()
    enemyMechanics()

      //Charging while mouse is pressed
    if(mouseIsPressed){
      charge+=0.4
    }
  }
}

function keyPressed(){
  if(key == " " && !gameState){
    gameState=true
  }
  
  if(gameOverTimer>240 && key == " "){
    setup()
    gameState=false
    gameOverTimer = 0;
  }
}

function mouseReleased(){
  if(!particles[0].active && gameState){
  bullet[bullet.length] = new Bullet(charge,charge*3,5+charge*10)
  charge = 0
  }
}

function scenery(){
  //Background
  fill(120,255,140)
  rect(0,600,800,-100)
  //Tower
  fill(towerHealth)
  rect(50,towerY,towerWidth,towerHeight)
  
  //Score
  noStroke()
  textSize(80)
  text(enemiesDefeated,width/2,100)
  stroke(255)
  
  //Reset Game
  if(particles[0].active){
    gameOverTimer++
    if(gameOverTimer>240){
      textSize(40)
      text("Press SPACE to Restart",width/2,height/2)
    }
  }
}
    
function towerExplosion(){
   //Tower Explosion
  if(towerHealth<=0 && towerHeight>0){
    towerHeight-=4
    towerY+=4
    towerWidth-=0
    particles[0].active=true
  }
  if(particles[0].active){
    noStroke()
    for(let i=0;i<particles.length;i++){
      fill(0,particles[i].a)
      if(particles[i].a>0){
      particles[i].a-=2
      }
      circle(particles[i].x,particles[i].y,10)
      particles[i].x+=particles[i].xSpeed
      particles[i].y+=particles[i].ySpeed
    }
  }
}

function enemyMechanics(){
    //Enemy creation update and culling
  if(t%creationSpeed==0){
    enemy[enemy.length] = new Enemy()
  }
  for(let i=0; i<enemy.length;i++){
    enemy[i].update()
  }

  //collision with enemy
  for(let i = 0; i<bullet.length; i++){
    bullet[i].update()
    for(let j = 0; j<enemy.length;j++){
      if(bullet[i].collision(enemy[j])){
        enemy[j].x+=20
        enemy[j].health-=bullet[i].damage
        bullet.splice(i,1)
        break
      }else if(bullet[i].y>height){
        bullet.splice(i,1)
        break
      }
    }
  }
      
  //Removing enemies
  for(let i=0; i<enemy.length; i++){
    if(enemy[i].health<=0){
      enemy.splice(i,1)
      creationSpeed-=5
      enemiesDefeated++
   }
  }
      
//Prevent infinite enemy generation
  if(enemy.length > 100){
    gameState=false
  }
}

class Bullet{
  constructor(_xSpeed,_r,_damage){
    this.x = 100
    this.y = 320
    this.r = _r
    this.size = 10
    this.xSpeed = _xSpeed
    this.ySpeed = 0
    this.grav = 0.2
    this.damage = _damage
  }
  
  update(){
    fill(this.r*10,0,0)
    circle(this.x,this.y,this.size)
    this.x+=this.xSpeed
    this.y+=this.ySpeed
    this.ySpeed += this.grav
  }
  
  collision(enemy){
    if(dist(this.x,this.y,enemy.x,enemy.y)<this.size/2+enemy.size/2){
      return true
    }
  }
}

class Enemy{
  constructor(){
    this.x = width
    this.y = height-100
    let enemySize=[20,40,60]
    this.size = random(enemySize)
    this.health = this.size*4
  }
  
  update(){
    fill(0,this.health,100+this.health/2)
    circle(this.x,this.y,this.size)
    if(this.x>120+this.size/2){
    this.x-=20/this.size
    }else if(towerHealth>0){
      towerHealth-=0.1
    }
  }
}