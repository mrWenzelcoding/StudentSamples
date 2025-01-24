//declaration of image existance
let img
//declaration of song and song elements existance
let song
let fft
let waves
//preload function
function preload(){
//load the image
  img=loadImage("assets/cassette.jpg")
//load the song
  song = loadSound("assets/music.mp3")
}
//setup function
function setup() {
//canvas
  createCanvas(img.width, img.height);
//play song
  song.play()
//visualize the song
  fft = new p5.FFT()
//connect audio to things
  fft.setInput(song)
}
//draw function
function draw() {
//image
  image(img,0,0)
//load pixels
  loadPixels()
//waves
  waves = fft.analyze()
//for loop for pixels
  for(let i = 0; i<pixels.length; i+=4){
//red
    //pixels[i] = (waves[0] +pixels[i])
//green
    pixels[i+1] = (waves[0] +pixels[i])
//blue
    pixels[i+2] = (waves[0] +pixels[i])
//transparency
    pixels[i+3] = (waves[600] +pixels[i])
  }
  
  updatePixels()
}