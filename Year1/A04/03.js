let xSpeed;
let ySpeed;
let x2Speed;
let y2Speed;
let x3Speed;
let y3Speed;
let x, y;
let x2, y2;
let x3, y3;
let shade;
let checker;
let r
let g
let b

  function setup() {
  createCanvas(500, 500);
  noStroke();
  xSpeed=random(-10,10)
  ySpeed=random(-10,10)
  x=random(width);
  y=random(height);
  shade=100;
  checker = false;
    
    r=255
    g=255
    b=255
    
  x2Speed=random(-10,10)
  y2Speed=random(-10,10)
  x2=random(width);
  y2=random(height);
  shade=100;
  checker = false;
    r=255
    g=255
    b=255
        
  x3Speed=random(-10,10)
  y3Speed=random(-10,10)
  x3=random(width);
  y3=random(height);
  shade=100;
  checker = false;
    r=255
    g=255
    b=255
}

function draw() {
  background(0,0,0,0);
  
  //red
  fill(r,0,0)
  ellipse(x, y, 5)
  x+=xSpeed
  y+=ySpeed
  xSpeed=random(-10,10)
  ySpeed=random(-10,10)
  
  r-= 3
  g-= 3
  b-= 3

  if (r < 2){
    r=200
  }
  
  if (x >= 500){
    x=random(width) 
  }
  if (y >= 500){
    y=random(height) 
  }
  if (x <= 0){
    x=random(width) 
  }
  if (y <= 0){
    y=random(height) 
  }
  
  //green
  fill(0,g,0)
  ellipse(x2, y2, 5)
  x2+=x2Speed
  y2+=y2Speed
  x2Speed=random(-10,10)
  y2Speed=random(-10,10)
  

  if (g < 2){
    g=200
  }
  
  if (x2 >= 500){
    x2=random(width) 
  }
  if (y2 >= 500){
    y2=random(height) 
  }
  if (x2 <= 0){
    x2=random(width) 
  }
  if (y2 <= 0){
    y2=random(height) 
  }
  
  //blue
  fill(0,0,b)
  ellipse(x3, y3, 5)
  x3+=x3Speed
  y3+=y3Speed
  x3Speed=random(-10,10)
  y3Speed=random(-10,10)
 

  if (b < 2){
    b=200
  }
  
  if (x3 >= 500){
    x3=random(width) 
  }
  if (y3 >= 500){
    y3=random(height) 
  }
  if (x3 <= 0){
    x3=random(width) 
  }
  if (y3 <= 0){
    y3=random(height) 
  }
}