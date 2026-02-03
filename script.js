const tours = [
  {
    img: "img/de-luxe/1.jpg",
    title: {
      ru: "De Luxe островной тур",
      en: "De Luxe Island Tour",
      vi: "Tour đảo De Luxe",
      zh: "豪华岛屿之旅",
      ko: "디럭스 아일랜드 투어",
      fr: "Tour îles De Luxe",
      hi: "डीलक्स द्वीप टूर"
    },
    desc: {
      ru: "Комфортная морская экскурсия с пляжем Вай Чай и рыбацкой деревней.",
      en: "Comfortable sea tour with Bai Chay beach and fishing village."
    },
    time: "08:00 – 16:00",
    take: "Купальник, полотенце, солнцезащитный крем",
    include: "Трансфер, катер, входные билеты, англоговорящий гид",
    exclude: "Личные расходы"
  }
];

let currentLang = "ru";

function renderTours() {
  const container = document.querySelector(".tours");
  container.innerHTML = "";

  tours.forEach(t => {
    container.innerHTML += `
      <div class="tour">
        <img src="${t.img}">
        <div class="tour-content">
          <h3>${t.title[currentLang]}</h3>
          <p>${t.desc[currentLang]}</p>

          <div class="program">
            <strong>Время:</strong> ${t.time}<br>
            <strong>Что взять:</strong> ${t.take}<br>
            <strong>Включено:</strong> ${t.include}<br>
            <strong>Не включено:</strong> ${t.exclude}
          </div>

          <a class="book" href="https://wa.me/84778532223">Забронировать</a>
        </div>
      </div>
    `;
  });
}

function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll(".lang-switch button")
    .forEach(b => b.classList.remove("active"));
  document.querySelector(`[onclick="setLang('${lang}')"]`).classList.add("active");
  renderTours();
}

renderTours();
