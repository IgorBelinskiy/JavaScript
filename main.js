'use strict';

let startBtn = document.getElementById("start"),
   budgetValue = document.getElementsByClassName('budget-value')[0],
   dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
   levelValue = document.getElementsByClassName('level-value')[0],
   expensesValue = document.getElementsByClassName('expenses-value')[0],
   optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
   incomeValue = document.getElementsByClassName('income-value')[0],
   monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
   yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],


   expensesItem = document.getElementsByClassName('expenses-item'),
   expensesBtn = document.getElementsByTagName('button')[0],
   optionalExpensesBtn = document.getElementsByTagName('button')[1],
   countBtn = document.getElementsByTagName('button')[2],
   optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
   incomeItem = document.querySelector('.choose-income'),
   checkSavings = document.querySelector('#savings'),
   sumValue = document.querySelector('.choose-sum'),
   percentValue = document.querySelector('.choose-percent'),
   yearValue = document.querySelector('.year-value'),
   monthValue = document.querySelector('.month-value'),
   dayValue = document.querySelector('.day-value');

   
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
   optionalExpenses: {},
   chooseExpenses: function () {
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
   },
   detectDayBudget: function () {
      appData.moneyPerDay = (appData.allMoney / 30).toFixed();
      alert("Ежедневный бюджет: " + appData.moneyPerDay);
      console.log("Ежедневный бюджет: " + appData.moneyPerDay);
   },
   detectLevel: function () {
      if (appData.moneyPerDay < 100) {
         console.log("Минимальный уровень достатка");
      } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
         console.log("Средний уровень достатка");
      } else if (appData.moneyPerDay > 2000) {
         console.log("Высокий уровень достатка");
      } else {
         console.log("Произошла ошибка");
      }
   },
   checkSavings: function () {
      if (appData.savings == true) {
         let save = +prompt("Сколько денег на депозите?", ""),
            persent = +prompt("Под какой профент?", "");

         appData.monthIncome = save / 100 / 12 * persent;
         alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
      }
   },
   chooseOptExpenses: function () {
      for (let i = 1; i < 4; i++) {
         let c = prompt("Статья необязательных расходов?", "");
         //let d = prompt("Сумма", "");

         appData.optionalExpenses[i] = c;
         console.log(appData.optionalExpenses);
      }
   },
   chooseIncome: function () {
      let items = prompt('Что принесет доп.доход? (Перечислите через запятую', '');
      while (typeof (items) != 'string' || (typeof (items)) == null || items == '') {
         items = prompt('Что принесет доп.доход? (Перечислите через запятую', '');
      }

      appData.income = items.split(', ');
      appData.income.push(prompt('Может что-то еще?', ''));
      appData.income.sort();
      // if (typeof (items) != 'string' || (typeof (items)) == null || items == '') { // Два варианта
      // console.log("ВВедите еще раз!");
      // items = prompt('Что принесет доп.доход? (Перечислите через запятую', '');
      // } else {
      // appData.income = items.split(', ');
      // appData.income.push(prompt('Может что-то еще?', ''));
      // appData.income.sort();
      // }
      appData.income.forEach(function (item, i) { // метод перебор массива 
         console.log((+i + 1) + ': ' + item);
      });
   }
};

for (let key in appData) { //Перебирание элементов обьекта
   console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
}

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


console.log(appData);