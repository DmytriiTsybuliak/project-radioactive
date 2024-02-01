import icons from '../img/fav_list/symbol-defs.svg'
import { capitalize } from './capitalize_word';
import { assignModal } from './pop_up_exercise';
const favoritList = document.querySelector(".exercises-list");
favoritList.addEventListener("click", onClick);
const btnPages = document.querySelector(".list-pages");
btnPages.addEventListener("click", controlPages)
const emptyArr = document.querySelector(".empty-favorite");
const pages = document.querySelector(".list-pages")
window.addEventListener('resize', onMobileScrin)
const btnFirst = document.querySelector(".first-page");
const btnSecond = document.querySelector(".second-page");
const btnThird = document.querySelector(".third-page");

const KEY_FAVORITE = "favorite";
const favoriteArr = JSON.parse(localStorage.getItem(KEY_FAVORITE)) ?? [];

const firstPage = favoriteArr.slice(0, 8);
const secondPage = favoriteArr.slice(8, 16);
const thirdPage = favoriteArr.slice(16, 26);

function onMobileScrin() {
    const width = window.innerWidth;

    if (width < 768 && favoriteArr.length >= 8) {
        createMarkup(firstPage)
        controlPageValue()
        btnFirst.classList.add("current-page");
        return
    } else {
        createMarkup(favoriteArr)
        pages.style.display = 'none'
        return
    }
};

onMobileScrin();


function createMarkup(arr) {
    if (!favoriteArr.length) {
        favoritList.innerHTML = "";
        emptyArr.style.display = 'flex'
        pages.style.display = 'none'
    } else {
        const markup = arr.map(({ _id, bodyPart, name, target, burnedCalories, time }) => `<li data-id="${_id}" class="favopite-item">
            <div class="card-elements-top">
            <svg class="workaut-img" width="76" height="26">
                <use href="${icons}#icon-Badge"></use></svg>
                <button class="btn-delete-favorite"><svg  width="14" height="14">
                <use class="delete-favorite" href="${icons}#icon-delete"></use></svg></button>
                <button class ="exercises-start-button" id=${_id}>Start
                <svg class="exercises-start-icon" width="14" height="14">
                <use href="${icons}#icon-start"></use></svg>
                </button>
            </div>
            <div class="card-elements">
            <svg class="svg-name" width="24" height="24"><use href="${icons}#icon-runMan"></use></svg>
            <H2 class="name-from-api">${capitalize(name)}</H2>
            </div>
            <ul class="card-elements-botton">
                <li class="elements-botton-item"><h3 class="elements-botton-style">Burned calories:</h3>
                <p class="botton-style-fromAPI">${burnedCalories}</p>
                <span class="botton-style-fromAPI">&nbsp/&nbsp</span>
                <p class="botton-style-fromAPI">${time} min</p></li>
                <li class="elements-botton-item"><h3 class="elements-botton-style">Body part:</h3>
                <p class="botton-style-fromAPI">${capitalize(bodyPart)}</p></li>
                <li class="elements-botton-item"><h3 class="elements-botton-style">Target:</h3>
                <p class="botton-style-fromAPI">${capitalize(target)}</p></li>
            </ul>    
        </li>
        `).join("");
        favoritList.innerHTML = markup;
        assignModal("Delete");
    }
};


function onClick(evt) {
    evt.preventDefault();

    if (evt.target.classList.contains("delete-favorite")) {
        const { id } = evt.target.closest('.favopite-item').dataset;
        const elements = findElements(String(id));
        const deleteArr = deleteElements(elements)
        localStorage.setItem(KEY_FAVORITE, JSON.stringify(deleteArr));
        createMarkup(favoriteArr)
        controlPageValue()
        btnFirst.classList.add("current-page");
        btnSecond.classList.remove("current-page");
        btnThird.classList.remove("current-page");

    }
};


function deleteElements(elements) {
    const newFavoritArr = favoriteArr.splice(elements, 1)
    return favoriteArr
};


function findElements(idElements) {
    return favoriteArr.findIndex(({ _id }) => _id === idElements)
};


function controlPages(evt) {
    evt.preventDefault();
    if (evt.target.classList.contains("page")) {
        const clickPage = evt.target.dataset.id;
        if (clickPage === "1") {
            createMarkup(firstPage);
            btnFirst.classList.add("current-page");
            btnSecond.classList.remove("current-page");
            btnThird.classList.remove("current-page");
            controlPageValue()
            return
        } else if (clickPage === "2") {
            if (favoriteArr.length >= 8) {
                createMarkup(secondPage)
                controlPageValue()
                btnSecond.classList.add("current-page");
                btnFirst.classList.remove("current-page");
                btnThird.classList.remove("current-page");
                return
            } else { createMarkup(firstPage) }
            return
        } else if (clickPage === "3") {
            if (favoriteArr.length > 16) {
                createMarkup(thirdPage);
                controlPageValue()
                btnSecond.classList.remove("current-page");
                btnFirst.classList.remove("current-page");
                btnThird.classList.add("current-page");

            } else {
                createMarkup(secondPage)
            }
        }
    }
};


function controlPageValue() {
    if (favoriteArr.length <= 8) {
        btnFirst.style.display = 'none'
        btnSecond.style.display = 'none'
        btnThird.style.display = 'none'
    } else if (favoriteArr.length > 8 && favoriteArr.length <= 16) {
        btnThird.style.display = 'none'
        btnSecond.style.display = 'flex'
    } else if (favoriteArr.length > 16) {
        btnSecond.style.display = 'flex'
        btnThird.style.display = 'flex'
    }
}
