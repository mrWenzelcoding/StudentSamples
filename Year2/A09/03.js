let y = [];
let x = [];

let z = 0;
let m 

let yspeed = [];
let xspeed = [];
let flame
let t
function setup() {
  frameRate();
  createCanvas(600, 600);
  noStroke()
  //circle_setup
  for(let i = 0; i < 200; i++){
  y[i] = random(width)
  x[i] = random(height)
  yspeed[i] = 3
 }
 
  m = -10
 
}
function draw() {
rectMode(CENTER)
background(0,120)
    stars()
  //rocketship
  rect(300,300,120,20)
  triangle(240,290,240,310,200,300)
  fill("yellow")
  t = random(299,301)
  triangle(360,290,360,310,700,t)
  fill("black")
  text("NASA",250,305)
  fill("#FFC107")
  flame = random(400,500)
  
  triangle(360,290,360,310,flame,300)
}

function stars(){
  
  fill("white")
  
  //circle
  
  for(let i = 0; i < 100; i++){
  circle(x[i], y[i], z);
  
  //size_change
    
  if( i > 75){ 
    z = 10
    xspeed[i] = random(2.9,3,1)
    }
  
    else if( i > 50){
    z = 7
    xspeed[i] = random(0.9,1.1)
  }
  
    else if(i > 25){
    z = 2
    xspeed[i] = 0.1
    }
    x[i] = x[i] + xspeed[i];
  if (x[i] > 599){ x[i] = 0}
  if (x[i] < 0){ xspeed[i] = random(4);}
  }
}