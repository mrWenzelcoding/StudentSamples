let bW;
let x = [];
let y = [];
let xSpeed = [];
let ySpeed = [];
let w = [];
let xOff = [];
function setup() {
  createCanvas(500, 500);

  for (let i = 0; i < 200; i++) {
    x[i] = random(width);
    y[i] = random(height);
    xSpeed[i] = 0;
    ySpeed[i] = random(1, 3);
    w[i] = ySpeed[i]*2
    xOff[i]=random(width)
  }
  
}

function draw() {
  background(15, 0, 100, 150);
  fill("rgb(179,193,213)")
  rect(0,height,width,-height*0.15)
  angleMode(DEGREES)
  fill("rgb(203,243,246)")
  arc(width*0.5,height*0.85,200,200,180,0)
  
  stroke("rgb(0,244,255)")
  strokeWeight(1)
  line(width*0.305,height*0.8,width*0.695,height*0.8)
  line(width*0.325,height*0.75,width*0.675,height*0.75)
  line(width*0.365,height*0.7,width*0.635,height*0.7)
  line(width*0.325,height*0.8,width*0.325,height*0.85)
  line(width*0.385,height*0.8,width*0.385,height*0.85)
  line(width*0.385,height*0.7,width*0.385,height*0.75)
  line(width*0.445,height*0.7,width*0.445,height*0.75)
  line(width*0.505,height*0.7,width*0.505,height*0.75)
  line(width*0.565,height*0.7,width*0.565,height*0.75)
  line(width*0.625,height*0.7,width*0.625,height*0.75)
  line(width*0.565,height*0.8,width*0.565,height*0.85)
  line(width*0.625,height*0.8,width*0.625,height*0.85)
  line(width*0.685,height*0.8,width*0.685,height*0.85)
  
  line(width*0.355,height*0.75,width*0.355,height*0.8)
  line(width*0.415,height*0.75,width*0.415,height*0.8)
  line(width*0.415,height*0.7,width*0.415,height*0.67)
  line(width*0.475,height*0.75,width*0.475,height*0.8)
  line(width*0.475,height*0.7,width*0.475,height*0.655)
  line(width*0.535,height*0.75,width*0.535,height*0.8)
  line(width*0.535,height*0.7,width*0.535,height*0.655)
  line(width*0.595,height*0.75,width*0.595,height*0.8)
  line(width*0.595,height*0.7,width*0.595,height*0.675)
  line(width*0.655,height*0.75,width*0.655,height*0.8)
  strokeWeight(10)
  arc(width*0.5,height*0.85,50,100,190,-10)
  fill("rgb(121,121,235)")
  noStroke()
  arc(width*0.5,height*0.85,50,100,180,0)
  for (let i = 0; i < 200; i++) {
    noStroke();
    fill("white");
    snowflake(x[i], y[i], w[i]);

    if (y[i] > height) {
      y[i] = 0;
      x[i] = random(width);
    }

    y[i] += ySpeed[i];
    
    x[i] = map(noise(xOff[i]),0,1,-width/2,width*2)
    xOff[i]+=0.0005
  }
}
function snowflake(x, y, w) {
  //snowflake
  stroke(255);
  strokeWeight(w * 0.1);
  noFill();
  ellipse(x, y, w * 0.5);
  line(x - w * 1.5, y, x + w * 1.5, y);
  line(x - w * 0.75, y - w * 1.25, x + w * 0.75, y + w * 1.25);
  line(x - w * 0.75, y - w * 1.25, x - w, y - w * 1.3);
  line(x - w * 0.75, y - w * 1.25, x - w * 0.7, y - w * 1.5);
  line(x + w * 0.75, y + w * 1.25, x + w * 0.7, y + w * 1.5);
  line(x + w * 0.75, y + w * 1.25, x + w, y + w * 1.3);
  line(x - w * 0.75, y + w * 1.25, x - w, y + w * 1.3);
  line(x - w * 0.75, y + w * 1.25, x - w * 0.7, y + w * 1.5);
  line(x + w * 0.75, y - w * 1.25, x + w * 0.7, y - w * 1.5);
  line(x + w * 0.75, y - w * 1.25, x + w, y - w * 1.3);
  line(x - w * 0.75, y + w * 1.25, x + w * 0.75, y - w * 1.25);
  line(x - w * 1.5, y, x - w * 1.65, y - w * 0.2);
  line(x - w * 1.5, y, x - w * 1.65, y + w * 0.2);
  line(x + w * 1.5, y, x + w * 1.65, y - w * 0.2);
  line(x + w * 1.5, y, x + w * 1.65, y + w * 0.2);
}

