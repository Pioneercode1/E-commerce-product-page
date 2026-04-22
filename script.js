const barsIcon = document.querySelector('.bars-icon');
const menu = document.querySelector('.menu');
const closeIcon = document.querySelector('.close-icon');

barsIcon.addEventListener('click', () => {
  menu.classList.toggle('active');
});

closeIcon.addEventListener('click', () => {
  menu.classList.toggle('active');
});
