let x = []
let y = []
let size = []
let a = []
let xOff = []
let yOff = []
let sOff = []
let r = []
let g = []
let b = []

function setup() {
  createCanvas(600, 600);
  
  noStroke()
  
  for(let i = 0; i < 20; i++){
    x[i] = 0
    y[i] = 0
    xOff[i] = random(-20,20)
    yOff[i] = random(-20,20)
    sOff[i] = random(-5, 5)
  
    size[i] = 5
    
    a[i] = 255
    
    r[i] = random(255)
    g[i] = random(125)
    b[i] = random(15)
  }
  
  
  
}

function draw() {
  background(0);
  
  for(let i = 0; i < 20; i++){
    
    for(let j = 0; j < 90; j++){
      fill(r[i], g[i], b[i], a[i]/size[i]-j*5)
      ellipse(x[i], y[i], size[i]+(j*5)*noise(sOff[i]))
    }
    
    sOff[i] +=  0.03+random(0,0.01)
    
    x[i] = noise(xOff[i])*width
    xOff[i] += 0.002+random(0,0.005)
    y[i] = noise(yOff[i])*height
    yOff[i] += 0.002+random(0,0.005)
    
    x[i] = map(x[i], 0, width, -100, width+100)
    y[i] = map(y[i], 0, height, -100, height+100)
      
  }
  
  
}

function mouseClicked(){
  if(mouseClicked){
    for(let i = 0; i < 20; i++){
      x[i] = 0
      y[i] = 0
      xOff[i] = random(-20,20)
      yOff[i] = random(-20,20)
      sOff[i] = random(-1, 1)

      size[i] = 5

      a[i] = 255

      r[i] = random(255)
      g[i] = random(125)
      b[i] = random(15)
    }
  }
}