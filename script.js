let lang = localStorage.getItem("lang") || "en";
localStorage.setItem("lang", lang);

// переключение языков
document.querySelectorAll(".lang button").forEach(btn => {
  btn.onclick = () => {
    localStorage.setItem("lang", btn.dataset.lang);
    location.reload();
  };
});

// ГЛАВНАЯ
const grid = document.getElementById("tours");
if (grid) {
  document.getElementById("title").innerText =
    TEXTS[lang].title;
  document.getElementById("subtitle").innerText =
    TEXTS[lang].subtitle;

  Object.entries(TOURS).forEach(([id, tour]) => {
    const t = tour.texts[lang];
    grid.innerHTML += `
      <a class="card" href="tour.html?id=${id}">
        <img src="${tour.image}">
        <h3>${t.title}</h3>
        <p>${t.short}</p>
      </a>
    `;
  });
}

// СТРАНИЦА ТУРА
const tourBox = document.getElementById("tour");
if (tourBox) {
  const id = new URLSearchParams(location.search).get("id");
  const tour = TOURS[id];
  const t = tour.texts[lang];

  tourBox.innerHTML = `
    <img src="${tour.image}" class="big">
    <h1>${t.title}</h1>
    <p><b>${t.short}</b></p>
    <p>${t.description}</p>
  `;
}
