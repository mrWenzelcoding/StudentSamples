Size = 600
blockSize = 9
blocks = 3
flowerCount = 10
houses = []
road = []
flowerz = []
blockz = []
flowerImg = []
roadz = []
foundationz = []
house = []
grassColour = ["rgb(66,150,57)",66,150,57]
foundationColour = ["rgb(184, 122, 34)",184,122,34]
roadColour = ["rgb(0,0,0)",0,0,0]

function preload(){  
  for(let i = 0; i<2; i++){
    flowerImg[i] = loadImage("assets/flower"+str(i)+".jpeg")
  }
}

function setup() {
  noStroke()
  createCanvas(Size, Size);
  road.push({
    Type:"Dirt"
  })
  roads()
  block()
  foundations()
//  flowers(flowerCount)
}

function draw() {

  drawEverything()
}

function mouseMoved(){
  highlight()
}

function block(){
  rectMode(CENTER)
  for(let i = 1;i<(blocks*2);i++){
    for(let j = 1;j<(blocks*2);j++){

      fill(grassColour[0]);
//      let colour = get((i/(blocks*2))*Size,(j/(blocks*2))*Size) 
      if(i % 2 === 1 && j % 2 === 1){
        rect((i/(blocks*2))*Size,(j/(blocks*2))*Size,(Size/blocks -(Size/30)))
        blockz.push({
          X:(i/(blocks*2))*Size - (Size/blocks -(Size/30))/2,
          Y:(j/(blocks*2))*Size - (Size/blocks -(Size/30))/2,
          D:((Size-((Size/30)*blocks))/blocks),
          R:grassColour[1],
          G:grassColour[2],
          B:grassColour[3],
          Highlighted:false
        })
      }
    }
  }
  rectMode(CORNER)
}

function foundations(){
  rectMode(CENTER)
  for(let i = 0; i < blockz.length; i++){
    for(let j = 1; j < blockSize * 2; j ++){
      for(let k = 1; k < blockSize * 2; k ++){
        fill(foundationColour[0])
        if((j == 1 || j == blockSize*2 -1 || k == 1 || k == blockSize*2 -1) && (j % 2 == 1 && k % 2 == 1)){
          rect((blockz[i].D*(j/(blockSize*2)))+blockz[i].X,(blockz[i].D*(k/(blockSize*2)))+blockz[i].Y,(blockz[i].D - 30)/blockSize)
          foundationz.push({
            X:(blockz[i].D*(j/(blockSize*2)))+blockz[i].X,
            Y:(blockz[i].D*(k/(blockSize*2)))+blockz[i].Y,
            D:(blockz[i].D - 30)/blockSize,
            R:foundationColour[1],
            G:foundationColour[2],
            B:foundationColour[3],
            Highlighted:false,
            House:false
          })
        }  
      }
    }
  }
  rectMode(CORNER)
}
      
function mousePressed(){  
  for(let i = 0; i<foundationz.length;i++){
    if(foundationz[i].Highlighted == true && foundationz[i].House == false){
      createHouse(foundationz[i].X,foundationz[i].Y,foundationz[i].D-10,foundationz[i].D-10,(foundationz[i].D - 10) * random(0.3,0.6),random(150,200),random(175,225),random(200,255))
      foundationz[i].House = true
    }
  }
}

function createHouse(x,y,w,h,rH,r,g,b){
  // fill(r,g,b)
  // rect(x,y,w,h)
  // fill(255-r,255-g,255-b)
  // triangle(x,y,x+w,y,x+w/2,y-rH)
  house.push({
    X:x,
    Y:y,
    W:w,
    H:h,
    rH:rH,
    R:r,
    G:g,
    B:b
  })
}

function roads(){
  rectMode(CENTER)
  noStroke()

  for(let i = 0; i<blocks+1; i++){
    fill(roadColour[0]) 
    rect(Size*(i/blocks),Size/2,Size/30,Size)
    rect(Size/2,Size*(i/blocks),Size,Size/30)
    fill("yellow")
    for(let j = 0; j<Size/20; j++){
      rect(Size*(i/blocks),j*20,Size/120,Size/80)
      rect(j*20,Size*(i/blocks),Size/80,Size/120)
    }
    roadz.push({
      X:Size*(i/blocks),
      Y:Size/2,
      W:Size/30,
      H:Size,
      R:roadColour[1],
      G:roadColour[2],
      B:roadColour[3],
      Highlighted:false
    })
    roadz.push({
      X:Size/2,
      Y:Size*(i/blocks),
      W:Size,
      H:Size/30,
      R:roadColour[1],
      G:roadColour[2],
      B:roadColour[3],
      Highlighted:false
    })
  }
  rectMode(CORNER)
}

function flowers(count) {
  
  imageMode(CENTER)
  for(let i = 0; i<count;i++){
    let x = random(Size)
    let y = random(Size)
    let colour = get(x,y)
    if(colour[0] == blockz[0].R && colour[1] == blockz[0].G && colour[2] == blockz[0].B){
      let flowerTemp = random(flowerImg)
      image(flowerTemp,x,y,flowerTemp.width,flowerTemp.height)
      flowerz.push({
        X:x,
        Y:y,
        Type:"flower"
      })
    }
    else{
      count++
    }
    console.log(colour)
  }
}

function drawEverything(){
  //draw roads
  rectMode(CENTER)
  for(let i = 0; i < roadz.length; i++){
    fill(roadz[i].R,roadz[i].G,roadz[i].B)
    rect(roadz[i].X,roadz[i].Y,roadz[i].W,roadz[i].H)
  }
  rectMode(CORNER)
  //draw blocks
  for(let i = 0; i < blockz.length; i ++){
    fill(blockz[i].R,blockz[i].G,blockz[i].B)
    rect(blockz[i].X,blockz[i].Y,blockz[i].D)
  }
  //draw foundations
  rectMode(CENTER)
  for(let i = 0; i < foundationz.length; i ++){
    fill(foundationz[i].R,foundationz[i].G,foundationz[i].B)
    rect(foundationz[i].X,foundationz[i].Y,foundationz[i].D)
  }
  //draw houses
  for(let i = 0; i < house.length; i ++){
    fill(house[i].R,house[i].G,house[i].B)
    rect(house[i].X,house[i].Y,house[i].W,house[i].H)
    stroke("black")
    //door
//    fill("red")
    rect(house[i].X - house[i].W/6, house[i].Y + house[i].H/4,house[i].W/6, -house[i].H/2)
    noStroke()
    fill(255-house[i].R,255-house[i].G,255-house[i].B)
    //roof
    triangle(house[i].X - house[i].W/2,house[i].Y - house[i].H/2,
             house[i].X+house[i].W/2,house[i].Y - house[i].H/2,
             house[i].X,(house[i].Y - house[i].H/2)-house[i].rH)
  }
  rectMode(CORNER)
}

function highlight(){
  //check foundations
  for(let i = 0; i<foundationz.length; i++){
    if(mouseX > (foundationz[i].X - foundationz[i].D/2) && mouseX < (foundationz[i].X + foundationz[i].D/2) && mouseY > (foundationz[i].Y - foundationz[i].D/2) && mouseY < (foundationz[i].Y + foundationz[i].D/2)){
      foundationz[i].R = foundationColour[1] + 20
      foundationz[i].G = foundationColour[2] + 20
      foundationz[i].B = foundationColour[3] + 20
      if(foundationz[i].House === false){
        foundationz[i].Highlighted = true
      }
    }else{
      foundationz[i].R = foundationColour[1]
      foundationz[i].G = foundationColour[2]
      foundationz[i].B = foundationColour[3]
      foundationz[i].Highlighted = false
    }
  }
  //check blocks
  for(let i = 0; i<blockz.length; i++){
    if((mouseX > blockz[i].X && mouseX < blockz[i].X + blockz[i].D) && (mouseY > blockz[i].Y && mouseY < blockz[i].Y + blockz[i].D)){
      blockz[i].R = grassColour[1] + 20
      blockz[i].G = grassColour[2] + 20
      blockz[i].B = grassColour[3] + 20
      blockz[i].Highlighted = true
    }else{
      blockz[i].R = grassColour[1]
      blockz[i].G = grassColour[2]
      blockz[i].B = grassColour[3]
      blockz[i].Highlighted = false
    }
  }
  //check roads
  for(let i = 0; i<roadz.length; i++){
    if((mouseX > roadz[i].X - roadz[i].W/2 && mouseX < roadz[i].X + roadz[i].W/2) && (mouseY > roadz[i].Y - roadz[i].H/2 && mouseY < roadz[i].Y + roadz[i].H/2)){
      roadz[i].R = roadColour[1] + 60
      roadz[i].G = roadColour[2] + 60
      roadz[i].B = roadColour[3] + 60
      roadz[i].Highlighted = true
    }else{
      roadz[i].R = roadColour[1]
      roadz[i].G = roadColour[2]
      roadz[i].B = roadColour[3]
      roadz[i].Highlighted = false
    }
  }
  
}

// function mousePressed(){
//   console.log(get(mouseX,mouseY),blockz,roadz,foundationz,frameRate())
  
// }
//  createHouse(random(0,Size),random(0,Size),random(20,40),random(30,50),random(10,20),random(200,255),random(200,250),random(200,255))

