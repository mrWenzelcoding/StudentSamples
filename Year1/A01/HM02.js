function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  
  noStroke()
  fill('#B4406F')
  rect(0,0,400,40)
  fill("#BB4370")
  rect(0,40,400,45)
  fill('#CC4B71')
  rect(0,85,400,50)
  fill('#D95B67')
  rect(0,135,400,55)
  fill('#E17261')
  rect(0,190,400,60)
  fill('#DF8169')
  rect(0,250,400,65)
  
  fill('#FBC94E')
  circle(200,150,100)
  fill('rgba(225, 93, 88, 0.55)')
  circle(200,150,210)
  
    fill('#0F1535')
 triangle(0,280,190,350,5,150)
  fill('#222745')
  triangle(400,400,190,400,350,160)

  fill('#6F7D70')
  quad(198,400,350,310,40,310,100,400)
  
  fill('#271138')
  quad(0,278,190,330,50,340,50,350)
  fill('#272E36')
  triangle(400,220,400,320,220,320)
  
  fill('#000815')
  triangle(0,400,180,400,0,270)
  triangle(400,270,400,400,190,400)
  
  fill("#010312")
  triangle(0,400,210,400,0,320)
  triangle(400,320,400,400,230,400)
  
  
  fill("#01000E")
  triangle(0,350,0,400,150,400)
  triangle(250,400,400,400,400,350)
  
  
}