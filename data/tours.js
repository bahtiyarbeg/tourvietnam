// data/tours.js
const TOURS = {
  robinson: {
    image: "img/robinson/1.jpg",
    time: "08:00 – 15:30",
    guide: "English-speaking guide",
    ru: {
      title: "Робинзон тур",
      subtitle: "Тихий остров вдали от толп",
      take: ["Купальник", "Полотенце", "Солнцезащитный крем", "Головной убор"],
      included: ["Трансфер", "Катер", "Снорклинг", "Англоговорящий гид"],
      excluded: ["Личные расходы"],
      program: [
        "Трансфер из отеля",
        "Морская прогулка на дикий остров",
        "Снорклинг в кристально чистой воде",
        "Свободное время: купание, отдых, фото",
        "Возвращение в отель"
      ]
    },
    en: {
      title: "Robinson Tour",
      subtitle: "A quiet island far from crowds",
      take: ["Swimsuit", "Towel", "Sunscreen", "Hat"],
      included: ["Transfer", "Boat", "Snorkeling", "English-speaking guide"],
      excluded: ["Personal expenses"],
      program: [
        "Hotel pickup",
        "Boat trip to a wild island",
        "Snorkeling in crystal-clear water",
        "Free time: swimming, relaxing, photos",
        "Return to hotel"
      ]
    },
    vi: {
      title: "Tour Robinson",
      subtitle: "Hòn đảo yên tĩnh, tránh xa đám đông",
      take: ["Đồ bơi", "Khăn", "Kem chống nắng", "Mũ"],
      included: ["Xe đưa đón", "Tàu", "Lặn biển", "Hướng dẫn viên tiếng Anh"],
      excluded: ["Chi phí cá nhân"],
      program: [
        "Đón khách tại khách sạn",
        "Di chuyển bằng tàu ra đảo hoang",
        "Lặn ngắm san hô",
        "Thời gian tự do: tắm biển, nghỉ ngơi, chụp ảnh",
        "Trở về khách sạn"
      ]
    }
  },

  "vip-hon-tam-1": {
    image: "img/vip-hon-tam-1/1.jpg",
    time: "08:00 – 16:00",
    guide: "English-speaking guide",
    ru: {
      title: "VIP Хон Там 1",
      subtitle: "Премиум отдых на лучшем острове",
      take: ["Купальник", "Полотенце", "Солнцезащитный крем"],
      included: ["VIP трансфер", "Катер", "Обед", "Снорклинг", "Гид"],
      excluded: ["Личные расходы"],
      program: [
        "VIP трансфер из отеля",
        "Катер на остров Хон Там",
        "Пляжный отдых и снорклинг",
        "Обед в ресторане",
        "Свободное время",
        "Возвращение"
      ]
    },
    en: {
      title: "VIP Hon Tam 1",
      subtitle: "Premium island experience",
      take: ["Swimsuit", "Towel", "Sunscreen"],
      included: ["VIP transfer", "Boat", "Lunch", "Snorkeling", "Guide"],
      excluded: ["Personal expenses"],
      program: [
        "VIP hotel pickup",
        "Speedboat to Hon Tam island",
        "Beach time and snorkeling",
        "Restaurant lunch",
        "Free time",
        "Return"
      ]
    },
    vi: {
      title: "VIP Hòn Tằm 1",
      subtitle: "Trải nghiệm nghỉ dưỡng cao cấp",
      take: ["Đồ bơi", "Khăn", "Kem chống nắng"],
      included: ["Xe VIP", "Tàu", "Ăn trưa", "Lặn biển", "Hướng dẫn viên"],
      excluded: ["Chi phí cá nhân"],
      program: [
        "Đón khách VIP",
        "Tàu ra Hòn Tằm",
        "Tắm biển và lặn ngắm san hô",
        "Ăn trưa tại nhà hàng",
        "Thời gian tự do",
        "Trở về"
      ]
    }
  },

  nemo: {
    image: "img/nemo/1.jpg",
    time: "08:00 – 15:30",
    guide: "English-speaking guide",
    ru: {
      title: "Nemo Trip",
      subtitle: "Лучший снорклинг для всей семьи",
      take: ["Купальник", "Полотенце", "Крем от солнца"],
      included: ["Трансфер", "Катер", "Снорклинг", "Гид"],
      excluded: ["Личные расходы"],
      program: [
        "Сбор из отеля",
        "Выход в море",
        "Снорклинг с яркими рыбами",
        "Отдых на воде",
        "Возвращение"
      ]
    },
    en: {
      title: "Nemo Trip",
      subtitle: "Family-friendly snorkeling tour",
      take: ["Swimsuit", "Towel", "Sunscreen"],
      included: ["Transfer", "Boat", "Snorkeling", "Guide"],
      excluded: ["Personal expenses"],
      program: [
        "Hotel pickup",
        "Boat trip",
        "Snorkeling with colorful fish",
        "Relaxing time",
        "Return"
      ]
    },
    vi: {
      title: "Tour Nemo",
      subtitle: "Lặn biển phù hợp cho gia đình",
      take: ["Đồ bơi", "Khăn", "Kem chống nắng"],
      included: ["Xe đưa đón", "Tàu", "Lặn biển", "Hướng dẫn viên"],
      excluded: ["Chi phí cá nhân"],
      program: [
        "Đón khách",
        "Ra biển bằng tàu",
        "Lặn ngắm cá nhiều màu sắc",
        "Thư giãn",
        "Trở về"
      ]
    }
  }
};

export default TOURS;
