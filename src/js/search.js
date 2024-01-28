import axios from "axios";

const form = document.querySelector(".exercises-input-wrapper");
const clickContainer = document.querySelector(".exercises-search-input");

clickContainer.addEventListener("submit", async (event) => {
  event.preventDefault();

  const searchInput = event.currentTarget.querySelector(".exercises-search-input");
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
      const response = await axios.get('https://energyflow.b.goit.study/api/exercises?bodypart=back&muscles=lats&equipment=barbell&keyword=${query}&page=1&limit=10')
    const exercises = response.data;

    // Очистка контейнера перед додаванням нових результатів
    clickContainer.innerHTML = '';

    // Відображення результатів
    if (exercises.length > 0) {
      const exercisesHTML = exercises.map((exercise) => `
      <ul class="exercises-list-page2">
          <li class="exercises-item-page2">
            <div class="exercises-card">
              <div class="exercises-card-top">
                <div class="exercises-kind-wrapper">
                  <p class="exercises-card-kind">WORKOUT</p>
                  <div class="exercises-card-rating">
                    <p class="exercises-rating-value">4.0</p>
                    <svg
                      class="exercises-star-icon"
                      width="18"
                      height="18"
                      aria-label="star icon"
                    >
                      <use
                        href="./img/exercises/exercises-sprite.svg#icon-star"
                      ></use>
                    </svg>
                  </div>
                </div>
                <button class="exercises-start-button">
                  Start
                  <svg class="exercises-start-icon" width="14" height="14">
                    <use
                      href="./img/exercises/exercises-sprite.svg#icon-arrow"
                    ></use>
                  </svg>
                </button>
              </div>
              <div class="exercises-card-namewrapper">
                <svg
                  class="exercises-star-icon"
                  width="24"
                  height="24"
                  aria-label="star icon"
                >
                  <use
                    href="./img/exercises/exercises-sprite.svg#icon-icon"
                  ></use>
                </svg>
                <p class="exercises-card-exname">Air bike</p>
              </div>
              <ul class="exercises-card-info">
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Burned calories: </span>312
                  / 3 min
                </li>
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Body part: </span>Waist
                </li>
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Target: </span>Abs
                </li>
              </ul>
            </div>
          </li>
          <li class="exercises-item-page2">
            <div class="exercises-card">
              <div class="exercises-card-top">
                <div class="exercises-kind-wrapper">
                  <p class="exercises-card-kind">WORKOUT</p>
                  <div class="exercises-card-rating">
                    <p class="exercises-rating-value">4.0</p>
                    <svg
                      class="exercises-star-icon"
                      width="18"
                      height="18"
                      aria-label="star icon"
                    >
                      <use
                        href="./img/exercises/exercises-sprite.svg#icon-star"
                      ></use>
                    </svg>
                  </div>
                </div>
                <button class="exercises-start-button">
                  Start
                  <svg class="exercises-start-icon" width="14" height="14">
                    <use
                      href="./img/exercises/exercises-sprite.svg#icon-arrow"
                    ></use>
                  </svg>
                </button>
              </div>
              <div class="exercises-card-namewrapper">
                <svg
                  class="exercises-star-icon"
                  width="24"
                  height="24"
                  aria-label="star icon"
                >
                  <use
                    href="./img/exercises/exercises-sprite.svg#icon-icon"
                  ></use>
                </svg>
                <p class="exercises-card-exname">Air bike</p>
              </div>
              <ul class="exercises-card-info">
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Burned calories: </span>312
                  / 3 min
                </li>
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Body part: </span>Waist
                </li>
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Target: </span>Abs
                </li>
              </ul>
            </div>
          </li>
      `).join('');

      photoContainer.innerHTML = exercisesHTML;
    } else {
      // Відобразіть повідомлення про відсутність результатів
      photoContainer.innerHTML = '<p>No results found.</p>';
    }
  } catch (error) {
    console.error(error);
    // Відобразіть повідомлення про помилку або здійсніть інші дії за необхідності
  } finally {
    loader.style.display = "none"; // Приховання завантажувача після завершення запиту
  }
}