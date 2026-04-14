'use strict';
/*Створити сторінку, що показує нумерований список пісень:*/
const playList = [
{
 author: "LED ZEPPELIN",
 song:"STAIRWAY TO HEAVEN"
},
{
 author: "QUEEN",
 song:"BOHEMIAN RHAPSODY"
},
{
 author: "LYNYRD SKYNYRD",
 song:"FREE BIRD"
},
{
 author: "DEEP PURPLE",
 song:"SMOKE ON THE WATER"
},
{
 author: "JIMI HENDRIX",
 song:"ALL ALONG THE WATCHTOWER"
},
{
 author: "AC/DC",
 song:"BACK IN BLACK"
},
{
 author: "QUEEN",
 song:"WE WILL ROCK YOU"
},
{
 author: "METALLICA",
 song:"ENTER SANDMAN"
}
];
const blockOutput = document.getElementById('section__Output');
const ol = document.createElement('ol');
ol.classList.add('listSongs');
playList.forEach(item => {
    const li = document.createElement('li');    
    li.textContent = `${item.author} - ${item.song}`;
    ol.append(li);
});
blockOutput.append(ol);  
/* */
let shoppingList = [
    {
        name: 'bread',
        quantity: 2,
        purchased: false,
        price: 25.5,
    },
    {
        name: 'milk',
        quantity: 2,
        purchased: true,
        price: 43.90,
        // get total() {
        //     return this.quantity * this.price;
        // },
    },
    {
        name: 'eggs',
        quantity: 10,
        purchased: false,
        price: 8.5,
        // get total() {
        //     return this.quantity * this.price;
        // }
    },
    {
        name: 'chicken',
        quantity: 1,
        purchased: true,
        price: 201,
        // get total() {
        //     return this.quantity * this.price;
        // }
    },
];
const title = document.createElement('h2');
title.textContent = 'Список покупок';
title.classList.add('title');
blockOutput.append(title);
const listFoods = document.createElement('ul');
listFoods.classList.add('listFoods');
shoppingList.forEach(item => {
    const li = document.createElement('li');        
    li.textContent = `${item.name} - ${item.quantity} шт. * ${item.price} грн. = ${item.quantity * item.price} грн. - ${item.purchased ? 'куплено' : 'не куплено'}`;
    listFoods.append(li);
});
blockOutput.append(listFoods);


