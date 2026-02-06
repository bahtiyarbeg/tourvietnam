document.addEventListener("DOMContentLoaded", () => {
  if (!window.tours || !Array.isArray(window.tours)) {
    console.error("tours.js не загружен или пуст");
    return;
  }

  const grid = document.getElementById("toursGrid");
  if (!grid) {
    console.error("Нет #toursGrid");
    return;
  }

  grid.innerHTML = "";

  window.tours.forEach(tour => {
    const card = document.createElement("a");
    card.className = "tour-card";
    card.href = `tour.html?id=${tour.id}`;

    card.innerHTML = `
      <div class="tour-image">
        <img src="${tour.images?.[0] || 'img/placeholder.jpg'}" alt="">
      </div>
      <div class="tour-content">
        <h3>${tour.title?.ru || tour.title?.en || "Tour"}</h3>
        <p>${tour.short?.ru || tour.short?.en || ""}</p>
      </div>
    `;

    grid.appendChild(card);
  });
});
