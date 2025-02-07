document.getElementById("yes").addEventListener("click", function() {
    window.location.href = "valentine.html"; 
});

const noButton = document.getElementById("no");
const emoji = document.getElementById("emoji");
const bigBoss = document.getElementById("bigBoss");

noButton.addEventListener("mouseover", function() {
    let maxX = window.innerWidth - this.offsetWidth;
    let maxY = window.innerHeight - this.offsetHeight;

    let x = Math.random() * maxX;
    let y = Math.random() * maxY;

    this.style.position = "absolute";
    this.style.left = '${x}px';
    this.style.top = '${y}px';

    // Onyesha emoji ya kucheka na BIG BOSS (Ferrum)
    emoji.style.display = "block";
    bigBoss.style.display = "block";

    // After 2 seconds, ficha emoji na BIG BOSS
    setTimeout(() => {
        emoji.style.display = "none";
        bigBoss.style.display = "none";
    }, 2000);
});

function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤";
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";

    document.querySelector(".hearts-container").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 30);