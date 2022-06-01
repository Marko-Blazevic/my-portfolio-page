const header = document.getElementsByClassName('my-header');
const welcome = document.getElementById('welcome');
const about = document.getElementById('about');
const scrollEl = document.querySelector('.scroll');
const welcomeContainer = document.querySelector('.letter-container');
const welcomeBackgroundImage = document.querySelector(
  '.welcome-background-img'
);

welcomeContainer.children[6].addEventListener('animationend', () => {
  for (i = 0; i < 7; i++) {
    const letter = welcomeContainer.children[i];
    letter.classList.add('little-popup');
  }
  setTimeout(() => {
    welcomeContainer.classList.add('box-shadow');
    welcomeContainer.classList.add('letter-container-after');
    welcomeBackgroundImage.classList.add('img-opacity');
    header.classList.add('header-black');
  }, 100);
});

const rollElement = () => {
  letter.classList.add('little-popup');
};
const elementToNormal = () => {
  letter.classList.remove('little-popup');
};

const x = window.scrollY;
aboutRect = about.getBoundingClientRect();
// if (aboutRect.top < (7.5rem))

window.addEventListener('scroll', () => {
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
