let activeFilter = 'Body parts';
let activeCategory = 'Body parts';
let activePage = 1;
const itemsPerPage = 12;

const filterParams = {
    filter: activeFilter,
    category: activeCategory,
    keyword: '',
};


function startExercises(keyword) {
    const filterParamMap = {
        'Body parts': 'bodypart',
        'Muscles': 'muscles',
        'Equipment': 'equipment'
    };

    const filter = filterParams.filter
    const name = filterParams.category

    console.log("startExercises", filter, name)

    const filterParam = filterParamMap[filter];

    fetch(`${apiUrl}/exercises?${filterParam}=${name}&keyword=${keyword}&page=1&limit=${itemsPerPage}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error');
            }
            return response.json();
        })
        .then(data => {
            makePagination(12, data.totalPages).on(
                'afterMove',
                ({ page }) => {
                    startExercisesPage(keyword, page)
                });


            handleExerciseData(data);
        })
        .catch(error => {
            console.error('Sorry, is not found', error);
        });
}

function startExercisesPage(keyword, page = 1) {
    const filterParamMap = {
        'Body parts': 'bodypart',
        'Muscles': 'muscles',
        'Equipment': 'equipment'
    };

    const filter = filterParams.filter
    const name = filterParams.category

    console.log(filter, name)

    const filterParam = filterParamMap[filter];

    fetch(`${apiUrl}/exercises?${filterParam}=${name}&keyword=${keyword}&page=${page}&limit=${itemsPerPage}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error');
            }
            return response.json();
        })
        .then(data => {
            handleExerciseData(data);
        })
        .catch(error => {
            console.error('Sorry, is not found', error);
        });
}
searchInput.addEventListener('focus', function () {
    iconSearch.style.display = 'none';
    iconX.style.display = 'block';
});
searchInput.addEventListener('blur', function () {
    iconSearch.style.display = 'block';
    iconX.style.display = 'none';
    searchInput.value = '';
});

export function getExercises({ filter, name }) {
    const filterParamMap = {
        'Body parts': 'bodypart',
        'Muscles': 'muscles',
        'Equipment': 'equipment'
    };
    const filterParam = filterParamMap[filter];

    filterParams.filter = filter
    filterParams.category = name

    clearSearchInput()

    fetch(`${apiUrl}/exercises?${filterParam}=${name.toLowerCase()}&page=${activePage}&limit=12`)
        .then(response => response.json())
        .then(data => {

            makePagination(12, data.totalPages).on(
                'afterMove',
                ({ page }) => {
                    getExercisesPage({ filter, name, page })
                });

            handleExerciseData(data);
        })
        .catch(error => {
            console.error('Error while fetching exercises:', error);
        });
}


function getExercisesPage({ filter, name, page }) {
    const filterParamMap = {
        'Body parts': 'bodypart',
        'Muscles': 'muscles',
        'Equipment': 'equipment'
    };
    const filterParam = filterParamMap[filter];

    fetch(`${apiUrl}/exercises?${filterParam}=${name}&page=${page}&limit=12`)
        .then(response => response.json())
        .then(data => {
            handleExerciseData(data);
        })
        .catch(error => {
            console.error('Error while fetching exercises:', error);
        });
}


async function fetchData(filter, page = 1) {
    try {
        const response = await axios.get(
            `https://your-energy.b.goit.study/api/filters?filter=${filter}&page=${page}&limit=12`
        );
        return response.data; // Повертаємо дані з API
    } catch (error) {
        console.error('Помилка отримання даних: ', error);
        return null;
    }
}

fetchData('Body parts').then(data => {
    if (!data) {
        alert("We're sorry, but you've reached the end of search results.");
        retutn;
    }
    gallery.insertAdjacentHTML('beforeend', createMarcup(data.results));
    assignCardsClick()

    makePagination(12, data.totalPages).on('afterMove', ({ page }) => {

        renderCards(filter, page);
    });
});

const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', async () => {
        // Видаляємо клас 'current' з усіх кнопок
        filterButtons.forEach(btn => btn.classList.remove('current'));

        // Встановлюємо клас 'current' на натиснуту кнопку
        button.classList.add('current');

        // Отримуємо значення фільтру з тексту кнопки
        const filter = button.textContent.trim();
        const data = await fetchData(filter);

        makePagination(12, data.totalPages).on('afterMove', ({ page }) => {

            renderCards(filter, page);
        });
        if (data) {
            gallery.insertAdjacentHTML('beforeend', createMarcup(data.results));

            assignCardsClick()
        }
    });
});


async function renderCards(filter, page) {
    const data = await fetchData(filter, page);
    if (data) {
        await gallery.insertAdjacentHTML('beforeend', createMarcup(data.results));

        assignCardsClick()

    }
}

function assignCardsClick() {
    setDisplayCards(true)

    const cards = document.querySelectorAll(".filter-category-item")

    for (const card of cards) {
        card.addEventListener("click", function (event) {
            const name = event.currentTarget.dataset.name
            const filter = event.currentTarget.dataset.filter

            setDisplayCards(false)
            getExercises({ filter, name })

            currentExerciseContainer.innerHTML = `<p class="current-exercises"><span class= "slash">/</span>${capitalize(name)}</p>`
        })
    }
}

// import Pagination from "tui-pagination";
// import 'tui-pagination/dist/tui-pagination.css';

// function makePagination(perPage, totalPages) {

//     const paginationEl = document.getElementById('tui-pagination-container');
//     const visiblePages = totalPages < 5 ? totalPages : 5;
//     const options = {
//         totalItems: perPage * totalPages,
//         itemsPerPage: perPage,
//         visiblePages,
//         centerAlign: true,
//     };

//     const pagination = new Pagination(paginationEl, options);

//     if (visiblePages <= 1) {
//         paginationEl.style.display = 'none';
//     } else {
//         paginationEl.style.display = 'block';
//     }

//     return pagination;
// }

// function makePaginationByItems(perPage, totalItems) {
//     const totalPages = totalItems / perPage + 1;


//     const paginationEl = document.getElementById('tui-pagination-container');
//     const visiblePages = totalPages < 5 ? totalPages : 5;
//     const options = {
//         totalItems,
//         itemsPerPage: perPage,
//         visiblePages,
//         centerAlign: true,
//     };

//     const pagination = new Pagination(paginationEl, options);

//     if (visiblePages <= 1) {
//         paginationEl.style.display = 'none';
//     } else {
//         paginationEl.style.display = 'block';
//     }

//     return pagination;
// }




// export { makePagination, makePaginationByItems };