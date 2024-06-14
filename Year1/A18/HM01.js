let img;
let img2;
let canvas2
let x=[]
let y=[]
let size;
function preload(){
 // img=loadImage("bear.jpg")
  img2=loadImage('assets/banksy.jpg')
}


function setup() {
  createCanvas(img2.width,img2.height);
  image(img2,0,0,img2.width,img2.height)
  loadPixels()
  
  for(i=0;i<6000; i++){
    x[i]=int(random(width))
    y[i]=int(random(height))
  }
  size=5
 

}

function draw() {
  for(i=0; i<6000;i++){
    noStroke()
  c=get(x[i],y[i])
    fill(c)
  //erase(c)
  rect(x[i],y[i],size,size)
    y[i]++
    x[i]++
    //noErase()
  }
 
  //updatePixels()
}
