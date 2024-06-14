let song

let fft

let waves
//
let x=[]
let y=[]
let size=[]
let xOff=[]



function preload(){

  song = loadSound("assets/wintervivaldiuncut.mp3")

  

}



function setup() {

  createCanvas(windowHeight,windowHeight);

  noStroke()

  song.play()

  fft = new p5.FFT()

  fft.setInput(song)
  for(i=0;i<100; i++){
    
    size[i]=random(5,20)
    x[i]=random(width)
    y[i]=random(height)
    xOff[i]=random(-100,600)
       }
}

      
    




 function draw() {

  background(165,192,223);
console.log(mouseX,mouseY)
  waves = fft.analyze()

//snowman
  //arms
  fill(106, 54, 16 )
  rect(780,790,60,10)
  rect(790,800,8,10)
  rect(790,780,8,10)
  rect(960,790,60,10)
  rect(1000,780,5,10)
  //torso
   push()
  strokeWeight(waves[i]/30)
  stroke(5,37,66,50)
   fill(255)
  circle(900,880,150)
  circle(900,810,140)
  circle(900,730,120)
  pop()
  //FACE
  fill(0)
  rect(840,670,120,20)
  rect(860,610,80,60)
  circle(860,730,20)
  circle(940,730,20)
  rect(875,730,50,5)
  //rect(335,273,2,2)
  //rect(353,273,2,2)
  
  //buttons
  let r = waves[i]

    let g =100/(waves[i]+1)
    let b = 255/(waves[i]+1)

    fill(r,g,b)
  circle(900,810,20)
  circle(900,850,20)
  circle(900,895,20)
  
  //hat ribbon
  

    fill(r,g,b)
  rect(860,640,80,15)
 

  let bass = fft.getEnergy("bass");

  let lowMid = fft.getEnergy("lowMid");

  let mid = fft.getEnergy("mid");

  let highMid = fft.getEnergy("highMid");

  let treble = fft.getEnergy("treble");
   //clouds
   push()
   fill(255)
   stroke(224,236,242,waves[i])
   strokeWeight(waves[i]/7)
   ellipse(width/1.3,30,width/3,height/6)
  ellipse (width/5,16,width/3,height/5)
    ellipse(width/1.1,10,width/4,height/6.5)
   ellipse(width/2,19,width/2.5,height/6)
 ellipse(width/1.5,40,width/4,height/5.5)
    ellipse (width/9,27,width/4,height/7)
   pop()

  
  
  
for(i=0; i<100; i++){
//  let r = 255/waves[i]

//     let g = 255/waves[i]

//     let b =waves[i]

   fill(239, 247, 251 )
    
    circle(x[i],y[i],size[i])
    y[i]+=size[i]/3
  
  if(size[i]>14){
      xOff[i]+=waves[25]/25000
  } else if(size[i]>8){
          xOff[i]+=waves[400]/2500
          
  }
    else{
          xOff[i]+=  waves[200]/25000
    }

     
  x[i]=noise(xOff[i])*width
    x[i]=map(x[i],0,width,-400,width+400)

    if(y[i]>height){
      //x[i]=random(windowWidth)
      y[i]=0
      y[i]+=size[i]/3
      
      
    }
  console.log(mouseX,mouseY)
  rect(0,height,width,waves[i]*-height/5000)
  //text 
//      textAlign(CENTER)
//    textSize(10)
//   fill(	5,37,66,waves[i])
//    text("𝓵❜𝓲𝓷𝓿𝓮𝓻𝓷𝓸",54,height-40)
// text('𝓥𝓲𝓿𝓪𝓵𝓭𝓲',54,height-30)
  
  //tree far right
//   rect(width-100,345,20,height-400)
//   quad(width-100,height-200,width-90,height-200,width-24,259,width-31,250)
//   ellipse(width-90,329,20,70)
//   quad(width-103,335,width-98,328,width-135,311,width-133,316)
//   quad(width-69,291,width-66,287,width-84,252,width-89,258)
  
  
 
  
 }

   
 }




//Resizing Window Code

function mousePressed() {

  if (mouseX > 0 && mouseX < windowWidth && mouseY > 0 && mouseY < windowHeight) {

    let fs = fullscreen();

    fullscreen(!fs);

  }

}



function windowResized() {

  resizeCanvas(windowWidth, windowHeight);
}