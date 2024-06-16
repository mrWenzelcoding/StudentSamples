let coin=[]
let t
let sumCoins
let coinDelay
let upgrades
let tier1=[]
let tier2=[]
let tier3=[]
let tier4=[]
let coinValue
let img
function preload(){
  img={
    rabbit:loadImage('assets/rabbit.png'),
    chicken:loadImage('assets/chicken.png'),
    goat:loadImage('assets/goat.png'),
    cow:loadImage('assets/cow.png')
  }
}
function setup() {
  createCanvas(400, 400);
  t=0
  sumCoins=10
  coinDelay=300
  coinValue=1
    coin[0]={
      x:random(10,width-10),
      y:random(10,height*0.68),
      s:10
    }
  tier1[0]={
    x:random(10,width-50),
    y:random(10,height*0.75-35),
    w:50,
    h:25,
    xSped:random(1000),
    ySped:random(1000)
  }
    tier2[-1]={
    x:random(10,width-50),
    y:random(10,height*0.75-35),
    w:50,
    h:25,
    xSped:random(1000),
    ySped:random(1000)
  }
    tier3[-1]={
    x:random(10,width-50),
    y:random(10,height*0.75-35),
    w:50,
    h:25,
    xSped:random(1000),
    ySped:random(1000)
  }
    tier4[-1]={
    x:random(10,width-50),
    y:random(10,height*0.75-35),
    w:50,
    h:25,
    xSped:random(1000),
    ySped:random(1000)
  }
  upgrades={
    tier1:0,
    tier2:0,
    tier3:0,
    tier4:0
  }
}

function draw() {
  background(255);
  display()
  sprites()
   coins()
}
function tier1Sprite(x,y){
  //  fill(255,0,0)
  push()
  translate(x,y)
  image(img.rabbit,0,0,tier1[0].w,tier1[0].h)
  pop()
}
function tier2Sprite(x,y){
    // fill(255,255,0)
    //rect(x,y,tier2[-1].w,tier2[-1].h)
  image(img.chicken,x,y,tier2[-1].w,tier2[-1].h)
}
function tier3Sprite(x,y){
  //   fill(255,0,255)
   // rect(x,y,tier3[-1].w,tier3[-1].h)
  image(img.goat,x,y,tier3[-1].w,tier3[-1].h)
}
function tier4Sprite(x,y){
    // fill(0,255,255)
    //rect(x,y,tier4[-1].w,tier4[-1].h)
    image(img.cow,x,y,tier4[-1].w,tier4[-1].h)

}
function sprites(){
  for(let i =0;i<tier1.length;i++){
    push()
    translate(tier1[i].x,tier1[i].y)
   tier1Sprite(0,0)
    tier1[i].x=noise(tier1[i].xSped)*width*0.8
    tier1[i].xSped+=0.005
    tier1[i].y=noise(tier1[i].ySped)*height*0.8
    tier1[i].ySped+=0.005
    pop()
  }
  for(let i =0;i<tier2.length;i++){
   tier2Sprite(tier2[i].x,tier2[i].y)
    tier2[i].x=noise(tier2[i].xSped)*width*0.8
    tier2[i].xSped+=0.005
    tier2[i].y=noise(tier2[i].ySped)*height*0.8
    tier2[i].ySped+=0.005
  }
  for(let i =0;i<tier3.length;i++){
   tier3Sprite(tier3[i].x,tier3[i].y)
    tier3[i].x=noise(tier3[i].xSped)*width*0.8
    tier3[i].xSped+=0.005
    tier3[i].y=noise(tier3[i].ySped)*height*0.8
    tier3[i].ySped+=0.005
  }
  for(let i =0;i<tier4.length;i++){
   tier4Sprite(tier4[i].x,tier4[i].y)
    tier4[i].x=noise(tier4[i].xSped)*width*0.8
    tier4[i].xSped+=0.005
    tier4[i].y=noise(tier4[i].ySped)*height*0.8
    tier4[i].ySped+=0.005
  }
}
function display(){
  fill(200)
  rect(0,height*0.7,width,height*0.3)
  stroke(0)
  fill(0)
  text('coins:',10,height*0.85)
  text(sumCoins,45,height*0.85)
  text('coin sweep',10,height*0.9)
  text('100 coins',10,height*0.93)
  noFill()
  rect(100,height*0.7,75,height*0.3)
  text('cost '+ (10+upgrades.tier1*10),110,height*0.9)
  push()
 // fill(255,0,0)
  tier1Sprite(110,height*0.8)
 // rect(110,height*0.8,55,25)
  pop()
   rect(175,height*0.7,75,height*0.3)
  text('cost '+ (20+upgrades.tier2*20),185,height*0.9)
  push()
  //fill(255,255,0)
  //rect(185,height*0.8,55,25)
  tier2Sprite(185,height*0.8)
  pop()
   rect(250,height*0.7,75,height*0.3)
  text('cost '+ (50+upgrades.tier3*50),260,height*0.9)
   push()
  //fill(255,0,255)
  //rect(260,height*0.8,55,25)
  tier3Sprite(260,height*0.8)
  pop()
   rect(325,height*0.7,75,height*0.3)
  text('cost '+ (100+upgrades.tier4*100),335,height*0.9)
   push()
  //fill(0,255,255)
  //rect(335,height*0.8,55,25)
  tier4Sprite(335,height*0.8)
  pop()
}
function coins(){
 fill('gold')
  for(let i =0;i<coin.length;i++){
     ellipse(coin[i].x,coin[i].y,coin[i].s)
  }
 t++
  if(t>coinDelay){
    coin[coin.length]={
      x:random(10,width-10),
      y:random(10,height*0.68),
      s:10
    }
    t=0
  } 
}
function mousePressed(){
  if(mouseY<height*0.7)
  for(let i =0;i<coin.length;i++){
    if(dist(coin[i].x,coin[i].y,mouseX,mouseY)<coin[i].s){
      coin.splice(i,1)
      sumCoins+=coinValue
    }
  }else{
    if(mouseX>100&&mouseX<175){
      if(sumCoins>=10+upgrades.tier1 * 10){
      console.log('tier 1 bought')
       tier1[tier1.length]={
    x:random(10,width-50),
    y:random(10,height*0.75-35),
    w:50,
    h:25,
    xSped:random(1000),
    ySped:random(1000)
       }
       sumCoins-=10+upgrades.tier1 * 10
        upgrades.tier1+=1
        coinValue+=1
        console.log(coinValue)
  }
    }else if(mouseX>175&&mouseX<250){
     if(sumCoins>=20+upgrades.tier2 * 20){
      console.log('tier 2 bought')
       tier2[tier2.length]={
    x:random(10,width-50),
    y:random(10,height*0.75-35),
    w:50,
    h:25,
    xSped:random(1000),
    ySped:random(1000)
       }
       sumCoins-=20+upgrades.tier2 * 20
        upgrades.tier2+=1
       coinDelay*=0.9
       console.log(coinDelay)
  }
    }else if(mouseX>250&&mouseX<325){
       if(sumCoins>=50+upgrades.tier3 * 50){
      console.log('tier 3 bought')
       tier3[tier3.length]={
    x:random(10,width-50),
    y:random(10,height*0.75-35),
    w:50,
    h:25,
    xSped:random(1000),
    ySped:random(1000)
       }
       sumCoins-=50+upgrades.tier3 * 50
        upgrades.tier3+=1
         coinValue+=5
         console.log(coinValue)
  }
    }else if(mouseX>325){ 
      if(sumCoins>=100+upgrades.tier4 * 100){
      console.log('tier 4 bought')
       tier4[tier4.length]={
    x:random(10,width-50),
    y:random(10,height*0.75-35),
    w:50,
    h:25,
    xSped:random(1000),
    ySped:random(1000)
       }
       sumCoins-=100+upgrades.tier4 * 100
        upgrades.tier4+=1
        coinDelay*=0.7
        console.log(coinDelay)
  }
    }else{
      if(sumCoins>100){
        sumCoins-=100
        sumCoins+=coin.length*coinValue
        coin.splice(1,coin.length)
      }
    }
  }
}

//cow from shutterstock, goat from a reddit post, chicken from itch, rabbit from amino apps. (probably not nessesary but pics from google can be copyrighted so should probably cite them anyway)