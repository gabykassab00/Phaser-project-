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
 function collectStar(player, star) {
  star.disableBody(true, true);
  score += 10;
  scoreText.setText(`Score: ${score}`);
  if (score >= requiredScore) {
    openPaths.call(this);
  }
}

function openPaths() {
  for (let row = 0; row < mapData.length; row++) {
    for (let col = 0; col < mapData[row].length; col++) {
      if (mapData[row][col] === 2) {
        mapData[row][col] = 0;
      }
    }
  } 
}

function checkDoorUnlock(player, door) {
    if (score >= requiredStars) {
        door.disableBody(true, true);
    }
}

 function reachGoal() {
      if (score >= requiredScore) {
        gameOver = true;
        scoreText.setText("Congratulations! You've reached the goal!");
      } else {
        console.log("Collect enough stars to finish the game!");
      }
    }