const tours = [
  {
    title: "De Luxe островной тур",
    img: "img/de-luxe/1.jpg",
    desc: "Комфортабельная морская экскурсия с пляжем Бай Чань.",
    time: "08:00 – 16:00",
    route: [
      "Трансфер",
      "Катер",
      "Пляж Бай Чань",
      "Отдых и купание"
    ],
    include: [
      "Трансфер",
      "Катер",
      "Входные билеты",
      "Англоговорящий гид"
    ],
    exclude: [
      "Дополнительные услуги"
    ],
    take: [
      "Купальник",
      "Полотенце",
      "Солнцезащитный крем"
    ]
  }
];

const container = document.getElementById("tours");

tours.forEach(t => {
  const div = document.createElement("div");
  div.className = "tour";

  div.innerHTML = `
    <img src="${t.img}">
    <div class="tour-content">
      <h2>${t.title}</h2>
      <p>${t.desc}</p>

      <button class="toggle">▶ Программа тура</button>

      <div class="details">
        <p><b>Время:</b> ${t.time}</p>

        <p><b>Маршрут:</b></p>
        <ul>${t.route.map(i => `<li>${i}</li>`).join("")}</ul>

        <p><b>Что входит:</b></p>
        <ul>${t.include.map(i => `<li>${i}</li>`).join("")}</ul>

        <p><b>Что не входит:</b></p>
        <ul>${t.exclude.map(i => `<li>${i}</li>`).join("")}</ul>

        <p><b>Что взять с собой:</b></p>
        <ul>${t.take.map(i => `<li>${i}</li>`).join("")}</ul>
      </div>

      <a class="btn wa" href="https://wa.me/84778532223">Забронировать</a>
    </div>
  `;

  div.querySelector(".toggle").onclick = () => {
    const d = div.querySelector(".details");
    d.style.display = d.style.display === "block" ? "none" : "block";
  };

  container.appendChild(div);
});

function setLang(lang) {
  alert("Язык переключён: " + lang);
}
