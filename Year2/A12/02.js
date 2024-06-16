//coinLet--->
let coin = []
//playerLet--->
          let player = []
//tLet--->
          let t;
          let timer;
          let ticker;
//nLet--->
          let n = 1
//endLet--->
          let end = false

  function setup() {
  createCanvas(400, 400);
    
    //setupStuff-->
              noStroke()
    
    //coinSetup--->
              coin[0] = 
                {
                x:random(width),
                y:random(height),
                size:random(10,20)
                }
    //playerSetup--->
              player[0] =
                {
                x1:random(width),
                y1:random(height),
                x2:random(width),
                y2:random(height),
                thick:random(40,50),
                thicken:0.03
                }
    //tSetup--->
              t=0
              time=0
              ticker=1
    
}

function draw(){
  background(25);
  
    //coinDrawForloop--->
              for(let i = 0; i<n; i++)
                {
                stroke("rgb(255,185,40)")
                strokeWeight(3)
                fill("gold")
                //coin[i].x = player[0].x1
                //coin[i].y = player[0].y1
                circle(coin[i].x,coin[i].y,coin[i].size)
                }
    //ifStatementsCoin--->
              if(t>150)
                {
                coin[n] = 
                  {
                  x:random(width),
                  y:random(height),
                  size: random(10,20)
                  }
                n++
                t = 0
                }
  //playerDrawStuff--->
              noStroke()
              fill(random(255),random(255),random(255))
              circle(player[0].x1,player[0].y1,player[0].thick)
  //endOfDrawStuff--->
              t++
              player[0].thick+=player[0].thicken
              player[0].x1 = lerp(player[0].x1,player[0].x2,0.05)
              player[0].y1 = lerp(player[0].y1,player[0].y2,0.05)
  //ifStatmentsPlayer--->
              if(int(player[0].x1) == int(player[0].x2) && int(player[0].y1) == int(player[0].y2))
                {
                console.log("woop")
                player[0].x2 = random(width);
                player[0].y2 = random(height)
                }
  //ifStatementEndgame--->
              if(dist(mouseX,mouseY,player[0].x1,player[0].y1) < player[0].thick/2)
                {
                console.log('endScreen')
                gameOver = 2
                noLoop()
                background(0)
                endScreen()
                end = true
                }
                
              }


function mousePressed()
              {
  //mousePressedSplice--->
              for(let i=0; i<n; i++)
                {
                if(dist(mouseX,mouseY,coin[i].x,coin[i].y) < coin[i].size/2)
                  {
                  coin.splice(i,1)
                  n--
                  }
                }
  //endgamePressedRestart--->
              if(end == true && (mouseX>width/2 - 85 && mouseX<width/2+85) && (mouseY>height/2 - 25 && mouseY<height/2+25))
                {
                loop()
                setup()
                end = false
                }
              }

function endScreen()
              {
  //endScreen--->
              fill("white")
              rect(0,0,height,width)
              textAlign(CENTER)
              stroke("black")
              fill("black")
              textSize(50)
              text("restart?",width/2,height/2)
              }
