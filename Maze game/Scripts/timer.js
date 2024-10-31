const character = document.getElementById("character");

let position = { top: 200, left: 440 };
const stepSize = 10;

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      position.top -= stepSize;
      break;
    case "ArrowDown":
      position.top += stepSize;
      break;
    case "ArrowLeft":
      position.left -= stepSize;
      break;
    case "ArrowRight":
      position.left += stepSize;
      break;
    default:
      break;
  }
  
  character.style.top = `${position.top}px`;
  character.style.left = `${position.left}px`;
});


let timerElement = document.getElementById("timer"); 
let time = 60;                                        
let timerInterval;                                   
let timerStarted = false;        
          


function startTimer() {
    timerInterval = setInterval(() => {
        if (time > 0) {
            time -= 1; 
            timerElement.textContent = `Time: ${time} seconds`;
        } else {
            clearInterval(timerInterval); 
            timerElement.textContent = "Time's up!";
        }
    }, 1000);
}


function stopTimer() {
    clearInterval(timerInterval); 
}


document.addEventListener("keydown", (event) => {
    if (!timerStarted) {             
        startTimer();                 
        timerStarted = true;         
    }
});

document.getElementById("end").addEventListener("mouseover", () => {
    stopTimer();
});

function addTime() {
    time = Math.min(time + 10, 60); 
    timerElement.textContent = `Time: ${time} seconds`;
}
