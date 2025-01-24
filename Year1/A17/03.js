let img
let p
let time
let x=[]
let y=[]

function preload(){
  img = loadImage("assets/pic.png")
}

function setup() {
  createCanvas(img.width,img.height);
  noStroke()
  time = 2500
  image(img,0,0)
}

function draw() {
  
  for(let i = 0; i < time; i++){
  
  x[i] = random(width)
  y[i] = random(0,height)
  p = get(x[i],y[i])
  fill(p[0],p[1],p[2],20)
  circle(x[i],y[i],10)
  }
  time-=2
  
  if(time==0){
    noLoop()
  }
}