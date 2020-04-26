'use strict';

let name = 'Ivan',
   age = 30,
   mail = "ex@gmail.com";

// document.write('Пользователь ' + name + ', возраст ' + age + ' с почтой ' + mail);

document.write(`Пользователь ${name}, возраст ${age}, почта ${mail}`); // Интерполяция

// function makeArray() {
//    var items = [];

//    for (var i = 0; i < 10; i++) {
//       var item = function () {
//          console.log(i);
//       };
//       items.push(item);
//    }
//    return items;
// }

// var arr = makeArray();
// console.log(arr);
// arr[1]();
// arr[3]();
// arr[7]();

function makeArray() {
   var items = [];

   for (let i = 0; i < 10; i++) {
      var item = function () {
         console.log(i);
      };
      items.push(item);
   }
   return items;
}

var arr = makeArray();
console.log(arr);
arr[1]();
arr[3]();
arr[7]();

// Стрелочные функции

let fun = () => {
   console.log(this);
};

fun();

let obj = {
   number: 5,
   sayNumber: function () {
      let say = () => {
         console.log(this);
      };
      say();
   }
};

obj.sayNumber();

let btn = document.querySelector('button');

btn.addEventListener('click', function () {
   let show = () => {
      console.log(this);
   };
   show();
});

// function culcOrNumber(number, basis) {    // ES5   Параметры по умолчанию
//    basis = basis || 2;
//    console.log(number * basis);
// }

// culcOrNumber(2, 3);
// culcOrNumber(5);

function culcOrNumber(number, basis = 2) { // ES6     Параметры по умолчанию
   console.log(number * basis);
}

culcOrNumber(2, 3);
culcOrNumber(15);

class Rectangle {
   constructor(height, width = 20) {
      this.height = height;
      this.width = width;
   }
   calcArea() {
      return this.height * this.width;
   }
}

const square = new Rectangle(10, 10);

console.log(square.calcArea());


// Spread - операторы
let video = ['youtube', 'rutube', 'tik-tok'],
   blogs = ['facebook', 'twitter', 'vk'],
   internet = [...video, ...blogs, 'instagram', 'news'];

console.log(internet);

function log(a, b, c) {
   console.log(a);
   console.log(b);
   console.log(c);
   console.log(a + b + c);
}

let numb = [4, 7, 9];

console.log(...numb);
log(...numb);

