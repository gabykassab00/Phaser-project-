const tileSize = 32;
      this.walls = this.physics.add.staticGroup();
      for (let row = 0; row < mapData.length; row++) {
        for (let col = 0; col < mapData[row].length; col++) {
          let tileType = mapData[row][col];
          let x = col * tileSize;
          let y = row * tileSize;

          if (tileType === 0) {
            this.add.image(x, y, "path").setOrigin(0);
          } else if (tileType === 1) {
            this.walls.create(x, y, "floor").setOrigin(0).refreshBody();
          }
           else if (tileType === 2) {
            this.walls.create(x, y, "door").setOrigin(0).refreshBody();
          }
        }
      }