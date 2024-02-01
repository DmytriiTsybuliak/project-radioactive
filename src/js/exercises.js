import 'tui-pagination/dist/tui-pagination.css';
import iconsExercises from '../img/exercises/exercises-sprite.svg';
import axios from 'axios';
import iziToast from 'izitoast';
import { assignModal } from './pop_up_exercise';
import { makePagination } from './makePagination';
import { capitalize } from './capitalize_word';
const exercisesList = document.querySelector('.exercises-list');
let activeFilter = 'Muscles';
let activePage = 1;
const categoriesPerPage = 12;
const exericesPerPage = 9;
let totalPages;

let totalPagesforCards;
const form = document.getElementById('exercises-search-form');
const exircisesCategory = document.querySelector('.exircises-category');
const exercisesTitle = document.querySelector('.exercises-title');
const searchInput = form.querySelector('.exercises-search-input');
// const clearButton = document.querySelector('.exercises-inputclear-icon');

async function getMusclePage(filter, page) {
  let searchParams = new URLSearchParams({
    filter: filter,
    page: page,
    limit: categoriesPerPage,
  });
  try {
    await axios
      .get(`https://energyflow.b.goit.study/api/filters?${searchParams}`)
      .then(response => {
        let musclesResult = response.data.results;
        totalPages = response.data.totalPages;
        // console.log('Total Pages: ', totalPages);

        const markup = musclesResult
          .map(({ name, filter, imgUrl }) => {
            return `<li class="exercises-list-item" data-name="${name}" data-filter="${filter}">
            <div class="exercises-item"
            style="background:
            linear-gradient(0deg,rgba(16, 16, 16, 0.7) 0%, rgba(16, 16, 16, 0.7) 100%),
            url(${imgUrl}),lightgray -16.825px -9.156px / 128.765% 116.922% no-repeat; 
            background-size: cover;">
            <p class="exercises-item-name">${capitalize(name)}</p>
            <p class="exercises-item-subname">${filter}</p>
            </div>
          </li>`;
          })
          .join('');
        exercisesList.insertAdjacentHTML('beforeend', markup);
        assignClicktoCards();
      })
      .catch(error => {
        iziToast.error({
          title: 'Error',
          message: error.response.data.message,
        });
      });
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong, try again',
    });
  }
}
await getMusclePage(activeFilter, activePage);

makePagination(12, totalPages).on('afterMove', ({ page }) => {
  // console.log('Moved', page);
  exercisesList.innerHTML = '';
  getMusclePage(activeFilter, page);
});

function assignClicktoCards() {
  let page = activePage;
  const cards = document.querySelectorAll('.exercises-list-item');
  for (const card of cards) {
    card.addEventListener('click', getExerices);
    async function getExerices(event) {
      const name = event.currentTarget.dataset.name;
      const filter = event.currentTarget.dataset.filter;
      // setDisplayCards(false)
      form.classList.remove('input-hidden');
      await getExercises({ filter, name, page });

      makePagination(9, totalPagesforCards).on(
        'afterMove',
        async ({ page }) => {
          exercisesList.innerHTML = '';
          await getExercises({ filter, name, page });
        }
      );
      card.removeEventListener('click', getExerices);
    }
  }
}

//Adding eventListener for buttons Muscles / Body Parts / Equipment
const actionButtons = document.querySelectorAll('.exercises-filter-button');
for (const card of actionButtons) {
  card.addEventListener('click', async function (event) {
    form.classList.add('input-hidden');

    const name = event.currentTarget.dataset.name;
    for (const card of actionButtons) {
      card.classList.remove('active-btn');
    }
    event.target.classList.add('active-btn');
    activeFilter = name;
    // console.log('Clicked the button: ', name);
    exercisesList.innerHTML = '';
    //Getting exercises cards
    exircisesCategory.dataset.name = '';
    exircisesCategory.textContent = '';
    exercisesTitle.textContent = 'Exercises';

    await getMusclePage(name, activePage);
    makePagination(12, totalPages).on('afterMove', ({ page }) => {
      // console.log('Moved', page);
      // console.log('Total Pages Pressed', totalPages);
      exercisesList.innerHTML = '';
      getMusclePage(activeFilter, page);
    });
    // console.log(name, activePage);
    // card.classList.remove("active-btn");
  });
}

async function getExercises({ filter, name, page, keyword = '' }) {
  const filterParamMap = {
    'Body parts': 'bodypart',
    Muscles: 'muscles',
    Equipment: 'equipment',
  };
  const filterParam = filterParamMap[filter];

  await axios
    .get(
      `https://energyflow.b.goit.study/api/exercises?${filterParam}=${name.toLowerCase()}&keyword=${keyword}&page=${page}&limit=${exericesPerPage}`
    )
    .then(response => {
      let musclesResult = response.data.results;
      totalPagesforCards = response.data.totalPages;
      // console.log(
      //   'totalPagesforCards',
      //   totalPagesforCards,
      //   'musclesResult:',
      //   response.data
      // );
      // console.log(totalPages, response.data);
      exircisesCategory.dataset.name = name;
      exircisesCategory.dataset.filter = filter;
      exircisesCategory.textContent = capitalize(name);
      exercisesTitle.textContent = 'Exercises /';
      const markup = musclesResult
        .map(({ bodyPart, burnedCalories, name, _id, target, rating }) => {
          return `<li class="exercises-item-page2">
            <div class="exercises-card">
              <div class="exercises-card-top">
                <div class="exercises-kind-wrapper">
                  <p class="exercises-card-kind">WORKOUT</p>
                  <div class="exercises-card-rating">
                    <p class="exercises-rating-value">${rating.toFixed(1)}</p>
                    <svg
                      class="exercises-star-icon"
                      width="18"
                      height="18"
                      aria-label="star icon"
                    >
                      <use
                        href="${iconsExercises}#icon-star"
                      ></use>
                    </svg>
                  </div>
                </div>
                <button class="exercises-start-button" id=${_id}>
                  Start
                  <svg class="exercises-start-icon" width="14" height="14">
                    <use
                      href="${iconsExercises}#icon-arrow"
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
                    href="${iconsExercises}#icon-icon"
                  ></use>
                </svg>
                <p class="exercises-card-exname">${capitalize(name)}</p>
              </div>
              <ul class="exercises-card-info">
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Burned calories: </span>${burnedCalories}
                </li>
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Body part: </span>${capitalize(
            bodyPart
          )}
                </li>
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Target: </span>${capitalize(
            target
          )}
                </li>
              </ul>
            </div>
          </li> `;
        })
        .join('');
      exercisesList.innerHTML = '';
      exercisesList.insertAdjacentHTML('beforeend', markup);
      assignModal('Add');
    })
    .catch(error => {
      console.log(error);

      iziToast.error({
        title: 'Error',
        message: "Something went wrong",
      });
    });
}

form.addEventListener('submit', async event => {
  event.preventDefault();
  let page = activePage;
  let filter = exircisesCategory.dataset.filter;
  let name = exircisesCategory.dataset.name;
  let keyword = searchInput.value.trim().toLowerCase();
  // console.log('Text Content', searchInput.value.trim().toLowerCase());
  await getExercises({ filter, name, page, keyword });
  makePagination(9, totalPagesforCards).on('afterMove', async ({ page }) => {
    exercisesList.innerHTML = '';
    await getExercises({ filter, name, page, keyword });
  });
});
