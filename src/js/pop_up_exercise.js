document.addEventListener("DOMContentLoaded", function () {
  // Находим контейнер с классом "container exercises-container"
  var container = document.querySelector(".exercises-list");

  // Навешиваем обработчик клика на родительский элемент, делегируем событие детям
  container.addEventListener("click", function(event) {
    var target = event.target;

    // Проверяем, что кликнули по кнопке ".exercises-start-button"
    if (target.classList.contains("exercises-start-button")) {
      // Получаем значение ID из атрибута data-id кнопки
      var exerciseId = target.getAttribute("data-id");

      // Отправляем запрос на сервер с учетом полученного exerciseId
      fetch('https://energyflow.b.goit.study/api/exercises/?id=')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          // Заполняем модальное окно данными
          document.getElementById("modalTitle").textContent = data.name;
          document.getElementById("modalImage").src = data.gifUrl;
          document.getElementById("modalName").textContent = data.name;
          document.getElementById("modalRating").textContent = data.rating;
          document.getElementById("modalTarget").textContent = data.bodyPart;
          document.getElementById("modalEquipment").textContent = data.equipment;
          document.getElementById("modalPopularity").textContent = data.popularity;
          document.getElementById("modalBurnedCalories").textContent = data.burnedCalories + " cal / " + data.time + " min";
          document.getElementById("modalDescription").textContent = data.description;

          // Открываем модальное окно
          var modal = document.getElementById("pop-up-exercise");
          modal.style.display = "flex";
        })
        .catch(error => {
          console.error('There was a problem with your fetch operation:', error);
        });
    }
  });

  // Навешиваем обработчик события на кнопку закрытия модального окна
  var closeButton = document.getElementById("closeBtn");
  closeButton.addEventListener("click", function() {
    var modal = document.getElementById("pop-up-exercise");
    modal.style.display = "none";
  });
});


