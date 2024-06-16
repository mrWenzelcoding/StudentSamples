let balls = []

function setup() {
  createCanvas(400, 400);
  
  for (let i = 0; i<60; i++) {
    balls.push({
      X:random(0,width),
      Y:random(0,height),
      XSpeed:random(-2,2),
      YSpeed:random(-2,2),
      
      R:random(20),
      G:random(255),
      B:random(255),
      A:random(200),
      ASpeed:(-1),
      S1:random(30,60),
      S2:random(15,30)
      
    })
  }
}

function draw() {
  background(0,0,0,210);
  
  strokeWeight(0)
  
  
  for (let i = 0; i<60; i++) {
  fill(balls[i].R,balls[i].G,balls[i].B,balls[i].A)
  circle(balls[i].X,balls[i].Y,balls[i].S1)
  fill(balls[i].R,balls[i].G,balls[i].B,balls[i].A)
  circle(balls[i].X,balls[i].Y,balls[i].S2)
  
  balls[i].X+=random(-2,2)
  balls[i].Y+=random(-2,2)
    
  balls[i].A+=balls[i].ASpeed
  balls[i].T+=balls[i].TSpeed
  
    
  if ((balls[i].X < 0)) {
      //balls[i].XSpeed = random(0,3)
      balls[i].X = random(width)
      balls[i].R = random(255)
      balls[i].G = random(20)
      balls[i].B = random(255)
 //     balls[i].A = random(200)
      }   
  if ((balls[i].X > width)) {
    //balls[i].XSpeed = random(-3,0)
    balls[i].X = random(width)
    balls[i].R = random(255)
    balls[i].G = random(20)
    balls[i].B = random(255)
//    balls[i].A = random(200)
  } 
  if ((balls[i].Y < 0)) {
    //balls[i].YSpeed = random(0,3)
      balls[i].Y = random(height)
      balls[i].R = random(255)
      balls[i].G = random(20)
      balls[i].B = random(255)
//      balls[i].A = random(200)
  }
  if ((balls[i].Y > height)) {
    //balls[i].YSpeed = random(-3,0)
    balls[i].Y = random(height)
    balls[i].R = random(255)
    balls[i].G = random(20)
    balls[i].B = random(255)
//    balls[i].A = random(200)
  }
  if ((balls[i].A < -100)) {
    balls[i].ASpeed = (1)
  } 
  if ((balls[i].A > 250)) {
    balls[i].ASpeed = (-1)
  }  
    
}
  
}
