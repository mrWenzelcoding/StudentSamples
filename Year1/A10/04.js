let sS,x,y,x2,y2,w,r,g,b,rR,gG,bB;
function setup() {
  sS=windowHeight
  createCanvas(400, 400);
   background(0)
}

function mousePressed() {
background(0)
  w=random(255)
  strokeWeight(4)
    stroke(r,g,b)
    r=random(255)
    g=random(255)
    b=random(255)
  for(let i = 0; i<10000; i++){
rR=random(255)
    bB=random(255)
    gG=random(255)
    if(rR>r*0.8 && rR<r*1.2 && gG>g*0.8 && gG<g*1.2 && bB>b*0.8 && bB<b*1.2){
      stroke(rR,gG,bB)
    x=random(sS)
    y=random(sS)
    y2=random(sS)
    x2=random(sS)
    line(x,y,x,y2)
    line(x2,y2,x,y2)
    
    
    }
    
    
  }
  
}