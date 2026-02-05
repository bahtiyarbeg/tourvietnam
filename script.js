let lang = localStorage.getItem("lang") || "en";
localStorage.setItem("lang", lang);

// language switch
document.querySelectorAll(".lang").forEach(b => {
  b.onclick = () => {
    localStorage.setItem("lang", b.dataset.lang);
    location.reload();
  };
});

// ===== MAIN PAGE =====
const grid = document.getElementById("tours");
if (grid) {
  Object.entries(TOURS).forEach(([id, tour]) => {
    const t = tour.texts[lang];
    if (!t) return;

    grid.insertAdjacentHTML("beforeend", `
      <a class="card" href="tour.html?id=${id}">
        <img src="${tour.image}">
        <h3>${t.title}</h3>
        <p>${t.short}</p>
        <strong>${tour.price}</strong>
      </a>
    `);
  });
}

// ===== TOUR PAGE =====
const box = document.getElementById("tour");
if (box) {
  const id = new URLSearchParams(location.search).get("id");
  const tour = TOURS[id];
  if (!tour) return;

  const t = tour.texts[lang];
  box.innerHTML = `
    <img src="${tour.image}" class="big">
    <h1>${t.title}</h1>
    <p>${t.description}</p>
    <strong>Price: ${tour.price}</strong>
  `;

  document.getElementById("wa").href =
    `https://wa.me/${tour.whatsapp}?text=Booking: ${t.title}`;
}
