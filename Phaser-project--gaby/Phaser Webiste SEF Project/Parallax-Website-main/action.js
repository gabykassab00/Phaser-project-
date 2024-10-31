
window.addEventListener('scroll', function () {

    let value = window.scrollY;   

    text.style.top = 50 + value * -0.2 + '%';

    char1.style.top = value * 0.1 + 'px';
    char1.style.left = value * 1 + 'px';

    char2.style.top = value * -0.1 + 'px';
    char2.style.left = value * -2 + 'px';

    explore.style.marginTop = value * 1.5 + 'px';

})

    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("enter-button").onclick = function () {
            window.location.href = "https://www.google.com";
        };
    });
