let ball = [];

function setup() {
  createCanvas(800, 800);
  noStroke()
  //plentiful (will melt your chromebook)
  for(let i = 0; i < 1024; i++){
  ball[i] = new Ball();
  }
}

function draw() {
  background(0,16);
  for(let i = 0; i < 1024; i++){
  ball[i].show();
  ball[i].boundaries();
  ball[i].pulse();
  ball[i].glow();
  }
}

class Ball{
  constructor(){
    this.x=width/2
    this.y=random(height)
    this.size=int(random(2,4)*8);
    this.speedX=random(-2,2);
    this.speedY=random(-2,2);
    this.pulsate=random(-1,1);
    this.r=255
    this.g=255
    this.b=255
  }
  
  glow(){
    fill(this.r,this.g,this.b);
    this.r+=random(-2,2)
    this.g+=random(-2,2)
    this.b+=random(-2,2)
    if(this.r < 0){
      this.r*=-1
    }
    if(this.g < 0){
      this.g*=-1
    }
    if(this.b < 0){
      this.b*=-1
    }
  }
  
  show(){
    circle(this.x,this.y,this.size)
    fill(0)
    circle(this.x,this.y,this.size/1.2)
    this.x += this.speedX
    this.y += this.speedY
  }
  
  boundaries(){
    //extremely awesome collision check it  out
    if(this.x > width-this.size/2 || this.x < 0+this.size/2){
      this.speedX *= -1
    }
    if(this.y > width-this.size/2 || this.y < 0+this.size/2){
      this.speedY *= -1
    }
  }
  
  pulse(){
    this.size += this.pulsate
    
    if(this.size > 32 || this.size < 0){
      this.pulsate *= -1
    }
  }
  
}

