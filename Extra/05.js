let segC = 50;
let segRatioF = 1;
let segRatioB = 0.95;
let initialL = 20;
let leg, leg2, leg3, leg4,leg5,leg6,leg7,leg8
let xSpeed = -2;
let movementRatio = 0.1;
let legRestSize=80
let legGoalOffset = 0;
let Obs, ObsCanvas;
let legThick=50
let legThickDecreaseRatio=1.3


function preload() {
  Obs = loadImage('pixil-frame-0-9.png');
}

function setup() {
  createCanvas(800, 600);
  background(255)
  noSmooth();
  ObsCanvas = createGraphics(width+200, height);
  ObsCanvas.image(Obs,-200, 0);
  ObsCanvas.noSmooth();
  frameRate(60);
  rectMode(CENTER);
  angleMode(DEGREES);
  
  // Initialize legs
  leg = new Chain(width / 2, height / 1.5, segC, segRatioF, initialL, 250, height - 150, xSpeed, 0, movementRatio, legGoalOffset,legRestSize,legThick,legThickDecreaseRatio);
  leg2 = new Chain(width / 2, height / 1.5, segC, segRatioF, initialL, width - 250, height - 150, xSpeed, 1, movementRatio, legGoalOffset,legRestSize,legThick,legThickDecreaseRatio);
  leg3 = new Chain(width / 2, height / 1.5, segC, segRatioB, initialL, 320, height - 150, xSpeed, 1, movementRatio, legGoalOffset,legRestSize,legThick,legThickDecreaseRatio);
  leg4 = new Chain(width / 2, height / 1.5, segC, segRatioB, initialL, width - 320, height - 150, xSpeed, 0, movementRatio, legGoalOffset,legRestSize,legThick,legThickDecreaseRatio);
    leg5 = new Chain(width / 2, height / 1.5, segC, segRatioF+0.05, initialL, width - 270, height - 150, xSpeed, 0, movementRatio, legGoalOffset,legRestSize,legThick,legThickDecreaseRatio);
    leg6 = new Chain(width / 2, height / 1.5, segC, segRatioF+0.05, initialL,270, height - 150, xSpeed, 0, movementRatio, legGoalOffset,legRestSize,legThick,legThickDecreaseRatio);
   leg7 = new Chain(width / 2, height / 1.5, segC+1, segRatioF+0.05, initialL, width - 300, height - 150, xSpeed, 1, movementRatio, legGoalOffset,legRestSize,legThick,legThickDecreaseRatio);
    leg8 = new Chain(width / 2, height / 1.5, segC+1, segRatioF+0.05, initialL,300, height - 150, xSpeed, 1, movementRatio, legGoalOffset,legRestSize,legThick,legThickDecreaseRatio);
}

function draw() {
  background(255,255,255,140);
  image(ObsCanvas,0, 0);
  
  // Update and display each leg
  leg.FABRIK();
  leg.update();
  leg.display();
  
  leg2.FABRIK();
  leg2.update();
  leg2.display();
  
  leg3.FABRIK();
  leg3.update();
  leg3.display();
  
  leg4.FABRIK();
  leg4.update();
  leg4.display();
  
    leg5.FABRIK();
  leg5.update();
  leg5.display();
  
    leg6.FABRIK();
  leg6.update();
  leg6.display();
      leg7.FABRIK();
  leg7.update();
  leg7.display();
      leg8.FABRIK();
  leg8.update();
  leg8.display();
  // Update body position
  computeBodyPosition();
}

// Function to compute the body position and update it
function computeBodyPosition() {
  // Calculate average position of all legs
  let avgX = (leg.restX + leg2.restX + leg3.restX + leg4.restX + leg5.restX + leg6.restX + leg7.restX +leg8.restX) / 8;
  
  // Update the body’s origin to match the average position
  leg.originX = avgX;
  leg.originY = mouseY;
  leg2.originX = avgX;
  leg2.originY = mouseY;
  leg3.originX = avgX;
  leg3.originY = mouseY;
  leg4.originX = avgX;
  leg4.originY = mouseY;
    leg5.originX = avgX;
  leg5.originY = mouseY;
    leg6.originX = avgX;
  leg6.originY = mouseY;
      leg7.originX = avgX;
  leg7.originY = mouseY;
      leg8.originX = avgX;
  leg8.originY = mouseY;
}

class Chain{
  constructor(x,y,segmentC,segmentRatio,initialLength,xRest,yRest,xSpeed,moveFirst,movementRatio,legGoalOffset,legRestSize,legThick,legThickDecreaseRatio){
    this.legThick=legThick
    this.legDecrease=legThickDecreaseRatio
    this.legRestSize=legRestSize
    this.legGoalOffset=legGoalOffset
    this.movementRatio=movementRatio
    this.moveFirst=moveFirst
    this.startedmove=false
    this.close=true
    this.xSpeed=xSpeed
    this.originX=x
    this.originY=y
    this.segC=segmentC
    this.segRatio=segmentRatio
    this.x=[]
    this.y=[]
    this.segL=[]
    this.targetAngle=0
    this.restX=xRest
    this.restY=yRest
    this.accelerating=false
    if(this.moveFirst==0 || this.xSpeed==0){
    this.xGoal=this.restX
    this.yGoal=this.restY
          this.pixelUp=ObsCanvas.get(this.restX,this.restY-1)
  this.pixelDown=ObsCanvas.get(this.restX,this.restY+1)
    }
        if(this.moveFirst==1){
          if(this.xSpeed>0){
    this.xGoal=this.restX+25
    this.yGoal=this.restY
          }else{
            this.xGoal=this.restX-25
            this.yGoal=this.restY
          }
    }
        this.initialL=initialLength
      for (let i = 0; i <= this.segC; i++) {
    this.x[i] = this.originX;
    this.y[i] = this.originY;
    if (i < this.segC) this.segL[i] = this.initialL * pow(this.segRatio, i);
  }
    this.angLeg=atan2(this.x[this.segC] - this.x[0], this.y[this.segC] - this.y[0]);
  }
  display(){
 //     strokeWeight(5)
//fill(0,0,0,0)
 //  square(this.xGoal,this.yGoal,20)
 // strokeWeight(3)
 // square(this.restX,this.restY,this.legRestSize*2)
        for (let i = 0; i < this.segC; i++) {
    //strokeWeight(5);
    point(this.x[i], this.y[i]);

    strokeWeight(this.legThick-(this.legDecrease*i));
          stroke(i*15)
    line(this.x[i], this.y[i], this.x[i + 1], this.y[i + 1]);
  }
  }
  FABRIK(){
      this.angLeg = atan2(this.x[this.segC] - this.x[0], this.y[this.segC] - this.y[0]);

  this.targetAngle = this.angLeg > 0 ? 45 : -45;

  // Reorient the chain based on the target angle
  for (let i = this.segC - 1; i >= 0; i--) {
    this.x[i] = this.x[i + 1] - sin(radians(this.targetAngle)) * this.segL[i];
    this.y[i] = this.y[i + 1] - cos(radians(this.targetAngle)) * this.segL[i];
  }
for(let j=0;j<800;j++){
  // Step 1: Forward adjustment (end of chain moves to mouse)
  this.x[this.segC] = this.xGoal;
  this.y[this.segC] = this.yGoal;

  for (let i = this.segC - 1; i >= 0; i--) {
    this.dx = this.x[i + 1] - this.x[i];
    this.dy = this.y[i + 1] - this.y[i];
    this.angle = atan2(this.dy, this.dx);

    this.x[i] = this.x[i + 1] - cos(this.angle) * this.segL[i];
    this.y[i] = this.y[i + 1] - sin(this.angle) * this.segL[i];
  }

  // Step 2: Backward adjustment (start of chain moves to origin)
  this.x[0] = this.originX;
  this.y[0] = this.originY;

  for (let i = 1; i <= this.segC; i++) {
    this.dx = this.x[i] - this.x[i - 1];
    this.dy = this.y[i] - this.y[i - 1];
    this.angle = atan2(this.dy, this.dx);

    this.x[i] = this.x[i - 1] + cos(this.angle) * this.segL[i - 1];
    this.y[i] = this.y[i - 1] + sin(this.angle) * this.segL[i - 1];
  }
}
  }
  update(){
    this.xSpeed=((mouseX-(this.originX)))*0.05
            for(let j=0;j<=height;j++){
      this.pixelUp=ObsCanvas.get(this.restX,this.restY-1)
      this.pixelDown=ObsCanvas.get(this.restX,this.restY+1)
          if(this.pixelDown[3]==0){
            this.restY+=1
            console.log(this.pixelUp[3])
            this.pixelDown=ObsCanvas.get(this.restX,this.restY+1)
            
          }
          if(this.pixelUp[3]==255){
            this.restY-=1
            console.log(this.pixelUp[3])
            this.pixelUp=ObsCanvas.get(this.restX,this.restY-1)
            
          }
      }
    this.restX+=this.xSpeed
    this.originX+=this.xSpeed
    if(dist(this.restX,this.restY,this.xGoal,this.yGoal)>this.legRestSize){
      this.accelerating=true
    }
    if(dist(this.restX-this.legGoalOffset,this.restY,this.xGoal,this.yGoal)>10 && this.accelerating == true){
      this.xGoal=lerp(this.xGoal,this.restX-this.legGoalOffset,abs(this.xSpeed*this.movementRatio))
       this.yGoal=lerp(this.yGoal,this.restY-this.legGoalOffset,abs(this.xSpeed*this.movementRatio))
    }
    if(dist(this.restX-this.legGoalOffset,this.restY,this.xGoal,this.yGoal)<10){
      this.accelerating=false
    }
  }
}
