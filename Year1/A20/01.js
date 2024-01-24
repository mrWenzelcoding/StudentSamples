let song;
let img
let waves = []
function preload(){
  song = loadSound('assets/BestTime.mp3')
  img = loadImage('assets/wallpaper.jpg')
}
function setup() {
  imageMode(CENTER)
  rectMode(CENTER)
  createCanvas(windowWidth, windowHeight);
  
  song.play()
  fft = new p5.FFT()
  fft.setInput(song) 
}

function draw() {
  //background(0);
    image(img, width/2, height/2,width,0.56*width)
  waves = fft.analyze()
  loadPixels()

for(let i = 0; i < pixels.length; i +=4){
  if(pixels[i] > 220 && pixels[i+1] > 100 && pixels[i+1] < 255 && pixels[i+2] < 100 ) {
      pixels[i] = waves[0]

  } else if(pixels[i] > 100 && pixels[i+1] > 0 && pixels[i+2] < 150 ){
  pixels[i] = waves[500]
  
}else if(pixels[i] < 30 ){

  pixels[i+2]=2*waves[350]
}
}
updatePixels();

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
  