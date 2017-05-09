class Nav{

  constructor(){
    this.navIcon = document.querySelector('.nav-icon');
    this.mobileNavContainer = document.querySelector('.mobile-nav-container');
    this.classNavIsOpen = 'mobile-nav-open';
    this.classUpdateNav = 'nav-mobile-is-open';
    this.navMobileIsOpen = false;
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  updateNavIcon(){
    this.navMobileIsOpen?
    this.navIcon.classList.add('open'):
    this.navIcon.classList.remove('open');
  }

  updateNavColors(){
    this.navMobileIsOpen?
    document.body.classList.add(this.classUpdateNav):
    document.body.classList.remove(this.classUpdateNav);
  }

  updateMobileMenu(){
    this.navMobileIsOpen?
    this.mobileNavContainer.classList.add(this.classNavIsOpen):
    this.mobileNavContainer.classList.remove(this.classNavIsOpen);
  }

  addEvents(){
    this.navMobileIsOpen?
    this.mobileNavContainer.addEventListener('click', this.toggleMenu):
    this.mobileNavContainer.removeEventListener('click', this.toggleMenu)
  }

  toggleMenu(){
    this.mobileNavContainer.style.willChange = 'opacity'
    this.navMobileIsOpen = !this.navMobileIsOpen
    this.updateNavIcon();
    this.updateNavColors();
    this.updateMobileMenu();
    this.addEvents();
  }

}


module.exports = new Nav();
