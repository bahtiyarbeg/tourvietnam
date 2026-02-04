let lang = "ru";

const text = {
  ru: {
    title: "Экскурсии по Вьетнаму",
    sub: "Острова • Море • Снорклинг • Хон Там",
    program: "Программа тура"
  },
  en: {
    title: "Tours in Vietnam",
    sub: "Islands • Sea • Snorkeling • Hon Tam",
    program: "Tour program"
  },
  vi: {
    title: "Tour du lịch Việt Nam",
    sub: "Đảo • Biển • Lặn biển • Hòn Tằm",
    program: "Chương trình tour"
  },
  zh: {
    title: "越南旅游",
    sub: "岛屿 • 大海 • 浮潜 • 洪潭",
    program: "行程安排"
  },
  ko: {
    title: "베트남 투어",
    sub: "섬 • 바다 • 스노클링 • 혼탐",
    program: "투어 일정"
  },
  fr: {
    title: "Excursions au Vietnam",
    sub: "Îles • Mer • Snorkeling • Hon Tam",
    program: "Programme du tour"
  },
  tr: {
    title: "Vietnam Turları",
    sub: "Adalar • Deniz • Şnorkel • Hon Tam",
    program: "Tur Programı"
  }
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
      ru: "Комфортная морская экскурсия с пляжем Бай Чай.",
      en: "Comfortable sea tour with Bai Chai beach.",
      vi: "Tour biển với bãi Bai Chai.",
      zh: "白沙滩海上之旅",
      ko: "바이차이 해변 투어",
      fr: "Excursion vers la plage Bai Chai",
      tr: "Bai Chai plajı turu"
    },
    program: {
      ru: [
        "08:00 — трансфер",
        "Катер к пляжу Бай Чай",
        "Купание и отдых",
        "Рыбацкая деревня",
        "16:00 — возвращение"
      ]
    }
  }
];

function render() {
  document.getElementById("pageTitle").innerText = text[lang].title;
  document.getElementById("pageSub").innerText = text[lang].sub;

  const box = document.getElementById("tours");
  box.innerHTML = "";

  tours.forEach((t, i) => {
    box.innerHTML += `
      <div class="tour">
        <img src="${t.img}">
        <div class="tour-content">
          <h3>${t.title[lang]}</h3>
          <p>${t.desc[lang]}</p>
          <button class="toggle" onclick="toggle(${i})">${text[lang].program}</button>
          <div class="program" id="p${i}">
            ${(t.program[lang] || t.program.ru).map(x => "• " + x).join("<br>")}
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
