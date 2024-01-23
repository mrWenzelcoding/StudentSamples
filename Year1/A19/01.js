let song;
let song2
let fft
let wave;
let pause = false
let x =[]
let y = []
let xj = []
let yj = []
function preload() {
  soundFormats("mp3", "ogg");
  song = loadSound("assets/4f.mp3"); 
  song2 = loadSound("assets/3r.mp3")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  song.play();
  fft = new p5.FFT();
  fft.setInput(song);
  ellipseMode(CENTER)
  rectMode(CENTER)
  noFill()
  strokeWeight(2)
  for(let i =0;i<200;i++){
    x[i] = random(-width/2 +width*2)
y[i] =random(height)
    xj[i] = random(-width/2 +width*2)
yj[i] =random(height)
  }
}

function draw() {
  background(0);
  wave = fft.analyze();
  let bass = fft.getEnergy("bass");
  let lowMid = fft.getEnergy("lowMid");
  let mid = fft.getEnergy("mid");
  let highMid = fft.getEnergy("highMid");
  let treble = fft.getEnergy("treble");
  for(let i = 0;i<200;i++){
     push()
    translate(xj[i],yj[i])
    stroke(255)
    fill(255)
    ellipse(0,0,5)
    noFill()
    pop()
    xj[i]-=2
    if(xj[i]<-width/5){
      xj[i] =random(width,width*1.5)
      yj[i] = random(-height,height*3)
    }
    push()
    stroke(255)
    fill(255)
    translate(x[i],y[i])
    ellipse(0,0,wave[i]/20)
    noFill()
    pop()
    x[i]--
    if(x[i]<-width/5){
      x[i] =random(width,width*1.5)
    }
   
  }
  for(let i = 0;i<800;i++){
    let col
    col =treble+mid+bass /3
    stroke(col,col,col)
    rect(0+i*2,height/2,1,wave[i]*1.5)
  }
  stroke(255,150,150)
  //ellipse(width*0.5,height*0.5,bass*2)
  for(let i = 0;i<360;i++){
    push()
    translate(width/2,height/2)
    rotate(i)
    ellipse(0,bass*1.5,1,wave[i]/4)
    pop()
  }
  stroke(150,255,150)
  //ellipse(width*0.5,height*0.5,lowMid*2)
  for(let i = 0;i<360;i++){
    push()
    translate(width/2,height/2)
    rotate(i)
    ellipse(0,lowMid*1.5,1,wave[i]/4)
    pop()
  }
  stroke(150,150,255)
  //ellipse(width*0.5,height*0.5,mid*2)
  for(let i = 0;i<360;i++){
    push()
    translate(width/2,height/2)
    rotate(i)
    ellipse(0,mid*1.5,1,wave[i]/4)
    pop()
  }
  stroke(255,150,255)
  //ellipse(width*0.5,height*0.5,highMid*2)
  for(let i = 0;i<360;i++){
    push()
    translate(width/2,height/2)
    rotate(i)
    ellipse(0,highMid*1.5,1,wave[i]/4)
    pop()
  }
  stroke(255,255,150)
  //ellipse(width*0.5,height*0.5,treble*2)
  for(let i = 0;i<360;i++){
    push()
    translate(width/2,height/2)
    rotate(i)
    ellipse(0,treble*1.5,1,wave[i]/4)
    pop()
  }
  
wave=fft.analyze()
}
function mousePressed(){
  let FS =fullscreen();
  fullscreen(!FS)
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  for(let i =0;i<200;i++){
    x[i] = random(-width/2,width*2)
y[i] =random(height)
     xj[i] = random(-width/2,width*2)
yj[i] =random(height)
  }
}
function keyPressed(){
  if(key == ' '){
    if(pause == false ){
    pause = true 
    song.pause()
  }else if (pause ==true){
    pause =false
    song.play()
  }
  }else if(key === '4'){
    song2.stop()
    song.stop()
    song.play()
   
  }else if(key ==='3'){
    song.stop()
   song2.play()
   
  }
  
}