'use strict';
function createEl(el) {
    return document.createElement(el);
}
function addClass(el, htmlClass) {
    const elem = createEl(el);
    elem.classList.add(htmlClass);
    return elem;
}
function addText(el, text) {
    const elem = createEl(el);
    elem.textContent = text;
    return elem;
}
console.log(addClass('ol', 'list'));
console.log(addText('p', 'Hello, World!'));


// Додавання поточного року до футера
// const textRight = document.getElementById('right');
// const addCurrentYear = (el) => el.append(new Date().getFullYear());
// addCurrentYear(textRight);

// 
// const input=document.getElementById('tag-name');
// const btn=document.getElementById('btn_add_el');
// const blockOutput = document.getElementById('blockNewEL');
// btn.addEventListener('click', () => {
//     const tagName = input.value; 
//     console.log(tagName);

//     // if (tagName) {
//     //     const newElement = createEl(tagName);
//     //     document.body.appendChild(newElement);
//     //     input.value = ''; 
//     // }       
// });
const inptTagName = document.getElementById('tag-name');
const btnCreateEl = document.getElementById('btn_add_el');
const blockNewEl = document.getElementById('blockNewEL');
// inptTagName.value='';
btnCreateEl.addEventListener('click', () => {
    if (inptTagName.value.trim()) {
        let newEl = document.createElement(inptTagName.value);
        newEl.textContent = 'Новий елемент!'
        blockNewEl.append(newEl);
    } else {
        alert(`Введить назву тегу в input!`)

    }
    inptTagName.value = '';
});
// ===================navigator
const langBrowser = navigator.language;
const systemComp = navigator.userAgentData.platform;
const allComp = navigator.userAgent;
// const positionUser = navigator.geolocation.getCurrentPosition();
console.log(langBrowser);
console.log(systemComp);
console.log(allComp);
// console.log(positionUser);
navigator.geolocation.getCurrentPosition(function (position) {
    console.log("Latitude:", position.coords.latitude);
    console.log("Longitude:", position.coords.longitude);
});
// ===================event
const btnAction = document.querySelectorAll('[data-purpose="action"]');
let btnSend;
btnAction.forEach(btn => { btn.textContent === 'Send' ? btnSend = btn : '' });
console.log(btnSend);
btnSend.classList.add('btn-send');

let chackDataEvent = (event) => {
    // console.log(`Event type: ${event.type}`);
    // console.log(`Event target: ${event.target}`);
    console.log(event);
}
// btnSend.onclick = chackDataEvent;
// btnSend.onmouseover = () => alert('Mouse over the button!');
btnSend.addEventListener('click', chackDataEvent);
btnSend.addEventListener('mouseover', () => alert('Mouse over the button!'));



// =================

const btnCurrency = document.querySelectorAll('[data-currency]');
const blockCurrency = document.getElementById('blockCurrency');
