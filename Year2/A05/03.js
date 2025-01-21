let start = 0;
let fourColours = [];
let score = 0;
let it = 0;
function setup() {
  createCanvas(400, 400);
  fourColours[0] = 0;
  fourColours[1] = 0;
  fourColours[2] = 0;
  fourColours[3] = 0;
  fourColours[4] = 0;
  textAlign(CENTER);
}
let x = 0;
let y = 0;
let xt = 0;
let yt = 0;
function draw() {
  background(0);
  if (start == 0) {
    frameRate(5);
    fill(255);
    text("click to start", 200, 200);
    fourColours[it % 4] = 0;
    it += 0.5;
    fourColours[it % 4] = 1;
  } else {
    frameRate(60);
    x += 0.025;
    y += 0.025;
    xt = map(cos(x), 1, -1, 0, 400);
    yt = map(sin(y), 1, -1, 0, 400);
    fill(255, 255, 255, 150 - (dist(mouseX, mouseY, xt, 200) / 400) * 255);
    circle(xt, 200, 60);
    fill(255, 255, 255, 150 - (dist(mouseX, mouseY, 200, yt) / 400) * 255);
    circle(200, yt, 60);
    score -= 0.0002;
  }
  fill(255, 0 + fourColours[0] * 150, 0 + fourColours[0] * 150);
  rect(0, 0, 170, 170);
  fill(0 + fourColours[1] * 150, 255, 0 + fourColours[1] * 150);
  rect(230, 0, 400, 170);
  fill(0 + fourColours[2] * 150, 0 + fourColours[2] * 150, 255);
  rect(230, 230, 400, 400);
  fill(255, 255, 0 + fourColours[3] * 150);
  rect(0, 230, 170, 400);
  //console.log(mouseY+"      "+mouseX)
  if (
    dist(mouseX, mouseY, xt, 200) < 30 ||
    dist(mouseX, mouseY, 200, yt) < 30
  ) {
    console.log("lose");
    background(0);
    text("you lose", 200, 200);
    text("your score", 200, 200 + textAscent());
    text("was", 200, 200 + textAscent() * 2);
    score = round(score);
    text(score, 200, 200 + textAscent() * 3);
    console.error(
      "uh oh i didnt think you could actauly die in this game to bad for you"
    );
    noLoop();
  }
}
function mouseClicked() {
  if (0 <= mouseX && mouseX <= 400 && 0 <= mouseY && mouseY <= 400) {
    if (start === 0) {
      start++;
      it = round(it);
    } else {
      if (
        (mouseX < 170 && mouseY < 170 && it % 4 == 0) ||
        (mouseX > 230 && mouseY < 170 && it % 4 == 1) ||
        (mouseX > 230 && mouseY > 230 && it % 4 == 2) ||
        (mouseX < 170 && mouseY > 230 && it % 4 == 3)
      ) {
        score++;
      } else {
        score--;
      }
      fourColours[it % 4] = 0;
      it = round(random(4));
      console.log(it);
      fourColours[it % 4] = 1;
    }
  }
}
