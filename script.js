const welcomeStart = document.querySelector('.welcome-start');
const scrollEl = document.querySelector('.scroll');

window.addEventListener('scroll', () => {
  scrollEl.classList.toggle('scroll-on');
});
