const barsIcon = document.querySelector('.bars-icon');
const menu = document.querySelector('.menu');
const closeIcon = document.querySelector('.close-icon');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const imgHero = document.querySelector('.img-hero');
const minusBtn = document.getElementById('minus-btn');
const plusBtn = document.getElementById('plus-btn');
const countSpan = document.getElementById('count');
const addBtn = document.getElementById('add-to-cart-btn');
const cartCountSpan = document.getElementById('cart-count');
const showCart = document.querySelector('.icon-cart');
const basketContainer = document.querySelector('.basket-container');
const emptyCart = document.querySelector('.empty-cart');
const basketFilled = document.querySelector('.basket-filled');
const deleteBtn = document.getElementById('delete-btn');
const countCartSpan = document.getElementById('count-cart');
const totalPriceSpan = document.querySelector('.total-price');



barsIcon.addEventListener('click', () => {
  menu.classList.toggle('active');
});

closeIcon.addEventListener('click', () => {
  menu.classList.toggle('active');
});

nextBtn.addEventListener('click', () => {
  const currentSrc = imgHero.getAttribute('src');
  const currentNumber = parseInt(currentSrc.match(/image-product-(\d)\.jpg/)[1]);
  const nextNumber = currentNumber === 4 ? 1 : currentNumber + 1;
  imgHero.setAttribute('src', `./images/image-product-${nextNumber}.jpg`);
});

prevBtn.addEventListener("click", () => {
  const currentSrc = imgHero.getAttribute("src");
  const currentNumber = parseInt(currentSrc.match(/image-product-(\d)\.jpg/)[1]);
  const prevNumber = currentNumber === 1 ? 4 : currentNumber - 1;
  imgHero.setAttribute("src", `./images/image-product-${prevNumber}.jpg`);
});

let count = 0;

plusBtn.addEventListener('click', () => {
  count++;
  countSpan.textContent = count;
});

minusBtn.addEventListener('click', () => {
  if (count > 0) {
    count--;
    countSpan.textContent = count;
  }
});

addBtn.addEventListener('click', () => {
  if (count > 0) {
    cartCountSpan.textContent = count;
    cartCountSpan.style.display = 'block';
  } else {
    cartCountSpan.style.display = 'none';
  }
});

showCart.addEventListener('click', () => {
  basketContainer.style.display = basketContainer.style.display === 'block' ? 'none' : 'block';
  if (count > 0) {
    emptyCart.style.display = 'none';
    basketFilled.style.display = 'block';
    countCartSpan.textContent = count;
    const totalPrice = count * 125;
    totalPriceSpan.textContent = `$${totalPrice.toFixed(2)}`;
    
  } else {
    emptyCart.style.display = 'block';
    basketFilled.style.display = 'none';
  }
});

deleteBtn.addEventListener('click', () => {
  count = 0;
  countSpan.textContent = count;
  cartCountSpan.style.display = 'none';
  emptyCart.style.display = 'block';
  basketFilled.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (!basketContainer.contains(event.target) && !showCart.contains(event.target)) {
    basketContainer.style.display = 'none';
  }

});





