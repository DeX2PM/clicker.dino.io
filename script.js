// script.js
const dinoImage = document.getElementById('dino');
const clickCountDisplay = document.getElementById('clickCount');

let clickCount = 0;

dinoImage.addEventListener('click', () => {
    clickCount++;
    clickCountDisplay.textContent = clickCount;
    clickCountDisplay.textContent = clickCount;

    if (clickCount >= 100) {
        dinoImage.src = 'dino2.jpg'; // Замените на другую картинку
    }

    if (clickCount >= 1000) {
        dinoImage.src = 'dino3.jgp'; // Замените на следующую картинку
    }

    // Продолжайте добавлять условия для других очков
    if (clickCount >= 10000) {
        dinoImage.src = 'dino4.jpg'; // Замените на следующую картинку
    }
    if (clickCount >= 100000) {
        dinoImage.src = 'dino6.jpg'; // Замените на следующую картинку
    }
    if (clickCount >= 1000000) {
        dinoImage.src = 'dino7.jpg'; // Замените на следующую картинку
    }
});