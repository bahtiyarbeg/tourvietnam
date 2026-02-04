const LANGS = ["ru","en","vi","zh","ko","fr","tr"];
let lang = localStorage.getItem("lang") || "ru";

function setLang(l){
  lang = l;
  localStorage.setItem("lang", l);
  renderPage();
}

/* ===== ВСЕ ТУРЫ ЗДЕСЬ ===== */
const tours = {
  deluxe: {
    img:"img/de-luxe/1.jpg",
    time:"08:00 – 16:00",
    take:"Купальник, полотенце, крем",
    included:"Трансфер, катер, гид",
    not:"Личные расходы",
    title:{
      ru:"De Luxe островной тур",
      en:"De Luxe Island Tour",
      vi:"Tour đảo De Luxe",
      zh:"豪华岛屿之旅",
      ko:"디럭스 섬 투어",
      fr:"Tour île De Luxe",
      tr:"De Luxe Ada Turu"
    },
    program:{
      ru:"Пляж Бай Чай • Рыбацкая деревня • Купание",
      en:"Bai Tranh Beach • Fishing village • Swimming",
      vi:"Bãi Tranh • Làng chài • Tắm biển",
      zh:"白滩海滩 • 渔村 • 游泳",
      ko:"바이짱 해변 • 어촌 • 수영",
      fr:"Plage Bai Tranh • Village de pêcheurs • Baignade",
      tr:"Bai Tranh Plajı • Balıkçı Köyü • Yüzme"
    }
  },

  robinson:{
    img:"img/robinson/1.jpg",
    time:"08:00 – 15:30",
    take:"Купальник",
    included:"Катер, гид",
    not:"Личные расходы",
    title:{
      ru:"Робинзон тур",
      en:"Robinson Tour",
      vi:"Tour Robinson",
      zh:"鲁宾逊之旅",
      ko:"로빈슨 투어",
      fr:"Tour Robinson",
      tr:"Robinson Turu"
    },
    program:{
      ru:"Дикий остров • Снорклинг • Отдых без туристов",
      en:"Wild island • Snorkeling • No crowds",
      vi:"Đảo hoang • Lặn biển • Yên tĩnh",
      zh:"原始岛屿 • 浮潜 • 无游客",
      ko:"무인도 • 스노클링 • 휴식",
      fr:"Île sauvage • Snorkeling • Calme",
      tr:"Vahşi ada • Şnorkel • Sakinlik"
    }
  },

  nemo:{
    img:"img/nemo/1.jpg",
    time:"08:00 – 14:00",
    take:"Купальник",
    included:"Снорклинг, катер",
    not:"Личные расходы",
    title:{
      ru:"Nemo Trip",
      en:"Nemo Trip",
      vi:"Tour Nemo",
      zh:"尼莫之旅",
      ko:"니모 투어",
      fr:"Nemo Trip",
      tr:"Nemo Turu"
    },
    program:{
      ru:"Кораллы • Рыбы • Снорклинг",
      en:"Corals • Fish • Snorkeling",
      vi:"San hô • Cá • Lặn biển",
      zh:"珊瑚 • 鱼 • 浮潜",
      ko:"산호 • 물고기 • 스노클링",
      fr:"Coraux • Poissons • Snorkeling",
      tr:"Mercan • Balık • Şnorkel"
    }
  }
};

/* ===== РЕНДЕР ===== */
function renderPage(){
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.dataset.i18n;
    if(texts[key]) el.innerText = texts[key][lang];
  });

  renderTours();
  renderTourPage();
}

function renderTours(){
  const wrap
