let x=[];
let y=[];
let xspeed=[];
let yspeed=[];
let i=0;
let size=[]
let counter;
let xOff = []
let timer;
let c;
let c1, c2,c3;



function setup() {
  createCanvas(400, 400);
  noStroke()
  fill(255)
for(let i=0;i<100;i++){
  x[i]=random(0,400)
  y[i]=random(0,400)
  size[i]=random(0,10)
  xOff[i]=random(-100,100)
}
  counter=0
   timer=10
  c=255,255,255
  c1=230
  c2=230
  c3=250
}

function draw() {
  background(c1,c2,c3);
  //scenery
  //road
  push()
  fill(255)
  rect(0,333,400,400)
  fill(250,235,215)
  quad(181,401,290,400,230,333,140,333)
  //fence
  fill(205,92,92)
  rect(0,300,400,15)
  rect(18,290,15,43)
  rect(65,290,15,43)
  rect(113,290,15,43)
  rect(160,290,15,43)
  rect(210,290,15,43)
  rect(260,290,15,43)
  pop()
  push()
  //house
  stroke(94, 72, 72)
fill(188,143,143)
quad(400,400,400,295,288,277,288,332)
 fill(118, 89, 89) 
quad(400,310,344,223,344,223,288,277)
triangle(400,310,400,225,343,223)
  line(360,224,400,283)
  line(380,224,400,252)
//   line(344,223,310,283)
//   line(344,223,361,297)
quad(339,362,320,351,320,308,339,314)
fill(0)
ellipse(323,334,4,5)
  //window
  fill(245,255,250)
  quad(384,360,384,336,357,326,357,347)
  line(384,348,357,337)
  line(369,331,369,352)
  quad(310,333,310,311,295,305,295,325)
  line(309,322,295,315)
  line(301,308,301,328)
  
pop() 
  
  
  
  
  
  fill(c)
  rect(0,height-counter,400,height)
  noStroke()
  fill(c)
for(let i=0;i<100;i++){
 circle(x[i],y[i],size[i])

y[i]+=size[i]/3
  if(y[i]>height){
   y[i]=0
  y[i]+=size[i]/3
  }
  x[i] = noise(xOff[i])*width
  x[i]=map(x[i],0,width,-200,600)
  xOff[i] +=.001         
} 


counter+=.10
text(timer,0,400)
 if (frameCount % 60 == 0 && timer > 0){timer --;}
    if(timer==0){ 
c-=.1
c1-=.1
c2-=.1
c3-=.1

 }




}


