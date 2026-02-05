// ===============================
// GLOBAL SETTINGS
// ===============================
const DEFAULT_LANG = "en";
const LANGS = ["en", "ru", "vi", "zh", "ko", "fr", "tr"];
const WHATSAPP_PHONE = "+84777770759";

// ===============================
// LANGUAGE
// ===============================
let lang = localStorage.getItem("lang");
if (!LANGS.includes(lang)) {
  lang = DEFAULT_LANG;
  localStorage.setItem("lang", lang);
}

// ===============================
// LANGUAGE BUTTONS
// ===============================
document.querySelectorAll("[data-lang]").forEach(btn => {
  btn.addEventListener("click", () => {
    const l = btn.dataset.lang;
    if (LANGS.includes(l)) {
      localStorage.setItem("lang", l);
      location.reload();
    }
  });
});

// ===============================
// HELPERS
// ===============================
function safe(value) {
  return value && value !== "" ? value : "—";
}

function t(tour, field) {
  return safe(tour?.texts?.[lang]?.[field]);
}

// ===============================
// INDEX PAGE (TOURS LIST)
// ===============================
const toursGrid = document.getElementById("tours");

if (toursGrid && typeof TOURS === "object") {
  toursGrid.innerHTML = "";

  Object.entries(TOURS).forEach(([id, tour]) => {
    const text = tour.texts?.[lang];
    if (!text) return;

    const card = document.createElement("a");
    card.className = "card";
    card.href = `tour.html?id=${id}`;

    card.innerHTML = `
      <img src="${tour.image}" alt="${text.title}">
      <div class="card-body">
        <h3>${text.title}</h3>
        <p>${text.short}</p>
      </div>
    `;

    toursGrid.appendChild(card);
  });
}

// ===============================
// TOUR PAGE
// ===============================
const tourContainer = document.getElementById("tour");

if (tourContainer && typeof TOURS === "object") {
  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const tour = TOURS[id];

  if (!tour || !tour.texts?.[lang]) {
    tourContainer.innerHTML = `<p>Tour not found</p>`;
  } else {
    const text = tour.texts[lang];

    tourContainer.innerHTML = `
      <img src="${tour.image}" class="big" alt="${text.title}">
      
      <h1>${text.title}</h1>
      <p class="subtitle">${text.short}</p>

      <ul class="tour-info">
        <li>⏰ <b>${lang === "ru" ? "Время" : "Time"}:</b> ${safe(text.time)}</li>
        <li>🗺️ <b>${lang === "ru" ? "Программа" : "Program"}:</b><br>${safe(text.program)}</li>
        <li>🎒 <b>${lang === "ru" ? "Что взять" : "What to take"}:</b><br>${safe(text.take)}</li>
        <li>✅ <b>${lang === "ru" ? "Включено" : "Included"}:</b><br>${safe(text.included)}</li>
        <li>❌ <b>${lang === "ru" ? "Не включено" : "Not included"}:</b><br>${safe(text.notIncluded)}</li>
      </ul>

      <a class="whatsapp-link"
         href="https://wa.me/${WHATSAPP_PHONE.replace("+", "")}?text=${encodeURIComponent(text.title)}"
         target="_blank">
        ${lang === "ru" ? "Забронировать через WhatsApp" : "Book via WhatsApp"}
      </a>
    `;
  }
}
