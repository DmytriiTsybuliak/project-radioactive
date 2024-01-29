import axios from 'axios';
const exercisesList = document.querySelector('.exercises-list');
// const exercisesFilterButton = document.querySelector('.exercises-filter-button');
// const exercisesInput = document.querySelector('.exercises-input-wrapper');
// const exercisesContainer = document.querySelector('.exercises-container');
const pagination = document.querySelector('.exercises-bottom-buttons');

const createRequest = async () => {
  let searchParams = new URLSearchParams({
    page: 1,
    limit: 12,
  });
  try {
    await axios.get(`https://energyflow.b.goit.study/api/filters?filter=Muscles&${searchParams}`)
      .then(response => {
        let musclesResult = response.data.results;
        let { totalPages } = response.data;
        const markup = musclesResult.map(({ name, filter, imgUrl }) => {
          return `<li>
            <div class="exercises-item"
            style="background:
            linear-gradient(0deg,rgba(16, 16, 16, 0.7) 0%, rgba(16, 16, 16, 0.7) 100%),
            url(${imgUrl}),lightgray -16.825px -9.156px / 128.765% 116.922% no-repeat; 
            background-size: cover;">
            <p class="exercises-item-name">${name}</p>
            <p class="exercises-item-subname">${filter}</p>
            </div>
          </li>`;
        })
          .join("");
        exercisesList.insertAdjacentHTML("beforeend", markup);

        //Adding Pagination
        let markupPagination = "";
        for (let index = 0; index < totalPages; index++) {
          markupPagination += `<button class="exercises-page-button" type="button">${index + 1}</button> \n`;
        }
        console.log(markupPagination);
        pagination.insertAdjacentHTML("beforeend", markupPagination);

      })
      .catch(error => { console.log(error.response.data.message) });
  } catch (error) {
    console.error('Error:', error);
    alert('Something went wrong, try again');
  }
}

createRequest();