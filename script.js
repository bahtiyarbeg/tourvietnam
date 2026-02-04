const tours = {
  deluxe: {
    img: "img/de-luxe/1.jpg",
    time: "08:00 – 16:00",
    take: "Купальник, полотенце, крем",
    included: "Трансфер, катер, гид",
    not: "Личные расходы",
    title: {
      ru: "De Luxe островной тур",
      en: "De Luxe Island Tour",
      vi: "Tour đảo De Luxe",
      zh: "豪华岛屿之旅",
      ko: "디럭스 섬 투어",
      fr: "Tour île De Luxe",
      tr: "De Luxe Ada Turu"
    }
  },

  "vip-hon-tam-1": {
    img: "img/vip-hon-tam-1/1.jpg",
    time: "08:00 – 16:00",
    take: "Купальник",
    included: "Катер, гид",
    not: "Личные расходы",
    title: {
      ru: "VIP Хон Там 1",
      en: "VIP Hon Tam 1",
      vi: "VIP Hòn Tằm 1",
      zh: "VIP 汉潭 1",
      ko: "VIP 혼땀 1",
      fr: "VIP Hon Tam 1",
      tr: "VIP Hon Tam 1"
    }
  },

  robinson: {
    img: "img/robinson/1.jpg",
    time: "08:00 – 15:30",
    take: "Купальник",
    included: "Катер, гид",
    not: "Личные расходы",
    title: {
      ru: "Робинзон тур",
      en: "Robinson Tour",
      vi: "Tour Robinson",
      zh: "鲁宾逊之旅",
      ko: "로빈슨 투어",
      fr: "Tour Robinson",
      tr: "Robinson Turu"
    }
  },

  nemo: {
    img: "img/nemo/1.jpg",
    time: "08:00 – 14:00",
    take: "Купальник",
    included: "Снорклинг, катер",
    not: "Личные расходы",
    title: {
      ru: "Nemo Trip",
      en: "Nemo Trip",
      vi: "Tour Nemo",
      zh: "尼莫之旅",
      ko: "니모 투어",
      fr: "Nemo Trip",
      tr: "Nemo Turu"
    }
  }
};

let lang = localStorage.getItem("lang") || "ru";

function setLang(l) {
  lang = l;
  localStorage.setItem("lang", l);
  applyLang();
}

function applyLang() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[key]) el.innerText = translations[key][lang];
  });
}

const translations = {
  title: {
    ru: "Экскурсии по Вьетнаму",
    en: "Vietnam Tours",
    vi: "Tour Việt Nam",
    zh: "越南旅游",
    ko: "베트남 투어",
    fr: "Excursions au Vietnam",
    tr: "Vietnam Turları"
  },
  subtitle: {
    ru: "Острова • Море • Снорклинг • Хон Там",
    en: "Islands • Sea • Snorkeling • Hon Tam",
    vi: "Đảo • Biển • Lặn biển • Hòn Tằm",
    zh: "岛屿 • 大海 • 浮潜 • 汉潭",
    ko: "섬 • 바다 • 스노클링 • 혼땀",
    fr: "Îles • Mer • Snorkeling • Hon Tam",
    tr: "Adalar • Deniz • Şnorkel • Hon Tam"
  }
};

applyLang();

// СТРАНИЦА ТУРА
const params = new URLSearchParams(location.search);
const id = params.get("id");

if (id && tours[id]) {
  document.getElementById("tourImg").src = tours[id].img;
  document.getElementById("tourTitle").innerText = tours[id].title[lang];
  document.getElementById("time").innerText = tours[id].time;
  document.getElementById("take").innerText = tours[id].take;
  document.getElementById("included").innerText = tours[id].included;
  document.getElementById("not").innerText = tours[id].not;
}
