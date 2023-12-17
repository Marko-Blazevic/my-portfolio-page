const myHeader = document.querySelector('.my-header');
const welcomeContainer = document.querySelector('.letter-container');
const imageWrapper = document.querySelector('.about-img-wrapper');
const body = document.querySelector('.main-content');
const letterContainer = document.querySelector('.letter-container');
const welcomeLetters = gsap.utils.toArray('.letter');
const slideUp = gsap.utils.toArray('.slide-up');
const popUp = gsap.utils.toArray('.pop-up');
const moveLeft = gsap.utils.toArray('.move-left');

let tl = gsap.timeline();
gsap.registerPlugin(ScrollTrigger);

gsap.set('.my-header', {
  y: 100,
  opacity: 0,
});
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
  myHeader.classList.add('transition2s');
  myHeader.classList.add('header-black');
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
  duration: 1.5,
  opacity: 0.5,
  repeat: -1,
  yoyo: true,
});
tl.to(
  '.move',
  {
    duration: 2,
    ease: 'none',
    repeat: -1,
    yoyo: true,
    y: 40,
  },
  '-=1.5'
);

gsap.from('.my-picture', {
  scrollTrigger: '.my-picture',
  x: -100,
  opacity: 0.2,
  duration: 2,
});

slideUp.forEach((elem) => {
  gsap.from(elem, {
    y: 70,
    opacity: 0,
    duration: 1.2,
    scrollTrigger: elem,
  });
});

gsap.from('.slide-right', {
  scrollTrigger: '.slide-right',
  x: -50,
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

gsap.to('.welcome-background-img', {
  yPercent: -20,
  scrollTrigger: {
    trigger: '#about',
    scrub: true,
  },
});

gsap.to('.welcome-wrapper', {
  yPercent: 10,
  scrollTrigger: {
    trigger: '#about',
    scrub: true,
  },
});
