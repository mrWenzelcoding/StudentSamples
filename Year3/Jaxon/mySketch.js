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