let ball=[]

function setup() {
  createCanvas(1000, 1000);
  noStroke()
  
  for(let i=0; i<5; i++){
    ball[i]= new Ball(random(width),random(height)) 
  }
}

function draw() {
  background(0,0,0,60);
  
  for(let i=0; i<ball.length; i++){
  ball[i].show()
  ball[i].move()
  ball[i].bounce()  
  
  }
}

class Ball{
  constructor(_x,_y){
    this.x=_x
    this.y=_y
    this.size=400
    this.xSpeed=3
    this.ySpeed=3
    this.r=143
    this.g=4
    this.b=4
   
  }
  show(){
    fill(this.r,this.g,this.b)
    circle(this.x,this.y,this.size)
  }
  shrink(){
   this.size/=2
    
  }
  move(){
  this.x+=this.xSpeed
  this.y+=this.ySpeed
  }
  bounce(){
    if(this.x<=0 || this.x>=width){
    this.xSpeed*=-1
  }
  if(this.y<=0 || this.y>=height){
    this.ySpeed*=-1
  }
  }
}

function mousePressed(){
  for(let i=0; i<ball.length; i++){
    if(dist(mouseX,mouseY,ball[i].x,ball[i].y)<ball[i].size*0.5){
      //Shrink and Speed Change
      ball[i].shrink()
      ball[i].xSpeed*=1.5
      ball[i].ySpeed*=1.5
      
      //Color Change
      ball[i].g+=50
      ball[i].b+=50
      
      //Make New Ball
      ball[ball.length]=new Ball(ball[i].x,ball[i].y)
      
      ball[ball.length-1].xSpeed=ball[i].xSpeed*-1
      ball[ball.length-1].ySpeed=ball[i].ySpeed*-1
      ball[ball.length-1].size=ball[i].size
      
      ball[ball.length-1].g=ball[i].g
      ball[ball.length-1].b=ball[i].b
      
      //MORE COLOR!!!!!!!!!!
      
      if(ball[i].size<=100){
      ball[ball.length-1].r=186
      ball[ball.length-1].g=60
      ball[ball.length-1].b=240
      ball[i].r=186
      ball[i].g=60
      ball[i].b=240
    }
      if(ball[i].size<=50){
      ball[ball.length-1].r=237
      ball[ball.length-1].g=128
      ball[ball.length-1].b=230
      ball[i].r=237
      ball[i].g=128
      ball[i].b=230
      }
            if(ball[i].size<=25){
      ball[ball.length-1].r=245
      ball[ball.length-1].g=223
      ball[ball.length-1].b=243
      ball[i].r=245
      ball[i].g=223
      ball[i].b=243
      }
  
      break
   }
  }  
}
