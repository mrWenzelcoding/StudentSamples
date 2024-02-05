//Step 1: Create an array with 100's of falling rain drops with a blue color
//Step 2: Have the rain drops reappear back at the top. The larger the rain drop, the faster it should fall
//Step 3: Create an Umbrella. You will have the draw all the sprites and then cover the bottom half with a rectangle
//Step 4: Have the raindrops stick to the umbrella by removing bounciness and using the method .applyForceScaled(x,y)
//Extra +1: Have the raindrop only collide if they are a certain size. Have the particles appear behind the umbrella that don't collide
//NOTE Collider must be declared before velocity

let particles=[]
let umbrella
let uImg

function setup() {
	new Canvas()
	noStroke()
	//world.gravity.y=5
	
	
	//particles
	for(let i = 0; i<1000; i++){
		particles[i] = new Sprite()
		particles[i].d = random(1,7)
		if(particles[i].d>=5){
		particles[i].collider = 'dynamic'
		}else{
			particles[i].collider = 'none'
		}
		
		particles[i].x = random(canvas.w)
		particles[i].y = random(canvas.h)
		particles[i].vel.y = particles[i].d
		particles[i].bounciness = 0
		particles[i].color = color(0,155,255)
	}

		//Umbrella
	umbrella = new Sprite(canvas.w/2,canvas.h/2,400,"static")
	umbrella.bounciness = 0
}

function draw() {
	background(0,100);
	
	for(let i=0; i<particles.length; i++){
	if(particles[i].y > height){
		particles[i].y = 0
		particles[i].vel.x=0
		particles[i].vel.y = particles[i].d
		particles[i].x = random(canvas.w)
	}
		
		if(dist(particles[i].x,particles[i].y,umbrella.x,umbrella.y)<umbrella.d/2+20){
			particles[i].applyForceScaled(0,10)
		}
		
		if(particles[i].collider == "dynamic"){
			particles[i].draw()
		}
	 }
	umbrella.draw()

	//allSprites.draw()
	
	fill(0)
	rect(canvas.w/2-200,canvas.h/2,400,200)
	fill("brown")
	rect(canvas.w/2-6,canvas.h/2,12,200)
}