let t = 0
let et = 0
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