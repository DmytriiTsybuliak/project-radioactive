import axios from 'axios';
import iziToast from 'izitoast';

const quoteBlock = document.querySelector('.quote-container');
const date = new Date().toLocaleDateString();

async function getQuote() {
  quoteBlock.innerHTML = `
        <span class="loader"></span>
    `;
  try {
    const response = await axios
      .get('https://energyflow.b.goit.study/api/quote')
      .then(response => response.data);
    return response;
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong, try again',
    });
  }
}

function getAndRenderQuote() {
  if (
    localStorage.getItem('quote') &&
    localStorage.getItem('savedDate') === date
  ) {
    //* Рисуем разметку из localStotrage

    const { author, quote } = JSON.parse(localStorage.getItem('quote'));
    quoteBlock.innerHTML = createMarkup(author, quote);
  } else {
    //* Рисуем разметку из backend'a

    getQuote()
      .then(({ author, quote }) => {
        const localStorageQuote = {
          quote,
          author,
        };

        localStorage.setItem('quote', JSON.stringify(localStorageQuote));
        localStorage.setItem('savedDate', date);

        quoteBlock.innerHTML = createMarkup(author, quote);
      })
      .catch(error =>
        iziToast.error({
          title: 'Error',
          message: error.message,
        })
      );
  }
}

function createMarkup(author, quote) {
  return `
            <div class='title-container'>
              <span class='quote-icon_before'></span>
              <h2 class="quote-title">Quote of the day</h2>
              <span class='quote-icon_after'></span>
            </div>

           <div class='text-container'>
              <p class='quote-text'>${quote}</p>
              <p class='quote-author'>${author}</p>
           </div>
      `;
}

getAndRenderQuote();
