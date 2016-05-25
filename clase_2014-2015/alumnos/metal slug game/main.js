var GRAVITY = 18;
var LIMIT_SOLDIERS=35;
var LIMIT_COCHES=3;
(function () {
    // Create game instance and connect init, create and update methods
var state = {
    preload: preload,
    create: create,
    update: update, 
};

var parent = document.getElementById("screen");
var game = new Phaser.Game(0,0,Phaser.CANVAS,parent,state,false,false);
function preload() {
       game.load.atlasJSONArray('idle', 'assets/walk_up.png', 'assets/walk_up.json');
	   game.load.atlasJSONArray('walk', 'assets/walk_down.png', 'assets/walk_down.json');
	   game.load.atlasJSONArray('shoot', 'assets/shoot.png', 'assets/shoot.json');
	   game.load.atlasJSONArray('shoot_up', 'assets/shoot_up.png', 'assets/shoot_up.json');
	   game.load.atlasJSONArray('aim_up', 'assets/aim_up.png', 'assets/aim_up.json');
	   game.load.atlasJSONArray('idle_down', 'assets/idle.png', 'assets/idle.json');
	   game.load.atlasJSONArray('down', 'assets/down.png', 'assets/down.json');
	   game.load.atlasJSONArray('down_shoot', 'assets/down_shoot.png', 'assets/down_shoot.json');
	   game.load.atlasJSONArray('jump', 'assets/jump.png', 'assets/jump.json');
	   game.load.atlasJSONArray('jump_down', 'assets/jump_down.png', 'assets/jump_down.json');
	   game.load.atlasJSONArray('soldier_die', 'assets/soldier_die.png', 'assets/soldier_die.json');
	   game.load.atlasJSONArray('soldier_die_run', 'assets/soldier_die_run.png', 'assets/soldier_die_run.json');
	   game.load.atlasJSONArray('soldier_move', 'assets/soldier_move.png', 'assets/soldier_move.json');
	   game.load.atlasJSONArray('scared_run', 'assets/soldier_run_scared.png', 'assets/soldier_run_scared.json');
	   game.load.atlasJSONArray('scared', 'assets/soldier_scared.png', 'assets/soldier_scared.json');
	   game.load.atlasJSONArray('soldier_shoot', 'assets/soldier_shoot.png', 'assets/soldier_shoot.json');
	   game.load.atlasJSONArray('gracioso', 'assets/gracioso.png', 'assets/gracioso.json');
	   game.load.image('map','assets/map1.png');
	   game.load.image('bullet','assets/bullet.png');
	   game.load.image('soldier','assets/idle_soldier.png');
	   game.load.image('sangre','assets/sangre.png');
	   game.load.image('coche','assets/car.png');
	   game.load.atlasJSONArray('coche_roto', 'assets/coche_roto.png', 'assets/coche_roto.json');
	   game.load.atlasJSONArray('die', 'assets/die.png', 'assets/die.json');
	   game.load.atlasJSONArray('heli', 'assets/heli.png', 'assets/heli.json');
	   game.load.atlasJSONArray('explosion', 'assets/explode.png', 'assets/explode.json');
	   game.load.image('bomb','assets/bomb.png');
	   game.load.audio('main','assets/audio/main.ogg')

}

var gameStarted,
	player_top,
	player_bot,
	estado,
	SPEED,
	jump,
	jumpy,
	flipped,
	operations,
	soldierback,
	score,
	scoreText,
	Lifes,
	nodamage,
	temp;

function create() {
/*--------------------------------Dimesiones del Mundo------------------------------------*/
    operations=Phaser.Math;
    screenWidth = 800/*parent.clientWidth > window.innerWidth ? window.innerWidth : parent.clientWidth*/;
    screenHeight = 600/*parent.clientHeight > window.innerHeight ? window.innerHeight : parent.clientHeight*/;
	game.world.width =  screenWidth;
    game.world.height = screenHeight;
    // Draw bg
	bgtile = game.add.tileSprite(0, 0, game.cache.getImage('map').width, game.world.height, 'map');
	bgtile.tileScale.setTo(1,2.7);
	game.world.setBounds(0, 0,bgtile.width, bgtile.height);
	camara = game.camera;
	//camara.bounds = new Phaser.Rectangle(0,0, bgtile.width-screenWidth, bgtile.height);
	camara.setSize(screenWidth,screenHeight);
	ground=game.add.group();
	inv =ground.create(0,425);
	inv.width=bgtile.width;
	inv.body.immovable=true;
	inv =ground.create(0,0);
	inv.width=2;
	inv.height=screenHeight;
	inv.body.immovable=true;
	inv =ground.create(bgtile.width-2,0);
	inv.width=2;
	inv.height=screenHeight;
	inv.body.immovable=true;


    /*--------------------------------Añadir Grupos-----------------------------------*/
   groupShoot=new Array();
   groupShootEnemy=new Array();
   groupShootEnemyLeft=new Array();
   groupShootLeft=new Array();
   groupShootUp=new Array();
   canShoot=new Array();
   canMove=new Array();
   typeOfSoldier=new Array();
   canRun=new Array();
   player=game.add.group();
   playerAll=game.add.group();
   Enemys=game.add.group();
   shoots=game.add.group();
   shootsEnemys=game.add.group();
   coches=game.add.group();
   heli=game.add.group();
   bombs=game.add.group();
    /*--------------------------------Añadir Personaje------------------------------------*/
	player_top = game.add.sprite(150, screenWidth /2, 'idle');
  	player_top.anchor.setTo(0.5,1);
	player_top.scale.setTo(1.8, 1.8);	
	player_top.body.immovable=true;	
	
	player_bot = game.add.sprite(player_top.x-5,player_top.y-5, 'idle_down');
	player_bot.scale.setTo(1.8, 1.8);
    player_bot.inputEnabled = false;
	player_bot.anchor.setTo(0.5,0);
	player_bot.body.immovable=true;
	
	drag = game.add.sprite(player_bot.x, player_top.y, 'down');
	drag.anchor.setTo(0.5,0);
	drag.scale.setTo(1.8, 1.8);
	drag.visible=false;
	
	player_die = game.add.sprite(150, screenWidth /2, 'die');
	player_die.anchor.setTo(0.5,0.5);
	player_die.scale.setTo(1.8, 1.8);
	player_die.visible=false;
	player_die.inputEnabled = true;
    player.add(player_top);
	player.add(player_bot);
	playerAll.add(player);
	playerAll.add(drag);
	playerAll.add(player_die);
    // Add sounds
    //flapSnd = game.add.audio('flap');
	Snd = game.add.audio('main');
    // Add controls
	KeyD = game.input.keyboard.addKey(Phaser.Keyboard.D);
	KeyS = game.input.keyboard.addKey(Phaser.Keyboard.S);
	Left = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
	Right = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
	Up = game.input.keyboard.addKey(Phaser.Keyboard.UP);
	Down = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
	Right.onDown.add(function(){
		if(flipped){
			flipped=false;
			player_top.anchor.setTo(0.5,1);
			player_top.scale.x *= -1;
			player_bot.scale.x *= -1;
			drag.scale.x *= -1;
		}
			move(player_bot,"walk",5);
		if(estado!='die')	
			if(estado!="drag")	
				SPEED=3;
			else
				SPEED=1;	
		},this);
	Right.onUp.add(function(){
			move(player_bot,"idle_down",5);
			SPEED=0;
		},this);
	Up.onUp.add(function(){				
			move(player_top,"idle",5);
			if(estado=="aim_up")
				estado="idle";
		},this);		
	Up.onDown.add(function(){
			move(player_top,"aim_up",5);
			if(estado=="idle")
				estado="aim_up";
		},this);	
	Left.onUp.add(function(){
			move(player_bot,"idle_down",5);
			SPEED=0;
		},this);			
	Left.onDown.add(function(){
		if(!flipped){
			flipped=true;
			player_top.anchor.setTo(0.3,1);
			player_top.scale.x *= -1;
			player_bot.scale.x *= -1;
			drag.scale.x *= -1;
		}
			move(player_bot,"walk",5);
		if(estado!='die')	
			if(estado!="drag")	
				SPEED=-3;
			else
				SPEED=-1;	
		},this);
	Down.onUp.add(function(){
			if(estado=="drag"){
				estado="idle";
				player.visible=true;
				drag.visible=false;
			}
		},this);			
	Down.onDown.add(function(){
			if(estado=="idle"){
				estado="drag";
				player.visible=false;
				drag.visible=true;
			}
		},this);	
	KeyS.onDown.add(function(){
		if(estado=="idle"){
		if(flipped)
		player_top.anchor.setTo(0.5,0.9);
		else	
		player_top.anchor.setTo(0.7,0.9);
		estado="jump";
		jumpy=-1;
		player_top.loadTexture("jump");
		player_top.animations.add("jump");
		player_top.animations.play("jump",10,false);
		player_bot.loadTexture("jump_down");
		player_bot.animations.add("jump_down");
		player_bot.animations.play("jump_down",10,false);
		player_bot.events.onAnimationComplete.add(function(sprite){
											jumpy=1;
								},this);
		}
	},this);
	KeyS.onUp.add(function(){
	},this);	
	KeyD.onUp.add(function(){
	},this);
	KeyD.onDown.add(function(){
			switch(estado){	
					case "jump":
					case "idle":
								if(flipped)
								player_top.anchor.setTo(0.2,1);
								else
								player_top.anchor.setTo(0.3,1);
								player_top.loadTexture('shoot');
								player_top.animations.add('shoot');
								player_top.animations.play('shoot',15,false);
								bullet(player_top,-90,false);
								player_top.events.onAnimationComplete.add(function(sprite){
								if(estado!="jump")	
									if(flipped)
										player_top.anchor.setTo(0.3,1);
									else	
										player_top.anchor.setTo(0.5,1);
									move(sprite,"idle",5);
								},this);
								break;
					case "drag":
								drag.loadTexture('down_shoot');
								drag.animations.add('down_shoot');
								drag.animations.play('down_shoot',15,false);
								bullet(drag,-90,false);
								drag.events.onAnimationComplete.add(function(sprite){
											move(sprite,"down",5);
								},this);
								break;
								
					case "aim_up":
					if(flipped)
					player_top.anchor.setTo(0.3,1);
					else
					player_top.anchor.setTo(0.5,1); 
					player_top.loadTexture('shoot_up');
					player_top.animations.add('shoot_up');
					player_top.animations.play('shoot_up',15,false);
					bullet(player_top,180,true);
					player_top.events.onAnimationComplete.add(function(sprite){
							if(flipped)
							move(sprite,"aim_up",5);
						},this);
					break;
				}
	},this);	
/*---------------------------------Textos-------------------------------------------*/
lifesText = game.add.text(
        screenWidth / 2,
        20,
        "Lifes: 5",
        {
            font: '32px Arial',
            fill: '#fff',
            stroke: '#430',
            strokeThickness: 8,
            align: 'center'
        }
    );
lifesText.fixedToCamera=true;	
 scoreText = game.add.text(
        screenWidth -100,
        75,
        "Score: "+score,
        {
            font: '34px Arial',
            fill: '#fff',
            stroke: '#430',
            strokeThickness: 10,
            align: 'center'
        }
    );
	scoreText.fixedToCamera=true;		
	scoreText.anchor.setTo(0.5, 0.5);
	 instText = game.add.text(
        screenWidth / 2,
        screenHeight /2,
        "Game Over\nPulsa el Personaje Para Reintentar",
        {
            font: '16px Arial',
            fill: '#fff',
            stroke: '#430',
            strokeThickness: 8,
            align: 'center'
        }
    );
    instText.anchor.setTo(0.5, 0.5);
	instText.fixedToCamera=true;
	// RESET!
    reset();
	start();
}
    
/*--------------------------------PANTALLA DE INICIO------------------------------------*/
    
function reset() {
	estado="idle";
	player_top.animations.add('idle');
	player_top.inputEnabled = true;
	player_top.animations.play('idle',5,true);
	player_bot.animations.add('idle_down');
	player_bot.animations.play('idle_down',5,false);
	drag.animations.add('drag');
	drag.animations.play('drag',5,true);
	player_die.animations.add('die');
    gameStarted = false;
    gameOver = false;
	SPEED=0;
	jump=false;
	flipped=false;
	soldierback=true;
	score=0;
	Lifes=5;
	nodamage=0;
	temp = 0;
   groupShoot=new Array();
   groupShootEnemy=new Array();
   groupShootEnemyLeft=new Array();
   groupShootLeft=new Array();
   groupShootUp=new Array();
   canShoot=new Array();
   canMove=new Array();
   typeOfSoldier=new Array();
   canRun=new Array();
   Enemys.removeAll();
   shoots.removeAll();
   shootsEnemys.removeAll();
   coches.removeAll();
   heli.removeAll();
   bombs.removeAll();
	/*--------------------------Añadir Enemigos----------------------------------------*/			
	for(i=0;i<LIMIT_COCHES;i++)
			addCar();
	for(i=0;i<LIMIT_SOLDIERS;i++)
			newSoldier();		
	camara.setPosition(0,0);		
	player_top.reset(screenHeight / 2, screenWidth /2);	
	player_bot.reset(player_top.x-5,player_top.y-5);	
	drag.reset(player_bot.x, player_top.y);
	player_die.reset(screenHeight / 2, screenWidth /2);
	player.visible=true;
	player_die.visible=false;
	drag.visible=false;
	temp =0;	
	temp2=0;
	temp3=60000;
	temp4=1500
	Snd.stop();
	instText.renderable=false;
	start();								
}
    
/*--------------------------------FIN PANTALLA DE INICIO------------------------------------*/

    function start() {
/*--------------------------------Mostrar Puntuación------------------------------------*/
    // START!
    gameStarted = true;
	Snd.play('',0,1,true);
}
  


/*-------------------------------- ACTUALIZAR JUEGO ------------------------------------*/
function update() {
if(gameStarted){	
	if(!gameOver){
			if(nodamage<=game.time.time){
				player_top.alive=true;
				playerAll.forEach(function(obj){
							obj.alpha=1
						}
					);
			}else{
					playerAll.forEach(function(obj){
						if(obj.alpha==1)
							obj.alpha=0.5;
						else	
							obj.alpha=1
						}
					);
				}
			if(estado!="drag" && player_top.alive	){
				game.physics.collide(shootsEnemys,player,setGameover);
			}
			if(player_top.alive){
				game.physics.collide(bombs,playerAll,setGameover);
			}	
			game.physics.collide(shoots,Enemys,setDie);
			game.physics.collide(player_top,ground,stopP);
			game.physics.collide(ground,coches);
			game.physics.collide(shoots,coches,updateCar);
			game.physics.collide(playerAll,coches);
			game.physics.collide(heli,shoots,destroyHeli);
			game.physics.collide(bombs,ground,explode);
			scoreText.setText("Score: "+score);
			player_top.bringToTop();
			for(i=0;i<groupShootEnemy.length;i++)
				groupShootEnemy[i].x+=10;
			for(i=0;i<groupShootEnemyLeft.length;i++)
				groupShootEnemyLeft[i].x-=10;
			for(i=0;i<groupShootLeft.length;i++)
				groupShootLeft[i].x-=10;
			for(i=0;i<groupShoot.length;i++)
				groupShoot[i].x+=10;
			for(i=0;i<groupShootUp.length;i++)	
				groupShootUp[i].y-=10;
			Enemys.forEachAlive(function(obj){ updateSoldier(obj);});
			heli.forEachAlive(function(obj){ updateHeli(obj);});
			playerAll.x+=SPEED;
			camara.x+=SPEED;
			if(estado=="jump"){
						playerAll.y+=jumpy;
						if(playerAll.y==0){
							estado="idle";
							if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT) || game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
								move(player_bot,"walk",5);
							else
								move(player_bot,"idle_down",5);
							move(player_top,"idle",5);
							if(flipped)
							player_top.anchor.setTo(0.3,1);
							else
							player_top.anchor.setTo(0.5,1);
						}
			}
			if(game.time.time>temp3){
				temp3+=game.time.time;
				addHeli();			
				}
			if(game.time.time>temp4){
				temp4+=game.time.time;
				newSoldier();			
				}	
		}else{
			    instText.renderable = true;
				player_die.events.onInputDown.addOnce(reset);
				Snd.stop();
				}
		
	}
}
function stopP(){
		SPEED=0;
	}
function explode(obj1,obj2){
		if(obj1.inWorld){
			explosion = game.add.sprite(obj1.x,obj1.y,'explosion');
			explosion.anchor.setTo(0.5,0.5);
			explosion.scale.setTo(1.8,1.8);
			explosion.animations.add('bumb');
			explosion.animations.play('bumb',15,false);
			explosion.events.onAnimationComplete.add(function(sprite){
					sprite.kill();
				}
			,this);
			obj1.kill();
		}else
			obj1.kill();
		
	}
function bullet(sprite,angulo,up){
	if(estado!="aim_up"){
		if(!flipped){
			if(estado!="drag")
				bala = game.add.sprite(playerAll.x+sprite.x+sprite.width/2,playerAll.y+sprite.y-(sprite.height /2),'bullet');
			else
				bala = game.add.sprite(playerAll.x+sprite.x+sprite.width/2,sprite.y+(sprite.height /2),'bullet');	
			groupShoot.push(bala);
		}
		else{
			angulo*=-1;
			if(estado!="drag")
				bala = game.add.sprite((playerAll.x+sprite.x+sprite.width/2)*1,playerAll.y+sprite.y-(sprite.height /2),'bullet');	
			else
				bala = game.add.sprite((playerAll.x+sprite.x+sprite.width/2)*1,sprite.y+(sprite.height /2)-10,'bullet');		
			groupShootLeft.push(bala);
			}
	}
	else{
		if(flipped){
		bala = game.add.sprite(playerAll.x+sprite.x,playerAll.y+sprite.y-(sprite.height),'bullet');
		}
		else
		bala = game.add.sprite(playerAll.x+sprite.x+(sprite.width /2),playerAll.y+sprite.y-(sprite.height),'bullet');
		groupShootUp.push(bala);
		}
	bala.angle = angulo;
	bala.lifespan=2000;
	shoots.add(bala);
}
function move(sprite,key,speed){
	if(estado!="jump"){
			sprite.loadTexture(key);
			sprite.animations.add(key);
			sprite.animations.play(key,speed,true);
		}
	}
function setGameover(obj1, obj2){
		obj1.kill();
		SPEED=0;
		estado="die";
		sangre=game.add.sprite(obj1.x,obj1.y-15,'sangre');
		sangre.lifespan=250;
		player.visible=false;
		player_die.visible=true;
		player_die.animations.play('die',5,false);
		player_die.events.onAnimationComplete.add(function(sprite){
				if(Lifes>0){
					player_die.visible=false;
					player.visible=true;
					player_top.animations.play('idle',5,true);
					estado="idle";
					Lifes--;
					lifesText.setText("Lifes: "+Lifes);
				}
			}
		,this);
		if(Lifes>0){
				nodamage=game.time.time+12000;
				player_top.alive=false;
			}
		else{
				gameOver=true;
			}	
}
function setDie(obj1, obj2){
		score+=20;
		sangre=game.add.sprite(obj1.x+15,obj1.y-15,'sangre')
		obj1.alive=false;
		obj2.alive=false;
		obj1.kill();
		sangre.lifespan=250;
		obj2.loadTexture('soldier_die');
		obj2.y+=20;
		obj2.animations.add('soldier_die');
		obj2.animations.play('soldier_die',15,false);
		obj2.events.onAnimationComplete.add(function(sprite){
				sprite.kill();
			},this);	
		soldierback=true;
	}	
function newSoldier(){
		var spawn;
		var grav
		var type=Math.round(Math.random()*3);
		switch(type){
				case 3:
				case 1: type="normal"; break;
				case 2:	type="scared"; break;
				case 0:	type="gracioso"; break;
			}
		if(Math.round(Math.random()*1) && type=="normal"){
			spawn=game.rnd.integerInRange(camara.x-150,camara.x);
			//soldierback=false;
			grav=false;
			canMove.push(true);
		}
		else{	
			spawn=game.rnd.integerInRange(screenWidth,bgtile.width-screenWidth)
			grav = false;
			canMove.push(Math.round(Math.random()));
		}
		var soldier=game.add.sprite(spawn,400-player_top.height+10,'soldier');
		soldier.animations.name = 'soldier';
		soldier.body.collideWorldBounds = true;
		soldier.scale.setTo(1.8,1.8);
		if(grav)
		soldier.body.gravity.y = GRAVITY;
		if(spawn<playerAll.x+player_top.x)
			soldier.scale.x*=-1;
		Enemys.add(soldier);
		canShoot.push(true);
		typeOfSoldier.push(type);
		canRun.push(false);
	}
function updateSoldier(sprite){
var	num=Enemys.getIndex(sprite);
var angulo;
var bala;
var anchoSprite=Math.abs(sprite.width);
var distanceOfPlayer=Math.abs(operations.distance(sprite.x,sprite.y,playerAll.x+player_top.x,playerAll.y+player_top.y));
var camaraShows = camara.width /2;
var distance=camara.x+playerAll.x+anchoSprite;
switch(typeOfSoldier[num]){
		case "gracioso":
			if(sprite.animations.name!='gracioso'){
						sprite.loadTexture('gracioso');
						sprite.animations.add('gracioso');
						sprite.animations.name='gracioso';
						sprite.animations.play('gracioso',8,true);
			}
					break;
		case "scared":
			if(sprite.animations.name!='scared'){
						sprite.loadTexture('scared');
						sprite.animations.add('scared');
						sprite.animations.name='scared';
			}
			if(canRun[num]){
				if(sprite.scale.x>0)
				sprite.x+=5;
				else
				sprite.x-=5;
			}
			else	
			if(distanceOfPlayer<=camaraShows){
				sprite.animations.play('scared',4,false);
				sprite.events.onAnimationComplete.add(function(sprite){
						sprite.loadTexture('scared_run');
						sprite.animations.add('scared_run');
						sprite.animations.play('scared_run',8,true);
						canRun[Enemys.getIndex(sprite)]=true;
					}
				,this);
			}
					break;
		case "normal":
			if(distanceOfPlayer<=camaraShows && sprite.x>camara.x+25){
					if(canShoot[num]){	
						canShoot[num]=false;
						if(sprite.animations.name!='soldier_shoot'){
							sprite.loadTexture('soldier_shoot');
							sprite.animations.add('soldier_shoot');
							sprite.animations.name='soldier_shoot';
						}
						sprite.animations.play('soldier_shoot',8,false);
						
						if(sprite.scale.x<0+sprite.width*-1)
							{
								bala = game.add.sprite(sprite.x,sprite.y+(sprite.height/2)-18,'bullet');
								angulo=-90;
								groupShootEnemy.push(bala);
							}
						else
							{
								bala = game.add.sprite(sprite.x+(sprite.width /2),sprite.y+(sprite.height/2)-18,'bullet');
								angulo=90;
								groupShootEnemyLeft.push(bala);
							}
						bala.angle = angulo;
						bala.lifespan=1500;
						shootsEnemys.add(bala);	
						sprite.events.onAnimationComplete.add(function(){
							canShoot[Enemys.getIndex(sprite)]=true;
							},this);
							
					}
			}
			else{ 
					if(canMove[num]){
						if(sprite.animations.name!='soldier_move'){
							sprite.loadTexture('soldier_move');
							sprite.animations.add('soldier_move');
							sprite.animations.name="soldier_move";
						}
						sprite.animations.play('soldier_move',8,false);
						if(sprite.x<playerAll.x+player_top.x){
							sprite.x+=3;
						}
						else{
							sprite.x-=3;
						}
					}
					
				}
	}
}

function addCar(){
		var spawn=Math.random()*(bgtile.width-screenWidth);
		spawn+=screenWidth;
		spawn=spawn>=bgtile.width ? bgtile.width-screenWidth : spawn;
		var coche=game.add.sprite(spawn,400,'coche');
		coche.health=2000;
		coche.body.gravity.y = GRAVITY;
		coche.scale.setTo(1.8,1.8);
		coches.add(coche);
		coche.body.immovable=true;
	}
function updateCar(obj1,obj2){
		obj1.kill();
		score+=5;
		if(obj2.health<=200){
			obj2.loadTexture('coche_roto');
			obj2.animations.add('coche');
			obj2.animations.play('coche',5,false);
			obj2.events.onAnimationComplete.add(function(sprite){
					sprite.kill();
				}
			,this);
		}
			obj2.damage(200);
	}
function addHeli(){
		var sprite=game.add.sprite(400,150,'heli');
		sprite.animations.add('heli');
		sprite.animations.play('heli',5,true);
		sprite.health=6000;
		sprite.anchor.setTo(0.5,1);
		sprite.scale.setTo(1.8,1.8);
		sprite.scale.x*=-1;
		heli.add(sprite);
		sprite.body.immovable=true;
	}
function destroyHeli(obj1,obj2){
		obj2.kill();
		score+=5;
		if(obj1.health<=200){
			sprite=game.add.sprite(obj1.x,obj1.y,'explosion')
			sprite.scale.setTo(1.8,1.8);
			sprite.anchor.setTo(0.5,1);
			sprite.animations.add('explosion');
			sprite.animations.play('explosion',5,false);
			sprite.events.onAnimationComplete.add(function(sprite){
					sprite.kill();
				}
			,this);
		}
			obj1.damage(200);
	}
function updateHeli(sprite){
		var position=playerAll.x+player_top.x;
		if((sprite.x>position-10 && sprite.x<position+10) && temp2<game.time.time){
			if(bombs.countLiving() < 4 && temp+500<game.time.time){
				temp = game.time.time;
				bomb = bombs.create(sprite.x,sprite.y,'bomb');
				bomb.anchor.setTo(0.5,0);
				bomb.scale.setTo(1.8,1.8);
				bomb.body.gravity.y=100;
				if(bombs.countLiving()==4)
				temp2=game.time.time+3500;
			}
		}
		else{
				if(temp2<game.time.time){
					if(sprite.x<position)
					{
						sprite.x+=8;
					}
					else{
						sprite.x-=8;	
					}
				}
			}
	}	
})();
