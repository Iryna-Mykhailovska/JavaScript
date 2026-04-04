'use strict';
// Напиши всі можливі варіанти створення функцій.
function startFunction() {
    alert("Функція запущена!");
    // Тут можна додати код, який буде виконуватися при натисканні кнопки
}
// let btnStartFunction = document.getElementById("btn_start");
// btnStartFunction.addEventListener("click", startFunction);
// ================================================================
// Створи функцію, яка буде виводити кількість переданих їй аргументів.
let countArguments = function() {
    console.log(`Кількість переданих аргументів: ${arguments.length}`);
};
countArguments(1, "hello", true, null);
// ================================================
/*Напиши функцію, яка приймає 2 числа і повертає :
-1, якщо перше число менше, ніж друге; 
1 - якщо перше число більше, ніж друге; 
0 - якщо числа рівні.*/
function compareNumbers(num1, num2) {
    if (num1 < num2) {
        return -1;
    } else if (num1 > num2) {
        return 1;
    } else {
        return 0;
    }
}
console.log(compareNumbers(5, 10)); // -1
console.log(compareNumbers(10, 5)); // 1        
console.log(compareNumbers(7, 7)); // 0
// ===============================================
// Напиши функцію, яка обчислює факторіал переданого їй числа.
function factorial(n) {
    if (n < 0) {
        return "Факторіал не визначений для від'ємних чисел.";  
    } else if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(-1)); // "Факторіал не визначений для від'ємних чисел."
// =============================================
// Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. 
// Наприклад: цифри 1, 4, 9 перетворяться в число 149.
// function combineDigits(digit1, digit2, digit3) {
//     return (digit1 * 100) + (digit2 * 10) + digit3;
// }   
// console.log(combineDigits(1, 4, 9)); // 149

let digits = () => {
    let digit1 =document.getElementById("digit1");
// console.log('digit1: ' + digit1.value);
let digit2 =document.getElementById("digit2");
// console.log('digit2: ' + digit2.value);
let digit3 =document.getElementById("digit3");
// console.log('digit3: ' + digit3.value);
    let numb = (digit1.value * 100) + (digit2.value * 10) + +digit3.value;
    console.log(numb); 
    alert('Об\'єднане число: ' + numb);
}
let btnStart= document.getElementById("btn_digits");
btnStart.addEventListener("click", digits);

// ============================================
// Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу.
//  Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.
let calculateArea = (length, width) => {
    if (width === undefined) {
        return length * length; // Площа квадрата
    } else {
        return length * width; // Площа прямокутника
    }           
};
console.log(calculateArea(5)); 
console.log(calculateArea(5, 10));


// ==========================================
// Норма

// Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. 
// Досконале число - це число, яке дорівнює сумі всіх своїх дільників.

let isPerfectNumber = (num) => {
    if (num <= 1) {
        return false; // Досконалі числа починаються з 6
    }
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
   
    return sum === num;
};
console.log(`isPerfectNumber(6): ${isPerfectNumber(6)===true ? "досконале" : "не досконале"}`); // true
console.log(`isPerfectNumber(28): ${isPerfectNumber(28)===true ? "досконале" : "не досконале"}`); // true
console.log(`isPerfectNumber(12): ${isPerfectNumber(12)===true ? "досконале" : "не досконале"}`); // false
console.log(`isPerfectNumber(496): ${isPerfectNumber(496)===true ? "досконале" : "не досконале"}`); // true
// ==============================================
// Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, 
// і виводить тільки ті числа з діапазону, які є досконалими. Використовуй 
// написану раніше функцію, щоб дізнатися, чи є це число досконалим.
let findPerfectNumbersInRange = (min, max) => {
    let perfectNumbers = [];    
    for (let i = min; i <= max; i++) {
        if (isPerfectNumber(i)) {
            perfectNumbers.push(i);
        }   
    }
    return perfectNumbers;
};
console.log(findPerfectNumbersInRange(1, 1000)); // [6, 28, 496]        
