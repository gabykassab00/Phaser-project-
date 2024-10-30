const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      backgroundColor: "#242424",
      scene: { preload, create, update },
      physics: { default: "arcade", arcade: { debug: false } },
    };