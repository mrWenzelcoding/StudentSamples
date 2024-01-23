let x = []
let x1 = []
let x2 = []
let y = []
let y1 = []
let y2 = []
let xSpeed = []
let ySpeed = []
let c = []
let cSpeed = []
let rgb = []
let img;
/*
var gif_loadImg, gif_createImg;

function preload() {
  gif_loadImg = loadImage("tt.gif");
  gif_createImg = createImg("tt.gif");
}

*/

function setup() {
  createCanvas(400,400);
  strokeWeight(5)
   img = loadImage("tt.jpeg")
  
  
  for(let i = 0; i<50; i++){
    x[i] = width/2
    y[i] = height/2
    x1[i] = width*.45
    y1[i] = height*.45
    x2[i] = width*.40
    y2[i] = height*.40
    xSpeed[i] = random(-5,5)
    ySpeed[i] = random(-5,5)
    c[i] = random(0,255)
    cSpeed[i] = random(-3,3)
    rgb[i] = random(0,255)
  }
}

function draw() {
  background(20,);
  
  //image(img,0,0,width,height)
  
  //image(gif_loadImg, 50, 50);
  
  //gif_createImg.position(50,350);
  
  for(let i = 0;i<40; i++){
     stroke(rgb[i],rgb[i],rgb[i])
    fill(10,c[i],c[i])
    triangle(x[i],y[i],x1[i],y1[i],x2[i],y2[i]);
    x[i] += xSpeed[i]
    y[i] += ySpeed[i]
    c[i] += cSpeed[i]
    
    if(x[i] < 0 || x[i] > width) {
      xSpeed[i] *= -1
    }
    
    if(y[i] < 0 || y[i] > height) {
      ySpeed[i] *= -1
    }
    
    if(c[i] < 0 || c[i] > 255){
      cSpeed[i] *= -1
    }
  } 
}