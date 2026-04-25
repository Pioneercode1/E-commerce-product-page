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
const productImages = document.querySelectorAll('.product-image');
const galleryImg = document.querySelector('.gallery-img-hero');
const gallery = document.querySelector('.gallery');
const thumbnails = document.querySelectorAll('.gallery img');
/*gallery Section*/
const gallerySection = document.getElementById('gallery-section');
const closeButton = document.getElementById('close-button');
const galleryImageHero = document.getElementById('gallery-image-hero');
const galleryImages = document.querySelectorAll('.gallery-img-filled');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');


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

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    const newSrc = thumbnail.getAttribute('src').replace('-thumbnail', '');
    imgHero.setAttribute('src', newSrc);
  });
});

/*gallery Section*/

imgHero.addEventListener('click', () => {
  if (window.innerWidth >= 1440) {
    gallerySection.style.display = 'grid';
    galleryImageHero.querySelector('img').src = imgHero.getAttribute('src');
  }
});

closeButton.addEventListener('click', () => {
  gallerySection.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (gallerySection.style.display === 'grid' && !gallerySection.contains(event.target) && event.target !== imgHero) {
    gallerySection.style.display = 'none';
  }
});

galleryImages.forEach((img, index) => {
  img.addEventListener('click', () => {
    galleryImageHero.querySelector('img').src = `./images/image-product-${index + 1}.jpg`;
  });
});

prevButton.addEventListener('click', () => {
  const currentSrc = galleryImageHero.querySelector('img').src;
  const currentIndex = parseInt(currentSrc.match(/image-product-(\d)\.jpg/)[1]);
  const prevIndex = (currentIndex - 2 + galleryImages.length) % galleryImages.length + 1;
  galleryImageHero.querySelector('img').src = `./images/image-product-${prevIndex}.jpg`;
});

nextButton.addEventListener('click', () => {
  const currentSrc = galleryImageHero.querySelector('img').src;
  const currentIndex = parseInt(currentSrc.match(/image-product-(\d)\.jpg/)[1]);
  const nextIndex = currentIndex % galleryImages.length + 1;
  galleryImageHero.querySelector('img').src = `./images/image-product-${nextIndex}.jpg`;
});

