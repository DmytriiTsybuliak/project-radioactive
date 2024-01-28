import axios from "axios";

const inputWrapper = document.querySelector(".exercises-input-wrapper");
const searchInput = inputWrapper.querySelector(".exercises-search-input");
const exercisesList = document.querySelector(".exercises-list-page2");

// Додайте обробник події submit для виклику функції пошуку
inputWrapper.addEventListener("submit", async (event) => {
  event.preventDefault();

  const query = searchInput.value.trim();

  try {
    await renderExercises(query);
  } catch (error) {
    console.error(error);
  }
});

async function renderExercises(query) {
  try {
    // Ваш API-запит для отримання вправ з урахуванням фільтрів та ключового слова
    const response = await axios.get(`https://energyflow.b.goit.study/api/exercises?bodypart=back&muscles=lats&equipment=barbell&keyword=${query}&page=1&limit=10`);
    const exercises = response.data;

    // Очистка списку перед додаванням нових результатів
    exercisesList.innerHTML = '';

    // Відображення результатів
    if (exercises.length > 0) {
      const exercisesHTML = exercises.map((exercise) => `
        <li class="exercises-item-page2">
          <div class="exercises-card">
            <div class="exercises-card-top">
              <div class="exercises-kind-wrapper">
                <p class="exercises-card-kind">WORKOUT</p>
                <div class="exercises-card-rating">
                  <p class="exercises-rating-value">${exercise.rating}</p>
                  <svg class="exercises-star-icon" width="18" height="18" aria-label="star icon">
                    <use href="./img/exercises/exercises-sprite.svg#icon-star"></use>
                  </svg>
                </div>
              </div>
              <button class="exercises-start-button">
                Start
                <svg class="exercises-start-icon" width="14" height="14">
                  <use href="./img/exercises/exercises-sprite.svg#icon-arrow"></use>
                </svg>
              </button>
            </div>
            <div class="exercises-card-namewrapper">
              <svg class="exercises-star-icon" width="24" height="24" aria-label="star icon">
                <use href="./img/exercises/exercises-sprite.svg#icon-icon"></use>
              </svg>
              <p class="exercises-card-exname">${exercise.name}</p>
            </div>
            <ul class="exercises-card-info">
              <li class="exercises-info-data">
                <span class="exercises-data-name">Burned calories: </span>${exercise.calories} / ${exercise.duration} min
              </li>
              <li class="exercises-info-data">
                <span class="exercises-data-name">Body part: </span>${exercise.bodyPart}
              </li>
              <li class="exercises-info-data">
                <span class="exercises-data-name">Target: </span>${exercise.targetMuscle}
              </li>
            </ul>
          </div>
        </li>
      `).join('');

      exercisesList.innerHTML = exercisesHTML;
    } else {
      // Відобразіть повідомлення про відсутність результатів
      exercisesList.innerHTML = '<p class="no-results-message">Unfortunately, no results were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>';
    }
  } catch (error) {
    console.error(error);
    // Відобразіть повідомлення про помилку або здійсніть інші дії за необхідності
  }
}