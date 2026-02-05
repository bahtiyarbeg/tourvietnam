/*********************************
 * GLOBAL LANGUAGE SETUP
 *********************************/
let lang = localStorage.getItem("lang") || "en";
localStorage.setItem("lang", lang);

/*********************************
 * LANGUAGE BUTTONS
 *********************************/
document.querySelectorAll(".lang").forEach(btn => {
  btn.addEventListener("click", () => {
    const selected = btn.dataset.lang;
    localStorage.setItem("lang", selected);
    location.reload();
  });
});

/*********************************
 * TRANSLATE STATIC TEXT
 *********************************/
const STATIC_TEXT = {
  title: {
    en: "Tours in Vietnam",
    ru: "Туры по Вьетнаму",
    vi: "Tour tại Việt Nam",
    zh: "越南旅游",
    ko: "베트남 투어",
    fr: "Circuits au Vietnam",
    tr: "Vietnam Turları"
  },
  subtitle: {
    en: "Islands • Sea • Snorkeling • Hon Tam",
    ru: "Острова • Море • Снорклинг • Хон Там",
    vi: "Đảo • Biển • Lặn ngắm san hô • Hòn Tằm",
    zh: "岛屿 • 大海 • 浮潜 • Hon Tam",
    ko: "섬 • 바다 • 스노클링 • 혼땀",
    fr: "Îles • Mer • Snorkeling • Hon Tam",
    tr: "Adalar • Deniz • Şnorkel • Hon Tam"
  }
};

if (document.getElementById("title")) {
  document.getElementById("title").textContent =
    STATIC_TEXT.title[lang] || STATIC_TEXT.title.en;
}

if (document.getElementById("subtitle")) {
  document.getElementById("subtitle").textContent =
    STATIC_TEXT.subtitle[lang] || STATIC_TEXT.subtitle.en;
}

/*********************************
 * INDEX PAGE — TOURS GRID
 *********************************/
const toursGrid = document.getElementById("tours");

if (toursGrid && typeof TOURS === "object") {
  toursGrid.innerHTML = "";

  Object.entries(TOURS).forEach(([id, tour]) => {
    if (!tour.texts || !tour.texts[lang]) return;

    const t = tour.texts[lang];

    const card = document.createElement("a");
    card.className = "card";
    card.href = `tour.html?id=${id}`;

    card.innerHTML = `
      <img src="${tour.image}" alt="${t.title}">
      <div class="card-body">
        <h3>${t.title}</h3>
        <p>${t.short}</p>
      </div>
    `;

    toursGrid.appendChild(card);
  });
}

/*********************************
 * TOUR PAGE — SINGLE TOUR
 *********************************/
const tourContainer = document.getElementById("tour");

if (tourContainer && typeof TOURS === "object") {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (!id || !TOURS[id] || !TOURS[id].texts[lang]) {
    tourContainer.innerHTML = "<p>Tour not found</p>";
  } else {
    const tour = TOURS[id];
    const t = tour.texts[lang];

    tourContainer.innerHTML = `
      <img src="${tour.image}" class="big-image" alt="${t.title}">
      <h1>${t.title}</h1>

      <p class="short">${t.short}</p>

      <div class="info">
        <p><strong>⏰ ${t.time}</strong></p>
        <p><strong>🧭 ${t.program}</strong></p>
        <p><strong>🎒 ${t.take}</strong></p>
        <p><strong>✅ ${t.included}</strong></p>
        <p><strong>❌ ${t.not_included}</strong></p>
      </div>

      <a class="book-btn" target="_blank"
         href="https://wa.me/84777770759?text=Hello! I want to book: ${encodeURIComponent(t.title)}">
         Book via WhatsApp
      </a>
    `;
  }
}
