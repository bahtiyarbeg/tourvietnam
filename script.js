const DEFAULT_LANG = "en";
let lang = localStorage.getItem("lang") || DEFAULT_LANG;
localStorage.setItem("lang", lang);

// переключение языка
document.querySelectorAll("[data-lang]").forEach(btn => {
  btn.onclick = () => {
    localStorage.setItem("lang", btn.dataset.lang);
    location.reload();
  };
});

// определяем страницу
const isIndex = document.getElementById("tours");
const isTour = document.getElementById("tour");

// ===== INDEX =====
if (isIndex) {
  isIndex.innerHTML = "";

  tours.forEach(tour => {
    const tr = tour.i18n[lang] || tour.i18n.en;

    const card = document.createElement("a");
    card.className = "card";
    card.href = `tour.html?id=${tour.id}`;

    card.innerHTML = `
      <img src="${tour.image}" alt="${tr.title}">
      <div class="card-body">
        <h3>${tr.title}</h3>
        <p>${tr.subtitle}</p>
      </div>
    `;

    isIndex.appendChild(card);
  });
}

// ===== TOUR PAGE =====
if (isTour) {
  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const tour = tours.find(t => t.id === id);

  if (!tour) {
    isTour.innerHTML = "<p>Tour not found</p>";
  } else {
    const tr = tour.i18n[lang] || tour.i18n.en;

    isTour.className = "tour";
    isTour.innerHTML = `
      <img src="${tour.image}" alt="${tr.title}">
      <h1>${tr.title}</h1>
      <p>${tr.subtitle}</p>
      <p>${tr.description}</p>
    `;
  }
}
