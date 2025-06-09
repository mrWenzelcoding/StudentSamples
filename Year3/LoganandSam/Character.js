// all characters are defined by()
//hurtboxes are defined by (xPosition,yPosition,width,height,xSpeed,ySpeed,damage,knockback,lifespan, cooldown)
//basic boi make his stats the base level
//dont make things too strong or week 1.1 is a 10% increase
class testCharacter{
    constructor(){
        this.xspeed=1
        this.yspeed=1
        this.width=1
        this.height=1.8
        this.shield=1
        this.damagebuff=1
        this.knockback=1
        this.weight=1
        this.block='ralphblock'
        this.idle='ralphidle'
        this.light='ralphlight'
        this.heavy='ralphheavy'
        this.lightprojectile='ralphlightprojectile'
        this.heavyprojectile='ralphheavyprojectile'
        this.down='ralphdown'
        this.run='ralphrun'
        this.hit='ralphhit'
        this.jump='ralphjump'
    }
    light_attack(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x + (60 * this_.flip),this_.guy.y,80,40,0,0,2*this.damagebuff,20*this.knockback,5, 10,'nothing',1,{})
        this_.cooldown = lightCooldown
    }
    heavy_attack(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x + (60 * this_.flip),this_.guy.y,130,40,20*this_.flip,0,2*this.damagebuff,-20*this.knockback,44,15,'nothing',1, {stun: 20})
        this_.cooldown = heavyCooldown
        this_.attackType = 'charge'
        console.log(this_)
    }
    up_attack(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x,this_.guy.y - 40,80,240,0,-18,2*this.damagebuff,20*this.knockback,50,1000,'nothing',1,{})
        this_.cooldown = upCooldown
        this_.attackType = 'charge'
    }
    down_attack(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x,this_.guy.y + 40,40,90,0,30,2*this.damagebuff,20*this.knockback,21,50,'nothing',1,{})
        this_.cooldown = downCooldown
        this_.attackType = 'charge'
    }
    light_projectile(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x + (60 * this_.flip),this_.guy.y,30,10,45*this_.flip, 0, 2*this.damagebuff,20*this.knockback,35, 120,'football',3, {stun: 20})
    
        this_.cooldown = lightProjectileCooldown
    }
    heavy_projectile(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x + (60 * this_.flip),this_.guy.y,20,20,30*this_.flip,0,2*this.damagebuff,20*this.knockback,50,240,'wheel',5, {stun: 20})
        this_.cooldown = heavyProjectileCooldown
        

//add new property to hurtboxes = scale (for animation)



    }
}

class Wenzel{
    constructor(){
        this.xspeed=1
        this.yspeed=1
        this.width=1
        this.height=1
        this.shield=1
        this.damagebuff=1
        this.knockback=1
        this.weight=1
    }
    light_attack(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x + (60 * this_.flip),this_.guy.y,80,40,0,0,2*this.damagebuff,20*this.knockback,5, 10)
        this_.cooldown = 3
    }
    heavy_attack(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x + (60 * this_.flip),this_.guy.y,200,40,0,0,2*this.damagebuff,20*this.knockback,5,15)
        this_.cooldown = 9
    }
    up_attack(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x,this_.guy.y - 40,40,180,0,-18,2*this.damagebuff,20*this.knockback,5,1000)
        this_.cooldown = 7
    }
    down_attack(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x,this_.guy.y + 40,40,90,0,this_.guy.vel.y,2*this.damagebuff,20*this.knockback,5,50)
        this_.cooldown = 7
    }
    light_projectile(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x + (60 * this_.flip),this_.guy.y,80,20,24*this_.flip, 0, 2*this.damagebuff,20*this.knockback,25, 120)
        this_.cooldown = 4
    }
    heavy_projectile(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x + (60 * this_.flip),this_.guy.y,80,40,12*this_.flip,0,2*this.damagebuff,20*this.knockback,50,240)
        this_.cooldown = 9
    }
    
}
//moves fast and hits fast
class Wirzba{
    constructor(){
        this.xspeed=1.3
        this.yspeed=1.3
        this.width=1
        this.height=1
        this.shield=0.6   
        this.damagebuff=0.9
        this.knockback=0.8
        this.weight=0.5
    }
    light_attack(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x + (60 * this_.flip),this_.guy.y,80,40,0,0,2*this.damagebuff,20*this.knockback,5,8)
    }
    heavy_attack(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x + (60 * this_.flip),this_.guy.y,200,40,0,0,2*this.damagebuff,20*this.knockback,5,15,14)
    }
    up_attack(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x,this_.guy.y - 40,40,180,0,-18,2*this.damagebuff,20*this.knockback,5,1000,14)
    }
    down_attack(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x,this_.guy.y + 40,40,90,0,this_.guy.vel.y,2*this.damagebuff,20*this.knockback,5,50,10)
    }
    light_projectile(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x + (60 * this_.flip),this_.guy.y,80,20,24*this_.flip, 0, 2*this.damagebuff,20*this.knockback,5, 120,8)
    }
    heavy_projectile(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x + (60 * this_.flip),this_.guy.y,80,40,12*this_.flip,0,2*this.damagebuff,20*this.knockback,5,240,18)
    }
    
}
//make attacks launch him forwards
class Ralph{
    constructor(){
        this.xspeed=0.8
        this.yspeed=0.8
        this.width=1
        this.height=1
        this.shield=1.3
        this.damagebuff=1.3
        this.knockback=1.3
        this.weight=1.4
    }
    light_attack(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x + (60 * this_.flip),this_.guy.y,80,40,0,0,2*this.damagebuff,20*this.knockback,5)
    }
    heavy_attack(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x + (60 * this_.flip),this_.guy.y,200,40,0,0,2*this.damagebuff,20*this.knockback,5,15)
    }
    up_attack(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x,this_.guy.y - 40,40,180,0,-18,2*this.damagebuff,20*this.knockback,5,1000)
    }
    down_attack(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x,this_.guy.y + 40,40,90,0,this_.guy.vel.y,2*this.damagebuff,20*this.knockback,5,50)
    }
    light_projectile(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x + (60 * this_.flip),this_.guy.y,80,20,24*this_.flip, 0, 2*this.damagebuff,20*this.knockback,5, 120)
    }
    heavy_projectile(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x + (60 * this_.flip),this_.guy.y,80,40,12*this_.flip,0,2*this.damagebuff,20*this.knockback,5,240)
    }
    
}
//attacks have large range
class Greep{
    constructor(){
        this.xspeed=0.9
        this.yspeed=0.9
        this.width=1
        this.height=1
        this.shield=1.2
        this.damagebuff=1.1
        this.knockback=1.5
        this.weight=1.4
    }
    light_attack(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x + (60 * this_.flip),this_.guy.y,80,40,0,0,2*this.damagebuff,20*this.knockback,5)
    }
    heavy_attack(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x + (60 * this_.flip),this_.guy.y,200,40,0,0,2*this.damagebuff,20*this.knockback,5,15)
    }
    up_attack(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x,this_.guy.y - 40,40,180,0,-18,2*this.damagebuff,20*this.knockback,5,1000)
    }
    down_attack(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x,this_.guy.y + 40,40,90,0,this_.guy.vel.y,2*this.damagebuff,20*this.knockback,5,50)
    }
    light_projectile(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x + (60 * this_.flip),this_.guy.y,80,20,24*this_.flip, 0, 2*this.damagebuff,20*this.knockback,5, 120)
    }
    heavy_projectile(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x + (60 * this_.flip),this_.guy.y,80,40,12*this_.flip,0,2*this.damagebuff,20*this.knockback,5,240)
    }
    
}
//buff his projectiles
class Baker{
    constructor(){
        this.xspeed=1
        this.yspeed=1
        this.width=1
        this.height=1
        this.shield=1
        this.damagebuff=1
        this.knockback=1
        this.weight=1
    }
    light_attack(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x + (60 * this_.flip),this_.guy.y,80,40,0,0,2*this.damagebuff,20*this.knockback,5)
    }
    heavy_attack(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x + (60 * this_.flip),this_.guy.y,200,40,0,0,2*this.damagebuff,20*this.knockback,5,15)
    }
    up_attack(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x,this_.guy.y - 40,40,180,0,-18,2*this.damagebuff,20*this.knockback,5,1000)
    }
    down_attack(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x,this_.guy.y + 40,40,90,0,this_.guy.vel.y,2*this.damagebuff,20*this.knockback,5,50)
    }
    light_projectile(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x + (60 * this_.flip),this_.guy.y,80,20,24*this_.flip, 0, 2*this.damagebuff,20*this.knockback,5, 120)
    }
    heavy_projectile(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x + (60 * this_.flip),this_.guy.y,80,40,12*this_.flip,0,2*this.damagebuff,20*this.knockback,5,240)
    }
    
}
//no recovery
class Anderson{
    constructor(){
        this.xspeed=1.1
        this.yspeed=1.1
        this.width=1
        this.height=1
        this.shield=0.7
        this.damagebuff=1.4
        this.knockback=0.7
        this.weight=1.2
    }
    light_attack(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x + (60 * this_.flip),this_.guy.y,80,40,0,0,2*this.damagebuff,20*this.knockback,5)
    }
    heavy_attack(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x + (60 * this_.flip),this_.guy.y,200,40,0,0,2*this.damagebuff,20*this.knockback,5,15)
    }
    up_attack(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x,this_.guy.y - 40,40,180,0,-18,2*this.damagebuff,20*this.knockback,5,1000)
    }
    down_attack(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x,this_.guy.y + 40,40,90,0,this_.guy.vel.y,2*this.damagebuff,20*this.knockback,5,50)
    }
    light_projectile(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x + (60 * this_.flip),this_.guy.y,80,20,24*this_.flip, 0, 2*this.damagebuff,20*this.knockback,5, 120)
    }
    heavy_projectile(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x + (60 * this_.flip),this_.guy.y,80,40,12*this_.flip,0,2*this.damagebuff,20*this.knockback,5,240)
    }
    
}
//weak but hits you far away
class Baldry{
    constructor(){
        this.xspeed=1
        this.yspeed=1
        this.width=1
        this.height=1
        this.shield=0.5
        this.damagebuff=0.6
        this.knockback=2
        this.weight=0.5
    }
    light_attack(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x + (60 * this_.flip),this_.guy.y,80,40,0,0,2*this.damagebuff,20*this.knockback,5)
    }
    heavy_attack(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x + (60 * this_.flip),this_.guy.y,200,40,0,0,2*this.damagebuff,20*this.knockback,5,15)
    }
    up_attack(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x,this_.guy.y - 40,40,180,0,-18,2*this.damagebuff,20*this.knockback,5,1000)
    }
    down_attack(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x,this_.guy.y + 40,40,90,0,this_.guy.vel.y,2*this.damagebuff,20*this.knockback,5,50)
    }
    light_projectile(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x + (60 * this_.flip),this_.guy.y,80,20,24*this_.flip, 0, 2*this.damagebuff,20*this.knockback,5, 120)
    }
    heavy_projectile(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x + (60 * this_.flip),this_.guy.y,80,40,12*this_.flip,0,2*this.damagebuff,20*this.knockback,5,240)
    }
    
}
//car naoises
class McMurray{
    constructor(){
        this.xspeed=1.1
        this.yspeed=1.1
        this.width=1
        this.height=1
        this.shield=0.7
        this.damagebuff=0.7
        this.knockback=0.7
        this.weight=0.7
    }
    light_attack(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x + (60 * this_.flip),this_.guy.y,80,40,0,0,2*this.damagebuff,20*this.knockback,5)
    }
    heavy_attack(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x + (60 * this_.flip),this_.guy.y,200,40,0,0,2*this.damagebuff,20*this.knockback,5,15)
    }
    up_attack(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x,this_.guy.y - 40,40,180,0,-18,2*this.damagebuff,20*this.knockback,5,1000)
    }
    down_attack(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x,this_.guy.y + 40,40,90,0,this_.guy.vel.y,2*this.damagebuff,20*this.knockback,5,50)
    }
    light_projectile(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x + (60 * this_.flip),this_.guy.y,80,20,24*this_.flip, 0, 2*this.damagebuff,20*this.knockback,5, 120)
    }
    heavy_projectile(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x + (60 * this_.flip),this_.guy.y,80,40,12*this_.flip,0,2*this.damagebuff,20*this.knockback,5,240)
    }
    
}
//make attacks slow 
class Heseltine{
    constructor(){
        this.xspeed=1
        this.yspeed=1
        this.width=1
        this.height=1
        this.shield=0.5
        this.jumpheight=1.3
        this.damagebuff=1.9
        this.knockback=1.1
        this.weight=0.8
    }
    light_attack(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x + (60 * this_.flip),this_.guy.y,80,40,0,0,2*this.damagebuff,20*this.knockback,5)
    }
    heavy_attack(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x + (60 * this_.flip),this_.guy.y,200,40,0,0,2*this.damagebuff,20*this.knockback,5,15)
    }
    up_attack(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x,this_.guy.y - 40,40,180,0,-18,2*this.damagebuff,20*this.knockback,5,1000)
    }
    down_attack(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x,this_.guy.y + 40,40,90,0,this_.guy.vel.y,2*this.damagebuff,20*this.knockback,5,50)
    }
    light_projectile(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x + (60 * this_.flip),this_.guy.y,80,20,24*this_.flip, 0, 2*this.damagebuff,20*this.knockback,5, 120)
    }
    heavy_projectile(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x + (60 * this_.flip),this_.guy.y,80,40,12*this_.flip,0,2*this.damagebuff,20*this.knockback,5,240)
    }
    
}

class Rompain{
    constructor(){
        this.xspeed=1.2
        this.yspeed=1.2
        this.width=1
        this.height=1
        this.shield=0.9
        this.damagebuff=0.9
        this.knockback=0.9
        this.weight=0.9
    }
    light_attack(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x + (60 * this_.flip),this_.guy.y,80,40,0,0,2*this.damagebuff,20*this.knockback,5)
    }
    heavy_attack(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x + (60 * this_.flip),this_.guy.y,200,40,0,0,2*this.damagebuff,20*this.knockback,5,15)
    }
    up_attack(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x,this_.guy.y - 40,40,180,0,-18,2*this.damagebuff,20*this.knockback,5,1000)
    }
    down_attack(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x,this_.guy.y + 40,40,90,0,this_.guy.vel.y,2*this.damagebuff,20*this.knockback,5,50)
    }
    light_projectile(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x + (60 * this_.flip),this_.guy.y,80,20,24*this_.flip, 0, 2*this.damagebuff,20*this.knockback,5, 120)
    }
    heavy_projectile(this_){
        this_.hurtbox[this_.hurtbox.length] = new Hurtbox(this_.guy.x + (60 * this_.flip),this_.guy.y,80,40,12*this_.flip,0,2*this.damagebuff,20*this.knockback,5,240)
    }
    
}


