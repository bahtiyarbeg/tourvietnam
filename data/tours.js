/* =========================================================
   TOURVIETNAM — FINAL MASTER DATA
   15 TOURS | ALL LANGUAGES | NO PRICES
   WhatsApp: +84777770759
   STRUCTURE MUST NEVER CHANGE
   ========================================================= */

const LANGS = ["en","ru","vi","zh","ko","fr","tr"];
const WHATSAPP = "https://wa.me/84777770759";

const TOURS = {

  /* 1 — ROBINSON ISLAND */
  "robinson": {
    image: "img/robinson/1.jpg",
    whatsapp: WHATSAPP,
    texts: fullProgram(
      "Robinson Island",
      "Quiet island away from crowds",
      "Остров Робинзон",
      "Тихий остров вдали от толп",
      "Đảo Robinson",
      "Hòn đảo yên tĩnh, không đông người"
    )
  },

  /* 2 — DE LUXE */
  "de-luxe": {
    image: "img/de-luxe/1.jpg",
    whatsapp: WHATSAPP,
    texts: fullProgram(
      "De Luxe Sea Tour",
      "Premium island hopping experience",
      "De Luxe морской тур",
      "Премиальный морской отдых",
      "Tour Biển Cao Cấp",
      "Trải nghiệm biển cao cấp"
    )
  },

  /* 3 — DIVING */
  "diving": {
    image: "img/diving/1.jpg",
    whatsapp: WHATSAPP,
    texts: fullProgram(
      "Scuba Diving Tour",
      "Professional diving experience",
      "Дайвинг тур",
      "Погружение с инструктором",
      "Tour Lặn Bình Khí",
      "Trải nghiệm lặn biển chuyên nghiệp"
    )
  },

  /* 4 — NEMO */
  "nemo": {
    image: "img/nemo/1.jpg",
    whatsapp: WHATSAPP,
    texts: fullProgram(
      "Nemo Snorkeling Trip",
      "Perfect for beginners and families",
      "Снорклинг Немо",
      "Идеально для семей и новичков",
      "Tour Nemo",
      "Phù hợp cho gia đình và người mới"
    )
  },

  /* 5 — SNORKELING BOAT */
  "snorkeling-boat": {
    image: "img/snorkeling-boat/1.jpg",
    whatsapp: WHATSAPP,
    texts: fullProgram(
      "Snorkeling by Boat",
      "Best coral reefs by boat",
      "Снорклинг с лодки",
      "Лучшие кораллы с лодки",
      "Lặn Biển Bằng Tàu",
      "Lặn san hô bằng tàu"
    )
  },

  /* 6 — HON MUN */
  "hon-mun": {
    image: "img/hon-mun/1.jpg",
    whatsapp: WHATSAPP,
    texts: fullProgram(
      "Hon Mun Island",
      "Famous snorkeling spot",
      "Остров Хон Мун",
      "Известный снорклинг-спот",
      "Hòn Mun",
      "Điểm lặn nổi tiếng"
    )
  },

  /* 7 — HON MUN + MINI BEACH */
  "hon-mun-mini-beach": {
    image: "img/hon-mun-mini-beach/1.jpg",
    whatsapp: WHATSAPP,
    texts: fullProgram(
      "Hon Mun & Mini Beach",
      "Snorkeling and beach relaxation",
      "Хон Мун + Мини Бич",
      "Снорклинг и пляж",
      "Hòn Mun & Mini Beach",
      "Lặn biển và nghỉ ngơi"
    )
  },

  /* 8 — HON MUN + VAI CHAI */
  "hon-mun-vai-chai": {
    image: "img/hon-mun-vai-chai/1.jpg",
    whatsapp: WHATSAPP,
    texts: fullProgram(
      "Hon Mun & Vai Chai",
      "Two islands adventure",
      "Хон Мун + Вай Чай",
      "Два острова за день",
      "Hòn Mun & Vãi Chài",
      "Hai đảo trong ngày"
    )
  },

  /* 9 — ONE ISLAND HON TAM */
  "one-island-hon-tam": {
    image: "img/one-island-hon-tam/1.jpg",
    whatsapp: WHATSAPP,
    texts: fullProgram(
      "Hon Tam Island",
      "Relaxing island day",
      "Остров Хон Там",
      "Спокойный островной отдых",
      "Hòn Tằm",
      "Nghỉ dưỡng đảo"
    )
  },

  /* 10 — ONE ISLAND MINI BEACH */
  "one-island-mini-beach": {
    image: "img/one-island-mini-beach/1.jpg",
    whatsapp: WHATSAPP,
    texts: fullProgram(
      "Mini Beach Island",
      "Instagram famous beach",
      "Остров Мини Бич",
      "Инстаграм-пляж",
      "Mini Beach",
      "Bãi biển nổi tiếng"
    )
  },

  /* 11 — MINI BEACH HON TAM */
  "mini-beach-hon-tam": {
    image: "img/mini-beach-hon-tam/1.jpg",
    whatsapp: WHATSAPP,
    texts: fullProgram(
      "Mini Beach & Hon Tam",
      "Beach & island combo",
      "Мини Бич + Хон Там",
      "Пляж и остров",
      "Mini Beach & Hòn Tằm",
      "Bãi biển và đảo"
    )
  },

  /* 12 — FOUR ISLANDS NINH THUAN */
  "four-islands-ninh-thuan": {
    image: "img/four-islands-ninh-thuan/1.jpg",
    whatsapp: WHATSAPP,
    texts: fullProgram(
      "Four Islands Ninh Thuan",
      "Best island route",
      "4 острова Нинь Туан",
      "Лучший маршрут",
      "4 Đảo Ninh Thuận",
      "Hành trình đẹp nhất"
    )
  },

  /* 13 — VINEYARD NINH THUAN */
  "vineyard-ninh-thuan": {
    image: "img/vineyard-ninh-thuan/1.jpg",
    whatsapp: WHATSAPP,
    texts: fullProgram(
      "Vineyard Ninh Thuan",
      "Wine & countryside tour",
      "Виноградники Нинь Туан",
      "Вино и природа",
      "Vườn Nho Ninh Thuận",
      "Tham quan vườn nho"
    )
  },

  /* 14 — VIP HON TAM 1 */
  "vip-hon-tam-1": {
    image: "img/vip-hon-tam-1/1.jpg",
    whatsapp: WHATSAPP,
    texts: fullProgram(
      "VIP Hon Tam 1",
      "Luxury island experience",
      "VIP Хон Там 1",
      "Премиум отдых",
      "VIP Hòn Tằm 1",
      "Trải nghiệm cao cấp"
    )
  },

  /* 15 — VIP HON TAM 2 */
  "vip-hon-tam-2": {
    image: "img/vip-hon-tam-2/1.jpg",
    whatsapp: WHATSAPP,
    texts: fullProgram(
      "VIP Hon Tam 2",
      "Exclusive luxury program",
      "VIP Хон Там 2",
      "Эксклюзивная программа",
      "VIP Hòn Tằm 2",
      "Chương trình cao cấp"
    )
  }

};

/* =========================================================
   FULL PROGRAM TEMPLATE — ALL LANGUAGES
   ========================================================= */
function fullProgram(enTitle,enShort,ruTitle,ruShort,viTitle,viShort){
  return {
    en:{
      title:enTitle,
      short:enShort,
      description:`Start: 08:00 | End: 16:00<br><br>
<b>Program:</b><br>
• Hotel pickup<br>
• Boat transfer<br>
• Swimming & snorkeling<br>
• Free time on the beach<br>
• Lunch<br>
• Return to hotel<br><br>
<b>Included:</b> transfer, boat, lunch, snorkeling equipment, English-speaking guide<br>
<b>Not included:</b> drinks, personal expenses<br>
<b>What to bring:</b> swimwear, towel, sunscreen, hat`
    },
    ru:{
      title:ruTitle,
      short:ruShort,
      description:`Начало: 08:00 | Окончание: 16:00<br><br>
<b>Программа:</b><br>
• Трансфер из отеля<br>
• Переезд на лодке<br>
• Купание и снорклинг<br>
• Свободное время<br>
• Обед<br>
• Возвращение в отель<br><br>
<b>Включено:</b> трансфер, лодка, обед, оборудование, англоговорящий гид<br>
<b>Не включено:</b> напитки, личные расходы<br>
<b>Что взять:</b> купальник, полотенце, крем от солнца`
    },
    vi:{
      title:viTitle,
      short:viShort,
      description:`Thời gian: 08:00 – 16:00<br><br>
<b>Chương trình:</b><br>
• Đón tại khách sạn<br>
• Di chuyển bằng tàu<br>
• Tắm biển, lặn san hô<br>
• Nghỉ ngơi tự do<br>
• Ăn trưa<br>
• Trở về khách sạn<br><br>
<b>Bao gồm:</b> xe, tàu, ăn trưa, thiết bị lặn, HDV tiếng Anh<br>
<b>Không bao gồm:</b> đồ uống, chi phí cá nhân<br>
<b>Mang theo:</b> đồ bơi, khăn, kem chống nắng`
    },
    zh:{title:enTitle,short:enShort,description:"一日游，包含接送、乘船、游泳、浮潜、午餐和英文导游。"},
    ko:{title:enTitle,short:enShort,description:"호텔 픽업, 보트 이동, 수영, 스노클링, 점심 포함, 영어 가이드."},
    fr:{title:enTitle,short:enShort,description:"Excursion journée complète avec transport, bateau, baignade, déjeuner et guide anglophone."},
    tr:{title:enTitle,short:enShort,description:"Otel transferi, tekne, yüzme, şnorkel, öğle yemeği ve İngilizce rehber dahil."}
  };
}
