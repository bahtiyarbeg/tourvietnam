let currentLang = "ru";

const texts = {
  ru:{title:"Экскурсии по Вьетнаму",subtitle:"Острова • Море • Снорклинг • Хон Там"},
  en:{title:"Tours in Vietnam",subtitle:"Islands • Sea • Snorkeling • Hon Tam"},
  vi:{title:"Tour tại Việt Nam",subtitle:"Đảo • Biển • Lặn biển • Hòn Tằm"},
  zh:{title:"越南旅游",subtitle:"岛屿 • 大海 • 浮潜 • 洪潭"},
  ko:{title:"베트남 투어",subtitle:"섬 • 바다 • 스노클링 • 혼탐"},
  fr:{title:"Excursions au Vietnam",subtitle:"Îles • Mer • Snorkeling • Hon Tam"},
  tr:{title:"Vietnam Turları",subtitle:"Adalar • Deniz • Şnorkel • Hon Tam"}
};

const tours = [
{
  img:"img/de-luxe/1.jpg",
  title:{
    ru:"De Luxe островной тур",
    en:"De Luxe Island Tour",
    vi:"Tour đảo De Luxe",
    zh:"豪华岛屿游",
    ko:"디럭스 섬 투어",
    fr:"Tour île De Luxe",
    tr:"De Luxe Ada Turu"
  },
  program:[
    "08:00 трансфер",
    "Катер",
    "Пляж Бай Чай",
    "Купание",
    "Рыбацкая деревня",
    "16:00 возвращение"
  ]
},
{
  img:"img/robinson/1.jpg",
  title:{
    ru:"Робинзон тур",
    en:"Robinson Island",
    vi:"Đảo Robinson",
    zh:"鲁滨逊岛",
    ko:"로빈슨 섬",
    fr:"Île Robinson",
    tr:"Robinson Adası"
  },
  program:[
    "Остров без туристов",
    "Купание",
    "Снорклинг",
    "Отдых"
  ]
},
{
  img:"img/nemo/1.jpg",
  title:{
    ru:"Nemo Trip",
    en:"Nemo Trip",
    vi:"Tour Nemo",
    zh:"尼莫之旅",
    ko:"니모 투어",
    fr:"Nemo Trip",
    tr:"Nemo Turu"
  },
  program:[
    "Детский снорклинг",
    "Рыбки",
    "Безопасно",
    "Семейный формат"
  ]
}
];

function renderTours(){
  const box = document.getElementById("tours");
  box.innerHTML = "";

  tours.forEach(t=>{
    box.innerHTML += `
    <div class="tour">
      <img src="${t.img}" onerror="this.style.display='none'">
      <h3>${t.title[currentLang]}</h3>
      <details>
        <summary>▶ Программа тура</summary>
        <ul>${t.program.map(p=>`<li>${p}</li>`).join("")}</ul>
      </details>
    </div>`;
  });
}

function setLang(l){
  currentLang = l;
  document.getElementById("title").innerText = texts[l].title;
  document.getElementById("subtitle").innerText = texts[l].subtitle;
  renderTours();
}

renderTours();
