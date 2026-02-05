let currentLang = localStorage.getItem("lang") || "en";

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  render();
}

function getParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function renderIndex() {
  document.getElementById("title").innerText = {
    en: "Tours in Vietnam",
    ru: "Экскурсии по Вьетнаму",
    vi: "Tour du lịch Việt Nam",
    zh: "越南旅游",
    ko: "베트남 투어",
    fr: "Excursions au Vietnam",
    tr: "Vietnam Turları"
  }[currentLang];

  document.getElementById("subtitle").innerText = {
    en: "Islands • Sea • Snorkeling • Hon Tam",
    ru: "Острова • Море • Снорклинг • Хон Там",
    vi: "Đảo • Biển • Lặn biển • Hòn Tằm",
    zh: "岛屿 • 海 • 浮潜 • 洪潭",
    ko: "섬 • 바다 • 스노클링",
    fr: "Îles • Mer • Snorkeling",
    tr: "Adalar • Deniz • Şnorkel"
  }[currentLang];

  const container = document.getElementById("tours");
  container.innerHTML = "";

  tours.forEach(t => {
    const a = document.createElement("a");
    a.className = "card";
    a.href = `tour.html?id=${t.id}`;
    a.innerHTML = `
      <img src="${t.image}">
      <div class="card-body">
        <h3>${t.title[currentLang]}</h3>
        <p>${t.subtitle[currentLang]}</p>
      </div>
    `;
    container.appendChild(a);
  });
}

function renderTour() {
  const id = getParam("id");
  const tour = tours.find(t => t.id === id);
  if (!tour) return;

  const box = document.getElementById("tour-page");
  box.innerHTML = `
    <img src="${tour.image}">
    <h1>${tour.title[currentLang]}</h1>
    <p>${tour.subtitle[currentLang]}</p>
    <p>${tour.description[currentLang]}</p>
  `;
}

function render() {
  if (document.getElementById("tours")) renderIndex();
  if (document.getElementById("tour-page")) renderTour();
}

render();
