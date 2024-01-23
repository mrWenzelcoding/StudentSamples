function setup() {
  createCanvas(400, 400);
  sx2=random(5, 395);
  sx1=random(5, 395);
  sx=random(5, 395);
  sy2=random(5, 395);
  sy1=random(5, 395);
  sy=random(5, 395);
}
let sx1=0;
let sx2=0;
let sx=0;
let sy1=0;
let sy2=0;
let sy=0
let m=0;
let t=0;
let co=0
let cospeed=1
let c=120
let c1=0
let c2=0



function draw() {
   co=co+cospeed
  background(c1,c2,c);
  fill("red");
  text('$' +m, 300, 20);           
  fill("blue");
  rect(sx, sy, 10, 10);
  fill("red");
  rect(sx1, sy1, 12, 12);
  fill("green");
  rect(sx2, sy2, 15, 15);
  //timer
  fill("red")
  cospeed = 0.03
  text(co, 20, 20)
  if(co >= 30){
    c=100
    c1=100
    c2=100
  }
//move
  t=t+1
  if(t % 60 == 0){
    sy=random(5,395);
    sx=random(5,395);
  }
  if(t % 120 == 0){
    sy1=random(5,395);
    sx1=random(5,395);
  }
  if(t % 150 == 0){
    sy2=random(5,395);
    sx2=random(5,395);
  }
if(cospeed <=30){
  co=0
  cospeed=0
}
}

function mousePressed(){
  if(mouseX > sx && mouseX < sx+10 && mouseY > sy && mouseY < sy+10){
     sx=random(5,395);
    sy=random(5,395);
    m+=5
  }
  if(mouseX > sx1 && mouseX < sx1+12 && mouseY > sy1 && mouseY < sy1+12){
     sx1=random(5, 395)
    sy1=random(5, 395)
    m+=3
  }
  if(mouseX > sx2 && mouseX < sx2+15 && mouseY > sy2 && mouseY < sy2+15){
     sx2=random(5, 395)
    sy2=random(5, 395)
    m+=1
  }
}
