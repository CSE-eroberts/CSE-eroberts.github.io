const menuToggle = document.getElementById("menu-toggle");
const menuItems = document.getElementById("menu-items");
const toggleArrow = document.getElementById("toggle-arrow");

const exercise1Section = document.getElementById("exercise-1");
const exercise2Section = document.getElementById("exercise-2");
const ex1Link = document.getElementById("link-ex1");
const ex2Link = document.getElementById("link-ex2");

const slider = document.getElementById("minutes-slider");
const sliderValue = document.getElementById("slider-value");
const minutesMessage = document.getElementById("minutes-message");

const countdownMessage = document.getElementById("countdown-message");

const showExercise = (exerciseNumber) => {
    if (exerciseNumber === 1) {
        exercise1Section.classList.remove("hidden");
        exercise2Section.classList.add("hidden");
    } else {
        exercise2Section.classList.remove("hidden");
        exercise1Section.classList.add("hidden");
        updateCountdown();
    }

    if (window.innerWidth < 768) {
        menuItems.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        toggleArrow.innerHTML = "&#9660;";
    }
};

menuToggle.onclick = () => {
    menuItems.classList.toggle("open");
    const isOpen = menuItems.classList.contains("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    toggleArrow.innerHTML = isOpen ? "&#9650;" : "&#9660;";
};

ex1Link.onclick = (event) => {
    event.preventDefault();
    showExercise(1);
};

ex2Link.onclick = (event) => {
    event.preventDefault();
    showExercise(2);
};

const updateExercise1Message = () => {
    const minutes = Number(slider.value);
    sliderValue.textContent = `${minutes} minutes`;

    if (minutes > 45) {
        minutesMessage.textContent = "🍳 Plenty of time for bacon and eggs before class.";
    } else if (minutes > 30) {
        minutesMessage.textContent = "🥣 Quick breakfast break and then head out.";
    } else if (minutes >= 15) {
        minutesMessage.textContent = "☕ Grab your coffee. No one will judge if you're 5 minutes late.";
    } else {
        minutesMessage.textContent = "🏃 Time to move now, class is about to begin.";
    }
};

const updateCountdown = () => {
    const now = new Date();
    const classStart = new Date(now);
    classStart.setHours(8, 30, 0, 0);

    const diffMinutes = (classStart.getTime() - now.getTime()) / 60000;
    const rounded = Math.ceil(diffMinutes);

    if (diffMinutes > 15) {
        countdownMessage.textContent = `You have ${rounded} minutes left. Enjoy a calm start.`;
    } else if (diffMinutes > 10) {
        countdownMessage.textContent = `You have ${rounded} minutes left. Get your notebook ready.`;
    } else if (diffMinutes > 5) {
        countdownMessage.textContent = `You only have ${rounded} minutes left, let's get moving`;
    } else if (diffMinutes >= 0) {
        countdownMessage.textContent = `Only ${rounded} minute(s) left. Walk in now.`;
    } else if (diffMinutes >= -5) {
        countdownMessage.textContent = "Class started just now, slip in quietly.";
    } else if (diffMinutes >= -15) {
        countdownMessage.textContent = "You are late, but still go in and catch up.";
    } else {
        countdownMessage.textContent = "You missed class :(";
    }
};

slider.oninput = updateExercise1Message;

updateExercise1Message();
updateCountdown();
