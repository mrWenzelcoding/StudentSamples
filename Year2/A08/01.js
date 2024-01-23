
//Color Weight
function nextpointCol(){
  let col;
  let f = random(1)
  if(f < 0.2){
    col = random(0,51)
  } 
  else if(f < 0.4){
    col = random(52,102)
  }
  else if(f < 0.6){
    col = random(103,153)
  }
  else if(f < 0.8){
    col = random(154,204)
  }
  else if(f < 1){
    col = random(205,255)
  }
  return col;
}
function setup() {
  createCanvas(1000, 1000);
nextpointCol()
  background(nextpointCol(),nextpointCol(),nextpointCol())
  noStroke()
}

function nextpoint(){
  let x;
  let r = random(1)
  if(r < 0.02){
   x = random(0,125)
  }
  else if( r < 0.1){
    x = random(126,250)
    
  } 
  else if( r < 0.25){
     x = random(251,375)
    }
  else if( r < 0.5){
   x =random(376,500)
  }
  else if(r < 0.75){
   x = random(501,625)
  }
  else if( r < 0.9){
     x = random(626,750)
  }
  else if( r < 0.98){
    x = random(751,875)
  }
  else if(r < 1){
    x = random(876,1000)
  } 
  return x;
}

//Stroke Weight
function nextpointZ(){
  let z;
  let r = random(1)
  if(r < 0.02){
   y = random(0,10)
  }
  else if( r < 0.1){
    z = random(11,20)
    
  } 
  else if( r < 0.25){
     z = random(21,30)
    }
  else if( r < 0.50){
   z =random(31,40)
  }
  else if(r < 0.75){
   z = random(41,50)
  }
  else if( r < 0.90){
     z = random(51,60)
  }
  else if( r < 0.98){
    z = random(61,70)
  }
  else if(r < 1){
    z = random(71,80)
  }
  return z;
}




function call(){
    nextpoint()
  nextpointZ()
  nextpointCol()
}
function draw() {
  call()
 
  stroke(nextpoint(),nextpointCol(),nextpointCol(),nextpointCol())
  strokeWeight(nextpointZ())
  point(nextpoint(), nextpoint())
}