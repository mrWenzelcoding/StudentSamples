let score
let click
let yay
let pointer
let buyable
let numberOfPointers
let pointPrice
let gramPrice
let buyable2
let slimShady
let FarmBuy
let gram
let farmPrice
let farms
let bankBuy
let banks
let bankPrice

function setup() {
  createCanvas(400, 400);
  click = 0
  yay = 0
  pointer = 1
  buyable = 0
  numberOfPointers = 0
  pointPrice = 15
  gramPrice = 100
  buyable2 = 0
  slimShady = 0
  farmBuy = 0
  gram = 0
  farmPrice = 1100
  farms = 0
  bankBuy = 0
  banks = 0
  bankPrice = 1400000
}

function draw() {
  //console.log(mouseX,mouseY)
  background('rgb(0,16,141)');
  textSize(100)
  text('🍪',120,220)
  line(322,1,322,402)
  textSize(25)
  text('👈',325,30)
  textSize(15)
  text(pointPrice,355,30)
  textSize(25)
  text('👵',325,70)
  textSize(15)
  text(gramPrice,355,70)
  textSize(25)
  text('🧑‍🌾',325,110)
  textSize(15)
  text(farmPrice,355,110)
  textSize(25)
  text('🏦',325,150)
  textSize(7)
  text(bankPrice,355,150)
  textSize(25)
  textSize(32);
  fill(255);
  stroke(0);
  strokeWeight(4);
  text(round(yay,0),21,30)
  if(yay > 13 ) {
    buyable = 1  
  }
  if(yay < 14 ){
    buyable = 0
  }
  
  if(yay > 90){
    buyable2= 1
  }
  if(yay < 100){
   buyable2= 0
  }
  yay = yay + numberOfPointers
  
   if(yay > 1099){
   farmBuy= 1
   }
   if(yay < 1100){
   farmBuy= 0
   }
   if(slimShady == 3 ){
   slimShady = 0
   pointPrice = pointPrice + 5
    }
  
    if(gram == 5 ){
    gram = 0
    gramPrice = gramPrice + 10
    }
      
    if(farms == 10 ){
    farms = 0
    farmPrice = farmPrice + 15
      
    }
    if(yay < 1) {
    yay = 1
    }
    if(yay < 1300000 ){
    bankBuy = 0
     }
  
    if(yay > 1400000){
    bankBuy= 1
    }

}

function mousePressed(){
  if(dist(mouseX,mouseY,120,220) < 110)
        yay = yay + pointer
    //  console.log('close')
     // yay = yay + pointer


  if(dist(mouseX,mouseY,325,30) < 25 && buyable == 1){
    console.log('meh')
    yay = yay - pointPrice
    numberOfPointers = numberOfPointers + 0.01
    slimShady = slimShady + 1
  
   }


    if(dist(mouseX,mouseY,325,70) < 25 && buyable2 == 1){
       console.log('gram')
       yay = yay -gramPrice
       pointer = pointer + 3
       gram = gram + 1
    }
  
    if(dist(mouseX,mouseY,325,110) < 25 && farmBuy == 1){
     yay = yay - farmPrice
     console.log('farm')
     //yay = yay - 1100
     pointer = pointer + 10
     farms = farms + 1
       
    }
  
    if(dist(mouseX,mouseY,325,150) < 25 && bankBuy == 1){
     console.log('bank')
     yay = yay - bankPrice
     pointer = pointer + 1400
     banks = banks + 1
       
    }
  
}