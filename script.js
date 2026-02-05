// ===== CONFIG =====
let currentLang = "ru";

// ===== SAFE CHECK =====
document.addEventListener("DOMContentLoaded", () => {
  if (!window.tours || !Array.isArray(tours)) {
    console.error("❌ tours.js not loaded or broken");
    return;
  }

  const grid = document.getElementById("toursGrid");
  if (!grid) {
    console.error("❌ toursGrid not found in HTML");
    return;
  }

  renderTours();
  initLangButtons();
});

// ===== RENDER =====
function renderTours() {
  const grid = document.getElementById("toursGrid");
  grid.innerHTML = "";

  tours.forEach(tour => {
    const t = tour.lang[currentLang] || tour.lang["en"];

    const card = document.createElement("a");
    card.className = "tour-card";
    card.href = `tour.html?id=${tour.id}`;

    card.innerHTML = `
      <img src="${tour.images[0]}" alt="${t.title}">
      <div class="tour-info">
        <h3>${t.title}</h3>
        <p>${t.subtitle}</p>
      </div>
    `;

    grid.appendChild(card);
  });
}

// ===== LANGUAGE =====
function initLangButtons() {
  document.querySelectorAll(".lang-switch button").forEach(btn => {
    btn.addEventListener("click", () => {
      currentLang = btn.textContent.toLowerCase();
      renderTours();
    });
  });
}
