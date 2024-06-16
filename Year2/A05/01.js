let history = []
let input = []
let pieSlices = []
let simoning = false
let reps = 0
let frames
let inputing = false
let pressed = false
let same = true
let end = false
let dragged = false

function setup() {
  textAlign(CENTER)
  angleMode(DEGREES)
  createCanvas(windowWidth, windowHeight);
  pieSlices.push({
    X:width/2 + width/20,
    Y:height/2 + height/20,
    W:width * 4/5,
    H:height * 4/5,
    Start:0,
    End:90,
    R:0,
    G:220,
    B:0,
    Colour:'green',
  })
  pieSlices.push({
    X:width/2 - width/20,
    Y:height/2 + height/20,
    W:width * 4/5,
    H:height * 4/5,
    Start:90,
    End:180,
    R:255,
    G:0,
    B:0,
    Colour:'red',
  })
  pieSlices.push({
    X:width/2 - width/20,
    Y:height/2 - height/20,
    W:width * 4/5,
    H:height * 4/5,
    Start:180,
    End:270,
    R:255,
    G:255,
    B:0,
    Colour:'yellow',
  })
  pieSlices.push({
    X:width/2 + width/20,
    Y:height/2 - height/20,
    W:width * 4/5,
    H:height * 4/5,
    Start:270,
    End:0,
    R:0,
    G:0,
    B:255,
    Colour:'blue',
  })
}

function draw() {

  if(simoning){
    simon()
  }
  if(inputing){
    inputs()
  }
  update()
}

function update(){
  background(220);
  fill("black")
  rect(width/20,height/2 - height/20,width - width/10,height/10)
  for(let i = 0; i<pieSlices.length; i++){
    fill(pieSlices[i].R,pieSlices[i].G,pieSlices[i].B)
    arc(pieSlices[i].X, pieSlices[i].Y, pieSlices[i].W, pieSlices[i].H, pieSlices[i].Start, pieSlices[i].End,PIE)
  }
  fill("white")
  rect(width/2 - width/20,height/2 - height/20 - height * 2/5,width/10,height - height/10)
  fill(100,100,255)
  circle(mouseX,mouseY,30)
  frames += 1
  if(end){
    background('black')
    text("THE END",width/2,height/2)
  }
}

function simon(){
  if(reps < history.length){
    if(frames%30 == 0){
      pieSlices[history[reps]].R = 255 - pieSlices[history[reps]].R
      pieSlices[history[reps]].G = 255 - pieSlices[history[reps]].G
      pieSlices[history[reps]].B = 255 - pieSlices[history[reps]].B
    }
    if(frames%50 == 0){
      pieSlices[history[reps]].R = 255 - pieSlices[history[reps]].R
      pieSlices[history[reps]].G = 255 - pieSlices[history[reps]].G
      pieSlices[history[reps]].B = 255 - pieSlices[history[reps]].B
      reps +=1
      frames = 1
    }
  }else{
    simoning = false
    reps = 0
    inputing = true
  }
}

function simonIni(){
  if(simoning === false && inputing === false){
    reps = 0  
    history[history.length] = int(random(0,4))
    simoning = true
    frames = 25
  }
}

function mousePressed(){
  simonIni()
}

function inputs(){
  if(reps<history.length){
    if((mouseIsPressed && !pressed) && (mouseX<pieSlices[2].X && mouseX>pieSlices[2].X-pieSlices[2].W/2) && (mouseY<pieSlices[2].Y && mouseY>(pieSlices[2].Y)-pieSlices[2].H/2) && dist(mouseX,mouseY,pieSlices[2].X,pieSlices[2].Y)<pieSlices[2].W/2){
      console.log("2")
      pressed = true
      reps+=1
      input.push(2)
    } 
    if((mouseIsPressed && !pressed) && (mouseX>pieSlices[0].X && mouseX<pieSlices[0].X+pieSlices[0].W/2) && (mouseY>pieSlices[0].Y && mouseY<(pieSlices[0].Y)+pieSlices[0].H/2) && dist(mouseX,mouseY,pieSlices[0].X,pieSlices[0].Y)<pieSlices[0].W/2){
      console.log("0")
      pressed = true
      reps+=1
      input.push(0)
    } 
    if((mouseIsPressed && !pressed) && (mouseX<pieSlices[1].X && mouseX>pieSlices[1].X-pieSlices[1].W/2) && (mouseY>pieSlices[1].Y && mouseY<(pieSlices[1].Y)+pieSlices[1].H/2) && dist(mouseX,mouseY,pieSlices[1].X,pieSlices[1].Y)<pieSlices[1].W/2){
      console.log("1")
      pressed = true
      reps+=1
      input.push(1)
    } 
    if((mouseIsPressed && !pressed) && (mouseX>pieSlices[3].X && mouseX<pieSlices[3].X+pieSlices[3].W/2) && (mouseY<pieSlices[3].Y && mouseY>(pieSlices[3].Y)-pieSlices[3].H/2) && dist(mouseX,mouseY,pieSlices[3].X,pieSlices[3].Y)<pieSlices[3].W/2){
      console.log("3")
      pressed = true
      reps+=1
      input.push(3)
    }
    if(!mouseIsPressed && pressed){
      pressed = false
    }
  }else{
    for(let i=0;i<history.length;i++){
      if(input[i] !== history[i]){
        same = false
      }
    }
    if(same == true){
      console.log("hi")
      inputing = false
      input = []
      simonIni()
    }else{
      noLoop()
      end = true
      endScreen()

    }
  }
}
  
function endScreen(){
  background('black')
}
