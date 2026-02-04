document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("tours");

  TOURS.forEach(tour => {
    const a = document.createElement("a");
    a.className = "card";
    a.href = `tour.html?id=${tour.id}`;

    a.innerHTML = `
      <img src="${tour.img}">
      <div class="card-body">
        <h3>${tour.title}</h3>
        <p>${tour.desc}</p>
      </div>
    `;

    container.appendChild(a);
  });
});
