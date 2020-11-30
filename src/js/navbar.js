// open and close
const navbar = document.querySelector('#navbar');
const mobileToggle = document.querySelector('.top-nav__mobile-toggle');
const navLinks = document.querySelectorAll('.top-nav__link');

mobileToggle.addEventListener('click', () => {
  navbar.classList.toggle('open');
});

// close mobile menu after clicking link
for (let navLink of navLinks) {
  navLink.addEventListener('click', () => {
    if (navbar.classList.contains('open')) {
      navbar.classList.toggle('open');
    }
  });
}

let prevScrollPos = window.pageYOffset;
window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;
  if (window.scrollY === 0) {
    document.getElementById('navbar').classList.remove('white');
    dropdown.style.opacity = '0';
  } else if (prevScrollPos > currentScrollPos) {
    document.getElementById('navbar').classList.remove('hide');
    document.getElementById('navbar').classList.add('white');
  } else {
    if (!navbar.classList.contains('open')) {
      document.getElementById('navbar').classList.add('hide');
      dropdown.style.opacity = '0';
    }
  }
  prevScrollPos = currentScrollPos;
};

// dropdown menu

const about = navLinks[0];
const dropdown = document.querySelector('.dropdown-menu');
const chevron = document.querySelector('.chevron');

about.addEventListener('mouseenter', () => {
  if (!navbar.classList.contains('open')) {
    document.getElementById('navbar').classList.add('white');
    dropdown.style.opacity = '1';
  }
});
chevron.addEventListener('mouseenter', () => {
  if (!navbar.classList.contains('open')) {
    document.getElementById('navbar').classList.add('white');
    dropdown.style.opacity = '1';
  }
});
dropdown.addEventListener('mouseleave', () => {
  if (!navbar.classList.contains('open')) {
    document.getElementById('navbar').classList.remove('white');
    dropdown.style.opacity = '0';
  }
});
