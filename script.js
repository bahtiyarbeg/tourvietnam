
const tours = [
  {
    title: "De Luxe островной тур",
    img: "img/de-luxe/1.jpg",
    desc: "Комфортная морская экскурсия с пляжем Вай Чай и рыбацкой деревней."
  },
  {
    title: "VIP тур – Хон Там",
    img: "img/hon-tam-1/1.jpg",
    desc: "Грязевые ванны, море и расслабляющий отдых на острове Хон Там."
  },
  {
    title: "Mini Beach + Хон Там",
    img: "img/mini-hontam/1.jpg",
    desc: "Комфортный пляж Mini Beach и посещение острова Хон Там."
  },
  {
    title: "Снорклинг на катере",
    img: "img/snorkeling/1.jpg",
    desc: "Кораллы, тропические рыбы и чистая вода у острова Хон Мун."
  },
  {
    title: "Дайвинг с аквалангом",
    img: "img/diving/1.jpg",
    desc: "Одно погружение с инструктором. Подходит для новичков."
  },
  {
    title: "Виноградники Нинь Туань",
    img: "img/grape/1.jpg",
    desc: "Виноградники, дегустации и красивые пейзажи региона."
  }
];

const container = document.querySelector(".tours");

if (container) {
  tours.forEach(tour => {
    const div = document.createElement("div");
    div.className = "tour";
    div.innerHTML = `
      <img src="${tour.img}" alt="${tour.title}">
      <h3>${tour.title}</h3>
      <p>${tour.desc}</p>
      <a class="btn-book"
         href="https://wa.me/84778532223?text=Здравствуйте! Интересует тур: ${encodeURIComponent(tour.title)}"
         target="_blank">
         Забронировать
      </a>
    `;
    container.appendChild(div);
  });
}
