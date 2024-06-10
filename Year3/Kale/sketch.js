//reload2s
//fix menu scale
//tank
let t
let r
let shc
let sht
let y
let u
let tc
let tt	
let b
let n
let shtw
let shcwp
let ttg
let tcg

//shoot
let f1, f2
let fire1, fire2
let ft1, ft2
let sh
let h
//miss
let th
//tiles
let sand
let cliff
let simg
let cimg
let l = false
let d = false
let load = false
let load1 = false
let loadt1 = 0
let loadt = 0
//maps
let m=[]
let map
//menu
let menu = true 
let tr
let mx, my
let sb
let st = false
let win = false
let wb 
let rse
let cr
let cs = true
let cm
//score 
let s1 = 0
let s2 = 0
let ss1
let ss2
let nl = false 
let nbr
let rs = false
let i = 0
let ming
//skins
let alt 
let alt2  
let ab 
let ab2 
let sg1, sg2, sg3, sg4, mg, sg5
let mp
//barel length
let bl1 = 30 
let bl2 = 45





function preload(){
	cm = random(0,2)
	if( cm >= 1){
	simg = loadImage('assets/snow.png')
	cimg = loadImage('assets/snowcliff.png')
	}else{
		simg = loadImage('assets/sand.png')
	cimg = loadImage('assets/cliff.png')
	}
	ming = loadImage('assets/menu5.png')

	sand =new Group()
	sand.collider = 'none'
	sand.img = simg
	sand.w=33
	sand.h=33
	sand.tile= '-'

	cliff = new Group()
	cliff.collider='static'
	cliff.img = cimg
	cliff.h=33
	cliff.w=33
	cliff.tile = '='

	//maps
	m=[
		[
			 '==================',
			 '=----------=-----=',
			 '=----------------=',
			 '=----------------=',
			 '=----==-----=----=',
			 '=----==----==----=',
			 '===---------=----=',
			 '=----------------=',
			 '=------===------==',
			 '=--------==----===',
			 '==--------------==',
			 '==------=--------=',
			 '=----=-------==--=',
			 '=----==------==--=',
			 '=---===----------=',
			 '=----------------=',
			 '=---------=------=',
			 '=================='
			],
			[
				'==================',
				'=----------------=',
				'=------------==--=',
				'=------------==--=',
				'===---==---------=',
				'==---------------=',
				'=----------------=',
				'=-----=-----====-=',
				'=---==-----------=',
				'=----------------=',
				'=--------=-------=',
				'=---------=------=',
				'=---=------=----==',
				'=---=----------===',
				'=--------=-------=',
				'=--------=-------=',
				'=--=---===-------=',
				'=================='
			   ],
			   [
				'==================',
				'=--------=-------=',
				'=-------==-------=',
				'=------=---=-----=',
				'=---=-----==-----=',
				'=----=----=------=',
				'=---------=------=',
				'=----------------=',
				'=-----===--------=',
				'=--------=-------=',
				'=-----------=----=',
				'===----------=---=',
				'=--------=------==',
				'=--------------===',
				'=------=---------=',
				'=------=---------=',
				'=----==----------=',
				'=================='
			   ],
			   [
				'==================',
				'=---------=------=',
				'=--------===-----=',
				'=---------=--=---=',
				'=-=----=----===--=',
				'====--===----=---=',
				'=-=----=--=------=',
				'=--------===-----=',
				'=---------=------=',
				'=---=----------=-=',
				'=--===--------====',
				'=---=--=-------=-=',
				'=-----===--------=',
				'=------=--=------=',
				'=---=----===-----=',
				'=--===----=------=',
				'=---=------------=',
				'=================='
			   ],
			   [
				'==================',
				'=---------==-----=',
				'=---------==-----=',
				'=--------=-------=',
				'====-------------=',
				'=--------=-------=',
				'=---=-----=------=',
				'=--=------=------=',
				'=--==--==-----=--=',
				'===------=---==--=',
				'==-------------===',
				'=-=------==-----==',
				'=--=----===-----==',
				'=--------=-------=',
				'=----------------=',
				'=----------------=',
				'=------==--------=',
				'=================='
			   ],
			   [
				'==================',
				'=----------=-----=',
				'=---------=------=',
				'=----------------=',
				'=-------=--------=',
				'=---------------==',
				'=---=------------=',
				'=------------=---=',
				'=------=---------=',
				'==-----------=---=',
				'=----------------=',
				'=------=---------=',
				'=------------=---=',
				'=---=------------=',
				'=---------=------=',
				'=----------------=',
				'=-------=--------=',
				'=================='
			   ],
			   [
				'==================',
				'=----------------=',
				'=----------------=',
				'=---------------==',
				'=-----==-----=-===',
				'=-------------====',
				'=--------------===',
				'=-------------==-=',
				'=-------=----=---=',
				'==------=--------=',
				'====----=--------=',
				'===------=-------=',
				'==--------=------=',
				'=----------------=',
				'=--------=-------=',
				'=-------=--------=',
				'=-----===--------=',
				'=================='
			   ],
			   [
				'==================',
				'=----------------=',
				'=----------------=',
				'=----------------=',
				'=----------------=',
				'=----------------=',
				'=----------------=',
				'=----------------=',
				'=----------------=',
				'=----------------=',
				'=----------------=',
				'=----------------=',
				'=----------------=',
				'=----------------=',
				'=----------------=',
				'=----------------=',
				'=----------------=',
				'=================='
			   ],
			   [
				'==================',
				'=----------------=',
				'=----------------=',
				'==-==-==-==-==---=',
				'=----------------=',
				'=----------------=',
				'=----------------=',
				'=----------------=',
				'=----=------=----=',
				'=----=------=----=',
				'=----------------=',
				'=----------------=',
				'=----------------=',
				'=----------------=',
				'=---==-==-==-==-==',
				'=----------------=',
				'=----------------=',
				'=================='
			   ],
			

]

	map = new Tiles(m[i]
		,
	sand.w/2,
	sand.h/2,
	33,
	33
	)

	//music
	mg = loadSound('assets/Battle of the Beasts.mp3')
	sg1 = loadSound('assets/Battlefield Symphony.mp3')
	sg2 = loadSound('assets/Steel and Thunder.mp3')
	sg3 = loadSound('assets/Steel Symphony.mp3')
	sg4 = loadSound('assets/Steel Thunder.mp3')
	sg5 = loadSound('assets/Clash of Steel.mp3')
	

	//firing
	f1 = new Sprite()
	f1.addAni('fire','assets/fire.png',{frameSize: [6,9], frames: 4, frameDelay: 3})
	f1.addAni('blank','assets/blank.png',{frameSize: [6,9], frames: 1, frameDelay: 8})
	f1.collider = 'none'
	f1.scale = 3

	f2 = new Sprite()
	f2.addAni('fire','assets/fire.png',{frameSize: [6,9], frames: 4, frameDelay: 3})
	f2.addAni('blank','assets/blank.png',{frameSize: [6,9], frames: 1, frameDelay: 8})
	f2.collider = 'none'
	f2.scale = 3

}
function setup(){
	
	new Canvas(594,594, 'fullscreen');
	shc = loadImage('assets/shc2.png')
	sht = loadImage('assets/sht5.png')
	tc = loadImage('assets/tc2.png')
	tt = loadImage('assets/ttg2.png')
	shcw = loadImage('assets/shcw1.png')
	shtw = loadImage('assets/shtw1.png')
	tcg = loadImage('assets/tcg1.png')
	ttg = loadImage('assets/ttg1.png')
	//sounds
	sh = loadSound('assets/shoot.wav')
	h = loadSound('assets/hit.mp3')
	th = loadSound('assets/thud.mp3')
	
//t1
t = new Sprite()

t.height = 39
t.width = 63

t.scale = 1



t.x = 71
t.y = 60

r = new Sprite()



r.scale = 1

r.collider = 'none'

//tiger
y = new Sprite()
y.x = width-71
y.y = height-60
y.height=39
y.width=63
y.scale = 1
y.rotation = 180


u = new Sprite()
u.scale = 1 
u.collider = 'none'
u.rotation = 180

b = new Sprite()
b.colour = ('yellow')
b.h = 5
b.w = 10
b.collider = 'none'
b.mass = 0.001
b.x = -10
b.y = -10

n = new Sprite()
n.colour = ('green')
n.h = 5
n.w = 10
n.collider = 'none'
n.mass = 0.001
n.x = -10
n.y = -10

//menu
tr = new Sprite()
tr. collider = 'none'
tr.scale = 1
tr.img = ming

ab = new Sprite()
ab.w = 50
ab.h = 50
alt = false
ab.collider = 'none'
ab2 = new Sprite()
ab2.w = 50
ab2.h = 50
ab.textColor = 'white'
ab2.textColor = 'grey'
ab2.collider = 'none'
alt2 = false

wb = new Sprite
wb.h = 40
wb.w = 300
wb.collider = 'none'
//tr.width = width-30
	//tr.height = height-30
	//tr.colour = 'olive' 

sb = new Sprite()
sb.w = 100
sb.h = 40
sb.collider = 'none'
	
nb = new Sprite 
nb.collider = 'none'
nb.h = 50
nb.w = 100

ss1 = new Sprite()
ss1.collider = 'none'
ss1.colour = 'grey'

ss2 = new Sprite()
ss2.collider = 'none'
ss2.colour = 'grey'


//music
mp = int(random(1,6))



}

function draw(){

	if(mp == 1){
		mg.play(0,1,1,0,86)
		mp = 8
	}
	if(mp == 2){
		sg1.play(0,1,1,0,104)
		mp = 8
	}
	if(mp == 3){
		sg2.play(0,1,1,0,79)
		mp = 8
	}
	if(mp == 4){
		sg3.play(0,1,1,0,70)
		mp = 8
	}
	if(mp == 5){
		sg4.play(0,1,1,0,75)
		mp = 8
	}
	if(mp == 6){
		sg5.play(0,1,1,0,144)
		mp = 8
	}
	if(mg.isPlaying() || sg1.isPlaying() || sg2.isPlaying() || sg3.isPlaying() || sg4.isPlaying() || sg5.isPlaying()){
	}else{
		mp = int(random(1,6))
	}
	
//tank1 controls
//turret1
r.x=t.x
r.y=t.y
u.x=y.x
u.y=y.y
//menu
tr.x = mx
tr.y = my
sb.x = mx
sb.y = my
cm.x = mx
cm.y = my+60

 //camos
 ab.x = mx-150
 ab.y = my-50
 ab.textSize = 10
 
 ab.text = 'CHANGE\nCAMO'
 
 ab2.x = mx+150
 ab2.y = my-50
 ab2.textSize = 10
 ab2.text = 'CHANGE\nCAMO'

 if(MouseOverlap(ab) && mouse.pressed()){
	if(alt == false){
		alt = true
		ab.textColor = 'green'
	}else{
		alt = false
		ab.textColor = 'white'
	}
 }
 if(alt == false){
	ab.color = 'green'
	t.img = shc
	r.img = sht
}else{
	ab.color = 'white'
	t.img = shcw
	r.img = shtw
}

if(MouseOverlap(ab2) && mouse.pressed()){
	if(alt2 == false){
		alt2 = true
		ab2.textColor = 'tan'
	}else{
		alt2 = false
		ab2.textColor = 'grey'
	}
 }
 if(alt2 == false){
	ab2.color = 'tan'
	y.img = tc
	u.img = tt
}else{
	ab2.color = 'grey'
	y.img = tcg
	u.img = ttg
	
}




 
if(menu == true){
	mx = width/2
	my = height/2
	allSprites.draw()
	sb.textSize = 30
	sb.text = 'START'
	 if(MouseOverlap(sb)){
sb.color = 'green' 
st = true
	 }else {
		sb.color = ('red')
		st = false
	 }
	 if(st == true && mouse.pressed()){
		menu = false
	 }
}
if(menu == false){
	mx = -width
	my = -height
	if(nl == false){
if(kb.pressing('w')){
	t.x+=cos(t.rotation)
	t.y+=sin(t.rotation)
}
if(kb.pressing('s')){
	t.x-=cos(t.rotation)
	t.y-=sin(t.rotation)
}



	if(kb.pressing('d')){
	t.rotation+=1
	r.rotation+=1
	}
	if(kb.pressing('a')){
	t.rotation-=1
	r.rotation-=1
	}


if(kb.pressing('e')){
	r.rotation+=1
}
if(kb.pressing('q')){
	r.rotation-=1
}

//tank2 controls
if(kb.pressing('i')){
	y.x+=cos(y.rotation)
	y.y+=sin(y.rotation)
}
if(kb.pressing('k')){
	y.x-=cos(y.rotation)
	y.y-=sin(y.rotation)
}
if(kb.pressing('l')){
	y.rotation+=1
	u.rotation+=1
	
}
if(kb.pressing('j')){
	y.rotation-=1
	u.rotation-=1
	
}
if(kb.pressing('o')){
	u.rotation+=1
}
if(kb.pressing('u')){
	u.rotation-=1
}
}
}

//shoot1
if(kb.pressed('p') && load1 == false || kb.pressed('y') && load1 == false){
	f2.x=u.x+(bl2+7)*cos(u.rotation)
	f2.y=u.y+(bl2+7)*sin(u.rotation)
	f2.rotation = u.rotation
	f2.changeAni(['fire','blank'])
	sh.play(0,1,1,0,7)
	n.x=u.x+bl2*cos(u.rotation)
	n.y=u.y+bl2*sin(u.rotation)
	n.vel.x=cos(u.rotation)*10
	n.vel.y=sin(u.rotation)*10
	n.rotation=u.rotation
	load1 = true
}
	//loading 
	if(load1 == true){
		loadt1+=1
	}
	if(loadt1 >= 90){
		load1 = false
		loadt1 = 0
	}
	//miss

	if(n.x >= 594 || n.x <= 0 || n.y >= 594 || n.y <= 0){
	n.x = -10
	n.y = -10
	n.vel.x = 0
	n.vel.y = 0	
	}

//hit
	if(n.overlaps(t) && cs == true){
	h.play(0,1,1,0,2)
	l = true
	n.x = -10
	n.y = -10
	n.vel.x = 0
	n.vel.y = 0	
	cs = false

	}
	//wall
	if(n.overlaps(cliff)){
		th.play(0,1,1,0,1)
		n.x = -10
		n.y = -10
		n.vel.x = 0
		n.vel.y = 0	
	
		}

	//losing
	textSize(50)
	//1
	//2
	if(l == true){
		nl = true
		s2 += 1
		ss2.color = 'blue'
		ss1.color = 'grey'
		l = false
	}

	

	//shoot
if(kb.pressed('r') && load == false){
	f1.x=r.x+(bl1+7)*cos(r.rotation)
	f1.y=r.y+(bl1+7)*sin(r.rotation)
	f1.rotation = r.rotation
	f1.changeAni(['fire','blank'])
	sh.play(0,1,1,0,7)
	b.x=r.x+bl1*cos(r.rotation)
	b.y=r.y+bl1*sin(r.rotation)
	b.vel.x=cos(r.rotation)*10
	b.vel.y=sin(r.rotation)*10
	b.rotation=r.rotation
	load = true
}
	//loading 
	if(load == true){
		loadt+=1
	}
	if(loadt >= 90){
		load = false
		loadt = 0
	}
	//miss

	if(b.x >= 594 || b.x <= 0 || b.y >= 594 || b.y <= 0){
	b.x = -10
	b.y = -10
	b.vel.x = 0
	b.vel.y = 0	
	}

//hit
	if(b.overlaps(y) && cs == true){
	h.play(0,1,1,0,2)
	d = true
	b.x = -10
	b.y = -10
	b.vel.x = 0
	b.vel.y = 0	
	cs = false

	}
	//wall
	if(b.overlaps(cliff)){
		th.play(0,1,1,0,1)
		b.x = -10
		b.y = -10
		b.vel.x = 0
		b.vel.y = 0	
	
		}

	//losing
	textSize(50)
	//1
	//2
	if(d == true){
		nl = true
		s1 += 1
		ss1.color = 'blue'
		ss2.color = 'grey'
		d = false
	}	
	//next level
	ss1.textSize = 40
	
	ss1.text = s1
	ss2.textSize = 40
	ss2.text = s2
	
	

	if(nl == true){
	nb.x = width/2
	nb.y = height/2
	ss1.x = 100
	ss1.y = 300
	ss2.x = width-100
	ss2.y = 300
	nb.textSize = 20
	nb.text = 'next level'
	if(MouseOverlap(nb)){
	nb.color = 'green'
	if(mouse.pressed()){
		rs = true
		nl = false
	}
 	}else{
		nb.color = 'red'
	}

	}else{
		ss1.x = -100
		ss2.x = -100
		nb.x = -100
	}
	if(rs == true && i == 8){
		win = true 
		rs = false

	}

	//win
	if(win == true){
		wb.x = width/2
		wb.y = height/2-50
		wb.textSize = 40
		if(s1 >= s2){
			wb.textColor = 'blue'
			wb.text = 'USA Wins'
		shc = loadImage('assets/pc.png')
		sht = loadImage('assets/pt.png')
		shcw = loadImage('assets/pct.png')
		shtw = loadImage('assets/ptt.png')
		tc = loadImage('assets/tc2.png')
		tt = loadImage('assets/ttg2.png')
		tcg = loadImage('assets/tcg1.png')
		ttg = loadImage('assets/ttg1.png')
		bl1 = 50
		}else{
			wb.textColor = 'red'
			wb.text = 'Germany wins'
			tc = loadImage('assets/ktc.png')
			tt = loadImage('assets/ktt.png')
			tcg = loadImage('assets/ktcw.png')
			ttg = loadImage('assets/kttw.png')
			shc = loadImage('assets/shc2.png')
			sht = loadImage('assets/sht5.png')
			shcw = loadImage('assets/shcw1.png')
			shtw = loadImage('assets/shtw1.png')
			bl2 = 50
		}

		if(MouseOverlap(wb)){
			wb.color = "green"
			if( mouse.pressed()){
				
				rse=true
			}
		}else{
			wb.color = 'grey'
		}
	}else{
		wb.x = -200
		wb.y = -200
	}

	//reset 
	if(rs == true && i != 8){
		map.removeAll()
		i+=1
		map = new Tiles(m[i]
			,
		sand.w/2,
		sand.h/2,
		33,
		33
		)
		map.layer = 0
		t.x = 71
		t.y = 60
		t.rotation = 0
		r.rotation = t.rotation
		y.x = width-71
		y.y = height-60
		y.rotation = 180
		u.rotation = y. rotation
		win = false
		rs = false
		cs = true

	}
	if(rse == true){
		map.removeAll()
		i=0
		map = new Tiles(m[i]
			,
		sand.w/2,
		sand.h/2,
		33,
		33
		)
		s1 = 0
		s2 = 0
		map.layer = 0
		t.x = 71
		t.y = 60
		t.rotation = 0
		r.rotation = t.rotation
		y.x = width-71
		y.y = height-60
		y.rotation = 180
		u.rotation = y. rotation
		win = false
		rs = false
		cs = true
		menu =  true
		rse = false

	}
	//cheats
	/*if(kb.pressed('0')){
		d = true
	}
	if(kb.pressed('9')){
		l = true
	}*/

}

function MouseOverlap(sprite){
return 	(mouseX >= sprite.x-sprite.w/2 && mouseX <= sprite.x+sprite.w/2 && mouseY >= sprite.y-sprite.h/2 && mouseY <= sprite.y+sprite.h/2)


}