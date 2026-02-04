let lang = localStorage.getItem("lang") || "ru";

function setLang(l) {
  lang = l;
  localStorage.setItem("lang", l);
  renderTour();
}

function renderTour() {
  const app = document.getElementById("app");
  if (!app) return;

  const id = new URLSearchParams(window.location.search).get("id");
  const tour = TOURS[id];
  if (!tour) {
    app.innerHTML = "<p>Tour not found</p>";
    return;
  }

  const t = tour.text[lang] || tour.text.ru;

  app.innerHTML = `
    <div class="tour">
      <img src="${tour.image}">
      <h1>${t.title}</h1>
      <p>${t.subtitle}</p>

      <div class="block"><b>Time:</b> ${tour.duration}</div>
      <div class="block"><b>Guide:</b> ${tour.guide}</div>

      <div class="block">
        <b>What to bring:</b>
        <ul>${t.take.map(i => `<li>${i}</li>`).join("")}</ul>
      </div>

      <div class="block">
        <b>Included:</b>
        <ul>${t.include.map(i => `<li>${i}</li>`).join("")}</ul>
      </div>

      <div class="block">
        <b>Not included:</b>
        <ul>${t.exclude.map(i => `<li>${i}</li>`).join("")}</ul>
      </div>

      <div class="block">
        <b>Program:</b>
        <ul>${t.program.map(i => `<li>${i}</li>`).join("")}</ul>
      </div>
    </div>
  `;
}

renderTour();
