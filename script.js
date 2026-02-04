const texts = {
  ru: {
    title: "Экскурсии по Вьетнаму",
    subtitle: "Острова • Море • Снорклинг • Хон Там",
    tourTitle: "De Luxe островной тур",
    tourDesc: "Комфортабельная морская экскурсия с пляжем Бай Чай.",
    time: "Время: 08:00 – 16:00",
    take: "Что взять: купальник, полотенце, крем",
    include: "Включено: трансфер, катер, гид",
    exclude: "Не включено: личные расходы"
  },
  en: {
    title: "Tours in Vietnam",
    subtitle: "Islands • Sea • Snorkeling • Hon Tam",
    tourTitle: "De Luxe Island Tour",
    tourDesc: "Comfortable sea excursion with beach stop.",
    time: "Time: 08:00 – 16:00",
    take: "Bring: swimsuit, towel, sunscreen",
    include: "Included: transfer, boat, guide",
    exclude: "Not included: personal expenses"
  },
  vi: {
    title: "Tour du lịch Việt Nam",
    subtitle: "Đảo • Biển • Lặn biển • Hòn Tằm",
    tourTitle: "Tour đảo cao cấp",
    tourDesc: "Chuyến tham quan biển thoải mái.",
    time: "Thời gian: 08:00 – 16:00",
    take: "Mang theo: đồ bơi, khăn, kem chống nắng",
    include: "Bao gồm: xe đưa đón, tàu, hướng dẫn viên",
    exclude: "Không bao gồm: chi phí cá nhân"
  }
};

function setLang(lang) {
  const t = texts[lang];
  if (!t) return;

  document.getElementById("title").innerText = t.title;
  document.getElementById("subtitle").innerText = t.subtitle;
  document.getElementById("tourTitle").innerText = t.tourTitle;
  document.getElementById("tourDesc").innerText = t.tourDesc;
  document.getElementById("time").innerText = t.time;
  document.getElementById("take").innerText = t.take;
  document.getElementById("include").innerText = t.include;
  document.getElementById("exclude").innerText = t.exclude;

  document.getElementById("waBtn").href =
    "https://wa.me/84777770759?text=Здравствуйте!%20Хочу%20забронировать%20тур";
}

function toggleProgram() {
  const p = document.getElementById("program");
  p.style.display = p.style.display === "block" ? "none" : "block";
}

// язык по умолчанию
setLang("ru");
