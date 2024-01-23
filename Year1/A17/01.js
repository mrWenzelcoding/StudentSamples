let img;
let pix;
let t;
function preload(){
  img = loadImage("assets/BobRoss.jpeg")
}

function setup() {
  createCanvas(img.width, img.height);
  image(img,0,0)
  noStroke()
  t = 1000
}

function draw() {
  //background(220);
  for(let i = 0; i < t; i++){

  let x = random(width)

  let y = random(0,height)

  pix = get(x,y)

  fill(pix)

  circle(x,y,5)

  }
  t-=2

  console.log(t)

  

  if(t==0){

    noLoop()
}
}