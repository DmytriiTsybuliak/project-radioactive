// import axios from "axios";
// const form = document.getElementById("exercises-search-form");
// const searchInput = form.querySelector(".exercises-search-input");
// const exercisesList = document.querySelector(".exercises-list");
// const clearButton = document.querySelector('.exercises-inputclear-icon');
// console.dir(clearButton);


// form.addEventListener("submit", async (event) => {
//   event.preventDefault();

//   const query = searchInput.value.trim().toLowerCase();

//   try {
//     await renderExercises(query);
//   } catch (error) {
//     console.error(error);
//   }
// });
//  Додаємо обробник події для введення тексту у полі пошуку
// searchInput.addEventListener('input', handleInputChange);


// / Функція для відображення або приховування іконки очищення
// function handleInputChange() {
//   const inputValue = searchInput.value.trim();
//   if (inputValue !== '') {
//     clearButton.classList.remove('exercises-is-hidden');
//   } else {
//     clearButton.classList.add('exercises-is-hidden');
//   }
// }
// / Функція для очищення input 
// function clearInput() {
//   const searchInput = document.getElementById('exercises-search-input');
//   if (searchInput) {
//     console.log('True');

//     searchInput.value = '';
//   }
// };

// clearButton.addEventListener('click', clearInput);

// async function getExercises(query) {
//   try {
//     const response = await axios.get(`https://energyflow.b.goit.study/api/exercises?bodypart=&muscles=abs&equipment=&keyword=${query}&page=1&limit=10`);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching exercises:', error);
//     throw error;
//   }
// }

// async function renderExercises(query) {
//   try {
//     const exercises = await getExercises(query);

//     exercisesList.innerHTML = '';

//     if (exercises.results.length > 0) {
//       const exercisesHTML = exercises.results.map((exercise) => `
//         <li class="exercises-item-page2">
//           <div class="exercises-card">
//             <div class="exercises-card-top">
//               <div class="exercises-kind-wrapper">
//                 <p class="exercises-card-kind">WORKOUT</p>
//                 <div class="exercises-card-rating">
//                   <p class="exercises-rating-value">${exercise.rating}</p>
//                   <svg class="exercises-star-icon" width="18" height="18" aria-label="star icon">
//                     <use href="./img/exercises/exercises-sprite.svg#icon-star"></use>
//                   </svg>
//                 </div>
//               </div>
//               <button class="exercises-start-button">
//                 Start
//                 <svg class="exercises-start-icon" width="14" height="14">
//                   <use href="./img/exercises/exercises-sprite.svg#icon-arrow"></use>
//                 </svg>
//               </button>
//             </div>
//             <div class="exercises-card-namewrapper">
//               <svg class="exercises-star-icon" width="24" height="24" aria-label="star icon">
//                 <use href="./img/exercises/exercises-sprite.svg#icon-icon"></use>
//               </svg>
//               <p class="exercises-card-exname">${exercise.name}</p>
//             </div>
//             <ul class="exercises-card-info">
//               <li class="exercises-info-data">
//                 <span class="exercises-data-name">Burned calories: </span>${exercise.calories} / ${exercise.duration} min
//               </li>
//               <li class="exercises-info-data">
//                 <span class="exercises-data-name">Body part: </span>${exercise.bodyPart}
//               </li>
//               <li class="exercises-info-data">
//                 <span class="exercises-data-name">Target: </span>${exercise.target}
//               </li>
//             </ul>
//           </div>
//         </li>
//       `).join('');

//       exercisesList.innerHTML = exercisesHTML;
//     } else {
//       exercisesList.innerHTML = '<p class="no-results-message">Unfortunately, <span class="error-message">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>';
//     }
//   } catch (error) {
//     console.error(error);
//   }


// }