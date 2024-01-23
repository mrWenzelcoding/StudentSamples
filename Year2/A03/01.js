let xoff = []
let yoff = []
let s = []
let x = []
let y = []
function setup() {
  createCanvas(1000, 1000);
  for(let i = 0;i<25;i++) {
    xoff.push(random(1000))
    yoff.push(random(1000))
    x.push(0)
    y.push(0)
  }
}

function draw() {
 background(0);
  noStroke()
  for(let i = 0;i<25;i++){
  x[i] = map(noise(xoff[i]),0,1,0,width)
  y[i] = map(noise(yoff[i]),0,1,0,height)
  xoff[i] += random(0.005,0.007)
  yoff[i] += random(0.005,0.007)
    
     for(let j = 0; j<90;j++){
  fill(255,255,255,255/(j*2.7))
  circle(x[i],y[i],j+0.01)
    }
  }
 
 
 
  
  
  
  
  
}
  