document.addEventListener("DOMContentLoaded", () => {

  // язык
  let lang = localStorage.getItem("lang") || "en";
  localStorage.setItem("lang", lang);

  // кнопки языков
  document.querySelectorAll(".lang button").forEach(btn => {
    btn.onclick = () => {
      localStorage.setItem("lang", btn.dataset.lang);
      location.reload();
    };
  });

  // ---------- ГЛАВНАЯ ----------
  const grid = document.getElementById("tours");
  if (grid && typeof TOURS !== "undefined") {

    const title = document.getElementById("title");
    const subtitle = document.getElementById("subtitle");

    if (TEXTS && TEXTS[lang]) {
      title.innerText = TEXTS[lang].title;
      subtitle.innerText = TEXTS[lang].subtitle;
    }

    grid.innerHTML = "";

    Object.entries(TOURS).forEach(([id, tour]) => {
      const t = tour.texts[lang];
      if (!t) return;

      grid.innerHTML += `
        <a class="card" href="tour.html?id=${id}">
          <img src="${tour.image}">
          <h3>${t.title}</h3>
          <p>${t.short}</p>
        </a>
      `;
    });
  }

  // ---------- СТРАНИЦА ТУРА ----------
  const tourBox = document.getElementById("tour");
  if (tourBox && typeof TOURS !== "undefined") {

    const id = new URLSearchParams(location.search).get("id");
    const tour = TOURS[id];

    if (!tour || !tour.texts[lang]) {
      tourBox.innerHTML = "<p>Tour not found</p>";
      return;
    }

    const t = tour.texts[lang];

    tourBox.innerHTML = `
      <img src="${tour.image}" class="big">
      <h1>${t.title}</h1>
      <p><b>${t.short}</b></p>
      <p>${t.description}</p>
    `;
  }

});
