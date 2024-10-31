console.log("hello")
document.addEventListener("DOMContentLoaded", () => {
    let character = document.querySelector(".character");
    let treasure = document.querySelector(".treasure");

    if (!character || !treasure) {
        console.error("Character or treasure element not found.");
        return;
    }

    function checkCollision() {
        let characterRect = character.getBoundingClientRect();
        let treasureRect = treasure.getBoundingClientRect();

        if (
            characterRect.left < treasureRect.right &&
            characterRect.right > treasureRect.left &&
            characterRect.top < treasureRect.bottom &&
            characterRect.bottom > treasureRect.top
        ) {
            window.alert("Congratulations! You've found the treasure!");
            treasure.style.display = "none"; 
        }
    }

    document.addEventListener("keydown", () => {
        checkCollision(); 
    });
});
