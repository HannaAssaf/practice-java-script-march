/**
 * Створи картки з товарами на основі масиву products,
 * приклад картки https://prnt.sc/KmgDlzqOIA3M
 *
 * Реалізуй делегування подій на колекції карток
 * Після кліку на картку повинно з'являтись модальне вікно
 * з детальною інформацією про продукт,
 * приклад модального вікна https://prnt.sc/vWNoCeZcw7ii
 *
 * Для реалізації модального вікна використай
 * бібліотеку basicLightbox (https://github.com/electerious/basicLightbox)
 */

const products = [
  {
    id: 1,
    img: 'https://www.vodafone.ua/shop/media/wysiwyg/novosti/Capture_1_large.JPG',
    name: 'Monitor',
    price: 3000,
    description: '23-inch monitor with Full HD resolution.',
  },
  {
    id: 2,
    img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTzWqRMI3HQiDfICHAmbArmaP4uOOIjfz0sDITv0dfkpb0mbbgX',
    name: 'Laptop',
    price: 20000,
    description:
      'Lightweight and powerful laptop with a 15-inch display and SSD.',
  },
  {
    id: 3,
    img: 'https://cdn.27.ua/799/66/39/6841913_1.jpeg',
    name: 'Smartphone',
    price: 8000,
    description: 'Equipped with a triple camera and a multi-core processor.',
  },
  {
    id: 4,
    img: 'https://cdn.27.ua/799/b6/16/4371990_1.jpeg',
    name: 'Tablet',
    price: 12000,
    description: '10-inch tablet with high performance and a Retina display.',
  },
];
const loader = document.querySelector('.loader-wrapper');
setTimeout(() => {
  loader.classList.add('is-hidden');
}, 500);
// Render
const container = document.querySelector('.products');
container.insertAdjacentHTML('beforeend', createCardsMarkup(products));
// Delegation
container.addEventListener('click', handlerProductClick);

function createCardsMarkup(cards) {
  return cards
    .map(card => {
      return `<li class="item js-product-item" data-id="${card.id}">
            <img
              src="${card.img}"
              alt="${card.name}: ${card.description}"
            />
            <div>
             <h3>${card.name}</h3>
              <p>Price: ${card.price} uah</p>
            </div>
             
          </li>`;
    })
    .join('');
}

function handlerProductClick(event) {
  // перевірка щоб не зчитувало кліки просто з контейнера за медами картки
  if (event.target === event.currentTarget) {
    return;
  }
  // не важливо на яку глибину картки буде клік, через closest отримуємо той елемент по якому клікнули
  const currentProduct = event.target.closest('.js-product-item');
  console.log(' currentProduct:', currentProduct.dataset.id);

  // отримали посилання на li, забрали в неї id
  const id = Number(currentProduct.dataset.id);

  // шукає по цьому id в масиві нашу картку:
  const product = products.find(product => {
    return product.id === id;
  });
  console.log(product);

  const instance = basicLightbox.create(`
      <div class="modal">
        <img src="${product.img}" alt="${product.desc}" />
        <h3>${product.name}</h3>
        <h4>${product.price}</h4>
        <p>${product.description}</p>
      </div>`);

  // щоб модалка відкрилася
  instance.show();
}
