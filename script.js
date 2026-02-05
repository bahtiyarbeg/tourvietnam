document.addEventListener("DOMContentLoaded", () => {

  /**********************
   * LANGUAGE
   **********************/
  let lang = localStorage.getItem("lang") || "en";
  localStorage.setItem("lang", lang);

  document.querySelectorAll(".lang").forEach(btn => {
    btn.addEventListener("click", () => {
      localStorage.setItem("lang", btn.dataset.lang);
      location.reload();
    });
  });

  /**********************
   * STATIC TEXT
   **********************/
  const TITLE = {
    en: "Tours in Vietnam",
    ru: "Туры по Вьетнаму",
    vi: "Tour tại Việt Nam"
  };

  const SUBTITLE = {
    en: "Islands • Sea • Snorkeling • Hon Tam",
    ru: "Острова • Море • Снорклинг • Хон Там",
    vi: "Đảo • Biển • Lặn ngắm san hô • Hòn Tằm"
  };

  const titleEl = document.getElementById("title");
  const subtitleEl = document.getElementById("subtitle");

  if (titleEl) titleEl.textContent = TITLE[lang];
  if (subtitleEl) subtitleEl.textContent = SUBTITLE[lang];

  /**********************
   * INDEX PAGE — TOURS
   **********************/
  const grid = document.getElementById("tours");

  if (grid) {
    if (typeof TOURS !== "object") {
      grid.innerHTML = "<p style='color:red'>TOURS not loaded</p>";
      return;
    }

    grid.innerHTML = "";

    Object.keys(TOURS).forEach(id => {
      const tour = TOURS[id];
      const t = tour.texts?.[lang];

      if (!t) return;

      const card = document.createElement("a");
      card.className = "card";
      card.href = `tour.html?id=${id}`;

      card.innerHTML = `
        <img src="${tour.image}" alt="${t.title}">
        <h3>${t.title}</h3>
        <p>${t.short}</p>
      `;

      grid.appendChild(card);
    });

    if (!grid.children.length) {
      grid.innerHTML = "<p>No tours for this language</p>";
    }
  }

  /**********************
   * TOUR PAGE
   **********************/
  const tourBox = document.getElementById("tour");

  if (tourBox) {
    const id = new URLSearchParams(location.search).get("id");
    const tour = TOURS?.[id];
    const t = tour?.texts?.[lang];

    if (!tour || !t) {
      tourBox.innerHTML = "<p>Tour not found</p>";
      return;
    }

    tourBox.innerHTML = `
      <img src="${tour.image}" class="big-image">
      <h1>${t.title}</h1>
      <p>${t.short}</p>

      <p><b>⏰ Time:</b> ${t.time}</p>
      <p><b>🗺 Program:</b> ${t.program}</p>
      <p><b>🎒 What to take:</b> ${t.take}</p>
      <p><b>✅ Included:</b> ${t.included}</p>
      <p><b>❌ Not included:</b> ${t.not_included}</p>

      <a class="book-btn"
         href="https://wa.me/84777770759?text=Hello! I want to book ${encodeURIComponent(t.title)}"
         target="_blank">
         Book via WhatsApp
      </a>
    `;
  }

});
