const LANGS = ["ru", "en", "vi", "ko", "zh", "fr", "tr"];
let currentLang = "ru";

function setLang(lang) {
  currentLang = lang;
  renderTours();
}

const tours = [
  {
    id: "de-luxe",
    img: "img/de-luxe/1.jpg",
    title: {
      ru: "De Luxe островной тур",
      en: "De Luxe Island Tour",
      vi: "Tour đảo De Luxe",
      ko: "디럭스 섬 투어",
      zh: "豪华岛屿之旅",
      fr: "Tour île De Luxe",
      tr: "De Luxe Ada Turu"
    },
    desc: {
      ru: "Комфортная морская экскурсия с пляжем Бай Чай и рыбацкой деревней.",
      en: "Comfortable sea tour with Bai Tranh beach and fishing village.",
      vi: "Tour biển thoải mái với bãi Bai Tranh và làng chài.",
      ko: "바이짠 비치와 어촌 마을이 포함된 해양 투어.",
      zh: "包含白滩海滩和渔村的舒适海上之旅。",
      fr: "Excursion en mer avec plage Bai Tranh et village de pêcheurs.",
      tr: "Bai Tranh plajı ve balıkçı köyü ile deniz turu."
    },
    time: "08:00 – 16:00",
    take: {
      ru: "Купальник, полотенце, крем",
      en: "Swimsuit, towel, sunscreen",
      vi: "Đồ bơi, khăn, kem chống nắng",
      ko: "수영복, 타월, 선크림",
      zh: "泳衣、毛巾、防晒霜",
      fr: "Maillot, serviette, crème solaire",
      tr: "Mayo, havlu, güneş kremi"
    },
    included: {
      ru: "Трансфер, катер, входные билеты, гид",
      en: "Transfer, boat, tickets, guide",
      vi: "Xe đưa đón, tàu, vé, hướng dẫn viên",
      ko: "픽업, 보트, 입장권, 가이드",
      zh: "接送、船、门票、导游",
      fr: "Transfert, bateau, billets, guide",
      tr: "Transfer, tekne, biletler, rehber"
    },
    excluded: {
      ru: "Личные расходы",
      en: "Personal expenses",
      vi: "Chi phí cá nhân",
      ko: "개인 비용",
      zh: "个人消费",
      fr: "Dépenses personnelles",
      tr: "Kişisel harcamalar"
    }
  },

  {
    id: "vip-hon-tam-1",
    img: "img/vip-hon-tam-1/1.jpg",
    title: {
      ru: "VIP тур — Хон Там 1",
      en: "VIP Tour — Hon Tam 1",
      vi: "Tour VIP — Hòn Tằm 1",
      ko: "VIP 투어 — 혼땀 1",
      zh: "VIP 行程 — Hon Tam 1",
      fr: "
