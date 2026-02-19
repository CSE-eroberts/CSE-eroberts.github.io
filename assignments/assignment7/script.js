const bubbleLayer = document.getElementById("bubble-layer");
const bubbleCount = 10;

const createBubbles = () => {
    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement("span");
        const size = Math.random() * 7 + 8;
        const x = Math.random() * 74 + 13;
        const duration = Math.random() * 3 + 5;
        const delay = Math.random() * -8;
        const drift = Math.random() * 14 - 7;

        bubble.className = "bubble";
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${x}%`;
        bubble.style.animationDuration = `${duration}s`;
        bubble.style.animationDelay = `${delay}s`;
        bubble.style.setProperty("--drift", `${drift}px`);

        bubbleLayer.append(bubble);
    }
};

window.addEventListener("DOMContentLoaded", createBubbles);
