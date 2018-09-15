const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop;

function fixNav() {
  if (window.scrollY >= topOfNav) {
    document.body.classList.add('fixed-nav');

    // Once fixed, the nav no longer takes space on a document, so we need to add padding
    // offsetHeight = Height of the nav
    document.body.style.paddingTop = `${nav.offsetHeight}px`;
  } else {
    document.body.style.paddingTop = 0;

    document.body.classList.remove('fixed-nav');
  }
}

window.addEventListener('scroll', fixNav);
