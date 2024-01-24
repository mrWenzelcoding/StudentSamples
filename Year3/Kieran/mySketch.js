//CONTROLS: WASD/arrows (move), E (blade), any click (gun), mouse (aim)

let tilesGroup;
let floor;
let floorImg;
let wall;
let wallImg;
let hole;
let holeImg;

let bullets;
let bulletImg;
let aim = 0;
let bulletDamage;
let bladeDamage;

let target;
let targetImg;
let sensor;

let ammoCount;
let coinCount;
let playerHP;
let playerCap;
let ammoCap;

let enemyCount = 4;
let coralCount = 4;
let potCount = 16;
let dropCount;
let keyStatus;
let critterStatus;
let critterImg;

let player;
let enemy;
let pot;

let ammobox;
let heart;
let healman;

let keyicon;
let coinicon;

let gameover;
let gameoverImg;

//Determines the tileset. Choose from: pink, orange, forest, ice, desert, shell
let setting = 'ice.png';

function preload() {
	//loading all assets before game starts
	
	floorImg = loadImage('assets/floor_' + setting);
	wallImg = loadImage('assets/wall_' + setting);
	holeImg = loadImage('assets/void_' + setting);
	bulletImg = loadImage('assets/bullet.png');
	targetImg = loadImage('assets/target.png');
	
	gameoverImg = loadImage('assets/yadead.png');
	
	//MAP PARTS
	
	//floor
	floor = new Group();
	floor.collider = 'none';
	floor.img = floorImg;
	floor.w = 16;
	floor.h = 16;
	floor.tile = '+';
	
	//wall
	wall = new Group();
	wall.collider = 'static';
	wall.img = wallImg;
	wall.w = 16;
	wall.h = 16;
	wall.tile = '#';
	wall.friction = 0;
	
	//void
	hole = new Group();
	hole.collider = 'none';
	hole.img = holeImg;
	hole.w = 16;
	hole.h = 16;
	hole.tile = '~';
	
	menutile = new Group();
	menutile.collider = 'none';
	menutile.color = 'black';
	menutile.stroke = 0;
	menutile.w = 16;
	menutile.h = 16;
	menutile.tile = '0';
	
	//MAP
	//////////////////////////SET TILESGROUP VARIABLE TO THE TILES/////////////////////////
	tilesGroup = new Tiles(
		[
			'000000000000000000000000',
			'~~~~~~~~~~~~~~~~~~~~~~~~',
			'~~~##################~~~',
			'~~~#++++++++++++++++#~~~',
			'~~~#++++++++++++++++#~~~',
			'~~~#+++####++####+++#~~~',
			'~~~#+++#++++++++#+++#~~~',
			'~~~#+++#++++++++#+++#~~~',
			'~~~#+++#++####++#+++#~~~',
			'~~~#+++#++++++++#+++#~~~',
			'~~~#+++#++++++++#+++#~~~',
			'~~~#++++++++++++++++#~~~',
			'~~~#++++++++++++++++#~~~',
			'~~~##################~~~',
			'~~~~~~~~~~~~~~~~~~~~~~~~',
			'000000000000000000000000',
		],
		floor.w/2,
		floor.h/2,
		16,
		16
	)
	
/////////THIS MAKED AN ARRAY OF ALL OF THE FREE TILES TO POTENTIALLY PLACE A POT OR ENEMY///////////////////////////////
	let freeTile=[];
	let usedTile;
	for(let i =0; i<tilesGroup.length;i++){
		if(tilesGroup[i].tile == '+'){
			freeTile.push(i)
		}
	}
	
	//POT
	pot = new Group();
	for(let i = 0; i < potCount; i++) {
		pot[i] = new Sprite();
		pot[i].w = 16;
		pot[i].h = 16;
		////////////////////////////////////////////////////////////////////////////////////////////////////////
		//used tile picks a random index from the free tiles
		usedTile = int(random(freeTile.length))
		pot[i].x = tilesGroup[freeTile[usedTile]].x
		//same with y
		pot[i].y = tilesGroup[freeTile[usedTile]].y
		//Delete the tile used so it can't be used again
		freeTile.splice(usedTile,1)
		pot[i].health = 1;
		pot[i].addAni('Still','assets/pot_' + setting,{frameSize: [16], frames:1});
		pot[i].addAni('Shatter','assets/pot_broke_' + setting, {frameSize: [16], frames:3, frameDelay:8});
		pot[i].ani = 'Still';
	}
	pot.collider = 'static';
	
	//RANDOM POT ITEMS
	dropCount = int(random(2,potCount-4));
		ammobox = new Group();
	for(let j = 0; j < dropCount; j++){
			ammobox[j] = new Sprite();
			ammobox[j].w = 16;
			ammobox[j].h = 16;
			ammobox.collider = 'none';
			ammobox[j].x = -24
			ammobox[j].y = -40
			ammobox[j].addAni('ammobox','assets/ammobox.png', {frameSize: [16], frames:2, frameDelay: 8});
			ammobox[j].ani = 'ammobox';
		}
		heart = new Group();
	for(let j = 0; j < dropCount; j++){
			heart[j] = new Sprite();
			heart[j].w = 16;
			heart[j].h = 16;
			heart.collider = 'none';
			heart[j].x = -24
			heart[j].y = -24
			heart[j].addAni('heart','assets/heart.png', {frameSize: [16], frames:2, frameDelay: 8});
			heart[j].ani = 'heart';
		}
		healman = new Group();
	for(let j = 0; j < dropCount; j++){
			healman[j] = new Sprite();
			healman[j].w = 16;
			healman[j].h = 16;
			healman.collider = 'none';
			healman[j].x = -24
			healman[j].y = -56
			healman[j].addAni('healman','assets/healman.png', {frameSize: [16], frames:4, frameDelay: 8});
			healman[j].ani = 'healman';
			healman[j].deathtimer = 0;
			healman[j].healtimer = 0;
		}
	
	//ENEMIES
	enemy = new Group();
	enemy.collider = 'dynamic';
	for(let i = 0; i < enemyCount; i++) {
		enemy[i] = new Sprite();
		enemy[i].visible = false;
		enemy[i].w = 16;
		enemy[i].h = 16;
		usedTile = int(random(freeTile.length))
		enemy[i].x = tilesGroup[freeTile[usedTile]].x
		enemy[i].y = tilesGroup[freeTile[usedTile]].y
		freeTile.splice(usedTile,1)
		enemy[i].health = 3;
		enemy[i].addAni('Move','assets/skrawler.png', {frameSize: [16], frames:2, frameDelay:12});
		enemy[i].addAni('Death','assets/death.png', {frameSize:[16], frames:2, frameDelay:8});
		enemy[i].ani = 'Move';
		enemy[i].deathtimer = 0;
	}
	coral = new Group();
	for(let i = 0; i < coralCount; i++) {
		coral[i] = new Sprite();
		coral[i].visible = false;
		coral[i].w = 16;
		coral[i].h = 16;
		usedTile = int(random(freeTile.length))
		coral[i].x = tilesGroup[freeTile[usedTile]].x
		coral[i].y = tilesGroup[freeTile[usedTile]].y
		freeTile.splice(usedTile,1)
		coral[i].health = 5;
		coral[i].addAni('Coral','assets/coraltrap.png', {frameSize: [16], frames:2, frameDelay:12});
		coral[i].addAni('Death','assets/death.png', {frameSize:[16], frames:2, frameDelay:8});
		coral[i].ani = 'Coral';
		coral[i].deathtimer = 0;
	}
		coral.collider = 'static';
	
	//PLAYER
	player = new Sprite(192,192,32,32);
	player.collider = 'dynamic';
	player.addAni('WalkDown','assets/frayman_f.png', {frameSize: [32], frames:4, frameDelay:8});
	player.addAni('IdleDown','assets/frayman_f.png', {frameSize: [32], frames:1});
	player.addAni('ShootDown','assets/frayman_gun_d.png', {frameSize: [32], frames:2, frameDelay:4});
	player.addAni('SwingDown','assets/frayman_sw_d.png', {frameSize: [32], frames: 3, frameDelay:4});
	player.addAni('WalkUp','assets/frayman_b.png', {frameSize: [32], frames:4, frameDelay:8});
	player.addAni('IdleUp','assets/frayman_b.png', {frameSize: [32], frames:1});
	player.addAni('ShootUp','assets/frayman_gun_u.png', {frameSize: [32], frames:2, frameDelay:4});
	player.addAni('SwingUp','assets/frayman_sw_u.png', {frameSize: [32], frames: 3, frameDelay:4});
	player.addAni('WalkSide','assets/frayman_s.png', {frameSize: [32], frames:4, frameDelay:8});
	player.addAni('IdleSide','assets/frayman_s.png', {frameSize: [32], frames:1});
	player.addAni('ShootSide','assets/frayman_gun_s.png', {frameSize: [32], frames:2, frameDelay:4});
	player.addAni('SwingSide','assets/frayman_sw_s.png', {frameSize: [32], frames: 3, frameDelay:4});
	player.ani = 'IdleDown';
	
	//BULLET
	bullets = new Group();
	bullets.collider = 'none';
	bullets.img = bulletImg;
	bullets.rotationLock = true;

	bullets.w = 4;
	bullets.h = 4;
	bullets.vel.x = 3;
	bullets.vel.y = 3;
	
	//TARGET
	target = new Sprite();
	target.img = targetImg;
	target.collider = 'none';
	
	//MISC. AND GUI
	
	gameover = new Sprite(128,128,256,256);
	gameover.collider = 'none';
	gameover.img = gameoverImg;
	gameover.x = 192;
	gameover.y = 128;
	
	keyicon = new Sprite(280,248,0,0)
	keyicon.collider = 'none';
	keyicon.w = 16;
	keyicon.h = 16;
	keyicon.addAni('key','assets/key.png', {frameSize: [16], frames: 4, frameDelay:12});
	
	coinicon = new Sprite(16,248,0,0)
	coinicon.collider = 'none';
	coinicon.w = 16;
	coinicon.h = 16;
	coinicon.addAni('fraycoin','assets/fraycoin.png', {frameSize: [16], frames: 4, frameDelay:12});
	
	ammoCount = new Sprite(336,10,0,0);
	ammoCount.collider = 'none';
	ammoCap = new Sprite(256,10,0,0);
	ammoCap.collider = 'none'
	
	coinCount = new Sprite(40,250,0,0);
	coinCount.collider = 'none';
	
	playerHP = new Sprite(40,10,0,0);
	playerHP.collider = 'none';
	playerCap = new Sprite(104,10,0,0)
	playerCap.collider = 'none';
	
	keyStatus = new Sprite(336,250,0,0);
	keyStatus.collider = 'none';
	
	critterStatus = new Sprite(192,8,0,0);
	critterImg = 'critter_empty.png';}


function setup() {
	imageMode(CENTER)
	//canvas & player setup
	new Canvas(384,384,'pixelated x3');
	angleMode(DEGREES)
	//player
	player.rotationLock = true;
	player.w = 12;
	player.h = 12;
	
	//blade sensor
	sensor = new Sprite(player.x, player.y, 16, 16);
	sensor.collider = "none";
	sensor.overlaps(allSprites);
	sensor.visible = false;
	
	//enemies
	enemy.rotationLock = true;
	enemy.w = 12;
	enemy.h = 12;

	coral.rotationLock = true;
	coral.w = 12;
	coral.h = 12;
	
	//pot
	pot.rotationLock = true;
	pot.w = 12;
	pot.h = 12;
	
	//these dimensions dont get changed for some reason
	ammobox.w = 8;
	ammobox.h = 8;
	heart.w = 8;
	heart.h = 8;
	healman.w = 8;
	healman.h = 8;
	healman.pickedUp = false;
	
	ammoCount.count = 32;
	ammoCount.textSize = 16;
	ammoCount.textColor = 'lightgreen'
	ammoCap.number = 40;
	ammoCap.textColor = 'darkgreen'
	
	keyicon.visible = false;
	
	coinCount.textSize = 16;
	coinCount.textColor = 'white'
	coinCount.coins = 0;
	
	playerHP.textSize = 16;
	playerHP.textColor = 'pink'
	playerHP.count = 20;
	playerCap.number = 20;
	playerCap.textColor = 'purple'
	
	keyStatus.textSize = 16;
	keyStatus.textColor = 'gray'
	keyStatus.text = "LOCKED"
	keyStatus.status = false;
	
	gameover.visible = false;
	
	allSprites.pixelPerfect = true;
}

function draw() {
	playerControls();
	enemyBehaviour();
	potBehaviour();
	potDrops();
	
	critterStatus.img = critterImg;
	
	bulletDamage = 1;
	bladeDamage = 1;
	
	target.x = mouseX
	target.y = mouseY
	
	//game over screen placeholder
	if(playerHP.count <= 0) {
		gameover.visible = true;
	}
	//text colour changing, caps & minimums
	if(ammoCount.count < 0) {
		ammoCount.count = 0;
		ammoCount.textColor = 'lightgreen'
	}
	if(ammoCount.count > ammoCap.number) {
		ammoCount.count = ammoCap.number;
		ammoCount.textColor = 'lightgreen'
	}
	if(ammoCount.count <= 0) {
		ammoCount.textColor = 'darkgreen'
	}
	if(playerHP.count < 0) {
		playerHP.count = 0;
		playerHP.textColor = 'pink'
	}
	if(playerHP.count > playerCap.number) {
		playerHP.count = playerCap.number;
		playerHP.textColor = 'pink'
	}
	if(playerHP.count <= 0) {
		playerHP.textColor = 'purple'
	}
	
	if(keyStatus.status == true) {
		keyStatus.textColor = 'cornsilk'
		keyStatus.text = "UNLOCKED"
		keyicon.visible = true;
	}
	if(keyStatus.status == false) {
		keyStatus.textColor = 'gray'
		keyStatus.text = "LOCKED"
		keyicon.visible = false;
	}
	
	ammoCount.text = "AMMO: " + ammoCount.count
	
	coinCount.text = "x " + coinCount.coins
	
	playerHP.text = "LIFE: " + playerHP.count
	
	playerCap.text = "CAP: " + playerCap.number
	ammoCap.text = "CAP: " + ammoCap.number

}

function playerControls() {
	//controls & animation code
	
	//Checking if player is performing an action
	if(player.ani.name == "SwingSide" || player.ani.name == "SwingUp" || player.ani.name == "SwingDown"||player.ani.name == "ShootSide" || player.ani.name == "ShootUp" || player.ani.name == "ShootDown"){
		action = true;
	} else{
		action = false;
		sensor.x = -400
		sensor.y = -400
	}
	
	//PLAYER MOVEMENT & WALKING ANIMATIONS
if(kb.pressing('left') && action == false){
		player.mirror.x = true;
		player.ani = "WalkSide";
		player.vel.x = -1;
	} else if(kb.pressing('right') && action == false){
		player.mirror.x = false;
		player.ani = "WalkSide";
		player.vel.x = 1;
	} else{
		if(player.vel.x > 0 && action == false) {
			player.mirror.x = false;
			player.ani = "IdleSide";
			player.vel.x = 0;
		}
		if(player.vel.x < 0 && action == false) {
			player.mirror.x = true;
			player.ani = "IdleSide";
			player.vel.x = 0;
		}
	}
	if(kb.pressing('up') && action == false){
		player.mirror.x = false;
		player.ani = "WalkUp";
		player.vel.y = -1;
	} else if(kb.pressing('down') && action == false){
		player.mirror.x = false;
		player.ani = "WalkDown";
		player.vel.y = 1;
	} else if(action == false && player.vel.y < 0){
		player.ani = "IdleUp";
		player.vel.y = 0;
	} else if(action == false && player.vel.y > 0){
		player.ani = "IdleDown";
		player.vel.y = 0;
	}
	
	//BLADE ANIMATIONS
	if(kb.presses('e')) {
		player.vel.x = 0;
		player.vel.y = 0;
		swinging();
		if(player.ani.name != "ShootSide" && aim < 45 && mouseX > player.x){
		player.mirror.x = false;
		player.changeAni(['SwingSide','IdleSide']);
		sensor.x = player.x + 8;
		sensor.y = player.y;
	}
	if(player.ani.name != "ShootSide" && aim < 45 && mouseX < player.x){
		player.mirror.x = true;
		player.changeAni(['SwingSide','IdleSide']);
		sensor.x = player.x - 8;
		sensor.y = player.y;
	}
	if(player.ani.name != "ShootUp" && aim > 45 && mouseY < player.y){
		player.mirror.x = false;
		player.changeAni(['SwingUp','IdleUp']);
		sensor.y = player.y - 8;
		sensor.x = player.x;
	}
	if(player.ani.name != "ShootDown" && aim > 45 && mouseY > player.y){
		player.mirror.x = false;
		player.changeAni(['SwingDown','IdleDown']);
		sensor.y = player.y + 8;
		sensor.x = player.x;
	}
	}
	
	//GUN ANIMATIONS
	if(mouseIsPressed && player.ani.name != "SwingSide" && aim < 45 && mouseX > player.x){
		player.mirror.x = false;
		player.ani = 'ShootSide'
		player.changeAni(['ShootSide','IdleSide']);
	}
	if(mouseIsPressed && player.ani.name != "SwingSide" && aim < 45 && mouseX < player.x){
		player.mirror.x = true;
		player.ani = 'ShootSide'
		player.changeAni(['ShootSide','IdleSide']);
	}
	if(mouseIsPressed && player.ani.name != "SwingSide" && aim > 45 && mouseY < player.y){
		player.mirror.x = false;
		player.ani = 'ShootUp'
		player.changeAni(['ShootUp','IdleUp']);
	}
	if(mouseIsPressed && player.ani.name != "SwingSide" && aim > 45 && mouseY > player.y){
		player.mirror.x = false;
		player.ani = 'ShootDown'
		player.changeAni(['ShootDown','IdleDown']);
	}
}

function enemyBehaviour() {
	//ENEMY THINGS
	
	//SKRAWLER (basic walking enemy)
	//enemy movement
	for(let i = 0; i < enemyCount; i++){
	enemy[i].visible = true;
	
	if(player.x > enemy[i].x) {
		enemy[i].vel.x = 0.25;
	} else {
		enemy[i].vel.x = -0.25;
	}
	
	if(player.y > enemy[i].y) {
		enemy[i].vel.y = 0.25;
	} else {
		enemy[i].vel.y = -0.25;
	}
	
	//enemy taking damage
	for(let j = 0; j < bullets.length; j++) {
		if(bullets[j].overlaps(enemy[i])) {
			bullets[j].remove();
			enemy[i].health -= bulletDamage;
		}
	}
	if(sensor.overlaps(enemy[i])) {
		enemy[i].health -= bladeDamage;
	}
	//knockback after taking hit
	if(sensor.overlaps(enemy[i]) && enemy[i].x > player.x) {
		enemy[i].x += 5
	}
	if(sensor.overlaps(enemy[i]) && enemy[i].x < player.x) {
		enemy[i].x -= 5
	}
	if(sensor.overlaps(enemy[i]) && enemy[i].y > player.y) {
		enemy[i].y += 5
	}
	if(sensor.overlaps(enemy[i]) && enemy[i].y < player.y) {
		enemy[i].y -= 5
	}
		
	if(enemy[i].health <= 0) {
		enemy[i].ani = 'Death';
		enemy[i].collider = 'none';
		enemy[i].deathtimer++;
		enemy[i].vel.x = 0;
		enemy[i].vel.y = 0;
		if(enemy[i].deathtimer == 16) {
			enemy[i].remove();
			enemy[i].health = 1;
			coinCount.coins += 1;
		}
		if(enemy[0].deathtimer == 16) {
			keyStatus.status = true;
		}
		}
		
	//player takes damage from enemy
	if(player.collides(enemy[i])){
		playerHP.count -= 1
	}
	}
	
//CORAL TRAP (basic stationary enemy)
	for(let h = 0; h < coralCount; h++){
		coral[h].visible = true;
		for(let j = 0; j < bullets.length; j++) {
		if(bullets[j].overlaps(coral[h])) {
			bullets[j].remove();
			coral[h].health -= bulletDamage;
		}
	}
	if(sensor.overlaps(coral[h])) {
		coral[h].health -= bladeDamage;
	}
		
	if(coral[h].health <= 0) {
		coral[h].ani = 'Death';
		coral[h].collider = 'none';
		coral[h].deathtimer++;
		if(coral[h].deathtimer == 16) {
			coral[h].remove();
			coral[h].health = 1;
			coinCount.coins += 2;
		}
		}
		if(player.collides(coral[h])){
		playerHP.count -= 3
	}
	}
}

function potBehaviour() {
	//POT THINGS
	for(let i = 0; i < potCount; i++){
		for(let j = 0; j < bullets.length; j++) {
			
		if(bullets[j].overlaps(pot[i])) {
			bullets[j].remove();
			pot[i].health -= bulletDamage;
		}
	}
		
	if(sensor.overlaps(pot[i])) {
		pot[i].health -= bladeDamage;
	}
		if(pot[i].health <= 0) {
		pot[i].ani = 'Shatter';
		pot[i].ani.noLoop();
		pot[i].collider = 'none';
			
		}
	}
	
	//bullet collision with walls
	for(let i = 0; i < bullets.length; i++) {
	if(bullets.length > 0) {
		if(bullets[i].overlaps(wall)) {
			bullets[i].remove();
		}
	}
	}
}

function potDrops() {
	for(let i = 0; i < dropCount; i++){
		//AMMO BOX
		if(pot[i].ani.name == 'Shatter' && i < dropCount/2) {
		ammobox[i].x = pot[i].x
		ammobox[i].y = pot[i].y
		}
		if(player.overlaps(ammobox[i])){
			ammoCount.count += 4
			ammobox[i].remove();
		}
		//HEART
		if(pot[i].ani.name == 'Shatter' && i > dropCount/2) {
		heart[i].x = pot[i].x
		heart[i].y = pot[i].y
		}
		if(player.overlaps(heart[i])) {
			playerHP.count += 4
			heart[i].remove();
		}
		//HEALMAN

		if(pot[i].ani.name == 'Shatter' && i == dropCount/2) {
		healman[i].x = pot[i].x
		healman[i].y = pot[i].y
		}
		if(player.overlaps(healman[i])) {
			healman[i].pickedUp = true;
		}
		if(healman[i].pickedUp == true) {
			critterImg = 'critter_active.png'
			healman[i].x = player.x
			healman[i].y = player.y - 16
			healman[i].deathtimer++;
			healman[i].healtimer++;
		}
		//heals once every 2 seconds.
		if(healman[i].healtimer > 120 && healman[i].pickedUp == true){
			playerHP.count += 1
			healman[i].healtimer = 0
		}
		//healman/all critter-type items will vanish after 30 seconds.
		if(healman[i].deathtimer > 1800){
			healman[i].pickedUp = false;
			healman[i].remove();
			critterImg = 'critter_empty.png'
		}
	}
}

//BULLET FIRING
function mousePressed() {
	ammoCount.count -= 1;
	if(ammoCount.count >= 0){
		ammoCount.textColor = 'lightgreen'
	//bullets
	new bullets.Sprite()
	bullets[bullets.length-1].x = player.x;
	bullets[bullets.length-1].y = player.y;
	bullets[bullets.length-1].tarx = mouseX;
	bullets[bullets.length-1].tary = mouseY;
	
	bullets[bullets.length-1].life = 120;
	
	aim = atan(abs(bullets[bullets.length-1].tary - bullets[bullets.length-1].y)/abs(bullets[bullets.length-1].tarx - bullets[bullets.length-1].x))
	bullets[bullets.length-1].vel.y *= sin(aim)
	if(mouseX < player.x) {
	bullets[bullets.length-1].vel.x *= cos(aim)*-1
	} else {
	bullets[bullets.length-1].vel.x *= cos(aim)
	}
	
	if(mouseY < player.y) {
	bullets[bullets.length-1].vel.y *= sin(aim)*-1
	} else {
	bullets[bullets.length-1].vel.y *= sin(aim)
	}
	
	if(bullets.length-1 <= 0) {
		bullets.length = 1;
	}
	}
}

//BLADE ANGLE FINDER
function swinging() {
	aim = atan(abs(mouseY - player.y)/abs(mouseX - player.x))
}