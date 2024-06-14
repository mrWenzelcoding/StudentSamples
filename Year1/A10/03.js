let x1,x2,y1,y2;
let cx,cy;
let s=0;
let w=5;
let r=177,g=173,b=172;
let f
function setup() {
  createCanvas(400, 400);
  background(127)
  x1=random(width)
  y1=random(height)
  f=width/2
//the great damn
}

function draw()
{ strokeWeight(0)
  fill(255)
      rect(0,0,width,height/8)
 
  fill("blue")
   rect(0,0,f,height/8)
    fill(0)
   strokeWeight(5)
      line(
    f,
    0,
    f,
    height/8-3
  );fill(0)
      
  
    if (mouseY > 0 && mouseY < height / 8) {
      f = mouseX
      s = (mouseX / width) * 20
      
    }
  strokeWeight(0)
  fill(0)
    circle(x1,y1,w*2)
 
}//sider var in "i<(1)" do it
function mousePressed(){if(mouseY){}
  for(let i=0;i<s;i++)
  {
  
  x2=x1
  y2=y1 
  x1=random(width)
  y1=random(height/8,height)
  r=random(-10,10)+r
  g=random(-10,10)+g
  b=random(-10,10)+b
  w =random(-1,1)+w
  strokeWeight(w)
  stroke(r,g,b)
  line(x1,y1,x2,y2)
  
  
    
  } }
