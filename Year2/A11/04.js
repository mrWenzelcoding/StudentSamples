

let particle = []
let j
let kool
function setup() {
  angleMode(DEGREES)
  noStroke()
  noCursor()
  createCanvas(400, 400);
  j=0
  kool=0

}
let sm = 0;
function draw() {
  console.log("ezra helped w spiral")
  translate(200,200)
  sm++
  rotate(sm)
  background(0,30);
  if(kool==1){
    Particle()
  }
}

function Particle(){
    let particle2={
      x: 0,
      y: 0,
      Xspeed: random(-4,4),
      Yspeed: random(-5,5),
      s:15

    }
    particle.push(particle2)
    for(let i =0; i<j; i++){
      
      fill('#0798AB')
      
      particle[i].x = particle[i].x+particle[i].Xspeed
      
      particle[i].y = particle[i].y+particle[i].Yspeed
      
      circle(particle[i].x,particle[i].y,particle[i].s)

    }
    j++
  
   if(particle.length>300){

    particle.shift()

    j--

  }
}

function mouseClicked() {
  kool=1
}

