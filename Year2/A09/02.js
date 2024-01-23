
let sx=[]
let sy=[]
let sped=[]
let t
let tic
let px
let py
let psped
let p1
let p2
let p3
let p4
let p0
let p6
let p
let r
let rs
let spedm
function preload(){
  p1=loadImage("assets/planet 1.png")
  
  p2=loadImage("assets/planet 2.png")
  
  p3=loadImage("assets/planet 3.png")
  
  p4=loadImage("assets/planet 4.png")
  
  p0=loadImage("assets/planet 5.png")
  
  p6=loadImage("assets/planet 6.png")
  
}
function setup() {
  createCanvas(1000, 1000)
  rectMode(CENTER)
  stars()
  planet()
  tic=random(300,700)
  spedm=0
  
}

function draw() {
  background(0,0,0)
  for(let i=0; i<300; i++){
  t=i
  fill("white")
  movement()
  fill("white")
 circle(sx[t],sy[t],5);
  tic--
  
  }
  image(p,px,py,500*1.5+rs,460*1.5+rs)
    tic--
  if(tic<0){
    planet()
    tic=5000000
  }
  ship()

}
function stars(){
  for(let i=0; i<300; i++){
  t=i
  sx[t]=random(width)
  sy[t]=random(height)
  sped[t]=random(3)+3
  }
}
 function movement() {
    sx[t]=sx[t]-sped[t]+spedm
    px=(px-psped/300)+spedm/300
 
  if(sx[t]<0){
    sx[t]=width+random(8)
    sy[t]=random(height)
    sped[t]=random(3)+3
    if(px<-500*1.5){
      tic=random(300,700)+spedm*100
    }
  }
 }
function ship() {
  fill("yellow")
  triangle(450,523,451,480,343+spedm*4,500)
  fill("orange")
  triangle(450,523,451,480,373+spedm*4,500)
  fill("red")
  triangle(450,513,451,490,403+spedm*4,500)
  fill("yellow")
  triangle(375,419,375,447,328+spedm*4,435)
  fill("orange")
  triangle(375,419,375,447,348+spedm*4,435)
  fill("red")
  triangle(375,425,375,442,358+spedm*4,435)
  fill("yellow")
  triangle(375,559,375,585,328+spedm*4,572)
  fill("orange")
  triangle(375,559,375,585,348+spedm*4,572)
  fill("red")
  triangle(375,565,375,578,358+spedm*4,572)
  fill("white")
  rect(width/2,height/2,100,50)
  rect(width/2.5,434,50,30)
  rect(width/2.5,574,50,30)
  stroke(255)
  strokeWeight(20)
  line(width/2.5,574,width/2,height/2)
  line(width/2.5,434,width/2,height/2)
  stroke(0)
  strokeWeight(1)
  fill("grey")
  triangle(545,474,545,525,643,500)
}
function planet(){
  px=1200
  py=random(height)
  psped=random(3)+2
  rs=random(50)
  r=round(random(1,5))
  if(r==1){
    p=p1
  }
  if(r==2){
    p=p2
  }
  if(r==3){
    p=p3
  }
  if(r==4){
    p=p4
  }
  if(r==5){
    p=p0
  }
  if(r==6){
    p=p6
  }
  
}

function keyPressed(){
  if(keyCode == LEFT_ARROW){
    spedm++
    console.log("Slow")
    if(spedm>0){
      spedm=0
    }
  }
  if(keyCode == RIGHT_ARROW){
    spedm--
    console.log("Speed")
  }
}