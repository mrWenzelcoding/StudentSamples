let ball=[]
let n
let gravValues=[-1,1]
let mode =1
let newBall
let x,y,xSped,ySped
function setup() {
  createCanvas(windowWidth, windowHeight);
  n=1
  x=width/2
  y=height/2
  xSped=3
  ySped=3
  noStroke()
   noCursor()
  
}
function draw() {
  background(0,50);
  if(mode==1){
      newBall={
    x:mouseX,
    y:mouseY,
    s:random(5,20),
    xSped:random(-3,3),
    ySped:random(-3,3),
    r:random(100),
    g:random(150,255),
    b:random(200,255),
    grav:random(gravValues),
    time:0
  }
  }else if(mode==2){
    newBall={
    x:width/2,
    y:height/2,
    s:random(5,20),
    xSped:random(-3,3),
    ySped:random(-3,3),
    r:random(100),
    g:random(150,255),
    b:random(200,255),
    grav:random(gravValues),
    time:0
  } 
  }else if(mode==3){
    newBall={
    x:x,
    y:y,
    s:random(5,20),
    xSped:random(-3,3),
    ySped:random(-3,3),
    r:random(100),
    g:random(150,255),
    b:random(200,255),
    grav:random(gravValues),
    time:0
  }
  }else if(mode==4){
     newBall={
    x:mouseX,
    y:mouseY,
    s:random(5,20),
    xSped:random(-3,3),
    ySped:random(-3,3),
    r:random(100),
    g:random(150,255),
    b:random(200,255),
    grav:random(gravValues),
    time:0
  }
  
    x+=xSped
    if(x>width||x<0){
      xSped*=-1
    }
  }else if(mode==5){
     newBall={
    x:width/2,
    y:height/2,
    s:random(5,20),
    xSped:random(-3,3),
    ySped:random(-3,3),
    r:random(100),
    g:random(150,255),
    b:random(200,255),
    grav:random(gravValues),
    time:0
  }
  
    x+=xSped
    if(x>width||x<0){
      xSped*=-1
    }
  }
  ball.push(newBall)
  if(mode==4||mode==5||mode==6){
    for(let i =0;i<n;i++){
    fill(ball[i].r,ball[i].g,ball[i].b)
    ellipse(ball[i].x,ball[i].y,ball[i].s)
    ball[i].x+=ball[i].xSped
    ball[i].y+=ball[i].ySped
    ball[i].xSped+=ball[i].grav
    ball[i].time++
    if(ball[i].x<ball[i].s/2||ball[i].x>width-ball[i].s/2){
      ball[i].xSped*=-0.7
    }
    if(ball[i].time>240){
      ball[i].ySped*=-1
      if(ball[i].grav<0){
        ball[i].xSped=ball[i].s/1.5
      }else{
        ball[i].xSped=-ball[i].s/1.5
      }
      
    }
  }//
  }else{
  for(let i =0;i<n;i++){
    fill(ball[i].r,ball[i].g,ball[i].b)
    ellipse(ball[i].x,ball[i].y,ball[i].s)
    ball[i].x+=ball[i].xSped
    ball[i].y+=ball[i].ySped
    ball[i].ySped+=ball[i].grav
    ball[i].time++
    if(ball[i].y<ball[i].s/2||ball[i].y>height-ball[i].s/2){
      ball[i].ySped*=-0.7
    }
    if(ball[i].time>240){
      ball[i].xSped*=-1
      if(ball[i].grav<0){
        ball[i].ySped=ball[i].s/1.5
      }else{
        ball[i].ySped=-ball[i].s/1.5
      }
      
    }
  }//
  }
  n++
  if(ball.length>1000){
    ball.shift()
    n--
  }
}
function mousePressed() {
  let FS = fullscreen();
  fullscreen(!FS);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  if(mode==3){
    y=windowHeight/2
  }
}
function keyPressed(){
  if(key=='1'){
    mode=1
  }
  if(key=='2'){
    mode=2
  }
  if(key=='3'){
    mode=3
  }
  if(key=='4'){
    mode=4
  }
  if(key=='5'){
    mode=5
  }
  
}