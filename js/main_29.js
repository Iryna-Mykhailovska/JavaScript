'use strict';
// let arrNumbs=[1,56,5,12,5,2,3,4,5,6,7,8,9];
// arrNumbs[99]=150;
// console.log(arrNumbs);
// console.log(arrNumbs.length);

// let arrNumbs=[1,56,5,12,5,2,3,4,5,6,7,8,9];
// let newARR = [10, 11, 12];
// let aaa = arrNumbs.push(...newARR);

// console.log(arrNumbs);
// console.log(aaa);

/*Створи масив «Список покупок». 
Кожен елемент масиву є об'єктом, який містить назву продукту,
 кількість і куплений він чи ні, ціну за одиницю товару, сума. 
 Написати кілька функцій для роботи з таким масивом:
Виводити весь список на екран таким чином, щоб спочатку йшли 
продукти, що ще не придбані, а потім - ті, що вже придбали.
Покупка продукту. Функція приймає назву продукту і відзначає
 його як придбаний.*/
let shoppingList = [
    {
        name: 'bread',
        quantity: 2,
        purchased: false,
        price: 25.5,
        get total() {
            return this.quantity * this.price;
        },
    },
    {
        name: 'milk',
        quantity: 2,
        purchased: true,
        price: 43.90,
        get total() {
            return this.quantity * this.price;
        },
    },
    {
        name: 'eggs',
        quantity: 10,
        purchased: false,
        price: 8.5,
        get total() {
            return this.quantity * this.price;
        }
    },
    {
        name: 'chicken',
        quantity: 1,
        purchased: true,
        price: 201,
        get total() {
            return this.quantity * this.price;
        }
    },
];
// shoppingList[0].total;
// console.log(shoppingList[0].total);

// shoppingList.forEach(item => {
//     item.total = item.quantity * item.price;
// });
function displayShoppingList(list) {
    const notPurchased = list.filter(item => !item.purchased);//те, що не купили
    const purchased = list.filter(item => item.purchased);//те, що купили
    // const sortedList = [...notPurchased, ...purchased];
    console.log(notPurchased);
    console.log(purchased);
}
displayShoppingList(shoppingList);
function purchaseProduct(list, productName) {
    const product = list.find(item => item.name === productName);
    if (product) {
        product.purchased = true;
        console.log(`Продукт "${productName}" відзначено як придбаний.`);
    } else {
        console.log(`Продукт "${productName}" не знайдено в списку.`);
    }
}
purchaseProduct(shoppingList, 'eggs');
displayShoppingList(shoppingList);
purchaseProduct(shoppingList, 'meat');