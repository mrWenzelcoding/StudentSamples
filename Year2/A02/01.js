let x = []
let y = []
let big = []
let r = []
let g = []
let b = []
let t = []
let i = 0
let tr = []

function setup() {
  createCanvas(600, 600);
  noStroke()
  
  for(let i = 0;i<250;i++){
  x.push(random(0,600));
  y.push(random(0,600));
  big.push(random(20,70));
  r.push(random(0,10));
  g.push(random(0,10));
  b.push(random(100,255));
  t.push(random(1,255))
  tr.push(random(-2,-50))
  }
  
  
}

function draw() {
  background("#03A9F4");
  display();
  shimmy();
  lifespan();
  
}

function display(){
for(let i = 0;i<250;i++){
  fill(r[i],g[i],b[i],t[i])
  circle(x[i],y[i],big[i])
}  
 } 

function shimmy(){
  for(let i=0;i<250;i++){
  x[i] += random(5,-5)
  y[i] += random(5,-5)
  }
}

function lifespan(){
  for(let i=0;i<250;i++){
      t[i] -= 1.5
    if(t[i]<=tr[i]){
  t[i]=255
  }

  }

}
