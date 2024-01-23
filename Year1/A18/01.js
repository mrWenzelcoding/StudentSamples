let img;
let r = [0,0,0,0,0,0,0,0,0,0];
let x = [0,0,0,0,0,0,0,0,0,0];
let y = [0,0,0,0,0,0,0,0,0,0];
function preload(){
  img = loadImage("assets/dirtbike.jpg")
  pixelDensity(1)
}
function setup() {
  createCanvas(img.width,img.height);
  image(img,0,0,img.width/1.5,img.height/1.5)
  loadPixels();
  for(let j = 0;j<200;j++){
   x[j] = random(0,img.width)
  }
  for(let i = 0;i<200;i++){
  y[i] = random(0,img.height)
  }
  for(let c = 0;c<200;c++){
   r[c] = get(x[c],y[c]);
  }
  background("black")
}

function draw() {
  noStroke()
  for(let i = 0;i<200;i++){
    if(x[i]>img.width||x[i]<0||y[i]>img.height||y[i]<0){
    x[i] = random(0,img.width/1.5)
    y[i] = random(0,img.height/1.5)
    }
  r[i] = img.get(x[i],y[i])
  fill(r[i]);
  circle(x[i],y[i],1);
  x[i] = x[i] + random(-5,5)
  y[i] = y[i] + random(-5,5)
  }
i = 0
}