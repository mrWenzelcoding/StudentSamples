let img;

function preload(){
  img = loadImage("assets/space3.jpeg")
}

function setup() {
  createCanvas(img.width, img.height);
  image(img,0,0)
  
  loadPixels()
  for(let i=0;i < pixels.length; i+=4){
    pixels[i] = 255 - pixels[i]
     pixels[i+1] = 255 - pixels[i+1]
     pixels[i+2] = 255 - pixels[i+2]
  }
  updatePixels()
  
}
