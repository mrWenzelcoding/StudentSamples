// Declare global variables
let bond, gun, sheet, t, wall, a, maps, enemy, box,badSheet,healthpack,door;
let bullet = [];
let bn = 0;
let bullets;
let currentmp=0

// Preload assets
function preload() {
	sheet = loadImage("Sprite-0007-Sheet.png");
	pistol = loadImage("Sprite-gunThing.png");
	bricks = loadImage("brick.png");
	carton = loadImage("box.png");
	bat = loadImage("bat.png");
	badSheet = loadImage("bad guy 007.png")
    healthpack = loadImage("health pack.png")
	doorimg = loadImage("door.png")
}

// Setup function to initialize the game objects
function setup() {
	// Set up canvas and angle mode
	createCanvas(800, 800);
	background(50);
	angleMode(degrees);

	// Initialize tiles
	
	wall = new Group();
	wall.collider = "s";
	wall.bounce = 1;
	wall.w = 50;
	wall.h = 50;
	wall.tile = "w";
	wall.image = bricks;
	wall.image.scale = 5;

	box = new Group();
	box.collider = "d";
	box.w = 50;
	box.h = 50;
	box.tile = 'b';
	box.mass = 1;
	box.image = carton;
	box.rotationLock = true;
	box.image.scale = 10;
	box.health = 10;

	enemy = new Group();
	enemy.collider = "d"
	enemy.w = 10
	enemy.h = 10
	enemy.health = 10
	enemy.addAni("run", badSheet, {
		frameSize: [11, 16],
		frames: 15,
		frameDelay: 5
	});
	enemy.addAni("idle", badSheet, {
		frameSize: [11, 16],
		frames: 1,
		frameDelay: 1
	});
	enemy.scale = 6;

	enemyplacement = new Group();
	enemyplacement.tile = "e"
	enemyplacement.collider = "n"
	//Initialize sprites
	//door

	bullets = new Group();
	bullets.life = 50;
    bullets.color  = "white"
	bullets.stroke = "white"
	//med kit
	medkit = new Group();
	medkit.w=10
	medkit.h=10
	medkit.image=healthpack
	medkit.scale=3
	// Create bond sprite (player character)
	bond = new Sprite(400, 400, 48, 33);
	bond.addAni("run", sheet, {
		frameSize: [16, 11],
		frames: 15,
		frameDelay: 5
	});
	bond.ani.scale = 6;
	bond.addAni("idle", sheet, {
		frameSize: [16, 11],
		frames: 1,
		frameDelay: 1
	});
	bond.ani.scale = 6;
	bond.image.scale = 2;
	bond.rotationLock = true;
	bond.collider = "d";
	bond.health = 20
	// Create gun sprite
	gun = new Sprite(0, 0, 27, 10);
	gun.image = pistol;
	gun.image.scale = 6;
	gun.selection = 0;
	// Map layout (array of strings)
	maps = [
		[
			'wwwwwwwwwwwwwwwwww',
			'w    w           w',
			'w    w           w',
			'w    w           w',
			'w    w           w',
			'w    w    w      w',
			'w         wbbbbb w',
			'w         w    b w',
			'w         w  e b w',
			'w         w    b w',
			'w         wbbbbb w',
			'w                w',
			'w                w',
			'w                w',
			'w                w',
			'w                w',
			'w                w',
			'wwwwwwwwwwwwwwwwww'
		],[
			'wwwwwwwwwwwwwwwwww',
			'w                w',
			'w          bbbbb w',
			'w          b   b w',
			'w          b e b w',
			'w          b   b w',
			'w          bbbbb w',
			'w                w',
			'w                w',
			'w                w',
			'wbb              w',	
			'w  ww            w',
			'w    bbbb        w',
			'w       wwbbbwbbbw',
			'w                w',
			'w             e  w',
			'w  e             w',
			'wwwwwwwwwwwwwwwwww'
		],[
			'wwwwwwwwwwwwwwwwww',
			'w     w          w',
			'w     w  e       w',
			'w     w          w',
			'w     wwwww      w',
			'w     w e w      w',
			'w     w   wwbbbbww',
			'w     bb         w',
			'w     b          w',
			'wwwwwwwww        w',
			'w       w        w',	
			'w   e   w        w',
			'w       w        w',
			'w       wwbbbbbbbw',
			'w       b        w',
			'w       b     e  w',
			'w       b        w',
			'wwwwwwwwwwwwwwwwww'
		],[
		    'wwwwwwwwwwwwwwwwww',
            'w   w            w',
            'w   w            w',
            'w   w  e         w',
            'w   w            w',
            'w   wwwwwwwwbbbbbw',
            'w   b   w        w',
            'w   b e w        w',
			'w   b   w        w',
			'wbbbwwwww        w',
			'w                w',
			'w             e  w',
			'w   e            w',
			'w                w',
			'w                w',
			'wwwwwwwwwwwwwwwwww',
		],[
			'wwwwwwwwwwwwwwwwww',
			'w                w',
			'w                w',
			'w                w',
			'w                w',
			'w                w',
			'w                w',
			'w                w',
			'w   w w w        w',
			'w   w w w        w',
			'w    w w         w',	
			'w                w',
			'w                w',
			'w            wwwww',
			'w            wwwww',
			'w            ww  w',
			'w            ww ew',
			'wwwwwwwwwwwwwwwwww'
		]

	];

	

	
	loadMap(0); // Load initial map
}


function mousePressed() 
{
	shoot(gun)
}
        // Function to create a bullet
		function shoot(shooter){
        bn++;
		// Create a new bullet sprite
	
		bullet[bn] = new bullets.Sprite();
		bullet[bn].mass = 90000;
		bullet[bn].timer = 0;
		bullet[bn].a = shooter.rotation;
		bullet[bn].bounce = 0;
		bullet[bn].x = cos(bullet[bn].a) * shooter.w + shooter.x;
		bullet[bn].y = sin(bullet[bn].a) * shooter.w + shooter.y;
		bullet[bn].d = 5;
		bullet[bn].vel.x = cos(bullet[bn].a) * 15;
		bullet[bn].vel.y = sin(bullet[bn].a) * 15;
		shooter.rotation += random(-20, 20);
	}

function heal(medkit,healed){
	healed.health+=5
	medkit.remove();
}
let mk=[]
let mkn=0
// Function to kill box when hit by bullet
function kill(bullets, damage) {
	damage.health--;
	bullets.remove();
	if (damage.health <= 0) {
		if (random(10)>=6&&damage!=bond){
			mk[mkn]= new medkit.Sprite(damage.x,damage.y);
		}
		damage.remove();
	}
}
let enemys
// Load map based on index
	function loadMap(n) {
		
	
		if(n!=0){mapNow.remove()}
		mapNow = new Tiles(maps[n], wall.w / 2, wall.h / 2, 50, 50);
		bond.x=100
		bond.y=100
		for (let i = 0; i<enemyplacement.length;i++){
		enemys = new enemy.Sprite(enemyplacement[i].x,enemyplacement[i].y)
			enemy[i].t=0
			enemy[i].timer=0
			enemy[i].timermax=random(50,100)
			
		}
enemyplacement.removeAll()
	}

// Handle mouse wheel for weapon selection
function mouseWheel(event) {
	if (event.delta > 0) {
		gun.selection += 1;
	} else {
		gun.selection -= 1;
	}
}

// Draw function (game loop)
function draw() {
	// Handle collisions between bullets and boxes
	bullets.collides(box, kill);
	bullets.collides(enemy, kill);
	bullets.collides(bond, kill);
	medkit.collides(bond,heal)
 if (enemy.length==0)
	   {
		currentmp++
		loadMap(currentmp)
	   }
	// Set camera to follow bond (player character)
	camera.x = bond.x;
	camera.y = bond.y;
	// Enable debugging for gun and bond
	gun.debug = true;
	gun.collider = "k";
	bond.debug = true;

	// Clear background
	background(50);
	
  for (let i = 0; i<enemy.length;i++)
	{
	if (dist(enemy[i].x,enemy[i].y,bond.x,bond.y)<450)
		{
	     enemy[i].rotateTowards(bond,1,0)
	     enemy[i].t++
	     if(enemy[i].t>=20)
		 {
		   if((world.rayCast(enemy[i],bond)==bond||world.rayCast(enemy[i],bond)==gun)) 
			   {
				
				shoot(enemy[i])
				enemy[i].t=0
	           }
	       else{
		        enemy[i].moveTo(random(-200+enemy[i].x,200+enemy[i].x),random(-200+enemy[i].y,200+enemy[i].y),6)
		        enemy[i].t=-20
	           }
	     }
		
	    }
		
	if (enemy[i].timer>=enemy[i].timermax)
	 {  enemy[i].changeAni(['run'])
		enemy[i].moveTo(random(-200+enemy[i].x,200+enemy[i].x),random(-200+enemy[i].y,200+enemy[i].y),4)
		enemy[i].timer=0
	    enemy[i].timermax=random(70,100)
		//console.log(world.rayCast(enemy[i],bond))
	 }
	 enemy[i].timer++
	} 
  
	// Player movement (keyboard controls)
	if (kb.pressing('a' || 'd' || 's' || 'w')) {
		if (bond.ani.name != 'run') {
			bond.changeAni(['run']);
		}
	} else {
		if (bond.ani.name == 'run') {
			bond.changeAni(['idle']);
		}
	}

	// Control bond's position and animation

	bond.rotateTowards(mouse, 1, 90);
	bond.vel.x = 0;
	bond.vel.y = 0;

	if (kb.pressing(LEFT)) {
		bond.x -= 5;
		bond.changeAni(['run']);
	}
	if (kb.pressing(RIGHT)) {
		bond.x += 5;
		bond.changeAni(['run']);
	}
	if (kb.pressing('s')) {
		bond.y += 5;
		bond.changeAni(['run']);
	}
	if (kb.pressing('w')) {
		bond.y -= 5;
		bond.changeAni(['run']);
	}

	// Get mouse position and calculate angle relative to bond
	let x = mouseX - 400;
	let y = mouseY - 400;
	let angle = atan2(y, x);

	// Rotate gun to point towards mouse position
	gun.x = bond.x;
	gun.y = bond.y;
	gun.rotateTowards(mouse, 0.25, 0);
	gun.x = bond.x + (cos(gun.rotation) * 40);
	gun.y = bond.y + (sin(gun.rotation) * 40);
	bullet.timer++
	// Handle bullet timers and removal
	for (let i = 0; i < bn; i++) {

		if (bullet[bn].timer > 600) {
			bullet[bn].remove();
			bn--;
		}
	}
	camera.off()
	rectMode(CENTER)
	fill('grey')
	rect(100, 20, 200, 25)
	fill('red')
	rect(100, 20, bond.health * 9, 20)
}