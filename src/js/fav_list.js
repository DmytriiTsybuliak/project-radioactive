


const favoritList = document.querySelector(".favorite-list");
favoritList.addEventListener("click", onClick);
const btnPages = document.querySelector(".list-pages");
btnPages.addEventListener("click",controlPages)
const emptyArr = document.querySelector(".empty-favorite");
const pages = document.querySelector(".list-pages")

const KEY_FAVORITE = "favorite";
const favoriteArr = JSON.parse(localStorage.getItem(KEY_FAVORITE)) ?? [];

const firstPage = favoriteArr.slice(0, 8);
const secondPage = favoriteArr.slice(8, 17);
const thirdPage = favoriteArr.slice(17, 26);

createMarkup(favoriteArr)









function createMarkup(arr) {
    if (!favoriteArr.length) {
        favoritList.innerHTML = "";
        emptyArr.style.display = 'flex'
        pages.style.display = 'none'
    } else {
        const markup = arr.map(({ _id, bodyPart, name, target, burnedCalories, time }) => `<li data-id="${_id}" class="favopite-item">
            <div class="card-elements-top">
            <svg class="workaut-img" width="76" height="26">
                <use href="../img/fav_list/symbol-defs.svg#icon-Badge"></use></svg>
                <button class="btn-delete-favorite"><svg  width="14" height="14">
                <use class="delete-favorite" href="../img/fav_list/symbol-defs.svg#icon-delete"></use></svg></button>
                <button class ="start-button">Start
                <svg class="svg-start" width="14" height="14">
                <use href="../img/fav_list/symbol-defs.svg#icon-start"></use></svg>
                </button>
            </div>
            <div class="card-elements">
            <svg class="svg-name" width="24" height="24"><use href="../img/fav_list/symbol-defs.svg#icon-runMan"></use></svg>
            <H2 class="name-from-api">${name}</H2>
            </div>
            <ul class="card-elements-botton">
                <li class="elements-botton-item"><h3 class="elements-botton-style">Burned calories:</h3>
                <p class="botton-style-fromAPI">${burnedCalories}</p>
                <span class="botton-style-fromAPI">/</span>
                <p class="botton-style-fromAPI">${time} min</p></li>
                <li class="elements-botton-item"><h3 class="elements-botton-style">Body part:</h3>
                <p class="botton-style-fromAPI">${bodyPart}</p></li>
                <li class="elements-botton-item"><h3 class="elements-botton-style">Target:</h3>
                <p class="botton-style-fromAPI">${target}</p></li>
            </ul>    
        </li>
        `).join("");
        favoritList.innerHTML = markup;
    }
};






function onClick(evt) {
evt.preventDefault();

    if (evt.target.classList.contains("delete-favorite")) {
        const { id } = evt.target.closest('.favopite-item').dataset;
        const elements = findElements(String(id));
        const deleteArr = deleteElements(elements)
        localStorage.setItem(KEY_FAVORITE, JSON.stringify(deleteArr));
    
        console.log(deleteArr);
        createMarkup(deleteArr)
    
    }
};

function deleteElements(elements) {
    const newFavoritArr = favoriteArr.splice(elements, 1)
    return favoriteArr
};

function findElements(idElements) {
    return favoriteArr.findIndex(({_id})=>_id===idElements)
};


function controlPages(evt) {
    evt.preventDefault();
    // if (evt.target.classList.contains("svg-page")) {
    // const clickPage = evt.target.closest('.page').dataset.id;
    // console.log(clickPage);
    // if (clickPage === "1") {
    //     createMarkup(firstPage);
    // } else if(clickPage === "2") {
    //     createMarkup(secondPage);
    // } else if(clickPage === "3") {
    //     createMarkup(thirdPage);
    // }
    // }
}