let img
let song
let waves
let fft
let J
let RV

function preload(){
img = loadImage("assets/mountSpace.avif")
song = loadSound("assets/nightRider.mp3")
fft = new p5.FFT()

}
function setup() {
 // song.play() 
  createCanvas(img.width,img.height);
  J = 1.5
  RV = 1.35
}

function draw() {
  image(img,0,0,windowWidth,windowHeight)
  loadPixels()
  waves = fft.analyze()
  
  for(let i = 0; i<pixels.length; i+=4){
    pixels[i] = waves[50]*pixels[i]/255*RV
    pixels[i+1] = waves[120]*pixels[i+1]/255*J
    pixels[i+2] = waves[400]*pixels[i+2]/255*J
    
  }
  J+= random(-0.01,0.01)
  RV+= random(-0.01,0.01)
  updatePixels()
  
}
function mousePressed() {

  if(song.isPlaying()){
  song.pause()
  }
  else{
    song.play()
  }
  if (mouseX > 0 && mouseX < windowWidth && mouseY > 0 && mouseY < windowHeight) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}

