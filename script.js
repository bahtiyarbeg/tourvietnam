document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('toursGrid');
  let lang = 'ru';

  const formatVND = v =>
    new Intl.NumberFormat('vi-VN').format(v) + ' ₫';

  function render(){
    if (!window.tours || !grid) return;
    grid.innerHTML = '';

    window.tours.forEach(t => {
      const L = t[lang] || t.ru;

      const card = document.createElement('a');
      card.className = 'tour-card';
      card.href = `tour.html?id=${t.id}`;

      card.innerHTML = `
        <img src="${t.images[0]}" alt="">
        <div class="tour-info">
          <div class="tour-title">${L.title}</div>
          <div class="tour-desc">${L.short}</div>
          <div class="tour-price">${formatVND(t.price)}</div>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  document.querySelectorAll('.lang-switch button').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('.lang-switch button')
        .forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      lang = btn.dataset.lang;
      render();
    });
  });

  render();
});
