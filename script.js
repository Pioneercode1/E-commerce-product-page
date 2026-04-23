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




