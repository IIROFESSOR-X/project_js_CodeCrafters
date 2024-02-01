import { openOnClick } from './modal-window';
import icons from '../img/symbol-defs.svg';
let savedCards;
let parsedCards;
let currentPageFavorite = 1;
const ref = {
  favoritesList: document.querySelector('.favorites-list'),
  gymInfo: document.querySelector('.gym-info'),
  modalBtnFavorites: document.querySelector('.modal-button-favorites'),
};

window.addEventListener('load', windowLoad);

export const renderFavorites = parsedData => {
  if (document.body.clientWidth <= 768 && parsedCards.length > 0)
    parsedData = makePaginationOfCards();
  if (ref.favoritesList) {
    const favoritesCardString = parsedData.reduce(
      (html, { _id, name: names, burnedCalories, time, bodyPart, target }) => {
        return (
          html +
          `<li class="exer-card-item">
  <div class="exer-card-background">
    <div class="card-workout-wrapper">
      <p class="exer-workout-text">WORKOUT</p>
      <button class="card-btn-delete" data-action="delete" data-id="${_id}" aria-label="remove an exercise from your favorites">
        <svg class="card-btn-delete-svg" width="16" height="16" data-action="delete" data-id="${_id}">
          <use xlink:href="${icons}#icon-trash" data-action="delete" data-id="${_id}"></use>
        </svg>
      </button>
      <button class="card-start-button" data-action="start" data-id="${_id}">
        Start
        <svg class="card-arrow-svg" width="14" height="14" data-action="start" data-id="${_id}">
          <use
            xlink:href="${icons}#icon-arrow" data-action="start"
            data-id="${_id}"
          ></use>
        </svg>
      </button>
    </div>
    <div class="card-runing-men-wrapper">
      <svg class="card-runing-men-svg" width="24" height="24">
        <use xlink:href="${icons}#icon-running-men"></use>
      </svg>
      <span class="card-name-traning">${names} </span>
    </div>
    <p class="card-burned-calories-text">
      Burned calories:
      <span class="card-burned-calories-span"
        >${burnedCalories} / ${time} min</span
      >
    </p>

    <p class="card-body-part-text">
      Body part:
      <span class="card-burned-calories-span">${bodyPart}</span>
    </p>
    <p class="card-target-text">
      Target:
      <span class="card-burned-calories-span">${target}</span>
    </p>
  </div>
</li>`
        );
      },
      ''
    );

    ref.favoritesList.innerHTML = favoritesCardString;
  }
};

function parsingCards() {
  savedCards = localStorage.getItem('favorites');
  try {
    parsedCards = JSON.parse(savedCards);
    if (!parsedCards) parsedCards = [];
  } catch (error) {
    console.log(error);
    parsedCards = [];
  }
}

function onDeleteBtnClick(event) {
  if (event.target.dataset.action !== 'delete') {
    return;
  }
  parsingCards();
  const idCardforDelete = event.target.dataset.id;

  const filtredCards = parsedCards.filter(({ _id }) => _id !== idCardforDelete);

  localStorage.setItem('favorites', JSON.stringify(filtredCards));
  parsingCards();
  if (!parsedCards.length) {
    ref.gymInfo.classList.remove('is-hidden');
  }
  containerForPages.innerHTML = ``;
  renderFavorites(parsedCards);
}

function onStartBtnClick(event) {
  if (event.target.dataset.action !== 'start') {
    return;
  }
  const idCardforStart = event.target.dataset.id;

  if (idCardforStart) {
    openOnClick(idCardforStart);
  }
}
const containerForPages = document.querySelector(`.container-for-pagination`);
function windowLoad() {
  parsingCards();
  if (parsedCards.length && ref.gymInfo) {
    ref.gymInfo.classList.add('is-hidden');
    renderFavorites(parsedCards);
    containerForPages.addEventListener(`click`, userChangePage);
    ref.favoritesList.addEventListener('click', onDeleteBtnClick);
    ref.favoritesList.addEventListener('click', onStartBtnClick);
  } else if (ref.gymInfo) {
    ref.gymInfo.classList.remove('is-hidden');
    ref.favoritesList.removeEventListener('click', onDeleteBtnClick);
    ref.favoritesList.removeEventListener('click', onStartBtnClick);
  }
}

// containerForPages.addEventListener(`click`, userChangePage);
const scroltoSection = document.querySelector(`.exercises-section-fv`);
function userChangePage(e) {
  if (e.target.dataset.number) {
    let numberPage = e.target.dataset.number;

    if (numberPage === currentPageFavorite) return;
    currentPageFavorite = numberPage;
  }

  if (e.target.dataset) {
    if (e.target.dataset.id == `left`) {
      currentPageFavorite = 1;
    } else {
      currentPageFavorite = Math.ceil(parsedCards.length / 8);
    }
  }
  parsingCards();
  renderFavorites(parsedCards);
}

const makePaginationOfCards = () => {
  let totalPages = parsedCards.length;
  if (totalPages < 1) return;
  let index = currentPageFavorite * 8;

  containerForPages.innerHTML = formatNumericOfPages(
    currentPageFavorite,
    Math.ceil(totalPages / 8)
  );

  scroltoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  return parsedCards.slice(index - 8, index);
};

function formatNumericOfPages(cPage, tPage) {
  cPage = Number.parseInt(cPage);

  let leftErrow = `<li data-id="left"><svg  class="page-choice-svg"  width="18"  height="18"    data-id="left"  
                      xmlns="http://www.w3.org/2000/svg"  id="Outline"  viewBox="0 0 24 24"  width="512"  height="512">  <path    d="M17.17,24a1,1,0,0,1-.71-.29L8.29,15.54a5,5,0,0,1,0-7.08L16.46.29a1,1,0,1,1,1.42,1.42L9.71,9.88a3,3,0,0,0,0,4.24l8.17,8.17a1,1,0,0,1,0,1.42A1,1,0,0,1,17.17,24Z"
                      />
                    </svg> </li>`;
  let rightErrow = `<li data-id="right"><svg class="page-choice-svg" data-id="right"   xmlns="http://www.w3.org/2000/svg" id="Outline"
                        viewBox="0 0 24 24" width="512" height="512"><path d="M7,24a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l8.17-8.17a3,3,0,0,0,0-4.24L6.29,1.71A1,1,0,0,1,7.71.29l8.17,8.17a5,5,0,0,1,0,7.08L7.71,23.71A1,1,0,0,1,7,24Z" /></svg></li> `;
  let start = 0,
    resultHtml = ``,
    end = 0;

  if (tPage < 6) {
    start = 1;
    end = tPage + 1;
    return addNumeric(start, end);
  }
  if (tPage > 5 && cPage > 0 && cPage < 4) {
    end = 5 + 1;
    resultHtml = addNumeric(start + 1, end) + rightErrow;
    return resultHtml;
  }

  if (cPage > 3 && cPage + 2 < tPage) {
    start = cPage - 2;
    end = cPage + 3;

    return leftErrow + addNumeric(start, end) + rightErrow;
  }
  if (tPage <= cPage + 2) {
    tPage == cPage + 2
      ? (start = cPage - 2)
      : tPage - cPage == 1
      ? (start = cPage - 3)
      : (start = cPage - 4);
    return leftErrow + addNumeric(start, tPage + 1);
  }
  function addNumeric(s, e) {
    let r = ``;
    for (let i = s; i < e; i++) {
      if (cPage == i) {
        r += `<li>
          <button class="exercises-pages-button select-pages-ative" 
           data-number="${i}" >${i}</button>
        </li>`;
      }
      if (cPage != i) {
        r += `<li>
          <button class="exercises-pages-button" 
           data-number="${i}" >${i}</button>
        </li>`;
      }
    }
    return r;
  }
}
