let firstShot = false
let bullet=[]
let n
let nextXspeed
let nextYspeed
let t
let j
let upgradeMenu
let creature=[]
let spawnTimer
let fireRate
let FRButton
let stun
let damage
let stunButton
let DMGButton
let gold
let FRcost
let DMGcost
let STcost
let lose
let upC
function setup() {
  frameRate(60)
  createCanvas(800, 600);
  j=1
   stun=1
  damage=2
  gold=0
  FRcost=1
  DMGcost=2
  STcost=4
  lose=false
  upC=0
  creature.push(new creatureC(width,height/1.33,stun,"regular"))
  let upgradeButton = createButton('Upgrades');
  upgradeButton.position(width/2, 0);
  upgradeButton.mousePressed(Swap) 
  FRButton= createButton('FireRate');
  FRButton.position(-100, height/2);
  stunButton=createButton('Stun Duration')
  stunButton.position(-100, height/2);
  FRButton.mousePressed(FRup)
  stunButton.mousePressed(STup)
  DMGButton=createButton('Damage')
  DMGButton.position(-100,height/2);
  DMGButton.mousePressed(DMGup)
  n=0
  fireRate=3
  t=60*fireRate
  upgradeMenu=-1
  spawnTimer=0
}

function draw() {
  if(lose==true){
    noLoop()
  }
  if(upgradeMenu==-1){
  t++
    spawnTimer+=1
  BackG()
  tower(1,50,100)
  circle((width/8)+50,(width/1.33)-250,20)
  stroke(255,0,0)
  line((width/8)+50,(width/1.33)-250,mouseX,mouseY)
  strokeWeight(1)
  if(firstShot==true){
     for(let i =0; i<n; i++){
   bullet[i].display()
       bullet[i].movement()
       bullet[i].destroy()
     }
  }
         for(let i =0; i<j; i++){
    creature[i].display()
           creature[i].move()
           creature[i].LOSE()
           for(let b =0; b<n; b++){
               if(dist(creature[i].x,creature[i].y,bullet[b].x,bullet[b].y)<creature[i].size){
                 creature[i].hitReg()
                 creature[i].die()
                 if(creature[i].health<0){
                 creature.splice(i,1)
                 j--
                 }
                 break
    }
           }
     }
    
    if(spawnTimer>480-(upC*35)){
      spawnTimer=0
      wave()
    }
   FRButton.position(-100, height/2); 
           stunButton.position(-100, height/2); 
           DMGButton.position(-100, height/2); 
}else{
  background(150)
  fill("gold")
  text(FRcost,width/2, height/2.1)
  text(STcost,width/3, height/2.1)
  text(DMGcost,width/1.33, height/2.1)
  FRButton.position(width/2, height/2);
  stunButton.position(width/3, height/2);
  DMGButton.position(width/1.33, height/2);
}
    fill("gold")
      text(gold,width/1.9,50)
}
function BackG(){
  noStroke()
background(80*sin(0.5+frameCount/300),161*sin(0.5+frameCount/300),238*sin(0.5+frameCount/300))
  //sun+moon
    for(let i = 0; i<10;i++){
  fill(255,220,0,255-(i*25))
  circle(400+sin((frameCount+600)/-300)*400,600+cos((frameCount+600)/-300)*300,60+(i*10))
  }

 fill(220)
  circle(400-sin((frameCount+600)/-300)*400,600-cos((frameCount+600)/-300)*300,60)
  fill(116,170,35)
  rect(0,height/1.33,width,height/1.33)
  stroke(1)
}
function tower(level,w,h){
  fill(200)
  rect(width/8,(height/1.33)-h,w,h)
}
class projectile{
  constructor(x,y,xSpeed,ySpeed){
    this.x=x
    this.y=y
    this.xSpeed=xSpeed
    this.ySpeed=ySpeed
    this.t=0
  }
  display(){
    fill(255,200,0)
    circle(this.x,this.y,20)
  }
  movement(){
    this.t+=1
    this.x+=this.xSpeed
    this.y+=0.1*this.t+this.ySpeed
  }
  destroy(){
          if(this.x>width || this.y>height){
    bullet.shift()
    n--
  }
  }
}
class creatureC{
  constructor(x,y,stunD,type){
    if(type=="regular"){
      this.type=type
    this.x=x
    this.y=y
    this.health=10
    this.speed=1
    this.initialS=1
    this.beingHit=false
    //time in seconds
    this.stunT=stunD
    this.TafterH=(this.stunT*60)+1
      this.size=20
    }
        if(type=="fast"){
          this.type=type
    this.x=x
    this.y=y
    this.health=1
    this.speed=1.5
    this.initialS=1.5
    this.beingHit=false
    //time in seconds
    this.stunT=stunD
    this.TafterH=(this.stunT*60)+1
      this.size=15
    }
        if(type=="big"){
          this.type=type
    this.x=x
    this.y=y
    this.health=20
    this.speed=0.5
    this.initialS=0.5
    this.beingHit=false
    //time in seconds
    this.stunT=stunD
    this.TafterH=(this.stunT*60)+1
      this.size=40
    }
            if(type=="boss"){
          this.type=type
    this.x=x
    this.y=y
    this.health=50
    this.speed=0.5
    this.initialS=0.5
    this.beingHit=false
    //time in seconds
    this.stunT=stunD
    this.TafterH=(this.stunT*60)+1
      this.size=70
    }
        if(type=="split"){
          this.type=type
    this.x=x
    this.y=y
    this.health=5
    this.speed=0.7
    this.initialS=0.7
    this.beingHit=false
    //time in seconds
    this.stunT=stunD
    this.TafterH=(this.stunT*60)+1
      this.size=35
    }
  }
  display(){
    if(this.type=="boss"){
      fill("rgb(202,24,24)")
    circle(this.x,this.y,this.size)
    }else{
    fill("rgb(169,202,24)")
    circle(this.x,this.y,this.size)
    }
  }
  move(){
    if(this.beingHit==true){
      this.TafterH+=1
    }
    if(this.TafterH>(this.stunT*60)){
    this.x-=this.speed
      this.TafterH=(this.stunT*60)+1
      this.beingHit=false
    }
  }
  hitReg(){
    this.health-=damage
    this.beingHit=true
    this.TafterH=0
  }
  die(){
     if(this.health<0){
              if(this.type=="split"){
       gold+=2
      creature.push(new creatureC(this.x,this.y,stun,"regular"))
                j+=2
                creature.push(new creatureC(this.x+10,this.y,stun,"regular"))
       }
                     if(this.type=="boss"){
       gold+=10
      creature.push(new creatureC(this.x,this.y,stun,"split"))
                j+=4
                creature.push(new creatureC(this.x,this.y,stun,"split"))
                        creature.push(new creatureC(this.x,this.y,stun,"fast"))
                        creature.push(new creatureC(this.x,this.y,stun,"regular"))
       }
       else{
       gold+=1
                  }
     }
  }
  LOSE(){
    if(this.x<=width/8){
      lose=true
    }
  }
}

function mouseReleased(){
    if(upgradeMenu==-1){
  if(t>(60*fireRate)){
  if(((width/8)+50)-mouseX<0){
  nextXspeed=(((width/8)+50)-mouseX)/-25
    nextYspeed=(mouseY-(width/12)-295)/25
  firstShot=true
    n++
    bullet.push(new projectile((width/8)+50,(width/1.33)-250,nextXspeed,nextYspeed))
    t=0
  }
  }
    }
}
function Swap(){
  upgradeMenu*=-1
}
function FRup(){
  if(gold>=FRcost){
  fireRate-=0.5
    gold-=FRcost
    FRcost*=2
    upC+=1
  }
}
function STup(){
  if(gold>=STcost){
  stun+=0.5
    gold-=STcost
    STcost*=2
    upC+=1
  }
}
  function DMGup(){
    if(gold>=DMGcost){
    damage+=1
      gold-=DMGcost
      DMGcost*=2
      upC+=1
    }
  }
  function wave(){
    let r=floor(random(4))
    let boss=random(0,1)
    if (r==0){
      creature.push(new creatureC(random(width,width*1.5),height/1.33,stun,"split"))
      creature.push(new creatureC(random(width,width*1.5),height/1.33,stun,"regular"))
      creature.push(new creatureC(random(width,width*1.5),height/1.33,stun,"regular"))
      j+=3
    }
        if (r==2){
      creature.push(new creatureC(random(width,width*1.5),height/1.33,stun,"big"))
          creature.push(new creatureC(random(width,width*1.5),height/1.33,stun,"split"))
           creature.push(new creatureC(random(width,width*1.5),height/1.33,stun,"fast"))
      j+=3
    }
        if (r==1){
      creature.push(new creatureC(random(width,width*1.5),height/1.33,stun,"fast"))
          creature.push(new creatureC(random(width,width*1.5),height/1.33,stun,"regular"))
          creature.push(new creatureC(random(width,width*1.5),height/1.33,stun,"split"))
      j+=3
    }
            if (r==3){
      creature.push(new creatureC(random(width,width*1.5),height/1.33,stun,"big"))
          creature.push(new creatureC(random(width,width*1.5),height/1.33,stun,"split"))
           creature.push(new creatureC(random(width,width*1.5),height/1.33,stun,"split"))
      j+=3
    }
    if(boss<=0.1){
      creature.push(new creatureC(random(width,width*1.5),height/1.33,stun,"boss"))
      j++
    }
  }