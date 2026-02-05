window.onload = () => {
  const list = document.getElementById("tours");
  const page = document.getElementById("tour");

  if (list) {
    TOURS.forEach(t => {
      const a = document.createElement("a");
      a.className = "card";
      a.href = `tour.html?id=${t.id}`;
      a.innerHTML = `
        <img src="${t.img}">
        <div class="card-body">
          <h3>${t.title}</h3>
          <p>${t.desc}</p>
        </div>`;
      list.appendChild(a);
    });
  }

  if (page) {
    const id = new URLSearchParams(location.search).get("id");
    const t = TOURS.find(x => x.id === id);
    if (!t) return;
    page.innerHTML = `
      <img src="${t.img}" style="width:100%;border-radius:20px">
      <h1>${t.title}</h1>
      <p>${t.desc}</p>
      ${t.time ? `<p><b>Время:</b> ${t.time}</p>` : ""}
      ${t.guide ? `<p><b>Гид:</b> ${t.guide}</p>` : ""}
    `;
  }
};
