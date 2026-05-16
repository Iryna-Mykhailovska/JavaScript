'use strict';
/* Додати поле вводу,якщо змінюється вводиме значення, 
то виводити одразу в параграф те, що вводиться, а без повтору попереднього
 та кнопку , чкщо буде очищати поле вводу, та поле виводу
   */

// const inputText = document.getElementById('text-input');
// const outputParagraph = document.getElementById('output');  
// function addSymbol(name) {
//     let textInInput = name.value;
//     console.log(textInInput);
//     outputParagraph.textContent = textInInput;
// }
// inputText.addEventListener('input', function() {
//     addSymbol(inputText);
// });

// const clearBtn = document.getElementById('clear-btn');      
// clearBtn.addEventListener('click', function() {
//     inputText.value = '';
//     outputParagraph.textContent = '';
// }); 

const inptUserName = document.getElementById('user-name');
const blockInptInner = document.getElementById('input_inner');
const textForInput = document.querySelector('.input-text');
// const paragraphForInpt = document.createElement('p');
// blockInptInner.append(paragraphForInpt);
// const clearBtn = document.getElementById('clear-btn');      
// inptUserName.addEventListener('input', (e) => {
//     const inptValue = e.target.value;
//     const lastChar = inptValue[inptValue.length - 1];
    
//     paragraphForInpt.append(lastChar);
//     // inptUserName.append(paragraphForInpt);
// })
// додати параграф для виводу символів, які вводяться в інпут після поля вводу
// const paragraphForInpt = document.createElement('p');   

// inptUserName.append(paragraphForInpt);
// Створюємо параграф один раз поза обробником подій
const paragraphForInpt = document.createElement('p'); 
// Додаємо його в контейнер (наприклад, після інпуту або в спеціальний блок)
blockInptInner.append(paragraphForInpt);

inptUserName.addEventListener('input', (e) => {
    // Отримуємо поточне значення всього тексту в інпуті
    const inptValue = e.target.value;
    
    // Оновлюємо текст у параграфі
    // Якщо ви хочете бачити весь текст:
    paragraphForInpt.textContent = inptValue;
    
    // Або якщо ви хочете бачити лише останній введений символ:
    // const lastChar = inptValue[inptValue.length - 1] || '';
    // paragraphForInpt.textContent = lastChar;
});
clearBtn.addEventListener('click', function() {
    inptUserName.value = '';
    paragraphForInpt.textContent = '';
});
