// ===== ЯЗЫК =====
let lang = localStorage.getItem("lang") || "ru";
function setLang(l){
  lang = l;
  localStorage.setItem("lang", l);
  render();
}

// ===== UI ТЕКСТЫ =====
const UI = {
  title:{
    ru:"Экскурсии по Вьетнаму",
    en:"Vietnam Tours",
    vi:"Tour Việt Nam",
    zh:"越南旅游",
    ko:"베트남 투어",
    fr:"Excursions au Vietnam",
    tr:"Vietnam Turları"
  },
  subtitle:{
    ru:"Острова • Море • Снорклинг • Хон Там",
    en:"Islands • Sea • Snorkeling • Hon Tam",
    vi:"Đảo • Biển • Lặn biển • Hòn Tằm",
    zh:"岛屿 • 大海 • 浮潜 • 洪潭",
    ko:"섬 • 바다 • 스노클링 • 혼탐",
    fr:"Îles • Mer • Snorkeling • Hon Tam",
    tr:"Adalar • Deniz • Şnorkel • Hon Tam"
  },
  time:{ru:"Время",en:"Time",vi:"Thời gian",zh:"时间",ko:"시간",fr:"Heure",tr:"Saat"},
  guide:{ru:"Гид",en:"Guide",vi:"Hướng dẫn",zh:"导游",ko:"가이드",fr:"Guide",tr:"Rehber"},
  take:{ru:"Что взять",en:"What to bring",vi:"Mang theo",zh:"携带物品",ko:"준비물",fr:"À prendre",tr:"Yanınıza alın"},
  include:{ru:"Включено",en:"Included",vi:"Bao gồm",zh:"包含",ko:"포함",fr:"Inclus",tr:"Dahil"},
  exclude:{ru:"Не включено",en:"Not included",vi:"Không bao gồm",zh:"不包含",ko:"불포함",fr:"Non inclus",tr:"Hariç"},
  program:{ru:"Программа тура",en:"Tour program",vi:"Chương trình tour",zh:"行程安排",ko:"투어 일정",fr:"Programme",tr:"Tur programı"}
};

// ===== ДАННЫЕ ТУРА (ЭТАЛОН) =====
const TOURS = {
  robinson:{
    id:"robinson",
    image:"img/robinson.jpg",
    duration:"08:00 – 15:30",
    guide:"English-speaking guide",
    take:{
      ru:["Купальник","Полотенце","Солнцезащитный крем","Головной убор"],
      en:["Swimsuit","Towel","Sunscreen","Hat"],
      vi:["Đồ bơi","Khăn","Kem chống nắng","Mũ"],
      zh:["泳衣","毛巾","防晒霜","帽子"],
      ko:["수영복","수건","선크림","모자"],
      fr:["Maillot","Serviette","Crème solaire","Chapeau"],
      tr:["Mayo","Havlu","Güneş kremi","Şapka"]
    },
    include:{
      ru:["Трансфер","Катер","Снорклинг","English-speaking guide"],
      en:["Transfer","Boat","Snorkeling","English-speaking guide"],
      vi:["Xe đưa đón","Tàu","Lặn biển","Hướng dẫn tiếng Anh"],
      zh:["接送","快艇","浮潜","英文导游"],
      ko:["픽업","보트","스노클링","영어 가이드"],
      fr:["Transfert","Bateau","Snorkeling","Guide anglophone"],
      tr:["Transfer","Tekne","Şnorkel","İngilizce rehber"]
    },
    exclude:{
      ru:["Личные расходы"],
      en:["Personal expenses"],
      vi:["Chi phí cá nhân"],
      zh:["个人消费"],
      ko:["개인 비용"],
      fr:["Dépenses personnelles"],
      tr:["Kişisel harcamalar"]
    },
    text:{
      ru:{
        title:"Robinson Tour",
        subtitle:"Уединённый остров без толп туристов",
        program:[
          "Сбор и трансфер из отеля",
          "Морская прогулка на катере к дикому острову",
          "Снорклинг в кристально чистой воде",
          "Свободное время: купание, отдых, фото",
          "Возвращение в отель"
        ]
      },
      en:{
        title:"Robinson Tour",
        subtitle:"A quiet island escape away from crowds",
        program:[
          "Hotel pickup and transfer",
          "Boat trip to a wild island",
          "Snorkeling in crystal-clear water",
          "Free time: swimming, relaxing, photos",
          "Return to hotel"
        ]
      },
      vi:{ title:"Tour Robinson", subtitle:"Hòn đảo yên tĩnh, tránh xa đám đông", program:[
        "Đón khách tại khách sạn","Đi tàu ra đảo hoang","Lặn biển ngắm san hô",
        "Thời gian tự do: tắm biển, nghỉ ngơi, chụp ảnh","Trở về khách sạn"
      ]},
      zh:{ title:"鲁宾逊之旅", subtitle:"远离人群的宁静海岛", program:[
        "酒店接送","乘船前往原始岛屿","清澈海水中浮潜",
        "自由活动：游泳、休息、拍照","返回酒店"
      ]},
      ko:{ title:"로빈슨 투어", subtitle:"사람 없는 한적한 섬", program:[
        "호텔 픽업","무인도로 보트 이동","맑은 바다 스노클링",
        "자유 시간: 수영, 휴식, 사진","호텔 복귀"
      ]},
      fr:{ title:"Tour Robinson", subtitle:"Île paisible loin de la foule", program:[
        "Prise en charge à l’hôtel","Bateau vers une île sauvage","Snorkeling en eau claire",
        "Temps libre : baignade, détente, photos","Retour à l’hôtel"
      ]},
      tr:{ title:"Robinson Turu", subtitle:"Kalabalıktan uzak sakin ada", program:[
        "Otelden transfer","Vahşi adaya tekne yolculuğu","Berrak suda şnorkel",
        "Serbest zaman: yüzme, dinlenme, fotoğraf","Otele dönüş"
      ]}
    }
  }
};

// ===== РЕНДЕР =====
function render(){
  // UI
  const t = UI;
  const ttl = document.getElementById("ui-title");
  const sub = document.getElementById("ui-subtitle");
  if(ttl) ttl.innerText = t.title[lang];
  if(sub) sub.innerText = t.subtitle[lang];

  renderIndex();
  renderTour();
}

function renderIndex(){
  const box = document.getElementById("tours");
  if(!box) return;
  box.innerHTML = "";

  Object.values(TOURS).forEach(t=>{
    const tx = t.text[lang] || t.text.ru;
    box.innerHTML += `
      <a class="tour-card" href="tour.html?id=${t.id}">
        <img src="${t.image}" alt="">
        <div class="card-body">
          <h3>${tx.title}</h3>
          <p>${tx.subtitle}</p>
        </div>
      </a>`;
  });
}

function renderTour(){
  const app = document.getElementById("app");
  if(!app) return;

  const id = new URLSearchParams(location.search).get("id");
  const t = TOURS[id];
  if(!t){
    app.innerHTML = "<p style='padding:14px'>Tour not found</p>";
    return;
  }
  const tx = t.text[lang] || t.text.ru;

  app.innerHTML = `
    <section class="tour">
      <img src="${t.image}" alt="">
      <h1>${tx.title}</h1>
      <p>${tx.subtitle}</p>

      <div class="meta">
        <div class="block"><h4>${UI.time[lang]}</h4><p>${t.duration}</p></div>
        <div class="block"><h4>${UI.guide[lang]}</h4><p>${t.guide}</p></div>
      </div>

      <div class="block">
        <h4>${UI.take[lang]}</h4>
        <ul>${t.take[lang].map(x=>`<li>${x}</li>`).join("")}</ul>
      </div>

      <div class="block">
        <h4>${UI.include[lang]}</h4>
        <ul>${t.include[lang].map(x=>`<li>${x}</li>`).join("")}</ul>
      </div>

      <div class="block">
        <h4>${UI.exclude[lang]}</h4>
        <ul>${t.exclude[lang].map(x=>`<li>${x}</li>`).join("")}</ul>
      </div>

      <div class="program">
        <h4>${UI.program[lang]}</h4>
        <ul>${tx.program.map(x=>`<li>${x}</li>`).join("")}</ul>
      </div>

      <a class="cta" href="https://wa.me/84777770759" target="_blank">
        Book via WhatsApp
      </a>
    </section>
  `;
}

// init
render();
