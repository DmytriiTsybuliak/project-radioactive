import axios from 'axios';
import { capitalize } from './capitalize_word';

export function assignModal() {
  // Находим контейнер с классом "exercises-list"
  let container = document.querySelector(".exercises-list");
  // Навешиваем обработчик клика на родительский элемент, делегируем событие детям
  container.addEventListener("click", async function (event) {
    let target = event.target;
    // Проверяем, что кликнули по кнопке ".exercises-start-button"
    if (target.classList.contains("exercises-start-button") || target.parentElement.classList.contains("exercises-start-button")) {
      // Получаем значение ID из атрибута data-id кнопки
      let exerciseId;
      if (target.parentElement.classList.contains("exercises-start-button")) {
        exerciseId = target.parentElement.getAttribute("id");
      } else {
        exerciseId = target.getAttribute("id");
      }
      async function getInfoByID() {
        try {
          await axios.get('https://energyflow.b.goit.study/api/exercises/' + exerciseId)
            .then(({ data }) => {
              // Выводим данные на консоль
              // console.log(data);
              // Заполняем модальное окно данными
              document.getElementById("modalImage").src = data.gifUrl;
              document.getElementById("modalName").textContent = capitalize(data.name);
              document.getElementById("modalRating").textContent = data.rating;
              document.getElementById("modalTarget").textContent = capitalize(data.target);
              document.getElementById("bodyPart").textContent = capitalize(data.bodyPart);
              document.getElementById("modalEquipment").textContent = capitalize(data.equipment);
              document.getElementById("modalPopularity").textContent = data.popularity;
              document.getElementById("modalBurnedCalories").textContent = data.burnedCalories + " cal / " + data.time + " min";
              document.getElementById("modalDescription").textContent = data.description;
              // Открываем модальное окно
              var modal = document.getElementById("pop-up-exercise");
                modal.style.display = "flex";
                
                // Находим кнопку "Add to favorites" в модальном окне
const addToFavoritesBtn = document.querySelector('.add-to-favorites-btn');

// Назначаем обработчик клика на кнопку "Add to favorites"
addToFavoritesBtn.addEventListener("click", function () {
  // Получаем ID упражнения из атрибута id кнопки
  const exerciseId = this.getAttribute("id");

  // Находим объект упражнения в массиве fromAPI по ID
  const exercise = fromAPI.find(item => item._id === exerciseId);

  if (exercise) {
    // Получаем текущий список избранных упражнений из локального хранилища или создаем новый, если его нет
    let favorites = JSON.parse(localStorage.getItem(KEY_FAVORITE)) || [];

    // Проверяем, не добавлено ли упражнение уже в избранное
    if (!favorites.some(item => item._id === exerciseId)) {
      // Добавляем упражнение в список избранных
      favorites.push(exercise);

      // Сохраняем обновленный список избранных упражнений в локальное хранилище
      localStorage.setItem(KEY_FAVORITE, JSON.stringify(favorites));

      // Выводим сообщение об успешном добавлении в избранное
      console.log(`Упражнение с ID ${exerciseId} добавлено в избранное.`);
    } else {
      // Если упражнение уже добавлено в избранное, выводим сообщение
      console.log(`Упражнение с ID ${exerciseId} уже находится в избранном.`);
    }
  } else {
    console.log(`Упражнение с ID ${exerciseId} не найдено.`);
  }
});

            })
        }
        catch (error) {
          console.error('Error:', error);
          alert('Something went wrong, try again');
        }
      }
      // Отправляем запрос на сервер с учетом полученного exerciseId
      await getInfoByID();
    }
  });

  // Навешиваем обработчик события на кнопку закрытия модального окна
  const closeButton = document.getElementById("closeBtn");
  closeButton.addEventListener("click", function () {
    const modal = document.getElementById("pop-up-exercise");
    modal.style.display = "none";
  });
  // Получение рейтинга с сервера 
const rating = 3;

// Находим все элементы звезд
const stars = document.querySelectorAll('.star');

// Отображаем звезды в соответствии с рейтингом
for (let i = 0; i < rating; i++) {
    stars[i].style.fill = 'yellow'; // Желтая звезда для оценки, меньшей, чем рейтинг
}

}

export function deleteListener(params) {

}