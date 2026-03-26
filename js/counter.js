
function initCounter() {
    const displayElement = document.getElementById('visit-count');
    const resetBtn = document.getElementById('reset-btn');

    // 1. Логика счетчика
    let visits = localStorage.getItem('visit_count') || 0;
    visits = parseInt(visits) + 1;
    localStorage.setItem('visit_count', visits);

    if (displayElement) {
        displayElement.innerText = visits;
    }

    // 2. Логика сброса
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            localStorage.removeItem('visit_count');
            if (displayElement) displayElement.innerText = '0';
            console.log("Лічильник скинуто");
        });
    }
}

// Запускаем, когда дерево DOM готово
document.addEventListener('DOMContentLoaded', initCounter);