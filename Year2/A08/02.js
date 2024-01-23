let x;
let y;
let mass; 
let g;

function setup() {
  createCanvas(400, 400);
  background(220,220,255);
  rectMode(CENTER)
}

function draw() {
  weightx();
  weighty();
  greenweight();
  
  noStroke();
  
  x = random(0,1)
  y = random(0,1)
  g = random(0,1)
  
  //commented below is just a neat colour variation
  //fill(127,0,greenweight(),63);
  fill(0,greenweight(),127,63);
  circle(weightx(),weighty(),random(8,32))
  

}
//x axis
function weightx() {
  
  if (x > 0.98) {

  return random(350,400);
    
  } else if(x > 0.90) {
    
  return random(300,350);
    
  } else if(x > 0.75) {
    
  return random(250,300);
    
  } else if(x > 0.50) {
  
  return random(200,250);  
    
  } else if(x > 0.25) {
    
  return random(150,200);  
    
  } else if(x > 0.10) {
    
  return random(100,150);
    
  } else if(x > 0.02) {
    
  return random(50,100);  
    
  } else if(x > 0) {
    
  return random(0,50); 
    
  }
}
//y axis
function weighty() {
  
  if (y > 0.98) {

  return random(350,400);
    
  } else if(y > 0.90) {
    
  return random(300,350);
    
  } else if(y > 0.75) {
    
  return random(250,300);
    
  } else if(y > 0.50) {
  
  return random(200,250);  
    
  } else if(y > 0.25) {
    
  return random(150,200);  
    
  } else if(y > 0.10) {
    
  return random(100,150);
    
  } else if(y > 0.02) {
    
  return random(50,100);  
    
  } else if(y > 0) {
    
  return random(0,50); 
    
  }
}
//green colouring
function greenweight() {
  
  if (y > 0.98) {

  return random(0,31);
    
  } else if(y > 0.90) {
    
  return random(31,63);
    
  } else if(y > 0.75) {
    
  return random(63,95);
    
  } else if(y > 0.50) {
  
  return random(95,127);  
    
  } else if(y > 0.25) {
    
  return random(127,159);  
    
  } else if(y > 0.10) {
    
  return random(159,191);
    
  } else if(y > 0.02) {
    
  return random(191,223);  
    
  } else if(y > 0) {
    
  return random(223,255); 
    
  }
}