const DEFAULT_LANG = "en";
let lang = localStorage.getItem("lang") || DEFAULT_LANG;

localStorage.setItem("lang", lang);

document.querySelectorAll("[data-lang]").forEach(btn => {
  btn.onclick = () => {
    localStorage.setItem("lang", btn.dataset.lang);
    location.reload();
  };
});

const path = location.pathname;
const params = new URLSearchParams(location.search);
const tourId = params.get("id");

if (path.includes("index")) renderIndex();
if (path.includes("tour")) renderTour();

function renderIndex() {
  const container = document.getElementById("tours");
  if (!container) return;

  container.innerHTML = "";

  tours.forEach(t => {
    const tr = t.i18n[lang] || t.i18n.en;

    const a = document.createElement("a");
    a.className = "card";
    a.href = `tour.html?id=${t.id}`;

    a.innerHTML = `
      <img src="${t.image}">
      <div class="card-body">
        <h3>${tr.title}</h3>
        <p>${tr.subtitle}</p>
      </div>
    `;

    container.appendChild(a);
  });
}

function renderTour() {
  const t = tours.find(x => x.id === tourId);
  if (!t) return;

  const tr = t.i18n[lang] || t.i18n.en;
  const container = document.getElementById("tour");

  container.className = "tour";
  container.innerHTML = `
    <img src="${t.image}">
    <h1>${tr.title}</h1>
    <p>${tr.subtitle}</p>
    <p>${tr.description}</p>
  `;
}
