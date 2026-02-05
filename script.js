const lang = localStorage.getItem("lang") || "en";
localStorage.setItem("lang", lang);

document.querySelectorAll(".lang").forEach(btn => {
  btn.onclick = () => {
    localStorage.setItem("lang", btn.dataset.lang);
    location.reload();
  };
});

if (document.getElementById("tours")) {
  const grid = document.getElementById("tours");
  Object.entries(TOURS).forEach(([id, tour]) => {
    const t = tour[lang];
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

if (document.getElementById("tour")) {
  const id = new URLSearchParams(location.search).get("id");
  const tour = TOURS[id];
  if (tour && tour[lang]) {
    const t = tour[lang];
    document.getElementById("tour").innerHTML = `
      <img src="${tour.image}" class="big">
      <h1>${t.title}</h1>
      <p class="short">${t.short}</p>
      <div class="desc">${t.description}</div>
    `;
  }
}
