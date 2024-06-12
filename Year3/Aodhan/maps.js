let win;

function mapLoad(){
    ground = new Group();
	ground.collider = 'static';
	ground.w = 50;
	ground.h = 20;
	ground.tile = '=';


	//Width 30 T | Height 10
	a1 = new Tiles(
		[
			'                              ',
			'                              ',
			'              ==              ',
			'        ===                   ',
			'                   =====      ',
			'        ====                  ',
			'                              ',
			'              ====            ',
			'                              ',
			'     ==========               ',

		],
		ground.w/2,
		ground.h/2,
		50,
		50
	)
	print('hi')
}