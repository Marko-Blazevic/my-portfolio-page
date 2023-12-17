const footer = document.querySelector('footer');
const footerYear = footer.querySelector('span');
const about = document.getElementById('about');
const header = document.querySelector('#header');

const date = new Date().getFullYear();
footerYear.textContent = date;

window.addEventListener('scroll', () => {
  let move = about.getBoundingClientRect();
  if (move.y < 53) {
    header.classList.remove('transition2s');
    header.classList.add('transition-fast');
    header.classList.add('move-header');
  }
  if (move.y > 53) {
    header.classList.remove('move-header');
  }
});
