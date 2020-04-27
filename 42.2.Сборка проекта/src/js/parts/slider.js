function slider() {
   let slideIndex = 1, // Слайдер в текущий момент
      slides = document.querySelectorAll('.slider-item'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),
      dotsWrap = document.querySelector('.slider-dots'),
      dots = document.querySelectorAll('.dot');


   showSlides(slideIndex);

   function showSlides(n) {

      if (n > slides.length) {
         slideIndex = 1; //Если слайды закончились, возвращаемся к первому
      }
      if (n < 1) {
         slideIndex = slides.length; //Возвращаемся к последнему слайдеру
      }
      slides.forEach((item) => item.style.display = 'none');
      // for (let i = 0; i < slides.length; i++) {    //аналогично примеру выше
      //    slides[i].style.display = 'none';
      // }

      dots.forEach((item) => item.classList.remove('dot-active'));

      slides[slideIndex - 1].style.display = 'block';
      dots[slideIndex - 1].classList.add('dot-active');
   }

   function plusSlides(n) {
      showSlides(slideIndex += n);
   }

   function currentSlide(n) { //связать точку со слайдом
      showSlides(slideIndex = n);
   }

   prev.addEventListener('click', function () {
      plusSlides(-1);
   });

   next.addEventListener('click', function () {
      plusSlides(1);
   });

   dotsWrap.addEventListener('click', function (event) {
      for (let i = 0; i < dots.length + 1; i++) {
         if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
            currentSlide(i);
         }
      }
   });
}

module.exports = slider;