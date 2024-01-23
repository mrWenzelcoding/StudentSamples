//Controls:

//A,D to move vehicle
//W,S to move bucket
//Q,E to rotate bucket
//R to acces shop
//B to buy item
//A,Ddd to navigate shop

//Goal:

//Get all upgrades

//To-Do list:

//Vehicle Unpgrade visuals

function setup() {
  createCanvas(600, 400);
}

let r = 0.5;
let t = 4.8;
let x = 0;
let y1 = 255;
let y2 = 255;
let y21 = 280;
let y22 = 380;
let y3 = 280;
let u = 0.5;
let d = 4.6;
let b = 20;
let o = 5;
let g = 0;
let c1 = 0;
let c2 = 0;
let d1 = 333;
let d2 = 4;
let d3 = 0;
let d4 = 0;
let bx = 580;
let by = 4;
let by1 = 400;
let ty = 0;
let ty1 = 0.15;
let ty2 = 0;
let ty3 = 400;
let tx = 0;
let tx1 = 0;
let my = 0;
let my1 = 0;
let my2 = 0.15;
let m = 0;
let mg = 0;
let mg1 = 0;
let sy = -200;
let vm = 0;
let rs = 0;
let ShopItems = 1;
let ShopItems1 = 0;
let ShopItems2 = 0;
let ShopBorder1 = 0;
let ShopBorder2 = 0;
let ShopBorder3 = 0;
let ShopBorder4 = 0;
let ShopBorder5 = 0;
let ShopBorder6 = 0;
let ShopBorder7 = 0;
let ShopBorder8 = 0;
let ShopBorder9 = 0;
let MoneySpend = 0;
let Bought1 = 0;
let Bought2 = 0;
let Bought3 = 0;
let MoneyMax = 0;
let MoneyRaise = 0;
let GearUpgrade = 0;
let ArmUpgrade = 0;

function draw() {
  
  //Sky

  if (g <= 115) {
    g -= 1;
  }

  if (b >= 212) {
    b -= 0.5;
  }

  if (o <= 13) {
    o -= 2;
    g += 2;
  }

  b = b + 0.5;
  o = o + 0.25;
  g = g - 1;

  background(o, g, b);

  //Cloud 1

  stroke(220);
  fill(255);
  circle(140 + c1, 85, 50);
  circle(160 + c1, 100, 50);
  circle(120 + c1, 70, 50);
  stroke(220);
  circle(100 + c1, 100, 50);
  stroke(255);
  circle(140 + c1, 100, 50);
  c1 = c1 - 0.5;

  if (c1 <= -200) {
    c1 += 900;
  }

  //Cloud 2

  stroke(220);
  fill(255);
  circle(640 + c2, 115, 50);
  circle(660 + c2, 130, 50);
  circle(620 + c2, 100, 50);
  stroke(220);
  circle(600 + c2, 130, 50);
  stroke(255);
  circle(640 + c2, 130, 50);
  c2 = c2 - 0.8;

  if (c2 <= -800) {
    c2 += 1000;
  }

  //Direction

  if (GearUpgrade === 0){
    if (vm === 0) {
      if (keyIsDown(65)) {
        x -= 1
      }
    }
  }
  
  if (GearUpgrade === 0){
    if (vm === 0) {
      if (keyIsDown(68)) {
        x += 1
      }
    }
  }
  
  if (GearUpgrade === 1){
    if (vm === 0) {
      if (keyIsDown(65)) {
        x -= 2;
      }
    }
  }
  
  if (GearUpgrade === 1){
    if (vm === 0) {
      if (keyIsDown(68)) {
        x += 2;
      }
    }
  }
  
  if (ArmUpgrade === 0){
    if (vm === 0) {
      if (keyIsDown(87)) {
        y1 -= 0.5;
        y2 -= 0.5;
        y21 -= 0.5;
        y22 -= 0.5;
        y3 -= 0.5;
      }
    }
  }

  if (ArmUpgrade === 0){
    if (vm === 0) {
      if (keyIsDown(83)) {
        y1 += 0.5;
        y2 += 0.5;
        y21 += 0.5;
        y22 += 0.5;
        y3 += 0.5;
      }
    }
  }
  
  if (ArmUpgrade === 1){
    if (vm === 0) {
      if (keyIsDown(87)) {
        y1 -= 0.8;
        y2 -= 0.8;
        y21 -= 0.8;
        y22 -= 0.8;
        y3 -= 0.8;
      }
    }
  }

  if (ArmUpgrade === 1){
    if (vm === 0) {
      if (keyIsDown(83)) {
        y1 += 0.8;
        y2 += 0.8;
        y21 += 0.8;
        y22 += 0.8;
        y3 += 0.8;
      }
    }
  }

  if (vm === 0) {
    if (rs === 0) {
      if (keyIsDown(69)) {
        d4 += 1;
        u += 0.025;
        d += 0.025;
      }
    }
  }

  if (vm === 0) {
    if (rs === 0) {
      if (keyIsDown(81)) {
        d4 -= 1;
        u -= 0.025;
        d -= 0.025;
      }
    }
  }

  if (vm == 0) {
    if (rs === 1) {
      if (keyIsDown(69)) {
        u += 0.05;
        d += 0.05;
        d4 += 1;
      }
    }
  }

  if (vm == 0) {
    if (rs === 1) {
      if (keyIsDown(81)) {
        u -= 0.05;
        d -= 0.05;
        d4 -= 1;
      }
    }
  }

  //Bucket top limit

  if (ArmUpgrade === 0){
    if (y1 <= 220) {
      y1 += 0.5;
    }
  }
  
  if (ArmUpgrade === 0){
    if (y2 <= 220) {
      y2 += 0.5;
    }
  }
  
  if (ArmUpgrade === 0){
    if (y21 <= 245) {
      y21 += 0.5;
    }
  }
  
  if (ArmUpgrade === 0){
    if (y22 <= 345) {
      y22 += 0.5;
    }
  }
  
  if (ArmUpgrade === 0){
    if (y3 <= 245) {
      y3 += 0.5;
    }
  }
  
  if (ArmUpgrade === 1){
    if (y1 <= 220) {
      y1 += 0.5;
    }
  }
  
  if (ArmUpgrade === 1){
    if (y2 <= 220) {
      y2 += 0.5;
    }
  }
  
  if (ArmUpgrade === 1){
    if (y21 <= 245) {
      y21 += 0.5;
    }
  }
  
  if (ArmUpgrade === 1){
    if (y22 <= 345) {
      y22 += 0.5;
    }
  }
  
  if (ArmUpgrade === 1){
    if (y3 <= 245) {
      y3 += 0.5;
    }
  }
  
  //Bucket bottom limit

  if (ArmUpgrade === 0){
    if (y1 >= 280) {
      y1 -= 0.5;
    }
  }
  
  if (ArmUpgrade === 0){
    if (y2 >= 280) {
      y2 -= 0.5;
    }
  }
  
  if (ArmUpgrade === 0){
    if (y21 >= 305) {
      y21 -= 0.5;
    }
  }
  
  if (ArmUpgrade === 0){
    if (y22 >= 305) {
      y22 -= 0.5;
    }
  }
  
  if (ArmUpgrade === 0){
    if (y3 >= 305) {
      y3 -= 0.5;
    }
  }
  
  if (ArmUpgrade === 1){
    if (y1 >= 280) {
      y1 -= 0.5;
    }
  }
  
  if (ArmUpgrade === 1){
    if (y2 >= 280) {
      y2 -= 0.5;
    }
  }
  
  if (ArmUpgrade === 1){
    if (y21 >= 305) {
      y21 -= 0.5;
    }
  }
  
  if (ArmUpgrade === 1){
    if (y22 >= 305) {
      y22 -= 0.5;
    }
  }
  
  if (ArmUpgrade === 1){
    if (y3 >= 305) {
      y3 -= 0.5;
    }
  }
  
  //Bucket rotation limit

  if (rs == 0) {
    if (d >= 6.5) {
      u -= 0.025;
      d -= 0.025;
    }
  }

  if (rs == 0) {
    if (d <= 4) {
      u += 0.025;
      d += 0.025;
    }
  }

  if (rs == 1) {
    if (d <= 4) {
      u += 0.05;
      d += 0.05;
    }
  }

  if (rs == 1) {
    if (d >= 6.5) {
      u -= 0.05;
      d -= 0.05;
    }
  }

  //Dirt limit

  if (d4 <= 9.5) {
    d4 += 0.025;
  }

  if (d4 >= 1) {
    d4 -= 0.025;
  }

  if (d4 >= 50) {
    d2 = d2 + 1.5;
    by = by + 1.5;
  }

  if (d2 >= 340) {
    d2 = 4;
    by = 4;
  }

  //Shop menu

  if (ShopItems === 1) {
    ShopBorder1 = 22;
    ShopBorder2 = 181;
    ShopBorder3 = 63;
  } else {
    ShopBorder1 = 209;
    ShopBorder2 = 10;
    ShopBorder3 = 37;
  }

  if (ShopItems1 === 1) {
    ShopBorder4 = 22;
    ShopBorder5 = 181;
    ShopBorder6 = 63;
  } else {
    ShopBorder4 = 209;
    ShopBorder5 = 10;
    ShopBorder6 = 37;
  }

  if (ShopItems2 === 1) {
    ShopBorder7 = 22;
    ShopBorder8 = 181;
    ShopBorder9 = 63;
  } else {
    ShopBorder7 = 209;
    ShopBorder8 = 10;
    ShopBorder9 = 37;
  }

  fill(200);
  rect(15, 15, 40, 25);
  stroke(255);
  fill(0);
  text("Shop", 21, 31);
  fill(220);
  rect(15, sy, 300, 150);
  fill(90);
  stroke(ShopBorder1, ShopBorder2, ShopBorder3);
  rect(40, 30 + sy, 60, 60);
  stroke(ShopBorder4, ShopBorder5, ShopBorder6);
  rect(135, 30 + sy, 60, 60);
  stroke(ShopBorder7, ShopBorder8, ShopBorder9);
  rect(230, 30 + sy, 60, 60);
  strokeWeight(1);
  stroke(0);
  fill(60, 60, 60);
  arc(71, 60 + sy, 40, 40, 0.5, 4.6, PIE);
  stroke(16, 130, 46);
  strokeWeight(0.5);
  fill(0);
  text("Improved hydraulics", 45, 95 + sy, 50, 50);
  fill(16, 130, 46);
  text("$ 20", 57, 135 + sy);
  
  //Shop Item 2
  
  strokeWeight(1);
  stroke(0);
  fill(120);
  rect(145,55 + sy,40,10);
  rect(160,40 + sy,10,40);
  fill(105);
  circle(165, 60 + sy, 30);
  fill(90);
  circle(165,60 + sy, 10);
  stroke(16, 130, 46);
  strokeWeight(0.5);
  fill(0);
  text("Well oiled gears", 140, 95 + sy, 80, 50);
  fill(16, 130, 46);
  text("$ 40", 152, 135 + sy);
  
  //Shop Item 3
  
  textSize(20);
  text("Max", 245, 73 + sy);
  rect(238, 53 + sy, 3, 22);
  triangle(233,55 + sy,240,50 + sy,246,55 + sy);
  textSize(12);
  fill(0);
  text("Smarter managment",230,95 + sy,50,100);
  fill(16, 130, 46);
  text('$ 10',245,135 + sy);
  
  //Shop Item 4
  
  strokeWeight(6);
  stroke(90);
  line(210,110, 225, 125);
  strokeWeight(10);
  stroke(230, 170, 0);
  line(200, 100, 215, 115);
  fill(230, 170, 0);
  strokeWeight(1);
  stroke(50);
  circle(200, 100, 18);
  circle(228, 128, 12);
  fill(60);
  circle(200, 100, 6);
  circle(228, 128, 4)
  
  
  //Money Spend

  if (vm === 1) {
    if (ShopItems === 1) {
      if (MoneySpend === 1) {
        if (mg >= 20) {
          rs = 1;
          mg -= 20;
          Bought1 = 1;
        }
      }
    }
  }
  
  if (Bought1 === 1){
    stroke(0);
    fill(240, 7, 39);
    text("Bought", 48, 55 + sy, 50, 50);
  }
  
  if (vm === 1) {
    if (ShopItems === 1) {
      if (MoneySpend === 1) {
        if (mg < 20) {
          if (Bought1 === 0){
            fill(240, 7, 39);
            text("Nope", 58, 65 + sy);
          }  
        }
      }
    }
  }
  
  if (vm === 1) {
    if (ShopItems1 === 1) {
      if (MoneySpend === 1) {
        if (mg >= 40) {
          mg -= 40;
          Bought2 = 1;
          GearUpgrade = 1;
        }
      }
    }
  }
  
  if (Bought2 === 1){
    stroke(0);
    fill(240, 7, 39);
    text("Bought", 147, 55 + sy, 50, 50);
  }
  
  if (vm === 1) {
    if (ShopItems1 === 1) {
      if (MoneySpend === 1) {
        if (mg < 40) {
          if (Bought2 === 0){
            fill(240, 7, 39);
            text("Nope", 151, 65 + sy);
          }  
        }
      }
    }
  }
  
  if (vm === 1) {
    if (ShopItems2 === 1) {
      if (MoneySpend === 1) {
        if (mg >= 10) {
          if (Bought3 === 0){
            if (MoneyRaise === 0){
              mg -= 10;
              MoneyMax = 1;
              Bought3 = 1;
              MoneyRaise = 1;
            }  
          } 
        }
      }
    }
  }
  
   if (vm === 1) {
    if (ShopItems2 === 1) {
      if (MoneySpend === 1) {
        if (mg >= 10) {
          if (Bought3 === 0){
            if (MoneyRaise === 1){
              mg -= 10;
              MoneyMax = 2;
              Bought3 = 1;
              MoneyRaise = 2;
            }  
          } 
        }
      }
    }
  }
  
  if (vm === 1) {
    if (ShopItems2 === 1) {
      if (MoneySpend === 1) {
        if (mg >= 10) {
          if (Bought3 === 0){
            if (MoneyRaise === 2){
              mg -= 10;
              MoneyMax = 3;
              Bought3 = 1;
              MoneyRaise = 3;
            }  
          } 
        }
      }
    }
  }
  
  if (vm === 1) {
    if (ShopItems2 === 1) {
      if (MoneySpend === 1) {
        if (mg >= 10) {
          if (Bought3 === 0){
            if (MoneyRaise === 3){
              mg -= 10;
              MoneyMax = 4;
              Bought3 = 1;
              MoneyRaise = 4;
            }  
          } 
        }
      }
    }
  }
  
  if (Bought3 === 2){
    stroke(0);
    fill(240, 7, 39);
    text("Bought", 240, 60 + sy, 50, 50);
  }
  
  if (Bought3 === 1){
    stroke(0);
    fill(6, 150, 46);
    text("Upgraded", 233, 36 + sy, 50, 50);
  }
  
  if (vm === 1) {
    if (ShopItems2 === 1) {
      if (MoneySpend === 1) {
        if (mg < 10) {
          if (Bought3 === 0){
            fill(240, 7, 39);
            text("Nope", 245, 65 + sy);
          }  
        }
      }
    }
  }

  //Money limit

  if (d1 >= 340) {
  } else if (by === 400) {
    mg += 5;
  }

  if (MoneyMax === 0){
    if (mg === 10) {
      stroke(0);
      fill(16, 130, 46);
      text("Max", 540, 20);
    }
      if (mg === 15) {
      mg -= 5;
    }
  }
  
  if (MoneyMax === 1){
    if (mg === 20) {
      stroke(0);
      fill(16, 130, 46);
      text("Max", 540, 20);
    }
      if (mg === 25) {
      mg -= 5;
    }
  }
  
  if (MoneyMax === 2){
    if (mg === 30) {
      stroke(0);
      fill(16, 130, 46);
      text("Max", 540, 20);
    }
      if (mg === 35) {
      mg -= 5;
    }
  }
  
  if (MoneyMax >= 3){
    if (mg === 40) {
      stroke(0);
      fill(16, 130, 46);
      text("Max", 540, 20);
    }
      if (mg === 45) {
      mg -= 5;
    }
  }
  
  if (MoneyMax >= 3){
    Bought3 = 2;
  }
  
  //Money

  strokeWeight(1);
  stroke(0);
  fill(16, 130, 46);
  textSize(15);
  text("$", 270 + x, 400 + my + my1);

  my1 = my1 - my2;

  if (my1 >= 5) {
    my2 = +0.13;
  }

  if (my1 <= -3) {
    my2 = -5;
    Bought3 = 0;
  }

  //Money Count

  fill(5, 128, 37);
  text("$", 570, 20);
  text(m + mg + mg1, 580, 20);

  //Tutorial Arrows

  strokeWeight(3);
  stroke(0);
  line(100 + tx, ty + 250, 100 + tx, ty + 280);
  strokeWeight(1);
  fill(0);
  triangle(96 + tx, ty + 280, 100 + tx, ty + 290, 104 + tx, ty + 280);
  textSize(12);
  text("Dig anywhere", 65, 240 + ty2);

  ty = ty - ty1;

  if (ty <= -5) {
    ty1 = -0.2;
  }

  if (ty >= 5) {
    ty1 = +0.15;
  }

  strokeWeight(3);
  stroke(0);
  line(525 + tx1, ty + 220 + ty3 + ty2, 525 + tx1, ty + 250 + ty3 + ty2);
  strokeWeight(1);
  fill(0);
  triangle(
    521 + tx1,
    ty + 250 + ty3 + ty2,
    525 + tx1,
    ty + 260 + ty3 + ty2,
    529 + tx1,
    ty + 250 + ty3 + ty2
  );
  text("Deposit dirt here", 480 + tx1, 210 + ty2 + ty3);

  //Dirt

  strokeWeight(1);
  stroke(0);
  point(1000, d4);
  fill(160, 100, 0);
  circle(d1 + x, d2 + y3 + 75, 25);

  if (y21 >= 304) {
    d2 = -71;
    d4 = 0;
    tx = 600;
    ty2 = 400;
  }

  //Dirt on convater belt

  strokeWeight(1);
  stroke(0);
  point(d1 + x, by + y3);
  fill(160, 100, 0);
  ellipse(bx, by1, 25, 5);

  if (d1 > 340) {
  } else if (by >= 330) {
    by1 = 277;
    my = -200;
    tx1 = 400;
  }

  if (bx >= 630) {
    bx = 530;
  }

  if (y21 >= 304) {
    by1 = 304;
    by = 304;
    ty3 = -400;
    my = 200;
  }

  bx = bx + 1;

  //Convater Belt

  fill(70);
  ellipse(550, 289, 15);
  fill(40);
  ellipse(550, 289, 5);
  fill(70);
  ellipse(565, 289, 15);
  fill(40);
  ellipse(565, 289, 5);
  fill(70);
  ellipse(581, 289, 15);
  fill(40);
  ellipse(581, 289, 5);
  fill(70);
  ellipse(596, 289, 15);
  fill(40);
  ellipse(596, 289, 5);
  strokeWeight(3);
  line(540, 280, 601, 280);
  line(540, 297, 601, 297);

  //Feeder

  stroke(70);
  fill(50, 50, 50);
  rect(500, 270, 50, 50);

  //Bobcat Body

  stroke(0);
  strokeWeight(1);
  fill(210, 170, 0);
  square(width / 2 - 90 + x, height / 2 + 25, 50, 15, 50, 5, 4);

  noStroke();
  fill(o, g, b);
  rect(width / 2 - 60 + x, height / 2 + 24, 20, 52);

  stroke(0, 0, 0);
  strokeWeight(3.5);
  noFill();
  square(width / 2 - 60 + x, height / 2 + 10, 59, 20, 10, 5, 0);

  strokeWeight(1);
  fill(210, 170, 0);
  triangle(
    width / 2 - 60 + x,
    height / 2 + 45,
    width / 2 - 60 + x,
    height / 2 + 64,
    width / 2 + x,
    height / 2 + 65
  );
  rect(width / 2 - 60 + x, height / 2 + 65, 60, 20);

  //Bobcat Treads

  strokeWeight(1.5);
  fill(80, 80, 80);
  triangle(255 + x, 265, 235 + x, 281, 293 + x, 280);

  strokeWeight(0);
  rect(245 + x, 279, 40, 20);

  strokeWeight(1.5);
  fill(90, 90, 90);
  circle(width / 2 - 43 + x, height / 2 + 75, 20);
  circle(width / 2 - 60 + x, height / 2 + 89, 20);
  circle(width / 2 - 10 + x, height / 2 + 89, 20);
  circle(width / 2 - 28 + x, height / 2 + 92, 13);
  circle(width / 2 - 42 + x, height / 2 + 92, 13);

  strokeWeight(1);
  line(240 + x, 299, 288 + x, 299);

  //Bobcat Bucket/Arm

  strokeWeight(8);
  stroke(230, 170, 0);
  line(width / 2 - 75 + x, height / 2 + 35, width / 2 + 3 + x, y1);
  curve(
    width / 2 + 4 + x,
    y2,
    width / 2 + 4 + x,
    y2,
    width / 2 + 15 + x,
    y21,
    width / 2 + 20 + x,
    y22
  );

  stroke(0, 0, 0);
  strokeWeight(1);
  fill(50, 50, 50);
  arc(width / 2 + 30 + x, y3, 40, 40, u, d, PIE);

  //Ground

  strokeWeight(2);
  stroke(140, 100, 0);
  fill(180, 100, 0);
  rect(0, 300, 450, height / 2);

  stroke(80);
  fill(80);
  rect(450, 300, 150, height / 2);
}

function keyPressed() {
  if (key === "r") {
    if (sy === -200) {
      sy = 15;
      vm = 1;
    } else {
      sy = -200;
      vm = 0;
    }
  }
  if (vm === 1) {
    if (ShopItems === 0) {
      if (key === "d") {
        ShopItems2 = 1;
        ShopItems = 0;
        ShopItems1 = 0;
      }
      if (key === "a") {
        ShopItems1 = 1;
        ShopItems = 0;
        ShopItems2 = 0;
      }
    }
    if (ShopItems1 === 0) {
      if (key === "a") {
        ShopItems2 = 1;
        ShopItems1 = 0;
        ShopItems = 0;
      }
    }
    if (ShopItems2 === 0) {
      if (key === "d") {
        ShopItems1 = 1;
        ShopItem2 = 0;
        ShopItems = 0;
      }
      if (key === "a") {
        ShopItems = 1;
        ShopItems2 = 0;
        ShopItems1 = 0;
      }
    }

    if (key === "b") {
      MoneySpend = 1;
    } else {
      MoneySpend = 0;
    }
  }
}
