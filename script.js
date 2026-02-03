const tours = [
  {
    title: "De Luxe островной тур",
    img: "img/de-luxe/1.jpg",
    short: "Комфортная морская экскурсия с пляжем Вай Чай и рыбацкой деревней.",
    time: "08:00 – 16:00",

    program: `
• Трансфер до порта  
• Морская прогулка на катере  
• Купание и отдых на пляже Вай Чай  
• Посещение рыбацкой деревни  
• Свободное время
    `,

    take: `
• Купальник  
• Полотенце  
• Солнцезащитный крем  
• Головной убор
    `,

    included: `
• Катер  
• Англоговорящий гид  
• Входные билеты  
• Питьевая вода
    `,

    notIncluded: `
• Личные расходы  
• Дополнительные напитки
    `
  },

  {
    title: "VIP тур – Хон Там",
    img: "img/hon-tam-1/1.jpg",
    short: "Расслабляющий отдых на острове Хон Там с грязевыми ваннами.",
    time: "08:30 – 15:30",

    program: `
• Трансфер  
• Катер до острова Хон Там  
• Грязевые ванны  
• Купание в море  
• Свободное время
    `,

    take: `
• Купальник  
• Полотенце  
• Сменную одежду
    `,

    included: `
• Катер  
• Англоговорящий гид  
• Входные билеты  
• Грязевые ванны
    `,

    notIncluded: `
• Личные расходы  
• Еда и напитки на острове
    `
  },

  {
    title: "Mini Beach + Хон Там",
    img: "img/mini-hontam/1.jpg",
    short: "Лучшие пляжи Нячанга за один день.",
    time: "08:00 – 16:00",

    program: `
• Трансфер  
• Катер до Mini Beach  
• Купание и отдых  
• Переезд на Хон Там  
• Свободное время
    `,

    take: `
• Купальник  
• Полотенце  
• Солнцезащитный крем
    `,

    included: `
• Катер  
• Англоговорящий гид  
• Входные билеты
    `,

    notIncluded: `
• Личные расходы  
• Дополнительные услуги
    `
  },

  {
    title: "Снорклинг на катере",
    img: "img/snorkeling/1.jpg",
    short: "Кораллы и тропические рыбы в чистой воде.",
    time: "08:00 – 14:00",

    program: `
• Трансфер  
• Катер к коралловым рифам  
• Снорклинг  
• Купание в море  
• Возвращение
    `,

    take: `
• Купальник  
• Полотенце  
• Солнцезащитный крем
    `,

    included: `
• Катер  
• Англоговорящий гид  
• Маска и трубка  
• Вода
    `,

    notIncluded: `
• Личные расходы  
• Фото- и видеосъёмка
    `
  },

  {
    title: "Дайвинг с аквалангом",
    img: "img/diving/1.jpg",
    short: "Погружение с инструктором, подходит для новичков.",
    time: "08:00 – 14:30",

    program: `
• Трансфер  
• Инструктаж  
• Одно погружение  
• Отдых на катере  
• Возвращение
    `,

    take: `
• Купальник  
• Полотенце
    `,

    included: `
• Катер  
• Англоговорящий гид  
• Дайвинг-снаряжение  
• Инструктор
    `,

    notIncluded: `
• Личные расходы  
• Дополнительные погружения
    `
  },

  {
    title: "Виноградники Нинь Туан",
    img: "img/grape/1.jpg",
    short: "Природа, дегустации и красивые пейзажи.",
    time: "07:30 – 16:00",

    program: `
• Выезд из города  
• Посещение виноградников  
• Дегустация  
• Прогулка и фото  
• Возвращение
    `,

    take: `
• Удобную обувь  
• Головной убор  
• Фотоаппарат
    `,

    included: `
• Транспорт  
• Англоговорящий гид  
• Входные билеты
    `,

    notIncluded: `
• Личные расходы  
• Покупка продукции
    `
  }
];

const container = document.querySelector(".tours");

tours.forEach(tour => {
  const div = document.createElement("div");
  div.className = "tour-card";

  div.innerHTML = `
    <img src="${tour.img}" alt="${tour.title}">
    <h3>${tour.title}</h3>
    <p>${tour.short}</p>

    <details>
      <summary>Программа тура</summary>
      <div class="program">
        <p><strong>Время:</strong> ${tour.time}</p>
        <p><strong>Маршрут:</strong><br>${tour.program}</p>
        <p><strong>Что взять с собой:</strong><br>${tour.take}</p>
        <p><strong>Входит в стоимость:</strong><br>${tour.included}</p>
        <p><strong>Не входит:</strong><br>${tour.notIncluded}</p>
        <p><strong>Гид:</strong> англоговорящий</p>
      </div>
    </details>

    <a class="btn" href="https://wa.me/84778532223?text=Здравствуйте! Хочу забронировать ${tour.title}" target="_blank">
      Забронировать
    </a>
  `;

  container.appendChild(div);
});
const translations = {
  ru: {
    title: "Экскурсии по Вьетнаму",
    book: "Забронировать",
    program: "Программа тура"
  },
  en: {
    title: "Tours in Vietnam",
    book: "Book now",
    program: "Tour program"
  },
  vi: {
    title: "Tour tại Việt Nam",
    book: "Đặt tour",
    program: "Chương trình tour"
  },
  zh: {
    title: "越南旅游",
    book: "预订",
    program: "行程安排"
  },
  ko: {
    title: "베트남 투어",
    book: "예약하기",
    program: "투어 일정"
  },
  fr: {
    title: "Excursions au Vietnam",
    book: "Réserver",
    program: "Programme du tour"
  },
  hi: {
    title: "वियतनाम टूर",
    book: "बुक करें",
    program: "टूर कार्यक्रम"
  }
};

function setLang(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });
}
