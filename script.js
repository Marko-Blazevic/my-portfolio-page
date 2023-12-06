const header = document.querySelector('.my-header');
const welcomeContainer = document.querySelector('.letter-container');
const imageWrapper = document.querySelector('.about-img-wrapper');
const body = document.querySelector('.main-content');
const letterContainer = document.querySelector('.letter-container');

const welcomeLetters = gsap.utils.toArray('.letter');
const slideUp = gsap.utils.toArray('.slide-up');
const popUp = gsap.utils.toArray('.pop-up');
const moveLeft = gsap.utils.toArray('.move-left');

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
  duration: 1.5,
  opacity: 0.5,
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

// // Get the video element
// var video = document.getElementById('myVideo');

// // Set the current frame number
// var currentFrame = 0;

// // Set the number of frames per scroll
// var framesPerScroll = 10;

// // Add an event listener for the mouse wheel event
// document.addEventListener('wheel', function (event) {
//   // Check the scroll direction
//   if (event.deltaY < 0) {
//     // Scrolling up, go to the previous frame
//     currentFrame = Math.max(currentFrame - framesPerScroll, 0);
//   } else {
//     // Scrolling down, go to the next frame
//     currentFrame = Math.min(
//       currentFrame + framesPerScroll,
//       video.duration * video.frameRate
//     );
//   }
//   // Set the current time to the frame number
//   video.currentTime = currentFrame / video.frameRate;
// });

// Get the video element
var video = document.getElementById('myVideo');

// Set the current frame of the video
var frame = 0;

// Set the frame rate (frames per second)
var frameRate = 20;

// Set the duration of each frame (in seconds)
var frameDuration = (1 / frameRate) * 10;

// Set the total number of frames in the video
var totalFrames = video.duration * frameRate;

// Add an event listener for the mouse scroll event
document.addEventListener('wheel', function (event) {
  // Check the direction of the scroll
  if (event.deltaY > 0) {
    // Scrolling down - advance the frame
    frame++;
  } else {
    // Scrolling up - go back a frame
    frame--;
  }

  // Ensure that the frame is within the bounds of the video
  frame = Math.max(0, Math.min(totalFrames, frame));

  // Set the current time of the video to the corresponding frame
  video.currentTime = frame * frameDuration;
});
