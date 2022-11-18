const header = document.querySelector('.my-header');
const welcomeContainer = document.querySelector('.letter-container');
const welcomeLetters = gsap.utils.toArray('.letter');

let tl = gsap.timeline();

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

gsap.registerPlugin(ScrollTrigger);

gsap.from('.my-picture', {
  scrollTrigger: '.my-picture',
  x: -100,
  opacity: 0.2,
  duration: 2,
});

const paragraphs = gsap.utils.toArray('.slide-up-p');
paragraphs.forEach((para) => {
  gsap.from(para, {
    y: 100,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: para,
  });
});
gsap.from('.slide-right', {
  scrollTrigger: '.slide-right',
  x: -100,
  opacity: 0,
  duration: 1.5,
});

gsap.from('.pop-up', {
  scrollTrigger: '.pop-up',
  duration: 2,
  scale: 0,
  opacity: 0.2,
  ease: Bounce.easeOut,
});

tl.from('.pointer', {
  duration: 1,
  opacity: 0,
  repeat: -1,
  yoyo: true,
});
