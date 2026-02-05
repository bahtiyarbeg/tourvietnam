const LANGS = ["en","ru","vi","zh","ko","fr","tr"];
let lang = localStorage.getItem("lang") || "en";
if (!LANGS.includes(lang)) lang = "en";
localStorage.setItem("lang", lang);

document.querySelectorAll("[data-lang]").forEach(b=>{
  b.onclick=()=>{localStorage.setItem("lang",b.dataset.lang);location.reload();}
});

const phone = "+84777770759";
const waBase = "https://wa.me/84777770759?text=";

const grid = document.getElementById("tours");
if (grid) {
  Object.entries(TOURS).forEach(([id,t])=>{
    const d = t.texts[lang] || t.texts.en;
    grid.innerHTML += `
      <a class="card" href="tour.html?id=${id}">
        <img src="${t.image}">
        <h3>${d.title}</h3>
        <p>${d.short}</p>
      </a>
    `;
  });
}

const box = document.getElementById("tour");
if (box) {
  const id = new URLSearchParams(location.search).get("id");
  const t = TOURS[id];
  if (t) {
    const d = t.texts[lang] || t.texts.en;
    box.innerHTML = `
      <img src="${t.image}" class="big">
      <h1>${d.title}</h1>
      <p>${d.short}</p>
      <p>⏰ <b>${d.time}</b></p>
      <p>🗺 <b>Program:</b> ${d.program}</p>
      <p>🎒 <b>What to take:</b> ${d.take}</p>
      <p>✅ <b>Included:</b> ${d.included}</p>
      <p>❌ <b>Not included:</b> ${d.notIncluded}</p>
      <a class="btn" href="${waBase}${encodeURIComponent(d.title)}" target="_blank">
        Book via WhatsApp
      </a>
    `;
  }
}

const wa = document.getElementById("wa");
if (wa) wa.href = waBase + encodeURIComponent("Hello! I want to book a tour.");
