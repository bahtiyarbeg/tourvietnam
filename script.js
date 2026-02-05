let currentLang = localStorage.getItem("lang") || "ru";

const container = document.getElementById("tours");

function renderTours() {
  container.innerHTML = "";

  tours.forEach(tour => {
    const card = document.createElement("a");
    card.className = "card";
    card.href = `tour.html?id=${tour.id}&lang=${currentLang}`;

    card.innerHTML = `
      <img src="${tour.image}">
      <div class="card-body">
        <h3>${tour.title[currentLang]}</h3>
        <p>${tour.subtitle[currentLang]}</p>
      </div>
    `;

    container.appendChild(card);
  });
}

document.querySelectorAll("[data-lang]").forEach(btn => {
  btn.onclick = () => {
    currentLang = btn.dataset.lang;
    localStorage.setItem("lang", currentLang);
    renderTours();
    translateStatic();
  };
});

function translateStatic() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    const dict = {
      title: {
        ru: "Экскурсии по Вьетнаму",
        en: "Tours in Vietnam",
        vi: "Tour tại Việt Nam"
      },
      subtitle: {
        ru: "Острова • Море • Снорклинг • Хон Там",
        en: "Islands • Sea • Snorkeling • Hon Tam",
        vi: "Đảo • Biển • Lặn biển • Hòn Tằm"
      }
    };
    el.textContent = dict[key][currentLang];
  });
}

renderTours();
translateStatic();
