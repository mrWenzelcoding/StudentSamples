let colorPicker;
let color;
//let palate;



function setup() {
    noStroke()
  createCanvas(500, 600);
  background(243, 243, 242);
  colorPicker=createColorPicker ('black')
  colorPicker.position(97,380)
  colorPicker.size(50,20)

  //palate=243, 243, 242

 
}

  function draw() {
  //frame
  fill(0, 66, 37)
  rect(0,0,600,50)
  rect(0,0,78,600)
  rect(420,30,100,600)
  rect(0,420,500,200)
    //left wall
    fill(1, 46, 26)
    rect(66,0,3,553)
    //right wall
    rect(431,0,3,553)
    //floor
    fill(193, 154, 107)
    quad(70,550,431,550,500,600,0,600)
    //frame2
    fill(96, 54, 6)
    rect(78,50,340,20)
    rect(78,70,20,350)
    rect(400,50,20,350)
    rect(78,400,342,20)
    //legs
    quad(245,421,255,421,252,587,248,587)
    //rect(244.5,421,10,600)
    rect(200,504,95,10)
    //rect(165,568,165,10)
    quad(245,421,255,421,150,600,140,600)
    quad(245,421,255,421,350,600,340,600)
  
  //earser
    fill('pink')
  rect(99,403,45,15)
    fill(7, 42, 107)
  rect(107,403,40,15)
    fill(255)
    textFont ('Courier New')
    textSize(10)
    text('ERASER',109,413)
    //
    fill(6, 116, 68)
    textSize(10)
    text('*double click "ERASER" to erase the canvas*',120,15)
    //paint brush
    fill (177, 99, 25)
    ellipse(385,590,50,3)
    fill(205, 173, 144)
    ellipse(406,590,10,4)
    fill(215, 219, 221)
    quad(398,588,403,586,403,593,398,592)
    //brush
  if (mouseIsPressed){
   let color=colorPicker.color (0);
   fill(color)
  circle(mouseX,mouseY,15)


  }
  }


  function doubleClicked (){
  background (243, 243, 242)
}