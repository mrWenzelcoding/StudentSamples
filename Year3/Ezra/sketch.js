// Declare global variables
let bond, gun, sheet, t, wall, a, maps, enemy, box,badSheet,healthpack,door;
let bullet = [];
let bn = 0;
let gn = 0;
let bullets;
let currentmp
let grenade=[]
// Preload assets
function preload() {
    currentmp = 0
    sheet = loadImage("Sprite-0007-Sheet.png");
    pistol = loadImage("Sprite-gunThing.png");
    shotgun = loadImage("shotty.png")
    bricks = loadImage("brick.png");
    carton = loadImage("box.png");
    bat = loadImage("bat.png");
    badSheet = loadImage("bad guy 007.png")
    healthpack = loadImage("health pack.png")
    doorimg = loadImage("door.png")
    pngbarrel = loadImage("boombox.png")
    mpistol = loadImage("machine.png")
    grenadeimg = loadImage("grenade.png")
}

// Setup function to initialize the game objects
function setup() {
    gunlist=0
    // Set up canvas and angle mode
    createCanvas(800, 800);
    background(50);
    angleMode(degrees);

    // Initialize tiles
//door
    doorPlacement = new Group();
    doorPlacement.tile= "d"
    doorPlacement.collider="s"
    door = new Sprite()
    door.collider= "n"
    door.w=50
    door.h=100
    door.image=doorimg
    door.image.scale=10
//wall
    wall = new Group();
    wall.collider = "s";
    wall.w = 50;
    wall.h = 50;
    wall.tile = "w";
    wall.image = bricks;
    wall.image.scale = 5;
//box
    box = new Group();
    box.collider = "d";
    box.w = 50;
    box.h = 50;
    box.tile = 'b';
    box.mass = 1;
    box.image = carton;
    box.rotationLock = true;
    box.image.scale = 10;
    box.health = 6;
    box.e=false
//barrell
    barrel = new Group();
    barrel.collider = "d";
    barrel.w = 50;
    barrel.h = 50;
    barrel.tile = 'x';
    barrel.mass = 1;
    barrel.image = pngbarrel;
    barrel.rotationLock = true;
    barrel.image.scale = 5;
    barrel.health = 6;
    barrel.e=true
//enemy
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
    enemy.e=false

    enemyplacement = new Group();
    enemyplacement.tile = "e"
    enemyplacement.collider = "n"
   //Initialize sprites

//bullets
     bullets = new Group();
     bullets.life = 50;
     bullets.d=5
     bullets.color  = "yellow"
     bullets.stroke = "orange"
//grenades
     grenades = new Group()
     
     grenades.image=grenadeimg
     grenades.scale=4
     grenades.debug=true
//med kit
     medkit = new Group();
     medkit.w=5
     medkit.h=5
     medkit.image=healthpack
     medkit.scale=4
//bond
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
    bond.health = 5
    bond.e=true
//gun
    gun = new Sprite(0, 0, 27, 10);
    gun.image = pistol;
    gun.image.scale = 6;
    gun.selection = 0;
    gun.debug=true
    gun.selectionTimer=0
    gun.selectionMaxTime=10
    // Map layout (array of strings)
    maps = [
        /*0*/[
            'wwwwwwwwwwwwwwwww',
            'w    dw         w',
            'w     w         w',
            'w     w         w',
            'w     w         w',
            'w     w   w     w',
            'w         wbbbbbw',
            'w         w  x  w',
            'w         w  e  w',
            'w         w     w',
            'w         wbbbbbw',
            'w               w',
            'w               w',
            'w               w',
            'w    x          w',
            'w               w',
            'w               w',
            'wwwwwwwwwwwwwwwww'
        ],/*1*/[
            'wwwwwwwwwwwwwwwwww',
            'w                w',
            'w          bbbbb w',
            'w          b   b w',
            'w          bxe b w',
            'w          b   b w',
            'w          bbbbb w',
            'w                w',
            'w                w',
            'w                w',
            'wbb              w',   
            'w  ww            w',
            'w    bbbb        w',
            'w       wwbbbwbbbw',
            'w     x          w',
            'w             e dw',
            'w  e             w',
            'wwwwwwwwwwwwwwwwww'
        ],/*2*/[
            'wwwwwwwwwwwwwwwwww',
            'w     w          w',
            'w     w  ex    d w',
            'w     w          w',
            'w     wwwww      w',
            'w     w e w      w',
            'w     w   wwbbbbww',
            'w     bb         w',
            'w     b          w',
            'wwwwwwwww   x    w',
            'w       w        w',   
            'w   e   w     x  w',
            'w       w        w',
            'w       wwbbbbbbbw',
            'w       b        w',
            'w x     b x   e  w',
            'w       b        w',
            'wwwwwwwwwwwwwwwwww'
        ],/*4*/[
            'wwwwwwwwwwwwwwwwww',
            'w   w            w',
            'w   w  d         w',
            'w   w  e      x  w',
            'w   w            w',
            'w   wwwwwwwwbbbbbw',
            'w   b   w        w',
            'w   b e w        w',
            'w   b x w        w',
            'wbbbwwwww        w',
            'w        x       w',
            'w             e  w',
            'w   e            w',
            'w         x      w',
            'w                w',
            'wwwwwwwwwwwwwwwwww',
        ],/*5*/[
            'wwwwwwwwwwwwwwwwww',
            'w   w            w',
            'w   w            w',
            'w   b  e      x  w',
            'w   b            w',
            'w   wwwwwwwwwwwwww',
            'w   b            w',
            'w   b e          w',
            'w   b       x    w',
            'wwwwwwwww        w',
            'w                w',
            'w             e  w',
            'w   e            w',
            'w         x     dw',
            'w                w',
            'wwwwwwwwwwwwwwwwww',
        ],/*6*/[
            'wwwwwwwwwwwwwwwwww',
            'w                w',
            'w                w',
            'w                w',
            'w                w',
            'w     e          w',
            'w     e      e   w',
            'w                w',
            'w                w',
            'w                w',
            'w                w',
            'w                w',
            'w                w',
            'w            wwwww',
            'w            w    ',
            'w d          wx  w',
            'w            wx  w',
            'wwwwwwwwwwwwwwwwww'
        ],/*7*/[
            'wwwwwwwwwwwwwwwwww',
            'w       w       dw',
            'w       w        w',
            'w       w        w',
            'w       w        w',
            'w      xw   x    w',
            'w       w        w',
            'w       w        w',
            'wxxx    w        w',
            'w       w        w',
            'w       w       ew',
            'we      w    xxxxw',
            'w       wbbbbbbbbw',
            'w                w',
            'w   xx      x    w',
            'w   xx   e  x    w',
            'w                w',
            'wwwwwwwwwwwwwwwwww'
         ]

    ];

  
    
    loadMap(0); // Load initial map
}


        // Function to create a bullet
        function shoot(shooter){
        
        if(shooter!=gun||gun.selection==0)
    {    bn++;
        // Create a new bullet sprite
    
        bullet[bn] = new bullets.Sprite();
        //bullet[bn].mass = 90000;
        bullet[bn].timer = 0;
        bullet[bn].a = shooter.rotation;
        bullet[bn].bounce = 0;
        bullet[bn].x = cos(bullet[bn].a) * shooter.w + shooter.x;
        bullet[bn].y = sin(bullet[bn].a) * shooter.w + shooter.y;
        bullet[bn].vel.x = cos(bullet[bn].a) * 15;
        bullet[bn].vel.y = sin(bullet[bn].a) * 15;
        shooter.rotation += random(-20, 20);
        return
    }
      if(gun.selection==1){
        for(let i=0;i<6;i++){
        bn++
        bullet[bn] = new bullets.Sprite();
        bullet[bn].timer = 0;
        bullet[bn].a = shooter.rotation;
        bullet[bn].bounce = 0;
        bullet[bn].x = cos(bullet[bn].a) * shooter.w + shooter.x + random(-1,1);
        bullet[bn].y = sin(bullet[bn].a) * shooter.w + shooter.y + random(-1,1);
        bullet[bn].vel.x = cos(bullet[bn].a) * 15;
        bullet[bn].vel.y = sin(bullet[bn].a) * 15;
        shooter.rotation += random(-10, 10);}
        return}

        if(gun.selection==2){
        bn++;
        bullet[bn] = new bullets.Sprite();
        bullet[bn].timer = 0;
        bullet[bn].a = shooter.rotation;
        bullet[bn].bounce = 0;
        bullet[bn].x = cos(bullet[bn].a) * shooter.w + shooter.x;
        bullet[bn].y = sin(bullet[bn].a) * shooter.w + shooter.y;
        bullet[bn].vel.x = cos(bullet[bn].a) * 15;
        bullet[bn].vel.y = sin(bullet[bn].a) * 15;
        shooter.rotation += random(-20, 20);
        return}
        if(gun.selection==3){
        
        grenade[gn] = new grenades.Sprite();
        grenade[gn].timer = 0;
        grenade[gn].a = shooter.rotation;
        grenade[gn].life = 150
        grenade[gn].x = cos(grenade[gn].a) * shooter.w + shooter.x;
        grenade[gn].y = sin(grenade[gn].a) * shooter.w + shooter.y;
        shooter.rotation += random(-20, 20);
        gn++;
        return}
    }
 
function heal(medkit,healed){
    healed.health+=1
    medkit.remove();
}
let mk=[]
let mkn=0
// Function to kill box when hit by bullet
function bkill(bulets, damage) {
    damage.health--;
    bulets.remove();
    if (damage.health <= 0) {
        if (damage.e!=true){
            if (random(10)>=7){
            mk[mkn]= new medkit.Sprite(damage.x,damage.y);
             }
        damage.remove();
    }else { 
            explode(damage)
        }
        
    }
}
function ekill(){}

function explode(esprite){
    for (let i = 0;i<180;i++){
        esprite.rotationLock=false
        esprite.rotation+=2
        shoot(esprite)
    }
    esprite.life=50
    esprite.remove()
}
let enemys
// Load map based on index
    function loadMap(n) {
        
        if(n==0){gunlist=0}
        if(n==2){gunlist=1}
        if (n==3){gunlist=2}
        if (n==4){gunlist=3}
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

        door.x=doorPlacement[0].x
        door.y=doorPlacement[0].y+25
        doorPlacement.removeAll()
            
        
enemyplacement.removeAll()
    currentmp++
    }

// Handle mouse wheel for weapon selection
function mouseWheel(event) {
    
    if (event.delta > 0) {
        gun.selection += 1;
    } else {
        gun.selection -= 1;
    }
   
    if (gun.selection<0){gun.selection=gunlist}
    if (gun.selection>gunlist){gun.selection=0}
    if (gun.selection==0){gun.image=pistol;gun.selectionMaxTime=10;gun.width=27}
    if (gun.selection==1){gun.image=shotgun;gun.image.scale = 6;gun.selectionMaxTime=30;gun.width=75}
    if (gun.selection==2){gun.image=mpistol;gun.image.scale=6;gun.selectionMaxTime=2;gun.width=27}
    if (gun.selection==3){gun.image=bat;gun.image.scale=4;gun.selectionMaxTime=60;gun.width=65}
}

// Draw function (game loop)
function draw() {
    gun.selectionTimer++
    if(mouseIsPressed&&gun.selectionTimer>gun.selectionMaxTime&&!gun.overlapping(wall)){shoot(gun);gun.selectionTimer=0}
    // Handle collisions between bullets and boxes
    bullets.collides(box, bkill);
    bullets.collides(enemy, bkill);
    bullets.collides(bond, bkill);
    bullets.collides(barrel, bkill);
   // explosion.collides()
    medkit.collides(bond,heal)
    if (enemy.length==0){
    if (bond.overlaps(door)){loadMap(currentmp)}
}
    for(let i = 0;i<gn;i++){
        if(grenade[i].life<=5)
        {
            explode(grenade[i])
            grenade[i].remove()
        }
    }
// if (enemy.length==0)
//     {      
//      currentmp++
//       loadMap(currentmp)    }
    // Set camera to follow bond (player character)
    camera.x = bond.x;
    camera.y = bond.y;
    // Enable debugging for gun and bond
    //gun.debug = true;
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
    if(gun.selection==0||gun.selection==2){
         gun.rotateTowards(mouse, 0.25, 0);
    gun.x = bond.x + (cos(gun.rotation) *7/4*gun.w);
    gun.y = bond.y + (sin(gun.rotation) *7/4*gun.w);
    }
    
    if(gun.selection==1){
         gun.rotateTowards(mouse, 0.1);
    gun.x = bond.x + (cos(gun.rotation) *1*gun.w);
    gun.y = bond.y + (sin(gun.rotation) *1*gun.w);
    }
    if(gun.selection==3){
         gun.rotateTowards(mouse, 0.25, 0);
    gun.x = bond.x + (cos(gun.rotation) *1*gun.w);
    gun.y = bond.y + (sin(gun.rotation) *1*gun.w);
    }
    camera.off()
    rectMode(CENTER)
    fill('grey')
    rect(100, 20, 200, 25)
    fill('red')
    rect(100, 20, bond.health * 36, 20)
    fill("white")
    text(gun.selection,100,50)
}