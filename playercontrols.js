let gameOver = false;
let moving = false;

function createPlayer(scene) {
    scene.player = scene.physics.add.sprite(50, 100, "dude").setCollideWorldBounds(true);
    scene.anims.create({ key: 'left', frames: scene.anims.generateFrameNumbers('dude', { start: 0, end: 3 }), frameRate: 10, repeat: -1 });
    scene.anims.create({ key: 'turn', frames: [{ key: 'dude', frame: 4 }], frameRate: 20 });
    scene.anims.create({ key: 'right', frames: scene.anims.generateFrameNumbers('dude', { start: 5, end: 8 }), frameRate: 10, repeat: -1 });
    scene.cursors = scene.input.keyboard.createCursorKeys();
    scene.physics.add.collider(scene.player, scene.walls);
}

function updatePlayer(scene) {
    if (gameOver || moving) return;

    const tileSize = 32;
    let newX = scene.player.x;
    let newY = scene.player.y;

    if (scene.cursors.left.isDown && canMoveTo(scene, scene.player.x - tileSize, scene.player.y)) {
        newX -= tileSize;
        scene.player.anims.play('left', true);
        moving = true;
    } else if (scene.cursors.right.isDown && canMoveTo(scene, scene.player.x + tileSize, scene.player.y)) {
        newX += tileSize;
        scene.player.anims.play('right', true);
        moving = true;
    } else if (scene.cursors.up.isDown && canMoveTo(scene, scene.player.x, scene.player.y - tileSize)) {
        newY -= tileSize;
        scene.player.anims.play('turn');
        moving = true;
    } else if (scene.cursors.down.isDown && canMoveTo(scene, scene.player.x, scene.player.y + tileSize)) {
        newY += tileSize;
        scene.player.anims.play('turn');
        moving = true;
    }

    if (moving) {
        scene.player.setPosition(newX, newY);
        scene.input.keyboard.once('keyup', () => {
            moving = false;
            scene.player.anims.play('turn');
        });
    }
}

function canMoveTo(scene, x, y) {
    const tileSize = 32;
    const col = Math.floor(x / tileSize);
    const row = Math.floor(y / tileSize);
    return mapData[row] && mapData[row][col] === 0;
}

function reachGoal(player, goal) {
    alert("Congratulations! You've reached the goal!");
    player.scene.scene.restart();
}
