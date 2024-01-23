let desert
let pic=[]
let size=[]
let x=[]
let y=[]

function preload(){ desert=loadImage("assets/il_1080xN.3108270269_kz25.avif")
}

function setup() {
  createCanvas(510,396);
  image(desert,0,0,540,426)
  
  for(let i=0;i<1000;i++){
  size[i]=3
  x[i]=random(width)
  y[i]=random(height)
  pic[i]=get(x[i],y[i])
  }
  noStroke()
}

function draw() {
 
  for(let i=0;i<1000;i++){
     if(size[i]<0){
    x[i]=random(width)
    y[i]=random(height)
    size[i]=3
    pic[i]=get(x[i],y[i])
}
  fill(pic[i])
  circle(x[i],y[i],size[i])
  size[i]-=random(-0.5,1)
  y[i]++
  }
}