let suit = ['c','s','h','d'];
let spades, hearts, diamonds, clubs;
let playerV = [];
let playerCards = [];
let pTotal = 0
let dealerV = [];
let DealerCards = [];
let dTotal = 0
let stand = false
let bust = false
let push = false
let win = false
let lose = false
let blackjack = false
let fd
let bet = 0
let money = 1000
let wc,rc,gc,bc,blc
let b5,b10,b50,b100,b500
let whitechips = [],redchips = [],greenchips = [],bluechips = [],blackchips = []
let wi = 0,ri = 0,gi = 0,bi = 0,bli = 0
let bb
let finishBet = false
let helpB,help1,help2,help3
let t = 0
let et = 0
let helpPg1 = false
let helpPg2 = false
let helpPg3 = false
let t2 = 0

function preload() {
  spades = loadImage('spades.png');
  hearts = loadImage('hearts.png');
  diamonds = loadImage('diamonds.png');
  clubs = loadImage('clubs.png');
	fd = loadImage('facedown.png')
	wc = loadImage('5chip.png')
	rc = loadImage('10chip.png')
	gc = loadImage('50chip.png')
	bc = loadImage('100chip.png')
	blc = loadImage('500chip.png')
	b5 = loadImage('5button.png')
	b10 = loadImage('10button.png')
	b50 = loadImage('50button.png')
	b100 = loadImage('100button.png')
	b500 = loadImage('500button.png')
	bb = loadImage('confirm.png')
	helpB = loadImage('helpButton.png')
	help1 = loadImage('help.png')
	help2 = loadImage('help2.png')
	help3 = loadImage('help3.png')
}

function setup() {
  new Canvas(windowHeight,windowHeight);
	textSize(width/23.33)
	fill(255,255,0)
	stroke(0)
	strokeWeight(2)
	if(finishBet==true){
	for (let i = 0; i < 2; i++) {
	addCard();
		addDCard()
	}
	updateTotal()
	}
}

function draw() {
	if(finishBet==false){
		betting()
	}
	if(finishBet==true){
		deal()
	}
	textAlign(LEFT)
	if(helpPg1==false&&helpPg2==false&&helpPg3==false){
		text("Current Money: $"+ money, width/20,height/15)
		text("Current Bet: $"+bet,width/20,height/8)
	}
}

//player cards
function updateTotal(){
	pTotal = 0
	for(let i = 0; i<playerV.length; i++){
		pTotal += playerV[i].value
	}
}

function addCard() {
  let cardN = round(random(1,13))
	let cardV = cardN
	if(cardN==1&&pTotal+11<=21){
		cardV = 11
	} else if(cardN==11||cardN==12||cardN==13){
		cardV = 10
	} else cardV = cardN
  let cardS = random(suit);
  playerV.push({ value: cardV, suit: cardS });
  let index = playerCards.length;
  let x = width/17.5 * index + width/2.8;
  let y = height/1.45 - (index * height/70);
  let cardSprite = makeCard(x, y, cardN, cardS);
  playerCards.push(cardSprite);
	updateTotal()
}

//dealer cards
function updateDTotal(){
	dTotal = 0
	for(let i = 0; i<dealerV.length; i++){
		dTotal += dealerV[i].value
	}
}

function addDCard() {
  let cardN = round(random(1, 13));
	let cardV = cardN
	if(cardN==1){
		cardV = 11
	} else if(cardN==11||cardN==12||cardN==13){
		cardV = 10
	} else cardV = cardN
  let cardS = random(suit);
  dealerV.push({ value: cardV, suit: cardS });
  let index = DealerCards.length;
  let x = width/17.5 * index + width/2.8;
  let y = height/3.5 + (index * height/70);
  let cardSprite = makeCard(x, y, cardN, cardS);
  DealerCards.push(cardSprite);
	updateDTotal()
	if (index == 0) {
    image(fd, x, y, fd.width * 2, fd.height * 2);
	}
}


function makeCard(x, y, cardN, cardS) {
  let card = new Sprite();
  card.addAni('spade', spades, { frameSize: [71, 100], frames: 13, frameDelay: 60 });
  card.addAni('heart', hearts, { frameSize: [71, 100], frames: 13, frameDelay: 60 });
  card.addAni('diamond', diamonds, { frameSize: [71, 100], frames: 13, frameDelay: 60 });
  card.addAni('club', clubs, { frameSize: [71, 100], frames: 13, frameDelay: 60 });
  card.x = x;
  card.y = y;
  card.w = width/8.235;
  card.h = card.w*1.41;
  card.collider = 'n';

  switch (cardS) {
    case 's':
      card.ani = 'spade';
      break;
    case 'h':
      card.ani = 'heart';
      break;
    case 'd':
      card.ani = 'diamond';
      break;
    case 'c':
      card.ani = 'club';
      break;
  }
  card.ani.stop();
  card.ani.scale = height/453;
  card.ani.frame = cardN - 1;
  return card;
}


function deal(){
	background(70, 180, 90);
  drawingContext.imageSmoothingEnabled = false;
	updateDTotal()
	imageMode(CORNER)
	
	t++
	
	//hitting
	if(mouse.pressed(LEFT)&&t>=30){
		 if(bust==false&&blackjack==false&&stand==false){
  		addCard();
		}
	}
	//standing
	if(mouse.pressed(RIGHT)){
		stand = true
	}
	if(stand==true){
	while(dTotal<17){
		addDCard()
		updateDTotal()
		}
	text("Dealer Total: "+dTotal, width/2, 70)
	}
	text("Player Total: "+pTotal, width/2, height-70)
	for (let i = 0; i < DealerCards.length; i++) {
    let card = DealerCards[i];
    card.draw();
  }

  if (DealerCards.length>0&&stand==false) {
    image(fd, width/2.97, height/5.3, fd.width * (height/453), fd.height * (height/453));
  }
	for(let i = 0; i<playerV.length; i++){
		if(playerV[i].value==11&&pTotal>21){
			playerV[i].value = 1
			updateTotal()
		}
	}
	if(pTotal==21){
		blackjack = true
	}
	if(pTotal>21){
		bust = true
		stand = true
	}
	
//post stand
	if(stand==true){
		if((pTotal>dTotal&&pTotal<=21)||(dTotal>21&&pTotal<=21)){
			if(bet==0&&money==0){
				text("Player Wins +$50",width/1.8,height/2)
				win = true
				result()
			}else
			text("Player Wins +$"+bet,width/1.8,height/2)
			win = true
			result()
		}
		if((pTotal==dTotal&&dTotal<=21&&pTotal<=21)||(dTotal>21&&pTotal>21)){
			text("Push",width/1.8,height/2)
			push = true
			result()
		}
		if((pTotal<dTotal&&dTotal<=21&&dTotal>16)||(dTotal<=21&&bust&&dTotal>16)){
			text("Dealer Wins -$"+bet,width/1.8,height/2)
			lose = true
			result()
		}
	}
}

function result(){
	wi = 0
	ri = 0
	gi = 0
	bi = 0
	bli = 0
	et++
	if(et>=180){
	if(win==true){
		if(bet==0&&money==0){
			money+=50
		}
		money+=bet
		bet = 0
		resetCards()
		finishBet = false
	}
	if(push==true){
		bet = 0
		resetCards()
		finishBet = false
	}
	if(lose==true){
		money-=bet
		bet = 0
		resetCards()
		finishBet = false
	}
}
}

function resetCards() {
  for (let card of playerCards) {
    card.remove();
  }
  for (let card of DealerCards) {
    card.remove();
  }
  playerCards = [];
  playerV = [];
  pTotal = 0;
  DealerCards = [];
  dealerV = [];
  dTotal = 0;
}

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