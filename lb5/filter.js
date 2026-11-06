const filterBars = document.querySelectorAll('.filters');

filterBars.forEach(function (bar) {
  const buttons = bar.querySelectorAll('.filter');

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      const active = button.classList.contains('filter--active');
      const category = bar.dataset.filterCategory;

      buttons.forEach(function (item) {
        item.classList.remove('filter--active');
      });

      if (!active) {
        button.classList.add('filter--active');
      }

      const kind = active ? null : button.dataset.kind;

      document
        .querySelectorAll('.dish[data-category="' + category + '"]')
        .forEach(function (card) {
          card.hidden = kind !== null && card.dataset.kind !== kind;
        });
    });
  });
});

function resetFilters() {
  document.querySelectorAll('.filter').forEach(function (button) {
    button.classList.remove('filter--active');
  });

  document.querySelectorAll('.dish').forEach(function (card) {
    card.hidden = false;
  });
}
