const grid = document.getElementById("toursGrid");

const LANG_DEFAULT = "ru";
let currentLang = LANG_DEFAULT;

function renderTours() {
  if (!window.tours || !Array.isArray(window.tours)) {
    console.error("❌ tours.js не загружен или повреждён");
    return;
  }

  grid.innerHTML = "";

  window.tours.forEach(tour => {
    const t = tour[currentLang] || tour[LANG_DEFAULT];

    const card = document.createElement("div");
    card.className = "tour-card";

    card.innerHTML = `
      <img src="${tour.images[0]}" alt="${t.title}">
      <div class="content">
        <h3>${t.title}</h3>
        <p>${t.subtitle}</p>
      </div>
    `;

    card.onclick = () => {
      window.location.href = `tour.html?id=${tour.id}`;
    };

    grid.appendChild(card);
  });
}

/* ===== LANG SWITCH ===== */
document.querySelectorAll(".lang-switch button").forEach(btn => {
  btn.addEventListener("click", () => {
    currentLang = btn.dataset.lang;
    renderTours();
  });
});

renderTours();
