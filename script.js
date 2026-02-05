const lang = localStorage.getItem("lang") || "en";
localStorage.setItem("lang", lang);

// переключение языка
document.querySelectorAll(".lang").forEach(btn => {
  btn.onclick = () => {
    localStorage.setItem("lang", btn.dataset.lang);
    location.reload();
  };
});

// ===== ГЛАВНАЯ =====
const grid = document.getElementById("tours");
if (grid && typeof TOURS !== "undefined") {
  Object.entries(TOURS).forEach(([id, tour]) => {
    const t = tour.texts[lang];
    if (!t) return;

    grid.innerHTML += `
      <a class="card" href="tour.html?id=${id}">
        <img src="${tour.image}">
        <h3>${t.title}</h3>
        <p>${t.short}</p>
        <strong>${tour.price}</strong>
      </a>
    `;
  });
}

// ===== СТРАНИЦА ТУРА =====
const tourBox = document.getElementById("tour");
if (tourBox) {
  const id = new URLSearchParams(location.search).get("id");
  const tour = TOURS[id];
  if (tour) {
    const t = tour.texts[lang];
    tourBox.innerHTML = `
      <img src="${tour.image}" class="big">
      <h1>${t.title}</h1>
      <p>${t.description}</p>
      <p class="price">Price: ${tour.price}</p>
      <a class="wa" href="https://wa.me/${tour.whatsapp}?text=Booking:${t.title}" target="_blank">
        Book via WhatsApp
      </a>
    `;
  }
}
