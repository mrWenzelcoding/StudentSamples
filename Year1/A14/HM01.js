let tri = []
//let trianglecount = 50
let trianglecreate = 50
let Size = 400




function setup() {
  noStroke()
  createCanvas(400, 400);
  for(i=0;i<trianglecreate;i++){
 // tri.push({X:random(150,250),Y:random(150,250),X2:random(150,250),Y2:random(150,250),X3:random(150,250),Y3:random(150,250),Xd:random(-5,5),Yd:random(-5,5),R:random(100,200),G:random(0,75),B:random(200,255)})
  }
}

function draw() {
  //background(220);
  for(i=0;i<tri.length;i++){
  fill(tri[i].R,tri[i].G,tri[i].B)

  tri[i].X+=tri[i].Xd
  tri[i].X2+=tri[i].Xd
  tri[i].X3+=tri[i].Xd
  tri[i].Y+=tri[i].Yd
  tri[i].Y2+=tri[i].Yd
  tri[i].Y3+=tri[i].Yd
    
  triangle(tri[i].X,tri[i].Y,tri[i].X2,tri[i].Y2,tri[i].X3,tri[i].Y3)
  
 if((tri[i].X > Size && tri[i].X2 > Size && tri[i].X3 > Size) || (tri[i].Y > Size && tri[i].Y2 > Size && tri[i].Y3 > Size) || (tri[i].X < 0 && tri[i].X2 < 0 && tri[i].X3 < 0) || (tri[i].Y < 0 && tri[i].Y2 < 0 && tri[i].Y3 < 0)){
 tri.splice(i,1)
 } 
}
}

function doFunkyStuff(){
  for (let i=0;i<trianglecreate;i++){
  tri.push({X:random(mouseX-50,mouseX+50),Y:random(mouseY-50,mouseY+50),X2:random(mouseX-50,mouseX+50),Y2:random(mouseY-50,mouseY+50),X3:random(mouseX-50,mouseX+50),Y3:random(mouseY-50,mouseY+50),Xd:random(-5,5),Yd:random(-5,5),R:random(100,200),G:random(0,75),B:random(200,255)})
  }
}

function mouseDragged(){
  //trianglecount+=50
  //trianglecreate 
  doFunkyStuff()
 // console.log(tri)
/*for(i=0;i<trianglecount;i++){

  tri[i].X+=tri[i].Xd
  tri[i].X2+=tri[i].Xd
  tri[i].X3+=tri[i].Xd
  tri[i].Y+=tri[i].Yd
  tri[i].Y2+=tri[i].Yd
  tri[i].Y3+=tri[i].Yd
    
  triangle(tri[i].X,tri[i].Y,tri[i].X2,tri[i].Y2,tri[i].X3,tri[i].Y3)

}*/
}

function mouseClicked(){
console.log(tri)
  doFunkyStuff()
}