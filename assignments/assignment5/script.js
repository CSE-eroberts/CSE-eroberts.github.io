const geometryCard = document.getElementById("geometry-card");
const dateInput = document.getElementById("date-input");
const dateOutput = document.getElementById("date-output");
const weatherImage = document.getElementById("weather-image");

const toggleTriangle = () => {
  geometryCard.classList.toggle("is-active");
};

const formatDate = (value) => {
  const [year, month, day] = value.split("-");
  return `${month}/${day}/${year}`;
};

const showDate = () => {
  if (!dateInput.value) {
    dateOutput.textContent = "";
    return;
  }

  const formatted = formatDate(dateInput.value);
  dateOutput.textContent = `You picked the date: ${formatted}`;
};

const swapImage = () => {
  const sunnySrc = weatherImage.dataset.sunny;
  const cloudySrc = weatherImage.dataset.cloudy;
  const isSunny = weatherImage.dataset.current === "sunny";

  weatherImage.src = isSunny ? cloudySrc : sunnySrc;
  weatherImage.alt = isSunny ? "Cloudy sky" : "Sunny sky";
  weatherImage.dataset.current = isSunny ? "cloudy" : "sunny";
};

geometryCard.addEventListener("click", toggleTriangle);
dateInput.addEventListener("change", showDate);
weatherImage.addEventListener("click", swapImage);
