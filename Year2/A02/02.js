let x =[];
let y= [];
let r = [];
let g =[];
let b = [];
let a = [];
let s = [];

function setup() {
  noStroke()
  createCanvas(1000, 1000);
  for(i=0;i<200;i++){
    x[i] = random(0,800)
    y[i] = random(0,800)
    a[i] = random(0,255)
    r[i] = random(100,255)
    g[i] = random(0,100)
    b[i] = random(100,255)
    s[i] = random(0,100)
  }
}

function restart(){
  x[i] = random(0,800)
  y[i] = random(0,800)
  a[i] = 255
  s[i] = random(10,100)
}
function life(){
  a[i]-=1
}
function shake(){
  x[i]+=random(-2,2)
  y[i]+=random(-2,2)
}

function draw() {
  i=0
  while(i<200){
  fill(r[i],g[i],b[i],a[i])
   life()
    if(a[i]<5){
      restart()
    }
    shake()
  circle(x[i],y[i],s[i])
  i++
  }
}