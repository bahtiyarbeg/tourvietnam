document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('toursGrid');
  if (!grid) return;

  const LANG_DEFAULT = 'ru';
  let lang = LANG_DEFAULT;

  function render(){
    if (!window.tours || !Array.isArray(window.tours)) {
      grid.innerHTML = '<p style="opacity:.7">Tours are loading…</p>';
      return;
    }
    grid.innerHTML = '';
    window.tours.forEach(t => {
      const L = t[lang] || t[LANG_DEFAULT];
      const a = document.createElement('a');
      a.className = 'tour-card';
      a.href = `tour.html?id=${t.id}`;
      a.innerHTML = `
        <img src="${t.images[0]}" alt="">
        <div class="tour-info">
          <div class="tour-title">${L.title}</div>
          <div class="tour-desc">${L.short}</div>
        </div>`;
      grid.appendChild(a);
    });
  }

  document.querySelectorAll('.lang-switch button').forEach(b=>{
    b.addEventListener('click',()=>{
      document.querySelectorAll('.lang-switch button').forEach(x=>x.classList.remove('active'));
      b.classList.add('active');
      lang = b.dataset.lang;
      render();
    });
  });

  render();
});
