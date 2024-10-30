let timerText;
let elapsedTime = 0; 
let timerEvent; 
function startTimer() {
   
    timerText = this.add.text(16, 16, 'Time: 0', {
        fontSize: '15px',
        fill: '#ffffff'
    });

    
    timerEvent = this.time.addEvent({
        delay: 1000,                
        callback: updateTimer,       
        callbackScope: this,
        loop: true                   
    });
}
function updateTimer() {
    elapsedTime++; 
    timerText.setText('Time: ' + elapsedTime); 
}

