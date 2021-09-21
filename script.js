const header = document.getElementById('my-header');
const welcome = document.getElementById('welcome');
const scrollEl = document.querySelector('.scroll');
const welcomeContainer = document.querySelector('.welcome-container');
const backgroundImage = document.querySelector('.background-img');

welcomeContainer.children[6].addEventListener('animationend', () => {
  for (i = 0; i < 7; i++) {
    const letter = welcomeContainer.children[i];
    letter.classList.add('little-popup');
  }
  setTimeout(() => {
    welcomeContainer.classList.add('box-shadow');
    welcomeContainer.classList.add('welcome-container-after');
    backgroundImage.classList.add('img-opacity');
    header.classList.add('header-black');
  }, 500);
});

window.addEventListener('scroll', () => {
  const x = window.scrollY;
  header.classList.add('header-smaller');
  welcomeContainer.style.transition = 'none';

  scrollEl.style.opacity = Math.max(0, 1 - x / 100);
  welcomeContainer.style.opacity = Math.max(0, 1 - x / 600);

  if (x > 800) {
    header.classList.add('header-hide');
  } else {
    header.classList.remove('header-hide');
  }
});
