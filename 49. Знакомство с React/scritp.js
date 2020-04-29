"use strict";

let obj = {
   number: 5,
   sayNumber: function () {
      say = () => {
         console.log(this);
      }
      say();
   }
}

obj.sayNumber();

//Методы map и filter

let names = ['Ivan', 'alexandr', 'Roman', 'oleg'];
let shortName = names.filter((name => {
   return name.length < 5;
}));
console.log(shortName);



let answer = ['IvAn', 'AlExanDR', 'RoMan', 'OLeg'];
answer = answer.map((item) => item.toLowerCase());
console.log(answer);
console.log(`Пользователь ${name}, ${age}: лет`);


function fetchData(data, count = 0) {
   console.log(`Данные ${data} в количестве ${count}`);
}
fetchData('something');

// рест-оператор ...

function max(...numbers) {  //превращает в массив
   console.log(numbers);
}
max(3, 5, 9);



const arr1 = [1, 2, 5],
   arr2 = [22, 53, 4];
const res = Math.max(...arr1, ...arr2);
console.log(res);



const avatar = 'photo';
const user = {
   name: 'default',
   pass: 'qwerty',
   rights: 'user'
};

const admin = {
   name: 'Ivan',
   pass: 'chelseafc'
};

// const ress = Object.assign(user, admin);
const ress = {...user, ...admin, avatar};
console.log(ress);
// const userName = user.name;




const x = 20, y = 10;
const coord = {x,y,
   calcSq() {
      console.log(this.x*this.y);
   }
   // x: x,
   // y: y,
   // calcSq: function() {
   //    console.log(this.x*this.y);
   // }
};

console.log(coord);
coord.calcSq();

//Деструктуризация
const user = {
   name: {
      first: 'Igor',
      second: 'John'
   },
   pass: 'qwerty',
   rights: 'user'
};
const {name: {first, second}, pass, rights} = user;
console.log(first, second);



function connect({
   host = 'localhost',
   port = 3000,
   user = 'default'}) {
      console.log(`host: ${host} port: ${port} user: ${user}`);
}

connect({
   port: 232
});

const numb = [[2,3], [3,4]];
const [[a,b], [c,d]] = numb;
console.log(a, b, c, d);

const country = {
   name: 'England',
   popuplation: 20000000,
   gender: {
      male: ['15%', '40%'],
      female: ['16%', '49%']
   }
};

const {gender: {male: [maleUnder18, maleAdult], female: [femaleUnder18, femaleAdult]}} = country;
console.log(maleUnder18, femaleAdult);