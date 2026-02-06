let currentLang = "en";

const titleEl = document.getElementById("title");
const subtitleEl = document.getElementById("subtitle");
const toursEl = document.getElementById("tours");
const langButtons = document.querySelectorAll(".lang-switch button");

const texts = {
  title: {
    en: "Premium Tours in Vietnam",
    ru: "Туры по Вьетнаму",
    vi: "Tour du lịch Việt Nam",
    zh: "越南旅游",
    kr: "베트남 투어",
    fr: "Circuits au Vietnam",
    tr: "Vietnam Turları"
  },
  subtitle: {
    en: "Islands • Sea • Snorkeling • Hon Tam",
    ru: "Острова • Море • Снорклинг • Хон Там",
    vi: "Đảo • Biển • Lặn • Hòn Tằm",
    zh: "岛屿 • 大海 • 浮潜",
    kr: "섬 • 바다 • 스노클링",
    fr: "Îles • Mer • Snorkeling",
    tr: "Adalar • Deniz • Şnorkel"
  }
};

function render() {
  titleEl.textContent = texts.title[currentLang];
  subtitleEl.textContent = texts.subtitle[currentLang];

  toursEl.innerHTML = "";

  window.TOURS.forEach(tour => {
    const card = document.createElement("div");
    card.className = "tour-card";

    card.innerHTML = `
      <img src="${tour.image}" alt="">
      <div class="content">
        <h3>${tour.title[currentLang]}</h3>
        <p>${tour.desc[currentLang]}</p>
      </div>
    `;

    toursEl.appendChild(card);
  });

  langButtons.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === currentLang);
  });
}

langButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    currentLang = btn.dataset.lang;
    render();
  });
});

render();
