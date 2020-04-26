// 'use strict';

// функция-конструктор

// es5
// function User(name, id) {
//    this.name = name;
//    this.id = id;
//    this.human = true;
//    this.hello = function () {
//       console.log('Hello ' + this.name);
//    };
// }

// User.prototype.exit = function (name) {
//    console.log('Пользователь ' + this.name + ' ушел!');
// };

// let ivan = new User('Ivan', 25),
//    alex = new User('Alex', 30);

// console.log(ivan);
// console.log(alex);

// ivan.exit();

//es6

// class User {
//    constructor(name, id) {
//       this.name = name;
//       this.id = id;
//       this.human = true;
//    }
//    hello() {
//       console.log(`Hello! ${this.name}`);
//    }
//    exit() {
//       console.log(`Пользователь ${this.name} ушел!`);
//    }
// }

// let ivan = new User('Ivan', 25),
//    alex = new User('Alex', 30);

// console.log(ivan);
// console.log(alex);

// ivan.exit();
// alex.exit();
// ivan.hello();

// function showThis(a, b) {
//    console.log(this);

//    function sum() {
//       console.log(this);
//       return a + b;
//    }
//    console.log(sum());
// }

// showThis(4, 5);
// showThis(5, 5);

// let obj = {
//    a: 15,
//    b: 20,
//    sum: function () {
//       console.log(this);

//       function shout() {
//          console.log(this);
//       }
//       shout();
//    }
// };

// obj.sum();

// let user = {
//    name: "John"
// };

// function sayName(surname) {
//    console.log(this);
//    console.log(this.name + surname);
// }

// console.log(sayName.call(user, ' Smith'));

// console.log(sayName.apply(user, [' Snow']));

// function count(number) {
//    return this * number;
// }

// let double = count.bind(2);
// console.log(double(3));
// console.log(double(33));

let btn = document.querySelector('.btn');

btn.addEventListener('click', function () {
   console.log(this);
   this.style.backgroundColor = 'grey';

   function showThis() {
      console.log(this);
   }
   showThis(this);
});


// 1) Просто вызов функции - window или undefind
// 2)Метод обьекта - this = обьетк
// 3) Конструктор (new) - this = новый созданый обьект
// 4) Указание конкретного контекста - call, apply, bind


let age = document.getElementById('age');

function showUser(surname, name) {
   alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
showUser.apply(age, ['Smith', 'John']);