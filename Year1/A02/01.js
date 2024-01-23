function setup() {
  createCanvas(600, 600);
  rectMode(CENTER)
}

function draw() {
  background(0)
  
  stroke("blue")
  strokeWeight(3)
  
  //square 1
  fill("#CFF5E7C4")  
  
//Square1 mouse check
  if (mouseX > width/2.7 && mouseX < width/1.6 && mouseY > height/4.7 && mouseY < height/2.2)
    fill("rgb(0,0,0)")
  
  rect(width/2, height/3, width/4, height/4)
  
  //square 2
  fill ("#A0E4CBC4")
  
  //Square2 mouse check
  if (mouseX > width/2.7 && mouseX < width/1.6 && mouseY > height/1.85 && mouseY < height/1.25)
    fill("rgb(0,0,0)")
  
  rect(width/2, height/1.5, width/4, height/4)
  
  //square 3
  fill ("#59C1BDC4")
  
  //Square3 mouse check
  if (mouseX > width/5 && mouseX < width/2.2 && mouseY > height/2.7 && mouseY < height/1.58)
    fill("rgb(0,0,0)")
  rect(width/3, height/2, width/4, height/4)
  
  //square 4
  fill ("#0D4C92C4")
  
  //Square4 mouse check
  if (mouseX > width/1.9 && mouseX < width/1.25 && mouseY > height/2.7 && mouseY < height/1.58)
    fill("rgb(0,0,0)")
  rect(width/1.5, height/2, width/4, height/4)
  
  //center circle
  fill ("#85CDFDC4")
  ellipse(width/2, height/2, width/3, height/3,)
  
  //outer circle 1
  fill("#7286D3C4")
  ellipse(width/5, height/5, width/3, height/3)
  
  //outer circle 2
  fill("#8EA7E9C4")
  ellipse(width/1.25, height/5, width/3, height/3)
  
  //outer circle 3
  fill("#E5E0FFC4")
  ellipse(width/5, height/1.25, width/3, height/3)
  
  //outer circle 4
  fill("#FFF2F2C4")
  ellipse(width/1.25, height/1.25, width/3, height/3)
  
  noStroke()
  
  //Triangle 1
  fill("#82AAE3A3")
  triangle(width, height, width/2, height, width/2, 0)
  
  //Triangle 2
  fill("#91D8E4A3")
  triangle(width, 0, 0, height/2, width, height/2)
  
  //Triangle 3
  fill("#BFEAF5A3")
  triangle(0, height, 0, height/2, width, height/2)
  
  //Triangle 4
  fill("#EAFDFCA3")
  triangle(0, 0, width/2, height, width/2, 0)
  
  //Line Cross
  stroke("rgba(0,0,255,0.56)")
  strokeWeight(20)
  line(width/2, height, width/2, 0, )
  line(width, height/2, 0, height/2, )
  
  
}