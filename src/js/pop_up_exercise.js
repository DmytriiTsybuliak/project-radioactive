document.addEventListener("DOMContentLoaded", function() {
    // Найти все кнопки для открытия модального окна
    var openModalBtns = document.querySelectorAll(".openModalBtn");

    // Найти элементы модального окна
    var popUpExercise = document.querySelector(".pop-up-exercise");
    var modalTitle = document.getElementById("modalTitle");
    var modalImage = document.getElementById("modalImage");
    var modalBodyPart = document.getElementById("modalBodyPart");
    var modalEquipment = document.getElementById("modalEquipment");
    var modalTarget = document.getElementById("modalTarget");
    var modalDescription = document.getElementById("modalDescription");
    var modalRating = document.getElementById("modalRating");
    var modalBurnedCalories = document.getElementById("modalBurnedCalories");
    var modalTime = document.getElementById("modalTime");
    var modalPopularity = document.getElementById("modalPopularity");

    // Добавить обработчик события клика на каждую кнопку
    openModalBtns.forEach(function(btn) {
        btn.addEventListener("click", function() {
            // Получить id кнопки из атрибута data-id
            var id = btn.getAttribute("data-id");
            // Отправить AJAX-запрос на сервер с этим id
            fetchDataFromServer(id);
        });
    });

    // Функция для отправки AJAX-запроса на сервер
    function fetchDataFromServer(id) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "/api/data?id=" + id, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    var responseData = JSON.parse(xhr.responseText);
                    displayDataInModal(responseData);
                } else {
                    console.error("Ошибка запроса на сервер: " + xhr.status);
                }
            }
        };
        xhr.send();
    }

    // Функция для отображения данных в модальном окне
    function displayDataInModal(data) {
        modalTitle.textContent = data.name;
        modalImage.src = data.gifUrl;
        modalBodyPart.textContent = data.bodyPart;
        modalEquipment.textContent = data.equipment;
        modalTarget.textContent = data.target;
        modalDescription.textContent = data.description;
        modalRating.textContent = data.rating;
        modalBurnedCalories.textContent = data.burnedCalories;
        modalTime.textContent = data.time + " мин";
        modalPopularity.textContent = data.popularity;

        popUpExercise.style.display = "flex"; // Показать модальное окно
    }
});
