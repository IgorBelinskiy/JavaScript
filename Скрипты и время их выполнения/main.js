'use strict';

// let timerId = setTimeout(() => { 
//    alert('Hello!!!!');
// }, 2000);

// let timer = setTimeout(sayHi, 2000);
// clearTimeout(timer);   // остановить выполнение

// let timer = setInterval(sayHi, 2000); //  будет повторяться каждые 2000мс
// clearTimeout(timer);

// function sayHi() {
//    console.log('Hi!!!!!!!!!!!!');
// }

// let timerId = setTimeout(function log() {   //рекурсия(функция внутри себя вызывает себя)
//    console.log('Hello!!');
//    setTimeout(log, 2000);
// });


let btn = document.querySelector('.btn'),
   elem = document.querySelector('.box');

function myAnimation() {
   let pos = 0;

   let id = setInterval(frame, 10);

   function frame() {
      if (pos == 300) {
         clearTimeout(id);
      } else {
         pos++;
         elem.style.top = pos + 'px';
         elem.style.left = pos + 'px';
      }
   }
}

btn.addEventListener('click', myAnimation);

let btnBlock = document.querySelector('.btn-block'),
   btns = document.getElementsByTagName('button');

btnBlock.addEventListener('click', function (event) {   // Делегирование ()
   // if (event.target && event.target.tagName == 'BUTTON') {
   //    console.log('Hello!!!!');
   // }
   // if (event.target && event.target.classList.contains('first')) {  //Проверка на класс
   //    console.log('Hello!!!!');
   // }
   if (event.target && event.target.matches('button.first')) {
      console.log('Hello!!!!');
   }
});

