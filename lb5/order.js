const selected = {
  soup: null,
  main: null,
  salad: null,
  drink: null,
  dessert: null
};

const categories = ['soup', 'main', 'salad', 'drink', 'dessert'];

const emptyTitles = {
  soup: 'Блюдо не выбрано',
  main: 'Блюдо не выбрано',
  salad: 'Блюдо не выбрано',
  drink: 'Напиток не выбран',
  dessert: 'Десерт не выбран'
};

document.querySelectorAll('.dish__button').forEach(function (button) {
  button.addEventListener('click', function () {
    const card = button.parentElement;
    const dish = dishes.find(function (item) {
      return item.keyword === card.dataset.dish;
    });

    selected[dish.category] = dish;
    updateOrder();
  });
});

function updateOrder() {
  document.querySelectorAll('.dish').forEach(function (card) {
    const dish = selected[card.dataset.category];

    if (dish && dish.keyword === card.dataset.dish) {
      card.classList.add('dish--selected');
    } else {
      card.classList.remove('dish--selected');
    }
  });

  const hasDishes =
    selected.soup !== null ||
    selected.main !== null ||
    selected.salad !== null ||
    selected.drink !== null ||
    selected.dessert !== null;

  document.getElementById('order-empty').hidden = hasDishes;
  document.getElementById('order-total-block').hidden = !hasDishes;

  let total = 0;

  categories.forEach(function (category) {
    const block = document.querySelector('[data-order-category="' + category + '"]');
    const dish = selected[category];

    block.hidden = !hasDishes;

    if (dish) {
      block.querySelector('.order__dish').textContent =
        dish.name + ' — ' + dish.price + ' руб.';
      total += dish.price;
    } else {
      block.querySelector('.order__dish').textContent = emptyTitles[category];
    }

    document.getElementById('order-' + category).value = dish ? dish.keyword : '';
  });

  document.getElementById('order-total').textContent = total + ' руб.';
}

function resetOrder() {
  selected.soup = null;
  selected.main = null;
  selected.salad = null;
  selected.drink = null;
  selected.dessert = null;

  resetFilters();
  updateOrder();
}

document.querySelector('.order__form').addEventListener('reset', resetOrder);

updateOrder();
