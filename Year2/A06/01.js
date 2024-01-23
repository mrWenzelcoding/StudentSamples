let xl = [],
  yl = [],
  sl = [],
  tl = [],
  xf0 = [],
  yf0 = [],
  xf1 = [],
  yf1 = [],
  xf2 = [],
  yf2 = [],
  fc0 = [
    "rgb(178,49,49)",
    "rgb(130,31,31)",
    "rgb(220,41,41)",
    "rgb(195,62,62)",
  ],
  fc1 = [],
  lc0 = [
    "green",
    "rgb(38,107,22)",
    "rgb(68,132,54)",
    "rgb(69,162,47)",
    "rgb(28,62,20)",
  ],
  lc1 = [],
  mx0 = [],
  mx1 = [],
  mx2 = [],
  my0 = [],
  my1 = [],
  my2 = [],
  c1 = 0,
  c2 = 0,
  c1y,
  c2y;
let mountainX = [],
  mountainY = [],
  mountainW = [],
  mountainH = [];

function setup() {
  createCanvas(800, 800);
  c1y = random(0, 300);
  c2y = random(0, 300);
  
  for (let i = 0; i < 6; i++) {
    xl[i] = random(100, 700);
    yl[i] = random(450, 700);
    xf0[i] = xl[i] + random(-20, 50);
    yf0[i] = yl[i] + random(-30, 40);
    xf1[i] = xl[i] + random(-20, 50);
    yf1[i] = yl[i] + random(-30, 40);
    tl[i] = random(-30, 40);
    lc1[i] = lc0[int(random(0, 4))];
    fc1[i] = fc0[int(random(0, 3))];
  }
  for (let i = 0; i < 6; i++) {
    mountainX[i] = random(100, 700);
    mountainY[i] = 500;
    mountainW[i] = random(100, 200);
    mountainH[i] = random(100, 200);
  }
}

function draw() {
  background("rgb(84,150,218)");

  //Add mountain drawing in the draw function
  for (let i = 0; i < 6; i++) {
    fill("grey");
    stroke("rgb(172,161,161)");
    triangle(
      mountainX[i],
      mountainY[i],
      mountainX[i] + mountainW[i] / 2,
      mountainY[i] - mountainH[i],
      mountainX[i] + mountainW[i],
      mountainY[i]
    );
  }

  //ground

  fill("rgb(60,165,60)");
  noStroke();
  rect(0, 500, 800, 800);

  for (let i = 0; i < 6; i++) {
    //Tree
    fill("rgb(99,52,11)");
    rect(xl[i], yl[i], 40, 100 + tl[i]);
    fill(lc1[i]);
    stroke("rgb(50,127,50)");
    circle(20 + xl[i], yl[i] - 10, 90);
    circle(40 + xl[i], 10 + yl[i], 70);
    circle(xl[i] - 5, 10 + yl[i], 60);

    //Fruit

    stroke("rgb(161,32,32)");
    fill(fc1[i]);
    circle(xf0[i], yf0[i], 20);
    circle(xf1[i], yf1[i], 20);
  }

  //Cloud 1

  stroke(220);
  fill(255);
  circle(160 + c1, 85 + c1y, 50);
  circle(180 + c1, 100 + c1y, 50);
  circle(140 + c1, 70 + c1y, 50);
  stroke(240);
  circle(120 + c1, 100 + c1y, 50);
  stroke(275);
  circle(160 + c1, 100 + c1y, 50);
  c1 = c1 - 0.5;

  if (c1 <= -200) {
    c1 += 950;
    c1y = random(0, 300);
  }

  //Cloud 2

  stroke(220);
  fill(255);
  circle(640 + c2, 115 + c2y, 50);
  circle(660 + c2, 130 + c2y, 50);
  circle(620 + c2, 100 + c2y, 50);
  stroke(220);
  circle(600 + c2, 130 + c2y, 50);
  stroke(255);
  circle(640 + c2, 130 + c2y, 50);
  c2 = c2 - 0.8;

  if (c2 <= -800) {
    c2 += 1050;
    c2y = random(0, 300);
  }
}
