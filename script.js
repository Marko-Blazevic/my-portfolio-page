const header = document.querySelector('.my-header');
const welcomeContainer = document.querySelector('.letter-container');

gsap.to('.my-header', { duration: 2, ease: 'bounce.out', y: 0, opacity: 1 });

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
  header.classList.add('header-black');
}, 2000);

setTimeout(() => {
  welcomeContainer.classList.add('letter-container-after');
  header.classList.add('header-black');
}, 3000);

gsap.registerPlugin(ScrollTrigger);

gsap.from('.my-picture', {
  scrollTrigger: '.my-picture',
  x: -100,
  opacity: 0.2,
  duration: 2,
});

gsap.from('.about-paragraph', {
  scrollTrigger: '.about-paragraph',
  y: 100,
  opacity: 0.2,
  duration: 2,
});

// gsap.from('.contact-text', {
//   scrollTrigger: '.contact-container',
//   duration: 1.5,
//   scale: 0.2,
// });

gsap.from('.pop-up', {
  scrollTrigger: '.pop-up',
  duration: 2.5,
  scale: 0,
  opacity: 0.2,
  ease: Bounce.easeOut,
});

// gsap.fromTo(
//   '#cursor',
//   { autoAlpha: 0, x: -20 },
//   { autoAlpha: 1, duration: 0.5, repeat: -1, ease: SteppedEase.config(1) }
// );

// let tween = gsap.to('.typewriter', {
//   text: {
//     value:
//       'this is a custom text written to show my easy approaches to make the typewriting easy!',
//   },
//   duration: 5,
//   delay: 1,
//   ease: 'none',
// });
