'use strict';

let drink = 0;

// function shoot(arrow, headshot, fail) {
//    console.log('Вы сделали выстрел...');

//    setTimeout(function () {
//       Math.random() > 0.5 ? headshot({}) : fail('Вы промахнулись');
//    }, 3000);
// }

// function buyBeer() {
//    console.log('Вам купили пиво');
// }

// function giveMoney() {
//    console.log('Вам дали деньги');
// }

// function win() {
//    console.log('Вы победили!');
//    (drink == 1) ? buyBeer(): giveMoney();
// }

// function loose() {
//    console.log('Вы проиграли!');
// }

// shoot({},
//    function (mark) {
//       console.log('Вы попали в цель!');
//       win(mark, buyBeer, giveMoney);
//    },
//    function (miss) {
//       console.error(miss);
//       loose();
//    }
// );

// PROMISE

function shoot(arrow) {
   console.log('Вы сделали выстрел...');

   let promise = new Promise(function (resolve, reject) {
      setTimeout(function () {
         Math.random() > 0.5 ? resolve({}) : reject('Вы промахнулись');
      }, 3000);
   });
   return promise;
}


function buyBeer() {
   console.log('Вам купили пиво');
}

function giveMoney() {
   console.log('Вам дали деньги');
}

function win() {
   console.log('Вы победили!');
   (drink == 1) ? buyBeer(): giveMoney();
}

function loose() {
   console.log('Вы проиграли!');
}

shoot({})
   .then(mark => console.log('Вы попали в цель'))
   .then(win)
   .catch(loose);