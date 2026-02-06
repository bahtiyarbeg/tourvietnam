const grid = document.getElementById("toursGrid");
const LANG_DEFAULT = "ru";
let currentLang = localStorage.getItem("tourLang") || LANG_DEFAULT;

// Переводы для заголовка
const translations = {
  ru: { title: "Туры по Вьетнаму", subtitle: "Острова • Море • Снорклинг • Хон Там" },
  en: { title: "Tours in Vietnam", subtitle: "Islands • Sea • Snorkeling • Hon Tam" },
  vi: { title: "Tour Việt Nam", subtitle: "Đảo • Biển • Lặn biển • Hòn Tằm" },
  zh: { title: "越南旅游", subtitle: "岛屿 • 大海 • 浮潜 • 蚕岛" },
  ko: { title: "베트남 투어", subtitle: "섬 • 바다 • 스노클링 • 혼탐" },
  fr: { title: "Circuits au Vietnam", subtitle: "Îles • Mer • Plongée • Hon Tam" },
  tr: { title: "Vietnam Turları", subtitle: "Adalar • Deniz • Şnorkel • Hon Tam" }
};

function updateHeader() {
  const t = translations[currentLang] || translations[LANG_DEFAULT];
  document.querySelector('[data-i18n="title"]').textContent = t.title;
  document.querySelector('[data-i18n="subtitle"]').textContent = t.subtitle;
}

function setActiveLangButton() {
  document.querySelectorAll(".lang-switch button").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === currentLang);
  });
}

function renderTours() {
  if (!window.tours || !Array.isArray(window.tours)) {
    console.error("❌ tours.js не загружен");
    grid.innerHTML = "<p style='text-align:center;color:#666;'>Загрузка туров...</p>";
    return;
  }

  grid.innerHTML = "";

  window.tours.forEach(tour => {
    const t = tour[currentLang] || tour[LANG_DEFAULT];
    if (!t) return;

    const imgUrl = tour.images?.[0] || "https://via.placeholder.com/400x300?text=Tour";
    
    const card = document.createElement("article");
    card.className = "tour-card";
    
    card.innerHTML = `
      <img src="${imgUrl}" alt="${t.title}" loading="lazy">
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

/* ===== EVENTS ===== */
document.querySelectorAll(".lang-switch button").forEach(btn => {
  btn.addEventListener("click", () => {
    currentLang = btn.dataset.lang;
    localStorage.setItem("tourLang", currentLang);
    setActiveLangButton();
    updateHeader();
    renderTours();
  });
});

// Init
setActiveLangButton();
updateHeader();
renderTours();
