    player = this.physics.add.sprite(50, 50, "dude");
    this.anims.create({ key: "turn", frames: [{ key: "dude", frame: 4 }], frameRate: 20 });
    this.anims.create({ key: "left", frames: this.anims.generateFrameNumbers("dude", { start: 5, end: 8 }), frameRate: 10, repeat: -1 });
    this.anims.create({ key: "right", frames: this.anims.generateFrameNumbers("dude", { start: 5, end: 8 }), frameRate: 10, repeat: -1 });


    this.physics.add.collider(player, this.walls);

    cursors = this.input.keyboard.createCursorKeys();