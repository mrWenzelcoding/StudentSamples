function setup() {
  createCanvas(600, 600);
  
}

function draw() {
  background("rgb(0,0,0)");
  noSmooth()
  //Background
  fill("rgb(54,52,52)")
quad(width-width, height-height, width, height-height, width/1.9, height/4, width/2.1, height/4)
  fill("rgb(32,22,15)")
quad(width-width, height-height, width/2.1,height/4, width/2.1, height/3.2, width-width, height)
  quad(width, height-height, width/1.9,height/4, width/1.9, height/3.2, width, height)
  fill("rgb(49,40,33)")
  quad(width-width, height, width/2.1,height/3.2, width/1.9, height/3.2,width, height)
  stroke("rgb(252,7,7)")
  strokeWeight(100)
  line(width-width,height)
  noStroke()
  fill("rgba(0,0,0,0.37)") 
quad(width/2.72,height/5.11,width/1.59,width/5.11,width/1.59,height/2.18,width/2.72,height/2.18)
quad(width/3.37,height/6.31,width/1.43,width/6.31,width/1.43,height/1.78,width/3.37,height/1.78)
fill("rgba(0,0,0,0.3)")
quad(width/2.41,height/4.58,width/1.7,width/4.58,width/1.7,height/2.5,width/2.41,height/2.5)
 quad(width/2.21,height/4.22,width/1.8,width/4.22,width/1.8,height/2.86,width/2.21,height/2.86)
  fill("rgba(241,235,235,0)")
  circle(mouseX,mouseY,width/2)
  //Flashlight
  if(mouseIsPressed == true){
  strokeWeight(width*1.5)
    stroke("rgba(7,7,7,0.75)")
  fill("rgba(14,14,14,0.08)")
  circle(mouseX,mouseY,width*2)
    strokeWeight(width*1.525)
    stroke("rgba(7,7,7,0.9)")
    fill("rgba(8,8,8,0.08)")
  circle(mouseX,mouseY,width*2)
    strokeWeight(width*1.55)
    stroke("rgba(7,7,7,0.54)")
    fill("rgba(8,8,8,0.08)")
  circle(mouseX,mouseY,width*2)
  }
  else{
  fill("rgb(7,7,7)")
  circle(width/2,height/2,width*2)
  }
  noStroke()
  if(mouseIsPressed == true){
   fill("rgba(240,240,240,0.03)")
  circle(mouseX,mouseY,width/1.95)
    fill("rgba(255,255,255,0.02)")
  circle(mouseX,mouseY,width/2)
  fill("rgba(255,255,255,0.03)")
  circle(mouseX,mouseY,width/2.1)
   fill("rgba(243,243,243,0.03)")
  circle(mouseX,mouseY,width/2.2)
   fill("rgba(7,7,7,0.03)")
  circle(mouseX,mouseY,width/2.4)
   fill("rgba(7,7,7,0.06)")
  circle(mouseX,mouseY,width/2.5)
  }
  
  if(!mouseIsPressed){
    push()
    textAlign(CENTER)
    fill("white")
    noStroke()
    textSize(10)
    text("Click to Shine Light",width/2,20)
    pop()
     }
}

