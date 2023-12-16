const footer = document.querySelector('footer');
const footerYear = footer.querySelector('span');

const date = new Date().getFullYear();
footerYear.textContent = date;
