document.addEventListener("DOMContentLoaded", () => {

  const grid = document.getElementById("toursGrid");
  if (!grid) return;

  let LANG = "ru";

  function detectTours() {
    if (Array.isArray(window.tours)) return window.tours;
    if (window.data && Array.isArray(window.data.tours)) return window.data.tours;
    if (Array.isArray(window.TOURS)) return window.TOURS;
    return [];
  }

  function getText(obj, key) {
    if (!obj) return "";
    if (typeof obj === "string") return obj;
    return obj[key] || obj.ru || obj.en || "";
  }

  function getImage(t) {
    if (Array.isArray(t.images) && t.images.length) return t.images[0];
    if (typeof t.image === "string") return t.image;
    return "https://via.placeholder.com/600x400?text=TourVietnam";
  }

  function render() {
    const tours = detectTours();
    grid.innerHTML = "";

    if (!tours.length) {
      grid.innerHTML = "<p style='text-align:center'>Туры не найдены</p>";
      return;
    }

    tours.forEach((t, i) => {
      const title =
        getText(t[LANG], "title") ||
        getText(t.title, LANG) ||
        `Tour ${i + 1}`;

      const desc =
        getText(t[LANG], "short") ||
        getText(t.description, LANG) ||
        "";

      const price =
        typeof t.price === "number"
          ? new Intl.NumberFormat("vi-VN").format(t.price) + " ₫"
          : "";

      const card = document.createElement("div");
      card.className = "tour-card";

      card.innerHTML = `
        <img src="${getImage(t)}" alt="">
        <div class="tour-info">
          <div class="tour-title">${title}</div>
          <div class="tour-desc">${desc}</div>
          ${price ? `<div class="tour-price">${price}</div>` : ""}
        </div>
      `;

      grid.appendChild(card);
    });
  }

  document.querySelectorAll(".lang-switch button").forEach(btn => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".lang-switch button")
        .forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      LANG = btn.dataset.lang || "ru";
      render();
    });
  });

  render();
});
