'use strict';
/*Виконай додавання 0,1 і 0,2 добийся математично правильної 
відповіді.*/
let num1 = 0.1;
let num2 = 0.2;
console.log((num1 + num2).toFixed(1));
alert((num1 + num2).toFixed(1));
// ========================================
/*Виконай додавання рядка "1" і цифри 2(обидві операнди повинні 
бути в змінних), добийся математично правильної відповіді.*/
let str = "1";
let num = 2;
console.log(Number(str) + num);
alert(Number(str) + num);
// ========================================
/*Користувач вказує обсяг флешки в Гб. Програма повинна порахувати 
скільки файлів розміром в 820 Мб поміщається на флешку*/
let flashDriveGb = prompt("Вкажіть обсяг флешки в Гб:");
if (flashDriveGb) {
    let flashDriveMb = flashDriveGb * 1024;
    let fileSizeMb = 820;
    let numberOfFiles = Math.floor(flashDriveMb / fileSizeMb);
    console.log(`На флешку поміщається ${numberOfFiles} файлів розміром 820 Мб.`);
    alert(`На флешку поміщається ${numberOfFiles} файлів розміром 820 Мб.`);
} else console.log('Користувач не ввів обсяг флешки в Гб');
// ========================================
/*Користувач вводить суму грошей в гаманці і ціну однієї 
шоколадки. Програма виводить скільки шоколадок може купити 
користувач і скільки здачі у нього залишиться.*/
let money = prompt("Вкажіть суму грошей в гаманці:");
if (money) {
    let priceChololate = prompt("Вкажіть ціну однієї шоколадки:");
    let amountChocolates = Math.floor(money / priceChololate);
    let oddMoney = money % priceChololate;
    console.log(`Користувач може купити ${amountChocolates} шоколадок і у нього залишиться ${oddMoney} грошей.`);
    alert(`Користувач може купити ${amountChocolates} шоколадок і у нього залишиться ${oddMoney} грошей.`);
} else console.log('Користувач не ввів суму грошей в гаманці');


// ========================================
/*Запитай у користувача тризначне число і виведи його задом 
наперед. Для вирішення 
завдання тобі знадобиться оператор % (залишок від ділення).*/
let threeNumber = prompt("Введіть тризначне число:");
// let strThreeNumber = String(threeNumber);
// let reversedStr = strThreeNumber.split('').reverse().join('');
// reversedStr = Number(reversedStr);
// console.log(`Число задом наперед: ${reversedStr}`);
// alert(`Число задом наперед: ${reversedStr}`);
if (threeNumber) {
    let reversedNumber = 0;
    while (threeNumber > 0) {
        let digit = threeNumber % 10;
        reversedNumber = reversedNumber * 10 + digit;
        threeNumber = Math.floor(threeNumber / 10);
    }
    console.log(`Число задом наперед: ${reversedNumber}`);
    alert(`Число задом наперед: ${reversedNumber}`);
} else console.log('Користувач не ввів тризначне число');

// ========================================
/*Користувач вводить суму вкладу в банк на 2 місяці, з процентною
ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.*/



// ========================================
/* Що повернуть вирази:
 2 && 0 && 3

 2 || 0 || 3

2 && 0 || 3 */
