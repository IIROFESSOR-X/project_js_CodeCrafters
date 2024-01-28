import axios from 'axios';
const quoteText = document.querySelector('.quote-text');
const quoteAuthor = document.querySelector('.quote-author');

const getQuote = async () => {
  try {
    const response = await axios.get(
      'https://energyflow.b.goit.study/api/quote'
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

const saveQuoteToLocalStorage = (quote, author) => {
  const quoteInformation = {
    quote: quote,
    author: author,
    date: new Date().toDateString(),
  };
  localStorage.setItem('quote-data', JSON.stringify(quoteInformation));
};

const getQuoteFromLocalStorage = () => {
  const storedQuoteInformation = localStorage.getItem('quote-data');
  if (storedQuoteInformation) {
    const { date, quote, author } = JSON.parse(storedQuoteInformation);
    if (date === new Date().toDateString()) {
      setQuote(quote, author);
      return;
    }
  }
  fetchQuote();
};

const setQuote = (quote, author) => {
  quoteText.textContent = quote;
  quoteAuthor.textContent = author;
};

const fetchQuote = async () => {
  const quoteData = await getQuote();
  setQuote(quoteData.quote, quoteData.author);
  saveQuoteToLocalStorage(quoteData.quote, quoteData.author);
};

getQuoteFromLocalStorage();
