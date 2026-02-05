const LANGS = ["en","ru","vi","zh","ko","fr","tr"];
const WHATSAPP = "https://wa.me/84777770759";

const TOURS = {

  /* 1 — ROBINSON ISLAND */
  "robinson": {
    image: "img/robinson/1.jpg",
    whatsapp: WHATSAPP,
    texts: {
      en: {
        title: "Robinson Island",
        short: "Quiet island away from crowds",
        time: "08:00 – 16:00",
        program: "Hotel pickup. Boat trip to Robinson Island. Swimming, beach time, relaxation, photos. Lunch. Return to hotel.",
        take: "Swimsuit, towel, sunscreen, hat",
        included: "Transfer, boat, lunch, English-speaking guide",
        notIncluded: "Drinks, personal expenses"
      },
      ru: {
        title: "Остров Робинзон",
        short: "Тихий остров вдали от толп",
        time: "08:00 – 16:00",
        program: "Трансфер из отеля. Лодка до острова Робинзон. Купание, пляж, отдых, фото. Обед. Возвращение в отель.",
        take: "Купальник, полотенце, крем от солнца, головной убор",
        included: "Трансфер, лодка, обед, англоговорящий гид",
        notIncluded: "Напитки, личные расходы"
      },
      vi: {
        title: "Đảo Robinson",
        short: "Hòn đảo yên tĩnh, hoang sơ",
        time: "08:00 – 16:00",
        program: "Đón tại khách sạn. Đi tàu ra đảo Robinson. Tắm biển, nghỉ ngơi, chụp ảnh. Ăn trưa. Về khách sạn.",
        take: "Đồ bơi, khăn, kem chống nắng, mũ",
        included: "Xe đưa đón, tàu, ăn trưa, HDV tiếng Anh",
        notIncluded: "Đồ uống, chi phí cá nhân"
      },
      zh: {
        title: "鲁滨逊岛",
        short: "远离人群的安静岛屿",
        time: "08:00 – 16:00",
        program: "酒店接送。乘船前往鲁滨逊岛。游泳、沙滩休息、拍照。午餐。返回酒店。",
        take: "泳衣、毛巾、防晒霜、帽子",
        included: "接送、船、午餐、英文导游",
        notIncluded: "饮料、个人消费"
      },
      ko: {
        title: "로빈슨 섬",
        short: "사람이 적은 조용한 섬",
        time: "08:00 – 16:00",
        program: "호텔 픽업. 보트 이동. 수영, 휴식, 사진 촬영. 점심. 호텔 복귀.",
        take: "수영복, 타월, 선크림, 모자",
        included: "교통, 보트, 점심, 영어 가이드",
        notIncluded: "음료, 개인 비용"
      },
      fr: {
        title: "Île Robinson",
        short: "Île paisible loin de la foule",
        time: "08:00 – 16:00",
        program: "Transfert hôtel. Bateau vers l’île Robinson. Baignade, détente, photos. Déjeuner. Retour.",
        take: "Maillot, serviette, crème solaire, chapeau",
        included: "Transport, bateau, déjeuner, guide anglophone",
        notIncluded: "Boissons, dépenses personnelles"
      },
      tr: {
        title: "Robinson Adası",
        short: "Kalabalıktan uzak sakin ada",
        time: "08:00 – 16:00",
        program: "Otelden transfer. Tekne ile Robinson Adası. Yüzme, dinlenme, fotoğraf. Öğle yemeği. Dönüş.",
        take: "Mayo, havlu, güneş kremi, şapka",
        included: "Transfer, tekne, öğle yemeği, İngilizce rehber",
        notIncluded: "İçecekler, kişisel harcamalar"
      }
    }
  },

  /* 2 — DE LUXE SEA TOUR */
  "de-luxe": {
    image: "img/de-luxe/1.jpg",
    whatsapp: WHATSAPP,
    texts: {
      en: {
        title: "De Luxe Sea Tour",
        short: "Premium island hopping experience",
        time: "08:00 – 15:30",
        program: "Speedboat tour to islands. Snorkeling, swimming, beach relaxation. Lunch. Return.",
        take: "Swimsuit, towel, sunscreen",
        included: "Speedboat, lunch, snorkeling equipment, English guide",
        notIncluded: "Alcohol, personal expenses"
      },
      ru: {
        title: "De Luxe морской тур",
        short: "Премиальный морской отдых",
        time: "08:00 – 15:30",
        program: "Скоростной катер по островам. Снорклинг, купание, отдых. Обед. Возвращение.",
        take: "Купальник, полотенце, крем от солнца",
        included: "Катер, обед, снаряжение, англоговорящий гид",
        notIncluded: "Алкоголь, личные расходы"
      },
      vi: {
        title: "Tour biển cao cấp",
        short: "Trải nghiệm biển sang trọng",
        time: "08:00 – 15:30",
        program: "Tàu cao tốc tham quan đảo. Lặn san hô, tắm biển, nghỉ ngơi. Ăn trưa.",
        take: "Đồ bơi, khăn, kem chống nắng",
        included: "Tàu, ăn trưa, dụng cụ lặn, HDV tiếng Anh",
        notIncluded: "Đồ uống có cồn"
      },
      zh: {
        title: "豪华海岛游",
        short: "高端跳岛体验",
        time: "08:00 – 15:30",
        program: "快艇游览多个岛屿。浮潜、游泳、休息。午餐。",
        take: "泳衣、毛巾、防晒霜",
        included: "快艇、午餐、浮潜装备、英文导游",
        notIncluded: "酒精饮料"
      },
      ko: {
        title: "디럭스 바다 투어",
        short: "프리미엄 섬 투어",
        time: "08:00 – 15:30",
        program: "스피드보트 섬 투어. 스노클링, 수영, 휴식. 점심.",
        take: "수영복, 타월, 선크림",
        included: "보트, 점심, 장비, 영어 가이드",
        notIncluded: "주류"
      },
      fr: {
        title: "Tour Maritime De Luxe",
        short: "Expérience premium",
        time: "08:00 – 15:30",
        program: "Bateau rapide vers les îles. Snorkeling, baignade, détente. Déjeuner.",
        take: "Maillot, serviette, crème solaire",
        included: "Bateau, déjeuner, équipement, guide anglophone",
        notIncluded: "Alcool"
      },
      tr: {
        title: "De Luxe Deniz Turu",
        short: "Premium ada turu",
        time: "08:00 – 15:30",
        program: "Sürat teknesiyle adalar. Şnorkel, yüzme, dinlenme. Öğle yemeği.",
        take: "Mayo, havlu, güneş kremi",
        included: "Tekne, öğle yemeği, ekipman, İngilizce rehber",
        notIncluded: "Alkol"
      }
    }
  },

  /* 3 — DIVING TOUR */
  "diving": {
    image: "img/diving/1.jpg",
    whatsapp: WHATSAPP,
    texts: {
      en: {
        title: "Diving Tour",
        short: "Scuba diving with instructor",
        time: "08:00 – 14:00",
        program: "Transfer to diving spot. Briefing. Two dives with instructor. Rest and return.",
        take: "Swimsuit, towel",
        included: "Instructor, equipment, transfer, English guide",
        notIncluded: "Food"
      },
      ru: {
        title: "Дайвинг тур",
        short: "Погружение с инструктором",
        time: "08:00 – 14:00",
        program: "Трансфер к месту дайвинга. Инструктаж. Два погружения. Отдых.",
        take: "Купальник, полотенце",
        included: "Инструктор, снаряжение, трансфер, гид",
        notIncluded: "Питание"
      },
      vi: {
        title: "Tour lặn biển",
        short: "Lặn cùng huấn luyện viên",
        time: "08:00 – 14:00",
        program: "Di chuyển đến điểm lặn. Hướng dẫn. Hai lần lặn. Nghỉ ngơi.",
        take: "Đồ bơi, khăn",
        included: "HLV, thiết bị, xe đưa đón, HDV",
        notIncluded: "Ăn uống"
      },
      zh: {
        title: "潜水之旅",
        short: "教练陪同潜水",
        time: "08:00 – 14:00",
        program: "前往潜水点。讲解。两次潜水。休息。",
        take: "泳衣、毛巾",
        included: "教练、设备、接送、英文导游",
        notIncluded: "餐饮"
      },
      ko: {
        title: "다이빙 투어",
        short: "강사와 함께하는 다이빙",
        time: "08:00 – 14:00",
        program: "다이빙 포인트 이동. 브리핑. 두 번의 다이빙.",
        take: "수영복, 타월",
        included: "강사, 장비, 교통, 가이드",
        notIncluded: "식사"
      },
      fr: {
        title: "Plongée Sous-marine",
        short: "Plongée avec instructeur",
        time: "08:00 – 14:00",
        program: "Transfert vers le site. Briefing. Deux plongées. Repos.",
        take: "Maillot, serviette",
        included: "Instructeur, équipement, transport, guide",
        notIncluded: "Repas"
      },
      tr: {
        title: "Dalış Turu",
        short: "Eğitmenli dalış",
        time: "08:00 – 14:00",
        program: "Dalış noktasına transfer. Bilgilendirme. İki dalış.",
        take: "Mayo, havlu",
        included: "Eğitmen, ekipman, transfer, rehber",
        notIncluded: "Yemek"
      }
    }
  },

  /* 4 — NEMO SNORKELING */
  "nemo": {
    image: "img/nemo/1.jpg",
    whatsapp: WHATSAPP,
    texts: {
      en: {
        title: "Nemo Snorkeling Trip",
        short: "Perfect for families and beginners",
        time: "08:00 – 15:00",
        program: "Boat trip. Snorkeling with colorful fish. Floating platforms. Lunch.",
        take: "Swimsuit, towel",
        included: "Boat, snorkeling gear, lunch, English guide",
        notIncluded: "Personal expenses"
      },
      ru: {
        title: "Снорклинг Немо",
        short: "Идеально для семей и новичков",
        time: "08:00 – 15:00",
        program: "Прогулка на лодке. Снорклинг с рыбами. Платформы. Обед.",
        take: "Купальник, полотенце",
        included: "Лодка, снаряжение, обед, гид",
        notIncluded: "Личные расходы"
      },
      vi: {
        title: "Snorkeling Nemo",
        short: "Phù hợp cho gia đình",
        time: "08:00 – 15:00",
        program: "Đi thuyền. Lặn ngắm cá. Khu nổi. Ăn trưa.",
        take: "Đồ bơi, khăn",
        included: "Thuyền, đồ lặn, ăn trưa, HDV",
        notIncluded: "Chi phí cá nhân"
      },
      zh: {
        title: "尼莫浮潜",
        short: "适合家庭和新手",
        time: "08:00 – 15:00",
        program: "乘船出海。浮潜看鱼。浮动平台。午餐。",
        take: "泳衣、毛巾",
        included: "船、装备、午餐、英文导游",
        notIncluded: "个人消费"
      },
      ko: {
        title: "니모 스노클링",
        short: "가족과 초보자에게 적합",
        time: "08:00 – 15:00",
        program: "보트 이동. 스노클링. 플랫폼. 점심.",
        take: "수영복, 타월",
        included: "보트, 장비, 점심, 가이드",
        notIncluded: "개인 비용"
      },
      fr: {
        title: "Snorkeling Nemo",
        short: "Idéal pour les familles",
        time: "08:00 – 15:00",
        program: "Sortie en bateau. Snorkeling. Plateformes flottantes. Déjeuner.",
        take: "Maillot, serviette",
        included: "Bateau, équipement, déjeuner, guide",
        notIncluded: "Dépenses personnelles"
      },
      tr: {
        title: "Nemo Şnorkel",
        short: "Aileler için ideal",
        time: "08:00 – 15:00",
        program: "Tekne turu. Şnorkel. Platformlar. Öğle yemeği.",
        take: "Mayo, havlu",
        included: "Tekne, ekipman, öğle yemeği, rehber",
        notIncluded: "Kişisel harcamalar"
      }
    }
  },

  /* 5 — CITY TOUR */
  "city-tour": {
    image: "img/city-tour/1.jpg",
    whatsapp: WHATSAPP,
    texts: {
      en: {
        title: "Nha Trang City Tour",
        short: "Main sights of the city",
        time: "09:00 – 15:30",
        program: "Pagoda, Cathedral, local market, cultural spots. Lunch.",
        take: "Comfortable clothes",
        included: "Transport, English-speaking guide, lunch",
        notIncluded: "Entrance tickets"
      },
      ru: {
        title: "Сити тур Нячанг",
        short: "Главные достопримечательности города",
        time: "09:00 – 15:30",
        program: "Пагода, собор, рынок, культурные места. Обед.",
        take: "Удобная одежда",
        included: "Транспорт, англоговорящий гид, обед",
        notIncluded: "Входные билеты"
      },
      vi: {
        title: "City Tour Nha Trang",
        short: "Tham quan thành phố",
        time: "09:00 – 15:30",
        program: "Chùa, nhà thờ, chợ, điểm văn hóa. Ăn trưa.",
        take: "Trang phục thoải mái",
        included: "Xe, HDV tiếng Anh, ăn trưa",
        notIncluded: "Vé vào cổng"
      },
      zh: {
        title: "芽庄城市游",
        short: "城市主要景点",
        time: "09:00 – 15:30",
        program: "寺庙、大教堂、市场、文化景点。午餐。",
        take: "舒适的衣服",
        included: "交通、英文导游、午餐",
        notIncluded: "门票"
      },
      ko: {
        title: "나트랑 시티 투어",
        short: "도시 주요 명소",
        time: "09:00 – 15:30",
        program: "사원, 성당, 시장, 문화 명소. 점심.",
        take: "편한 옷",
        included: "교통, 영어 가이드, 점심",
        notIncluded: "입장권"
      },
      fr: {
        title: "City Tour Nha Trang",
        short: "Principaux sites de la ville",
        time: "09:00 – 15:30",
        program: "Pagode, cathédrale, marché, sites culturels. Déjeuner.",
        take: "Vêtements confortables",
        included: "Transport, guide anglophone, déjeuner",
        notIncluded: "Billets d'entrée"
      },
      tr: {
        title: "Nha Trang Şehir Turu",
        short: "Şehrin ana noktaları",
        time: "09:00 – 15:30",
        program: "Tapınak, katedral, pazar, kültürel alanlar. Öğle yemeği.",
        take: "Rahat kıyafetler",
        included: "Ulaşım, İngilizce rehber, öğle yemeği",
        notIncluded: "Giriş biletleri"
      }
    }
  }

};

/* END OF FILE — DO NOT MODIFY */
