const fromAPI = [
    {
      "_id": "64f389465ae26083f39b17a2",
      "bodyPart": "waist",
      "equipment": "body weight",
      "gifUrl": "https://ftp.goit.study/img/power-pulse/gifs/0001.gif",
      "name": "3/4 sit-up",
      "target": "abs",
      "description": "This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks.",
      "rating": 3.18,
      "burnedCalories": 220,
      "time": 3,
      "popularity": 7640
  }
  ,
    {
      "_id": "64f389465ae26083f39b17a5",
      "bodyPart": "waist",
      "equipment": "body weight",
      "gifUrl": "https://ftp.goit.study/img/power-pulse/gifs/0006.gif",
      "name": "alternate heel touchers",
      "target": "abs",
      "description": "This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks.",
      "rating": 4,
      "burnedCalories": 116,
      "time": 3,
      "popularity": 4452
  }
  ,
    {
      "_id": "64f389465ae26083f39b19a3",
      "bodyPart": "waist",
      "equipment": "body weight",
      "gifUrl": "https://ftp.goit.study/img/power-pulse/gifs/0620.gif",
      "name": "lying leg raise flat bench",
      "target": "abs",
      "description": "This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks.",
      "rating": 3,
      "burnedCalories": 279,
      "time": 3,
      "popularity": 0
    },
    {
      "_id": "64f389465ae26083f39b188a",
      "bodyPart": "waist",
      "equipment": "body weight",
      "gifUrl": "https://ftp.goit.study/img/power-pulse/gifs/0282.gif",
      "name": "decline sit-up",
      "target": "abs",
      "description": "This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks.",
      "rating": 3,
      "burnedCalories": 150,
      "time": 3,
      "popularity": 1
    },
    {
      "_id": "64f389465ae26083f39b193d",
      "bodyPart": "waist",
      "equipment": "body weight",
      "gifUrl": "https://ftp.goit.study/img/power-pulse/gifs/0475.gif",
      "name": "hanging straight leg raise",
      "target": "abs",
      "description": "This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks.",
      "rating": 3,
      "burnedCalories": 342,
      "time": 3,
      "popularity": 2
    },
    {
      "_id": "64f389465ae26083f39b1937",
      "bodyPart": "waist",
      "equipment": "body weight",
      "gifUrl": "https://ftp.goit.study/img/power-pulse/gifs/0467.gif",
      "name": "gorilla chin",
      "target": "abs",
      "description": "This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks.",
      "rating": 4,
      "burnedCalories": 105,
      "time": 3,
      "popularity": 92
    },
    {
      "_id": "64f389465ae26083f39b1a3c",
      "bodyPart": "waist",
      "equipment": "body weight",
      "gifUrl": "https://ftp.goit.study/img/power-pulse/gifs/0870.gif",
      "name": "butt-ups",
      "target": "abs",
      "description": "This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks.",
      "rating": 3,
      "burnedCalories": 226,
      "time": 3,
      "popularity": 0
    },
    {
      "_id": "64f389465ae26083f39b193b",
      "bodyPart": "waist",
      "equipment": "body weight",
      "gifUrl": "https://ftp.goit.study/img/power-pulse/gifs/0473.gif",
      "name": "hanging pike",
      "target": "abs",
      "description": "This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks.",
      "rating": 3,
      "burnedCalories": 209,
      "time": 3,
      "popularity": 0
    },
    {
      "_id": "64f389465ae26083f39b1943",
      "bodyPart": "waist",
      "equipment": "body weight",
      "gifUrl": "https://ftp.goit.study/img/power-pulse/gifs/0491.gif",
      "name": "incline leg hip raise (leg straight)",
      "target": "abs",
      "description": "This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks.",
      "rating": 3,
      "burnedCalories": 73,
      "time": 3,
      "popularity": 4
    },
    {
      "_id": "64f389465ae26083f39b1925",
      "bodyPart": "waist",
      "equipment": "body weight",
      "gifUrl": "https://ftp.goit.study/img/power-pulse/gifs/0443.gif",
      "name": "elbow-to-knee",
      "target": "abs",
      "description": "This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks.",
      "rating": 3,
      "burnedCalories": 325,
      "time": 3,
      "popularity": 0
    }
];
const KEY_FAVORITE = "favorite";
const oldArr = JSON.stringify(fromAPI);
const newArr = JSON.parse(oldArr);
localStorage.setItem(KEY_FAVORITE, oldArr);



const favoritList = document.querySelector(".favorite-list");
favoritList.addEventListener("click", onClick);
const btnPages = document.querySelector(".list-pages");
btnPages.addEventListener("click",controlPages)
const emptyArr = document.querySelector(".empty-favorite");
const pages = document.querySelector(".list-pages")

// const KEY_FAVORITE = "favorite";
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