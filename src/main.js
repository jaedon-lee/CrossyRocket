let config = { 
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

// main game object
let game = new Phaser.Game(config);

//define game settings
game.settings = {
    spaceshipSpeed: 5, 
    gameTimer: 45000
}
// reserve keyboard vars 
let keyF, keyLEFT, keyRIGHT, keyDOWN;