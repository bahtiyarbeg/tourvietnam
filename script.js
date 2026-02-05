const container = document.getElementById("tours");

if (!container) {
  alert("❌ Контейнер #tours не найден");
}

if (!Array.isArray(tours)) {
  alert("❌ tours НЕ ЗАГРУЖЕН");
}

tours.forEach(tour => {
  const card = document.createElement("a");
  card.className = "card";
  card.href = `tour.html?id=${tour.id}`;

  card.innerHTML = `
    <img src="${tour.image}">
    <div class="card-body">
      <h3>${tour.title}</h3>
      <p>${tour.subtitle}</p>
    </div>
  `;

  container.appendChild(card);
});
