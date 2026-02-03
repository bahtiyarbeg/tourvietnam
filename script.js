const translations = {
  ru: {
    title: "Экскурсии по Вьетнаму",
    subtitle: "Острова • Море • Снорклинг • Хон Там",
    book_whatsapp: "Забронировать в WhatsApp"
  },
  en: {
    title: "Tours in Vietnam",
    subtitle: "Islands • Sea • Snorkeling • Hon Tam",
    book_whatsapp: "Book via WhatsApp"
  },
  vi: {
    title: "Tour tại Việt Nam",
    subtitle: "Đảo • Biển • Lặn biển • Hòn Tằm",
    book_whatsapp: "Đặt tour qua WhatsApp"
  },
  zh: {
    title: "越南旅游",
    subtitle: "岛屿 • 大海 • 浮潜 • 红岛",
    book_whatsapp: "通过 WhatsApp 预订"
  },
  ko: {
    title: "베트남 투어",
    subtitle: "섬 • 바다 • 스노클링 • 혼탐",
    book_whatsapp: "WhatsApp으로 예약"
  },
  fr: {
    title: "Excursions au Vietnam",
    subtitle: "Îles • Mer • Snorkeling • Hon Tam",
    book_whatsapp: "Réserver via WhatsApp"
  },
  hi: {
    title: "वियतनाम टूर",
    subtitle: "द्वीप • समुद्र • स्नॉर्कलिंग • होन टैम",
    book_whatsapp: "WhatsApp से बुक करें"
  }
};

function setLang(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}
