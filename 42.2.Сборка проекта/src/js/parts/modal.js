function modal() {
   let more = document.querySelector('.more'),
      moreE = document.querySelector('.description-btn'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close');

   more.addEventListener('click', function () {
      overlay.style.display = 'block';
      this.classList.add('more-splash');
      document.body.style.overflow = 'hidden'; //Запрещает прокручивать странице
   });

   close.addEventListener('click', function () {
      overlay.style.display = 'none';
      more.classList.remove('more-splash');
      document.body.style.overflow = '';
   });

   moreE.addEventListener('click', function () {
      overlay.style.display = 'block';
      this.classList.add('more-splash');
      document.body.style.overflow = 'hidden'; //Запрещает прокручивать странице
   });

   close.addEventListener('click', function () {
      overlay.style.display = 'none';
      moreE.classList.remove('more-splash');
      document.body.style.overflow = '';
   });
}

module.exports = modal;