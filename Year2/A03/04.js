let x=[], y=[];
let a=[];
let xOff=[], yOff=[],  aOff=[];
let c = [];

function setup() {
  createCanvas(400, 400);

   for(let i = 0; i<30; i++){
     
    c[i]=255 
     
    x[i] = 0 //from example code
    y[i] = 0
    a[i] = 0

    xOff[i] = random(-5,6);

    yOff[i] = random(-5,6);

    aOff[i] = random(-2,3);

  }
  noStroke();
}

function draw() {
  
  background(255);
  

  fill('black'); 
  rect(0, height / 2, width, height / 2);
  
  for(let i = 0; i<30; i++){

    for(let n = 0 ; n < 30; n++){

     fill(c[i],200/n*2.7)
      
     circle(x[i],y[i],5+n*(a[i]+0.2)) //from example code

      }
   
  
      x[i] = noise(xOff[i]) * width

      xOff[i] = xOff[i] + 0.003+random(0,0.01)

      y[i] = noise(yOff[i]) * height

      yOff[i] = yOff[i] +0.003+random(0,0.01)

      a[i] = noise(aOff[i])

      aOff[i] = aOff[i] + 0.03+random(0,0.01)
     
      if(y[i]<= 200){
        c[i] = 0
      }
     
     if(y[i] >= 200){
       c[i] = 255
     }

   }
}
