let x
let ysped
let y
let apex
let t
function setup() {
  createCanvas(600, 800);
  background(1);
  noStroke()
  x=width/2
  y=0
  ysped=5
  xsped=5
  apex=-10
  t=0
}

function draw() {
  background(1,30);
  
  //speed
  y=y+ysped
  //x=x+xsped
  
  //Color
  fill(ysped*10,xsped*10,100)

  //Ball
  circle(x,y,10)
  //ms
  ysped=ysped+0.3
  t=t+0.01
  
  //apex
  fill("white")
  rect(width/2, apex, 40, 3)
  
  //show apex
  if(ysped>0 && ysped<1){
  apex=y
  }
  
  
  //Ground check
  if(y>705){
    y=705
    ysped=(ysped*-1)*(0.9)
    if(t>18){
      background(1);
      
      circle(x,y,10)
      fill("white")
  rect(width/2, apex, 40, 3)
      noLoop();
    }
    
  }
  
  //Wall Right Check
  if(x>605)
    xsped=random((10)+2)*-1
  
  //Wall Left Check
  if(x<-5)
    xsped=random(10)+2
}