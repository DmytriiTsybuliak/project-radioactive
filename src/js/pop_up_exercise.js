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
  // Получение рейтинга с сервера (предположим, что он хранится в переменной rating)
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