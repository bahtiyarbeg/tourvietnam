const grid = document.getElementById('toursGrid');

if (!grid || !window.tours) {
  console.error('Tours data not found');
} else {
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
}
