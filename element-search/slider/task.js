const sliderItems = Array.from(document.getElementsByClassName('slider__item'));
const arrows = Array.from(document.getElementsByClassName('slider__arrow'));
const sliderDots = Array.from(document.getElementsByClassName('slider__dot'));

arrows.forEach(item => item.onclick = slide);
sliderDots.forEach(item => item.onclick = slideByDots);

function changeSlide(index) {
  sliderItems.forEach(item => item.className = 'slider__item');
  sliderItems[index].className = 'slider__item slider__item_active';
  sliderDots.forEach(item => item.className = 'slider__dot');

}

function slide() {
  let activeSlideIndex = sliderItems.findIndex(item => item.className.includes('slider__item_active'));
  if (this.className.includes('arrow_prev')) {
    //левая стрелка
    if (activeSlideIndex === 0) {
      changeSlide(sliderItems.length - 1);
    } else {
      changeSlide(activeSlideIndex - 1);
    }
  } else {
    //правая стрелка
    if (activeSlideIndex === sliderItems.length - 1) {
      changeSlide(0);
    } else {
      changeSlide(activeSlideIndex + 1);
    }
  }
}

function slideByDots() {
  changeSlide(sliderDots.indexOf(this));
}