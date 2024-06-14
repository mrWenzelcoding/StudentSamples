let x,y;
let xspeed;
let yspeed;
let score1=0
let score2=0
let c=[]
let i;
let xspeedII
let yspeedII
let c1=[]
let x1,y2
let noun=[]
let screen
let s,s1;
let size
let d
let theme;
let timer
let start=true
function preload(){
song=loadSound("assets/GTA.mp3")
theme=loadSound("assets/theme.mp3")
fft= new p5.FFT()
}
function setup() {
  createCanvas(600, 600);
    background(44,42,74);
 
    noun=["Ngl.. You kinda Suck", "Imagine Losing Like That", "Skill Issue", "Are You Even Trying?", "You Died Faster Than the Speed of Light","More Effort is Appreciated", "L", "That was Silly","R.I.P"]
  x=width*0.25
  y=height*0.25
  xspeed=0
  yspeed=0
  c=[44,42,74,255]
  i=0
 s=random(30,560)
s1=random(30,560)
  timer=10
  //P2
  c1=[44,42,74,255]
   x1=width*0.75
  y1=height*0.25
  xspeedII=0
  yspeedII=0
  
}

function draw() {
console.log(mouseX,mouseY)
noStroke()
 //random stars
textSize(1)  
text(timer,0,400)
 if (frameCount % 60 == 0 && timer > 0){timer --;}
    if(timer==0){ 
fill(253, 197, 0 )
  square(s,width*.115,20,2)
  square(s1,s,20,2)
  square(s1,s,20,2)
  square(s,s1,20,2)
  square(s1,s1,20,2)
  square(s,s,20,2)
  square(s1,s,20,2)
  square(s,s1,20,2)
  square(width*.4,width*.86,20,2)
  square(width*.86,width*.08,20,2)
  square(width*.38,width*.2,20,2)
    }
//border
 while(i<600){
   
fill(218, 191, 255)  
rect(i,0,600,20)
 rect(0,580,i+10,20) 
 rect(0,20,20,i)  
 rect(580,0,20,i+10) 
 i+=10
}  

  
 //scorebox 
 fill(255) 
square(68,0,50)
square(500,0,50)
//player 1
  fill(144, 122, 214 )
//   fill("#8E44AD ")
ellipse(x,y,20,20,20)
 x+=xspeed
 y+=yspeed 
//p2
  fill('#7fdeff')
  ellipse(x1,y1,20,20,20)
 x1+=xspeedII
 y1+=yspeedII 

//P1 system

  if(xspeed>0){
  c=get(x+11,y)
  }
  
  if(yspeed>0){
  c=get(x,y+11)
     }
  
  if(xspeed<0){
    c=get(x-11,y)
  }
  if(yspeed<0){
    c=get(x,y-11)
  }

  
 
  if(c[0] != 44|| c[1]!= 42||c[2]!= 74){
    fill(253, 197, 0 )
   rect(160,208,300,150) 
    fill( 0 )
    textSize(45)
    textFont(BOLDITALIC)
   text("G̟A̟M̟E̟ O̟V̟E̟R̟",175,267) 
    textSize(20)
     push()
    textAlign(CENTER)
    text(""+random(noun),224,290,175)
    pop()
     song.play()
    theme.stop()
   score2+=1
   noLoop()
   
 }
//P2 system
  if(xspeedII>0){
  c1=get(x1+11,y1)
  }
  
  if(yspeedII>0){
  c1=get(x1,y1+11)
     }
  
  if(xspeedII<0){
    c1=get(x1-11,y1)
  }
  if(yspeedII<0){
    c1=get(x1,y1-11)
  }

  
 
  if(c1[0] != 44 || c1[1]!= 42||c1[2]!= 74){
     fill(253, 197, 0 )
   rect(160,208,300,150) 
    fill( 0 )
    textSize(45)
    textFont(BOLDITALIC)
   text("G̟A̟M̟E̟ O̟V̟E̟R̟",175,267) 
     textSize(20)
    push()
    textAlign(CENTER)
    text(""+random(noun),224,310,175)
    pop()
     song.play()
    theme.stop()
   score1+=1
   noLoop()
 }
  //scoreboards  
textSize(20)
 fill(0) 
 text(score1,88,30)
  text(score2,520,30)
 
 if(start==true){
//background
fill(50, 47, 121)
 rect(0,0,600,600)
 //stars
fill(246, 166, 64) 

//sides
fill(169, 147, 244)  
rect(0,0,600,20)
 rect(0,580,600,20) 
 rect(0,20,20,600)  
 rect(580,0,20,600)
//stars
   fill(253, 197, 0 )
  square(524,width*.115,20,2)
  square(100,80,20,2)
  square(66,406,20,2)
  square(480,400,20,2)
  square(114,320,20,2)
  square(400,550,20,2)
  square(300,508,20,2)
  square(381,81,20,2)
 //start button  
fill(11, 28, 50 )
 rect(160,208,300,150) 
fill(255)
textSize(45)
textFont(BOLDITALIC)
text("【ＳＴＡＲＴ】",153,294)
push()   
textAlign(CENTER)  
textSize(20)   
text("Player 1 controls: WASD",300,385)   
text("Player 2 controls: Arrow Keys",310,420)
textSize(55)   
text("✵.｡.✰ ℕ𝕆𝕍𝔸 ✰.｡.✵",310,177)   
pop()
 }
  
}         
          
  


//controls
function keyPressed(){
 if(key == "w"){ 
  xspeed=0
  yspeed=-1
 }
if(key=="s"){
  xspeed=0
  yspeed=+1
  
  }
if(key=="d"){
 xspeed=+1
  yspeed=0
  }
if(key== "a"){
  xspeed=-1
  yspeed=0
  }  


//P2 controls

 if(keyCode == UP_ARROW){ 
  xspeedII=0
  yspeedII=-1
 }
if(keyCode==DOWN_ARROW){
  xspeedII=0
  yspeedII=+1
  
  }
if(keyCode==RIGHT_ARROW){
 xspeedII=+1
  yspeedII=0
  }
if(keyCode== LEFT_ARROW){
  xspeedII=-1
  yspeedII=0
  }  
}

function mousePressed(){
  start=false
  song.stop()
 theme.play()
   setup()
   loop()
   
 }


