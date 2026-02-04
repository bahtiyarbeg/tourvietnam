let lang = "ru";

const ui = {
  ru: { title: "Экскурсии по Вьетнаму", sub: "Острова • Море • Снорклинг • Хон Там", program: "Программа тура" },
  en: { title: "Tours in Vietnam", sub: "Islands • Sea • Snorkeling • Hon Tam", program: "Tour program" },
  vi: { title: "Tour du lịch Việt Nam", sub: "Đảo • Biển • Lặn biển • Hòn Tằm", program: "Chương trình tour" },
  zh: { title: "越南旅游", sub: "岛屿 • 大海 • 浮潜 • 洪潭", program: "行程安排" },
  ko: { title: "베트남 투어", sub: "섬 • 바다 • 스노클링 • 혼탐", program: "투어 일정" },
  fr: { title: "Excursions au Vietnam", sub: "Îles • Mer • Snorkeling • Hon Tam", program: "Programme du tour" },
  tr: { title: "Vietnam Turları", sub: "Adalar • Deniz • Şnorkel • Hon Tam", program: "Tur Programı" }
};

const tours = [
  {
    img: "img/de-luxe/1.jpg",
    title: {
      ru: "De Luxe островной тур",
      en: "De Luxe Island Tour",
      vi: "Tour đảo De Luxe",
      zh: "豪华岛屿游",
      ko: "디럭스 섬 투어",
      fr: "Tour île De Luxe",
      tr: "De Luxe Ada Turu"
    },
    desc: {
      ru: "Комфортабельная морская экскурсия с пляжем Бай Чай.",
      en: "Comfortable sea tour with Bai Chai beach.",
      vi: "Tour biển với bãi Bai Chai.",
      zh: "白沙滩海上之旅",
      ko: "바이차이 해변 투어",
      fr: "Excursion vers la plage Bai Chai",
      tr: "Bai Chai plajı turu"
    },
    program: [
      "08:00 — трансфер",
      "Катер к пляжу Бай Чай",
      "Купание и отдых",
      "Рыбацкая деревня",
      "16:00 — возвращение"
    ]
  },

  {
    img: "img/vip-hon-tam-1/1.jpg",
    title: {
      ru: "VIP тур — Хон Там 1",
      en: "VIP Tour — Hon Tam 1",
      vi: "Tour VIP — Hòn Tằm 1",
      zh: "VIP 洪潭 1",
      ko: "VIP 혼탐 1",
      fr: "VIP Hon Tam 1",
      tr: "VIP Hon Tam 1"
    },
    desc: {
      ru: "Пляжи, грязевые ванны и море.",
      en: "Beach, mud bath and sea.",
      vi: "Biển và tắm bùn.",
      zh: "海滩与泥浴",
      ko: "해변과 머드 스파",
      fr: "Plage et bains de boue",
      tr: "Plaj ve çamur banyosu"
    },
    program: [
      "08:00 — трансфер",
      "Катер",
      "Пляж",
      "Грязевые ванны",
      "Купание в море",
      "Возвращение"
    ]
  },

  {
    img: "img/snorkeling/1.jpg",
    title: {
      ru: "Снорклинг на катере",
      en: "Snorkeling by boat",
      vi: "Lặn biển bằng tàu",
      zh: "浮潜游船",
      ko: "보트 스노클링",
      fr: "Snorkeling en bateau",
      tr: "Tekne ile şnorkel"
    },
    desc: {
      ru: "Подводный мир и кораллы.",
      en: "Corals and underwater life.",
      vi: "San hô và đại dương.",
      zh: "珊瑚与海洋",
      ko: "산호와 바다",
      fr: "Coraux et mer",
      tr: "Mercanlar ve deniz"
    },
    program: [
      "Трансфер",
      "Катер",
      "Снорклинг",
      "Отдых",
      "Возвращение"
    ]
  }
];

function render() {
  document.getElementById("pageTitle").innerText = ui[lang].title;
  document.getElementById("pageSub").innerText = ui[lang].sub;

  const box = document.getElementById("tours");
  box.innerHTML = "";

  tours.forEach((t, i) => {
    box.innerHTML += `
      <div class="tour">
        <img src="${t.img}" onerror="this.style.display='none'">
        <div class="tour-content">
          <h3>${t.title[lang]}</h3>
          <p>${t.desc[lang]}</p>
          <button class="toggle" onclick="toggle(${i})">${ui[lang].program}</button>
          <div class="program" id="p${i}">
            ${t.program.map(x => "• " + x).join("<br>")}
          </div>
        </div>
      </div>
    `;
  });
}

function toggle(i) {
  const el = document.getElementById("p" + i);
  el.style.display = el.style.display === "block" ? "none" : "block";
}

function setLang(l) {
  lang = l;
  render();
}

render();
