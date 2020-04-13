'use strict';
var money, time;

function start() {
   money = +prompt("Ваш бюджет на месяц?", "");
   time = prompt("Введите дату в формате YYYY-MM-DD", "");

   while (isNaN(money) || money == '' || money == null) {
      money = +prompt("Ваш бюджет на месяц?", "");
   }
}
start();

var appData = {
   allMoney: money,
   timeData: time,
   expenses: {},
   income: [],
   savings: true,
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

function chooseExpenses() {
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
}
chooseExpenses();
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

function detectDayBudget() {
   appData.moneyPerDay = (appData.allMoney / 30).toFixed();
   alert("Ежедневный бюджет: " + appData.moneyPerDay);
   console.log("Ежедневный бюджет: " + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
   if (appData.moneyPerDay < 100) {
      console.log("Минимальный уровень достатка");
   } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log("Средний уровень достатка");
   } else if (appData.moneyPerDay > 2000) {
      console.log("Высокий уровень достатка");
   } else {
      console.log("Произошла ошибка");
   }
}
detectLevel();


console.log(appData);

function checkSavings() {
   if (appData.savings == true) {
      let save = +prompt("Сколько денег на депозите?", ""),
         persent = +prompt("Под какой профент?", "");

      appData.monthIncome = save / 100 / 12 * persent;
      alert("Доход в месяц с вашего депозита: " + appData.monthIncome);

   }
}
checkSavings();

function chooseOptExpenses() {
   for (let i = 0; i < 3; i++) {
      let c = prompt("Статья необязательных расходов?", "");
      //let d = prompt("Сумма", "");

      appData.optionalExpenses[i] = c;
      console.log(appData.optionalExpenses);
   }
}

chooseOptExpenses();