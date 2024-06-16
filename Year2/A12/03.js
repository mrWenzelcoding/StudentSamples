let point1 = []
let point2 = []
let point3 = []
let point4 = []
let t
let t2
let t3
let t4
let n = 0
let n2 = 0
let n3 = 0
let n4 = 0
let score
let size
let planted1
let planted2
let planted3
let planted4
let plant1N
let plant2N
let plant3N
let plant4N
let canPlant1
let canPlant2
let canPlant3
let canPlant4
let spawnT1
let spawnT2
let spawnT3
let spawnT4
let price1
let price2
let price3
let price4

function setup() {
  createCanvas(600, 600);
  rectMode(CENTER)
  noStroke()
  
  spawnT1 = 600
  spawnT2 = 600
  spawnT3 = 600
  spawnT4 = 600
  
  size = 60
  
  planted1 = false
  planted2 = false
  planted3 = false
  planted4 = false
  
  plant1N = 0
  plant2N = 0
  plant3N = 0
  plant4N = 0
  
  canPlant1 = true
  canPlant2 = false
  canPlant3 = false
  canPlant4 = false
  
  price1 = 5
  price2 = 10
  price3 = 20
  price4 = 50
  
  point1[0] = {
    x: 100,
    y: 80,
    s: 40,
    r: random(200,255),
    g: random(175,250),
    b: random(20,75),
    a: 0
  }
  
  point2[0] = {
    x: 100,
    y: 210,
    s: 40,
    r: random(30,160),
    g: random(80,255),
    b: random(175,255),
    a: 0
  }
  
  point3[0] = {
    x: 100,
    y: 340,
    s: 40,
    r: random(175,255),
    g: random(180,255),
    b: random(20,200),
    a: 0
  }
  
  point4[0] = {
    x: 100,
    y: 470,
    s: 40,
    r: random(175,255),
    g: random(180,255),
    b: random(20,200),
    a: 0
  }
  
  
  
  t = 0
  t2 = 0
  t3 = 0
  t4 = 0
  
  score = 5
  
}

function draw() {
  background(40,100,50);
  
  t++
  t2++
  t3++
  t4++
  
  fill('rgb(116,36,26)')
  rect(width/2, 80, 500, 105)
  
  fill('rgb(13,121,98)')
  rect(width/2, 210, 500, 105)
  
  fill('rgb(46,162,68)')
  rect(width/2, 340, 500, 105)
  
  fill('rgb(106,10,107)')
  rect(width/2, 470, 500, 105)
  
  for(let j = 0; j < 4; j++){
    for(let i = 0; i < 4; i++){
      planter(100+i*130, 80+j*130)
      
    }
   
  }
  
  rect(width/2,565,width,70)
  
  fill('rgb(116,36,26)')
  rect(160,565,size)
  
  fill('rgb(13,121,98)')
  rect(275,565,size)
  
  fill('rgb(46,162,68)')
  rect(395,565,size)
  
  fill('rgb(106,10,107)')
  rect(515,565,size)
  
  fill('rgb(74,100,116)')
  rect(35,565,60,60)
  
  textAlign(CENTER)
  fill(24,44,97)
  textSize(40)
  text(score, 35, 580)
  text(price1, 160, 580)
  text(price2, 275, 580)
  text(price3, 395, 580)
  text(price4, 515, 580)
  
  
  if(planted1 == true){
    
    
    for(let k = 0; k < plant1N; k++){
      plant1(100+k*130,80)
    }
    
       for(let i = 0; i < n; i++){
        fill(point1[i].r, point1[i].g, point1[i].b, point1[i].a)
        point1[i].a++
        ellipse(point1[i].x, point1[i].y, point1[i].s)
      }
    
    
    
    if(t > spawnT1){
    point1[n] = {
      x: random(50,550),
      y: random(30, 125),
      s: random([25,30,35]),
      r: random(200,255),
      g: random(175,250),
      b: random(20,75),
      a: 0
   }
    
   t = 0
   n++
 }
  }
  
  
  if(planted2 == true){
    
    for(let h = 0; h < plant2N; h++){
      plant2(100+h*130,210)
      
      for(let j = 0; j < n2; j++){
        fill(point2[j].r, point2[j].g, point2[j].b, point2[j].a)
        point2[j].a++
        ellipse(point2[j].x, point2[j].y, point2[j].s)
      }
      
      
      
      if(t2 > spawnT2){
    point2[n2] = {
      x: random(50,550),
      y: random(160, 255),
      s: random([25,30,35]),
      r: random(30,160),
      g: random(80,255),
      b: random(175,255),
      a: 0
   }
    
   t2 = 0
   n2++
 }
      
    }
    
  }
  
  if(planted3 == true){
    
    for(let p = 0; p < plant3N; p++){
      plant3(100+p*130,340)
      
      for(let g = 0; g < n3; g++){
        fill(point3[g].r, point3[g].g, point3[g].b, point3[g].a)
        point3[g].a++
        ellipse(point3[g].x, point3[g].y, point3[g].s)
      }
      
      
      
      if(t3 > spawnT3){
    point3[n3] = {
      x: random(50,550),
      y: random(288, 390),
      s: random([25,30,35]),
      r: random(175,255),
      g: random(180,255),
      b: random(20,200),
      a: 0
   }
    
   t3 = 0
   n3++
 }
      
    }
    
  }
  
  if(planted4 == true){
    
    for(let b = 0; b < plant4N; b++){
      plant4(100+b*130,470)
      
      for(let f = 0; f < n4; f++){
        fill(point4[f].r, point4[f].g, point4[f].b, point4[f].a)
        point4[f].a++
        ellipse(point4[f].x, point4[f].y, point4[f].s)
      }
      
      if(t4 > spawnT4){
    point4[n4] = {
      x: random(50,550),
      y: random(420, 515),
      s: random([25,30,35]),
      r: random(175,255),
      g: random(50,100),
      b: random(50,200),
      a: 0
   }
    
   t4 = 0
   n4++
 }
      
    }
    
  }
  
  if( score >= price1){
    canPlant1 = true
  }else if (score <= price1+1){
    canPlant1 = false
  }
  
  if( score >= price2){
    canPlant2 = true
  }else if (score <= price2+1){
    canPlant2 = false
  }
  
  if( score >= price3){
    canPlant3 = true
  }else if (score <= price3+1){
    canPlant3 = false
  }
  
  if( score >= price4){
    canPlant4 = true
  }else if (score <= price4+1){
    canPlant4 = false
  }
  
  
  if(plant1N >= 4){
    fill('rgb(255,241,63)')
    rect(160,565,size)
    fill('rgb(9,82,79)')
    text("A",160,580)
  }
  
  if(plant2N >= 4){
    fill('rgb(255,241,63)')
    rect(275,565,size)
    fill('rgb(9,82,79)')
    text("A",275,580)
  }
  
  if(plant3N >= 4){
    fill('rgb(255,241,63)')
    rect(395,565,size)
    fill('rgb(9,82,79)')
    text("A",395,580)
  }
  
  if(plant4N >= 4){
    fill('rgb(255,241,63)')
    rect(515,565,size)
    fill('rgb(9,82,79)')
    text("A",515,580)
  }
  
  if(plant1N >= 4 && plant2N >= 4 && plant3N >= 4 && plant4N >= 4){
    fill('rgb(255,108,0)')
    textSize(75)
    text('congratulations', width/2, 175)
    textSize(45)
    text('you filled your garden', width/2, 275)
    fill('black')
    rect(width/2+5, 420, 510, 55)
    fill('rgb(93,151,211)')
    rect(width/2, 415, 510, 56)
    fill('rgb(255,108,0)')
    text('click to plant another one', width/2, 425)
    
  }
  
  
}

function planter(x,y) {
  
  fill('rgb(102,73,13)')
  rect(x,y,75)
  
}

function plant1(x,y){
  
  fill('rgb(167,12,12)')
  ellipse(x,y,60)
  
}

function plant2(x,y){
  
  fill('rgb(0,115,255)')
  ellipse(x,y,60)
  
}

function plant3(x,y){
  
  fill('rgb(0,255,29)')
  ellipse(x,y,60)
  
}

function plant4(x,y){
  
  fill('rgb(196,36,178)')
  ellipse(x,y,60)
  
}

function mousePressed() {
  for(let i = 0; i < n; i++) {
    if(dist(mouseX, mouseY, point1[i].x, point1[i].y) < point1[i].s/2){
      
      point1.splice(i,1)
      n--
      score++
    }
  }
  
  for(let j = 0; j < n2; j++) {
    if(dist(mouseX, mouseY, point2[j].x, point2[j].y) < point2[j].s/2){
      
      point2.splice(j,1)
      n2--
      score+=2
    }
  }
  
  for(let g = 0; g < n3; g++) {
    if(dist(mouseX, mouseY, point3[g].x, point3[g].y) < point3[g].s/2){
      
      point3.splice(g,1)
      n3--
      score+=5
    }
  }
  
  for(let f = 0; f < n4; f++) {
    if(dist(mouseX, mouseY, point4[f].x, point4[f].y) < point4[f].s/2){
      
      point4.splice(f,1)
      n4--
      score+=10
    }
  }
  
   if(canPlant1 == true && mouseX > 130 && mouseX < 190 && mouseY > 530 && mouseY < 600){
     plant1N++
     if(plant1N >= 4){
       plant1N = 4
     }else {
       score-= price1
       planted1 = true
       spawnT1/=plant1N
       price1+=1+plant1N
     }
   }
  
  if(canPlant2 == true && mouseX > 245 && mouseX < 305 && mouseY > 530 && mouseY < 600){
    plant2N++
    if(plant2N >= 4){
       plant2N = 4
     }else {
       score-= price2
       planted2 = true
       spawnT2/=plant2N
       price2+=3+plant2N
     }
     
  }
  
  if(canPlant3 == true && mouseX > 365 && mouseX < 425 && mouseY > 530 && mouseY < 600){
    plant3N++
    if(plant3N >= 4){
       plant3N = 4
     }else {
       score-= price3
       planted3 = true
       spawnT3/=plant3N
       price3+=4+plant3N
     }
     
  }
  
  if(canPlant4 == true && mouseX > 485 && mouseX < 545 && mouseY > 530 && mouseY < 600){
    plant4N++
    if(plant4N >= 4){
       plant4N = 4
     }else {
       score -= price4
       planted4 = true
       spawnT4/=plant4N
       price4+=5+plant4N
     }
     
  }
  
  if(plant1N >= 4 && plant2N >= 4 && plant3N >= 4 && plant4N >= 4 && mouseX > 45 && mouseX < 555 & mouseY > 387 && mouseY < 443){
    setup()
  }
  
  

}