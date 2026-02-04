let lang = localStorage.getItem("lang") || "ru";

function setLang(l){
  lang = l;
  localStorage.setItem("lang", l);
  renderIndex();
  renderTour();
  translateUI();
}

/* ===== ПЕРЕВОД ИНТЕРФЕЙСА ===== */
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

/* ===== ВСЕ ТУРЫ ===== */
const TOURS = [
{
id:"deluxe",
img:"img/de-luxe/1.jpg",
title:{
ru:"De Luxe островной тур",
en:"De Luxe Island Tour"
},
time:"08:00 – 16:00",
guide:"English-speaking guide",
take:"Swimsuit, towel, sunscreen",
include:"Transfer, boat, English-speaking guide",
exclude:"Personal expenses",
program:[
"Hotel pickup and transfer",
"Boat trip along the coast",
"Bai Chai beach — swimming & relax",
"Fishing village visit",
"Return to hotel"
]
},

{
id:"vip-hon-tam-1",
img:"img/vip-hon-tam-1/1.jpg",
title:{
ru:"VIP тур — Хон Там 1",
en:"VIP Hon Tam 1"
},
time:"08:00 – 16:30",
guide:"English-speaking guide",
take:"Swimsuit, towel",
include:"Transfer, boat, snorkeling, English-speaking guide",
exclude:"Extra services",
program:[
"Bai Chai beach",
"Coral bay snorkeling",
"Fishing village",
"Hon Tam island — mud bath & sea",
"Return"
]
},

{
id:"robinson",
img:"img/robinson/1.jpg",
title:{
ru:"Робинзон тур",
en:"Robinson Island Tour"
},
time:"08:00 – 15:30",
guide:"English-speaking guide",
take:"Swimsuit, towel, sunscreen",
include:"Boat, English-speaking guide",
exclude:"Personal expenses",
program:[
"Boat transfer to wild island",
"Empty beach without tourists",
"Swimming & snorkeling",
"Relax and nature time"
]
},

{
id:"nemo",
img:"img/nemo/1.jpg",
title:{
ru:"Nemo Trip",
en:"Nemo Trip"
},
time:"08:00 – 14:00",
guide:"English-speaking guide",
take:"Swimsuit, towel",
include:"Snorkeling gear, boat, English-speaking guide",
exclude:"Personal expenses",
program:[
"Safe snorkeling zone",
"Colorful fish and corals",
"Swimming",
"Underwater photos"
]
}
];

/* ===== РЕНДЕР ===== */
function renderIndex(){
  const box = document.getElementById("tours");
  if(!box) return;
  box.innerHTML="";
  TOURS.forEach(t=>{
    box.innerHTML+=`
      <a class="tour-card" href="tour.html?id=${t.id}">
        <img src="${t.img}">
        <h3>${t.title[lang] || t.title.ru}</h3>
      </a>`;
  });
}

function renderTour(){
  const id = new URLSearchParams(location.search).get("id");
  if(!id) return;
  const t = TOURS.find(x=>x.id===id);
  if(!t) return;

  document.getElementById("tourImg").src=t.img;
  document.getElementById("tourTitle").innerText=t.title[lang]||t.title.ru;
  document.getElementById("tourTime").innerText=t.time;
  document.getElementById("tourGuide").innerText=t.guide;
  document.getElementById("tourTake").innerText=t.take;
  document.getElementById("tourInclude").innerText=t.include;
  document.getElementById("tourExclude").innerText=t.exclude;

  const ul=document.getElementById("tourProgram");
  ul.innerHTML="";
  t.program.forEach(p=>ul.innerHTML+=`<li>${p}</li>`);
}

function translateUI(){
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key=el.dataset.i18n;
    if(UI[key]) el.innerText=UI[key][lang];
  });
}

translateUI();
renderIndex();
renderTour();
