'use strict';
/* Додати поле вводу,якщо змінюється вводиме значення, 
то виводити одразу в параграф те, що вводиться, а без повтору попереднього
 та кнопку , чкщо буде очищати поле вводу, та поле виводу
   */

const inputText = document.getElementById('text-input');
const outputParagraph = document.getElementById('output');  
function addSymbol(name) {
    let textInInput = name.value;
    console.log(textInInput);
    outputParagraph.textContent = textInInput;
}
inputText.addEventListener('input', function() {
    addSymbol(inputText);
});

const clearBtn = document.getElementById('clear-btn');      
clearBtn.addEventListener('click', function() {
    inputText.value = '';
    outputParagraph.textContent = '';
}); 

