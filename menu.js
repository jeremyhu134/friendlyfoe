class MenuScene extends Phaser.Scene {
    constructor() {
		super({ key: 'MenuScene' })
    }

    preload(){
        //this.load.image('menuBackground','gameimages/menuBackground.png');
        this.load.spritesheet('menuBackground','gameimages/menuBackground.png',{frameWidth: 1000,frameHeight:600});
        this.load.image('gameTitle','gameimages/gameTitle.png');
        this.load.image('newGameButton','gameimages/newGameButton.png');
        this.load.image('continueButton','gameimages/continueButton.png');
        this.load.image('mainMenuButton','gameimages/mainMenuButton.png');
        this.load.image('settingsButton','gameimages/settingsButton.png');
        this.load.image('settingsBackground','gameimages/settingsBackground.png');
        this.load.image('settingsXButton','gameimages/settingsXButton.png');
        
        this.load.spritesheet('bruceCharacter','gameimages/bruceCharacter.png',{frameWidth: 160,frameHeight:350});
        this.load.spritesheet('joeCharacter','gameimages/joeCharacter.png',{frameWidth: 160,frameHeight:330});
        this.load.image('textBox','gameimages/textBox.png');
    }
    
    create() {
        this.cameras.main.setSize(1000, 600);
        gameState.globalScene = this;
        gameState.sceneName = 'MenuScene';
        gameState.cursors = this.input.keyboard.createCursorKeys();
        gameState.keys = this.input.keyboard.addKeys('W,S,A,D,R,SPACE,SHIFT');
        
        var menuBackground = this.add.sprite(0,0,'menuBackground').setOrigin(0,0);
        this.anims.create({
            key: 'menuBgA',
            frameRate: 2,
            repeat: -1,
            frames:this.anims.generateFrameNames('menuBackground',{start: 0,end: 3})
        });
        menuBackground.anims.play('menuBgA',true);
        
        this.add.image(540,10,'gameTitle').setOrigin(0,0);
        var newGameButton = this.add.image(20,500,'newGameButton').setOrigin(0,0).setInteractive();
        newGameButton.on('pointerdown', function(pointer){
            gameState.globalScene.scene.stop('MenuScene');
            gameState.globalScene.scene.start('ActOneSceneOne');
        });
        var continueButton = this.add.image(20,550,'continueButton').setOrigin(0,0).setInteractive();
        var settings = this.add.image(950,550,'settingsButton').setOrigin(0,0).setInteractive();
        settings.on('pointerdown', function(pointer){
            gameState.createSettings(gameState.globalScene);
        });
        //anims
        
        
    }
    update() {
    }
}







class ActOneSceneOne extends Phaser.Scene {
    constructor() {
		super({ key: 'ActOneSceneOne' })
	}
    preload(){
        this.load.image('A1S1Bg','gameimages/A1S1Bg.png');
        this.load.image('A1S12Bg','gameimages/A1S12Bg.png');
        this.load.image('invisibleObj','gameimages/invisibleObj.png');
        this.load.image('micePresents','gameimages/micePresents.png');
        this.load.spritesheet('friendlyFoe','gameimages/friendlyFoe.png',{frameWidth: 332,frameHeight:48});
        this.load.spritesheet('car','gameimages/car.png',{frameWidth: 612,frameHeight:300});
    }
    create() {
        gameState.sceneName = 'ActOneSceneOne';
        gameState.cursors = this.input.keyboard.createCursorKeys();
        gameState.keys = this.input.keyboard.addKeys('W,S,A,D,R,SPACE,SHIFT');
        gameState.globalScene = this;
        var conversation = ["BRUCE : \"It feels so weird to be back here. Last time\nfelt like ages ago but also like yesterday.\"",
                            "JOE : \"Tell me about it. I wonder if everyone is\ngoing to be there.\"",
                            "BRUCE : \"You mean you wonder if Olivia is gonna be\nthere. Huh? HUH?\"",
                            "JOE : \"Yeah, like you and Harley weren't wildin last\nyear.\"",
                            "BRUCE : \"She was all over me. What was I supposed to\ndo?\"",
                            "BRUCE : \"Anyways, I'll call Lucas and tell him to\nopen the gate.\"",
                            "JOE : \"Ok. Let's head over to the gate.\"",
                            "JOE : \"Did you call him yet?\"",
                            "BRUCE : \"Hold up it's ringing.\"",
                            "*LUCAS picks up phone*",
                            "LUCAS\(on the phone\) : \"Hey Bruce! You and joe are\nhere?\"",
                            "BRUCE : \"Yeah, could you help us with the gate?\"",
                            "LUCAS\(on the phone\) : \"Of course. Doing that right\nnow.\"",
                            "LUCAS\(on the phone\) : \"It should be open now.\"",
                            "BRUCE : \"Yeah it is. Thanks Lucas, see you inside.\"",
                            "LUCAS\(on the phone\) : *hangs up*",
                            "BRUCE : \"Let's go.\"",];
        this.cameras.main.setSize(1000, 600);
        var bg = this.add.image(0,0,'A1S1Bg').setOrigin(0,0);
        gameState.invisibleObj = this.add.image(0,0,'invisibleObj').setOrigin(0,0);
        this.anims.create({
            key: 'fFA',
            frameRate: 1,
            frames:this.anims.generateFrameNames('friendlyFoe',{start: 0,end: 3})
        });
        this.anims.create({
            key: 'caridlerunning',
            frameRate: 8,
            repeat: -1,
            frames:this.anims.generateFrameNames('car',{start: 3,end: 4})
        });
        this.anims.create({
            key: 'carmoving',
            frameRate: 8,
            repeat: -1,
            frames:this.anims.generateFrameNames('car',{start: 0,end: 2})
        });
        this.anims.create({
            key: 'caridle',
            frameRate: 8,
            repeat: -1,
            frames:this.anims.generateFrameNames('car',{start: 0,end: 0})
        });
        this.anims.create({
            key: 'bruceidle',
            frameRate: 8,
            frames:this.anims.generateFrameNames('bruceCharacter',{start: 0,end: 0})
        });
        this.anims.create({
            key: 'brucewalk',
            frameRate: 5,
            repeat: -1,
            frames:this.anims.generateFrameNames('bruceCharacter',{start: 0,end: 5})
        });
        this.anims.create({
            key: 'joeidle',
            frameRate: 8,
            frames:this.anims.generateFrameNames('joeCharacter',{start: 0,end: 0})
        });
        this.anims.create({
            key: 'joewalk',
            frameRate: 5,
            repeat: -1,
            frames:this.anims.generateFrameNames('joeCharacter',{start: 0,end: 5})
        });
        
        
        this.cameras.main.y = 0;
        this.cameras.main.x = 0;
        this.cameras.main.startFollow(gameState.invisibleObj);
        this.cameras.main.setFollowOffset(-500, -300);
        this.time.addEvent({
            delay: 2000,
            callback: ()=>{
                var micePresents = this.add.image(350,280,'micePresents').setOrigin(0,0);
                this.time.addEvent({
                    delay: 1,
                    callback: ()=>{
                        micePresents.y += 0.5;
                    },  
                    startAt: 0,
                    timeScale: 1,
                    repeat: -1
                });
                this.time.addEvent({
                    delay: 8000,
                    callback: ()=>{
                        micePresents.destroy();
                    },  
                    startAt: 0,
                    timeScale: 1
                });
            },  
            startAt: 0,
            timeScale: 1
        }); 
        this.time.addEvent({
            delay: 12000,
            callback: ()=>{
                var friendlyFoe = this.add.sprite(380,540,'friendlyFoe').setOrigin(0,0);
                friendlyFoe.anims.play('fFA',true);
                this.time.addEvent({
                    delay: 1,
                    callback: ()=>{
                        friendlyFoe.y += 0.5;
                    },  
                    startAt: 0,
                    timeScale: 1,
                    repeat: -1
                });
                this.time.addEvent({
                    delay: 9000,
                    callback: ()=>{
                        friendlyFoe.destroy();
                    },  
                    startAt: 0,
                    timeScale: 1
                });
            },  
            startAt: 0,
            timeScale: 1
        }); 
        this.time.addEvent({
            delay: 1,
            callback: ()=>{
                gameState.invisibleObj.y += 0.5;
            },  
            startAt: 0,
            timeScale: 1,
            repeat: 1199
        }); 
        var bruce;
        var joe;
        this.time.addEvent({
            delay: 27000,
            callback: ()=>{
                var car = this.add.sprite(-612,880,'car').setOrigin(0,0).setDepth(2);
                car.anims.play('carmoving',true);
                this.time.addEvent({
                    delay: 1,
                    callback: ()=>{
                        car.x += 5;
                    },  
                    startAt: 0,
                    timeScale: 1,
                    repeat: 125
                }); 
                this.time.addEvent({
                    delay: 2500,
                    callback: ()=>{
                        car.anims.play('caridlerunning','true');
                        this.time.addEvent({
                            delay: 3000,
                            callback: ()=>{
                                car.anims.play('caridle','true');
                                this.time.addEvent({
                                    delay: 3000,
                                    callback: ()=>{
                                        bruce = this.physics.add.sprite(470,830,'bruceCharacter').setOrigin(0,0).setDepth(1);
                                        this.time.addEvent({
                                            delay: 1500,
                                            callback: ()=>{
                                                bruce.anims.play('brucewalk','true');
                                                bruce.setVelocityX(70);
                                                this.time.addEvent({
                                                    delay: 4000,
                                                    callback: ()=>{
                                                        bruce.anims.play('bruceidle','true');
                                                        bruce.body.stop();
                                                        this.time.addEvent({
                                                            delay: 2000,
                                                            callback: ()=>{
                                                                bruce.flipX = true;
                                                            },  
                                                            startAt: 0,
                                                            timeScale: 1
                                                        });
                                                    },  
                                                    startAt: 0,
                                                    timeScale: 1
                                                });
                                            },  
                                            startAt: 0,
                                            timeScale: 1
                                        });
                                    },  
                                    startAt: 0,
                                    timeScale: 1
                                });
                            },  
                            startAt: 0,
                            timeScale: 1
                        });
                        this.time.addEvent({
                            delay: 12000,
                            callback: ()=>{
                                joe = this.physics.add.sprite(420,865,'joeCharacter').setOrigin(0,0).setDepth(3);
                                gameState.bruce = bruce;
                                gameState.joe = joe;
                                this.time.addEvent({
                                    delay: 1500,
                                    callback: ()=>{
                                        joe.anims.play('joewalk','true');
                                        joe.setVelocityX(70);
                                        this.time.addEvent({
                                            delay: 1000,
                                            callback: ()=>{
                                                joe.anims.play('joeidle','true');
                                                joe.body.stop();
                                            },  
                                            startAt: 0,
                                            timeScale: 1
                                        });
                                    },  
                                    startAt: 0,
                                    timeScale: 1
                                });
                            },  
                            startAt: 0,
                            timeScale: 1
                        });
                    },  
                    startAt: 0,
                    timeScale: 1
                }); 
            },  
            startAt: 0,
            timeScale: 1
        });
        var textBox;
        var text;
        var i = 0;
        this.time.addEvent({
            delay: 45000,
            callback: ()=>{
                gameState.textMode = true;
                gameState.controlPlayer = false;
                textBox = this.add.image(0,600,'textBox').setOrigin(0,0).setDepth(0).setInteractive();
                text = this.add.text(30, 630, `${conversation[i]}`, { fontSize: '30px', fill: '#00000' }).setDepth(1);
                textBox.on('pointerdown', function(pointer){
                    if(gameState.textMode === true){
                        i ++;
                        text.setText(conversation[i]);
                        if(i > 6){
                            textBox.destroy();
                            text.destroy();
                            gameState.textMode = false;
                            gameState.controlPlayer = true;
                            gameState.globalScene.time.addEvent({
                                delay: 500,
                                callback: ()=>{
                                    gameState.globalScene.cameras.main.startFollow(gameState.joe);
                                    gameState.globalScene.cameras.main.setFollowOffset(-5, -40);
                                    gameState.controlPlayer = true;
                                },  
                                startAt: 0,
                                timeScale: 1
                            }); 
                        }
                    }
                });
            },  
            startAt: 0,
            timeScale: 1
        });
        
        gameState.A1S1endScene = function(scene) {
            scene.time.addEvent({
                delay: 2500,
                callback: ()=>{
                    gameState.textMode = true;
                    gameState.controlPlayer = false;
                    textBox = scene.add.image(1000,600,'textBox').setOrigin(0,0).setDepth(0).setInteractive();
                    text = scene.add.text(1030, 630, `${conversation[i]}`, { fontSize: '30px', fill: '#00000' }).setDepth(1);
                    textBox.on('pointerdown', function(pointer){
                        if(gameState.textMode === true){
                            i ++;
                            text.setText(conversation[i]);
                            if(i > 12){
                                textBox.destroy();
                                text.destroy();
                                gameState.textMode = false;
                                scene.time.addEvent({
                                    delay: 3000,
                                    callback: ()=>{
                                        bg = scene.add.image(0,0,'A1S12Bg').setOrigin(0,0).setDepth(0);
                                        gameState.A1S1endScene2(scene);
                                    },  
                                    startAt: 0,
                                    timeScale: 1
                                }); 
                            }
                        }
                    });
                },  
                startAt: 0,
                timeScale: 1
            });
        }
        gameState.A1S1endScene2 = function(scene) {
            scene.time.addEvent({
                delay: 2000,
                callback: ()=>{
                    gameState.invisibleObj.x = gameState.joe.x;
                    gameState.invisibleObj.y = gameState.joe.y;
                    gameState.globalScene.cameras.main.startFollow(gameState.invisibleObj);
                    gameState.globalScene.cameras.main.setFollowOffset(0, -40);
                    gameState.textMode = true;
                    gameState.controlPlayer = false;
                    textBox = scene.add.image(1000,600,'textBox').setOrigin(0,0).setDepth(0).setInteractive();
                    text = scene.add.text(1030, 630, `${conversation[i]}`, { fontSize: '30px', fill: '#00000' }).setDepth(1);
                    textBox.on('pointerdown', function(pointer){
                        if(gameState.textMode === true){
                            i ++;
                            text.setText(conversation[i]);
                            if(i > 16){
                                textBox.destroy();
                                text.destroy();
                                gameState.textMode = false;
                                gameState.bruce.anims.play('brucewalk','true');
                                gameState.bruce.setVelocityX(70);
                                scene.time.addEvent({
                                    delay: 1000,
                                    callback: ()=>{
                                        gameState.joe.anims.play('joewalk','true');
                                        gameState.joe.setVelocityX(70);
                                        scene.time.addEvent({
                                            delay: 1000,
                                            callback: ()=>{
                                                scene.time.addEvent({
                                                    delay: 1,
                                                    callback: ()=>{
                                                        gameState.invisibleObj.y -= 1;
                                                    },  
                                                    startAt: 0,
                                                    timeScale: 1,
                                                    repeat: 450
                                                }); 
                                            },  
                                            startAt: 0,
                                            timeScale: 1
                                        }); 
                                    },  
                                    startAt: 0,
                                    timeScale: 1
                                });
                                scene.time.addEvent({
                                    delay: 10000,
                                    callback: ()=>{
                                        gameState.globalScene.cameras.main.x = 5000;
                                        gameState.globalScene.cameras.main.y = 5000;
                                        scene.time.addEvent({
                                            delay: 3000,
                                            callback: ()=>{
                                                gameState.globalScene.scene.stop(gameState.sceneName);
                                                gameState.globalScene.scene.start('MenuScene');
                                            },  
                                            startAt: 0,
                                            timeScale: 1
                                        });
                                    },  
                                    startAt: 0,
                                    timeScale: 1
                                });
                            }
                        }
                    });
                },  
                startAt: 0,
                timeScale: 1
            });
        }
    }
    update() {
        if(gameState.controlPlayer === true){
            if(gameState.joe.x > gameState.bruce.x){
                gameState.bruce.flipX = false;
            }
            else {
                gameState.bruce.flipX = true;
            }
            if(Phaser.Math.Distance.BetweenPoints(gameState.joe, gameState.bruce)> 250){
                if(gameState.joe.x > gameState.bruce.x){
                    gameState.bruce.setVelocityX(70);
                    gameState.bruce.anims.play('brucewalk','true');
                }
                else {
                    gameState.bruce.setVelocityX(-70);
                    gameState.bruce.anims.play('brucewalk','true');
                }
            }
            else {
                gameState.bruce.anims.play('bruceidle','true');
                gameState.bruce.setVelocityX(0);
            }
            if(gameState.keys.A.isDown && gameState.joe.x > 0){
                gameState.joe.setVelocityX(-80);
                gameState.joe.anims.play('joewalk','true');
                gameState.joe.flipX = true;
            }
            else if(gameState.keys.D.isDown){
                gameState.joe.setVelocityX(80);
                gameState.joe.anims.play('joewalk','true');
                gameState.joe.flipX = false;
            }
            else {
                gameState.joe.anims.play('joeidle','true');
                gameState.joe.setVelocityX(0);
            }
            if(gameState.joe.x >= 1490){
                gameState.controlPlayer = false;
                gameState.joe.body.stop();
                gameState.joe.anims.play('joeidle','true');
                gameState.bruce.body.stop();
                gameState.bruce.anims.play('bruceidle','true');
                gameState.A1S1endScene(this);
            }
        }
    }   
}


