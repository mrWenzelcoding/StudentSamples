let Snakebit = []
let Foodbit
let j
let tek = []
let tek2 = []
let tek3=[]
let f =[]
let h
let gs
let dif
let eep =[]
function setup() {
  background(0);
  createCanvas(1000, 1000);
  h=0
  jk=0
  rectMode(CENTER)
  Snakebit[0] = new snakebit(20,50,1,0)
  Snakebit[1] = new snakebit(20,50,1,0)
  Foodbit = new foodbit(500,500)
  Foodbit.re()
  
  fill(255,255,255)
  textSize(50)
  text("Choose difficulty",width/2-90,50)
  fill("green")
  rect(333.3-100,500,100,100)
  fill("yellow")
  rect(666.6-100,500,100,100)
  fill("red")
  rect(999.9-100,500,100,100)
  fill(254,255,255)
  rect(629.5,16,6)
}

function draw() {
  if(jk==1){
    background(0);
    fill(85,107,47)
  rect(500,10,1000,20)
  rect(10,500,20,1000)
  rect(500,990,1000,20)
  rect(990,500,20,1000)
    Snakebit[0].show()
  for(let i=1; i<Snakebit.length; i++){
    j=i
    Snakebit[i].show()
    Snakebit[i].follow()
  }
  Snakebit[0].move()
  Foodbit.show()
  Snakebit[0].check()
  }
  
  
  
}
class snakebit {
  constructor(_x,_y,_xs,_ys){ 
    this.x=_x
    this.y=_y
    this.ys=_ys
    this.xs=_xs
  }
  show(){
    fill(85,107,47)
    rect(this.x,this.y,20)
  }
  move(){
    this.x+=this.xs*dif
    this.y+=this.ys*dif
  }
  follow(){
    this.x=lerp(this.x,Snakebit[j-1].x,0.047*dif)
    this.y=lerp(this.y,Snakebit[j-1].y,0.047*dif)
  }
  check(){
    //right
    if(this.xs==1){
      tek=get(this.x+12,this.y+9)
      tek2=get(this.x+12,this.y-9)
      tek3=get(this.x+12,this.y)
      if(h==1){
      rect(this.x+12,this.y+9,5)
      rect(this.x+12,this.y-9,5)
      rect(this.x+12,this.y,5)
      }
      
    
    if(tek[0]== 240 || tek2[0]== 240|| tek3[0]== 240 ){
      nom()
      Foodbit.re()
      
    }else if(tek[0]== 85 || tek2[0]== 85 || tek3[0]== 85 ){
     death()
      
    }
      
    //left
    }else if(this.xs==-1){
      tek=get(this.x-12,this.y+9)
      tek2=get(this.x-12,this.y-9)
      tek3=get(this.x-12,this.y)
      if(h==1){
      rect(this.x-12,this.y+9,5)
      rect(this.x-12,this.y-9,5)
      rect(this.x-12,this.y,5)
      }
      
      if(tek[0]== 85 || tek2[0]== 85 || tek3[0]== 85  ){
     death()
      
    }
    if(tek[0]== 240 || tek2[0]== 240 || tek3[0]== 240 ){
      nom()
      Foodbit.re()
      
    }
    
      
    //down
    }else if(this.ys==1){
      tek=get(this.x+9,this.y+12)
      tek2=get(this.x-9,this.y+12)
      tek3=get(this.x,this.y+12)
      //Hit box show
      if(h==1){
      rect(this.x+9,this.y+12,5)
      rect(this.x-9,this.y+12,5)
      rect(this.x,this.y+12,5)
      }
       
      if(tek[0]== 85 || tek2[0]== 85 || tek3[0]== 85  ){
     death()
      }
      
    if(tek[0]== 240 || tek2[0]== 240 || tek3[0]== 240 ){
      nom()
      Foodbit.re()
      
    }
      
      
    //up
    }else if(this.ys==-1){
      tek=get(this.x+9,this.y-12)
      tek2=get(this.x-9,this.y-12)
      tek3=get(this.x,this.y-12)
      if(h==1){
      rect(this.x+9,this.y-12,5)
      rect(this.x-9,this.y-12,5)
      rect(this.x,this.y-12,5)
      }
       
      if(tek[0]== 85 || tek2[0]== 85 || tek3[0]== 85  ){
     death()
      }
      
    if(tek[0]== 240 || tek2[0]== 240 || tek3[0]== 240){
      nom()
      Foodbit.re()
      
    }
      
    }
    
  }
}
class foodbit{
  constructor(_x,_y){ 
    this.x=_x
    this.y=_y
    this.fx=-20
    this.fy=-20
  }
  show(){
    fill("khaki")
    rect(this.x,this.y,20)
  }
  re(){
  this.fx=random(30,width-30)
  this.fy=random(30,height-30)
    this.f=get(this.fx,this.fy)
    
  this.fx2=this.fx-10
  this.fy2=this.fy-10
     this.f2=get(this.fx,this.fy)
    
  this.fx3=this.fx-10
  this.fy3=this.fy+10
    this.f3=get(this.fx,this.fy)
    
  this.fx4=this.fx+10
  this.fy4=this.fy-10
    this.f4=get(this.fx,this.fy)
    
  this.fx5=this.fx+10
  this.fy5=this.fy+10
    this.f5=get(this.fx,this.fy)
    
  
  if(this.f[0]==85){
    this.fx=random(30,width-30)
    this.fy=random(30,height-30)
    
    }else if(this.f2[0]==85){
    this.fx=random(30,width-30)
    this.fy=random(30,height-30)
      
    }else if(this.f3[0]==85){
    this.fx=random(30,width-30)
    this.fy=random(30,height-30)
      
    }else if(this.f4[0]==85){
    this.fx=random(30,width-30)
    this.fy=random(30,height-30)
      
    }else if(this.f5[0]==85){
    this.fx=random(30,width-30)
    this.fy=random(30,height-30)
      
      
    }else{
    this.x=this.fx
    this.y=this.fy
    }
  }
}
function keyPressed(){
if(keyCode == LEFT_ARROW){
  Snakebit[0].xs=(-1)
  Snakebit[0].ys=0
}
  if(keyCode == RIGHT_ARROW){
  Snakebit[0].xs=1
  Snakebit[0].ys=0
}
  if(keyCode == UP_ARROW){
  Snakebit[0].xs=0
  Snakebit[0].ys=-1
}
  if(keyCode == DOWN_ARROW){
  Snakebit[0].xs=0
  Snakebit[0].ys=1
}
  
}
function nom(){
  Snakebit[Snakebit.length] = new snakebit(Snakebit[Snakebit.length-1].x,Snakebit[Snakebit.length-1].y,2,0)
}
function death(){
  textSize(90)
  fill("white")
  text("          YOU DIED!\n   you got a score of "+Snakebit.length,20,200)
  textSize(40)
  text("Restart?",420,500)
  fill("rgb(255,192,203)")
  rect(490,550,100,60)
  console.log(Snakebit.length)
  jk=0
}
function mousePressed(){
  eep=get(mouseX,mouseY)
  if(eep[1]==128 && eep[0]==0 && eep[2]==0 ){
    dif=2
    jk=1
  }else if(eep[1]==255&& eep[0]==255 && eep[2]== 0){
    dif=4
    jk=1
  }else if(eep[1]==0&& eep[0]==255 && eep[2]==0 ){
    dif=6
    jk=1
  }else if(eep[1]==255&& eep[0]==254 && eep[2]==255 ){
    dif=10
    jk=1
  }else if(eep[1]==192&& eep[0]==255 && eep[2]==203 ){
  Snakebit=[]
  setup()
  }
}