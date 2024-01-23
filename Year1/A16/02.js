let img
function preload(){
 img = loadImage("mush.jpg")
  pixelDensity(1);
}

function setup() {
  createCanvas(img.width,img.height);
  image(img,0,0)
  loadPixels();
  
  for(let i =0; i<pixels.length; i+=4){
   
    //if(pixels[i] < 10 && pixels[i+1] >10 && pixels[i+2] > 10){
    
   // let test = 0
    //test = (pixels[i]+pixels[i+1]+pixels[i+2]/2)
    
    pixels[i]= 255 - pixels[i]
    pixels[i+1]= 255 - pixels[i+1]
      pixels[i+2]= 255 - pixels[i+2]
    
 // }
   
}
  updatePixels()
 //saveCanvas("popmush","png")
}