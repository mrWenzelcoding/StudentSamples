let x
let y
let ball = []
let xspeed
let yspeed
let numOfBall = 5
function setup() {
  createCanvas(1000, 1000);
  for(i = 0;i<numOfBall;i++){
     ball[i] = new Ball()
  }


  speed = random(-1,1)
}

function draw() {
  background(220);
  for(let i = 0;i<numOfBall;i++){
  ball[i].move()
  ball[i].show()
  ball[i].bounce()
  ball[i].colour()
  }
  
  
  }

function mousePressed(){
  ball[numOfBall] = new Ball()
  
  numOfBall++
}

  class Ball {
    constructor(){
     this.x = 500
      this.y = 500
      this.xspeed = random(-3,3)
      this.yspeed = random(-3,3)
      this.size = random(10,50)
      this.r = random(255)
      this.g = random(255)
      this.b = random(255)
    }
  
 move(){
   this.x = this.x + this.xspeed
   this.y = this.y + this.yspeed
 }
show(){
  stroke(255)
  strokeWeight(4)
  circle(this.x,this.y,this.size)
  }
    bounce(){
      if(this.x<=12){
        this.xspeed = random(1,3)
      
      }
      if(this.x>=988){
        this.xspeed = random(-1,-3)
      }
      if(this.y<=12){
        this.yspeed = random(1,3)
      }
      if(this.y>=988){
        this.yspeed = random(-1,-3)
      }
    }
  colour(){
    fill(this.r,this.g,this.b)
  }
    
}
