// open and close
const navbar = document.querySelector('#navbar');
const mobileToggle = document.querySelector('.top-nav__mobile-toggle');
const navLinks = document.querySelectorAll('.top-nav__link');
const body = document.querySelector('body');

mobileToggle.addEventListener('click', () => {
  navbar.classList.toggle('open');
  body.classList.toggle('freeze');
});

// close mobile menu after clicking link
for (let navLink of navLinks) {
  navLink.addEventListener('click', () => {
    if (navbar.classList.contains('open')) {
      if (!navLink.classList.contains('capabilities')) {
        navbar.classList.toggle('open');
      }
    }
  });
}

let prevScrollPos = window.pageYOffset;
window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;
  if (currentScrollPos < 0) {
    // mobile overscroll
    return;
  }
  if (currentScrollPos === 0) {
    // top
    navbar.classList.remove('white');
  } else if (prevScrollPos > currentScrollPos && currentScrollPos > 0) {
    // scroll up
    navbar.classList.remove('hide');
    navbar.classList.add('white');
  } else if (prevScrollPos < currentScrollPos) {
    // scroll down
    if (!navbar.classList.contains('open')) {
      navbar.classList.add('hide');
    }
  }
  prevScrollPos = currentScrollPos;
};

// dropdown menu
const about = navLinks[0];
const dropdown = document.querySelector('.dropdown-menu');
const chevron = document.querySelector('.chevron');
const capabilities = document.querySelector('.capabilities');

about.addEventListener('mouseenter', () => {
  if (!navbar.classList.contains('open')) {
    navbar.classList.add('white');
    dropdown.style.opacity = '1';
  }
});
chevron.addEventListener('mouseenter', () => {
  if (!navbar.classList.contains('open')) {
    navbar.classList.add('white');
    dropdown.style.opacity = '1';
  }
});
dropdown.addEventListener('mouseleave', () => {
  if (!navbar.classList.contains('open')) {
    dropdown.style.opacity = '0';
    if (window.pageYOffset === 0) {
      navbar.classList.remove('white');
    }
  }
});
capabilities.addEventListener('click', () => {
  document.querySelector('.sub-menu').classList.toggle('open');
});
chevron.addEventListener('click', () => {
  if (navbar.classList.contains('open')) {
    document.querySelector('.sub-menu').classList.toggle('open');
  }
});
