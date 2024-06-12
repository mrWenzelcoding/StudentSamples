
let player, enemy, bad, numE, spawnE, temp, ground, filler, beam, platformP, platformS, 
platformF, ladder, essence, essenceNum, reload, board, hearts, heart, heartCurrent, start,
startMenu, restart, menu, remenu, restartMenu, secret, funny, silly;

let noClip, hit, hurt = [], stun, lineE, dead, BOX, run, readyR, reloadT, readyI;

let direct, directE = [];

let path, timer, timer2, lines = [];

let map, mapCurrent, mapSelect, a1, a2, a3;

let bossHead, bossHand1, bossHand2, bossBar, bossCam, stage2, bossHeadIdle, 
	bossHeadAttack, handleft, handright, spikes, bossBody, barrier1, barrier2,
	bossDead, endScene, bridge, block, bridgeTimer, bossFight, door, doorimg, end;

let idleP, idleE, ladderImg, grass, rock, floorMain,
    Beams, platPass, platFloat,bk1, bk2, bk3, playerAttack, 
	playerAttackHurt1, playerAttackHurt2, phurt1, phurt2, 
	playerDead, enemyAttack, reloadAn, cool, endscreen;

let smash1x = [1000, 1200, 1400], smash2x = [1400, 1600, 1800], smashy = [600,800],
 smashTimer, HandSpawn, smash, smashStance, smash1Posx, smash2Posx, smashPosy, stanceType,
bossTimer, hand, cycle, bossbos, hand1box, hand2box, flat, fall, spike1, spike2, spike3, 
spike4, spike5, spike6, spike7, spike8, spike9, spike10;

//Fix enemy Animation	

function preload(){
	idleE = loadImage('assets/Game Stuff/enemy.idle.png');
	idleP = loadImage('assets/Game Stuff/player.idle.png');
	ladderImg = loadImage('assets/Game Stuff/ladder.png');
	grass = loadImage('assets/Game Stuff/grass.png');
	rock = loadImage('assets/Game Stuff/rock.png');
	floorMain = loadImage('assets/Game Stuff/floorMain.png');
	Beams = loadImage('assets/Game Stuff/beam.png');
	platPass = loadImage('assets/Game Stuff/platPass.png');
	platFloat = loadImage('assets/Game Stuff/plat.Float.png');
	bk1 = loadImage('assets/Game Stuff/layer1.png');
	bk2 = loadImage('assets/Game Stuff/layer2.png');
	bk3 = loadImage('assets/Game Stuff/layer3.png');
	heart = loadImage('assets/Game Stuff/heart.png');
	playerAttack = loadImage('assets/Game Stuff/PlayerAttack.png');
	phurt1 = loadImage('assets/Game Stuff/player.idle.hurt1.png');
	phurt2 = loadImage('assets/Game Stuff/player.idle.hurt2.png');
	playerAttackHurt1 = loadImage('assets/Game Stuff/player.attack.hurt1.png');
	playerAttackHurt2 = loadImage('assets/Game Stuff/player.attack.hurt2.png');
	playerDead = loadImage('assets/Game Stuff/player.dead.png');
	enemyAttack = loadImage('assets/Game Stuff/enemy.attack.png');
	reloadAn = loadImage('assets/Game Stuff/reload.png');
	bossHeadAttack = loadImage('assets/Game Stuff/bosshead.attack.png');
	bossHeadIdle = loadImage('assets/Game Stuff/bosshead.idle.png');
	handleft = loadImage('assets/Game Stuff/HandLeft.png');
	handright = loadImage('assets/Game Stuff/HandRight.png');
	bossBody = loadImage('assets/Game Stuff/bossbody.png');
	spikes = loadImage('assets/Game Stuff/spike.png');
	doorimg = loadImage('assets/Game Stuff/door.png');
	endscreen = loadImage('assets/Game Stuff/endscreen.png');
	menu = loadImage('assets/Game Stuff/StartMenu.png');
	remenu = loadImage('assets/Game Stuff/restart.png');
	funny = loadImage('assets/Game Stuff/WIN_20211210_21_07_59_Pro.jpg');

}

function setup() {
	new Canvas(900, 600, 'fullscreen');
	world.gravity.y = 10;
	mapSelect = 0;
	i = 0;
	timer = 0;
	reloadT = 0;
	run = true;
	start = false;
	restart = false;
	silly = false;
	stun = false;
	lineE = false;
	BOX = false;
	readyR = false;
	stage2 = false;
	flat = false;
	end = false;
	numE = 1;
	direct = 1;
	smashTimer = 0;
	bossTimer = true;
	bossTimer = 0;
	bossCam = false;
	bossFight = false;
	bridgeTimer = 0;
	cycle = true;
	smash = false;
	fall = false;
	smashStance = false;
	HandSpawn = false;
	smashStance = false;
	dead = false;
	bossDead = false;
	endScene = false;
	frameRate = 30;

	//Player 

	player = new Sprite();
	player.collider = 'dyanmic';
	player.color = 'white';
	player.bounciness = 0;
	player.x = 150;
	player.y = 50;
	player.w = 50;
	player.h = 75;
	player.health = 5;
	player.layer = 3;
	player.rotationLock = true;

	//Ani Player

	player.addAni('playerAttack', playerAttack, {
		frameSize: [130, 75],
		frames: 3,
		frameDelay: 6
	});

	player.addAni('playerAttackHurt1', playerAttackHurt1, {
		frameSize: [130, 75],
		frames: 3,
		frameDelay: 6
	});

	player.addAni('playerAttackHurt2', playerAttackHurt2, {
		frameSize: [130, 75],
		frames: 3,
		frameDelay: 6
	});

	//Hearts

	hearts = new Group();
	hearts.img = heart;
	hearts.collider = "none";
	hearts.layer = 4;
	hearts.h = 50;
	hearts.w = 50;
	

	for(let i = 0; i < player.health; i++){
		heartCurrent = new hearts.Sprite();
		heartCurrent.x = 100 + 55 * i;
		heartCurrent.y = 100;
	}

	//Reload
	
	reload = new Sprite();
	reload.collider = 'none';
	reload.d = 20;
	reload.color = 'grey';

	reload.addAni('reloadAn', reloadAn, {
		frameSize: [20, 20],
		frames: 9,
		frameDelay: 6
	});

	//Hitbox

	hit = new Sprite();
	hit.collider = 'none';
	hit.x = player.x + player.w + 10;
	hit.y = player.y;
	hit.w = 40;
	hit.h = 50;
	hit.strokeColor = color(0, 0, 0, 0);
	hit.layer = 4;
	hit.colour = color(0, 0, 0, 0);

	//enemy

	bad = new Group();
	bad.img = idleE;
	bad.collider = 'dynamic';
	bad.color = 'red';
	bad.bouniness = 0;
	bad.w = 50;
	bad.h = 75
	bad.layer = 0;
	bad.rotationLock = true;
	bad.health = () => 3;
	
	bad.addAni('enemyAttack', enemyAttack, {
		frameSize: [130, 75],
		frames: 3,
		frameDelay: 6
	});

	while(bad.length < numE){
		enemy = new bad.Sprite();
		enemy.x =  1247.5699908447268;
		enemy.y = 276.5746770833333; 
	}
	
	//Boss Head

	bossHead = new Sprite();
	bossHead.img = bossHeadIdle;
	bossHead.collider = 'none';
	bossHead.color = 'grey';
	bossHead.bounciness = 0;
	bossHead.health = 5;
	bossHead.x = -1000;
	bossHead.y = -1000;
	bossHead.layer = 0;
	

	//Boss hands
	
	bossHand1 = new Sprite();
	bossHand1.collider = 'static';
	bossHand1.img = handleft;
	bossHand1.color = 'grey';
	bossHand1.bounciness = 0;
	bossHand1.x = -1000;
	bossHand1.y = -1000;
	bossHand1.layer = 3;
	

	bossHand2 = new Sprite();
	bossHand2.collider = 'static';
	bossHand2.img = handright;
	bossHand2.color = 'grey';
	bossHand2.bounciness = 0;
	bossHand2.x = -1000;
	bossHand2.y = -1000;
	bossHand2.layer = 3;


	//Hand Barrier

	barrier1 = new Sprite();
	barrier1.collider = 'static';
	barrier1.x = -1000;
	barrier1.y = -1000;
	barrier1.w = 260;
	barrier1.h = 260;
	barrier1.bounciness = 0;
	barrier1.colour = color(0, 0, 0, 0);
	barrier1.stroke = color(0, 0, 0, 0);

	barrier2 = new Sprite();
	barrier2.collider = 'static';
	barrier2.x = -1000;
	barrier2.y = -1000;
	barrier2.w = 250;
	barrier2.h = 260;
	barrier2.bounciness = 0;
	barrier2.colour = color(0, 0, 0, 0);
	barrier2.stroke = color(0, 0, 0, 0);

	//Boss Hitbox

	bossbox = new Sprite();
	bossbox.collider = 'none';
	bossbox.color = color(0, 0, 0, 0);
	bossbox.strokeColor = color(0, 0, 0, 0)
	bossbox.bounciness = 0;
	bossbox.layer = 0;
	bossbox.rotationLock = true;

	//Boss health bar

	bossBar = new Sprite();
	bossBar.collider = 'none';
	bossBar.color = 'brown';
	bossBar.x = -1000;
	bossBar.y = -1000;
	bossBar.layer = 3;
	bossBar.health = 20;
	bossBar.rotationLock = true;

	//Bridge

	block = new Group();
	block.collider = 'static';
	block.bounciness = 0;
	block.friction = 8;
	block.w = 100;
	block.h = 20; 

	//Exit

	door = new Sprite();
	door.img = doorimg;
	door.collider = 'none'
	door.layer = 0;
	door.x = -200;
	door.y = -200;
	door.w = 120
	door.h = 150;

	//Secret

	secret = new Sprite();
	secret.collider = 'none'
	secret.colour = color(0, 0, 0, 0);
	secret.stroke = color(0, 0, 0, 0);
	secret.layer = 0;
	secret.x = -100;
	secret.y = -100;
	secret.w = 35;
	secret.h = 35;
	secret.tile = 's';

	//EndScreen

	cool = new Sprite();
	cool.collider = 'none'
	cool.img = endscreen;
	cool.layer = 5;
	cool.colour = 'black';
	cool.x = -1000;
	cool.y = -1000;

	//StartScreen

	startMenu = new Sprite();
	startMenu.collider = 'none'
	startMenu.img = menu;
	startMenu.layer = 5;
	startMenu.x = camera.x;
	startMenu.y = camera.y;

	//RestartScreen

	restartMenu = new Sprite();
	restartMenu.collider = 'none'
	restartMenu.img = remenu;
	restartMenu.layer = 5;
	restartMenu.x = -1000;
	restartMenu.y = -1000;


	//Stalagtites 
	
	spike1 = new Sprite();
	spike1.collider = 'none';
	spike1.img = spikes;
	spike1.x = -100;
	spike1.y = 3000;
	spike1.w = 50;
	spike1.h = 75;
	spike1.color = 'gray';
	spike1.bounciness = 0;
	spike1.layer = 4;
	spike1.rotationLock = true;
	
	spike2 = new Sprite();
	spike2.collider = 'none';
	spike2.img = spikes;
	spike2.x = -100;
	spike2.y = 3000;
	spike2.w = 50;
	spike2.h = 75;
	spike2.color = 'gray';
	spike2.bounciness = 0;
	spike2.layer = 4;
	spike2.rotationLock = true;
	
	spike3 = new Sprite();
	spike3.collider = 'none';
	spike3.img = spikes;
	spike3.x = -100;
	spike3.y = 3000;
	spike3.w = 50;
	spike3.h = 75;
	spike3.color = 'gray';
	spike3.bounciness = 0;
	spike3.layer = 4;
	spike3.rotationLock = true;

	spike4 = new Sprite();
	spike4.collider = 'none';
	spike4.img = spikes;
	spike4.x = -100;
	spike4.y = 3000;
	spike4.w = 50;
	spike4.h = 75;
	spike4.color = 'gray';
	spike4.bounciness = 0;
	spike4.layer = 4;
	spike4.rotationLock = true;

	spike5 = new Sprite();
	spike5.collider = 'none';
	spike5.img = spikes;
	spike5.x = -100;
	spike5.y = 3000;
	spike5.w = 50;
	spike5.h = 75;
	spike5.color = 'gray';
	spike5.bounciness = 0;
	spike5.layer = 4;
	spike5.rotationLock = true;

	spike6 = new Sprite();
	spike6.collider = 'none';
	spike6.img = spikes;
	spike6.x = -100;
	spike6.y = 3000;
	spike6.w = 50;
	spike6.h = 75;
	spike6.color = 'gray';
	spike6.bounciness = 0;
	spike6.layer = 4;
	spike6.rotationLock = true;

	spike7 = new Sprite();
	spike7.collider = 'none';
	spike7.img = spikes;
	spike7.x = -100;
	spike7.y = 3000;
	spike7.w = 50;
	spike7.h = 75;
	spike7.color = 'gray';
	spike7.bounciness = 0;
	spike7.layer = 4;
	spike7.rotationLock = true;

	spike8 = new Sprite();
	spike8.collider = 'none';
	spike8.img = spikes;
	spike8.x = -100;
	spike8.y = 3000;
	spike8.w = 50;
	spike8.h = 75;
	spike8.color = 'gray';
	spike8.bounciness = 0;
	spike8.layer = 4;
	spike8.rotationLock = true;

	spike9 = new Sprite();
	spike9.collider = 'none';
	spike9.img = spikes;
	spike9.x = -100;
	spike9.y = 3000;
	spike9.w = 50;
	spike9.h = 75;
	spike9.color = 'gray';
	spike9.bounciness = 0;
	spike9.layer = 4;
	spike9.rotationLock = true;

	spike10 = new Sprite();
	spike10.collider = 'none';
	spike10.img = spikes;
	spike10.x = -100;
	spike10.y = 3000;
	spike10.w = 50;
	spike10.h = 75;
	spike10.color = 'gray';
	spike10.bounciness = 0;
	spike10.layer = 4;
	spike10.rotationLock = true;
	

	

   //Seeking

   for(let i = 0; i < numE; i++){
   lines = new Sprite([[player.x, player.y], [bad[i].x, bad[i].y]]);
   lines.overlaps(player);
   lines.overlaps(bad[i]);
   lines.colour = color(0, 0, 0, 0);
   }

	//Hurtbox

	hurt = new Group();
	hurt.collider = 'none';
	hurt.w = 60;
	hurt.h = 100;
	hurt.strokeColor = color(0, 0, 0, 0);
	hurt.layer = 4;
	hurt.colour = color(0, 0, 0, 0);

	player.ani = idleP;
	enemy.ani = idleE;



	//Mapping

	ground = new Group();
	ground.img = grass;
	ground.collider = 'static';
	ground.color = 'green';
	ground.bounciness = 0.01;
	ground.friction = 8;
	ground.w = 100;
	ground.h = 75;
	ground.layer = 2;
	ground.tile = '=';

	essence = new Group();
	essence.layer = 0;
	essence.collider = 'none';
	essence.color = color(250 , 250, 250, 50);
	essence.strokeColor = color(200, 200, 200, 150)
	essence.bounciness = 0;
	essence.w = 35;
	essence.h = 35;
	essence.tile = '@';
	player.overlaps(essence, collectEssence);

	spawnE = new Group();
	spawnE.collider = 'static';
	spawnE.color = 'brown';
	spawnE.bounciness = 0;
	spawnE.w = 50;
	spawnE.h = 35;
	spawnE.tile = '0';

	filler = new Group();
	filler.img = rock;
	filler.collider = 'static';
    filler.color = 'grey';
	filler.bounciness = 0;
	filler.w = 100.5;
	filler.h = 75;
	filler.layer = 2;
	filler.tile = '|';

	beam = new Group();
	beam.img = Beams;
	beam.collider = 'none';
    beam.color = '#54270d';
	beam.bounciness = 0;
	beam.w = 20;
	beam.h = 130;
	beam.tile = '!';
	beam.layer = 0; 

	ladder = new Group();
	ladder.img = ladderImg;
	ladder.collider = 'none';
    ladder.color = 'hazel';
	ladder.bounciness = 0;
	ladder.scale = 1.5;
	ladder.w = 40;
	ladder.h = 100;
	ladder.tile = '[';
	ladder.layer = 0; 

	platformF = new Group();
	platformF.img = platFloat;
	platformF.collider = 'static';
    platformF.color = 'limegreen';
	platformF.bounciness = 0.01;
	platformF.friction = 8;
	platformF.w = 100;
	platformF.h = 30;
	platformF.layer = 1;
	platformF.tile = '-';

	platformS = new Group();
	platformS.img = floorMain;
	platformS.collider = 'static';
    platformS.color = '#7d4829';
	platformS.bounciness = 0.01;
	platformS.friction = 8;
	platformS.w = 100;
	platformS.h = 25;
	platformS.layer = 1;
	platformS.tile = '_';

	platformP = new Group();
	platformP.img = platPass;
	platformP.collider = 'static';
    platformP.color = '#9e8d65';
	platformP.bounciness = 0.01;
	platformP.friction = 8;
	platformP.w = 100;
	platformP.h = 20;
	platformP.layer = 1;
	platformP.tile = '~';


	// Width 60  | Height 20
 
	map = [

		[                                                                
			'|  |||||||||||||||||||||||||||||||||||||||||||||||||||||||||',
			'|    !     !       !    !      |||||||||||||||||||||||||||||',
			'|    !     !       !    !       ||||||||||||||||||||||||||||',
			'|    !     !   @   !    !       ||||||||||||||||||||||   |||',
			'|________________________       |||||||||||||||||||       ||',
			'|                               ||||||||||                 |',
			'|                               ||||||                      ',
			'|            =                  |||||                       ',
			'|           =|=    ==       ====||||                 ---  ==',
			'|~~~~___====|||====||=======|||||||            ---        ||',
			'|       |||||||||    |||||||||||||| @                      |',
			'|       ||                 ||||||||______~~~~              |',
			'|       ||                    |||||   !    [   ____        |',
			'|       ||~~~~~~___======       |||   !    [   !  !        |',
			'|       ||    [    ||||||       |||   !    [ ~~~~~~~~      |',
			'|       |     [    |||| !       |||   !    [ !      !      |',
			'|       !     [  @ |||  !        !    !   ______________   |',
			'|=      !     [   =|||  !        !    !   !  !      !  !  =|',
			'||================||||====================================||',
			'||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||',

		]
	
	,
		[
			'||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||',
			'|||||                                           ||||||||||||',
			'|||                                                |||||||||',
			'||              --                                        ||',
			'|                    --   ---   ---                     @s |',
			'|                                   -----         =========|',
			'                 --                         --   =||||||||||',
			'                                                   ||||||||||',
			'              --                                   |||||||||',
			'=====              --     @                          |||||||',
			'|||||===   --          ======                            |||',
			'||||||||=             =||||||=                             |',
			'|||||||||    --       ||||||||                    =====     ',
			'|||||||||             ||||||||         ________  =|||||==   ',
			'|||||||||        ~~~~~||||||||         !      !  ||||||||===',
			'|||||||||    --  !   [||  ||||      ~~~~~~    !  ||| |||||||',
			'|||||||||        !   [|    |||      ![ ! !    !  ||    |||||',
			'|||||||||      _____ [!      !      ![ ! _____!  !      ||||',
			'|||||||||=     !   ! [!      !      ![ ! !   !!  !   @    ||',
			'||||||||||=================================================|',

		]

	,
		[ 
			'||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||',
			'|||||||||||||||||   |||||||||||||                |||||||||||',
			'|||   ||||||||||     |||||||||||                  ||||||||||',
			'||      ||||||         !   !   !     @             |||||||||',
			'|         ||||         !   !   !    ===                |||||',
			'|  @                ~~~____________=|||===                ||',
			'| ___                [    !        |||||||=~~___            ',
			'| ! ! ____           [    !        ||||    [ !    ___       ',
			'| ! ! !  !           __~~~==       |||     [ !    ! !       ',
			'|============           [ ||_____~~||      [ !    ! !  =====',
			'|||||||||||||=          [ ||        !      [ !  __=====|||||',
			'        ||||||=         [ ||        !      [ !     |||||||||',
			'            |||===      [ ||     __==========~~    !    !|||',
			'            ||||||_____ [ ||  @    |||||||||  [    !    !  |',
			'=======~~~~~|||||  !  ! [ || ~~~~  ||||||     [    !    !@ |',
			'|||||||       !    _______|| ! [!  ||||       [  ==========|',
			'|||||||=      !    !   !  || ! [!   ||        [  |||||||||||',
			'||||||||==================|| ! [!   !    _______ |||||||||||',
			'|||||||||||||||||||||||||||| ! [!   !    !  @  ! |||||||||||',
			'||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||',
			
		]

	,
		[
			'|||||||||||||||||||||||||||||||||||||||',
			'                               ||||||||',
			'                               ||||||||',
			'=                          ||||||||||||',
			'|                          ||||||||||||',
			'|                          ||||||||||||',
			'|                          ||||||||||||',
			'|                          ||||||||||||',
			'|                          ||||||||||||',
			'|                           |||||||||||',
			'|                           |||||||||||',
			'|                           |||||||||||',
			'|                            ||||||||||',
			'|                              ||||||||',
			'|                              ||||||||',
			'|==_______=========_______=====||||||||',
			'|||   !   |||||||||   !   |||||||||||||',
			'|||   !    |||||||    !    ||||||||||||',
			'|||   !     ||||||    !      ||||||||||',
			'|||   !     |||||     !       |||||||||',
			'|||   !      ||||     !       |||||||||',
			'|||   !      |||      !       |||||||||',
			'|||   !      |||      !       |||||||||',
			'|||   !      |||      !       |||||||||',
			'|||   !      |||      !       |||||||||',
			'|||   !      |||      !       |||||||||',
			'|||   !      |||      !       |||||||||',
			'|||   !      |||      !       |||||||||',
    
		]
	];

	mapCurrent = new Tiles(map[0],
		ground.w/2,
		ground.h/2,
		100,
		75
	)
	
}

function collectEssence(player, essence){
	if(player.health < 5){
	essence.remove();
	player.img = idleP;
	player.health = 5;

	for(let i = 0; i < player.health; i++){
		heartCurrent = new hearts.Sprite();
		heartCurrent.x = 100 + 55 * i;
		heartCurrent.y = 100;
	}
}
}


function reloadHealth(){
	player.health--;
	hearts.removeAll();

	for(let i = 0; i < player.health; i++){
		heartCurrent = new hearts.Sprite();
		heartCurrent.x = 100 + 55 * i;
		heartCurrent.y = 100;
	}

	if(player.health > 3){
				player.img = idleP;
	} else if(player.health == 2 || player.health == 3){
				player.img = phurt1;
	} else if(player.health == 1){
				player.img = phurt2;
	
	}
}

function draw() {

	if(kb.presses('enter')){
		start = true;
	}

	if(start == true){
		if(silly == true){
			background(funny);
		} else {
			background(bk1); 
			background(bk2);
			background(bk3);
		}

	startMenu.x = -1000;
	startMenu.y = -1000;

	


	//tutorial
if(mapSelect == 0){
	textSize(20);
	fill('white');
	strokeWeight(20);
	stroke('black');
	if(player.x > 0 && player.x < 580 && player.y < 300){
	text('A, D to move', 800 - camera.x,  500 - camera.y);
	}

	if(player.x > 600 && player.x < 1100 && player.y < 300){
	text('Left mouse to attack', 1150 - camera.x,  500 - camera.y);
	}

	if(player.x > 1150 && player.x < 1900 && player.y < 300){
	text('Essence will mend your bones', 1850 - camera.x,  500 - camera.y);
	}

	if(player.x > 1650 && player.x < 2500 && player.y > 300 && player.y < 800){
		text('Spacebar to jump', 2365 - camera.x,  750 - camera.y);
	}

	if(player.x > 0 && player.x < 700 && player.y > 300 && player.y < 800){
		text('You can fall through these platforms', 600 - camera.x,  850 - camera.y);
		text('Press S to fall', 700 - camera.x,  900 - camera.y);
	}

	if(player.x > 900 && player.x < 1600 && player.y > 800){
		text('Hold W on ladders to accend', 1500 - camera.x,  1500 - camera.y);
	}

	if(player.x > 2300 && player.y > 1000){
		textSize(30);
		text('NOW SURVIVE', 3100 - camera.x,  1500 - camera.y);
	}
	strokeWeight(1);
}


	//Swap Maps

	if(player.x > 6000){
		i ++;
		mapCurrent.removeAll();
		mapCurrent = new Tiles(map[i],
			ground.w/2,
			ground.h/2,
			100,
			75
		)
		bad.removeAll();
		hurt.removeAll();
		run = true;
		mapSelect ++;
	
		
		//Spawn position +
		if(mapSelect == 1){
			player.x = 30;
			player.y = 650;
		} else if(mapSelect == 2){
			player.x = 10;
			player.y = 1011;
		} else if(mapSelect == 3){
			player.x = 20;
			player.y = 170;
		}
	}


		if(player.x < 0){
			i --;
			mapCurrent.removeAll();
			mapCurrent = new Tiles(map[i],
				ground.w/2,
				ground.h/2,
				100,
				75
			)
			bad.removeAll();
			hurt.removeAll();
			run = true;
			mapSelect --;

	


		//Spawn Position -
		if(mapSelect == 0){
			player.x = 6000;
			player.y = 560;
		} else if(mapSelect == 1){
			player.x = 6000;
		} else if(mapSelect == 2){
			player.x = 6000;
		} else if(mapSelect == 3){
			player.x = 6000;
		}
	}

	

	if(mapSelect == 0 && run == true){
		numE = 11;
		while(bad.length < numE){
			enemy = new bad.Sprite(2137.569990844727, 276.5746770833333);
			enemy = new bad.Sprite(2937.569990844727, 556.5746770833333);
			enemy = new bad.Sprite(297.56999084472676, 1306.5746770833334);
			enemy = new bad.Sprite(1767.5699908447268, 946.5746770833335);
			enemy = new bad.Sprite(2317.569990844727, 1306.5746770833337);
			enemy = new bad.Sprite(3007.569990844727, 1306.5746770833337);
			enemy = new bad.Sprite(5107.569990844726, 1166.5746770833337);
			enemy = new bad.Sprite(4787.569990844726, 1016.5746770833337);
			enemy = new bad.Sprite(3747.569990844726, 806.5746770833335);
			enemy = new bad.Sprite(5037.569990844726, 876.5746770833335);
			
			for(let i = 0; i < numE; i++){
				let hurtbox = new hurt.Sprite();
				hurtbox.x = bad[i].x + bad[i].w + 25;
				hurtbox.y = bad[i].y; 

				bad[i].addAni('enemyAttack', enemyAttack, {
					frameSize: [130, 75],
					frames: 3,
					frameDelay: 6
				});
				bad.ani = idleE;

			}
		}
		run = false;
	}

	if(mapSelect == 1 && run == true){
		numE = 10;
		while(bad.length < numE){
			enemy = new bad.Sprite(810, 696.700000000001);
			enemy = new bad.Sprite(1700, 206.70000000000084);
			enemy = new bad.Sprite(2080, 1036.7000000000007);
			enemy = new bad.Sprite(2290, 696.700000000001);
			enemy = new bad.Sprite(2690, 1376.7000000000007);
			enemy = new bad.Sprite(3900, 356.7000000000006);
			enemy = new bad.Sprite(4120, 1086.7000000000007);
			enemy = new bad.Sprite(4520, 926.7000000000005);
			enemy = new bad.Sprite(5340, 1356.7000000000007);
			enemy = new bad.Sprite(5530, 296.7000000000006);
			
			for(let i = 0; i < numE; i++){
				let hurtbox = new hurt.Sprite();
				hurtbox.x = bad[i].x + bad[i].w + 25;
				hurtbox.y = bad[i].y; 
			}
		}
		run = false;
	}

	if(mapSelect == 2 && run == true){
		numE = 12;
		while(bad.length < numE){
			enemy = new bad.Sprite(345.6043345541924, 431.78047666662974);
			enemy = new bad.Sprite(805.6043345541923, 501.7804766666297);
			enemy = new bad.Sprite(1615.6043345541925, 1231.78047666663);
			enemy = new bad.Sprite(2325.604334554193, 1101.78047666663);
			enemy = new bad.Sprite(2474.67174301775, 343.9165595812181);
			enemy = new bad.Sprite(2994.67174301775, 353.9165595812181);
			enemy = new bad.Sprite(3014.671743017752, 1033.916559581218);
			enemy = new bad.Sprite(3854.671743017752,853.916559581218);
			enemy = new bad.Sprite(3944.671743017752, 1383.916559581218);
			enemy = new bad.Sprite(3974.671743017752, 333.9165595812181);
			enemy = new bad.Sprite(4414.671743017752, 1253.916559581218);
			enemy = new bad.Sprite(4744.671743017752, 1253.916559581218);
			
			for(let i = 0; i < numE; i++){
				let hurtbox = new hurt.Sprite();
				hurtbox.x = bad[i].x + bad[i].w + 25;
				hurtbox.y = bad[i].y; 
			}
		}
		run = false;
	}

	if(mapSelect == 3 && run == true){
		door.x = 3000;
		door.y = 1050;
		numE = 0;
		for(let i = 0; i < numE; i++){
			let hurtbox = new hurt.Sprite();
			hurtbox.x = bad[i].x + bad[i].w + 25;
			hurtbox.y = bad[i].y; 
		}

		if(player.x > 1400){
			resizeCanvas(1500, 1500);
			bossCam = true;
			bossFight = true;
			run = false;
		}

	}




	//Box toggle

	if(kb.presses('/') && BOX == false){
		BOX = true;
	} else if(kb.presses('/') && BOX == true){
		BOX = false;
	}

	if(BOX == false){
		hit.strokeColor = color(0, 0, 0, 0);
		player.debug = false;
		beam.debug = false;
		ladder.debug = false;
		filler.debug = false;
		ground.debug = false;
		platformF.debug = false;
		platformS.debug = false;
		platformP.debug = false;
		heartCurrent.debug = false;
		bad.debug = false;
		barrier1.debug = false;
		barrier2.debug = false;
		for(let i = 0; i < numE; i++){
		hurt[i].strokeColor = color(0, 0, 0, 0);
		}

	} else {
		hit.strokeColor = 'green';
		player.debug = true;
		beam.debug = true;
		ladder.debug = true;
		filler.debug = true;
		ground.debug = true;
		platformF.debug = true;
		platformS.debug = true;
		platformP.debug = true;
		heartCurrent.debug = true;
		bad.debug = true;
		barrier1.debug = true;
		barrier2.debug = true;
		for(let i = 0; i < numE; i++){
		hurt[i].strokeColor = 'red';
		}
	}

	//Player Ani Attack 

	if(mouse.presses() && readyR == false){
		player.ani.frame = 0;
		if(player.health > 3){
			player.changeAni(['playerAttack', idleP]);
		} else if(player.health == 2 || player.health == 3){
			player.changeAni(['playerAttackHurt1', phurt1]);
		} else if(player.health == 1){
			player.changeAni(['playerAttackHurt2', phurt2]);
		}
		
		player.ani.loop();
	}

	//Hitbox

	if(direct === 1){
		hit.x = player.x + player.w - 5;
 }

 	if(direct === -1){
		hit.x = player.x - player.w + 5;
	}

	hit.y = player.y;

	//Hurtbox

	for(let i = 0; i < numE; i++){
	if(directE[i] === 1){
		hurt[i].x = bad[i].x + bad[i].w;
	}

	if(directE[i] === -1){
		hurt[i].x = bad[i].x - bad[i].w;
	}

	hurt[i].y = bad[i].y;

	//attack

	for(let i = 0; i < numE; i++){

	if(mouse.presses() && hit.overlapping(bad[i]) && dead != true && readyR == false){
		reload.ani.frame = 0;

		if(direct == 1){
		
		bad[i].x += 20;
		bad[i].vel.x = 15;
		bad[i].vel.y = 5;
		bad[i].health --;
		readyR = true;
		}

		if(direct == -1){ 
			
			bad[i].x -= 20;
			bad[i].vel.x = 15;
			bad[i].vel.y = 5;
			bad[i].health --;
			readyR = true;
			}
			
	} 
}
	
	if(mouse.presses() && readyR == false){
			readyR = true;
			reload.ani.frame = 0;
		}


	if(bad[i].health <= 0){
		bad[i].remove();
		hurt[i].remove();
		numE--;
	}
}

	//Boss Attack

	if(mouse.presses() && hit.overlapping(bossHand1) && dead != true && readyR == false ||
	mouse.presses() && hit.overlapping(bossHand2) && dead != true && readyR == false ){
		reload.ani.frame = 0;
		readyR = true;
		bossBar.health --;
	}

	if(mouse.presses() && readyR == false){
		readyR = true;
		reload.ani.frame = 0;
	}

	if(mouse.presses() && readyR == false){
		player.ani.frame = 0;
		if(player.health > 3){
			player.changeAni(['playerAttack', idleP]);
		} else if(player.health == 2 || player.health == 3){
			player.changeAni(['playerAttackHurt1', phurt1]);
		} else if(player.health == 1){
			player.changeAni(['playerAttackHurt2', phurt2]);
		}
		
		player.ani.loop();
	}

	//Reload
	
	if(readyR == true){
		reload.x = player.x;
		reload.y = player.y - 60;
		reloadT += 1;
		reload.d += 0.4;
		if(reloadT >= 50){
			readyR = false;
		}
	} else {
		reload.x = -10;
		reload.y = 0;
		reloadT = 0;
		reload.d = 0
	}

	//hurt

	for(let i = 0; i < numE; i++){
		if(hurt[i].overlapping(player) && dead != true){
			if(hurt[i].overlaps(player)){
				frameCount = 0;	
			}

			if(hurt[i].overlapping(player) && frameCount > 20 && frameCount < 30){
				if(BOX == true){
				hurt[i].colour = "green"
				}
			} else {
				hurt[i].colour = color(0, 0, 0, 0);
			}
			
			if( frameCount === 45){
				bad[i].ani.frame = 0;
				bad[i].changeAni(['enemyAttack', idleE]);


				if(directE[i] == 1){
					player.x += 20;
					player.vel.x = 10;
					player.vel.y = 5;
					hearts.removeAll();
					player.health --;
					frameCount = 0;
					}
			
					if(directE[i] == -1){
						player.x -= 20;
						player.vel.x = 10;
						player.vel.y = 5;
						hearts.removeAll();
						player.health --;
						frameCount = 0;
						}
				
				frameCount = 0;

				for(let i = 0; i < player.health; i++){
					heartCurrent = new hearts.Sprite();
					heartCurrent.x = player.x + i * 55 - 380 ;
					heartCurrent.y = player.y - 250;
				}

				if(player.health > 3){
					player.img = idleP;
				} else if(player.health == 2 || player.health == 3){
					player.img = phurt1;
				} else if(player.health == 1){
					player.img = phurt2;
				} 
		
			} else {
				player.colour = 'white';
			}
	} 
}

	//Dead
	if(player.health <= 0){
		dead = true;
		player.img = playerDead;
		restartMenu.x = camera.x;
		restartMenu.y = camera.y;
	} else {
		restartMenu.x = -1000;
		restartMenu.y = -1000;
	}

	//Player Ani

	if(direct == 1){
		player.mirror.x = false;
	} else {
		player.mirror.x = true;
	}


	//Player Movement

	//noClip

	if(kb.pressed('=') && noClip != true && dead != true){
		noClip = true;
		player.layer = 10;
		player.collider = 'kinematic';
		player.vel.x = 0;
		player.vel.y = 0;
	} else if(kb.pressed('=') && noClip != false){
		noClip = false;
		player.layer = 1;
		player.collider = 'dynamic';
	}

	if(noClip == true){
		if(mouse.pressed() && kb.pressing('shift')){
			print(player.x + ',', player.y);
		}
	}

	//Movment 

	if(dead != true && flat == false && end == false){
	if(kb.pressing('d')){
		if(player.vel.y < 0){
			if(noClip){
				player.x += 10;
			} else if(player.overlapping(ladder) && kb.pressing('w')){
				player.vel.x = 0;
				player.x += 1.5;
		} else {
			player.vel.x = 3.5;
		}
		} else {
			if(noClip){
				player.x += 10;
			} else {
			player.vel.x = 4.5;
		}
		
		} 
		direct = 1;
	} 

	if(kb.pressing('a')){
		if(player.vel.y < 0){
			if(noClip){
				player.x -= 10;
			} else if(player.overlapping(ladder) && kb.pressing('w')){
				player.vel.x = 0;
				player.x -= 1.5;
		} else {
			player.vel.x = -3.5;
		}
		} else {
			if(noClip){
				player.x -= 10;
			} else {
			player.vel.x = -4.5;
		}
		
		} 
		direct = -1;
	}  

	if(player.vel.y < 0){
		if(kb.pressing('d')){

		} else { 
			if(player.vel.x > 0){
				player.vel.x -= 0.01;	
			}
			
		}

		if(kb.pressing('a')){

		} else { 
			if(player.vel.x < 0){
				player.vel.x += 0.01;	
			}
			
		}
	}

	if(noClip){
		if(kb.pressing('w')){
			player.y -= 10;
		}

		if(kb.pressing('s')){
			player.y += 10;
		}

	} else if(kb.presses('space') && player.colliding(ground) ||
	   kb.presses('space') && player.colliding(platformS) ||
	   kb.presses('space') && player.colliding(platformF) ||
	   kb.presses('space') && player.colliding(platformP) ||
	   kb.presses('space') && player.colliding(block) 
	   ){
		player.vel.y += -7.5;
	} 
}

	//Player Passthrough 

	if(player.colliding(platformP)){
		if(kb.pressing('s')){
			platformP.collider = 'none';
		} 
	} else if(player.collides(ground) || 
			  player.collides(platformS) ||
			  player.collides(platformF) 
	) {
		platformP.collider = 'static';
				
	} 

	if(player.overlapping(ladder)){
		if(kb.pressing('w')){
			player.vel.x = 0;
			player.vel.y = -5;
		} else if(player.vel.y > 0){
				platformP.collider = 'static';
				platformP.bounciness = 0.01;
				platformP.friction = 8;
			}
		}

	if(kb.pressing('w')){	
		if(player.overlapping(ladder)){
			platformP.collider = 'none';
		 } else {
			platformP.collider = 'static';
			platformP.bounciness = 0.01;
			platformP.friction = 8;
	}
	}  



	//Enemy Movement

	for(let i = 0; i < numE; i++){
		bad[i].debug = mouse.pressing() && kb.pressing('shift');
		let distance = dist(player.x, player.y, bad[i].x, bad[i].y);

		if(distance < 500 && dead != true){
			if(distance > 70 && player.x > bad[i].x) {
				if(distance < 70 && player.x > bad[i].x){
					bad[i].x += -2;
					directE[i] = 1;
				} else {
				bad[i].x += 2;
				directE[i] = 1;	
				}
				
			} else if(distance > 70 && player.x < bad[i].x) {
				if(distance < 70 && player.x > bad[i].x){
					bad[i].x += 2;
					directE[i] = -1;
				} else {
					bad[i].x += -2;
					directE[i] = -1;	
				}
			}

		//Enemy Ani

		if(directE[i] == 1){
			bad[i].mirror.x = false;
		} else {
			bad[i].mirror.x = true;
		}
	}

	//Enemy Blocked Movement

	
		if(distance > 300 && 
			player.x > bad[i].x &&
			bad[i].colliding(ground) ||
			distance > 300 && 
			player.x > bad[i].x &&
			bad[i].colliding(platformS)
			&& dead != true){
			let distance = dist(player.y, player.y, bad[i].y, bad[i].y);

			if(distance > 200){
			bad[i].vel.y = -8.5;
			bad[i].x += 2;
			} else {
			bad[i].vel.y = -5.5;
			bad[i].x += 2;
			}

		} else if(distance > 300 &&
			    player.x < bad[i].x &&
				bad[i].colliding(ground)
			){
			let distance = dist(player.y, player.y, bad[i].y, bad[i].y);

			if(distance > 200){
				bad[i].vel.y = -8.5;
			    bad[i].x += -2;
			} else {
				bad[i].vel.y = -5.5;
				bad[i].x += 2;
				}

		}
	}


	//Boss

	if(bossFight == true){
		if(silly == true){
			background(funny);
		} else {
			background(bossBody);
		}

	

	if(HandSpawn == false){
		bossHead.x = 1450;
		bossHead.y = 400;
		bossHead.w = 600;
		bossHead.h = 500;
		bossHand1.x = 900;
		bossHand1.y = 750;
		bossHand1.w = 210;
		bossHand1.h = 300;

		bossHand2.x = 2000;
		bossHand2.y = 750;
		bossHand2.w = 210;
		bossHand2.h = 300;
	}
		HandSpawn = true;

		bossBar.x = 1450;
		bossBar.y = 200;
		bossBar.w = 50 * bossBar.health;
		bossBar.h = 60;

		if(bossBar.health <= 10){
			bossBar.colour = "red";
			stage2 = true;
		}

		if(cycle == true && bossDead == false){
			bossTimer++;
		}

		//Smash Attacks
		if(bossTimer == 30 * 5 && smashTimer == 0 && bossDead == false){
			bossHead.img = bossHeadAttack;
			hand = random(0,1);
			smashStance = true;
			smash1Posx = random(smash1x);
			smash2Posx = random(smash2x);
			cycle = false;
			bossTimer = 0;
		}

		if(hand <= 0.4){
		
		if(smashStance == true && bossDead == false){
			if(smashTimer < 30 * 3){
				bossHand1.y = lerp(bossHand1.y, random(smashy), 0.05);
				smashTimer++;
			} else {
				smashTimer = 0
				smash = true;
				smashStance = false;	
			}
		}
		

		if(smash == true && smashTimer < 30 * 6 && bossDead == false){
			bossHand1.x = lerp(bossHand1.x, smash1Posx, 0.09);
			bossHand1.y = lerp(bossHand1.y, 1500, 0.03);
			smashTimer++;
		} else if(smashTimer == 30 * 6 && bossDead == false){
			smash = false;
			smashTimer = 0;
		} else if (smash == false && smashStance == false && smashTimer == 0 && bossDead == false){
			bossHand1.x = lerp(bossHand1.x, 900, 0.02);
			bossHand1.y = lerp(bossHand1.y, 750, 0.02);
			cycle = true;
			bossHead.img = bossHeadIdle;
		}
	
		if(bossHand1.y > 980 && bossDead == false){
			bossHand1.y = 980;
		}
	} else if(hand > 0.6 && hand <= 1){

		if(smashStance == true && bossDead == false){
			if(smashTimer < 30 * 3){
				bossHand2.y = lerp(bossHand2.y, random(smashy), 0.05);
				smashTimer++;
			} else {
				smashTimer = 0
				smash = true;
				smashStance = false;	
			}
		}

		if(smash == true && smashTimer < 30 * 6 && bossDead == false){
			bossHand2.x = lerp(bossHand2.x, smash2Posx, 0.09);
			bossHand2.y = lerp(bossHand2.y, 1500, 0.03);
			smashTimer++;
		} else if(smashTimer == 30 * 6 && bossDead == false){
			smash = false;
			smashTimer = 0;
		} else if (smash == false && smashStance == false && smashTimer == 0 && bossDead == false){
			bossHand2.x = lerp(bossHand2.x, 2000, 0.02);
			bossHand2.y = lerp(bossHand2.y, 750, 0.02);
			cycle = true;
			bossHead.img = bossHeadIdle;
		}
	
		if(bossHand2.y > 980 && bossDead == false){
			bossHand2.y = 980;
		}

	} else if(hand > 0 && hand <= 1){

		//Falling Spikes

		if(smashStance == true && bossDead == false){
			if(smashTimer < 30 * 3){
				bossHand2.y = lerp(bossHand2.y, random(smashy), 0.05);
				bossHand1.y = lerp(bossHand1.y, random(smashy), 0.05);
				smashTimer++;
			} else {
				smashTimer = 0
				smash = true;
				smashStance = false;
				
				if(stage2 == true){
				spike1.x = random(900, 2000);	
				spike1.y = random(-140, -250);
				spike2.x = random(900, 2000);	
				spike2.y = random(-140, -250);
				spike3.x = random(900, 2000);	
				spike3.y = random(-140, -250);
				spike4.x = random(900, 2000);	
				spike4.y = random(-140, -250);
				spike5.x = random(900, 2000);	
				spike5.y = random(-140, -250);
				spike6.x = random(900, 2000);	
				spike6.y = random(-140, -250);
				spike7.x = random(900, 2000);	
				spike7.y = random(-140, -250);
				spike8.x = random(900, 2000);	
				spike8.y = random(-140, -250);
				spike9.x = random(900, 2000);	
				spike9.y = random(-140, -250);
				spike10.x = random(900, 2000);	
				spike10.y = random(-140, -250);
				} else {
				spike1.x = random(900, 2000);	
				spike1.y = random(-140, -250);
				spike2.x = random(900, 2000);	
				spike2.y = random(-140, -250);
				spike3.x = random(900, 2000);	
				spike3.y = random(-140, -250);
				spike4.x = random(900, 2000);	
				spike4.y = random(-140, -250);
				spike5.x = random(900, 2000);	
				spike5.y = random(-140, -250);
				}
			
			}
		}

		if(smash == true && smashTimer < 30 * 6 && bossDead == false){
			bossHand1.y = lerp(bossHand2.y, 0, 0.04);
			bossHand2.y = lerp(bossHand2.y, 0, 0.04);
			fall = true;
			smashTimer++;
		} else if(smashTimer == 30 * 6 && bossDead == false){
			smash = false;
			smashTimer = 0;

		} else if (smash == false && smashStance == false && smashTimer == 0 && bossDead == false){
			bossHand1.y = lerp(bossHand2.y, 750, 0.02);
			bossHand2.y = lerp(bossHand2.y, 750, 0.02);
			fall = false;
			cycle = true;
			bossHead.img = bossHeadIdle;
		}
	
		if(bossHand1.y < 200 && bossDead == false){
			bossHand1.y = 200;
		}

		if(bossHand2.y < 200 && bossDead == false){
			bossHand2.y = 200;
		}

	}

	if(stage2 == true){
	spike1.y += 6;
	spike2.y += 6;
	spike3.y += 6;
	spike4.y += 6;
	spike5.y += 6;
	spike6.y += 6;
	spike7.y += 6;
	spike8.y += 6;
	spike9.y += 6;
	spike10.y += 6;
	} else {
		spike1.y += 5;
		spike2.y += 5;
		spike3.y += 5;
		spike4.y += 5;
		spike5.y += 5;
		spike6.y += 5;
	}
	


	//Boss Death

	if(bossBar.health <= 0){
		bossDead = true;
		bossCam = false;
		hearts.removeAll();
		for(let i = 0; i < player.health; i++){
			heartCurrent = new hearts.Sprite();
			heartCurrent.x = -500;
			heartCurrent.y = -500;
		}

		bossHand1.remove();
		bossHand2.remove();
		bossHead.remove();
		barrier1.remove();
		barrier2.remove();
		resizeCanvas(900, 600);
		if(silly == true){
			background(funny);
		} else {
			background(bk1); 
			background(bk2);
			background(bk3);
		}
		
		bridgeTimer ++;
		
		if(bridgeTimer == 90){
			bridge = new ground.Sprite(1950, 1163);
		}
		if(bridgeTimer == 110){
			bridge = new ground.Sprite(2050, 1163);
		}
		if(bridgeTimer == 130){
			bridge = new ground.Sprite(2150, 1163);
		}
		if(bridgeTimer == 150){
			bridge = new ground.Sprite(2250, 1163);
		}
		if(bridgeTimer == 170){
			bridge = new ground.Sprite(2350, 1163);
		}
		if(bridgeTimer == 180){
			bridge = new ground.Sprite(2450, 1163);
		}
		if(bridgeTimer == 200){
			bridge = new ground.Sprite(2550, 1163);
		}
		
		if(player.x > 2990){
			end = true;
		}

	} else {
		barrier1.x = bossHand1.x;
		barrier1.y = bossHand1.y;
		barrier2.x = bossHand2.x;
		barrier2.y = bossHand2.y;
	}



		//Boss Damage

		if(player.overlap(bossHand1) || player.overlaps(bossHand2)){
			flat = true;
			player.overlaps(barrier1);
			player.overlaps(barrier2);
			reloadHealth();
	
		} else if(bossHand1.y < 800 && bossHand2.y < 800){
			flat = false;
		} else {
			player.collides(barrier1);
			player.collides(barrier2);
		}
		
		if(spike1.overlaps(player)){
			reloadHealth();
			if(spike1.overlaps(player) || spike1.overlaps(ground)){
				spike1.x = 3000;
			}
			
		}

		if(spike2.overlaps(player)){
			reloadHealth();
			if(spike2.overlaps(player) || spike2.overlaps(ground)){
				spike2.x = 3000;
			}
		}

		if(spike3.overlaps(player)){
			reloadHealth();
			if(spike3.overlaps(player) || spike3.overlaps(ground)){
				spike3.x = 3000;
			}
		}

		if(spike4.overlaps(player)){
			reloadHealth();
			if(spike4.overlaps(player) || spike4.overlaps(ground)){
				spike4.x = 3000;
			}
		}

		if(spike5.overlaps(player)){
			reloadHealth();
			if(spike5.overlaps(player) || spike5.overlaps(ground)){
				spike5.x = 3000;
			}
		}

		if(spike6.overlaps(player)){
			reloadHealth();
			if(spike6.overlaps(player) || spike6.overlaps(ground)){
				spike6.x = 3000;
			}
		}

		if(spike7.overlaps(player)){
			reloadHealth();
			if(spike7.overlaps(player) || spike7.overlaps(ground)){
				spike7.x = 3000;
			}
		}

		if(spike8.overlaps(player)){
			reloadHealth();
			if(spike8.overlaps(player) || spike8.overlaps(ground)){
				spike8.x = 3000;
			}
		}

		if(spike9.overlaps(player)){
			reloadHealth();
			if(spike9.overlaps(player) || spike9.overlaps(ground)){
				spike9.x = 3000;
			}
		}

		if(spike10.overlaps(player)){
			reloadHealth();
			if(spike10.overlaps(player) || spike10.overlaps(ground)){
				spike10.x = 3000;
			}
		}

		

	}
	

	if(kb.presses('-')){
		bossBar.health--;
	}


	//Gravity

	if(player.vel.y > 2){
		player.vel.y += 0.3;
	}

	//Camera
	if(bossCam == false){
  	  	camera.x = player.x;
		camera.y = player.y;


	//Health System
	if(bossDead == true){

	} else {
		for(let i = 0; i < player.health; i++){
		hearts[i].x = player.x + i * 55 - 380 ;
		hearts[i].y = player.y - 250;
	

	if(camera.y >= 50 * 24 ){
		camera.y = 50 * 24;
		hearts[i].y = 50 * 19;

	}

	if(camera.y <= 50 * 6 ){
		camera.y = 50 * 6;
		hearts[i].y = 50;
	}

	if(camera.x <= 450){
		camera.x = 450;
		hearts[i].x = 70 + i * 55;

	}

	if(camera.x >= 50 * 111){
		camera.x = 50 * 111;
		hearts[i].x = 5170 + i * 55;
	}
	}
}
} else {
	camera.x = 1450;
	camera.y = 800;
	platformS.collider = 'dynamic';

	for(let i = 0; i < player.health; i++){
		hearts[i].x = 1350 + i * 55;
		hearts[i].y = 1230;
	}
}

	if(end == true){

		cool.x = camera.x;
		cool.y = camera.y;

	}

}
	if(dead == true){
		if(kb.presses('enter')){
		}
	}

	if(player.overlaps(secret)){
		silly = true;
	}

}