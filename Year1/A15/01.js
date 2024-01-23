let xFood;
let yFood;
let x = [];
let y = [];
let fullness = [];
let swell = [];
let swell1 = [];
let speed = [];
let eggdev = [];
let animals;
let eggnum = [];

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER)
  animals=1
  target=0
  noStroke()
  xFood=random(4,396)
  yFood=random(4,396)
  let i = 0;
  while(i<animals){
  x.push(width/2 + i*100);
  y.push(height/2 + i*100);
  fullness.push(32);
  swell.push(220)
  swell1.push(120)
  speed.push(0.06)
  eggdev.push(0)
  eggnum.push(int(random(16,28)))
  
   i++
  }
  
}

function draw(){
  let i = 0;
  background(120,100,80);
  
//eating
    if(x[i]>=xFood-fullness[i]/4 && x[i]<=xFood+fullness[i]/4 && y[i]>=yFood-fullness[i]/4 && y[i]<=yFood+fullness[i]/4){
    fullness[i]+=1
    swell[i]+=1
    swell1[i]-=1
    speed[i]-=0.002
    xFood=random(40,360)
    yFood=random(40,360)
    eggdev[i]+=1
  }
  
  //nest
  fill(80,60,40)
  circle(200,200,32)
  fill(120,100,80)
  circle(200,200,16)
  
  //status
  fill(0,0,0)
  textSize(16)
  text("GENERATION: "+animals,8,20)
  
//food
  fill(100,220,120)
  circle(xFood,yFood,20)
  strokeWeight(2)
  stroke(80,200,100)
  line(xFood,yFood-10,xFood+4,yFood-12)
  line(xFood,yFood-10,xFood-4,yFood-12)
  noStroke()
    
//pink animal
  while(i<animals){
    
  fill(swell[i],swell1[i],swell1[i])
  circle(x[i],y[i],fullness[i])
  fill(swell[i],swell1[i]*1.5,swell1[i]*1.5)
  circle(x[i],y[i],fullness[i]/2)
  fill(20,20,20)
  circle(x[i]-fullness[i]/8,y[i],fullness[i]/8)
  circle(x[i]+fullness[i]/8,y[i],fullness[i]/8)
  
  x[i]=lerp(x[i],xFood,speed[i])
  y[i]=lerp(y[i],yFood,speed[i])
    
  //death
  if(speed[i]<=0){
    swell[i]=lerp(swell[i],0,0.01)
    swell1[i]=lerp(swell1[i],0,0.01)
    fullness[i]=lerp(fullness[i],0,0.01)
  }

    //birthing
    if(eggdev[i]>eggnum[i] && x[i]>=160 && x[i]<=240 && y[i]>=160 && y[i]<=240){
  x.push(width/2);
  y.push(height/2);
  fullness.push(32);
  noStroke()
  swell.push(220)
  swell1.push(120)
  speed.push(0.06)
  eggdev.push(0)
  eggdev[i]=0
  eggnum.push(int(random(16,28)))
  animals++;
  }
    i++;
    if(x[i]>=xFood-fullness[i]/4 && x[i]<=xFood+fullness[i]/4 && y[i]>=yFood-fullness[i]/4 && y[i]<=yFood+fullness[i]/4){
    fullness[i]+=1
    swell[i]+=1
    swell1[i]-=1
    speed[i]-=0.002
    xFood=random(40,360)
    yFood=random(40,360)
    eggdev[i]+=1
  }
  }
}