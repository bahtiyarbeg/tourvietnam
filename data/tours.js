const tours = [
  {
    id: 1,
    images: [
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800",
      "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=800"
    ],
    ru: {
      title: "Остров Робинзон",
      subtitle: "Уединенный остров, подальше от толп",
      description: "Проведите день на живописном острове Робинзон. Белый песок, кристально чистая вода, гамаки над водой. Включен обед из свежих морепродуктов.",
      price: "1 200 000 ₫"
    },
    en: {
      title: "Robinson Island",
      subtitle: "Secluded island away from crowds",
      description: "Spend a day on picturesque Robinson Island. White sand, crystal clear water, overwater hammocks. Fresh seafood lunch included.",
      price: "$50"
    },
    vi: {
      title: "Đảo Robinson",
      subtitle: "Hòn đảo yên tĩnh, tránh xa đám đông",
      description: "Trải nghiệm một ngày tại đảo Robinson. Cát trắng, nước trong xanh, võng trên mặt nước. Bao gồm bữa trưa hải sản tươi.",
      price: "1 200 000 ₫"
    },
    zh: {
      title: "罗宾逊岛",
      subtitle: "远离人群的僻静岛屿",
      description: "在风景如画的罗宾逊岛度过一天。白沙滩、清澈海水、水上吊床。包含新鲜海鲜午餐。",
      price: "¥350"
    },
    ko: {
      title: "로빈슨 섬",
      subtitle: "혼잡을 피한 한적한 섬",
      description: "아름다운 로빈슨 섬에서 하루를 보내세요. 하얀 모래, 맑은 물, 워터 해먹. 신선한 해산물 점심 포함.",
      price: "₩65,000"
    },
    fr: {
      title: "Île Robinson",
      subtitle: "Île isolée loin des foules",
      description: "Passez une journée sur l'île pittoresque de Robinson. Sable blanc, eau cristalline, hamacs sur l'eau. Déjeuner de fruits de mer frais inclus.",
      price: "45 €"
    },
    tr: {
      title: "Robinson Adası",
      subtitle: "Kalabalıktan uzak ıssız ada",
      description: "Resim gibi Robinson Adası'nda bir gün geçirin. Beyaz kum, berrak su, su üstü hamaklar. Taze deniz ürünleri öğle yemeği dahil.",
      price: "₺1.400"
    }
  },
  {
    id: 2,
    images: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800",
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800"
    ],
    ru: {
      title: "Хон Там",
      subtitle: "Снорклинг и водные развлечения",
      description: "Самый популярный остров Нячанга. Снорклинг с оборудованием, банан, водный мотоцикл. Горячие источники на острове.",
      price: "1 500 000 ₫"
    },
    en: {
      title: "Hon Tam",
      subtitle: "Snorkeling and water activities",
      description: "The most popular island in Nha Trang. Snorkeling with equipment, banana boat, jet ski. Hot springs on the island.",
      price: "$65"
    },
    vi: {
      title: "Hòn Tằm",
      subtitle: "Lặn biển và trò chơi nước",
      description: "Hòn đảo nổi tiếng nhất Nha Trang. Lặn biển có thiết bị, chuối nước, mô tô nước. Suối nước nóng trên đảo.",
      price: "1 500 000 ₫"
    },
    zh: {
      title: "蚕岛",
      subtitle: "浮潜和水上活动",
      description: "芽庄最受欢迎的岛屿。装备浮潜、香蕉船、摩托艇。岛上的温泉。",
      price: "¥450"
    },
    ko: {
      title: "혼탐 섬",
      subtitle: "스노클링과 수상 활동",
      description: "냐짱에서 가장 인기 있는 섬. 장비를 갖춘 스노클링, 바나나 보트, 제트 스키. 섬의 온천.",
      price: "₩85,000"
    },
    fr: {
      title: "Hon Tam",
      subtitle: "Plongée en apnée et activités nautiques",
      description: "L'île la plus populaire de Nha Trang. Snorkeling avec équipement, banane, jet ski. Sources chaudes sur l'île.",
      price: "58 €"
    },
    tr: {
      title: "Hon Tam",
      subtitle: "Şnorkel ve su aktiviteleri",
      description: "Nha Trang'ın en popüler adası. Ekipmanlı şnorkel, muz bot, jet ski. Adada sıcak kaynaklar.",
      price: "₺1.750"
    }
  },
  {
    id: 3,
    images: [
      "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?w=800",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800"
    ],
    ru: {
      title: "Мун Динь",
      subtitle: "Рыбалка и коралловые рифы",
      description: "Отличная рыбалка для начинающих и опытных. Красочные коралловые рифы, множество рыб. Ужин из улова на борту.",
      price: "1 800 000 ₫"
    },
    en: {
      title: "Mun Island",
      subtitle: "Fishing and coral reefs",
      description: "Great fishing for beginners and experienced. Colorful coral reefs, lots of fish. Dinner from the catch on board.",
      price: "$75"
    },
    vi: {
      title: "Hòn Mun",
      subtitle: "Câu cá và rạn san hô",
      description: "Câu cá tuyệt vời cho người mới và có kinh nghiệm. Rạn san hô đầy màu sắc, nhiều cá. Bữa tối từ cá bắt được trên tàu.",
      price: "1 800 000 ₫"
    },
    zh: {
      title: "木岛",
      subtitle: "钓鱼和珊瑚礁",
      description: "适合初学者和经验丰富者的绝佳钓鱼体验。色彩斑斓的珊瑚礁，众多鱼类。船上享用捕获的
        
window.tours = tours;
