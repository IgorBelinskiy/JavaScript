var money = prompt("Ваш бюджет на месяц?", "");
var date = prompt("Введите дату в формате YYYY-MM-DD", "");

var appData = {
   allMoney: money,
   timeData: date,
   expenses: {},
   income : [],
   savings: false,
   optionalExpenses: {}


};

var qwe = prompt("Введите обязательную статью расходов в этом месяце", "");
var rty = prompt("Во сколько обойдется?", "");

var qw1 = prompt("Введите обязательную статью расходов в этом месяце", "");
var rt1 = prompt("Во сколько обойдется?", "");

appData.expenses[qwe] = rty;
appData.expenses[qw1] = rt1;

alert(appData.allMoney / 30);