'use strict';

// touchstart   // аналог клика
// touchmove    пользователь перемещает пальцем по экрану  
// touchend          палец перестает соприкасаться к экрану
// touchenter        палец заходит на элемент
// touchleave           палец покинул
// touchcansel          точка соприкоснования не регистрируется на старнице (внутри браузера)


window.addEventListener('DOMContentLoaded', function () {
   let box = document.querySelector('.box');
   // box.addEventListener('touchstart', function (event) {
   //    event.preventDefault();
   //    console.log('Black box: touchstart');
   //    console.log(event.target);
   //    console.log(event.touches[0].target); //регистрирует пальцы на экраен
   //    console.log(event.changedTouches); //
   //    console.log(event.targetTouches); //регистрирует пальцы на определенном обьекте
   // });
   // box.addEventListener('touchmove', function (event) {
   //    event.preventDefault();
   //    console.log('Black box: ' + event.touches[0].pageX);
   // });
   // box.addEventListener('touchend', function (event) {
   //    event.preventDefault();
   //    console.log('Black box: touchend');
   // });


   //регулярные выражения - удобно работать со строками

   // new RegExp('pattern', 'flags');

   // /pattern/flags

   // let ans = prompt('Введите ваше имя.', '');
   // let reg = /n/gi; //искать букву 'n'

   // console.log(ans.search(reg)); //метод search ищет только первое совпадение
   // console.log(ans.match(reg));
   // console.log(reg.test(ans));

   //флаги

   //i флаг регистра
   //g глобально
   //m многострочности


   // классы символов

   // \d    искать все цифры    \D не цефра
   // \w  искать все буквы       \M
   // \s искать пробелы          

   // let ans = prompt('Введите число.', '');
   // let reg = /\d/g; // искать глобально все цифры
   // console.log(ans.match(reg));

   let str = 'My name is/ R2D2';
   console.log(str.match(/\w\d\w\d\//i));



   // let pass = prompt('Введите пароль', '');
   // console.log(pass.replace(/./g, "*"));     
   // alert('34-56-34'.replace(/-/g, ":"));  //символы заменятся на *

});