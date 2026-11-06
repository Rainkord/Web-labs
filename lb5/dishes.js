const dishes = [
  {
    keyword: 'fried-potatoes',
    name: 'Жареная картошка с грибами',
    price: 150,
    category: 'main',
    count: '250 г',
    image: 'images/fried-potatoes.jpg',
    kind: 'veg'
  },
  {
    keyword: 'lasagna',
    name: 'Лазанья',
    price: 385,
    category: 'main',
    count: '310 г',
    image: 'images/lasagna.jpg',
    kind: 'meat'
  },
  {
    keyword: 'chicken-mushroom-sauce',
    name: 'Курица с грибами в сливочном соусе',
    price: 225,
    category: 'main',
    count: '280 г',
    image: 'images/chicken-mushroom-sauce.jpg',
    kind: 'meat'
  },
  {
    keyword: 'fish-cutlet-rice',
    name: 'Рыбная котлета с рисом и овощами',
    price: 320,
    category: 'main',
    count: '320 г',
    image: 'images/fish-cutlet-rice.jpg',
    kind: 'fish'
  },
  {
    keyword: 'margherita-pizza',
    name: 'Пицца Маргарита',
    price: 450,
    category: 'main',
    count: '470 г',
    image: 'images/margherita-pizza.jpg',
    kind: 'veg'
  },
  {
    keyword: 'shrimp-pasta',
    name: 'Паста с креветками',
    price: 340,
    category: 'main',
    count: '280 г',
    image: 'images/shrimp-pasta.jpg',
    kind: 'fish'
  },
  {
    keyword: 'gazpacho',
    name: 'Гаспачо',
    price: 195,
    category: 'soup',
    count: '350 г',
    image: 'images/gazpacho.jpg',
    kind: 'veg'
  },
  {
    keyword: 'mushroom-soup',
    name: 'Грибной суп-пюре',
    price: 185,
    category: 'soup',
    count: '300 г',
    image: 'images/mushroom-soup.jpg',
    kind: 'veg'
  },
  {
    keyword: 'pumpkin-soup',
    name: 'Тыквенный суп',
    price: 275,
    category: 'soup',
    count: '330 г',
    image: 'images/pumpkin-soup.jpg',
    kind: 'veg'
  },
  {
    keyword: 'ramen',
    name: 'Рамен',
    price: 375,
    category: 'soup',
    count: '420 г',
    image: 'images/ramen.jpg',
    kind: 'meat'
  },
  {
    keyword: 'tom-yum',
    name: 'Том ям с креветками',
    price: 650,
    category: 'soup',
    count: '500 г',
    image: 'images/tom-yum.jpg',
    kind: 'fish'
  },
  {
    keyword: 'chicken-soup',
    name: 'Куриный суп',
    price: 330,
    category: 'soup',
    count: '350 г',
    image: 'images/chicken-soup.jpg',
    kind: 'meat'
  },
  {
    keyword: 'korean-salad',
    name: 'Корейский салат с овощами и яйцом',
    price: 330,
    category: 'salad',
    count: '250 г',
    image: 'images/korean-salad.jpg',
    kind: 'veg'
  },
  {
    keyword: 'caesar-chicken',
    name: 'Цезарь с цыпленком',
    price: 370,
    category: 'salad',
    count: '220 г',
    image: 'images/caesar-chicken.jpg',
    kind: 'meat'
  },
  {
    keyword: 'caprese',
    name: 'Капрезе с моцареллой',
    price: 350,
    category: 'salad',
    count: '235 г',
    image: 'images/caprese.jpg',
    kind: 'veg'
  },
  {
    keyword: 'tuna-salad',
    name: 'Салат с тунцом',
    price: 480,
    category: 'salad',
    count: '250 г',
    image: 'images/tuna-salad.jpg',
    kind: 'fish'
  },
  {
    keyword: 'fries-caesar',
    name: 'Картофель фри с соусом Цезарь',
    price: 280,
    category: 'salad',
    count: '235 г',
    image: 'images/fries-caesar.jpg',
    kind: 'veg'
  },
  {
    keyword: 'fries-ketchup',
    name: 'Картофель фри с кетчупом',
    price: 260,
    category: 'salad',
    count: '235 г',
    image: 'images/fries-ketchup.jpg',
    kind: 'veg'
  },
  {
    keyword: 'orange-juice',
    name: 'Апельсиновый сок',
    price: 120,
    category: 'drink',
    count: '300 мл',
    image: 'images/orange-juice.jpg',
    kind: 'cold'
  },
  {
    keyword: 'apple-juice',
    name: 'Яблочный сок',
    price: 90,
    category: 'drink',
    count: '300 мл',
    image: 'images/apple-juice.jpg',
    kind: 'cold'
  },
  {
    keyword: 'carrot-juice',
    name: 'Морковный сок',
    price: 110,
    category: 'drink',
    count: '300 мл',
    image: 'images/carrot-juice.jpg',
    kind: 'cold'
  },
  {
    keyword: 'cappuccino',
    name: 'Капучино',
    price: 180,
    category: 'drink',
    count: '300 мл',
    image: 'images/cappuccino.jpg',
    kind: 'hot'
  },
  {
    keyword: 'green-tea',
    name: 'Зеленый чай',
    price: 100,
    category: 'drink',
    count: '300 мл',
    image: 'images/green-tea.jpg',
    kind: 'hot'
  },
  {
    keyword: 'black-tea',
    name: 'Черный чай',
    price: 90,
    category: 'drink',
    count: '300 мл',
    image: 'images/black-tea.jpg',
    kind: 'hot'
  },
  {
    keyword: 'baklava',
    name: 'Пахлава',
    price: 220,
    category: 'dessert',
    count: '300 г',
    image: 'images/baklava.jpg',
    kind: 'medium'
  },
  {
    keyword: 'cheesecake',
    name: 'Чизкейк',
    price: 240,
    category: 'dessert',
    count: '125 г',
    image: 'images/cheesecake.jpg',
    kind: 'small'
  },
  {
    keyword: 'chocolate-cheesecake',
    name: 'Шоколадный чизкейк',
    price: 260,
    category: 'dessert',
    count: '125 г',
    image: 'images/chocolate-cheesecake.jpg',
    kind: 'small'
  },
  {
    keyword: 'chocolate-cake',
    name: 'Шоколадный торт',
    price: 270,
    category: 'dessert',
    count: '140 г',
    image: 'images/chocolate-cake.jpg',
    kind: 'small'
  },
  {
    keyword: 'donuts-3',
    name: 'Пончики (3 штуки)',
    price: 410,
    category: 'dessert',
    count: '350 г',
    image: 'images/donuts-3.jpg',
    kind: 'medium'
  },
  {
    keyword: 'donuts-6',
    name: 'Пончики (6 штук)',
    price: 650,
    category: 'dessert',
    count: '700 г',
    image: 'images/donuts-6.jpg',
    kind: 'large'
  }
];
