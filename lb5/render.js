function renderDishes(category, containerId) {
  const container = document.getElementById(containerId);

  dishes.forEach(function (dish) {
    if (dish.category !== category) {
      return;
    }

    const card = document.createElement('div');
    card.className = 'dish';
    card.dataset.dish = dish.keyword;
    card.dataset.category = dish.category;
    card.dataset.kind = dish.kind;
    card.innerHTML =
      '<img class="dish__img" src="' + dish.image + '" alt="' + dish.name + '">' +
      '<p class="dish__price">' + dish.price + ' руб.</p>' +
      '<p class="dish__name">' + dish.name + '</p>' +
      '<p class="dish__weight">' + dish.count + '</p>' +
      '<button class="dish__button" type="button">Добавить</button>';

    container.append(card);
  });
}

renderDishes('main', 'main-list');
renderDishes('soup', 'soup-list');
renderDishes('salad', 'salad-list');
renderDishes('drink', 'drink-list');
renderDishes('dessert', 'dessert-list');
