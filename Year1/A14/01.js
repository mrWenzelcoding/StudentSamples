let w1=[]
let w2=[]
let w3=[]
let h1=[]
let h2=[]
let h3=[]
let ts=[]
let ts2=[]
let r=[]
let g=[]
let b=[]
let rs=[]
let gs=[]
let bs=[]
let c=["#FCE6CC","#F76F8E","#96616B","#37505C","#113537"]
let cs=[]
let cs2=[]
function setup() {
  
  createCanvas(600, 600);
  
  //Variable set up
  for(let i=0; i<400; i++){
  cs[i]=c[floor(random(5))]
  cs2[i]=c[floor(random(5))]
  w1[i]=random(width)
  w2[i]=random(width)
  w3[i]=random(width)
  h1[i]=random(height)
  h2[i]=random(height)
  h3[i]=random(height)
  ts[i]=random(-10,10)
  ts2[i]=random(-10,10)
  rs[i]=random(255)
  gs[i]=random(255)
  bs[i]=random(255)
    
}
}

function draw() {
  for(let i=0; i<400; i++){
    
    //animation
    fill(cs[i])
    stroke(cs2[i])
    triangle(w1[i],h1[i],w2[i],h2[i],w3[i],h3[i])
    w1[i]=w1[i]+ts[i]
    w2[i]=w2[i]+ts[i]
    w3[i]=w3[i]+ts[i]
    h1[i]=h1[i]+ts2[i]
    h2[i]=h2[i]+ts2[i]
    h3[i]=h3[i]+ts2[i]
  }
  function keyPressed(){
    for(let i=0; i<400; i++){
  cs[i]=
  cs2[i]
  ts[i]=ts[i]*(1-2)
  ts2[i]=ts2[i]*(1-2)

    
}
    
  }
  
}