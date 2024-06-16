cell = []
food = []
stats = []
pressed = 0
drop = true
maps = []
cellStats = []
menu = false
clicked = false
let back
let c
let r


function setup() {
  createCanvas(400, 400);
  cell.push({
    X:random(width),
    Y:random(height),
    Xv:0,
    Yv:0,
    Xa:0,
    Ya:0,
    D:20,
    R:100,
    G:150,
    B:200,

  })
  cellStats.push({
    XBurst:2,
    YBurst:2,  
    maxfood:2,
    Protection:0,
    MaxSize:20,
  })
  maps = [[[0.25,0.25,20],[0.20,0.20,15],[0.15,0.15,10],[0.20,0.20,15],[0.25,0.25,20]],
          [[0.20,0.20,15],[0.15,0.15,10],[0.10,0.07,10],[0.15,0.15,10],[0.20,0.20,15]],
          [[0.15,0.15,10],[0.10,0.07,10],[0.05,0.00,05],[0.10,0.10,07],[0.15,0.15,10]],
          [[0.20,0.20,15],[0.15,0.15,10],[0.10,0.07,10],[0.15,0.15,10],[0.20,0.20,15]],
          [[0.25,0.25,20],[0.20,0.20,15],[0.15,0.15,10],[0.20,0.20,15],[0.25,0.25,20]]]
  r = floor(maps.length/2)
  c = floor(maps[0].length/2)  
  mapChanged()
}

function draw() {
  background(back,100);
  if(!menu){
  Cell()
  if(drop){
    Drop()
  }
  if(food.length>=1){
    for(let i = 0; i<food.length;i++){
      Food(i)
      Eat(i)
    }
  }
  acid()
  if(cell[0].X>width+(cell[0].D/2) && maps[r+1] != undefined){
    r+=1
    mapChanged()
    cell[0].X = (cell[0].D/2)
  }
  if(cell[0].X<-(cell[0].D/2) && maps[r-1] != undefined){
    r-=1
    mapChanged()
    cell[0].X = width-(cell[0].D/2)
  }
  if(cell[0].Y>height+(cell[0].D/2) && maps[0][c+1] != undefined){
    c+=1
    mapChanged()
    cell[0].Y = (cell[0].D/2)
  }
  if(cell[0].Y<-(cell[0].D/2) && maps[0][c-1] != undefined){
    c-=1
    mapChanged()
    cell[0].Y = height-(cell[0].D/2)
  }
  if(cell[0].D<=0){
    noLoop()
  }
  }
  colorMode(HSB)
  fill(cell[0].D*(360/cellStats[0].MaxSize),100,100)
  textSize(25)
  textAlign(LEFT)
  text(round(cell[0].D,2),5,25)
  colorMode(RGB)
  fill(0,100)
  rect((8/10)*width,(1/20)*height,(0.75/5)*width,(1/15)*height)
  if(mouseX < (8/10)*width + (0.75/5)*width && mouseX > (8/10)*width && mouseY < (1/20)*height + (1/15)*height && mouseY > (1/20)*height && mouseIsPressed && !clicked){
    console.log("hi")
    menu = !menu
    clicked = true
    background(back)
    cell[0].Xv = 0
    cell[0].Yv = 0
  }
  if(!mouseIsPressed){
    clicked = false
  }
  if(menu){
    // background(back)
    // fill(0,100)
    // rect((8/10)*width,(1/20)*height,(0.75/5)*width,(1/15)*height)
    stroke(255-fill)
    textAlign(CENTER)
    text("Upgrade Bursts (b)",width/2,height*(1/5))
    text(str(cellStats[0].MaxSize*0.75+cellStats[0].XBurst*5),width/2,height*(3/10))
    if(pressed == "b" && cell[0].D>=cellStats[0].MaxSize*0.75+cellStats[0].XBurst*5){
      cell[0].D-=cellStats[0].MaxSize*0.75+cellStats[0].XBurst*5
      cellStats[0].XBurst += 1
      cellStats[0].YBurst += 1
    }
    text("Upgrade Maximum Food (f)",width/2,height*(2/5))
    text(str(cellStats[0].MaxSize*0.8+(cellStats[0].maxfood*5)),width/2,height*(5/10))
    if(pressed == "f" && cell[0].D>=cellStats[0].MaxSize*0.8+(cellStats[0].maxfood*5)){
      cell[0].D-=cellStats[0].MaxSize*0.8+(cellStats[0].maxfood*5)
      cellStats[0].maxfood += 1
      drop = true
    }
    text("Upgrade Acid Protection (p)",width/2,height*(3/5))
    text(str(cellStats[0].MaxSize/2+(cellStats[0].Protection*100)),width/2,height*(7/10))
    if(pressed == "p" && cell[0].D>=cellStats[0].MaxSize/2+(cellStats[0].Protection*100)){
      cell[0].D-=cellStats[0].MaxSize/2+(cellStats[0].Protection*100)
      cellStats[0].Protection += 0.01
    }
    text("Upgrade Maximum Size (s)",width/2,height*(4/5))
    text(str(cellStats[0].MaxSize*0.9),width/2,height*(9/10))
    if(pressed == "s" && cell[0].D>=cellStats[0].MaxSize*0.9){
      cell[0].D-=cellStats[0].MaxSize*0.9
      cellStats[0].MaxSize += 10
    }
    pressed = ""
  }
}

function Eat(i){
  if(dist(food[i].X,food[i].Y,cell[0].X,cell[0].Y) <= (food[i].D+cell[0].D)/2){
    if(cell[0].D<=cellStats[0].MaxSize && sqrt(food[i].D**2 + cell[0].D**2) <= cellStats[0].MaxSize){
      cell[0].D = sqrt(food[i].D**2 + cell[0].D**2)
    }else{
      cell[0].D = cellStats[0].MaxSize
    }
    food.splice(i,1)
    drop = true
    console.log(cell[0].D)
  }
}

function Food(i){
  circle(food[i].X,food[i].Y,food[i].D)
}

function Cell(){
  fill(cell[0].R,cell[0].G,cell[0].B)
  circle(cell[0].X,cell[0].Y,cell[0].D)
  cell[0].X+=cell[0].Xv
  cell[0].Y+=cell[0].Yv
  cell[0].Xv+=cell[0].Xa
  cell[0].Yv+=cell[0].Ya
  friction()
}

function detectMovement(){
  if(pressed == "ArrowDown"){
    cell[0].Yv = cellStats[0].YBurst
  }
  if(pressed == "ArrowUp"){
    cell[0].Yv = -cellStats[0].YBurst
  }
  // if(pressed != "ArrowUp" && pressed != "ArrowDown"){
  //   cell[0].Yv = 0   
  // }
  if(pressed == "ArrowLeft"){
    cell[0].Xv = -cellStats[0].XBurst
  }
  if(pressed == "ArrowRight"){
    cell[0].Xv = cellStats[0].XBurst
  }
  // if(pressed != "ArrowLeft" && pressed != "ArrowRight"){
  //   cell[0].Xv = 0   
  // }
}

function friction(){
  cell[0].Xa = -cell[0].Xv*stats[0].Friction
  cell[0].Ya = -cell[0].Yv*stats[0].Friction
}

function keyPressed(){
  pressed = key
  detectMovement()
}

function Drop(){
  food.push({
    X:random(width),
    Y:random(height),
    D:stats[0].FoodDiameter
  })
  if(food.length>=cellStats[0].maxfood){
    drop = false
  }
}

function mousePressed(){
//  console.log(cell[0].Xa,cell[0].Ya,food,maps,c,r)
}

function mapChanged(){
  food.splice(0,food.length)
  drop = true
  stats.splice(0,1)
  stats.push({
    Friction:maps[r][c][0],
    FoodDiameter:maps[r][c][2],
    Acidity:maps[r][c][1],
  })
  back = random(100,255)
}

function acid(){
  if(cellStats[0].Protection<stats[0].Acidity){
    cell[0].D-=(stats[0].Acidity-cellStats[0].Protection)
  }else{
    cell[0].D-=0.001
  }
}