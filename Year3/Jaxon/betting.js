let helpPg1 = false
let helpPg2 = false
let helpPg3 = false
let t2 = 0

function betting(){
	background(60,170,120)
	drawingContext.imageSmoothingEnabled = false
	imageMode(CENTER)
	et = 0
	let x = width/6
	let x1 = 2*(width/6)
	let x2 = 3*(width/6)
	let x3 = 4*(width/6)
	let x4 = 5*(width/6)
	image(b5,x,height/2,b5.width*(height/272),b5.height*(height/272))
	image(b10,x1,height/2,b5.width*(height/272),b5.height*(height/272))
	image(b50,x2,height/2,b5.width*(height/272),b5.height*(height/272))
	image(b100,x3,height/2,b5.width*(height/272),b5.height*(height/272))
	image(b500,x4,height/2,b5.width*(height/272),b5.height*(height/272))
	image(bb,width/2,height/1.5,bb.width*(height/340),bb.height*(height/340))
	image(helpB,width/1.08,height/15,helpB.width*(height/500),helpB.width*(height/500))
	
	if(kb.pressed('x')){
		helpPg1 = false
		helpPg2 = false
		helpPg3 = false
	}
	
	if(helpPg1&&!helpPg2&&!helpPg3){
		image(help1,width/2,height/2,width,height)
		t2 = 0
		if(mouse.pressed()){
			if(dist(mouse.x,mouse.y,width/1.08,height/1.07)<=30){
			helpPg1 = false
			helpPg2 = true
			helpPg3 = false
			}
		}
	}
	if(!helpPg1&&helpPg2&&!helpPg3){
		image(help2,width/2,height/2,width,height)
		t2++
		if(mouse.pressed()){
			if(dist(mouse.x,mouse.y,width/9.76,height/1.07)<=30&&t2>=15){
			helpPg1 = true
			helpPg2 = false
			helpPg3 = false
			}
			if(dist(mouse.x,mouse.y,width/1.08,height/1.07)<=30&&t2>=15){
			helpPg1 = false
			helpPg2 = false
			helpPg3 = true
			
			}
		}
	}
	if(!helpPg1&&!helpPg2&&helpPg3){
		image(help3,width/2,height/2,width,height)
		t2 = 0
		if(mouse.pressed()){
			if(dist(mouse.x,mouse.y,width/9.76,height/1.07)<=30){
			helpPg1 = false
			helpPg2 = true
			helpPg3 = false
			}
		}
	}
	if (helpPg1||helpPg2||helpPg3) {
        for (let i = 0; i < whitechips.length; i++) {
            whitechips[i].visible = false
        }
        for (let i = 0; i < redchips.length; i++) {
            redchips[i].visible = false
        }
        for (let i = 0; i < greenchips.length; i++) {
            greenchips[i].visible = false
        }
        for (let i = 0; i < bluechips.length; i++) {
            bluechips[i].visible = false
        }
        for (let i = 0; i < blackchips.length; i++) {
            blackchips[i].visible = false
        }
    }else {
			for (let i = 0; i < whitechips.length; i++) {
            whitechips[i].visible = true
        }
        for (let i = 0; i < redchips.length; i++) {
            redchips[i].visible = true
        }
        for (let i = 0; i < greenchips.length; i++) {
            greenchips[i].visible = true
        }
        for (let i = 0; i < bluechips.length; i++) {
            bluechips[i].visible = true
        }
        for (let i = 0; i < blackchips.length; i++) {
            blackchips[i].visible = true
        }
		}
	if(mouse.pressed()){
		if(mouse.x>=width/1.14&&mouse.x<=width/1.03&&mouse.y>=height/52&&mouse.y<=height/8.67){
			helpPg1 = true
			helpPg2 = false
			helpPg3 = false
		}
		//$5
		if(dist(mouse.x,mouse.y,x,height/2)<=b5.width*1.25&&bet+5<=money&&!helpPg1&&!helpPg2&&!helpPg3){
			bet+=5
			whitechips[wi] = new Sprite()
			whitechips[wi].img = wc
			whitechips[wi].scale = height/272
			whitechips[wi].x = x+(random(-(height/130),(height/130)))
			whitechips[wi].y = height/2.55 - wi * (height/42.5)
			whitechips[wi].collider = 'n'
			wi++
		}
		//$10
		if(dist(mouse.x,mouse.y,x1,height/2)<=b5.width*1.25&&bet+10<=money&&!helpPg1&&!helpPg2&&!helpPg3){
			bet+=10
			redchips[ri] = new Sprite()
			redchips[ri].img = rc
			redchips[ri].scale = height/272
			redchips[ri].x = x1+(random(-(height/130),(height/130)))
			redchips[ri].y = height/2.55 - ri * (height/42.5)
			redchips[ri].collider = 'n'
			ri++
		}
		//$50
		if(dist(mouse.x,mouse.y,x2,height/2)<=b5.width*1.25&&bet+50<=money&&!helpPg1&&!helpPg2&&!helpPg3){
			bet+=50
			greenchips[gi] = new Sprite()
			greenchips[gi].img = gc
			greenchips[gi].scale = height/272
			greenchips[gi].x = x2+(random(-(height/130),(height/130)))
			greenchips[gi].y = height/2.55 - gi * (height/42.5)
			greenchips[gi].collider = 'n'
			gi++
		}
		//$100
		if(dist(mouse.x,mouse.y,x3,height/2)<=b5.width*1.25&&bet+100<=money&&!helpPg1&&!helpPg2&&!helpPg3){
			bet+=100
			bluechips[bi] = new Sprite()
			bluechips[bi].img = bc
			bluechips[bi].scale =  height/272
			bluechips[bi].x = x3+(random(-(height/130),(height/130)))
			bluechips[bi].y = height/2.55 - bi * (height/42.5)
			bluechips[bi].collider = 'n'
			bi++
		}
		//$500
		if(dist(mouse.x,mouse.y,x4,height/2)<=b5.width*1.25&&bet+500<=money&&!helpPg1&&!helpPg2&&!helpPg3){
			bet+=500
			blackchips[bli] = new Sprite()
			blackchips[bli].img = blc
			blackchips[bli].scale = height/272
			blackchips[bli].x = x4+(random(-(height/130),(height/130)))
			blackchips[bli].y = height/2.5 - bli * (height/42.5)
			blackchips[bli].collider = 'n'
			bli++
		}
		//confirm
		if(mouse.x>=width/2-bb.width&&mouse.x<=height/1.5-bb.height&&mouse.y>=height/1.5-bb.height&&mouse.y<=height/1.5+bb.height){
			t = 0
for(let i = 0; i<whitechips.length; i++){
		whitechips[i].remove()
	}
	for(let i = 0; i<redchips.length; i++){
		redchips[i].remove()
	}
	for(let i = 0; i<greenchips.length; i++){
		greenchips[i].remove()
	}
	for(let i = 0; i<bluechips.length; i++){
		bluechips[i].remove()
	}
	for(let i = 0; i<blackchips.length; i++){
		blackchips[i].remove()
	}
			win = false
			push = false
			lose = false
			stand = false
			bust = false
			blackjack = false
			finishBet = true
			setup()
		}
	}
}