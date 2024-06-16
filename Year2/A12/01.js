let menux;
let menuv;
//background
let cloudy = [];
let cloudx = [];
let cloudspeed = [];
let cloud;
//mario
let mariox;
let marioy;
let marioLeftimg;
let marioRightimg;
let marioimg;
//lakitu
let lakitux;
let lakituy;
let lakituxOff;
let lakituyOff;
let lakituspeed;
let lakituimg;
//shop
let DC;
let BS;
let CV;
let Money;
let DCPrice;
let BSPrice;
let CVPrice;
//coin
let coinDistance = [];
let coinChance;
let coinTimer;
let coinx = [];
let coiny = [];
let coinsAva;
function preload() {
  marioLeftimg = loadImage("assets/ML.png");
  marioRightimg = loadImage("assets/MR.png");
  lakituimg = loadImage("assets/lakitu.png");
  marioimg = marioLeftimg;
}
function setup() {
  createCanvas(windowWidth, windowWidth);
  strokeWeight(0);
  //background
  canvas2 = createGraphics(windowWidth, windowWidth);
  canvas3 = createGraphics(windowWidth, windowWidth);
  canvas2.background("skyblue");
  canvas2.strokeWeight(0);
  canvas2.fill("rgb(92,175,92)");
  canvas2.rect(0, height/1.3, width, height);
  canvas2.fill("yellow");
  canvas2.ellipse(width / 1.1, height / 20, width / 10);
  canvas2.fill("white");
  cloud = 10;

  for (let i = 0; i < cloud; i++) {
    cloudx[i] = random(-width/6.666, width);
    cloudy[i] = random(height/20, height / 3);
    cloudspeed[i] = random(width/800, width/4000);
  }
  rectMode(CENTER);
  menux = width * 1.5;
  menuy = height / 2;
  //shop
  DC = 0;
  DCPrice = 0;
  BS = 0;
  BSPrice = 0;
  CV = 0;
  CVPrice = 0;
  Money = 10;
  //lakitu
  lakitux = -width/40;
  lakituy = height/1.23;
  lakituxOff = random(100);
  lakituyOff = random(100);
  lakituspeed = BS;
  //coin
  coinChance = 0;
  coinTimer = 0;
  //mario
  mariox = width/4;
  marioy = height/1.3;

  coinAva = 0;
  for (let i = 1; i < coinsAva; i++) {
    coinx[i] = lakitux;
    coiny[i] = lakituy;
    coinDistance[i] = 30;
  }

  v = 0;
}
function draw() {
  canvas2.background("skyblue");
  canvas2.strokeWeight(0);
  canvas2.fill("rgb(92,175,92)");
  canvas2.rect(0, height/1.3, width, height);
  canvas2.fill("yellow");
  canvas2.ellipse(width / 1.1, height / 20, width / 10);
  for (let i = 0; i < cloud; i++) {
    canvas2.fill("rgb(255,255,255)");
    clouds(cloudx[i], cloudy[i]);
    cloudx[i] += cloudspeed[i];
    if (cloudx[i] > width * 1.2) {
      cloudx[i] = -width/2.6666;
      cloudy[i] = random(height/20, height / 3);
      cloudspeed[i] = random(width/800, width/4000);
    }
  }
  coinDraw();
  if (coinChance <= DC + 10 + BS * 0.01 && coinTimer > 100 / (DC * 0.1)) {
    coinDroped();

    coinTimer = 0;
  }
  coinTimer += 1;
  for (let i = 0; i < coinx.length; i++) {
    coinDistance[i] = dist(mariox+width/10, marioy+height/10, coinx[i], coiny[i]);
if(coiny[i]>=height*1.2){
      coinx.splice(i, 1);
      coiny.splice(i, 1);
    break
  
}
    if (coinDistance[i] <= width/10 ) {
      Money += CV + 1;
      coinx.splice(i, 1);
      coiny.splice(i, 1);

      break;
    }
  }

  lakitu();
  image(canvas2, 0, 0);
  image(canvas3, 0, 0);
  fill("black");
  rect(width / 10, height / 20, width / 6.6, height / 13.3, width / 26.6);
  fill("white");
  textStyle(NORMAL);
  textSize(width / 26.6);
  text("menu", width / 18.1, height / 17.3);

  if (keyIsDown(LEFT_ARROW)) {
    mariox -= width/400 * (BS + 1)*0.1;
    marioimg = marioLeftimg;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    mariox += width/400 * (BS+1) * 0.1;
    marioimg = marioRightimg;
  }
  image(marioimg, mariox, marioy, (marioimg.width/3)*width/400 , (marioimg.height /3)*height/400  );

  dropMenue(menux, menuy);
  if (v == 1) {
    menux = lerp(menux, width / 2, width / 2666);
  }
  if (v == 0) {
    menux = lerp(menux, width * 1.5, width / 2666);
  }
  DCPrice = round(DC * 1.5 + 5);
  BSPrice = round(BS * 1.1 + 1);
  CVPrice = round(CV * 1.3 + 3);
}
function dropMenue(MX, MY) {
  fill("rgb(156,60,60)");
  rect(MX, MY, width, height);
  fill("gold");
  rect(MX + width / 6, MY - height / 2.5, width / 3.31, height / 8, width / 20);
  fill("red");
  rect(
    MX - width / 3.07,
    MY - height / 2.5,
    width / 3.31,
    height / 8,
    width / 20
  );
  fill("yellow");
  rect(
    MX - width / 3.07,
    MY - height / 8,
    width / 3.31,
    height / 8,
    width / 20
  );
  fill("blue");
  rect(
    MX - width / 3.07,
    MY + height / 8,
    width / 3.31,
    height / 8,
    width / 20
  );
  fill("green");
  rect(
    MX - width / 3.07,
    MY + height / 2.5,
    width / 3.31,
    height / 8,
    width / 20
  );
  fill("black");
  textStyle(BOLD);
  textSize(width / 20);
  text("Back", MX - width / 2.61, MY - height / 2.58);
  text("Drop chance", MX - width / 2.1, MY - height / 8.88);
  text("Mario speed", MX - width / 2.12, MY + height / 7.27);
  text("Coin value", MX - width / 2.25, MY + height / 2.42);

  text("Price " + DCPrice, MX - width / 2.1, MY - height / 4.88);
  text("Price " + BSPrice, MX - width / 2.1, MY + height / 20.27);
  text("Price " + CVPrice, MX - width / 2.1, MY + height / 3.02);
  DC += 9;
  BS += 1;
  CV += 1;
  text("" + DC + "%", MX - width / 6.5, MY - height / 8.88);
  text("" + BS + 0 + "m/s", MX - width / 6.5, MY + height / 7.27);
  text("" + CV, MX - width / 6.5, MY + height / 2.42);
  DC -= 9;
  BS -= 1;
  CV -= 1;
  text("" + Money, MX + width / 38.1, MY - height / 2.58);
  text("Money", MX + width / 12.1, MY - height / 3.48);
}
function mousePressed() {
  //back
  DCPrice = round(DC * 3 + 5);
  BSPrice = round(BS * 2 + 1);
  CVPrice = round(CV * 2.5 + 3);
  if (
    mouseX > menux - width / 2.12 &&
    mouseX < menux - width / 6.89 &&
    mouseY > menuy - height / 2.19 &&
    mouseY < menuy - height / 2.98
  ) {
    v = 0;
  }
  //drop chance
  if (
    mouseX > menux - width / 2.12 &&
    mouseX < menux - width / 6.89 &&
    mouseY > menuy - height / 5.4 &&
    mouseY < menuy - height / 16.66
  ) {
    if (Money >= DCPrice && DC < 91) {
      DC += 1;

      Money -= DCPrice;
    }
  }
  //button2
  if (
    mouseX > menux - width / 2.12 &&
    mouseX < menux - width / 6.89 &&
    mouseY > menuy + height / 14.28 &&
    mouseY < menuy + height / 5.12
  ) {
    if (Money >= BSPrice) {
      BS += 1;
      Money -= BSPrice;
    }
  }
  //button3
  if (
    mouseX > menux - width / 2.12 &&
    mouseX < menux - width / 6.89 &&
    mouseY > menuy + height / 2.89 &&
    mouseY < menuy + height / 2.12
  ) {
    if (Money >= CVPrice) {
      CV += 1;
      Money -= CVPrice;
    }
  }
  //menu button
  if (
    mouseX > width / 40 &&
    mouseX < width / 5.71 &&
    mouseY > height / 80 &&
    mouseY < height / 11.42 &&
    menux > width * 0.8
  ) {
    canvas2.background("skyblue");
    canvas2.fill("rgb(32,207,32)");
    canvas2.strokeWeight(0);
    canvas2.rect(0, height / 1.2, width, height / 1.2);
    canvas2.fill("yellow");
    canvas2.ellipse(width / 1.1, height / 20, width / 10);
    v = 1;
  }
}
function clouds(CX, CY) {
  let size = width/307.69;
  canvas2.arc(CX, CY, (width/16) * size, (width/20) * size, PI + TWO_PI, TWO_PI);
  canvas2.arc(CX + (width/40), CY, (width/16) * size, (width/8.88) * size, PI + TWO_PI, TWO_PI);
  canvas2.arc(CX + (width/16), CY, (width/16) * size, (width/11.42) * size, PI + TWO_PI, TWO_PI);
  canvas2.arc(CX + (width/10), CY, (width/13.333) * size, (width/20) * size, PI + TWO_PI, TWO_PI);
}
function lakitu() {
  canvas2.image( lakituimg,lakitux,lakituy,(lakituimg.width / 5)*width/400,(lakituimg.height / 5)*width/400
  );
  coinChance = random(1, 100);
  lakitux = noise(lakituxOff) * width;
  lakituy = noise(lakituyOff) * width;
  lakituxOff += (0.004 )  
  lakituyOff += (0.004 )
  lakitux = map(lakitux, 0, width, -width/5, width + (width/5));
  lakituy = map(lakituy, 0, height, 0, height - (height/1.58));
}
function coinDroped() {
  coinx[coinx.length] = lakitux+(width/20);
  coiny[coiny.length] = lakituy+(width/40);
}
function coinDraw() {
  for (let i = 0; i < coinx.length; i++) {
    canvas2.strokeWeight(width/800);
    canvas2.rectMode(CENTER);
    canvas2.strokeWeight(width/1333.333);
    canvas2.fill("gold");
    canvas2.circle(coinx[i], coiny[i], width/13.33333);
    canvas2.fill("rgb(250,219,52)");
    canvas2.circle(coinx[i], coiny[i], width/17.39);
    canvas2.fill("rgb(230,194,0)");
    canvas2.strokeWeight(width/4000)
    canvas2.rect(coinx[i], coiny[i], width/133.333, width/26.666);
    canvas2.rectMode(CORNER);
    canvas2.strokeWeight(0); 
    coiny[i]+=width/80
  }
}