const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: "#242424",
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
  physics: {
    default: "arcade",
    arcade: { debug: false },
  },
};

const game = new Phaser.Game(config);


   const mapData = [
  [4, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4],
  [4, 0, 1, 0, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 4],
  [4, 0, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 4],
  [4, 0, 1, 0, 3, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 4],
  [4, 0, 2, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 3, 3, 0, 1, 0, 0, 4],
  [4, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 1, 1, 0, 4],
  [4, 0, 1, 0, 1, 2, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, 0, 0, 0, 0, 0, 0, 0, 4],
  [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 4],
  [4, 0, 2, 1, 1, 0, 3, 2, 3, 1, 1, 0, 2, 1, 1, 2, 0, 1, 1, 1, 1, 0, 1, 4],
  [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 4],
  [4, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 2, 1, 1, 2, 0, 1, 1, 1, 1, 0, 1, 4],
  [4, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 4],
  [4, 0, 2, 0, 1, 0, 1, 1, 1, 1, 2, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 4],
  [4, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
  [4, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 2, 1, 0, 1, 1, 1, 0, 3, 3, 0, 0, 4],
  [4, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 3, 0, 0, 0, 4],
  [4, 0, 1, 0, 1, 0, 1, 0, 3, 3, 3, 1, 1, 2, 0, 1, 1, 1, 0, 0, 0, 1, 0, 4],
  [4, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 4],
  [4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4],
];

function preload() {
  this.load.image("floor1", "assets/brown-path.png");
  this.load.image("wall", "assets/green-path.png");
  this.load.image("player1", "assets/character.png");
  this.load.image("floor2", "assets/flower-path.png");
  this.load.image("water", "assets/water.png");
  this.load.image("player2", "assets/boomb.png");
  this.load.image("star", "assets/star.png");
  this.load.image("goal", "assets/red-flag.png");
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
        this.add.image(x, y, "floor1").setOrigin(0);
      } else if (tileType === 1) {
        const wall = this.walls.create(x, y, "wall1").setOrigin(0).refreshBody();
      } else if (tileType === 2) {
        this.add.image(x, y, "floor2").setOrigin(0);
      } else if (tileType === 3) {
        const wall = this.walls.create(x, y, "water").setOrigin(0).refreshBody();
      } else if (tileType === 4) {
        const wall = this.walls.create(x, y, "star").setOrigin(0).refreshBody();
      }
    }
  }

  this.player = this.physics.add.sprite(50, 550, "player1").setScale(0.4);
  this.goal = this.add.image(600, 50, "goal").setOrigin(0).setScale(0.5); 
}

function update() {}
