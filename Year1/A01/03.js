function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("rgb(194,229,223)");
  stroke(0.8) 
   fill("rgb(255,255,173)")
circle(435, 195, 280)
 
  //this is the main shapes and such
  fill("grey")
triangle(450, 100, 250, 300, 550, 300)
triangle(500, 60, 330, 300, 590, 300)
  fill("white")
triangle(450, 100, 520, 300, 550, 300)
triangle(500, 60, 620, 300, 590, 300)
  stroke(0.8) 
rect(-1, 301, 602, 102)

 //this section fills the random strokes crossing around
fill("rgb(255,255,255)")
  triangle(450, 100, 465,140, 250, 300)
  triangle(500, 60, 511, 90, 352, 270)
  noStroke()
  fill("grey")
  rect(320, 270,100,29)
  fill("rgb(255,255,255)")
 triangle(450, 101, 464,140, 250, 300)
  fill("rgb(255,255,255)")
  triangle(450, 101, 520.1, 299, 550, 299)
  fill("rgb(255,255,255)")
  triangle(500, 60, 500, 90, 514, 90)
  
//and finally, this is your little bird guy! and yes, it's still a bird even though its only 2 little swoops
  
  
}