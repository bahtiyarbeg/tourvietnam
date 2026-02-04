const TOURS = [
  {
    id: "robinson",
    image: "img/robinson/1.jpg",
    title: {
      ru: "Робинзон тур",
      en: "Robinson Tour",
      vi: "Tour Robinson",
      zh: "鲁滨逊之旅",
      ko: "로빈슨 투어",
      fr: "Tour Robinson",
      tr: "Robinson Turu"
    },
    desc: {
      ru: "Тихий остров вдали от толп",
      en: "Quiet island away from crowds",
      vi: "Hòn đảo yên tĩnh, tránh xa đám đông",
      zh: "远离人群的安静岛屿",
      ko: "조용한 외딴 섬",
      fr: "Île paisible loin de la foule",
      tr: "Kalabalıktan uzak sakin ada"
    }
  },

  {
    id: "de-luxe",
    image: "img/de-luxe/1.jpg",
    title: {
      ru: "De Luxe тур",
      en: "De Luxe Tour",
      vi: "Tour De Luxe",
      tr: "De Luxe Turu"
    },
    desc: {
      ru: "Премиальный отдых",
      en: "Premium experience",
      vi: "Trải nghiệm cao cấp",
      tr: "Premium tur"
    }
  },

  {
    id: "diving",
    image: "img/diving/1.jpg",
    title: {
      ru: "Дайвинг",
      en: "Diving",
      vi: "Lặn biển",
      tr: "Dalış"
    },
    desc: {
      ru: "Погружение с аквалангом",
      en: "Scuba diving experience",
      vi: "Trải nghiệm lặn biển",
      tr: "Tüplü dalış"
    }
  },

  {
    id: "four-islands-ninh-thuan",
    image: "img/four-islands-ninh-thuan/1.jpg",
    title: {
      ru: "4 острова Ниньтхуан",
      en: "4 Islands Ninh Thuan",
      vi: "4 đảo Ninh Thuận",
      tr: "4 Ada Ninh Thuan"
    },
    desc: {
      ru: "Морское путешествие",
      en: "Island hopping tour",
      vi: "Hành trình trên biển",
      tr: "Ada turu"
    }
  },

  {
    id: "hon-mun-hon-tam",
    image: "img/hon-mun-hon-tam/1.jpg",
    title: {
      ru: "Хон Мун + Хон Там",
      en: "Hon Mun + Hon Tam",
      vi: "Hòn Mun + Hòn Tằm",
      tr: "Hon Mun + Hon Tam"
    },
    desc: {
      ru: "Снорклинг и отдых",
      en: "Snorkeling & relax",
      vi: "Lặn ngắm san hô và thư giãn",
      tr: "Şnorkel ve dinlenme"
    }
  },

  {
    id: "hon-mun-mini-beach",
    image: "img/hon-mun-mini-beach/1.jpg",
    title: {
      ru: "Хон Мун + Mini Beach",
      en: "Hon Mun + Mini Beach",
      vi: "Hòn Mun + Mini Beach",
      tr: "Hon Mun + Mini Beach"
    },
    desc: {
      ru: "Лучшие пляжи",
      en: "Best beaches",
      vi: "Bãi biển đẹp nhất",
      tr: "En iyi plajlar"
    }
  },

  {
    id: "hon-mun-vai-chai",
    image: "img/hon-mun-vai-chai/1.jpg",
    title: {
      ru: "Хон Мун + Вай Чай",
      en: "Hon Mun + Vai Chai",
      vi: "Hòn Mun + Vãi Chài",
      tr: "Hon Mun + Vai Chai"
    },
    desc: {
      ru: "Рыбацкая деревня",
      en: "Fishing village",
      vi: "Làng chài",
      tr: "Balıkçı köyü"
    }
  },

  {
    id: "mini-beach-hon-tam",
    image: "img/mini-beach-hon-tam/1.jpg",
    title: {
      ru: "Mini Beach + Хон Там",
      en: "Mini Beach + Hon Tam",
      vi: "Mini Beach + Hòn Tằm",
      tr: "Mini Beach + Hon Tam"
    },
    desc: {
      ru: "Пляжный отдых",
      en: "Beach relaxation",
      vi: "Nghỉ dưỡng biển",
      tr: "Plaj tatili"
    }
  },

  {
    id: "nemo",
    image: "img/nemo/1.jpg",
    title: {
      ru: "Немо тур",
      en: "Nemo Tour",
      vi: "Tour Nemo",
      tr: "Nemo Turu"
    },
    desc: {
      ru: "Идеально для детей",
      en: "Perfect for kids",
      vi: "Phù hợp cho trẻ em",
      tr: "Çocuklar için ideal"
    }
  },

  {
    id: "one-island-hon-tam",
    image: "img/one-island-hon-tam/1.jpg",
    title: {
      ru: "1 остров — Хон Там",
      en: "One Island Hon Tam",
      vi: "1 đảo Hòn Tằm",
      tr: "1 Ada Hon Tam"
    },
    desc: {
      ru: "Спокойный день",
      en: "Relaxing day",
      vi: "Ngày thư giãn",
      tr: "Sakin bir gün"
    }
  },

  {
    id: "one-island-mini-beach",
    image: "img/one-island-mini-beach/1.jpg",
    title: {
      ru: "1 остров — Mini Beach",
      en: "One Island Mini Beach",
      vi: "1 đảo Mini Beach",
      tr: "1 Ada Mini Beach"
    },
    desc: {
      ru: "Белый песок",
      en: "White sand beach",
      vi: "Cát trắng mịn",
      tr: "Beyaz kum"
    }
  },

  {
    id: "snorkeling-boat",
    image: "img/snorkeling-boat/1.jpg",
    title: {
      ru: "Снорклинг на лодке",
      en: "Snorkeling Boat",
      vi: "Lặn ngắm san hô bằng tàu",
      tr: "Tekneyle şnorkel"
    },
    desc: {
      ru: "Морская прогулка",
      en: "Sea adventure",
      vi: "Hành trình trên biển",
      tr: "Deniz turu"
    }
  },

  {
    id: "vineyard-ninh-thuan",
    image: "img/vineyard-ninh-thuan/1.jpg",
    title: {
      ru: "Виноградники Ниньтхуан",
      en: "Ninh Thuan Vineyards",
      vi: "Vườn nho Ninh Thuận",
      tr: "Ninh Thuan Bağları"
    },
    desc: {
      ru: "Экскурсия на виноградники",
      en: "Vineyard excursion",
      vi: "Tham quan vườn nho",
      tr: "Bağ gezisi"
    }
  },

  {
    id: "vip-hon-tam-1",
    image: "img/vip-hon-tam-1/1.jpg",
    title: {
      ru: "VIP Хон Там 1",
      en: "VIP Hon Tam 1",
      vi: "VIP Hòn Tằm 1",
      tr: "VIP Hon Tam 1"
    },
    desc: {
      ru: "VIP сервис",
      en: "VIP service",
      vi: "Dịch vụ VIP",
      tr: "VIP hizmet"
    }
  },

  {
    id: "vip-hon-tam-2",
    image: "img/vip-hon-tam-2/1.jpg",
    title: {
      ru: "VIP Хон Там 2",
      en: "VIP Hon Tam 2",
      vi: "VIP Hòn Tằm 2",
      tr: "VIP Hon Tam 2"
    },
    desc: {
      ru: "Максимальный комфорт",
      en: "Maximum comfort",
      vi: "Thoải mái tối đa",
      tr: "Maksimum konfor"
    }
  }
];
