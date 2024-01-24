
let pup
function preload(){
 pup=loadImage("assets/dog.png") 
}

let r=[]
let g=[]
let b=[]

let loc
let z

function setup() {
  createCanvas(1000, 1000);
  background("black")
  rectMode(CENTER)
  imageMode(CENTER)
  

  
  for(let i=0; i<3; i++){
  for(let j=0; j<3; j++){
  createBlock(300/2+350*j,300/2+350*i)
  
  }
}
  lines()
  
 
}

function createHouse(hX,hY,hW,hH,io){
  
  for(let i=0; i<1; i++){
  r[i]=random(255)
  g[i]=random(255)
  b[i]=random(255)
    //House main//
    fill(r[i],g[i],b[i])
    if(io==0){
    rect(hX,hY,hW,hH)
    }
    if(io==1){
    rect(hX+150,hY,hW,hH)
    }
    if(io==2){
    rect(hX,hY+150,hW,hH)
    }
    if(io==3){
    rect(hX+150,hY+150,hW,hH)
    }
    //Roof//
    fill(r,g,b)
    
       if(io==0){
    triangle(hX-hW/2,hY-hH/2,hX+hW/2,hY-hH/2,hX,hY-hH)
    }
       if(io==1){
    triangle(hX-hW/2+150,hY-hH/2,hX+hW/2+150,hY-hH/2,hX+150,hY-hH)
    }
       if(io==2){
    triangle(hX-hW/2,hY-hH/2+150,hX+hW/2,hY-hH/2+150,hX,hY-hH+150)
    }
       if(io==3){
    triangle(hX-hW/2+150,hY-hH/2+150,hX+hW/2+150,hY-hH/2+150,hX+150,hY-hH+150)
    }
   //door//
    fill("brown")
    
    if(io==0){
     rect(hX,hY+8,13,hH/2) 
    }
        if(io==1){
     rect(hX+150,hY+8,13,hH/2) 
    }
        if(io==2){
     rect(hX,hY+158,13,hH/2) 
    }
        if(io==3){
     rect(hX+150,hY+158,13,hH/2) 
    }
    
    //doorknob//
    fill("khaki")
    
    if(io==0){
    circle(hX-2,hY+hH*0.21,4)
    }
        if(io==1){
    circle(hX-2+150,hY+hH*0.21,4)
    }
        if(io==2){
    circle(hX-2,hY+hH*0.21+150,4)
    }
        if(io==3){
    circle(hX-2+150,hY+hH*0.21+150,4)
    }
    
  }
  
  z=random(9)
  if(z>6){
    loc=1
  }else if(z>3){
    loc=0
  }else{
    loc=-1
  }
  if(loc != 0){
  moreFeatures(hX+50*loc,hY+50*loc)
  }
  
}


function createBlock(bX,bY){
    fill("lightgreen")
    rect(bX,bY,300)
  for(let i=0; i<4; i++){
    createHouse(bX-75,bY-75,random(30,40),random(30,40),i)
  }
}

function lines(){
  
  fill("yellow")
  
  for(let i=0; i<25; i++){
    //downward lines
   rect(325,i*height/20,5,15)
   rect(675,i*height/20,5,15) 
    //sideways lines
   rect(i*width/20,325,15,5)
   rect(i*width/20,675,15,5) 
  }
  
}

function moreFeatures(dX,dY){
 image(pup,dX,dY,30,30)
  
}



