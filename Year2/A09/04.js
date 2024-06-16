let stars = 0
let star = []
let Size = 600
let x
let y 
let Theta
let maxTime = 175
let SPF = 1 //SPF = Stars Per Frame
let d
let img
let Scale = 2.5

function preload(){
  img = loadImage("assets/rocket1.jpeg")
}

function setup() {
  imageMode(CENTER)
  frameRate(120)
  noStroke()
  createCanvas(Size,Size);
  for(i=0;i<stars;i++){
    x = Size/2
    y = Size/2
    Theta = random(360)
    star.push({
      X: x,
      Y: y,
      D: random(1,1),
      Xv:Scale*cos(Theta),
      Yv:Scale*sin(Theta),
      T:0
    })
  }
}

function draw() {
  background(0,20);
//  image(img,mouseX,mouseY)
  for(i=0;i<SPF;i++){
    newStar()
  } 
  starDraw()
  starMove()
  starDelete()
  starClose()
  fill(0)
  circle(Size/2,Size/2,3)
  image(img,mouseX,mouseY,100,100)
  bugFix()
}

function starDraw(){
  for(i=0;i<stars;i++){
    fill("rgb(88,245,238)")
    circle(star[i].X,star[i].Y,star[i].D)
  }
}

function starMove(){
  for(i=0;i<stars;i++){
    star[i].X += star[i].Xv 
    star[i].Y += star[i].Yv
    star[i].T += 1
  }
}

function starDelete(){
  for(i=0;i<stars;i++){
    if(dist(star[i].X,star[i].Y,Size/2,Size/2)>sqrt((Size/2)**2+(Size/2)**2) || star[i].T > maxTime){
      star.splice(i,1)
      stars-=1
    }
  }
}

function newStar(){
  x = Size/2
  y = Size/2
  Theta = random(0,360)
  star.push({
    X: x,
    Y: y,
    D: random(1,1),
    Xv:Scale*cos(Theta),
    Yv:Scale*sin(Theta),
    T:0
  })
  stars+=1
}

function starClose(){
  for(i=0;i<stars;i++){
    // if(star[i].Xv < 0){
    //   star[i].Xv -= 0.01  
    // }
    // else if (star[i].Xv === 0){
    //   star[i].Xv += 0
    // }
    // else{
    //   star[i].Xv += 0.01
    // }
    // if(star[i].Yv < 0){
    //   star[i].Yv -= 0.01
    // }
    // else{
    //   star[i].Yv += 0.01
    // }
    star[i].Xv *= 1.01
    star[i].Yv *= 1.01
    star[i].D *= 1.03
  }
}

function bugFix(){
  if(frameRate()<25){
    console.log(frameRate())
  }
}

function mousePressed(){
//  console.log(star,frameRate())
  // for(i=0;i<stars;i++){
  //   star[i].Xv *= -1
  //   star[i].Yv *= -1
  // }
  console.log(frameRate())
}

      // Xv: ((2/sqrt((x-Size/2)**2+(y-Size/2)**2))*(x-(Size/2)))**-1,
      // Yv: ((2/sqrt((y-Size/2)**2+(y-Size/2)**2))*(x-(Size/2)))**-1