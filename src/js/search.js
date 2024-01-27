import axios from "axios";

const form = document.querySelector(".input-form");
const photoContainer = document.querySelector(".search-container");
const loader = document.querySelector(".loader");

form.addEventListener("submit", async (event) => {
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
    const response = await axios.get(`https://energyflow.b.goit.study/api/exercises?bodypart=back&muscles=lats&equipment=barbell&keyword=${query}&page=1&limit=10`);
    const exercises = response.data;

    // Очистка контейнера перед додаванням нових результатів
    photoContainer.innerHTML = '';

    // Відображення результатів
    if (exercises.length > 0) {
      const exercisesHTML = exercises.map((exercise) => `
        <div class="exercise-card">
          <h3>${exercise.name}</h3>
          <p>${exercise.description}</p>
        </div>
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
