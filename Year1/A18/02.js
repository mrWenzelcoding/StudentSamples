//Variable
let star
let px=[]
let py=[]
let c=[]
let ps=[]

function preload(){
  
  //Load image
  star=loadImage("assets/Star.png")
  
}

function setup() {
  //Image
  createCanvas(star.width, star.height);
  image(star,0,0,star.width,star.height)
  noStroke()
  rectMode(CENTER)
  
  
  //Pixel load
  loadPixels();
  
  //pix
  for(let i=0; i<600; i++){
  ps[i]=1
  px[i]=random(width)
  py[i]=random(height)
}
}

function draw() {
  //pixel select
  for(let i=0; i<600; i++){
  c[i]=get(px[i],py[i])
  fill(c[i])
  ps[i]+=1
  rect(px[i],py[i],ps[i])
  
    if(ps[i]>20){
  ps[i]=1
  px[i]=random(width)
  py[i]=random(height)
  }
  }
}