class Carousel{
  constructor(){
    this.cellsContainer = document.querySelector('.cells-container');
    this.tabs = document.querySelector('.tabs');
    this.nextButton = document.getElementById('display-next');
    this.TabSelectedclass = 'selected';
    this.revertButtonClass = 'last';
    this.carouselCells = ['cell1', 'cell2', 'cell3', 'cell4'];
    this.currentCell = 'cell1';
    this.cellIndex = 0;
    this.selectTab = this.selectTab.bind(this);
    this.play = this.play.bind(this);
    this.switchButton = this.switchButton.bind(this);
  }

  calculateDistance(){
    const D = this.cellIndex * -100;
    const leftValue = D + '%';

    return leftValue
  }

  updateCarousel(val){
    this.cellsContainer.style.left = val;
  }

  updateTabs(){
    const previousSelectedTab = document.querySelector('.selected');
    previousSelectedTab.classList.remove('selected');

    const currentSelectedTab = document.querySelector(`[data-cell=${this.currentCell}]`)
    currentSelectedTab.classList.add('selected');
  }

  updateNextButton(){
    if (this.cellIndex != 0 && this.cellIndex != 3) return;

    if (this.cellIndex == 0){
      this.nextButton.classList.contains(this.revertButtonClass) ?
      this.nextButton.classList.remove(this.revertButtonClass): null

      return;
    }

//if the engine made to here it means that cellIndex = 3
    if (this.nextButton.classList.contains(this.revertButtonClass)){
      return;

    }else{
      this.nextButton.classList.add(this.revertButtonClass);
    }

  }

  selectTab(e){
    if (e.target.nodeName === 'LI' || e.target.nodeName == 'SPAN'){
      const selectedTab = e.target.getAttribute('data-cell');

      //stop auto animation here ...

      if (this.currentCell == selectedTab) return;

      this.currentCell = selectedTab;
      this.cellIndex = this.carouselCells.indexOf(this.currentCell);


      this.updateCarousel(this.calculateDistance());
      this.updateTabs();
      this.updateNextButton();

    }
  }

  nextCell(){

    this.cellIndex++;

    this.currentCell = this.carouselCells[this.cellIndex];
    this.updateCarousel(this.calculateDistance());
    this.updateNextButton();
    this.updateTabs();
  }

  previousCell(){
    this.cellIndex--;

    this.currentCell = this.carouselCells[this.cellIndex];
    this.updateCarousel(this.calculateDistance());
    this.updateNextButton();
    this.updateTabs();
  }

  switchButton(){
    this.cellIndex >= 0 && this.cellIndex <= 2?
    this.nextCell():
    this.previousCell();
  }

  play(){

    if (this.cellIndex == this.carouselCells.length - 1) {
      this.cellIndex = 0;
    }else{
      this.cellIndex++;
    }

    this.nextCell();
  }






}


module.exports = new Carousel();
