// ===== ЯЗЫК =====
let lang = localStorage.getItem("lang") || "ru";

function setLang(l) {
  lang = l;
  localStorage.setItem("lang", l);

  renderIndex();
  renderTour();
}

// ===== ГЛАВНАЯ =====
function renderIndex() {
  const box = document.getElementById("tours");
  if (!box) return;

  box.innerHTML = "";

  TOURS.forEach(t => {
    box.innerHTML += `
      <a class="tour-card" href="tour.html?id=${t.id}">
        <img src="${t.img}" alt="${t.title[lang]}">
        <h3>${t.title[lang]}</h3>
      </a>
    `;
  });
}

// ===== СТРАНИЦА ТУРА =====
function renderTour() {
  const container = document.getElementById("tour");
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const t = TOURS.find(x => x.id === id);
  if (!t) {
    container.innerHTML = "<p>Тур не найден</p>";
    return;
  }

  container.innerHTML = `
    <img src="${t.img}" class="tour-img">

    <h1>${t.title[lang]}</h1>

    <p><b>${text("time")}:</b> ${t.time}</p>
    <p><b>${text("take")}:</b> ${t.take.join(", ")}</p>
    <p><b>${text("include")}:</b> ${t.include.join(", ")}</p>
    <p><b>${text("exclude")}:</b> ${t.exclude.join(", ")}</p>

    <h3>${text("program")}:</h3>
    <ul>
      ${t.program.map(p => `<li>${p}</li>`).join("")}
    </ul>
  `;
}

// ===== ТЕКСТЫ ИНТЕРФЕЙСА =====
function text(key) {
  const dict = {
    time: {
      ru: "Время",
      en: "Time",
      vi: "Thời gian",
      zh: "时间",
      ko: "시간",
      fr: "Heure",
      tr: "Saat"
    },
    take: {
      ru: "Что взять",
      en: "What to bring",
      vi: "Mang theo",
      zh: "携带物品",
      ko: "준비물",
      fr: "À prendre",
      tr: "Yanınıza alın"
    },
    include: {
      ru: "Включено",
      en: "Included",
      vi: "Bao gồm",
      zh: "包含",
      ko: "포함",
      fr: "Inclus",
      tr: "Dahil"
    },
    exclude: {
      ru: "Не включено",
      en: "Not included",
      vi: "Không bao gồm",
      zh: "不包含",
      ko: "불포함",
      fr: "Non inclus",
      tr: "Hariç"
    },
    program: {
      ru: "Программа тура",
      en: "Tour program",
      vi: "Chương trình tour",
      zh: "行程",
      ko: "투어 일정",
      fr: "Programme",
      tr: "Tur programı"
    }
  };

  return dict[key][lang] ||
