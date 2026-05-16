'use strict';
// В HTML-сторінці додати користувачу можливість створювати свій дашборд годинників. Це годинники для різних куточків світу. Необхідно додати input-поле та button, у разі кліка на якому буде створюватися новий годинник. Реалізація WorldClock відбувається через class. Кожен екземпляр такого класу — новий годинник. У класі повинні бути такі компоненти:

// getCurrentDate
// getCurrentDateTime
// deleteClock
// 1 кнопка — показує користувачу час у текстовому варіанті
// 2 кнопка — показує користувачу поточну дату й час у текстовому варіанті

// 3 кнопка — видаляє годинник зі «стіни» годинників
class WorldClock {
    constructor(city) {
        this.city = city;
        this.clockElement = null;
        this.createClock();
    }   
   getCurrentDate() {
        const now = new Date();
        return now.toLocaleDateString('en-US', { timeZone: this.city });
    } 
    getCurrentDateTime() {
        const now = new Date();
        return now.toLocaleString('en-US', { timeZone: this.city });
    }
    createClock() {
        this.clockElement = document.createElement('div');
        this.clockElement.classList.add('clock');
        // прописати круглий годинник через CSS, а тут додати кнопки для показу часу, дати та видалення годинника
        
        this.clockElement.innerHTML = ``;
        const timeBtn = document.createElement('button');
        timeBtn.textContent = 'Показати час';
        timeBtn.addEventListener('click', () => {
            alert(`Час у ${this.city}: ${this.getCurrentDateTime()}`);
        });  
        const dateTimeBtn = document.createElement('button');
        dateTimeBtn.textContent = 'Показати дату та час';
        dateTimeBtn.addEventListener('click', () => {
            alert(`Дата та час у ${this.city}: ${this.getCurrentDateTime()}`);
        });
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Видалити годинник';    
        deleteBtn.addEventListener('click', () => {
            this.deleteClock();
        });
        this.clockElement.appendChild(timeBtn);
        this.clockElement.appendChild(dateTimeBtn);
        this.clockElement.appendChild(deleteBtn);
        document.getElementById('section__Output').appendChild(this.clockElement);
    }
    deleteClock() {
        if (this.clockElement) {
            this.clockElement.remove();
            this.clockElement = null;
        }   
    }
}
document.getElementById('addClockBtn').addEventListener('click', () => {
    const city = prompt('Введіть місто для годинника (наприклад, "America/New_York"):');    
    if (city) {
        new WorldClock(city);
    }
});
