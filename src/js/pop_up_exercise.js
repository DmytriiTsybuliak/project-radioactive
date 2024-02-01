import axios from 'axios';
import iziToast from 'izitoast';
import { capitalize } from './capitalize_word';


export function assignModal(actionName) {
  const addToFavoritesBtn = document.querySelector('.add-to-favorites-btn');
  addToFavoritesBtn.dataset.action = actionName;
  if (actionName == "Delete") {
    addToFavoritesBtn.textContent = "Remove from favorites";
  }

  // Находим контейнер с классом "exercises-list"
  let container = document.querySelector('.exercises-list');
  // Навешиваем обработчик клика на родительский элемент, делегируем событие детям
  container.addEventListener('click', onClickCategory);
  async function onClickCategory(event) {
    let target = event.target;
    // Проверяем, что кликнули по кнопке ".exercises-start-button"
    if (
      target.classList.contains('exercises-start-button') ||
      target.parentElement.classList.contains('exercises-start-button')
    ) {
      // Получаем значение ID из атрибута data-id кнопки
      let exerciseId;
      if (target.parentElement.classList.contains('exercises-start-button')) {
        exerciseId = target.parentElement.getAttribute('id');
      } else {
        exerciseId = target.getAttribute('id');
      }
      let pushData;
      async function getInfoByID() {
        try {
          await axios
            .get('https://energyflow.b.goit.study/api/exercises/' + exerciseId)
            .then(({ data }) => {
              // Выводим данные на консоль
              console.log(data);
              // Заполняем модальное окно данными
              document.getElementById('modalImage').src = data.gifUrl;
              document.getElementById('modalName').textContent = capitalize(
                data.name
              );
              document.getElementById('modalRating').textContent =
                data.rating.toFixed(1);
              document.getElementById('modalTarget').textContent = capitalize(
                data.target
              );
              document.getElementById('bodyPart').textContent = capitalize(
                data.bodyPart
              );
              document.getElementById('modalEquipment').textContent =
                capitalize(data.equipment);
              document.getElementById('modalPopularity').textContent =
                data.popularity;
              document.getElementById('modalBurnedCalories').textContent =
                data.burnedCalories + ' cal / ' + data.time + ' min';
              document.getElementById('modalDescription').textContent =
                data.description;
              document.querySelector('.add-to-favorites-btn').dataset.id =
                data._id;

              // Открываем модальное окно


              var modal = document.getElementById('pop-up-exercise');
              modal.style.display = 'flex';
              pushData = data;
            });
        } catch (error) {
          iziToast.error({
            title: 'Error',
            message: 'Something went wrong, try again',
          });

        }
      }
      // Отправляем запрос на сервер с учетом полученного exerciseId
      await getInfoByID();
      // Находим кнопку "Add to favorites" в модальном окне
      const addToFavoritesBtn = document.querySelector('.add-to-favorites-btn');


      // Назначаем обработчик клика на кнопку "Add to favorites"
      addToFavoritesBtn.addEventListener('click', onClick);

      function onClick() {
        // Получаем ID упражнения из атрибута id кнопки
        const exerciseId = document.querySelector('.add-to-favorites-btn').dataset.id;

        if (exerciseId) {
          let itemName;
          // Получаем текущий список избранных упражнений из локального хранилища или создаем новый, если его нет
          let favorites = JSON.parse(localStorage.getItem('favorite')) || [];
          // console.log(favorites);
          // Проверяем, не добавлено ли упражнение уже в избранное
          if (!favorites.some(item => item._id === exerciseId)) {
            // Добавляем упражнение в список избранных
            favorites.push(pushData);
            // Сохраняем обновленный список избранных упражнений в локальное хранилище
            localStorage.setItem('favorite', JSON.stringify(favorites));
            // Выводим сообщение об успешном добавлении в избранное
            iziToast.success({
              title: 'Success',
              message: `The exercise ${capitalize(pushData.name)} succesfuly added to favorites`,
            });
          } else {
            // Если упражнение уже добавлено в избранное, выводим сообщение

            iziToast.warning({
              title: 'Denied',
              message: `The exercise ${capitalize(pushData.name)} already exists in favorites`,
            });
          }

        } else {
          iziToast.error({
            title: 'Error',
            message: `The exercise cannot be added for some reason`,
          });
        }
        addToFavoritesBtn.removeEventListener('click', onClick);
      }
    }
    // container.removeEventListener("click", onClickCategory);
  }

  // Навешиваем обработчик события на кнопку закрытия модального окна
  const closeButton = document.getElementById('closeBtn');
  closeButton.addEventListener('click', function () {
    // Назначаем обработчик клика на кнопку "Add to favorites"
    const modal = document.getElementById('pop-up-exercise');
    modal.style.display = 'none';
  });
  // Получение рейтинга с сервера
  // const rating = 3;

  // Находим все элементы звезд
  // const stars = document.querySelectorAll('.star');

  // // Отображаем звезды в соответствии с рейтингом
  // for (let i = 0; i < rating; i++) {
  //   stars[i].style.fill = 'yellow'; // Желтая звезда для оценки, меньшей, чем рейтинг
  // }
}

export function deleteListener(params) { }
