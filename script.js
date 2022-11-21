const header = document.querySelector('.my-header');
const welcomeContainer = document.querySelector('.letter-container');
const welcomeLetters = gsap.utils.toArray('.letter');
const slideUp = gsap.utils.toArray('.slide-up');
const popUp = gsap.utils.toArray('.pop-up');
const moveLeft = gsap.utils.toArray('.move-left');
const imageWrapper = document.querySelector('.about-img-wrapper');
const body = document.querySelector('.main-content');

// body.addEventListener('scroll', console.log('it moves'));
// function toggleHeader() {
//   if (imageWrapper.offsetTop < 76) {
//     header.classList.add('un-fixed');
//   } else {
//     header.classList.remove('un-fixed');
//   }
// }

let tl = gsap.timeline();

gsap.registerPlugin(ScrollTrigger);

gsap.to('.my-header', { duration: 2, ease: 'bounce.out', y: 0, opacity: 1 });

welcomeLetters.forEach((elem) => {
  tl.to(elem, { duration: 0.8, x: 0, opacity: 1 }, '<0.2');
});
welcomeLetters.forEach((elem) => {
  tl.to(elem, { color: 'white', duration: 0.15 });
});
tl.to(
  '.welcome-background-img',
  { duration: 1, opacity: 1, ease: 'none' },
  '-=1.5'
);
setTimeout(() => {
  welcomeContainer.classList.add('letter-container-after');
  header.classList.add('header-black');
}, 2000);
tl.from(
  '.slide-down',
  {
    duration: 2,
    y: -200,
    opacity: 0,
  },
  '<1'
);
tl.to('.pulse', {
  duration: 2,
  opacity: 0.2,
  repeat: -1,
  yoyo: true,
});

gsap.from('.my-picture', {
  scrollTrigger: '.my-picture',
  x: -100,
  opacity: 0.2,
  duration: 2,
});
slideUp.forEach((elem) => {
  gsap.from(elem, {
    y: 80,
    opacity: 0,
    duration: 1,
    scrollTrigger: elem,
  });
});
gsap.from('.slide-right', {
  scrollTrigger: '.slide-right',
  x: -80,
  opacity: 0,
  duration: 1,
});
popUp.forEach((elem) => {
  gsap.from(elem, {
    scrollTrigger: elem,
    duration: 3,
    scale: 0,
    opacity: 0.2,
    ease: 'elastic.out(1, 1)',
  });
});

// const nameLetters = document.querySelectorAll('.name-letter');

// nameLetters.forEach((elem) => {
//   gsap
//     .timeline({
//       scrollTrigger: {
//         trigger: '#about',
//         scrub: 0.2,
//         start: 'top top',
//         end: '+=10000',
//       },
//     })
//     .to(
//       elem,
//       {
//         // trigger: '#about',
//         rotation: 360 * 5,
//         x: -100,
//         opacity: 0,
//         duration: 1,
//         ease: 'none',
//       },
//       '-=.8'
//     );
// });
// moveLeft.forEach((elem) => {
//   tl.to(
//     elem,
//     {
//       scrollTrigger: '#about',
//       duration: 2,
//       x: -200,
//     },
//     '-=1'
//   );
// });
