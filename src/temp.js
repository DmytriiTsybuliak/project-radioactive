

document.addEventListener("DOMContentLoaded", function() {
    // Найти кнопку для открытия модального окна
    var openModalBtn = document.getElementById("openModalBtn");

    // Добавить обработчик события клика на кнопку
    openModalBtn.addEventListener("click", function() {
        // Отправить AJAX-запрос на сервер
        var id = id
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "/api/data?id=" + id, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    // Обработать ответ от сервера
                    var responseData = JSON.parse(xhr.responseText);
                    // Отобразить данные в модальном окне
                    displayDataInModal(responseData);
                } else {
                    console.error("Ошибка запроса на сервер: " + xhr.status);
                }
            }
        };
        xhr.send();
    });

    // Функция для отображения данных в модальном окне
    function displayDataInModal(data) {
        // Здесь вы можете использовать ваше модальное окно или библиотеку для модальных окон
        // Например, использовать Bootstrap Modal или другие альтернативы
        console.log("Данные с сервера:", data);

        // Найти кнопку для закрытия модального окна
        var closeModalBtn = document.getElementById("closeModalBtn");

        // Добавить обработчик события клика на кнопку закрытия модального окна
        closeModalBtn.addEventListener("click", function() {
            // Удалить обработчик нажатия клавиш клавиатуры
            document.removeEventListener("keydown", keyboardHandler);
            // Закрыть модальное окно
            closeModal();
        });

        // Обработчик нажатия клавиш клавиатуры
        var keyboardHandler = function(event) {
            // Ваш обработчик нажатия клавиш клавиатуры
        };

        // Добавить обработчик нажатия клавиш клавиатуры
        document.addEventListener("keydown", keyboardHandler);
    }

    // Функция для закрытия модального окна
    function closeModal() {
        // Код для закрытия модального окна
    }
});



//----------------------------------------------------------
document.addEventListener("DOMContentLoaded", function() {
    // Найти все кнопки для открытия модального окна
    var openModalBtns = document.querySelectorAll(".openModalBtn");

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
        // Отобразить данные в модальном окне
    }
});

