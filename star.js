  let score = 0;
     let scoreText;
     function spawnStars() {
    const tileSize = 32;
    let emptyPositions = [];
    for (let row = 0; row < mapData.length; row++) {
        for (let col = 0; col < mapData[row].length; col++) {
            if (mapData[row][col] === 0) {
                emptyPositions.push({ x: col * tileSize, y: row * tileSize });
            }
        }
    }
    Phaser.Utils.Array.Shuffle(emptyPositions);
    const starPositions = emptyPositions.slice(0, 60);
    this.stars = this.physics.add.group({
        key: 'star',
        repeat: starPositions.length - 1,
        setXY: { x: 0, y: 0 }
    });
    this.stars.children.iterate((star, index) => {
        star.setPosition(starPositions[index].x + tileSize / 2, starPositions[index].y + tileSize / 2);
        star.setOrigin(0.5); 
    });
    this.physics.add.overlap(this.player, this.stars, collectStar, null, this);
}

function collectStar(player, star) {
    star.disableBody(true, true); 
    score += 10; 
    scoreText.setText('Score: ' + score); 
}