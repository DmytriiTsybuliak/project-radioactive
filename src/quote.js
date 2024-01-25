import 'modern-normalize';
import './css/quote.css';
import axios from 'axios';

const quoteBlock = document.querySelector('.quote-container');

async function getQuote() {
  quoteBlock.innerHTML = `
        <span class="loader"></span>
        <span>We're looking a quote for you...</span>
    `;
  try {
    const response = await axios
      .get('https://energyflow.b.goit.study/api/quote')
      .then(response => response.data);
    return response;
  } catch (error) {
    console.log('Something went wrong');
  }
}

function getAndRender() {
  const date = new Date();
  localStorage.setItem('savedDate', date.toLocaleDateString());
  const savedDate = localStorage.getItem('savedDate');

  if (savedDate !== date.toLocaleDateString()) {
    return;
  } else {
    getQuote()
      .then(({ author, quote }) => {
        const localStorageQuote = {
          quote,
          author,
        };
        localStorage.setItem('quote', JSON.stringify(localStorageQuote));

        quoteBlock.innerHTML = createMarkup(author, quote);
      })
      .catch(console.error);
  }
}

getAndRender();

function createMarkup(author, quote) {
  return `
            <h2>Quote of the day</h2>
            <p><span>${quote}</span></p>
            <p>${author}</p>
      `;
}
