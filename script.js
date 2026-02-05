document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("tours");

  if (!container) {
    console.error("Контейнер #tours не найден");
    return;
  }

  if (typeof tours === "undefined") {
    console.error("Массив tours не загружен");
    return;
  }

  tours.forEach(tour => {
    const card = document.createElement("a");
    card.className = "card";
    card.href = `tour.html?id=${tour.id}`;

    card.innerHTML = `
      <img src="${tour.image}" alt="${tour.title}">
      <div class="card-body">
        <h3>${tour.title}</h3>
        <p>${tour.subtitle}</p>
      </div>
    `;

    container.appendChild(card);
  });
});
