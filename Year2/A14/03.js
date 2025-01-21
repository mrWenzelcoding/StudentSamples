
let ball=[]
let count=1
function setup() {
  createCanvas(600, 600);
  noStroke()
  frameRate(60)
  background(0)
  for(let i =0;i<count;i++){
  ball[i]=new Ball_O(width/2,height/2,random(-1,1),random(-1,1),200,5)
  }
}

function draw() {
  background(0,0,20);
  for(let i =0;i<ball.length;i++){
  ball[i].display();
  ball[i].movement()
  }
}

class Ball_O{
  constructor(x,y,xSpeed,ySpeed,r,m){
    this.T=0
    this.x=x
    this.y=y
    this.xSpeed=xSpeed
    this.ySpeed=ySpeed
    this.r=r
    this.m=m
    this.px=m*xSpeed
    this.py=m*ySpeed
    this.cansplit=false
    this.energyX= (0.5)*this.m*pow(this.xSpeed,2)
    this.energyY= (0.5)*this.m*pow(this.ySpeed,2)
  }
  display(){
    fill(90,120,235,180+(this.r-(this.T)*3))
    for(let j=0;j<10;j++){
    circle(this.x,this.y,this.r+this.T-(j*this.r)/10)
    }
    this.T+=1
    fill(255)
    circle(this.x,this.y,this.r)
  }
  movement(){
    this.x+=this.xSpeed
    this.y+=this.ySpeed
    if(this.x<=this.r/2 || this.x>=width-(this.r/2)){
      this.xSpeed*=-1
    }
        if(this.y<=this.r/2 || this.y>=height-(this.r/2)){
      this.ySpeed*=-1
    }
  }
  breaking(){
    if(dist(mouseX,mouseY,this.x,this.y)<this.r/2){
      this.r/=2
      this.m/=2
      this.xSpeed=random(-this.xSpeed*2,this.xSpeed*2)
      this.ySpeed=random(-this.ySpeed*2,this.ySpeed*2)
      //this.addnewball()
      this.check()
      this.T=0
      
    }
  }
    check(){
      this.cansplit=true
    }
  addnewball(){
    let x=this.x
    let y=this.y
    let r=this.r
    let xSpeed=((this.px)-(this.xSpeed*this.m))/this.m
    let ySpeed=((this.py)-(this.ySpeed*this.m))/this.m
    this.px=this.xSpeed*this.m
    this.py=this.ySpeed*this.m
    let m=this.m
    this.cansplit=false
    return new Ball_O(x,y,xSpeed,ySpeed,r,m)
  }
}
function mousePressed(){
  for(let i =0;i<ball.length;i++){
    ball[i].breaking()
    if(ball[i].cansplit==true){
      ball.push(ball[i].addnewball())
    }
  }
}