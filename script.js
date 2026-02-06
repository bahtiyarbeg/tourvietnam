document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('toursGrid');

  if (!grid) {
    console.error('❌ toursGrid not found');
    return;
  }

  if (!window.tours || !Array.isArray(window.tours)) {
    console.error('❌ tours data not found');
    grid.innerHTML = '<p>Туры временно недоступны</p>';
    return;
  }

  grid.innerHTML = '';

  window.tours.forEach(tour => {
    const card = document.createElement('a');
    card.className = 'tour-card';
    card.href = `tour.html?id=${tour.id}`;

    card.innerHTML = `
      <img src="${tour.images[0]}" alt="">
      <div class="tour-info">
        <div class="tour-title">${tour.title.ru}</div>
        <div class="tour-desc">${tour.short.ru}</div>
      </div>
    `;

    grid.appendChild(card);
  });
});
