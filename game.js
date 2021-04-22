const config = {
    type: Phaser.AUTO,
    width : 2000,
    height: 1200,
    backgroundColor: "#000000",
    audio: {
        disableWebAudio: true
      },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0},
            enableBody: true
            //debug: true
        }
    },
    scene:[MenuScene,ActOneSceneOne],
    scale: {
        zoom: 1
    }
};

const game = new Phaser.Game(config);

let gameState = {
    Act: 1,
    Scene: 1,
    settingsOpen: false,
    createSettings: function(scene){
        if(gameState.settingsOpen === false){
            scene.physics.pause();
            gameState.settingsOpen = true;
            function destroy(){
                setBg.destroy();
                xbutton.destroy();
                mainMenuButton.destroy();
                gameState.settingsOpen = false;
                scene.physics.resume();
            }
            var setBg = scene.add.image(200,100,'settingsBackground').setOrigin(0,0);
            var xbutton = scene.add.image(720,140,'settingsXButton').setOrigin(0,0).setInteractive();
            xbutton.on('pointerdown', function(pointer){
                destroy();
            });
            var mainMenuButton = scene.add.image(340,140,'mainMenuButton').setOrigin(0,0).setInteractive();
            mainMenuButton.on('pointerdown', function(pointer){
                destroy();
                globalScene.scene.stop(gameState.sceneName);
                globalScene.scene.start('MenuScene');
            });
        }
    },
    
    controlPlayer: false,
    textMode: false,
}
