/***********************
 * ЯЗЫК (по умолчанию EN)
 ***********************/
let lang = localStorage.getItem("lang") || "en";
localStorage.setItem("lang", lang);

/***********************
 * ПЕРЕКЛЮЧЕНИЕ ЯЗЫКА
 ***********************/
document.querySelectorAll(".lang button").forEach(btn => {
  btn.addEventListener("click", () => {
    localStorage.setItem("lang", btn.dataset.lang);
    location.reload();
  });
});

/***********************
 * ОПРЕДЕЛЯЕМ СТРАНИЦУ
 ***********************/
const isIndex = document.getElementById("tours");
const isTour = document.getElementById("tour");

/***********************
 * ГЛАВНАЯ СТРАНИЦА
 ***********************/
if (isIndex) {
  const grid = document.getElementById("tours");
  grid.innerHTML = "";

  Object.entries(TOURS).forEach(([id, tour]) => {
    const t = tour.texts[lang];
    if (!t) return;

    grid.innerHTML += `
      <a class="card" href="tour.html?id=${id}">
        <img src="${tour.image}" alt="${t.title}">
        <h3>${t.title}</h3>
        <p>${t.short}</p>
      </a>
    `;
  });
}

/***********************
 * СТРАНИЦА ТУРА
 ***********************/
if (isTour) {
  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const tour = TOURS[id];

  if (!tour || !tour.texts[lang]) {
    document.getElementById("tour").innerHTML = `
      <p style="text-align:center">Tour not found</p>
    `;
  } else {
    const t = tour.texts[lang];

    document.getElementById("tour").innerHTML = `
      <img src="${tour.image}" class="big" alt="${t.title}">
      <h1>${t.title}</h1>
      <p class="short">${t.short}</p>
      <p class="desc">${t.description}</p>
    `;
  }
}
