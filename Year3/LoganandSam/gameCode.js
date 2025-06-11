let a = []
let currentRoom
let anisetup
let floor
let pfloor
let Clicky
let playershow
let characterSelect
let start
//let orbchance
//let orb
//maps and character limits
let character = []
let maps=[]
let numberOfCharacters = 10
let players = []
let numberOfPlayers = 2
let minXPlayer = 0
let maxXPlayer = 0
let minYPlayer = 0
let maxYPlayer = 0

let lightCooldown
let heavyCooldown
let upCooldown
let downCooldown
let lightProjectileCooldown
let heavyProjectileCooldown
let e
let mapI

function preload(){
   e=loadAnimation('ralphidle','assets/kralphidle.png',{frameSize:[256,256],frames:2,frameDelay:30})
}
class Maps{
    constructor(maps_){
        this.numberOfMaps = maps_.length
        this.roomNumber = 0
        this.map = maps_
        this.mapsellect = true      
    }
    display(){
        for(let i = 1;i<this.numberOfMaps; i++){
            if(kb.pressed(' ') && Clicky.overlapping(map[i])) {
                this.roomNumber = i
                this.mapsellect = false
                characterSelect = 1
                if(maps.map[i].image != null){
                    mapI.image=maps.map[i].image
                    mapI.scale=maps.map[i].scale
                    mapI.offset.y=149
                    
                    floor.color= color(0,0,0,0)
                    floor.stroke= color(0,0,0,0)
                }else{
    
                }
                mapI.color=color(0,0,0,255)
                mapI.stroke=color(0,0,0,255)
            }
        }
    }
    loadRoom(n){
        currentRoom = new Tiles(this.map[n].layout, -2500, 25, 50, 50)
        for (let i = 0; i < pfloor.length; i++) {
            pfloor[i].y -= 20
        }
    }
}
class Hurtbox{
    constructor(x_,y_,w_,h_,xvel_,
        yvel_,damage_,knockback_,
        life_,cooldown_,skin,_scale,
        {stun = 0} = {}){
        this.x = x_
        this.y = y_
        this.width = w_
        this.height = h_
        this.xVel = xvel_
        this.yVel = yvel_
        this.damage = damage_
        this.knockback = knockback_
        this.stun = stun
        this.skin=skin
        this.colour = random(255)
        this.life = life_
        this.cooldown = cooldown_
        this.collider = new Sprite(this.x,this.y,this.width,this.height)
        this.collider.collider = 'n'
        this.collider.fill =('rgb(200,100,150)')
        this.collider.addAni('football','assets/football.png',{frameSize: [32,8], frames: 13,frameDelay:4})
        
        this.collider.addAni('wheel','assets/wheel.png',{frameSize: [37,37], frames: 4,frameDelay:4})
        this.scale=_scale
        this.collider.addAni('nothing','assets/nothing.png',{frameSize:[2048,623], frames: 1, frameDelay: 200})
    }
    update(){
    
        this.life -= 1
        if(this.skin!='nothing'){
            this.collider.changeAni(this.skin)
        
        this.collider.scale=this.scale  
        this.collider.scale.x=(this.scale*this.xVel/abs(this.xVel))
}
        
        if(this.life<=0){
        }
        this.x += this.xVel
        this.y += this.yVel
        this.collider.x = this.x
        this.collider.y = this.y

        
    }
    display(){
        fill(colour)
        rect(this.x,this.y,this.w,this.h)
    }
}
class Controller {
	constructor(player__) {
	  this.player = player__; // The player index (0 for the first controller, 1 for the second, etc.)
	  this.gamepad = null; // Reference to the gamepad object  
	  // Button states
	  this.a = false;
	  this.b = false;
	  this.x = false;
	  this.y = false;
	  this.start = false;
	  this.back = false;
	  this.up = false;
	  this.down = false;
	  this.left = false;
	  this.right = false;
	  this.leftTrigger = false;
	  this.rightTrigger = false;
	  this.leftBumper = false;
	  this.rightBumper = false;
	  this.leftStickClick = false;
	  this.rightStickClick = false; 
	  // Joystick positions
	  this.leftStickX = 0;
	  this.leftStickY = 0;
	  this.rightStickX = 0;
	  this.rightStickY = 0;
	  this.previousState = null
	} 
	update() {
	  // Get the gamepad
	  const gamepads = navigator.getGamepads();
	  this.gamepad = gamepads[this.player];
	  this.previousState = this.clone(); // Initialize on first update	  
	  if (!this.gamepad) {
		console.warn(`No gamepad connected for player ${this.player}`);
		return;
	  }
	  // Update buttons
	  this.a = this.gamepad.buttons[0].pressed;
	  this.b = this.gamepad.buttons[1].pressed;
	  this.x = this.gamepad.buttons[2].pressed;
	  this.y = this.gamepad.buttons[3].pressed;
	  this.leftBumper = this.gamepad.buttons[4].pressed;
	  this.rightBumper = this.gamepad.buttons[5].pressed;
	  this.leftTrigger = this.gamepad.buttons[6].pressed;
	  this.rightTrigger = this.gamepad.buttons[7].pressed;
	  this.back = this.gamepad.buttons[8].pressed;
	  this.start = this.gamepad.buttons[9].pressed;
	  this.leftStickClick = this.gamepad.buttons[10].pressed;
	  this.rightStickClick = this.gamepad.buttons[11].pressed;
  
	  // D-Pad (Hat) buttons
	  this.up = this.gamepad.buttons[12].pressed;
	  this.down = this.gamepad.buttons[13].pressed;
	  this.left = this.gamepad.buttons[14].pressed;
	  this.right = this.gamepad.buttons[15].pressed;
  
	  // Update joysticks (axes)
	  this.leftStickX = this.gamepad.axes[0]; // Left stick horizontal
	  this.leftStickY = this.gamepad.axes[1]; // Left stick vertical
	  this.rightStickX = this.gamepad.axes[2]; // Right stick horizontal
	  this.rightStickY = this.gamepad.axes[3]; // Right stick vertical
	}
	hasChanged(other) {
		// Check if buttons or joysticks have changed
        if(other != null){
		    return (
	            this.a !== other[0].a ||
	            this.b !== other[0].b ||
	            this.x !== other[0].x ||
	            this.y !== other[0].y ||
	            this.start !== other[0].start ||
	            this.back !== other[0].back ||
	            this.up !== other[0].up ||
	            this.down !== other[0].down ||
	            this.left !== other[0].left ||
	            this.right !== other[0].right ||
	            this.leftTrigger !== other[0].leftTrigger ||
	            this.rightTrigger !== other[0].rightTrigger ||
	            this.leftBumper !== other[0].leftBumper ||
	            this.rightBumper !== other[0].rightBumper ||
	            this.leftStickClick !== other[0].leftStickClick ||
	            this.rightStickClick !== other[0].rightStickClick ||
	            this.leftStickX !== other[0].leftStickX ||
	            this.leftStickY !== other[0].leftStickY ||
		        this.rightStickX !== other[0].rightStickX ||
		        this.rightStickY !== other[0].rightStickY
		    );
	    }
        else{
            return (
	            this.a !== this.previousState[0].a ||
	            this.b !== this.previousState[0].b ||
	            this.x !== this.previousState[0].x ||
	            this.y !== this.previousState[0].y ||
	            this.start !== this.previousState[0].start ||
	            this.back !== this.previousState[0].back ||
	            this.up !== this.previousState[0].up ||
	            this.down !== this.previousState[0].down ||
	            this.left !== this.previousState[0].left ||
	            this.right !== this.previousState[0].right ||
	            this.leftTrigger !== this.previousState[0].leftTrigger ||
	            this.rightTrigger !== this.previousState[0].rightTrigger ||
	            this.leftBumper !== this.previousState[0].leftBumper ||
	            this.rightBumper !== this.previousState[0].rightBumper ||
	            this.leftStickClick !== this.previousState[0].leftStickClick ||
	            this.rightStickClick !== this.previousState[0].rightStickClick ||
	            this.leftStickX !== this.previousState[0].leftStickX ||
	            this.leftStickY !== this.previousState[0].leftStickY ||
		        this.rightStickX !== this.previousState[0].rightStickX ||
		        this.rightStickY !== this.previousState[0].rightStickY
		    );
        }
    }
    changed(input){
        return(this.input != this.previousState[0].input)
    }
	clone(){
        const previous = []
        previous.push({
            a: this.a,
            b: this.b,
            x: this.x,
            y: this.y,
            start: this.start,
            back: this.back,
            up: this.up,
            down: this.down,
            left: this.left,
            right: this.right,
            leftTrigger: this.leftTrigger,
            rightTrigger: this.rightTrigger,
            leftBumper: this.leftBumper,
            rightBumper: this.rightBumper,
            leftStickClick: this.leftStickClick,
            rightStickClick: this.rightStickClick,
            leftStickX: this.leftStickX,
            leftStickY: this.leftStickY,
            rightStickX: this.rightStickX,
            rightStickY: this.rightStickY,
        })
        return previous;
	}
}

function setup() {
mapI=new Sprite(windowWidth/15,windowHeight/15)
//mapI.debug=true
mapI.collider="n"
    if(getItem('lC') != undefined){
        lightCooldown = getItem('lC')
    }
    if(getItem('hC') != undefined){
        heavyCooldown = getItem('hC')
    }
    if(getItem('uC') != undefined){
        upCooldown = getItem('uC')
    }
    if(getItem('dC') != undefined){
        downCooldown = getItem('dC')
    }
    if(getItem('lPC') != undefined){
        lightProjectileCooldown = getItem('lPC')
    }
    if(getItem('hPC') != undefined){
        heavyProjectileCooldown = getItem('hPC')
    }


    anisetup=0
//orbchance=0
camera.zoom=3
camera.x=windowWidth/2
camera.y=windowHeight/2
    mapSetup();
    
    console.log(maps.map)
    
    for(let i = 0;i<numberOfPlayers; i++){
        players[i] = new Player(1000 - (i*800/numberOfPlayers),200,70,120,i)
      //players[i].guy.addAni('Idle', 'assets/kralphIdle.png', 2)
    
    }
//orb=new Sprite(0,0,50)
// orb.collider="n"
// orb.image='assets/orb.png'
// orb.image.scale=2
// orb.Xoff=random(0,windowWidth)
// orb.Yoff=random(0,windowHeight)
// orb.health=100
    characterSelect = 0
    start = false
    new Canvas(windowWidth, windowHeight,'fullscreen');

    textSize(20)
    Clicky = new Sprite(windowWidth/2, windowHeight/2, 900, 900)
    Clicky.collider = 'n'
    playershow=new Sprite(windowWidth/2, windowHeight/2.6, 500, 100)
    playershow.collider="n"
    playershow.color=255,255,255
    playershow.textSize=60
    for (let i = 1; i < maps.numberOfMaps; i++) {
        map[i] = new Sprite(windowWidth/2 + (i * 1000), windowHeight/2, 800, 800)
      
        map[i].collider = "n"
        map[i].textSize=40
        map[i].text = maps.map[i].name
    }   
    for (let i = 0; i < numberOfCharacters; i++) {       
        character[i] = new Sprite(windowWidth/2 + (i * 1000), windowHeight/4, 800, 800)
        character[i].color = 255,255,255
        character[i].collider = "n"
character[i].textSize=40
    }
    character[0].text = 'test'
    character[1].text = 'Wirzba'
    character[2].text = 'Ralph'
    character[3].text = 'Greep'
    character[4].text = 'Baker'
    character[5].text = 'Anderson'
    character[6].text = 'Baldry'
    character[7].text = 'McMurray'
    character[8].text = 'Heseltine'
    character[9].text = 'Rompain'   

    background(100);
    maps.loadRoom(0)
}








//things for me to do(logan)
//pixle art map (just space done)
//make down attack and jump pause and then resume 





















function draw() {
    background(0)  
    textFont('Orbitron')
   
   let alivePlayers = 0;
   let lastAlivePlayer = null;
text(" ",-10,10)
   
    if (maps.mapsellect == true) {
        maps.display()
        rect(950, 250, 900, 900)
        for (let i = 1; i < maps.numberOfMaps; i++) {
           
            if(maps.map[i].image != null){
                
            }
            if (contro.released('right')) {
                map[i].x -= 1000
            }
            if (contro.released('left')) {
                map[i].x += 1000
            }
            if (map[i].x > 8000) {
                map[i].x -= 10000
            }
            if (map[i].x < 2000) {
                map[i].x += 10000
            }
            rect(windowWidth/2,windowHeight/2,100,windowHeight)
		}
        playershow.text="map"
    } else if (characterSelect<=players.length) {
        Character()
         playershow.text="player "+characterSelect
        rect(950, 250, 900, 900)
        for (let i = 0; i < numberOfCharacters; i++) {
            character[i].y = windowWidth/4.025454
            if (contro.released('right')) {
                character[i].x -= 1000
            }
            if (contro.released('left')) {
                character[i].x += 1000
            }
            if (character[i].x > 8000) {
                character[i].x -= 10000
            }
            if (character[i].x < 2000) {
                character[i].x += 10000
            }
        }
     } else {
        Clicky.x = -2000
        for (let i = 1; i < 1; i++) {
            map[i].life=0
            
        }
        for(let i=0; i<numberOfCharacters; i++){
           character[i].life=0        
        }      
        //carera code 
        minXPlayer = 0
        maxXPlayer = 0
        minYPlayer = 0
        maxYPlayer = 0
        for(let i = 0;i<players.length;i++){
            if(players[i].guy.x<players[minXPlayer].guy.x){
                minXPlayer = i
            }
            if(players[i].guy.x>players[maxXPlayer].guy.x){
                maxXPlayer = i
            }
            if(players[i].guy.y<players[minYPlayer].guy.y){
                minYPlayer = i
            }
            if(players[i].guy.y>players[maxYPlayer].guy.y){
                maxYPlayer = i
            }

        } 
        camera.x = (players[minXPlayer].guy.x + players[maxXPlayer].guy.x) / 2
        camera.y = (players[minYPlayer].guy.y + players[maxYPlayer].guy.y) / 2
        if(camera.x>windowWidth/5){
            camera.x=windowWidth/5
         }
         if(camera.x<100){
            camera.x=100
         }  
         if(camera.y>windowHeight/5){
            camera.y=windowHeight/5
         }
         if(camera.y<100){
            camera.y=100
         }
        camera.zoom = 3000 / dist(players[minXPlayer].guy.x, players[minYPlayer].guy.y, players[maxXPlayer].guy.x, players[maxYPlayer].guy.y)
        //horizontal camera adjust
        if (camera.zoom > 3) {
            camera.zoom = 3
        }
         if (camera.zoom < 2) {
             camera.zoom = 2
         }
//apple orb code
// // if(orbchance==20 && orbchance.length<1){
// orb.y=map(noise(orb.Yoff)*windowHeight,0,windowHeight,-1000,windowHeight/6)
// orb.x=map(noise(orb.Xoff)*windowWidth,0,windowWidth,windowWidth/990,windowWidth/3.5)
// orb.Xoff+=0.01
// orb.Yoff+=0.01
// orb.hit-=1         
//all player code
        for(let i = 0;i<players.length;i++){
            //players[i].guy.debug=true
            players[i].move()
            players[i].reset()
            players[i].gamepad.update()
            players[i].update(i)
            players[i].hurtboxUpdate()

            
  // Iterate through all players using a for loop
  for (let i = 0; i < players.length; i++) {
   
    // count how many players are alive
    if (players[i].lives > 0) {
      alivePlayers++;
      lastAlivePlayer = players[i]; 
    }
  }
  // Check if only one player is left alive
  if (alivePlayers === 1 || kb.pressed('r')) { 
    restartGame()
  }
  
            if(players[i].lives==0){
                //add death idle
            }          
           // orb.hit=0
            //make code able to jump on peoples heads and collisions 
            for(let w=0;w<hazard.length;w++){
                
              if(players[i].guy.colliding(hazard[w])){
                if(players[i].guy.x<hazard[w].x){
                    players[i].guy.vel.x+=-20
                }else{
                    players[i].guy.vel.x+=20
                }
                
                
                players[i].guy.vel.y=-5
                players[i].hurt = 5
            


            }  
            }
            
            for(let j = 0;j<players.length-1;j++){
                if(j<i){
                    if(players[i].floor.overlapping(players[j].roof)){
                        players[i].guy.air = false
                        players[i].downattack=false
                        players[i].guy.vel.y=-9
                    }
                    for(let k = 0;k<players[i].hurtbox.length;k++){
                        
                        if(players[i].hurtbox[k].collider.overlapping(players[j].guy)){
                            players[j].health+=round(players[i].hurtbox[k].damage*players[i].type.damagebuff*players[j].guy.block*players[j].type.shield)
                            players[j].guy.vel.x+=round(players[j].health*players[i].flip*players[j].guy.block*players[j].type.weight*players[i].type.knockback)
                            players[j].guy.vel.y=round(-(players[j].health*players[j].guy.block*players[j].type.weight*players[i].type.knockback)/1.5)
                            if(players[i].attackType != 'charge'){
                                players[i].hurtbox[k].collider.remove();
                                players[i].hurtbox.splice(k,1);
                            }
                            players[j].hurt = players[j].guy.vel.y*players[j].guy.block
                           // if(players[j].cooldown <= players[i].hurtbox[k].stun){
                           //     players[j].cooldown =  players[i].hurtbox[k].stun
                         //   }
                            break
                        }
                        // if(players[i].hurtbox[k].collider.overlapping(orb)&&orb.hit<0){
                        //     orb.health-=10
                        //     players[i].hurtbox[k].collider.remove()
                        //     players[i].hurtbox.splice(k,1);
                        //     orb.hit=20                            
                        //     break
                        // }
                    }
                }
                if(j>=i){
                    if(players[i].floor.overlapping(players[j+1].roof)){
                        players[i].guy.air = false
                        players[i].downattack=false
                        players[i].guy.vel.y=-9
                    }
                    for(let k = 0;k<players[i].hurtbox.length;k++){
                        if(players[i].hurtbox[k].collider.overlapping(players[j+1].guy)){
                            players[j+1].health+=round(players[i].hurtbox[k].damage*players[i].type.damagebuff*players[j+1].guy.block*players[j+1].type.shield)
                            players[j+1].guy.vel.x+=round(players[j+1].health*players[i].flip*players[j+1].guy.block*players[j+1].type.weight*players[i].type.knockback)
                            players[j+1].guy.vel.y=round(-(players[j+1].health*players[j+1].guy.block*players[j+1].type.weight*players[i].type.knockback)/1.5)
                            if(players[i].attackType != 'charge'){
                                players[i].hurtbox[k].collider.remove();
                                players[i].hurtbox.splice(k,1);
                            }
                            players[j+1].hurt = players[j+1].guy.vel.y*players[j+1].guy.block
                         //   if(players[j+1].cooldown <= players[i].hurtbox[k].stun){
                        //        players[j+1].cooldown =  players[i].hurtbox[k].stun
                          //  }
                            break
                        }
                        // if(players[i].hurtbox[k].collider.overlapping(orb)&&orb.hit<0){
                        //     orb.health-=10
                        //     players[i].hurtbox[k].collider.remove()
                        //     players[i].hurtbox.splice(k,1);
                        //     orb.hit=20
                        //     break
                        // }
                    }
                }
            }
            players[i].guy.rotationLock = true
            // if(orb.health<=0){
            //     orb.life=0
            //     players[i].special=true
            // }
            }
        }
        //animation set up
        anisetup+=1
        for(let i = 0;i<players.length;i++){        
            if(anisetup>20){
                players[i].Stock.ani.frame=players[i].lives 
                //players[i].guy.ani.frame
            }       
            players[i].healthBar.text=players[i].health+"%" 
            camera.off()
            players[i].Stock.draw()
            players[i].healthBar.draw()
            camera.on()               
            if(players[i].gamepad.previousState != null){
                //console.log(players[i].gamepad.hasChanged(players[i].gamepad.previousState)) 
        }
        
    }
   
}






//lots of mess in this area
class Player {
	constructor(_x, _y, _w, _h, player_) {
        this.x = _x;
        this.y = _y;
        this.w = _w
        this.h = _h     
        this.cooldown = 0
        this.jumpCooldown = 0
        this.floor = new Sprite(this.x + 20, this.y, this.w, this.h - 30)
        this.roof = new Sprite(this.x, this.y, this.w + 5, this.h - 45)
        this.guy = new Sprite(this.x, this.y, this.w, this.h)
        this.floor.color=color(1,1,1,0)
        this.roof.color=color(0,0,0,0)
        this.floor.stroke=color(0,0,0,0)
        this.roof.stroke=color(0,0,0,0)
        this.flip = 1
        this.guy.vel.x=0
        this.speedy=0
        this.downattack=false
		this.gamepad = new Controller(player_)
        this.health=0
        this.lives = 3
        this.jumpInit = 1
        this.jump = this.jumpInit
        this.air = true
        this.healthBar=new Sprite(250+2420*player_,windowHeight-150,500,250)
        this.healthBar.fill=(0,0,0,0)
        this.healthBar.text=this.health
        this.healthBar.textColor=(255,255,255)
        this.healthBar.textSize=130
        this.healthBar.collider="n"
        this.Stock = new Sprite(850+2420*player_,windowHeight-620,0,0)
        this.Stock.addAni('test','assets/stock.png',{frameSize: [128,128], frames: 4, frameDelay:0})
        this.Stock.anis.offset.y = 100
        this.Stock.frames=1
        this.Stock.scale=5
        this.Stock.collider='n'
        this.hurtbox = []
        this.attackType = 'none'
       // this.hurtbox.addAni('football','assets/football.png',{frameSize: [30,30], frames: 13, frameDelay:5})
        this.guy.addAni('ralphblock','assets/kralphblock.png',{frameSize:[34,38],frames:2,frameDelay:10})
        this.guy.addAni('ralphhit','assets/kralphhit.png',{frameSize:[37,37],frames:2,frameDelay:8})
        this.guy.addAni('ralphjump','assets/kralphjump.png',{frameSize:[37,37],frames:14,frameDelay:14})
        this.guy.addAni('ralphrun','assets/kralphrun.png',{frameSize:[38,38],frames:8,frameDelay:5})
        this.guy.addAni('ralphlight','assets/kralphpunch.png',{frameSize:[40,40],frames:4,frameDelay:8})
        this.guy.ani.offset.x=10
        this.guy.ani.offset.y=-100
        this.guy.addAni('ralphheavy','assets/kralphtackle.png',{frameSize:[37,37],frames:15,frameDelay:4})
        this.guy.addAni('ralphlightprojectile','assets/kralphlightprojectile.png',{frameSize:[52,37],frames:8,frameDelay:3})
        this.guy.ani.offset.x=10
        this.guy.addAni('ralphheavyprojectile','assets/kralphwheel.png',{frameSize:[37,37],frames:11,frameDelay:4})
        this.guy.addAni('ralphdown','assets/kralphstab.png',{frameSize:[37,37],frames:7,frameDelay:5})
        this.guy.addAni('ralphidle','assets/kralphIdle.png',{frameSize: [26,37], frames: 2, frameDelay:30})
        
      
       
      
    }

        
   





    hurtboxUpdate(){
        for(let i = 0; i<this.hurtbox.length; i++){
            this.hurtbox[i].update()
            if(this.hurtbox[i].life<=0){
                this.hurtbox[i].collider.remove()
                this.hurtbox.splice(i,1)
            }
        }
    }








    move() {
        if(this.floor.overlapping(floor)&&this.guy.vel.x!=0){
            this.guy.vel.x=lerp(this.guy.vel.x,0,0.05)
        }
        if(this.floor.overlapping(pfloor)&&this.guy.vel.x!=0){ 
            this.guy.vel.x=lerp(this.guy.vel.x,0,0.05)  
        }
    }

    respawn(){
        this.guy.y=20
        this.guy.x=random(200,1000)
        this.guy.vel.x = 0
        this.guy.vel.y = 0
        this.lives-=1
        this.guy.vel.y=0
        this.health=0
        this.attackType = 'none'
    }
   
    reset() {
        this.guy.bounciness = 0
        this.guy.friction = 0
        this.floor.collider = "n"
        this.roof.collider = 'n'
        this.guy.rotation=0
        
        if (this.floor.overlapping(currentRoom)) {
            this.jump = this.jumpInit
            this.air = false
            this.downattack =false
        }
    }



    update() {
        this.guy.ani.scale=4
        this.guy.ani.offset.y=-2
        this.guy.scale.x = (this.flip*abs(this.guy.scale.x))
            if(this.gamepad.leftStickY > 0.5 || this.guy.vel.y < 0 ){
                this.guy.overlaps(pfloor)
            }else{
                this.guy.collides(pfloor)
            }




            



            if ( this.lives>0) {
                this.guy.block=1
                
                if (this.cooldown<0) {
                    
                    if (this.gamepad.a && this.gamepad.leftStickY < 0.8 && this.gamepad.leftStickY > -0.8) {
                        this.type.light_attack(this)
                        this.guy.changeAni([this.type.light,this.type.idle])
                        this.guy.ani.frame=(0);
                    } else if (this.gamepad.b) {
                        this.type.heavy_attack(this)
                        this.guy.changeAni([this.type.heavy,this.type.idle])
                        this.guy.ani.frame=(0);
                    } else if (this.gamepad.rightBumper) {
                            this.guy.block=0
                        this.guy.color=random(255)
                        this.guy.changeAni(this.type.block)
                        this.guy.ani.frame=(0);
                        this.jumpCooldown = 10
                    } else if (this.gamepad.leftStickY <= -0.5 && this.air == false && this.gamepad.a) {
                        this.type.up_attack(this)
                        this.guy.ani.frame=(0);
                    } else if (this.gamepad.leftStickY >= 0.5 && this.gamepad.a) {
                        this.type.down_attack(this)
                        this.guy.changeAni(this.type.down)
                    } else if (this.gamepad.x) {
                        this.type.light_projectile(this)
                        this.guy.changeAni([this.type.lightprojectile,this.type.idle])
                        this.guy.ani.frame=(0);
                    } else if (this.gamepad.y) {
                        this.type.heavy_projectile(this)
                        this.guy.changeAni([this.type.heavyprojectile,this.type.idle])
                    } else if (this.gamepad.leftStickX >= 0.2 || (this.guy.vel.x>=0.2&&abs(this.gamepad.leftStickX)<0.2)) {
                        this.flip = 1
                        this.guy.changeAni(this.type.run)
                    } else if (this.gamepad.leftStickX <= -0.2 || (this.guy.vel.x<=-0.2&&abs(this.gamepad.leftStickX)<0.2)) {
                        this.flip = -1
                        this.guy.changeAni(this.type.run)
                    }else if(this.guy.vel.y<=-3&&this.jump<=this.jumpInit-1){
                        this.guy.changeAni(this.type.jump)
                        if(this.guy.ani.frame==5){
                        this.guy.ani.frame=4
                        }
                     
                        }else if(this.guy.vel.y>=0 &&this.jump>=this.jumpInit-1)  { 
                            this.guy.changeAni(this.type.jump)
                          
                            if(this.guy.ani.frame==10){
                            this.guy.ani.frame=9
                            }
                        }else if(this.floor.overlapping(currentRoom)&&this.jump<=this.jumpInit-1){
            
                        } else{
                        this.guy.changeAni(this.type.idle)
                        this.attackType = 'none'
                    }
                    if(this.jumpCooldown<0){
                        if (this.gamepad.up && this.jump >= 1) {
                            this.guy.changeAni(this.type.jump)
                            this.jump -= 1
                            this.jumpCooldown = 15
                            this.guy.vel.y = -15*this.type.yspeed
                            
                        }
                    }
                }
            }
            if(this.hurtbox[0] == null){
                this.attackType = 'none'
            }
            if(this.attackType == 'charge' && this.hurtbox[0] != null){
                this.guy.x = this.hurtbox[0].x
                this.hurtbox[0].yvel += maps.map[maps.roomNumber].gravity
               // this.hurtbox[0].y +=this.hurtbox[0].yvel
                this.guy.y = this.hurtbox[0].y
                this.guy.vel.y = 0
            }else if(this.attackType == 'none'){
                this.guy.vel.x = lerp(this.guy.vel.x,this.gamepad.leftStickX*20,0.2)*this.type.xspeed
                this.guy.vel.y += maps.map[maps.roomNumber].gravity
                this.guy.x+=this.guy.vel.x
                this.guy.y += this.guy.vel.y
            }

            this.floor.rotation = 0
            this.roof.rotation = 0
            this.cooldown -= 1
            this.jumpCooldown -= 1
            this.floor.y=this.guy.y+this.guy.height/2
            this.roof.y=this.guy.y-this.guy.height/2
            this.floor.x = this.guy.x
            this.roof.x = this.guy.x
            if (this.guy.y >= 2500 || this.guy.y <= -2200 || this.guy.x >= 5000 || this.guy.x <= -2500) {
                this.respawn()
            }
        }

}




function Character() {
    for(let i = 0;i<numberOfCharacters; i++){
 
        if (kb.released(' ') && Clicky.overlapping(character[i])) {
         
        if(i==0){			
            players[characterSelect-1].type=new testCharacter()
      
        }else if(i==1){			
            players[characterSelect-1].type=new Wirzba()
        }else if(i==2){			
            players[characterSelect-1].type=new Ralph()
        }else if(i==3){			
            players[characterSelect-1].type=new Greep()
        }else if(i==4){		
            players[characterSelect-1].type=new Baker()
        }else if(i==5){		
            players[characterSelect-1].type=new Anderson()
        }else if(i==6){		
            players[characterSelect-1].type=new Baldry()
        }else if(i==7){		
            players[characterSelect-1].type=new McMurray()
        }else if(i==8){	
            players[characterSelect-1].type=new Heseltine()
        }else if(i==9){
            players[characterSelect-1].type=new Rompain()  
        }
        characterSelect+=1
    }
    }
    if(characterSelect>players.length){
        currentRoom.removeAll()
        maps.loadRoom(maps.roomNumber)

        for(let i = 1; i < maps.numberOfMaps; i++){
            map[i].y -= 1000
        }




        for (let i = 0; i < numberOfCharacters; i++) {


            character[i].x = -1000000


        }
        start=true
    }
}

function mousePressed(){
    console.log(mouseX,mouseY,players[1].guy.x,players[1].guy.y,players)
}

function restartGame(){
    storeItem('lC',lightCooldown)
    storeItem('hC',heavyCooldown)
    storeItem('uC',upCooldown)
    storeItem('dC',downCooldown)
    storeItem('lPC',lightProjectileCooldown)
    storeItem('hPC',heavyProjectileCooldown)
    setTimeout(location.reload())
   //restarts program
}