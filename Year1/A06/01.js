let r
let g
let b
let rx
let gx
let bx
let s

function setup() {
  r=0
  g=0
  b=0
  rx=width/2
  gx=width/2
  bx=width/2
  s=20
  createCanvas(510, 600);
  background(220);
  noStroke()
}

function draw() 
{
  noStroke()
  //color
   fill(r,g,b)
  
  //Chalk
  if(mouseIsPressed===true){
    if(mouseY>91)
    circle(mouseX,mouseY,s)
}
  if(mouseIsPressed===true){
    if(mouseY<91 && mouseY>60){
    b=mouseX/2
    bx=mouseX
    }
  }
    if(mouseIsPressed===true){
    if(mouseY<61 && mouseY>30){
    g=mouseX/2
    gx=mouseX
    }
    }
      if(mouseIsPressed===true){
    if(mouseY<31 && mouseY>0){
    r=mouseX/2
    rx=mouseX
    }
      }

//delete
  if(mouseIsPressed===true){
  if(mouseX>-1 && mouseX<31 && mouseY>569 && mouseY<601){
    background(220)
          
    }
  }
  //Brush
  
  //Large
  if(mouseIsPressed===true){
  if(mouseX>451 && mouseX<481 && mouseY>420 && mouseY<450){
    s=25
     }
  }
    
    //Medium
  if(mouseIsPressed===true){
  if(mouseX>450 && mouseX<481 && mouseY>460 && mouseY<490){
    s=20
    }
  }
    
    //Small
  if(mouseIsPressed===true){
  if(mouseX>450 && mouseX<481 && mouseY>500 && mouseY<530){
    s=15
      }
  }
          
   
          
    
          
  
  
  //color example
  stroke(167)
  //R
  fill(r,0,0)
  rect(0,0,510,30)
  fill(255,255,255)
  rect(rx,0,1,30)
  
  //G
  fill(0,g,0)
  rect(0,30,510,30)
  fill(255,255,255)
  rect(gx,30,1,30)

  
  //B
  fill(0,0,b)
  rect(0,60,510,30)
  fill(255,255,255)
  rect(bx,60,1,30)
  
  //Border
  fill(r,g,b)
  rect(0,90,30,510)
  rect(480,90,30,510)
  rect(0,570,510,30)
  
  //Deletion Button
  fill(255,255,255)
  rect(0,570,30)
    
  //Brush options
  
  //Large
  rect(450,420,30)
  circle(495,435, 25)
  
  //Medium
  rect(450,460,30)
  circle(495,475, 20)
  
  //Small
  rect(450,500,30)
  circle(495,515, 15)
  

}