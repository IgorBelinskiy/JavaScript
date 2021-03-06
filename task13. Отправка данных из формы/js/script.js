window.addEventListener('DOMContentLoaded', function () {


   'use strict';

   let tab = document.querySelectorAll('.info-header-tab'),
      info = document.querySelector('.info-header'),
      tabContent = document.querySelectorAll('.info-tabcontent');

   function hideTabContent(a) {
      for (let i = a; i < tabContent.length; i++) {
         tabContent[i].classList.remove('show');
         tabContent[i].classList.add('hide');
      }
   }

   hideTabContent(1); //скрываюся все tabContent, кроме 1го

   function showTabContent(b) {
      if (tabContent[b].classList.contains('hide')) {
         tabContent[b].classList.remove('hide');
         tabContent[b].classList.add('show');
      }
   }

   info.addEventListener('click', function (event) {
      let target = event.target;
      if (target && target.classList.contains('info-header-tab')) {
         for (let i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
               hideTabContent(0);
               showTabContent(i);
               break;
            }
         }
      }
   });

   // TIMER

   let deadline = '2020-04-21';

   function getTimeRemaning(endtime) { //вычисляет остаток времени и вычлениет значения
      let t = Date.parse(endtime) - Date.parse(new Date()),
         seconds = Math.floor((t / 1000) % 60),
         minutes = Math.floor((t / 1000 / 60) % 60),
         hours = Math.floor(t / (1000 * 60 * 60));
      // houers = Math.floor((t/1000/60/60) % 24),
      // days = Math.floor(t/(1000 * 60 *60 * 24));

      return {
         'total': t,
         'hours': hours,
         'minutes': minutes,
         'seconds': seconds,
      };
   }

   function setClock(id, endtime) {
      let timer = document.getElementById(id),
         hours = timer.querySelector('.hours'),
         minutes = timer.querySelector('.minutes'),
         seconds = timer.querySelector('.seconds'),
         timeInterval = setInterval(updateClock, 1000);

      function updateClock() {
         let t = getTimeRemaning(endtime);

         function addZero(num) { //если цыфра меньше 10и, добавить '0'
            if (num <= 9) {
               return '0' + num;
            } else {
               return num;
            }
         }

         hours.textContent = addZero(t.hours);
         minutes.textContent = addZero(t.minutes);
         seconds.textContent = addZero(t.seconds);
         // hours.textContent = t.hours;
         // minutes.textContent = t.minutes;
         // seconds.textContent = t.seconds;

         if (t.total <= 0) { // если закончился таймер
            clearInterval(timeInterval);
            hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';
         }
      }
   }

   setClock('timer', deadline);

   // Модальное окно

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

   // FORM

   let message = {
      loading: 'Загрузка',
      success: 'Спасибо! Скоро мы с вами свяжемся!',
      failur: 'Что-то пошло не так'
   };

   let form = document.querySelector('.main-form');
   let input = form.getElementsByTagName('input');
   let statusMessage = document.createElement('div');

   statusMessage.classList.add('status');

   form.addEventListener('submit', function (event) {
      event.preventDefault();
      form.appendChild(statusMessage);

      let request = new XMLHttpRequest();
      request.open('POST', 'server.php');
      // request.setRequestHeader('Content-type', 'application/x-www-urlencoded');
      request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

      let formData = new FormData(form); //Получаем все, что ответил пользователь в форме

      let obj = {};
      formData.forEach(function (value, key) { //заполнение obj значениями с formData
         obj[key] = value;
      });

      let json = JSON.stringify(obj);
      // request.send(formData);
      request.send(json);


      request.addEventListener('readystatechange', function () { //изменение параметров запроса
         if (request.readyState < 4) {
            statusMessage.innerHTML = message.loading;
         } else if (request.readyState === 4 && request.status == 200) {
            statusMessage.innerHTML = message.success;
         } else {
            statusMessage.innerHTML = message.failur;
         }
      });

      for (let i = 0; i < input.length; i++) {
         input[i].value = '';
      }
   });



});