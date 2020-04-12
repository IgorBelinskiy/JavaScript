'use strict';

var money = +prompt("Ваш бюджет на месяц?", "");
var time = prompt("Введите дату в формате YYYY-MM-DD", "");

var appData = {
   allMoney: money,
   timeData: time,
   expenses: {},
   income: [],
   savings: false,
   optionalExpenses: {}
};

//var qw1 = prompt("Введите обязательную статью расходов в этом месяце", "");
//var rt1 = prompt("Во сколько обойдется?", "");

// for (let i = 0; i < 2; i++) {
   // let a = prompt("Введите обязательную статью расходов в этом месяце", "");
   // let b = prompt("Во сколько обойдется?", "");
// 
   // if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (a)) != null &&
      // a != '' && b != '' && a.length < 50) {
      // console.log('Done');
      // appData.expenses[a] = b;
   // } else {
      // console.log('Еще раз!');
      // i--;
   // }
// }

let i = 0;
while (i < 2) {
   let a = prompt("Введите обязательную статью расходов в этом месяце", "");
   let b = prompt("Во сколько обойдется?", "");

   if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (a)) != null &&
   a != '' && b != '' && a.length < 50) {
      console.log('Done');
      appData.expenses[a] = b;
   } else {
      console.log('Еще раз!');
      i--;
   }
   i++;
}

// let i = 0;
// do {
   // let a = prompt("Введите обязательную статью расходов в этом месяце", "");
   // let b = prompt("Во сколько обойдется?", "");
// 
   // if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (a)) != null &&
   // a != '' && b != '' && a.length < 50) {
      // console.log('Done');
      // appData.expenses[a] = b;
   // } else {
      // console.log('Еще раз!');
      // i--;
   // }
   // i++;
// }
// while (i < 2);


appData.moneyPerDay = appData.allMoney / 30;
alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
   console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
   console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
   console.log("Высокий уровень достатка");
} else {
   console.log("Произошла ошибка");
}

console.log(appData);