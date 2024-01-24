let song;
let fft;
let waves;
let x = []
let y = []
let s = [] 
let x2 = []
let y2 = []
let p = []
let xoff = []

function preload(){
  song = loadSound("him.mp3")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  noStroke()
  song.loop()
  fft = new p5.FFT()
  fft.setInput(song)
  for(let i = 0; i < 800; i ++){
    x[i] = width/2
    y[i] = height/2
    x2[i] = random(0,width)
    y2[i] = random(0,height)
    p[i] = random(1,3)
    xoff[i] = random(0,100)
     while(dist(width/2,height/2,x2[i],y2[i])<200){
    x2[i] = random(0,width)
    y2[i] = random(0,height)
  }
  }
}

function draw() {
  background(0);
  waves = fft.analyze();
     for(let i = 0; i < 200; i++){
     fill(255,200)
    circle(x2[i],y2[i],waves[i]/10)
        x2[i] = (1.3-1.7*noise(xoff[i]))*width
    xoff[i]+=0.001
       y2[i]+=p[i]
       if(y2[i]>height){
      y2[i]=0
     x2[i] = (1.3-1.7*noise(xoff[i]))*width
    xoff[i]+=0.001
       }
     }
  for(let i = 0; i < 800; i++){
    fill('green')
    circle(width/2,height/2,waves[i])
   }
  
  for(let i = 0; i < 800; i ++){
    fill('white')
    ellipse(i*2,height,2,-1*waves[i]*2) 
  }
}
function mousePressed(){
  if (mouseX > 0 && mouseX < windowWidth && mouseY > 0 && mouseY < windowHeight) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}
function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
