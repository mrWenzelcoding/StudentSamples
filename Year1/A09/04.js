let tick=0;
let tickSpeed=1;

function setup() {
  createCanvas(500, 500);
  noStroke()
}

function draw() {
  background(220);
  
  
  let i;
  let b;
  
  
  i = -10
  b = 270
  
  tick += tickSpeed
  
  while(i < 50) {
    
    
    if (tick > 250) {
    tickSpeed = -2
  }
  
    if (tick < -1) {
      tickSpeed = 2
    }
    
    fill(tick,10,b)
    rect(i*10+5,0,10,height)
    b-=5
    i++

  }
}