document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("tours");

  if (!container) {
    console.error("❌ Контейнер #tours не найден");
    return;
  }

  if (!window.TOURS || !Array.isArray(TOURS)) {
    console.error("❌ TOURS не найден или не массив");
    return;
  }

  TOURS.forEach(tour => {
    const card = document.createElement("a");
    card.className = "card";
    card.href = `tour.html?id=${tour.id}`;

    card.innerHTML = `
      <img src="${tour.img}" alt="${tour.title}">
      <div class="card-body">
        <h3>${tour.title}</h3>
        <p>${tour.desc}</p>
      </div>
    `;

    container.appendChild(card);
  });

  console.log("✅ Туры успешно загружены:", TOURS.length);
});
