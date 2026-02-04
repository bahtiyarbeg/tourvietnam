import TOURS from "./data/tours.js";

const app = document.getElementById("app");
if (!app) {
  console.error("❌ Контейнер #app не найден");
}

let currentLang = "ru";

function renderTours() {
  app.innerHTML = "";

  TOURS.forEach(tour => {
    const card = document.createElement("a");
    card.className = "card";
    card.href = `tour.html?id=${tour.id}`;

    card.innerHTML = `
      <img src="${tour.image}" alt="${tour.title[currentLang]}">
      <h3>${tour.title[currentLang]}</h3>
      <p>${tour.subtitle[currentLang]}</p>
    `;

    app.appendChild(card);
  });
}

window.setLang = function (lang) {
  currentLang = lang;
  renderTours();
};

renderTours();
