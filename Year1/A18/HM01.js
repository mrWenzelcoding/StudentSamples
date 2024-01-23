let img;
let x = [];
let y = [];
let bs = [];
let col = [];
let bss = [];
let causticSpred = false
function preload() {
  img = loadImage("assets/mountain.jpg");
}
function setup() {
  createCanvas(500,500);
  noStroke();
  if(causticSpred == false){
    image(img, 0, 0, 500, 500); 
  }
  if(causticSpred == true){
  image(img, 0, 0);
  }
  for (let i = 0; i < 2000; i++) {
    bs[i] = 2;
    if(causticSpred == false){
    bss[i] = 0.2;
    }
    if(causticSpred == true){
      bss[i] = 0.1
    }
  }
}

function draw() {
  for (let i = 0; i < 2000; i++) {
    x[i] = random(width);
    y[i] = random(height);
    col[i] = get(x[i], y[i]);
    fill(col[i]);
    ellipse(x[i], y[i], bs[i]);
    bs[i] += bss[i];
    if (bs[i] > 15) {
      bss[i] *= -1;
    }
    if (bs[i] < 2) {
      noLoop();
    }
  }
}
