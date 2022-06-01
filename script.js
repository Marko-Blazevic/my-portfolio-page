const header = document.querySelector('.my-header');
// const welcome = document.getElementById('welcome');
// const about = document.getElementById('about');
// const scrollEl = document.querySelector('.scroll');
const welcomeContainer = document.querySelector('.letter-container');
// const welcomeBackgroundImage = document.querySelector(
//   '.welcome-background-img'
// );

// welcomeContainer.children[6].addEventListener('animationend', () => {
//   for (i = 0; i < 7; i++) {
//     const letter = welcomeContainer.children[i];
//     letter.classList.add('little-popup');
//   }
//   setTimeout(() => {
//     welcomeContainer.classList.add('box-shadow');
//     welcomeContainer.classList.add('letter-container-after');
//     welcomeBackgroundImage.classList.add('img-opacity');
//     header.classList.add('header-black');
//   }, 100);
// });

// const rollElement = () => {
//   letter.classList.add('little-popup');
// };
// const elementToNormal = () => {
//   letter.classList.remove('little-popup');
// };

// const x = window.scrollY;
// aboutRect = about.getBoundingClientRect();
// // if (aboutRect.top < (7.5rem))

// window.addEventListener('scroll', () => {
//   header.classList.add('header-smaller');
//   welcomeContainer.style.transition = 'none';

//   scrollEl.style.opacity = Math.max(0, 1 - x / 100);
//   welcomeContainer.style.opacity = Math.max(0, 1 - x / 600);

//   if (x > 800) {
//     header.classList.add('header-hide');
//   } else {
//     header.classList.remove('header-hide');
//   }
// });

gsap.to('.letter-w', { duration: 1.5, x: '0', opacity: 1 });
gsap.to('.letter-e1', { duration: 1.5, x: '0', opacity: 1, delay: 0.2 });
gsap.to('.letter-l', { duration: 1.5, x: '0', opacity: 1, delay: 0.4 });
gsap.to('.letter-c', { duration: 1.5, x: '0', opacity: 1, delay: 0.6 });
gsap.to('.letter-o', { duration: 1.5, x: '0', opacity: 1, delay: 0.8 });
gsap.to('.letter-m', { duration: 1.5, x: '0', opacity: 1, delay: 1 });
gsap.to('.letter-e2', { duration: 1.5, x: '0', opacity: 1, delay: 1.2 });
gsap.to('.welcome-background-img', {
  duration: 2,
  opacity: 1,
  delay: 2,
  ease: 'none',
});
gsap.to('.letter-w', { color: 'white', delay: 2 });
gsap.to('.letter-e1', { color: 'white', delay: 2.2 });
gsap.to('.letter-l', { color: 'white', delay: 2.4 });
gsap.to('.letter-c', { color: 'white', delay: 2.6 });
gsap.to('.letter-o', { color: 'white', delay: 2.8 });
gsap.to('.letter-m', { color: 'white', delay: 3 });
gsap.to('.letter-e2', { color: 'white', delay: 3.2 });

setTimeout(() => {
  welcomeContainer.classList.add('letter-container-after');
  header.classList.add('header-black');
}, 3000);

gsap.to('.my-header', { duration: 2, ease: 'bounce.out', y: 0, opacity: 1 });
