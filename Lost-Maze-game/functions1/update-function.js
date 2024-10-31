function update() {
      if (gameOver || moving) return;

      const tileSize = 32;
      let newX = player.x;
      let newY = player.y;

      if (cursors.left.isDown && canMoveTo(this, player.x - tileSize, player.y)) {
        newX -= tileSize;
        player.anims.play("left", true);
        moving = true;
      } else if (cursors.right.isDown && canMoveTo(this, player.x + tileSize, player.y)) {
        newX += tileSize;
        player.anims.play("right", true);
        moving = true;
      } else if (cursors.up.isDown && canMoveTo(this, player.x, player.y - tileSize)) {
        newY -= tileSize;
        player.anims.play("turn");
        moving = true;
      } else if (cursors.down.isDown && canMoveTo(this, player.x, player.y + tileSize)) {
        newY += tileSize;
        player.anims.play("turn");
        moving = true;
      }

      if (moving) {
        player.setPosition(newX, newY);
        this.input.keyboard.once("keyup", () => {
          moving = false;
          player.anims.play("turn");
        });
      }
    }