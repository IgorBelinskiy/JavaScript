'use strict';

let menu = document.querySelector(".menu"),
   menuItem = document.querySelectorAll(".menu-item"),
   title = document.getElementById("title"),
   adv = document.querySelector(".adv"),
   promptAbout = document.querySelector("#prompt");



let menuLi = document.createElement('li');
menu.appendChild(menuLi);
menuLi.textContent = '5й элемент';
menuLi.classList.add('menu-item');

menu.insertBefore(menuItem[2], menuItem[1]); // Поменяли местами два элемента

document.body.style.backgroundImage = "url(img/apple_true.jpg)"; // замена фона

title.textContent = 'Мы продаем только подлинную технику Apple';

adv.remove(); // Удалить рекламу со страницы




let answer = prompt('Отношение к Apple?', '');
promptAbout.textContent = answer;