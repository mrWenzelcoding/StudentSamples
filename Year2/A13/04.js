// F key for fullScreen (click canvas first), mouse press for new ball

let ball =[]
function setup() {
  createCanvas(windowWidth, windowHeight);
  ball[0] = new Ball(width/2,50,10)
  angleMode(DEGREES)
}

function draw() {
  background(0,30);
  for(let i =0;i<ball.length;i++){
  ball[i].display()
  ball[i].move()
  ball[i].borders()
  ball[i].pulse()
    ball[i].colour()
    ball[i].rotating()
  }

}
class Ball{
  constructor(_x,_y,_s){
    this.x = _x
    this.y = _y
    this.s = _s
    this.xSped =random(-3,3)
    this.ySped=random(-3,3)
    this.pulseSped=0.4
    this.r=100
    this.g=200
    this.b=200
    this.ro=1
  }
  display(){
    noStroke()
    fill(this.r,this.g,this.b)
    circle(this.x,this.y,this.s)
    push()
    translate(this.x,this.y)
    rotate(this.ro)
    ellipse(25,0,this.s/2)
    ellipse(-25,0,this.s/2)
    push()
    translate(25,0)
    rotate(this.ro)
    ellipse(10,0,this.s/4)
     ellipse(-10,0,this.s/4)
    push()//ity bity
    translate(10,0)
     rotate(this.ro)
    ellipse(10,0,this.s/8)
     ellipse(-10,0,this.s/8)
    pop()
    push()//ity bity
    translate(-10,0)
     rotate(this.ro)
    ellipse(10,0,this.s/8)
     ellipse(-10,0,this.s/8)
    pop()
    pop()
     push()
    translate(-25,0)
    rotate(this.ro)
    ellipse(10,0,this.s/4)
     ellipse(-10,0,this.s/4)
    push()//ity bity
    translate(10,0)
     rotate(this.ro)
    ellipse(10,0,this.s/8)
     ellipse(-10,0,this.s/8)
    pop()
    push()//ity bity
    translate(-10,0)
     rotate(this.ro)
    ellipse(10,0,this.s/8)
     ellipse(-10,0,this.s/8)
    pop()
    pop()
    pop()
  }
  move(){
    this.x+=this.xSped
    this.y+=this.ySped
  }
  borders(){
    if(this.x>width){
      this.xSped=random(-3,-1)
    }
    if(this.x<0){
      this.xSped=random(1,3)
    }
    if(this.y>height){
      this.ySped=random(-3,-1)
    }
    if(this.y<0){
      this.ySped=random(1,3)
    }
  }
  pulse(){
    this.s+=this.pulseSped
    if(this.s>40||this.s<1){
      this.pulseSped*=-1
    }
  }
  colour(){
    this.r+=random(-2,2)
    this.g+=random(-2,2)
    this.b+=random(-2,2)
  }
  rotating(){
    this.ro+=3
  }
}
function mousePressed(){
  ball[ball.length]= new Ball(width/2,50,10)
}
function keyPressed(){
  if(key=='f'){
    let FS = fullscreen();
  fullscreen(!FS);
  }
}
  function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  setup();
}