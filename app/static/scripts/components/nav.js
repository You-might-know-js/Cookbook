class Nav{

  constructor(){
    this.navIcon = document.querySelector('.nav-icon');
    this.mobileNavContainer = document.querySelector('.mobile-nav-container');
    this.classNavIsOpen = 'mobile-nav-open';
    this.classUpdateNav = 'nav-mobile-is-open';
    this.navMobileIsOpen = false;
    this.toggleMenu = this.toggleMenu.bind(this);
  }



  openNav() {
      this.navIcon.classList.add('open');
      this.mobileNavContainer.classList.add(this.classNavIsOpen);
      document.body.classList.add(this.classUpdateNav);
  }



  closeNav(){
    this.navIcon.classList.remove('open');
    document.body.classList.remove(this.classUpdateNav);
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
    this.navMobileIsOpen? this.openNav() : this.closeNav()
    this.addEvents();
  }

}


module.exports = new Nav();
