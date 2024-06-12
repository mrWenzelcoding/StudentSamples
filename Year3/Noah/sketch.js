/*
player 1 is red
player 2 is blue
player 3 is green
player 4 is yellow

you must roll before passing your turn/doing any actions on your turn
*/
let gameState
let box
let tradeBImg
let houseP1 = []
let houseP2 = []
let houseP3 = []
let houseP4 = []
let space = []
let spaceC = []
let tradeBox1, tradeBox2, tradeBox3, tradeBox4, tradeBox5, tradeBox6
let con1 = 0, con2 = 0, con3 = 0, con4 = 0, con5 = 0, con6 = 0
let prop = []
let tradeProp = []
let p1M, p2M, p3M, p4M
let bp = []
let p1p = []
let p2p = []
let p3p = []
let p4p = []
let p1, p2, p3, p4 
let dice1, dice2
let move
let place1, place2, place3, place4
let spaceImg = []
let turn = 1
let price 
let own
let buy = true
let ownR
let ownU
let p1t, p2t, p3t, p4t
let next
let nextPress = false
let turn1, turn2, turn3, turn4
let set
let buyH
let tradeB
let clearB
let modeH = false
let tradeM = false
let greenO, redO
let house = 0
let chance = []
let chest = []
let propHold = false
let holdN
let Tarrow
let tradeBoxImg
let main1, main2

//let gameState = 'Intro'
//setup
function preload(){
	for(let i =1;i<41;i++){
		spaceImg[i] = loadImage('assets/space' + i + '.png')

	}
	tradeBImg = loadImage('assets/arrow.png')
gameState = "runGame"


}
function setup() {
	new Canvas(2000,2000, 'fullscreen');
	background(100)




	box = new Sprite
box.x = 1000
box.y = 1005
box.w = 918
box.h = 918
box.color = color(205,230,208,255)
box.collider = 'none'
box.strokeColor = 'black'
box.strokeWeight = 20



Box()


next = new Sprite
next.x = 1000
next.y = 1330
next.w = 400
next.h = 150
next.textSize = 90
next.color = 'white'





tradeB = new Sprite
tradeB.x = 1000
tradeB.y = 997
tradeB.w = 100
tradeB.h = 70
tradeB.textSize = 90
tradeB.color = 'white'
tradeB.collider = 'none'
//tradeB.img = tradeBImg

Tarrow = new Sprite
Tarrow.x = 1000
Tarrow.y = 1000
Tarrow.w = 100
Tarrow.h = 70
Tarrow.collider = 'none'
Tarrow.img = tradeBImg

clearB = new Sprite
clearB.x = 1000
clearB.y = 900
clearB.w = 100
clearB.h = 70
clearB.color = 'white'
clearB.collider = 'none'
clearB.textSize = 35


buyH = new Sprite
buyH.x = 1000
buyH.y = 680
buyH.w = 500
buyH.h = 150
buyH.textSize = 90
buyH.color = 'white'

p1t = new Sprite
p1t.x = 1000
p1t.y = 1730
p1t.w = 600
p1t.h = 200
p1t.textSize = 150
p1t.color = 'red'

p2t = new Sprite
p2t.x = 275
p2t.y = 1005
p2t.w = 600
p2t.h = 200
p2t.textSize = 150
p2t.rotation = 90
p2t.color = 'white'

p3t = new Sprite
p3t.x = 1000
p3t.y = 280
p3t.w = 600
p3t.h = 200
p3t.textSize = 150
p3t.color = 'white'

p4t = new Sprite
p4t.x = 1725
p4t.y = 1005
p4t.w = 600
p4t.h = 200
p4t.textSize = 150
p4t.rotation = 90
p4t.color = 'white'

space[1] = new Sprite
space[1].collider = 'none'
space[1].w =150
space[1].h = 150
space[1].img = spaceImg[1]
space[1].x =  1525
space[1].y = 1530
space[1].rent = []
space[1].house = 0
for(let i =2;i<11;i++){
space[i] = new Sprite
space[i].collider = 'none'
space[i].w =100
space[i].h = 150
space[i].img = spaceImg[i]
space[i].x = 1600 - 100 * i 
space[i].y = 1530
space[i].rent = []
space[i].house = 0
}

space[11] = new Sprite
space[11].collider = 'none'
space[11].w =150
space[11].h = 150
space[11].img = spaceImg[11]
space[11].x = 475
space[11].y = 1530
space[11].rent = []
space[11].house = 0
for(let i =12;i<21;i++){
	space[i] = new Sprite
	space[i].collider = 'none'
	space[i].w =100
	space[i].h = 150
	space[i].img = spaceImg[i]
	space[i].x = 475 
	space[i].y = 1805 - 100*(i-8)
	space[i].rotation = 90
	space[i].rent = []
	space[i].house = 0
}

space[21] = new Sprite
space[21].collider = 'none'
space[21].w =150
space[21].h = 150
space[21].img = spaceImg[21]
space[21].x = 475
space[21].y = 480
space[21].rent = []
space[21].house = 0
for(let i =22;i<31;i++){
		space[i] = new Sprite
		space[i].collider = 'none'
		space[i].w =100
		space[i].h = 150
		space[i].img = spaceImg[i]
		space[i].x = 100 + 100 *(i -17) 
		space[i].y = 480
		space[i].rotation = 180
		space[i].rent = []
		space[i].house = 0
		}

space[31] = new Sprite
space[31].collider = 'none'
space[31].w =150
space[31].h = 150
space[31].img = spaceImg[31]
space[31].x = 1525
space[31].y = 480
space[31].rent = []
space[31].house = 0

		for(let i =32;i<41;i++){
			space[i] = new Sprite
			space[i].collider = 'none'
			space[i].w =100
			space[i].h = 150
			space[i].img = spaceImg[i]
			space[i].x = 1525 
			space[i].y = 5 + 100*(i-26)
			space[i].rotation = 270
			space[i].rent = []
			space[i].house = 0
			}


			
p1 = new Sprite 
p1.color = 'red'
p1.collider = 'none'
p1.w = 20
p1.h = 20
p1.x = space[1].x - 20
p1.y = space[1].y - 20



p2 = new Sprite 
p2.color = 'blue'
p2.collider = 'none'
p2.w = 20
p2.h = 20
p2.x = space[1].x + 20
p2.y = space[1].y - 20

p3 = new Sprite 
p3.color = 'green'
p3.collider = 'none'
p3.w = 20
p3.h = 20
p3.x = space[1].x - 20
p3.y = space[1].y + 20

p4 = new Sprite 
p4.color = 'yellow'
p4.collider = 'none'
p4.w = 20
p4.h = 20
p4.x = space[1].x + 20
p4.y = space[1].y + 20


	//for(let i =1;i<41;i++){
	//	space[i].own = 0
		
//	}
	turn1 = true
	turn2 = false
	turn3 = false
	turn4 = false
	place1 = 1
	place2 = 1
	place3 = 1
	place4 = 1
	p1M = 1500
	p2M = 1500
	p3M = 1500
	p4M = 1500
	spaceInf()

	for(let i = 2;i<11;i++){
		if(space[i].buy != false){
		prop[i] = new Sprite
		prop[i].h = 30
		prop[i].w = 30
		prop[i].x = space[i].x
		prop[i].y = space[i].y -90
		prop[i].color = 'gray'
		}

		
	}
	for(let i = 12;i<21;i++){
		if(space[i].buy != false){
		prop[i] = new Sprite
		prop[i].h = 30
		prop[i].w = 30
		prop[i].x = space[i].x +90
		prop[i].y = space[i].y 
		prop[i].color = 'gray'
		}

		
	}
	for(let i = 22;i<31;i++){
		if(space[i].buy != false){
		prop[i] = new Sprite
		prop[i].h = 30
		prop[i].w = 30
		prop[i].x = space[i].x
		prop[i].y = space[i].y +90
		prop[i].color = 'gray'
		}

		
	}
	for(let i = 32;i<41;i++){
		if(space[i].buy != false){
		prop[i] = new Sprite
		prop[i].h = 30
		prop[i].w = 30
		prop[i].x = space[i].x-90
		prop[i].y = space[i].y 
		prop[i].color = 'gray'
		}

		
	}
	for(let i = 1;i<=3;i++){
		
		tradeProp[i] = new Sprite
		tradeProp[i].h = 30
		tradeProp[i].w = 30
		tradeProp[i].x = 560 + (110*i)
		tradeProp[i].y = 900
		tradeProp[i].color = 'gray'
		tradeProp[i].collider = 'none'
	
	}
	for(let i = 4;i<=6;i++){
		
		tradeProp[i] = new Sprite
		tradeProp[i].h = 30
		tradeProp[i].w = 30
		tradeProp[i].x = 1000 + (110*(i - 3))
		tradeProp[i].y = 900
		tradeProp[i].color = 'gray'
		tradeProp[i].collider = 'none'
	
	}


}

function draw() {
	
	//for(let i =1;i<41;i++){
	//	if(space[i].own == 1){
	//		space[i].mark = new Sprite
	//		space[i].mark.color = 'red'
	//	}
	//}


	if(gameState == "intro"){
       Intro()
	}else
	if(gameState == "runGame"){
		RunGame()
	}

}

//turn stuff

function DiceRoll1(){
dice1=Math.floor(random(1,7))
dice2=Math.floor(random(1,7))
move = dice1+dice2
if(move + place1 > 40){
	place1 = place1-40
	p1M = p1M + 200
}
p1.moveTo(space[move+place1].x-20,space[move+place1].y-20, 8) 


if(space[move+place1].buy != false){
	p1M = p1M - space[move+place1].price
	space[move+place1].own = 1
	space[move+place1].buy = false
	
	}

	//paying others
if(space[move+place1].buy == false){
	if(space[move+place1].own == 1){
		p1M = p1M
	} else 
	if(space[move+place1].own ==2){
		p1M = p1M - space[move+place1].rent[space[move+place1].house] 
		p2M = p2M + space[move+place1].rent[space[move+place1].house]
	} else
	if(space[move+place1].own == 3){
		p1M = p1M - space[move+place1].rent[space[move+place1].house]
		p3M = p3M + space[move+place1].rent[space[move+place1].house]
	} else
	if(space[move+place1].own == 4){
		p1M = p1M - space[move+place1].rent[space[move+place1].house]
		p4M = p4M + space[move+place1].rent[space[move+place1].house]
	}
}



place1 = move + place1

}
function DiceRoll2(){
	dice1=Math.floor(random(1,7))
	dice2=Math.floor(random(1,7))
	move = dice1+dice2
	if(move + place2 > 40){
		place2 = place2-40
		p2M = p2M + 200
	}
	p2.moveTo(space[move+place2].x+20,space[move+place2].y-20, 8) 

	
	if(space[move+place2].buy != false){
	p2M = p2M - space[move+place2].price
	space[move+place2].own = 2
	space[move+place2].buy = false
	}
	if(space[move+place2].buy == false){
		if(space[move+place2].own == 1){
			p2M = p2M - space[move+place2].rent[space[move+place2].house]
			p1M = p1M + space[move+place2].rent[space[move+place2].house]
			
		} else 
		if(space[move+place2].own ==2){
			p2M = p2M
		} else
		if(space[move+place2].own == 3){
			p2M = p2M - space[move+place2].rent[space[move+place2].house]
			p3M = p3M + space[move+place2].rent[space[move+place2].house]
		} else
		if(space[move+place2].own == 4){
			p2M = p2M - space[move+place2].rent[space[move+place2].house]
			p4M = p4M + space[move+place2].rent[space[move+place2].house]
		}
	}

	place2 = move + place2
	console.log(p2M)
}
function DiceRoll3(){
		dice1=Math.floor(random(1,7))
		dice2=Math.floor(random(1,7))
		move = dice1+dice2
		if(move + place3 > 40){
			place3 = place3-40
			p3M = p3M + 200
		}
		p3.moveTo(space[move+place3].x-20,space[move+place3].y+20, 8) 

		if(space[move+place3].buy != false){
			p3M = p3M - space[move+place3].price
			space[move+place3].own = 3
			space[move+place3].buy = false
			}

			if(space[move+place3].buy == false){
				if(space[move+place3].own == 1){
					p3M = p3M - space[move+place3].rent[space[move+place3].house]
					p1M = p1M + space[move+place3].rent[space[move+place3].house]
				} else 
				if(space[move+place3].own ==2){
					p3M = p3M - space[move+place3].rent[space[move+place3].house]
					p2M = p2M + space[move+place3].rent[space[move+place3].house]
				} else
				if(space[move+place3].own == 3){
					p3M = p3M
				} else
				if(space[move+place3].own == 4){
					p3M = p3M - space[move+place3].rent[space[move+place3].house]
					p4M = p4M + space[move+place3].rent[space[move+place3].house]
				}
			}
			

		place3 = move + place3
		console.log(p3M)
}

function DiceRoll4(){
			dice1=Math.floor(random(1,7))
			dice2=Math.floor(random(1,7))
			move = dice1+dice2
			if(move + place4 > 40){
				place4 = place4-40
				p4M = p4M + 200
			}
			
			p4.moveTo(space[move+place4].x+20,space[move+place4].y+20, 8)

			if(space[move+place4].buy != false){
				p4M = p4M - space[move+place4].price
				space[move+place4].own = 4
				space[move+place4].buy = false
				}

				if(space[move+place4].buy == false){
					if(space[move+place4].own == 1){
						p4M = p4M - space[move+place4].rent[space[move+place4].house]
						p1M = p1M + space[move+place4].rent[space[move+place4].house]
					} else 
					if(space[move+place4].own ==2){
						p4M = p4M - space[move+place4].rent[space[move+place4].house] 
						p2M = p2M + space[move+place4].rent[space[move+place4].house]
					} else
					if(space[move+place4].own == 3){
						p4M = p4M - space[move+place4].rent[space[move+place4].house]
						p3M = p3M + space[move+place4].rent[space[move+place4].house]
					} else
					if(space[move+place4].own == 4){
						p4M = p4M
					}
				}
				
			place4 = move + place4
			console.log(p4M)

}
function RunGame(){
	
if(nextPress == false){

	if(kb.presses('r')){
	if(turn == 1){
	DiceRoll1()
	nextPress = true
	}
	
	if(turn == 2){
	DiceRoll2()
	nextPress = true
	}

	if(turn == 3){
	DiceRoll3()
	nextPress = true
	}

	if(turn == 4){
	DiceRoll4()
	nextPress = true
	}



	}
}
	if(kb.presses('h')){
		space[7].set = true
		space[9].set = true
		space[14].set = true
	}
//next turn only after rolling
if(MouseOverlap(next) && mouse.presses()){
if(nextPress == true){

		turn ++
		if(turn == 5){
			turn = 1
		}
		nextPress = false

	}
}

//house buy mode
if(MouseOverlap(buyH) && mouse.presses() && nextPress == true){
if(modeH == false){
modeH = true
tradeM = false
}else if(modeH == true){
	modeH = false
}

}


// house placement and stuff // red back
for(let i =1;i<41;i++){
	if(MouseOverlap(space[i]) && mouse.presses() && modeH == true && nextPress == true){
		if(space[i].set != true || space[i].house == 5){
			background('red')
			setTimeout(resetBack,1000)
			

		} else if(space[i].set == true && space[i].house != 4){
			space[i].house++
			houseP1[i] = new Sprite
			houseP1[i].collider = 'none'
			if(i >= 1 && i<=10){
			houseP1[i].y = space[i].y - 60
			houseP1[i].x = space[i].x - (space[i].house * 16) + 40
			if(turn == 1){
			p1M -= 50
			} else if(turn == 2){
				p2M -= 50
			} else if(turn == 3){
				p3M -= 50
			} else if(turn == 4){
				p4M -= 50
			}
			
			} else if(i>= 11 && i<=20){
			houseP1[i].y = space[i].y
			houseP1[i].x = space[i].x + 60
			houseP1[i].rotation = 90
			if(turn == 1){
				p1M -= 100
				} else if(turn == 2){
					p2M -= 100
				} else if(turn == 3){
					p3M -= 100
				} else if(turn == 4){
					p4M -= 100
				}
			} else if(i>= 21 && i<=30){
			houseP1[i].y = space[i].y + 60
			houseP1[i].x = space[i].x
			houseP1[i].rotation = 180
			if(turn == 1){
				p1M -= 150
				} else if(turn == 2){
					p2M -= 150
				} else if(turn == 3){
					p3M -= 150
				} else if(turn == 4){
					p4M -= 150
				}
			}else if(i>=31 && i<=40){
			houseP1[i].y = space[i].y
			houseP1[i].x = space[i].x - 60
			houseP1[i].rotation = 270
			if(turn == 1){
				p1M -= 200
				} else if(turn == 2){
					p2M -= 200
				} else if(turn == 3){
					p3M -= 200
				} else if(turn == 4){
					p4M -= 200
				}
			}
			
			houseP1[i].h = 10
			houseP1[i].w = 10
			houseP1[i].color = 'green'

		} else if(space[i].set == true && space[i].house == 4){
			space[i].house++
			houseP1[i] = new Sprite
			houseP1[i].collider = 'none'
			
			if(i >= 1 && i<=10){
				houseP1[i].y = space[i].y - 60
				houseP1[i].x = space[i].x
				if(turn == 1){
					p1M -= 50
					} else if(turn == 2){
						p2M -= 50
					} else if(turn == 3){
						p3M -= 50
					} else if(turn == 4){
						p4M -= 50
					}
				} else if(i>= 11 && i<=20){
				houseP1[i].y = space[i].y
				houseP1[i].x = space[i].x + 60
				houseP1[i].rotation = 90
				if(turn == 1){
					p1M -= 100
					} else if(turn == 2){
						p2M -= 100
					} else if(turn == 3){
						p3M -= 100
					} else if(turn == 4){
						p4M -= 100
					}
				} else if(i>= 21 && i<=30){
				houseP1[i].y = space[i].y + 60
				houseP1[i].x = space[i].x
				houseP1[i].rotation = 180
				if(turn == 1){
					p1M -= 150
					} else if(turn == 2){
						p2M -= 150
					} else if(turn == 3){
						p3M -= 150
					} else if(turn == 4){
						p4M -= 150
					}
				}else if(i>=31 && i<=40){
				houseP1[i].y = space[i].y
				houseP1[i].x = space[i].x - 60
				houseP1[i].rotation = 270
				if(turn == 1){
					p1M -= 200
					} else if(turn == 2){
						p2M -= 200
					} else if(turn == 3){
						p3M -= 200
					} else if(turn == 4){
						p4M -= 200
					}
				}
			houseP1[i].h = 20
			houseP1[i].w = 60
			houseP1[i].color = 'red'
		}
	}


	//tradeing

		if(MouseOverlap(space[i]) && mouse.presses() && modeH == false && i != 1 && i != 3&& i != 5&& i != 8&& i != 11&& i != 18&& i != 21&& i != 23&& i != 31&& i != 34&& i != 37&& i != 39){
			if(space[i].buy == false ){
				holdN = i
				spaceC[i] = new Sprite()
				spaceC[i].w = 100
				spaceC[i].h = 150
				spaceC[i].x = mouse.x
				spaceC[i].y = mouse.y
				spaceC[i].img = spaceImg[i]
				spaceC[i].collider = 'none'
				propHold = true
				
		}



	}



	if(propHold == true && mouse.pressing()){
		if (spaceC[i]){
			spaceC[i].x = mouse.x
			spaceC[i].y = mouse.y
		} 
			
		}else{
			propHold == false
		}
	



	if(propHold == true && mouse.released() && spaceC[holdN]){
		if(MouseOverlap(tradeBox1)){
			tradeBox1.img = spaceC[holdN].img
			con1 = holdN
			spaceC[holdN].remove()
			
			if(space[holdN].own == 1){
				tradeProp[1].color = 'red'
			} else 
			if(space[holdN].own == 2){
				tradeProp[1].color = 'blue'
			} else
			if(space[holdN].own == 3){
				tradeProp[1].color = 'green'
			} else
			if(space[holdN].own == 4){
				tradeProp[1].color = 'yellow'
			} else {
				tradeProp[1].color = 'gray'
			}
			
		} else
		if(MouseOverlap(tradeBox2)){
			tradeBox2.img = spaceC[holdN].img
			con2 = holdN
			spaceC[holdN].remove()

			if(space[holdN].own == 1){
				tradeProp[2].color = 'red'
			} else 
			if(space[holdN].own == 2){
				tradeProp[2].color = 'blue'
			} else
			if(space[holdN].own == 3){
				tradeProp[2].color = 'green'
			} else
			if(space[holdN].own == 4){
				tradeProp[2].color = 'yellow'
			} else {
				tradeProp[2].color = 'gray'
			}
		} else
		if(MouseOverlap(tradeBox3)){
			tradeBox3.img = spaceC[holdN].img
			con3 = holdN
			spaceC[holdN].remove()

			if(space[holdN].own == 1){
				tradeProp[3].color = 'red'
				main1 = 1
			} else 
			if(space[holdN].own == 2){
				tradeProp[3].color = 'blue'
				main1 = 2
			} else
			if(space[holdN].own == 3){
				tradeProp[3].color = 'green'
				main1 = 3
			} else
			if(space[holdN].own == 4){
				tradeProp[3].color = 'yellow'
				main1 = 4
			} else {
				tradeProp[3].color = 'gray'
			}
		} else
		if(MouseOverlap(tradeBox4)){
			tradeBox4.img = spaceC[holdN].img
			con4 = holdN
			spaceC[holdN].remove()

			if(space[holdN].own == 1){
				tradeProp[4].color = 'red'
				main2 = 1
			} else 
			if(space[holdN].own == 2){
				tradeProp[4].color = 'blue'
				main2 = 2
			} else
			if(space[holdN].own == 3){
				tradeProp[4].color = 'green'
				main2 = 3
			} else
			if(space[holdN].own == 4){
				tradeProp[4].color = 'yellow'
				main2 = 4
			} else {
				tradeProp[4].color = 'gray'
			}
		} else
		if(MouseOverlap(tradeBox5)){
			tradeBox5.img = spaceC[holdN].img
			con5 = holdN
			spaceC[holdN].remove()

			if(space[holdN].own == 1){
				tradeProp[5].color = 'red'
			} else 
			if(space[holdN].own == 2){
				tradeProp[5].color = 'blue'
			} else
			if(space[holdN].own == 3){
				tradeProp[5].color = 'green'
			} else
			if(space[holdN].own == 4){
				tradeProp[5].color = 'yellow'
			} else {
				tradeProp[5].color = 'gray'
			}
		} else
		if(MouseOverlap(tradeBox6)){
			tradeBox6.img = spaceC[holdN].img
			con6 = holdN
			spaceC[holdN].remove()

			if(space[holdN].own == 1){
				tradeProp[6].color = 'red'
			} else 
			if(space[holdN].own == 2){
				tradeProp[6].color = 'blue'
			} else
			if(space[holdN].own == 3){
				tradeProp[6].color = 'green'
			} else
			if(space[holdN].own == 4){
				tradeProp[6].color = 'yellow'
			} else {
				tradeProp[6].color = 'gray'
			}
		} else{
			spaceC[holdN].remove()
		}
	}

}


	if(MouseOverlap(clearB) && mouse.presses()){
		for(let i = 1;i<=6;i++){
		tradeProp[i].color = 'gray'
		}
		tradeBox1.remove()
		tradeBox2.remove()
		tradeBox3.remove()
		tradeBox4.remove()
		tradeBox5.remove()
		tradeBox6.remove()
		con1 = 0
		con2 = 0
		con3 = 0
		con4 = 0
		con5 = 0
		con6 = 0
		main1 = 0
		main2 = 0
		Box()
	}
	if(MouseOverlap(tradeB) && mouse.presses()){
		if(con1 != 0){
			if(space[con4].own = 1){
				
			}
			space[con1].own = main2
		}
		if(con2 != 0){
			space[con2].own = main2
		}
		if(con3 != 0){
		space[con3].own = main2
		}
		if(con4 != 0){
		space[con4].own = main1
		}
		if(con5 !=0){
			space[con5].own = main1
		}
		if(con6 !=0){
			space[con6].own = main1
		}


	}













/*

NOT WORKING :((((

	for(let i = 1;i<41;i++){
	if(MouseOverlap(space[i]) && modeH == true && nextPress == true){
		if(space[i].set == true){

			tint(0,255,0)


		}else if(space[i].set != true){
			push()
			tint(255,0,0)
			space[i].draw
			pop()
		}
		
		
		
	}else{
	//noTint()
	}
	
	
	}
*/



	//go into house buy mode
	//click on the property to add a house
	//exit by clicking again





	//text
	p1t.text = p1M
	p2t.text = p2M
	p3t.text = p3M
	p4t.text = p4M
	next.text = 'Next Turn'
	buyH.text = 'Buy Houses'
	clearB.text = 'Clear'


//color change of house buy button
if(MouseOverlap(buyH)){
	if(nextPress==false){
		buyH.color = 'red'
	}
	if(nextPress==true){
		buyH.color = 'green'
	}
	
}else{
		buyH.color = 'white'
	}



	//color change of next button
	if(MouseOverlap(next)){
		if(nextPress==false){
			next.color = 'red'
		}
		if(nextPress==true){
			next.color = 'green'
		}
		
	}else{
		next.color = 'white'
	}

	if(MouseOverlap(tradeB)){
		tradeB.color = 'green'
	} else {
		tradeB.color = 'white'
	}
//money color thibgy
	if(turn == 1){
	p1t.color = 'red'
	p4t.color = 'white'
	}

	if(turn == 2){
	p2t.color = 'red'
	p1t.color = 'white'
	}

	if(turn == 3){
	p3t.color = 'red'
	p2t.color = 'white'
	}

	if(turn == 4){
	p4t.color = 'red'
	p3t.color = 'white'
	}
//ownership color
	for(let i = 1;i<41;i++){
		if(space[i].own == 1){
			prop[i].color = 'red'
		}
		if(space[i].own == 2){
			prop[i].color = 'blue'
		}
		if(space[i].own == 3){
			prop[i].color = 'green'
		}
		if(space[i].own == 4){
			prop[i].color = 'yellow'
		}
	}


}
function Intro(){

}


//price and buyability
function spaceInf(){
	for(let i =1;i<41;i++){
		bp[i] = i 
	}

	//price
	space[1].buy = false
	space[2].price = 60
	space[3].buy = false
	space[4].price = 60
	space[5].buy = false
	space[6].price = 200
	space[7].price = 100
	space[8].buy = false
	space[9].price = 100
	space[10].price = 120
	space[11].buy = false
	space[12].price = 140
	space[13].price = 150
	space[14].price = 140
	space[15].price = 160
	space[16].price = 200
	space[17].price = 180
	space[18].buy = false
	space[19].price = 180
	space[20].price = 200
	space[21].buy = false
	space[22].price = 220
	space[23].buy = false
	space[24].price = 220
	space[25].price = 240
	space[26].price = 200
	space[27].price = 260
	space[28].price = 260
	space[29].price = 150
	space[30].price = 280
	space[31].buy = false
	space[32].price = 300
	space[33].price = 300
	space[34].buy = false
	space[35].price = 320
	space[36].price = 200
	space[37].buy = false
	space[38].price = 350
	space[39].buy = false
	space[40].price = 400


//rent with no house
	space[2].rent[0] = 2
	space[4].rent[0] = 4
	space[6].rent[0] = 25 *2
	space[7].rent[0] = 6
	space[9].rent[0] = 6
	space[10].rent[0] = 8
	space[12].rent[0] = 10
	space[13].rent[0] = 
	space[14].rent[0] = 10
	space[15].rent[0] = 12
	space[16].rent[0] = 25
	space[17].rent[0] = 14
	space[19].rent[0] = 14
	space[20].rent[0] = 16
	space[22].rent[0] = 18
	space[24].rent[0] = 18
	space[25].rent[0] = 20
	space[26].rent[0] = 25
	space[27].rent[0] = 22
	space[28].rent[0] = 22
	space[29].rent[0] = 
	space[30].rent[0] = 24
	space[32].rent[0] = 26
	space[33].rent[0] = 26
	space[35].rent[0] = 28
	space[36].rent[0] = 25
	space[38].rent[0] = 35
	space[40].rent[0] = 50


//rent with one house
	space[2].rent[1] = 10
	space[4].rent[1] = 20
	space[6].rent[1] = 25
	space[7].rent[1] = 30
	space[9].rent[1] = 30
	space[10].rent[1] = 40
	space[12].rent[1] = 50
	space[13].rent[1] = 
	space[14].rent[1] = 50
	space[15].rent[1] = 60
	space[16].rent[1] = 25
	space[17].rent[1] = 70
	space[19].rent[1] = 70
	space[20].rent[1] = 80
	space[22].rent[1] = 90
	space[24].rent[1] = 90
	space[25].rent[1] = 100
	space[26].rent[1] = 25
	space[27].rent[1] = 110
	space[28].rent[1] = 110
	space[29].rent[1] = 
	space[30].rent[1] = 120
	space[32].rent[1] = 130
	space[33].rent[1] = 130
	space[35].rent[1] = 150
	space[36].rent[1] = 25
	space[38].rent[1] = 175
	space[40].rent[1] = 200

//rent with two houses
	space[2].rent[2] = 30
	space[4].rent[2] = 60
	space[6].rent[2] = 25
	space[7].rent[2] = 90
	space[9].rent[2] = 90
	space[10].rent[2] = 100
	space[12].rent[2] = 150
	space[13].rent[2] = 
	space[14].rent[2] = 150
	space[15].rent[2] = 180
	space[16].rent[2] = 25
	space[17].rent[2] = 200
	space[19].rent[2]= 200
	space[20].rent[2] = 220
	space[22].rent[2] = 250
	space[24].rent[2] = 250
	space[25].rent[2] = 300
	space[26].rent[2] = 25
	space[27].rent[2] = 330
	space[28].rent[2] = 330
	space[29].rent[2] = 
	space[30].rent[2] = 360
	space[32].rent[2] = 390
	space[33].rent[2] = 390
	space[35].rent[2] = 450
	space[36].rent[2] = 25
	space[38].rent[2] = 500
	space[40].rent[2] = 600

//rent with three houses
	space[2].rent[3] = 90
	space[4].rent[3] = 180
	space[6].rent[3] = 25
	space[7].rent[3] = 270
	space[9].rent[3] = 270
	space[10].rent[3]= 300
	space[12].rent[3]= 450
	space[13].rent[3]= 
	space[14].rent[3] = 450
	space[15].rent[3] = 500
	space[16].rent[3] = 25
	space[17].rent[3] = 550
	space[19].rent[3] = 550
	space[20].rent[3] = 600
	space[22].rent[3] = 700
	space[24].rent[3] = 700
	space[25].rent[3] = 750
	space[26].rent[3] = 25
	space[27].rent[3] = 800
	space[28].rent[3] = 800
	space[29].rent[3] = 
	space[30].rent[3] = 850
	space[32].rent[3] = 900
	space[33].rent[3] = 900
	space[35].rent[3] = 1000
	space[36].rent[3] = 25
	space[38].rent[3] = 1100
	space[40].rent[3] = 1400

//rent with four houses
	space[2].rent[4] = 160
	space[4].rent[4] = 320
	space[6].rent[4] = 25
	space[7].rent[4] = 400
	space[9].rent[4] = 400
	space[10].rent[4] = 450
	space[12].rent[4] = 625
	space[13].rent[4] = 
	space[14].rent[4]= 625
	space[15].rent[4] = 700
	space[16].rent[4] = 25
	space[17].rent[4] = 750
	space[19].rent[4] = 750
	space[20].rent[4] = 800
	space[22].rent[4] = 875
	space[24].rent[4] = 875
	space[25].rent[4] = 925
	space[26].rent[4] = 25
	space[27].rent[4] = 975
	space[28].rent[4] = 975
	space[29].rent[4] = 
	space[30].rent[4] = 1025
	space[32].rent[4] = 1100
	space[33].rent[4] = 1100
	space[35].rent[4] = 1200
	space[36].rent[4] = 25
	space[38].rent[4] = 1300
	space[40].rent[4] = 1700

//rent with hotel
	space[2].rent[5] = 250
	space[4].rent[5] = 450
	space[6].rent[5] = 25
	space[7].rent[5] = 550
	space[9].rent[5] = 550
	space[10].rent[5] = 600
	space[12].rent[5] = 750
	space[13].rent[5] = 
	space[14].rent[5] = 750
	space[15].rent[5] = 900
	space[16].rent[5] = 25
	space[17].rent[5] = 950
	space[19].rent[5] = 950
	space[20].rent[5] = 1000
	space[22].rent[5] = 1050
	space[24].rent[5] = 1050
	space[25].rent[5] = 1100
	space[26].rent[5] = 25
	space[27].rent[5] = 1150
	space[28].rent[5] = 1150
	space[29].rent[5] = 
	space[30].rent[5] = 1200
	space[32].rent[5] = 1275
	space[33].rent[5] = 1275
	space[35].rent[5] = 1400
	space[36].rent[5] = 25
	space[38].rent[5] = 1500
	space[40].rent[5] = 2000
}

function Animation(){

}
function MouseOverlap(sprite) {
	// Check if the mouse coordinates are within the sprite's bounding box
	return (mouseX >= sprite.position.x - sprite.width / 2 &&
			mouseX <= sprite.position.x + sprite.width / 2 &&
			mouseY >= sprite.position.y - sprite.height / 2 &&
			mouseY <= sprite.position.y + sprite.height / 2)
}

function resetBack(){
	background(100)
}
function Box(){
	tradeBox1 = new Sprite
	tradeBox2 = new Sprite
	tradeBox3 = new Sprite
	tradeBox4 = new Sprite
	tradeBox5 = new Sprite
	tradeBox6 = new Sprite
	tradeBox1.x = 670
	tradeBox1.y = 1000
	tradeBox2.x = 780
	tradeBox2.y = 1000
	tradeBox3.x = 890
	tradeBox3.y = 1000
	tradeBox4.x = 1110
	tradeBox4.y = 1000
	tradeBox5.x = 1220
	tradeBox5.y = 1000
	tradeBox6.x = 1330
	tradeBox6.y = 1000
	tradeBox1.w = 100
	tradeBox1.h = 150
	tradeBox2.w = 100
	tradeBox2.h = 150
	tradeBox3.w = 100
	tradeBox3.h = 150
	tradeBox4.w = 100
	tradeBox4.h = 150
	tradeBox5.w = 100
	tradeBox5.h = 150
	tradeBox6.w = 100
	tradeBox6.h = 150
	tradeBox1.color = 'white'
	tradeBox2.color = 'white'
	tradeBox3.color = 'white'
	tradeBox4.color = 'white'
	tradeBox5.color = 'white'
	tradeBox6.color = 'white'
	
	}