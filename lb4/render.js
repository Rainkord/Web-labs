const containers = {
  soup: document.querySelector('#soup-list'),
  main: document.querySelector('#main-list'),
  drink: document.querySelector('#drink-list')
};

for (const category in containers) {
  const list = dishes.filter(function (dish) {
    return dish.category === category;
  });

  list.sort(function (a, b) {
    return a.name.localeCompare(b.name, 'ru');
  });

  list.forEach(function (dish) {
    const card = document.createElement('div');
    card.className = 'dish';
    card.dataset.dish = dish.keyword;
    card.dataset.category = dish.category;
    card.innerHTML =
      '<img class="dish__img" src="' + dish.image + '" alt="' + dish.name + '">' +
      '<p class="dish__price">' + dish.price + ' руб.</p>' +
      '<p class="dish__name">' + dish.name + '</p>' +
      '<p class="dish__weight">' + dish.count + '</p>' +
      '<button class="dish__button" type="button">Добавить</button>';

    containers[category].append(card);
  });
}
