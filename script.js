let money = prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

let pointOfConsumption1 = prompt("Введите обязательную статью расходов в этом месяце"),
    price1 = prompt("Во сколько обойдется?"),
    pointOfConsumption2 = prompt("Введите обязательную статью расходов в этом месяце"),
    price2 = prompt("Во сколько обойдется?");    

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        pointOfConsumption1: price1,
        pointOfConsumption2: price2
    },
    optionalExpenses: {},
    income: [],
    saving: false
};

alert(money / 30);

console.log(appData);