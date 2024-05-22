document.addEventListener("DOMContentLoaded", function() {
    const numGlows = 10;
    const background = document.getElementById("background");

    for (let i = 0; i < numGlows; i++) {
        const glow = document.createElement("div");
        glow.classList.add("glow");
        glow.style.left = Math.random() * 100 + "vw";
        glow.style.top = Math.random() * 100 + "vh";
        glow.style.animationDuration = 10 + Math.random() * 10 + "s";
        glow.style.animationDelay = Math.random() * 20 + "s";
        background.appendChild(glow);
    }
});
