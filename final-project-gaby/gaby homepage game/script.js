function playGame() {
    window.location.href = 'name.html'; 
}
function submitName() {
    window.location.href = 'game.html'; 
}
function zoro() {
    localStorage.setItem('selectedCharacter', './pic/char1.png'); 
    window.location.href = 'level.html';
}

function zion() {
    localStorage.setItem('selectedCharacter', './pic/char2.png');
    window.location.href = 'level.html';
}

function zeus() {
    localStorage.setItem('selectedCharacter', './pic/char3.png'); 
    window.location.href = 'level.html';
}

function goBack() {
    window.history.back(); 
}

window.onload = function() {
    const characterImagePath = localStorage.getItem('selectedCharacter');
    if (characterImagePath) {
        document.getElementById('characterImage').src = characterImagePath;
    } else {
        alert("No character selected! Redirecting to character selection.");
        window.location.href = 'game.html'; 
    }
};