let balls=[]
let numofballs
function setup() {
  createCanvas(800, 800);
  numofballs=5;
  colorMode(HSB,360,100,100,100)
  noStroke()
  for(let i=0;i<numofballs;i++){
  balls[i]=new Ball(200,200,100,random(20,90),random(20,90),random(360))
}
}
function draw() {
  background("black");
  for(let i=0;i<balls.length;i++){
     balls[i].glowbright()
    balls[i].glowmid()
    balls[i].glowdim()
  balls[i].show()  
  balls[i].move()
  balls[i].bounce()
   
  }
  if(keyIsPressed){
    noLoop()
  }
}
function mousePressed(){
  for(let i=0;i<balls.length;i++){
    if (dist(mouseX,mouseY,balls[i].x,balls[i].y) < balls[i].s/2){
      balls[i].half()
      balls[balls.length]=new          Ball(balls[i].x,balls[i].y,balls[i].s,balls[i].xspeed*-random(-1),balls[i].yspeed*-1,random(360))
break
  }
    }
}
class Ball{
 constructor(_x,_y,_s,_xspeed,_yspeed,_color){
  this.x=_x
  this.y=_y
  this.s=_s
   this.xspeed=_xspeed
   this.yspeed=_yspeed
this.Color=_color
 }
 show(){
   fill(this.Color,100,100)
 circle(this.x,this.y,this.s)   
 } 
half(){
    this.s=this.s/2
}
  move() {
    this.x += this.xspeed/this.s;
    this.y += this.yspeed/this.s;
   
  }
  bounce() {
    if (this.x >= width - this.s / 2 || this.x <= 0 + this.s / 2) {
      this.xspeed = this.xspeed * -1;
      
    }
    if (this.y >= height - this.s / 2 || this.y <= this.s / 2) {
      this.yspeed = this.yspeed * -1;
       
    }
  } 
  glowbright(){
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowBlur = 1;
  drawingContext.shadowColor = color(this.Color,100,100);  
  }
  glowmid(){
    drawingContext.shadowColor = color(this.Color,100,100);
  drawingContext.shadowBlur = 2;
  }
  glowdim(){
  drawingContext.shadowColor = color(this.Color,100,100);
  drawingContext.shadowBlur = 40  
   
    
    
  }
  
}
