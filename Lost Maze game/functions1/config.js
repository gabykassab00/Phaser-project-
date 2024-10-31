const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      backgroundColor: "#242424",
      scene: { preload, create, update },
      physics: { default: "arcade", arcade: { debug: false } },
    };

    let player, cursors;
    let moving = false;
    let gameOver = false;
    let score = 0;
    let scoreText;
    const requiredScore = 50;
    let door, redFlag;
    let elapsedTime = 0; 
    let timerText; 
    let timerEvent;