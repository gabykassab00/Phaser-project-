const config = {
    type: Phaser.AUTO,
    width: 780,
    height: 600,
    backgroundColor: "#242424",
    scene: { preload, create, update },
    physics: {
        default: "arcade",
        arcade: { debug: false },
    },
};

const game = new Phaser.Game(config);
function preload() {
    this.load.image("floor", "assets/brown-path.png");
    this.load.image("path", "assets/green-path.png");
    this.load.image("flower", "assets/flower-path.png");
    this.load.image("water", "assets/water.png");
    this.load.image("tree", "assets/tree.png");
    this.load.image("goal", "assets/red-flag.png");
    this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
}

function create() {
    const tileSize = 32;
    this.walls = this.physics.add.staticGroup();

    for (let row = 0; row < mapData.length; row++) {
        for (let col = 0; col < mapData[row].length; col++) {
            let tileType = mapData[row][col];
            let x = col * tileSize;
            let y = row * tileSize;

            if (tileType === 0) {
                this.add.image(x, y, "path").setOrigin(0);
            } else {
                this.walls.create(x, y, "floor").setOrigin(0).refreshBody();
            }
        }
    }

    createPlayer(this);
    this.goal = this.physics.add.sprite(32, 550, "goal").setOrigin(0).setScale(0.8).setImmovable(true);
    this.physics.add.overlap(this.player, this.goal, reachGoal, null, this);
    startTimer.call(this);
}

function update() {
    updatePlayer(this);
}
