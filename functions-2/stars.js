  function createStars(scene) {
      const tileSize = 32;
      for (let i = 0; i < 10; i++) {
        let x, y;
        do {
          x = Phaser.Math.Between(0, 23) * tileSize;
          y = Phaser.Math.Between(0, 17) * tileSize;
        } while (mapData[y / tileSize][x / tileSize] !== 0);
        scene.stars.create(x, y, "star").setOrigin(0);
      }
    }
