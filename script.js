const header = document.getElementById('my-header');
const welcomeBox = document.querySelector('.welcome-box');
const scrollEl = document.querySelector('.scroll');

window.addEventListener('scroll', () => {
  const x = window.scrollY;
  console.log(x);

  scrollEl.style.opacity = Math.max(0, 1 - x / 100);
  welcomeBox.style.opacity = Math.max(0, 1 - x / 400);

  if (x > 800) {
    header.style.transition = 'none';
    header.style.opacity = 0;
  } else {
    header.style.opacity = 1;
  }

  const contactBox = document.querySelector('.contact-container');
  if (x > 1600) {
    contactBox.style.transform = 'scale(1)';
  }
});
