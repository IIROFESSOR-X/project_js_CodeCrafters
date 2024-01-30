import { openOnClick } from './modal-window';
import  icons  from '../img/symbol-defs.svg';
let savedCards;
let parsedCards;
const ref = {
  favoritesList: document.querySelector('.favorites-list'),
  gymInfo: document.querySelector('.gym-info'),
  modalBtnFavorites: document.querySelector('.modal-button-favorites'),
};

window.addEventListener('load', windowLoad);

export const renderFavorites = parsedData => {
  if (ref.favoritesList) {
    const favoritesCardString = parsedData.reduce(
      (
        html,
        { _id, name: names, burnedCalories, time, bodyPart, target }
      ) => {
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
  };
}

function parsingCards() {
  savedCards = localStorage.getItem('favorites');
  try {
    parsedCards = JSON.parse(savedCards);
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
  // console.log(idCardforDelete);
  const filtredCards = parsedCards.filter(({ _id }) => _id !== idCardforDelete);
  // console.log(filtredCards);
  localStorage.setItem('favorites', JSON.stringify(filtredCards));
  parsingCards();
  if (!parsedCards.length) {
    ref.gymInfo.classList.remove('is-hidden');
  }
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

function windowLoad() {
  parsingCards();
  if (parsedCards.length && ref.gymInfo ) {
    ref.gymInfo.classList.add('is-hidden');
    renderFavorites(parsedCards);
    ref.favoritesList.addEventListener('click', onDeleteBtnClick);
    ref.favoritesList.addEventListener('click', onStartBtnClick);
  } else if (ref.gymInfo) {
    ref.gymInfo.classList.remove('is-hidden');
    ref.favoritesList.removeEventListener('click', onDeleteBtnClick);
    ref.favoritesList.removeEventListener('click', onStartBtnClick);
  }
}


