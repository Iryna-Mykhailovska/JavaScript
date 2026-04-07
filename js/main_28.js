'use strict';
// // =========objects=========
// const obj = {};
// const obj2 = new Object(); 


// const user = {
//     name: 'Rina',
//     age: 28,
//     city: 'Kharkiv',
//     isAdmin: true,
// };

// console.log(user.name); // Rina
// console.log(user['age']);
// user.city='Venice';
// console.log(user); 
// delete user.isAdmin;
// console.log(user); // {name: 'Rina', age: 28, city: 'Venice'}
// // const coffeeBreak=true;
// user['coffeeBreak']='yes';
// console.log(user);

// ===================================================
// Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, 
// обсяг паливного баку, середня витрата палива на 100 км., водії), 
// і наступні методи для роботи з цим об'єктом:
// Метод, який виводить на екран інформацію про автомобіль.
//      Додавання ім’я водія у список
//      Перевірка водія на наявність його ім’я у списку
// Підрахунок необхідного часу та кількості палива для подолання переданої відстані 
// з середньою швидкістю. Враховуй, 
// що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 
const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2020,
    averageSpeed: 120,//середня швидкість
    fuelTankCapacity: 60,
    fuelConsumption: 8,//середня витрата палива на 100 км
    drivers: [],
    setCarDriver(name) {
        this.drivers.push(name);
    },
    isDriver(name) {
        return this.drivers.includes(name);
    },
    calculateTrip(distance) {
        const timeWithoutBreaks = distance / this.averageSpeed;//годин без перерв
        const breaks = Math.floor(timeWithoutBreaks / 4); //перерва на 1 год. через кожні 4 год. дороги
        const totalTime = timeWithoutBreaks + breaks;//загальний час з урахуванням перерв
        const fuel = (distance / 100) * this.fuelConsumption;//кількість палива
        return { totalTime, fuel };
    }
};
console.log(car);
car.setCarDriver('Rina');
car.setCarDriver('Ivan');
console.log(car.drivers);
console.log(car.isDriver('Rina')); // true
console.log(car.isDriver('Petr')); // false
const tripInfo = car.calculateTrip(600);
console.log(`Час: ${tripInfo.totalTime.toFixed(2)} (год.), Паливо потрібно: ${tripInfo.fuel.toFixed(2)} (л.)`);
/* Створити об'єкт, що описує час (години, хвилини, секунди), 
і такі функції для роботи з цим об'єктом:
Для виведення часу на екран.
Зміни часу на передану кількість секунд.
Зміни часу на передану кількість хвилин.
Зміни часу на передану кількість годин.
Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, 
може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд, 
то повинно вийти «21:00:15», а не «20:59:75». Також потрібно передбачити можливість 
того що користувач може передати 150 секунд, або 75 хвилин. */
const time = {
    hours: 22,
    minutes: 46,
    seconds: 45,
    displayTime() {
        alert(`${this.hours.toString().padStart(2, '0')}:${this.minutes.toString().padStart(2, '0')}:${this.seconds.toString().padStart(2, '0')}`);
    },
    changeSeconds(sec) {
        const totalSeconds = this.hours * 3600 + this.minutes * 60 + this.seconds + sec;
        this.hours = Math.floor(totalSeconds / 3600) % 24;
        this.minutes = Math.floor((totalSeconds % 3600) / 60);
        this.seconds = totalSeconds % 60;
    },
    changeMinutes(min) {
        const totalMinutes = this.hours * 60 + this.minutes + min;
        this.hours = Math.floor(totalMinutes / 60) % 24;
        this.minutes = totalMinutes % 60;
    },
    changeHours(hr) {
        this.hours = (this.hours + hr) % 24;
    }   };
console.log(time);
time.displayTime();//22:46:45
time.changeSeconds(150);//22:49:15 (150=2m+30s)
time.displayTime();
time.changeSeconds(30);//22:49:45
time.displayTime();
time.changeMinutes(75);//00:04:45
time.displayTime();
time.changeHours(5);//05:04:45
time.displayTime();

