let Pixel
// G = green, B = brown, T = tan 
let a = [
  [" "," "," "," "," ","G","G","G","G","G","G"," "," "," "," "],
  [" "," "," "," ","G","G","G","G","G","G","G","G"," "," "," "],
  [" "," ","T"," ","G","B","B","B","B","B","B","G"," ","T"," "],
  [" "," ","T"," ","B","B","B","B","B","B","B","B"," ","T"," "],
  [" "," ","T","T","B","T","G","T","T","G","T","B","T","T"," "],
  [" "," ","T","T","B","T","B","T","T","B","T","B","T","T"," "],
  [" "," "," ","T","T","T","T","T","T","T","T","T","T","B"," "],
  [" "," "," ","G","G","T","T","B","B","T","T","G","G","B"," "],
  [" ","B","B","B","B","B","T","T","T","T","G","G","B","B","B"],
  ["B","B","T","B","B","B","B","G","G","G","G","G","T","B","B"],
  ["B","T","T","T","B","B","T","B","B","G","G","T","T","T","B"],
  ["B","B","T","B","B","B","T","G","B","B","B","B","T","T","T"],
  ["B","B","T","B","B","B","T","B","B","G","G","G","G","T"," "],
  ["B","B","B","B","B","B","T","G","G","G","G","G"," "," "," "],
  [" ","T","T","T","T","T","B"," "," ","B","B","B"," "," "," "],
  [" "," "," "," ","B","B","B"," "," "," "," "," "," "," "," "]
]
let num = 0


function setup() {
  createCanvas(480, 450);
  rectMode(CENTER)
  noStroke()
  
  pixel = new Pix(width/2, height/2, 30, 200,155,0)
  
}

function draw() {
  background(220);
  
  for(let r = 0; r < 16; r++){
    for(let c = 0; c < 15; c++){
      if(a[r][c] == "G"){
        pixel[num] = new Pix(30*c, 30*r, 30, 25, 181, 51)
        num++
      } else if(a[r][c] == "B"){
        pixel[num] = new Pix(30*c, 30*r, 30, 158, 105, 6)
        num++
      } else if(a[r][c] == "T"){
        pixel[num] = new Pix(30*c, 30*r, 30, 252, 165, 3)
        num++
      }
    }
  }
  
  for(let i = 0; i < num; i++){
    pixel[i].display()
  }
  
  
}

class Pix{
  constructor(_x, _y, _s, _r, _g, _b){
    this.x = _x
    this.y = _y
    this.s = _s
    this.r = _r
    this.g = _g
    this.b = _b
  }
  
  display(){
    fill(this.r, this.g, this.b)
    rect(this.x, this.y, this.s)
  }
  
  
}