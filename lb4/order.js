const selected = {
  soup: null,
  main: null,
  drink: null
};

const emptyTitles = {
  soup: 'Блюдо не выбрано',
  main: 'Блюдо не выбрано',
  drink: 'Напиток не выбран'
};

document.querySelectorAll('.dish__button').forEach(function (button) {
  button.addEventListener('click', function () {
    const card = button.closest('.dish');
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

    card.classList.toggle(
      'dish--selected',
      Boolean(dish) && dish.keyword === card.dataset.dish
    );
  });

  const hasDishes = selected.soup || selected.main || selected.drink;

  document.querySelector('#order-empty').hidden = Boolean(hasDishes);
  document.querySelector('#order-total-block').hidden = !hasDishes;

  let total = 0;

  for (const category in selected) {
    const block = document.querySelector('[data-order-category="' + category + '"]');
    const dish = selected[category];

    block.hidden = !hasDishes;
    block.querySelector('.order__dish').textContent = dish
      ? dish.name + ' — ' + dish.price + ' руб.'
      : emptyTitles[category];

    if (dish) {
      total += dish.price;
    }
  }

  document.querySelector('#order-total').textContent = total + ' руб.';
  document.querySelector('#order-soup').value = selected.soup ? selected.soup.keyword : '';
  document.querySelector('#order-main').value = selected.main ? selected.main.keyword : '';
  document.querySelector('#order-drink').value = selected.drink ? selected.drink.keyword : '';
}

updateOrder();
