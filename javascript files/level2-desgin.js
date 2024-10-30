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
  [4, 0, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 2, 2, 2, 0, 0, 1, 1, 0, 1, 1, 0, 4],
  [4, 0, 1, 0, 3, 0, 1, 0, 1, 0, 0, 0, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 4],
  [4, 0, 2, 0, 0, 0, 1, 0, 1, 1, 1, 0, 2, 2, 2, 1, 0, 3, 3, 0, 1, 0, 0, 4],
  [4, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 1, 1, 0, 4],
  [4, 0, 1, 0, 1, 2, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, 0, 0, 0, 0, 0, 0, 0, 4],
  [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 4],
  [4, 2, 2, 1, 1, 2, 3, 2, 3, 1, 1, 0, 2, 1, 1, 2, 0, 1, 1, 1, 1, 0, 1, 4],
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
      this.player = this.physics.add.sprite(50, 100, "dude").setCollideWorldBounds(true);
      this.anims.create({ key: 'left', frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }), frameRate: 10, repeat: -1 });
      this.anims.create({ key: 'turn', frames: [{ key: 'dude', frame: 4 }], frameRate: 20 });
      this.anims.create({ key: 'right', frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }), frameRate: 10, repeat: -1 });
      this.goal = this.add.image(32, 0, "goal").setOrigin(0).setScale(0.8);
      this.cursors = this.input.keyboard.createCursorKeys();
      this.physics.add.collider(this.player, this.walls);
      this.physics.add.overlap(this.player, this.goal, reachGoal, null, this);
}

function reachGoal(player, goal) {
        alert("Congratulations! You've reached the goal!");
        this.scene.restart();
    }


function canMoveTo(x, y) {
        const tileSize = 32;
        const col = Math.floor(x / tileSize);
        const row = Math.floor(y / tileSize);
        return mapData[row] && mapData[row][col] === 0;
    }



    let gameOver = false;
    let moving = false;



function update() {
        if (gameOver || moving) return;

        const tileSize = 32;
        let newX = this.player.x;
        let newY = this.player.y;

        if (this.cursors.left.isDown && canMoveTo(this.player.x - tileSize, this.player.y)) {
            newX -= tileSize;
            this.player.anims.play('left', true);
            moving = true;
        } else if (this.cursors.right.isDown && canMoveTo(this.player.x + tileSize, this.player.y)) {
            newX += tileSize;
            this.player.anims.play('right', true);
            moving = true;
        } else if (this.cursors.up.isDown && canMoveTo(this.player.x, this.player.y - tileSize)) {
            newY -= tileSize;
            this.player.anims.play('turn');
            moving = true;
        } else if (this.cursors.down.isDown && canMoveTo(this.player.x, this.player.y + tileSize)) {
            newY += tileSize;
            this.player.anims.play('turn');
            moving = true;
        }
        function update() {
        if (gameOver || moving) return;

        const tileSize = 32;
        let newX = this.player.x;
        let newY = this.player.y;

        if (this.cursors.left.isDown && canMoveTo(this.player.x - tileSize, this.player.y)) {
            newX -= tileSize;
            this.player.anims.play('left', true);
            moving = true;
        } else if (this.cursors.right.isDown && canMoveTo(this.player.x + tileSize, this.player.y)) {
            newX += tileSize;
            this.player.anims.play('right', true);
            moving = true;
        } else if (this.cursors.up.isDown && canMoveTo(this.player.x, this.player.y - tileSize)) {
            newY -= tileSize;
            this.player.anims.play('turn');
            moving = true;
        } else if (this.cursors.down.isDown && canMoveTo(this.player.x, this.player.y + tileSize)) {
            newY += tileSize;
            this.player.anims.play('turn');
            moving = true;
        }
        if (moving) {
            this.player.setPosition(newX, newY);
            this.input.keyboard.once('keyup', () => {
                moving = false;
                this.player.anims.play('turn');
            });
        }
    }
    }
