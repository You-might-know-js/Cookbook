import Nav from './components/nav.js'


var nav = document.querySelector('.nav-icon');


nav.addEventListener('click', function(){
  Nav.toggleMenu();
})
