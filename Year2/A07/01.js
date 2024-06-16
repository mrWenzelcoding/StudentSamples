Size = 400
let r,g,b

function setup() {
  createCanvas(Size, Size);
  slideD = createSlider(0,Size,Size/2,10)
//  slideD.position(200,0)
  slideD.style('width','100px')
  slideR = createSlider(0,255,255,1)
//  slideR.position(300,0)
  slideR.style('width','100px')
  slideG = createSlider(0,255,250,1)
 // slideG.position(0,20)
  slideG.style('width','100px')
  slideB = createSlider(0,255,0,1)
//  slideB.position(100,20)
  slideB.style('width','100px')
  background(220)
  slideS = createSlider(1,2,1,1)
  slideS.style('width','100px')
}

function draw() {
  d = slideD.value()+10
  r = slideR.value()
  g = slideG.value()
  b = slideB.value()

}

function mousePressed(){
  if(Size>mouseX && mouseX>0 && 0<mouseY && mouseY<Size){
    emoji(mouseX,mouseY,d,r,g,b,slideS.value())
  }
}

function emoji(X,Y,D,R,G,B,Style){
  fill(R,G,B)
  circle(X,Y,D)
    if(Style !== undefined){
      fill("white")
      circle(X+(D/4),Y-(D/5),D/4)
      circle(X-(D/4),Y-(D/5),D/4)
      if(Style === 1){
        arc(X,Y,D/1.5,D/1.5,0,PI,PIE)
      }
      else{
        noFill()
        arc(X,Y,D/1.5,D/3,0,PI,OPEN)
      }
    }
}

