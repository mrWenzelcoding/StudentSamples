cell = []
food = []
cellcount = 1
Size = 400
colour = []
check = []
t=0
let X
let Y
let maxSize = 10
let foodValue = 1

function setup() {
  noStroke()
  createCanvas(Size, Size);
  for (i=0;i<cellcount;i++){
  colour.push({R:random(0,200),G:random(0,200),B:random(0,200)})
  cell.push({X:random(0,Size),Y:random(0,Size),R:10})
  food.push({X:random(0,Size),Y:random(0,Size),R:int(random(3,7))})
  check.push(0)
  }
}


function draw() {
  background(220);
  for (i=0;i<cellcount;i++){
  fill(colour[i].R,colour[i].G,colour[i].B)
  circle(cell[i].X,cell[i].Y,cell[i].R)
  circle(food[i].X,food[i].Y,food[i].R)
  if((round(cell[i].X) !== round(food[i].X)) || (round(cell[i].Y) !== round(food[i].Y)) || check[i] !== 1){
     cell[i].X=lerp(cell[i].X,food[i].X,0.05)
     cell[i].Y=lerp(cell[i].Y,food[i].Y,0.05)
     }
  if((round(cell[i].X) == round(food[i].X)) && (round(cell[i].Y) == round(food[i].Y))){
  check[i]=1
  
  t++
  cell[i].R = sqrt(cell[i].R ** 2+food[i].R ** 2)
  food.splice(i,1,{X:random(0,Size),Y:random(0,Size),R:random(3,7)})
  if(t>=100){
  t = 0
  
  }}
  else{
  check[i]=0
  }
  if(cell[i].R>maxSize){
  X = cell[i].X
  Y = cell[i].Y
  cell.splice(i,1,{X:X-5,Y:Y-5,R:10})
  doFunkyStuff()
  }
  }
}

function doFunkyStuff(){
  cell.push({X:X+5,Y:Y+5,R:10})
  food.push({X:random(0,Size),Y:random(0,Size),R:int(random(3,7))})
  colour.push({R:random(0,255),G:random(0,255),B:random(0,255)})
  check.push(0)
  cellcount += 1
}

function mousePressed(){
console.log(cell.length)
}

