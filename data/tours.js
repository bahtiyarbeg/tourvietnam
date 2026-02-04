const TOURS = {
  robinson: {
    id: "robinson",
    image: "img/robinson.jpg",
    duration: "08:00 – 15:30",
    guide: "English-speaking guide",
    text: {
      ru: {
        title: "Робинзон тур",
        subtitle: "Уединённый остров без толп туристов",
        program: [
          "Сбор туристов и трансфер из отеля",
          "Морская прогулка на катере",
          "Прибытие на дикий остров",
          "Снорклинг и купание",
          "Свободное время для отдыха и фото",
          "Возвращение в отель"
        ],
        take: ["Купальник", "Полотенце", "Солнцезащитный крем", "Головной убор"],
        include: ["Трансфер", "Катер", "Снорклинг", "English-speaking guide"],
        exclude: ["Личные расходы"]
      },

      en: {
        title: "Robinson Tour",
        subtitle: "A quiet island escape with no crowds",
        program: [
          "Hotel pickup and transfer",
          "Boat trip to a wild island",
          "Arrival at the island",
          "Snorkeling and swimming",
          "Free time for relaxation and photos",
          "Return to hotel"
        ],
        take: ["Swimsuit", "Towel", "Sunscreen", "Hat"],
        include: ["Transfer", "Boat", "Snorkeling", "English-speaking guide"],
        exclude: ["Personal expenses"]
      }
    }
  }
};
