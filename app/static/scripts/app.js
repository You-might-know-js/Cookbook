import Nav from './components/nav';
import carousel from './components/carousel';

var nav = document.querySelector('.nav-icon');

nav.addEventListener('click', function(){
  Nav.toggleMenu();
})

// carousel.tabs.addEventListener('click', (e) => {
//   carousel.selectTab(e);
// })
//
// carousel.nextButton.addEventListener('click', (e) =>{
//   carousel.switchButton(e);
// })
