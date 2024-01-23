//cloud placement
let a = []
let b = []
let c = []
let d = []


function setup() {
  
  for(let i=0; i<20; i++){
  a[i] = random(600)
  b[i] = random(400)+100
  c[i] = random(50)+25
  d[i] = random(50)+25
  }
  createCanvas(600, 600);
  
  

  
}

function draw() {
  background("rgb(193,242,252)");
  noStroke()

   for(let i=0; i<20; i++){
  //Clouds
  fill("rgba(255,255,255,0.85)")
  ellipse( a[i], b[i], c[i], d[i])
   }
  
  
  //Island rock
  fill("rgb(163,143,125)")
  triangle(400, 300, 200, 300, 350, 450,)
  triangle(400, 300, 200, 300, 250, 400,)
  
  //Island surface
  fill("green")
  rect(200, 275, 200, 25,)
  triangle(400, 300, 200, 300, 350, 325,)
  triangle(400, 300, 200, 300, 220, 310,)
  
  //Tree truck
  fill("rgb(128,59,17)")
  rect(220, 250, 15, 40,)
  
  //Tree canopy
  fill("green")
  ellipse(228, 240, 50, 30)
  ellipse(232, 246, 25, 30)
  
  //Lake
  fill("rgb(78,180,255)")
  ellipse(330,288,80,26)
  
  //River
  rect(350, 288, 50, 10,)
  
  //Upper behind fall mist
  fill("rgba(177,238,233,0.81)")
  ellipse(331, 288, 27, 18)
  ellipse(336, 280, 16, 18)
  ellipse(320, 275, 12, 19)
  ellipse(325, 279, 16, 18)
  
  //upper falls
  fill("rgba(148,247,238,0.61)")
  rect(320, 0, 23, 290,)
  
  //lower falls
  rect(400, 288, 10, 350)
  
  //Lower fall mist
  fill("rgba(190,236,232,0.81)")
  ellipse(395, 292, 15, 18)
  ellipse(406, 296, 15, 18)
  ellipse(400, 300, 15, 18)
  ellipse(409, 306, 15, 18)
  
  //Sun aura
  fill("rgba(255,0,108,0.54)")
  circle(27, 27, 130,)
  fill("rgba(255,0,172,0.37)")
  circle(27, 27, 230,)
  fill("rgba(79,0,255,0.16)")
  circle(27, 27, 330,)
  
  //Sun
  fill("yellow")
  circle(27, 27, 29,)
  
  //bug?
  fill("rgba(255,255,255,0.69)")
  circle(mouseX+3, mouseY-3, 5)
  circle(mouseX-3, mouseY-3, 5)
  fill("black")
  circle(mouseX, mouseY, 5)
  
}
