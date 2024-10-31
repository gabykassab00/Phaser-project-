document.addEventListener("DOMContentLoaded", () => {
    let chrctr = document.querySelector(".character");
    let coin = document.querySelector(".coin");
    let bush =document.querySelector(".bush")

    function checkCollision() {
        let characterRect = chrctr.getBoundingClientRect();
        let coinRect = coin.getBoundingClientRect();

        console.log("Character Position:", characterRect);
        console.log("Coin Position:", coinRect);

        if (
            characterRect.left < coinRect.right &&
            characterRect.right > coinRect.left &&
            characterRect.top < coinRect.bottom &&
            characterRect.bottom > coinRect.top
        ) {
            console.log("Congratulations");
            coin.style.display = "none";
            if (typeof addTime === "function") {
                addTime();
            } else {
                console.error("addTime function is not available");
            }
        }
    }

    document.addEventListener("keydown", (event) => {
        console.log(`Key pressed: ${event.key}`);

        const step = 10;
        let style = window.getComputedStyle(chrctr);
        let top = parseInt(style.top) || 0;
        let left = parseInt(style.left) || 0;

        checkCollision();
    });
});
