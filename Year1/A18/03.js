let canvas2

function preload(){
  img = loadImage("assets/Header-44.png")
  img2 = loadImage("assets/Testing.jpeg")
}

function setup() {
  createCanvas(img.width, img.height);
  canvas2 = createGraphics(img.width,img.height)


  
  canvas2.image(img,0,0)


}

function draw() {
  image(img,0,0)
  loadPixels()
  
  for(let i = 0; i< pixels.length;i+=4){
  pixels[i] = 255 - pixels[i]
  pixels[i+1] = 255 - pixels[i+1]
  pixels[i+2] = 255 - pixels[i+2]
  }
  updatePixels()
  
  image(canvas2,0,0)
  
}

function mouseDragged(){
   canvas2.erase()
canvas2.circle(mouseX,mouseY,50)
canvas2.noErase()
}
