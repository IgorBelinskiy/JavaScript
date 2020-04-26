'use strict';

let box = document.querySelector('.box'),
   btn = document.querySelector('button');


let width = box.clientWidth,
   height = box.clientHeight;

console.log(width);
console.log(height);
console.log(box.getBoundingClientRect().left);

console.log(document.documentElement.clientWidth); // Ширина документа
console.log(document.documentElement.clientHeight);

console.log(document.documentElement.scrollTop);


btn.addEventListener('click', function () {
   // box.style.height = box.scrollHeight + 'px';
   // console.log(height);
   // console.log(box.scrollTop);  //показываетс расстояние сверху которое мы прокрутили
   box.scrollTop = 0; // перемещаемся вверх страницы
});

// document.documentElement.scrollTop = 0;  // Прокручивает в начало документа

// scrollBy(x, y);   // перемещатся по документу относительно текущего положения

// scrollTo(x, y); // от начала