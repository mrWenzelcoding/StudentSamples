let fX = [];
let fY = [];
let cX = [];
let cY = [];
let cellSize = [];
let cellCount = [];
let d = []
let ro = []
let rs =[]
let r = []
  let g = []
  let b = []


function setup() {
  createCanvas(400, 400);
  background(0);
  noStroke()
  for (let i = 0; i < 7000; i++) {
    cX[i] = int(random(width));
    cY[i] = int(random(height));
    fX[i] = int(random(width));
    fY[i] = int(random(height));
    cellSize[i] = 30;
    d[i] = dist(fX[i],fY[i],cX[i],cY[i])
    ro[i] = 0
    rs[i] = 1
    r[i] = random(255)
  }
  rectMode(CENTER);
  angleMode(DEGREES)
  cellCount = 1;
}

function draw() {
  background(0);
  fill(255, 200, 255);

  for (let i = 0; i < cellCount; i++) {
    //foods
    fill(255, 200, 255);
    rect(fX[i], fY[i], 10);
    //cells
    push()
    fill(200, 255, 200);
    translate(cX[i], cY[i])
    rotate(ro[i])
    ro[i] += rs[i]
    ellipse(0,0, cellSize[i],cellSize[i]/2);
    rotate(45)
    ellipse(0,0, cellSize[i],cellSize[i]/2);
      rotate(45)
    ellipse(0,0, cellSize[i],cellSize[i]/2);
      rotate(45)
    ellipse(0,0, cellSize[i],cellSize[i]/2);
    pop()
    if (cX[i] < fX[i]) {
      cX[i]++;
    }
    if (cX[i] > fX[i]) {
      cX[i]--;
    }
    if (cY[i] < fY[i]) {
      cY[i]++;
    }
    if (cY[i] > fY[i]) {
      cY[i]--;
    }
     d[i] = dist(fX[i],fY[i],cX[i],cY[i])
    if (d[i]<cellSize[i]/2) {
      fX[i] = int(random(width));
      fY[i] = int(random(height));
      cellSize[i] += 20;
    }
    if (cellSize[i] > 150) {
      console.log("trigger");
      cellCount++;
      cellSize[i] = 30;
      cX[i] = cX[i] + cellSize[i] / 2;
      cY[i] = cY[i] + cellSize[i] / 2;
      fX[i] = int(random(width));
      fY[i] = int(random(height));
      rs[i]+=0.01
    }
  }
}
