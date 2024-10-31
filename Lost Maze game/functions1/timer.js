 function startTimer() {
    timerText = this.add.text(630, 16, "Timer: 0", { fontSize: "30px", fill: "black" });

    timerEvent = this.time.addEvent({
        delay: 1000,
        callback: updateTimer,
        callbackScope: this,
        loop: true
    });
}

function updateTimer() {
    elapsedTime++;
    timerText.setText("Time: " + elapsedTime);
}