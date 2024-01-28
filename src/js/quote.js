import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const quoteContainer = document.querySelector('.quote__backend');
const date = new Date().toLocaleDateString();

// Функція отримання цитати з сервера
async function getQuote() {
    quoteContainer.innerHTML = `
        <span class="loader"></span>
        <span>We're looking a quote for you...</span>
    `;
    try {
        const response = await axios.get('https://energyflow.b.goit.study/api/quote')
        return response.data;
    }
    catch (error) {
        Notify.failure(`Something went wrong, try again`);
    }
}

// Створення розмітки
function createMarkup(author, quote) {
    return `<p class="quote__backend-text">${quote}</p>
            <p class="quote__backend-author">${author}</p>`;
}

// Функція рендерингу цитати
function getAndRenderQuote() {
    if (
        localStorage.getItem('quote') &&
        localStorage.getItem('savedDate') === date)

    //  Розмітка із локального сховища
    {
        const { author, quote } = JSON.parse(localStorage.getItem('quote'));
        quoteContainer.innerHTML = createMarkup(author, quote);
    }

    // Розмітка із бекенду
    else {
        getQuote()
            .then(({ author, quote }) => {
                const localStorageQuote = {
                    author,
                    quote
                };

                localStorage.setItem('quote', JSON.stringify(localStorageQuote));
                localStorage.setItem('savedDate', date);
                quoteContainer.innerHTML = createMarkup(author, quote);
            })
            .catch(error => Notify.failure(error.message));
    }

}

getAndRenderQuote();