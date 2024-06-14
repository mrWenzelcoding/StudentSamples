let Qx;
let Qy;
let Qs;
let OpSx;
let OpSy;
let spot;
let tellme;
let spawntime;
let cellx = [];
let celly = [];
let cells = [];
let spawn;
let foodx = [];
let foody = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(180);
  //  noStroke()
  Qx = random(width);
  Qy = random(height);
  OpSx = random(width);
  OpSy = random(height);
  console.log(round(OpSx), round(OpSy));
  spot = 0;
  //tellme = "no"
  spawntime = 120;
  spawn = 0;
  Qs = 40;
  for (let i = 0; i < 100; i++) {
    cellx[i] = OpSx;
    celly[i] = OpSy;
    foodx[i] = random(width);
    foody[i] = random(height);
    cells[i] = 20;
  }
}

function draw() {
  background("black");
  fill("white");

  ellipse(Qx, Qy, Qs);
  textSize(40);
  text("👑", Qx - 19, Qy - 15);
  if (spot == 0) {
    Qx = lerp(Qx, round(OpSx), 0.01);
    Qy = lerp(Qy, round(OpSy), 0.01);
  }
  if (round(Qx) == round(OpSx) && round(Qy) == round(OpSy)) {
    spot = 1;
  }
  if (spot == 1) {
    spawntime = spawntime - 2;
    if (spawntime <= 0) {
      spawn = spawn + 1;
      spawntime = 120;
    }
  }
  for (let i = 0; i < spawn; i++) {
    fill("green");
    ellipse(foodx[i], foody[i], 10);
    fill("white");
    ellipse(cellx[i], celly[i], cells[i]);
    cellx[i] = lerp(cellx[i], round(foodx[i]), 0.01);
    celly[i] = lerp(celly[i], round(foody[i]), 0.01);

    if (
      round(cellx[i]) == round(foodx[i]) &&
      round(celly[i]) == round(foody[i])
    ) {
      cells[i] += 5;
      foodx[i] = random(width);
      foody[i] = random(height);
    }
  }

  //console.log(spot)
  // console.log(spawntime);
}
//Resizing Window Code

function mousePressed() {

  if (mouseX > 0 && mouseX < windowWidth && mouseY > 0 && mouseY < windowHeight) {

    let fs = fullscreen();

    fullscreen(!fs);

  }

}



function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

}