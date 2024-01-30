import Pagination from 'tui-pagination';
import axios from 'axios';
import { makePagination, makePaginationByItems } from './makePagination';
import { capitalize } from './capitalize_word';
const exercisesList = document.querySelector('.exercises-list');
const pagination = document.querySelector('.exercises-bottom-buttons');
const filterParamMap = {
  'Body parts': 'bodypart',
  'Muscles': 'muscles',
  'Equipment': 'equipment'
};
let activeFilter = 'Muscles';
let activeCategory = 'Muscles';
let activePage = 1;
const itemsPerPage = 12;
const filterParams = {
  filter: activeFilter,
  category: activeCategory,
  keyword: '',
};
let paginationMark;
let totalPages;


async function getMusclePage(filter, page) {
  let searchParams = new URLSearchParams({
    filter: filter,
    page: page,
    limit: itemsPerPage,
  });
  try {
    await axios.get(`https://energyflow.b.goit.study/api/filters?${searchParams}`)
      .then(response => {
        let musclesResult = response.data.results;
        totalPages = response.data.totalPages;
        console.log('Total Pages: ', totalPages);

        const markup = musclesResult.map(({ name, filter, imgUrl }) => {
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
          .join("");
        exercisesList.insertAdjacentHTML("beforeend", markup);
        assignClicktoCards();
      })
      .catch(error => { console.log(error.response.data.message) });
  } catch (error) {
    console.error('Error:', error);
    alert('Something went wrong, try again');
  }
}
await getMusclePage(activeFilter, activePage);

makePagination(12, totalPages).on('afterMove', ({ page }) => {
  console.log('Moved', page);
  exercisesList.innerHTML = "";
  getMusclePage(activeFilter, page);
});
// paginationMark.on('afterMove', async ({ page }) => {
//   console.log('Moved', page);
//   exercisesList.innerHTML = "";
//   await getMusclePage(page);
// });


function assignClicktoCards() {
  const cards = document.querySelectorAll(".exercises-list-item");
  for (const card of cards) {
    card.addEventListener("click", function (event) {
      const name = event.currentTarget.dataset.name
      const filter = event.currentTarget.dataset.filter
      // setDisplayCards(false)
      getExercises({ filter, name });
      // currentExerciseContainer.innerHTML = `<p class="current-exercises"><span class= "slash">/</span>${capitalize(name)}</p>`
      console.log("Clicked: ", capitalize(name), filter);
    });
  }
}


const actionButtons = document.querySelectorAll(".exercises-filter-button");
for (const card of actionButtons) {
  card.addEventListener("click", async function (event) {
    const name = event.currentTarget.dataset.name;
    activeFilter = name;
    console.log('Clicked the button: ', name);
    exercisesList.innerHTML = "";
    await getMusclePage(name, activePage);
    makePagination(12, totalPages).on('afterMove', ({ page }) => {
      console.log('Moved', page);
      console.log('Total Pages Pressed', totalPages);

      exercisesList.innerHTML = "";
      getMusclePage(activeFilter, page);
    });

    console.log(name, activePage);

  });
}


function getExercises({ filter, name }) {
  const filterParamMap = {
    'Body parts': 'bodypart',
    'Muscles': 'muscles',
    'Equipment': 'equipment'
  };
  const filterParam = filterParamMap[filter];
  // console.log(filterParam);
  let searchParams = new URLSearchParams({
    muscles: name,
    page: 1,
    limit: 9,
  });
  axios.get(`https://energyflow.b.goit.study/api/exercises?${filterParam}=${name.toLowerCase()}&page=${activePage}&limit${itemsPerPage}`)
    .then(response => {
      let musclesResult = response.data.results;
      console.log(musclesResult);
      // console.log(totalPages, response.data);
      const markup = musclesResult.map(({ bodyPart, burnedCalories, name, _id, target, rating }) => {
        return `<li class="exercises-item-page2" id=${_id}>
            <div class="exercises-card">
              <div class="exercises-card-top">
                <div class="exercises-kind-wrapper">
                  <p class="exercises-card-kind">WORKOUT</p>
                  <div class="exercises-card-rating">
                    <p class="exercises-rating-value">${rating}</p>
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
                <p class="exercises-card-exname">${capitalize(name)}</p>
              </div>
              <ul class="exercises-card-info">
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Burned calories: </span>${burnedCalories}
                </li>
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Body part: </span>${capitalize(bodyPart)}
                </li>
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Target: </span>${capitalize(target)}
                </li>
              </ul>
            </div>
          </li> `;
      })
        .join("");
      exercisesList.innerHTML = "";
      exercisesList.insertAdjacentHTML("beforeend", markup);
    })
    .catch(error => { console.log(error.response.data.message) });
}

function getExercisesPage({ filter, name, page }) {
  const filterParamMap = {
    'Body parts': 'bodypart',
    'Muscles': 'muscles',
    'Equipment': 'equipment'
  };
  const filterParam = filterParamMap[filter];

  axios.get(`https://energyflow.b.goit.study/api/exercises?${filterParam}=${name.toLowerCase()}&page=${page}&limit${itemsPerPage}`)
    .then(response => {
      let musclesResult = response.data.results;
      let { totalPages } = response.data;
      const markup = musclesResult.map(({ name, filter, imgUrl }) => {
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
        .join("");
      exercisesList.innerHTML = "";
      exercisesList.insertAdjacentHTML("beforeend", markup);
    })
    .catch(error => {
      console.error('Error while fetching exercises:', error);
    });
}