document.addEventListener("DOMContentLoaded", function() {
    var openModalBtns = document.querySelectorAll(".openModalBtn");
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
    var addToFavoritesBtn = document.querySelector(".add-to-favorites-btn");
    var giveRatingBtn = document.querySelector(".give-rating-btn");

    addToFavoritesBtn.addEventListener("click", function() {
        // Добавить обработчик для действия "Add to favorites"
        // Вставьте здесь соответствующий код
    });

    giveRatingBtn.addEventListener("click", function() {
        // Добавить обработчик для действия "Give a rating"
        // Вставьте здесь соответствующий код
    });



    openModalBtns.forEach(function(btn) {
        btn.addEventListener("click", function() {
            var id = btn.getAttribute("data-id");
            fetchDataFromServer(id);
        });
    });

    function fetchDataFromServer(id) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://energyflow.b.goit.study/api/data?id=" + id, true);
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

        popUpExercise.style.display = "flex";
    }
});


//  document.addEventListener("DOMContentLoaded", function() {
//         // Найти все кнопки для открытия модального окна
//         var openModalBtns = document.querySelectorAll(".openModalBtn");

//         // Найти элемент модального окна
//         var popUpExercise = document.querySelector(".pop-up-exercise");

//         // Добавить обработчик события клика на каждую кнопку
//         openModalBtns.forEach(function(btn) {
//             btn.addEventListener("click", function() {
//                 // Получить id кнопки из атрибута data-id
//                 var id = btn.getAttribute("data-id");
//                 // Отправить AJAX-запрос на сервер с этим id
//                 fetchDataFromServer(id);
//             });
//         });

//         // Функция для отправки AJAX-запроса на сервер
//         function fetchDataFromServer(id) {
//             var xhr = new XMLHttpRequest();
//             xhr.open("GET", "https://energyflow.b.goit.study/api/data?id=" + id, true);
//             xhr.onreadystatechange = function() {
//                 if (xhr.readyState === XMLHttpRequest.DONE) {
//                     if (xhr.status === 200) {
//                         var responseData = JSON.parse(xhr.responseText);
//                         displayDataInModal(responseData);
//                     } else {
//                         console.error("Ошибка запроса на сервер: " + xhr.status);
//                     }
//                 }
//             };
//             xhr.send();
//         }

//         // Функция для отображения данных в модальном окне
//         function displayDataInModal(data) {
//             document.getElementById("modalTitle").textContent = data.name;
//             document.getElementById("modalImage").src = data.gifUrl;
//             document.getElementById("modalBodyPart").textContent = data.bodyPart;
//             document.getElementById("modalEquipment").textContent = data.equipment;
//             document.getElementById("modalTarget").textContent = data.target;
//             document.getElementById("modalDescription").textContent = data.description;
//             document.getElementById("modalRating").textContent = data.rating;
//             document.getElementById("modalBurnedCalories").textContent = data.burnedCalories;
//             document.getElementById("modalTime").textContent = data.time + " мин";
//             document.getElementById("modalPopularity").textContent = data.popularity;

//             popUpExercise.style.display = "flex"; // Показать модальное окно
//         }
//     });


// document.addEventListener("DOMContentLoaded", function() {
//     // Найти все кнопки для открытия модального окна с классом openModalBtn
//     var openModalBtns = document.querySelectorAll(".openModalBtn");

//     // Найти элементы модального окна
//     var popUpExercise = document.querySelector(".pop-up-exercise");
//     var modalTitle = document.getElementById("modalTitle");
//     var modalImage = document.getElementById("modalImage");
//     var modalBodyPart = document.getElementById("modalBodyPart");
//     var modalEquipment = document.getElementById("modalEquipment");
//     var modalTarget = document.getElementById("modalTarget");
//     var modalDescription = document.getElementById("modalDescription");
//     var modalRating = document.getElementById("modalRating");
//     var modalBurnedCalories = document.getElementById("modalBurnedCalories");
//     var modalTime = document.getElementById("modalTime");
//     var modalPopularity = document.getElementById("modalPopularity");

//     // Добавить обработчик события клика на каждую кнопку
//     openModalBtns.forEach(function(btn) {
//         btn.addEventListener("click", function() {
//             // Получить id кнопки из атрибута data-id
//             var id = btn.getAttribute("data-id");
//             // Отправить AJAX-запрос на сервер с этим id
//             fetchDataFromServer(id);
//         });
//     });

//     // Функция для отправки AJAX-запроса на сервер
//     function fetchDataFromServer(id) {
//         var xhr = new XMLHttpRequest();
//         xhr.open("GET", "/api/data?id=" + id, true);
//         xhr.onreadystatechange = function() {
//             if (xhr.readyState === XMLHttpRequest.DONE) {
//                 if (xhr.status === 200) {
//                     var responseData = JSON.parse(xhr.responseText);
//                     displayDataInModal(responseData);
//                 } else {
//                     console.error("Ошибка запроса на сервер: " + xhr.status);
//                 }
//             }
//         };
//         xhr.send();
//     }

//     // Функция для отображения данных в модальном окне
//     function displayDataInModal(data) {
//         modalTitle.textContent = data.name;
//         modalImage.src = data.gifUrl;
//         modalBodyPart.textContent = data.bodyPart;
//         modalEquipment.textContent = data.equipment;
//         modalTarget.textContent = data.target;
//         modalDescription.textContent = data.description;
//         modalRating.textContent = data.rating;
//         modalBurnedCalories.textContent = data.burnedCalories;
//         modalTime.textContent = data.time + " мин";
//         modalPopularity.textContent = data.popularity;

//         popUpExercise.style.display = "flex"; // Показать модальное окно
//     }
// });



// document.addEventListener("DOMContentLoaded", function() {
//     var openModalBtns = document.querySelectorAll(".openModalBtn");
//     var popUpExercise = document.querySelector(".pop-up-exercise");
//     var modalTitle = document.getElementById("modalTitle");
//     var modalImage = document.getElementById("modalImage");
//     var modalBodyPart = document.getElementById("modalBodyPart");
//     var modalEquipment = document.getElementById("modalEquipment");
//     var modalTarget = document.getElementById("modalTarget");
//     var modalDescription = document.getElementById("modalDescription");
//     var modalRating = document.getElementById("modalRating");
//     var modalBurnedCalories = document.getElementById("modalBurnedCalories");
//     var modalTime = document.getElementById("modalTime");
//     var modalPopularity = document.getElementById("modalPopularity");

//     openModalBtns.forEach(function(btn) {
//         btn.addEventListener("click", function() {
//             var id = btn.getAttribute("data-id");
//             fetchDataFromServer(id);
//         });
//     });

//     function fetchDataFromServer(id) {
//         // Здесь должен быть AJAX-запрос на сервер для получения данных по id
//         // В данном примере используется статичные данные из объекта exerciseData
//         displayDataInModal(exerciseData);
//     }

//     function displayDataInModal(data) {
//         modalTitle.textContent = data.name;
//         modalImage.src = data.gifUrl;
//         modalBodyPart.textContent = data.bodyPart;
//         modalEquipment.textContent = data.equipment;
//         modalTarget.textContent = data.target;
//         modalDescription.textContent = data.description;
//         modalRating.textContent = data.rating;
//         modalBurnedCalories.textContent = data.burnedCalories;
//         modalTime.textContent = data.time + " мин";
//         modalPopularity.textContent = data.popularity;

//         popUpExercise.style.display = "block";
//     }
// });


// document.addEventListener("DOMContentLoaded", function() {
//     // Найти все кнопки для открытия модального окна
//     var openModalBtns = document.querySelectorAll(".openModalBtn");

//     // Найти элементы модального окна
//     var popUpExercise = document.querySelector(".pop-up-exercise");
//     var modalTitle = document.getElementById("modalTitle");
//     var modalImage = document.getElementById("modalImage");
//     var modalBodyPart = document.getElementById("modalBodyPart");
//     var modalEquipment = document.getElementById("modalEquipment");
//     var modalTarget = document.getElementById("modalTarget");
//     var modalDescription = document.getElementById("modalDescription");
//     var modalRating = document.getElementById("modalRating");
//     var modalBurnedCalories = document.getElementById("modalBurnedCalories");
//     var modalTime = document.getElementById("modalTime");
//     var modalPopularity = document.getElementById("modalPopularity");
    

//     // Добавить обработчик события клика на каждую кнопку
//     openModalBtns.forEach(function(btn) {
//         btn.addEventListener("click", function() {
//             // Получить id кнопки из атрибута data-id
//             var id = btn.getAttribute("data-id");
//             // Отправить AJAX-запрос на сервер с этим id
//             fetchDataFromServer(id);
//         });
//     });

//     // Функция для отправки AJAX-запроса на сервер
//     function fetchDataFromServer(id) {
//         var xhr = new XMLHttpRequest();
//         xhr.open("GET", "/api/data?id=" + id, true);
//         xhr.onreadystatechange = function() {
//             if (xhr.readyState === XMLHttpRequest.DONE) {
//                 if (xhr.status === 200) {
//                     var responseData = JSON.parse(xhr.responseText);
//                     displayDataInModal(responseData);
//                 } else {
//                     console.error("Ошибка запроса на сервер: " + xhr.status);
//                 }
//             }
//         };
//         xhr.send();
//     }

//     // Функция для отображения данных в модальном окне
//     function displayDataInModal(data) {
//         modalTitle.textContent = data.name;
//         modalImage.src = data.gifUrl;
//         modalBodyPart.textContent = data.bodyPart;
//         modalEquipment.textContent = data.equipment;
//         modalTarget.textContent = data.target;
//         modalDescription.textContent = data.description;
//         modalRating.textContent = data.rating;
//         modalBurnedCalories.textContent = data.burnedCalories;
//         modalTime.textContent = data.time + " мин";
//         modalPopularity.textContent = data.popularity;

//         document.getElementById("modalName").innerText = responseData.name;


//         popUpExercise.style.display = "flex"; // Показать модальное окно
//     }
// });
