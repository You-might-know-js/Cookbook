const navIcon = document.querySelector('.nav-icon');
const mobileNav = document.querySelector('.mobile-nav-container');
const nav = document.querySelector('nav');


navIcon.addEventListener('click', () => {
  navIcon.classList.toggle('open');
  mobileNav.classList.toggle('mobile-nav-open');
  nav.classList.toggle('nav-mobile-is-open')
})
