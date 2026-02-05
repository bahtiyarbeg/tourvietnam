Копировать код
const TOURS = {

  "robinson": {
    image: "img/robinson/1.jpg",
    texts: {
      en: {
        title: "Robinson Island",
        short: "Quiet island far from crowds",
        time: "08:00 – 15:30",
        program: "Transfer from hotel. Boat trip to Robinson Island. Swimming, snorkeling, beach relaxation. Lunch on the island. Return.",
        take: "Swimsuit, towel, sunscreen, hat",
        included: "Boat, transfer, lunch, snorkeling gear, English-speaking guide",
        notIncluded: "Personal expenses"
      },
      ru: {
        title: "Остров Робинзон",
        short: "Тихий остров вдали от толп",
        time: "08:00 – 15:30",
        program: "Трансфер из отеля. Катер на остров Робинзон. Купание, снорклинг, отдых на пляже. Обед. Возвращение.",
        take: "Купальник, полотенце, крем от солнца, головной убор",
        included: "Катер, трансфер, обед, снорклинг, англоговорящий гид",
        notIncluded: "Личные расходы"
      },
      vi: {
        title: "Đảo Robinson",
        short: "Hòn đảo yên tĩnh, ít người",
        time: "08:00 – 15:30",
        program: "Đón tại khách sạn. Đi tàu ra đảo Robinson. Tắm biển, lặn ngắm san hô, nghỉ ngơi. Ăn trưa. Trở về.",
        take: "Đồ bơi, khăn, kem chống nắng, mũ",
        included: "Tàu, xe đưa đón, ăn trưa, dụng cụ lặn, HDV tiếng Anh",
        notIncluded: "Chi phí cá nhân"
      },
      zh: {
        title: "鲁滨逊岛",
        short: "远离人群的安静岛屿",
        time: "08:00 – 15:30",
        program: "酒店接送。乘船前往鲁滨逊岛。游泳、浮潜、沙滩休息。午餐。返回。",
        take: "泳衣、毛巾、防晒霜、帽子",
        included: "船、接送、午餐、浮潜装备、英文导游",
        notIncluded: "个人消费"
      },
      ko: {
        title: "로빈슨 섬",
        short: "사람이 적은 조용한 섬",
        time: "08:00 – 15:30",
        program: "호텔 픽업. 보트로 로빈슨 섬 이동. 수영, 스노클링, 휴식. 점심. 귀환.",
        take: "수영복, 수건, 선크림, 모자",
        included: "보트, 픽업, 점심, 스노클링 장비, 영어 가이드",
        notIncluded: "개인 비용"
      },
      fr: {
        title: "Île Robinson",
        short: "Île calme loin de la foule",
        time: "08:00 – 15:30",
        program: "Transfert hôtel. Bateau vers l'île Robinson. Baignade, snorkeling, détente. Déjeuner. Retour.",
        take: "Maillot, serviette, crème solaire, chapeau",
        included: "Bateau, transfert, déjeuner, snorkeling, guide anglophone",
        notIncluded: "Dépenses personnelles"
      },
      tr: {
        title: "Robinson Adası",
        short: "Kalabalıktan uzak sakin ada",
        time: "08:00 – 15:30",
        program: "Otelden transfer. Tekneyle Robinson Adası. Yüzme, şnorkel, dinlenme. Öğle yemeği. Dönüş.",
        take: "Mayo, havlu, güneş kremi, şapka",
        included: "Tekne, transfer, öğle yemeği, şnorkel ekipmanı, İngilizce rehber",
        notIncluded: "Kişisel harcamalar"
      }
    }
  },

  "de-luxe": {
    image: "img/de-luxe/1.jpg",
    texts: {
      en: {
        title: "Luxury Sea Tour",
        short: "Premium boat experience",
        time: "08:00 – 15:30",
        program: "Speedboat cruise. Island sightseeing. Snorkeling. Swimming. Lunch on board. Relaxation.",
        take: "Swimsuit, towel, sunscreen",
        included: "Speedboat, lunch, snorkeling gear, English guide",
        notIncluded: "Personal expenses"
      },
      ru: {
        title: "Роскошный морской тур",
        short: "Премиальный отдых на море",
        time: "08:00 – 15:30",
        program: "Скоростной катер. Острова. Снорклинг. Купание. Обед. Отдых.",
        take: "Купальник, полотенце, крем",
        included: "Катер, обед, снорклинг, англоговорящий гид",
        notIncluded: "Личные расходы"
      },
      vi: {
        title: "Tour Biển Cao Cấp",
        short: "Trải nghiệm sang trọng",
        time: "08:00 – 15:30",
        program: "Tàu cao tốc. Tham quan đảo. Lặn biển. Ăn trưa. Nghỉ ngơi.",
        take: "Đồ bơi, khăn, kem chống nắng",
        included: "Tàu, ăn trưa, lặn biển, HDV tiếng Anh",
        notIncluded: "Chi phí cá nhân"
      },
      zh: {
        title: "豪华海上之旅",
        short: "高端海上体验",
        time: "08:00 – 15:30",
        program: "快艇巡游。岛屿观光。浮潜。午餐。休息。",
        take: "泳衣、毛巾、防晒霜",
        included: "快艇、午餐、浮潜装备、英文导游",
        notIncluded: "个人消费"
      },
      ko: {
        title: "럭셔리 바다 투어",
        short: "프리미엄 보트 투어",
        time: "08:00 – 15:30",
        program: "스피드보트 투어. 섬 방문. 스노클링. 점심.",
        take: "수영복, 수건, 선크림",
        included: "보트, 점심, 장비, 영어 가이드",
        notIncluded: "개인 비용"
      },
      fr: {
        title: "Tour Marin de Luxe",
        short: "Expérience premium",
        time: "08:00 – 15:30",
        program: "Croisière rapide. Îles. Snorkeling. Déjeuner.",
        take: "Maillot, serviette, crème solaire",
        included: "Bateau, déjeuner, snorkeling, guide anglophone",
        notIncluded: "Dépenses personnelles"
      },
      tr: {
        title: "Lüks Deniz Turu",
        short: "Premium tekne turu",
        time: "08:00 – 15:30",
        program: "Hızlı tekne. Adalar. Şnorkel. Öğle yemeği.",
        take: "Mayo, havlu, güneş kremi",
        included: "Tekne, öğle yemeği, ekipman, İngilizce rehber",
        notIncluded: "Kişisel harcamalar"
      }
    }
  }
   "diving": {
    image: "img/diving/1.jpg",
    texts: {
      en: {
        title: "Diving Tour",
        short: "Diving with instructor",
        time: "08:00 – 14:00",
        program: "Hotel transfer. Boat to dive site. Safety briefing. Two dives with instructor. Rest on boat. Return.",
        take: "Swimsuit, towel",
        included: "Instructor, equipment, boat, transfer, guide",
        notIncluded: "Personal expenses"
      },
      ru: {
        title: "Дайвинг тур",
        short: "Погружение с инструктором",
        time: "08:00 – 14:00",
        program: "Трансфер из отеля. Катер к месту дайвинга. Инструктаж. Два погружения. Отдых. Возвращение.",
        take: "Купальник, полотенце",
        included: "Инструктор, снаряжение, катер, трансфер, гид",
        notIncluded: "Личные расходы"
      },
      vi: {
        title: "Tour Lặn Bình Khí",
        short: "Lặn cùng huấn luyện viên",
        time: "08:00 – 14:00",
        program: "Đón khách. Đi tàu ra điểm lặn. Hướng dẫn an toàn. Hai lần lặn. Nghỉ ngơi. Trở về.",
        take: "Đồ bơi, khăn",
        included: "Huấn luyện viên, thiết bị, tàu, xe đưa đón",
        notIncluded: "Chi phí cá nhân"
      },
      zh: {
        title: "潜水之旅",
        short: "教练陪同潜水",
        time: "08:00 – 14:00",
        program: "酒店接送。乘船前往潜水点。安全讲解。两次潜水。返回。",
        take: "泳衣、毛巾",
        included: "教练、设备、船、接送",
        notIncluded: "个人消费"
      },
      ko: {
        title: "다이빙 투어",
        short: "강사와 함께 다이빙",
        time: "08:00 – 14:00",
        program: "호텔 픽업. 다이빙 포인트 이동. 교육. 두 번 다이빙.",
        take: "수영복, 수건",
        included: "강사, 장비, 보트, 픽업",
        notIncluded: "개인 비용"
      },
      fr: {
        title: "Plongée",
        short: "Plongée avec instructeur",
        time: "08:00 – 14:00",
        program: "Transfert hôtel. Bateau. Briefing. Deux plongées. Retour.",
        take: "Maillot, serviette",
        included: "Instructeur, équipement, bateau",
        notIncluded: "Dépenses personnelles"
      },
      tr: {
        title: "Dalış Turu",
        short: "Eğitmenli dalış",
        time: "08:00 – 14:00",
        program: "Otelden transfer. Tekne. Güvenlik eğitimi. İki dalış.",
        take: "Mayo, havlu",
        included: "Eğitmen, ekipman, tekne",
        notIncluded: "Kişisel harcamalar"
      }
    }
  },

  "nemo": {
    image: "img/nemo/1.jpg",
    texts: {
      en: {
        title: "Snorkeling Nemo",
        short: "Perfect for families",
        time: "08:00 – 15:00",
        program: "Boat trip. Floating park. Snorkeling. Games in the sea. Lunch. Return.",
        take: "Swimsuit, towel",
        included: "Boat, lunch, snorkeling gear, guide",
        notIncluded: "Personal expenses"
      },
      ru: {
        title: "Снорклинг Немо",
        short: "Идеально для семей",
        time: "08:00 – 15:00",
        program: "Катер. Плавучий парк. Снорклинг. Игры в море. Обед.",
        take: "Купальник, полотенце",
        included: "Катер, обед, оборудование, гид",
        notIncluded: "Личные расходы"
      },
      vi: {
        title: "Tour Nemo",
        short: "Phù hợp cho gia đình",
        time: "08:00 – 15:00",
        program: "Đi tàu. Khu vui chơi nổi. Lặn biển. Trò chơi nước. Ăn trưa.",
        take: "Đồ bơi, khăn",
        included: "Tàu, ăn trưa, dụng cụ lặn",
        notIncluded: "Chi phí cá nhân"
      },
      zh: {
        title: "尼莫浮潜",
        short: "适合家庭",
        time: "08:00 – 15:00",
        program: "乘船。水上乐园。浮潜。午餐。",
        take: "泳衣、毛巾",
        included: "船、午餐、装备",
        notIncluded: "个人消费"
      },
      ko: {
        title: "니모 스노클링",
        short: "가족에게 적합",
        time: "08:00 – 15:00",
        program: "보트. 해상 놀이. 스노클링. 점심.",
        take: "수영복, 수건",
        included: "보트, 점심, 장비",
        notIncluded: "개인 비용"
      },
      fr: {
        title: "Snorkeling Nemo",
        short: "Idéal pour les familles",
        time: "08:00 – 15:00",
        program: "Bateau. Parc flottant. Snorkeling. Déjeuner.",
        take: "Maillot, serviette",
        included: "Bateau, déjeuner, équipement",
        notIncluded: "Dépenses personnelles"
      },
      tr: {
        title: "Nemo Şnorkel",
        short: "Aileler için ideal",
        time: "08:00 – 15:00",
        program: "Tekne turu. Yüzen park. Şnorkel. Öğle yemeği.",
        take: "Mayo, havlu",
        included: "Tekne, yemek, ekipman",
        notIncluded: "Kişisel harcamalar"
      }
    }
  },

  "city-tour": {
    image: "img/city/1.jpg",
    texts: {
      en: {
        title: "Nha Trang City Tour",
        short: "City sightseeing",
        time: "08:30 – 14:30",
        program: "Pagoda. Cathedral. Local market. Cham towers. Lunch.",
        take: "Comfortable clothes",
        included: "Transport, guide, lunch",
        notIncluded: "Entrance tickets"
      },
      ru: {
        title: "Сити тур Нячанг",
        short: "Обзор города",
        time: "08:30 – 14:30",
        program: "Пагода. Собор. Рынок. Чамские башни. Обед.",
        take: "Удобная одежда",
        included: "Транспорт, гид, обед",
        notIncluded: "Входные билеты"
      },
      vi: {
        title: "City Tour Nha Trang",
        short: "Tham quan thành phố",
        time: "08:30 – 14:30",
        program: "Chùa. Nhà thờ. Chợ. Tháp Chăm. Ăn trưa.",
        take: "Trang phục thoải mái",
        included: "Xe, HDV, ăn trưa",
        notIncluded: "Vé tham quan"
      },
      zh: {
        title: "芽庄城市游",
        short: "城市观光",
        time: "08:30 – 14:30",
        program: "寺庙。教堂。市场。占婆塔。午餐。",
        take: "舒适衣物",
        included: "交通、导游、午餐",
        notIncluded: "门票"
      },
      ko: {
        title: "나트랑 시티 투어",
        short: "도시 관광",
        time: "08:30 – 14:30",
        program: "사원. 성당. 시장. 참 타워. 점심.",
        take: "편한 복장",
        included: "차량, 가이드, 점심",
        notIncluded: "입장권"
      },
      fr: {
        title: "Visite de Nha Trang",
        short: "Tour de la ville",
        time: "08:30 – 14:30",
        program: "Pagode. Cathédrale. Marché. Tours Cham. Déjeuner.",
        take: "Vêtements confortables",
        included: "Transport, guide, déjeuner",
        notIncluded: "Billets"
      },
      tr: {
        title: "Nha Trang Şehir Turu",
        short: "Şehir gezisi",
        time: "08:30 – 14:30",
        program: "Pagoda. Katedral. Pazar. Cham kuleleri. Öğle yemeği.",
        take: "Rahat kıyafet",
        included: "Ulaşım, rehber, yemek",
        notIncluded: "Giriş biletleri"
      }
    }
  }
