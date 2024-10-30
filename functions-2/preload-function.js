 function preload() {
      this.load.image("floor", "assets/brown-path.png");
      this.load.image("path", "assets/green-path.png");
      this.load.image("star", "assets/star.png");
      this.load.image("redFlag", "assets/red-flag.png");
      this.load.image("door", "assets/silver-path.png");
      this.load.spritesheet("dude", "assets/dude.png", { frameWidth: 32, frameHeight: 48 });
    }

    
    function canMoveTo(scene, x, y) {
      const tileSize = 32;
      const col = Math.floor(x / tileSize);
      const row = Math.floor(y / tileSize);
      return mapData[row] && mapData[row][col] === 0;
    }