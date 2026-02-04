let lang = "ru";

function setLang(l){
 lang = l;
 renderIndex();
}

function renderIndex(){
 const box = document.getElementById("tours");
 if(!box) return;

 box.innerHTML="";
 TOURS.forEach(t=>{
  box.innerHTML+=`
   <a class="tour-card" href="tour.html?id=${t.id}">
    <img src="${t.img}">
    <h3>${t.title[lang]}</h3>
   </a>`;
 });
}

function renderTour(){
 const params = new URLSearchParams(location.search);
 const id = params.get("id");
 const t = TOURS.find(x=>x.id===id);
 if(!t) return;

 document.getElementById("tour").innerHTML=`
  <img src="${t.img}">
  <h1>${t.title[lang]}</h1>
  <p><b>Время:</b> ${t.time}</p>
  <p><b>Что взять:</b> ${t.take.join(", ")}</p>
  <p><b>Включено:</b> ${t.include.join(", ")}</p>
  <p><b>Не включено:</b> ${t.exclude.join(", ")}</p>
  <ul>${t.program.map(p=>`<li>${p}</li>`).join("")}</ul>
 `;
}

renderIndex();
renderTour();
