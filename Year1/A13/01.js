let noun=['Death','Fear','Growth', 'Stage', 'Vehicle', 'Literature', 'Patience', 'Debt', 'Cancer'];
let noun2=['Worlds',"Geese","Friendships","Sciences","Fiction","The Nine Realms",'Minds','Middle Earth','Great Britian','Harkonnens','Ken'];
let name=['Robert.J Oppenheimer',"Cillian Murphy", "Sterotypical Barbie",'Tommy Shelby','Christopher Nolan', 'Greta Gerwig','Paul Atreides','Boris Johnson', 'Elton John']


function setup() {
  createCanvas(400, 500);

    push()
    background("white")
    fill("black")
    text("click to start",width/2,height/2)
    start = false
    pop()
}

  

function mousePressed(){
  background(212,103,17);
  textSize(24)
 
  textAlign(CENTER)
  push()
  textStyle(BOLD)
  textFont('Courier New')
  text('Now, I am become '+random(noun),width/2,50)
  textSize(22)
  textFont('Courier New')
  text('Destroyer of '+random(noun2),width/2,440)
  pop()
  textSize(15)
  textFont('Courier New')
  text('-'+random(name),253,480)
  
  //mushroom cloud
    noStroke()
console.log(mouseX,mouseY)
  //background(212,103,17);
fill(20)
  //height goes up/down by 13
rect(100,398,200,5)
  rect(110,380,180,10)
  rect(140,367,120,10)
  rect(150,354,100,10)
  rect(170,341,60,10)
  rect(185,328,30,10)
  rect(185,315,30,10)
  rect(180,302,40,10)
   rect(160,289,80,10)
  rect(180,276,40,10)
  rect(160,263,80,10)
  rect(120,250,160,10)
  rect(90,237,210,10)
  rect(75,224,240,10)
  rect(70,211,250,10)
  rect(65,198,260,10)
  rect(65,185,260,10)
  rect(70,172,250,10)
  rect(80,159,230,10)
  rect(85,146,220,10)
  rect(95,133,200,10)
  rect(115,120,160,10)
  rect(145,107,100,10)
  
  rect(165,96,60,8)
  //thin side rects
  rect(50,400,50,1)
  rect(300,400,50,1)
  //
  rect(40,383.5,70,3)
  rect(290,383.5,70,3)
  //
  rect(80,370.5,70,3)
  rect(250,370.5,70,3)
  //
  rect(100,357.5,50,3)
  rect(250,357.5,50,3)
  //
  rect(130,344.5,40,3)
  rect(230,344.5,40,3)
  //
  rect(145,331.5,40,3)
  rect(215,331.5,40,3)
  //
  rect(145,318.5,40,3)
  rect(215,318.5,40,3)
  //
  rect(140,305.5,40,3)
  rect(220,305.5,40,3)
  //
  rect(115,292.5,45,3)
  rect(240,292.5,45,3)
  //
  rect(140,279.5,40,3)
  rect(220,279.5,40,3)
  //
  rect(115,266.5,45,3)
  rect(240,266.5,45,3)
  //
  rect(70,253.5,50,3)
  rect(280,253.5,50,3)
  //
  rect(50,240.5,40,3)
  rect(300,240.5,40,3)
  //
  rect(35,227.5,40,3)
  rect(315,227.5,40,3)
  //
  rect(30,214.5,40,3)
  rect(320,214.5,40,3)
  //
  rect(20,201.5,45,3)
  rect(325,201.5,45,3)
  //
  rect(20,188.5,45,3)
  rect(325,188.5,45,3)
  //
  rect(30,175.5,40,3)
  rect(320,175.5,40,3)
  //
  rect(45,162.5,35,3)
  rect(310,162.5,35,3)
  //
  rect(55,149.5,30,3)
  rect(305,149.5,30,3)
  //
  rect(65,136.5,30,3)
  rect(295,136.5,30,3)
  //
  rect(85,123.5,30,3)
  rect(275,123.5,30,3)
  //
  rect(110,110.5,35,3)
  rect(245,110.5,35,3)
  //
  rect(135,99.5,30,3)
  rect(225,99.5,30,3)
  //
  rect(160,90,70,2)
   }


//unused 

//function draw() {
//   noStroke()
// console.log(mouseX,mouseY)
//   //background(212,103,17);
// fill(0)
//   //height goes up/down by 13
// rect(100,398,200,5)
//   rect(110,380,180,10)
//   rect(140,367,120,10)
//   rect(150,354,100,10)
//   rect(170,341,60,10)
//   rect(185,328,30,10)
//   rect(185,315,30,10)
//   rect(180,302,40,10)
//    rect(160,289,80,10)
//   rect(180,276,40,10)
//   rect(160,263,80,10)
//   rect(120,250,160,10)
//   rect(90,237,210,10)
//   rect(75,224,240,10)
//   rect(70,211,250,10)
//   rect(65,198,260,10)
//   rect(65,185,260,10)
//   rect(70,172,250,10)
//   rect(80,159,230,10)
//   rect(85,146,220,10)
//   rect(95,133,200,10)
//   rect(115,120,160,10)
//   rect(145,107,100,10)
  
//   rect(165,96,60,8)
//   //thin side rects
//   rect(50,400,50,1)
//   rect(300,400,50,1)
//   //
//   rect(40,383.5,70,3)
//   rect(290,383.5,70,3)
//   //
//   rect(80,370.5,70,3)
//   rect(250,370.5,70,3)
//   //
//   rect(100,357.5,50,3)
//   rect(250,357.5,50,3)
//   //
//   rect(130,344.5,40,3)
//   rect(230,344.5,40,3)
//   //
//   rect(145,331.5,40,3)
//   rect(215,331.5,40,3)
//   //
//   rect(145,318.5,40,3)
//   rect(215,318.5,40,3)
//   //
//   rect(140,305.5,40,3)
//   rect(220,305.5,40,3)
//   //
//   rect(115,292.5,45,3)
//   rect(240,292.5,45,3)
//   //
//   rect(140,279.5,40,3)
//   rect(220,279.5,40,3)
//   //
//   rect(115,266.5,45,3)
//   rect(240,266.5,45,3)
//   //
//   rect(70,253.5,50,3)
//   rect(280,253.5,50,3)
//   //
//   rect(50,240.5,40,3)
//   rect(300,240.5,40,3)
//   //
//   rect(35,227.5,40,3)
//   rect(315,227.5,40,3)
//   //
//   rect(30,214.5,40,3)
//   rect(320,214.5,40,3)
//   //
//   rect(20,201.5,45,3)
//   rect(325,201.5,45,3)
//   //
//   rect(20,188.5,45,3)
//   rect(325,188.5,45,3)
//   //
//   rect(30,175.5,40,3)
//   rect(320,175.5,40,3)
//   //
//   rect(45,162.5,35,3)
//   rect(310,162.5,35,3)
//   //
//   rect(55,149.5,30,3)
//   rect(305,149.5,30,3)
//   //
//   rect(65,136.5,30,3)
//   rect(295,136.5,30,3)
//   //
//   rect(85,123.5,30,3)
//   rect(275,123.5,30,3)
//   //
//   rect(110,110.5,35,3)
//   rect(245,110.5,35,3)
//   //
//   rect(135,99.5,30,3)
//   rect(225,99.5,30,3)
//   //
//   rect(160,90,70,2)
