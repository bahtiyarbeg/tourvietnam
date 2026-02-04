let currentLang = localStorage.getItem("lang") || "ru";

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  renderIndex();
  renderTour();
}

function renderIndex() {
  const container = document.getElementById("tours");
  if (!container || !window.tours) return;

  container.innerHTML = "";

  Object.keys(tours).forEach(id => {
    const t = tours[id][currentLang] || tours[id]["ru"];

    container.innerHTML += `
      <a href="tour.html?id=${id}" class="card">
        <img src="${tours[id].image}" onerror="this.src='logo.png'">
        <div class="card-body">
          <h3>${t.title}</h3>
          <p>${t.subtitle}</p>
        </div>
      </a>
    `;
  });
}

function renderTour() {
  const el = document.getElementById("tour");
  if (!el) return;

  const id = new URLSearchParams(window.location.search).get("id");
  if (!id || !tours[id]) return;

  const t = tours[id][currentLang] || tours[id]["ru"];

  el.innerHTML = `
    <img class="hero" src="${tours[id].image}">
    <h1>${t.title}</h1>
    <p>${t.subtitle}</p>

    <div class="box"><b>Время:</b> ${t.time}</div>
    <div class="box"><b>Гид:</b> ${t.guide}</div>

    <div class="box">
      <b>Что взять:</b>
      <ul>${t.take.map(i => `<li>${i}</li>`).join("")}</ul>
    </div>

    <div class="box">
      <b>Включено:</b>
      <ul>${t.include.map(i => `<li>${i}</li>`).join("")}</ul>
    </div>

    <div class="box">
      <b>Не включено:</b>
      <ul>${t.exclude.map(i => `<li>${i}</li>`).join("")}</ul>
    </div>

    <div class="box">
      <b>Программа тура:</b>
      <ul>${t.program.map(i => `<li>${i}</li>`).join("")}</ul>
    </div>

    <a class="whatsapp" href="https://wa.me/84777770759">Book via WhatsApp</a>
  `;
}

renderIndex();
renderTour();
