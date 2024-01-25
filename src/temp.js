// Отримання посилань на елементи DOM
const modal = document.createElement('div');
modal.classList.add('modal');
const backdrop = document.createElement('div');
backdrop.classList.add('backdrop');
const modalButton = document.createElement('button');
modalButton.textContent = 'Відкрити модальне вікно';
document.body.appendChild(modalButton);

// Функція для відкриття модального вікна
function openModal() {
    modal.innerHTML = `
        <div class="modal-content">
            <!-- Вміст модального вікна тут -->
            <span class="close">&times;</span>
            <p>Це модальне вікно</p>
        </div>
    `;
    document.body.appendChild(modal);
    document.body.appendChild(backdrop);
    modal.querySelector('.close').addEventListener('click', closeModal);
    backdrop.addEventListener('click', closeModal);
    document.addEventListener('keydown', closeModalOnEscape);
}

// Функція для закриття модального вікна
function closeModal() {
    modal.remove();
    backdrop.remove();
    document.removeEventListener('keydown', closeModalOnEscape);
}

// Функція для закриття модального вікна при натисканні на Escape
function closeModalOnEscape(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
}

// Додавання слухача подій для відкриття модального вікна
modalButton.addEventListener('click', openModal);

//--------------------------------------------------------------------------------

// Дані про вправу (приклад)
const exerciseData = {
    video: 'example_video.mp4',
    name: 'Прес',
    rating: 4.5,
    goal: 'Зміцнення корінних м\'язів',
    bodyPart: 'Прес',
    popularity: 'Висока',
    caloriesBurned: 30,
    description: 'Ефективна вправа для зміцнення корінних м\'язів живота.',
    email: 'user@example.com'
};

// Функція для створення модального вікна
function createExerciseModal(exercise) {
    // Створення основного елемента модального вікна
    const modal = document.createElement('div');
    modal.classList.add('modal');
    
    // Створення вмісту модального вікна
    const modalContent = document.createElement('div');
    modalContent.innerHTML = `
        ${exercise.video ? `<video src="${exercise.video}" controls></video>` : ''}
        <h2>${exercise.name}</h2>
        <p>Рейтинг: ${exercise.rating}</p>
        <p>Мета: ${exercise.goal}</p>
        <p>Частина тіла: ${exercise.bodyPart}</p>
        <p>Популярність: ${exercise.popularity}</p>
        <p>Кількість калорій: ${exercise.caloriesBurned} за 3 хвилини</p>
        <p>${exercise.description}</p>
        <button id="addToFavorites">Додати до улюблених</button>
        <button id="giveRating">Оцінити вправу</button>
    `;
    modal.appendChild(modalContent);
    
    // Повернення створеного модального вікна
    return modal;
}

// Створення модального вікна
const exerciseModal = createExerciseModal(exerciseData);

// Додавання модального вікна до сторінки
document.body.appendChild(exerciseModal);

// Отримання кнопок модального вікна
const addToFavoritesButton = document.getElementById('addToFavorites');
const giveRatingButton = document.getElementById('giveRating');

// Додавання обробників подій для кнопок
addToFavoritesButton.addEventListener('click', () => {
    // Додати вправу до обраного
    console.log('Вправа додана до обраного');
});

giveRatingButton.addEventListener('click', () => {
    // Оцінити вправу
    console.log('Вправу оцінено');
});
