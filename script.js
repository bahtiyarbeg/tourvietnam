import TOURS from "./data/tours.js";

let currentLang = localStorage.getItem("lang") || "ru";

window.setLang = function (lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  renderPage();
};

function getTourId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function renderPage() {
  const tourId = getTourId();
  if (!tourId) return;

  const tour = TOURS[tourId];
  if (!tour) return;

  const t = tour[currentLang] || tour["ru"];

  const app = document.getElementById("app");
  if (!app) return;

  app.innerHTML = `
    <div class="tour-hero">
      <img src="${tour.image}" alt="${t.title}">
    </div>

    <h1>${t.title}</h1>
    <p class="subtitle">${t.subtitle}</p>

    <div class="info-grid">
      <div class="info-box">
        <strong>Time</strong><br>${tour.time}
      </div>
      <div class="info-box">
        <strong>Guide</strong><br>${tour.guide}
      </div>
    </div>

    <div class="block">
      <h3>What to bring</h3>
      <ul>${t.take.map(i => `<li>${i}</li>`).join("")}</ul>
    </div>

    <div class="block">
      <h3>Included</h3>
      <ul>${t.included.map(i => `<li>${i}</li>`).join("")}</ul>
    </div>

    <div class="block">
      <h3>Not included</h3>
      <ul>${t.excluded.map(i => `<li>${i}</li>`).join("")}</ul>
    </div>

    <div class="block">
      <h3>Program</h3>
      <ul>${t.program.map(i => `<li>${i}</li>`).join("")}</ul>
    </div>

    <a class="whatsapp-btn"
       href="https://wa.me/84777770759"
       target="_blank">
       Book via WhatsApp
    </a>
  `;
}

document.addEventListener("DOMContentLoaded", renderPage);
