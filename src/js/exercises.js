// ===================exercises
import axios from 'axios';

const exercisesTitle = document.querySelector(`.exercises-title-span`);
const exercisesList = document.querySelector(`.exercises-list`);
const exercisesListPages = document.querySelector(`.exercises-list-pages`);
exercisesListPages.addEventListener(`click`, showsExercisesPages);
exercisesList.addEventListener(`click`, makeTypeOfTrainingCards);
const formCard = document.querySelector(`.exercises-form`);
formCard.addEventListener(`submit`, searchCardsByKeyWord);
const buttonList = document.querySelector(`.exercises-button-list`);
let currentPage = 1,
  perPage = 8,
  typeOfFilter = `Muscles`,
  filterTypeCads = ``,
  userTextSearch = ``;
// document.body.clientWidth >= 768 ? (perPage = 12) : (perPage = 8);
const filterButton = document.querySelectorAll(`.exercises-button`);
[...filterButton].map((b, i) => {
  if (i === 0) b.classList.add(`exercises-button-active`);
  b.addEventListener(`click`, filterExercises);
});
// =-======================================================
async function searchImageOnServer(
  getType,
  filter,
  currentPages,
  perPages,
  filterType,
  keyWord
) {
  // ===================

  // =====================
  let params = {};
  if (filterType && filter == `Body parts`) filter = `Body part`;
  filterType
    ? (params[filter.toLowerCase().replace(` `, ``)] = filterType)
    : (params.filter = filter);

  params.page = currentPages;
  params.limit = perPages;
  if (keyWord) params.keyword = keyWord;
  if (document.body.clientWidth >= 1440 && filterType) params.limit = 9;
  if (document.body.clientWidth >= 768 && !filterType) params.limit = 12;
  if (document.body.clientWidth >= 768 && filterType) params.limit = 8;

  // ========================
  let parameters = new URLSearchParams(params).toString();

  try {
    const response = await axios.get(
      `https://energyflow.b.goit.study/api/${getType}?${parameters}`
    );

    if (keyWord && response.data.results.length == 0) {
      createMessagNoResult();
      return;
    }
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
function createMessagNoResult() {
  exercisesList.innerHTML = `<div class="no-results-wrapper">
  <p class="no-results-message">
    Unfortunately, <span class="no-results-messag-span">no results</span> no
    results were found. You may want to consider other search options to find
    the exercise you are looking for. Our range is wide and you have the
    opportunity to find more options that suit your needs.
  </p>
</div>`;
  exercisesListPages.innerHTML = ``;
}

filterExercises();
function filterExercises(e) {
  exercisesList.innerHTML = `<div class="loader"></div>`;
  buttonList.classList.remove(`form-is-open`);
  formCard.classList.add(`form-is-hiden`);
  filterTypeCads = ``;
  exercisesTitle.innerHTML = ``;
  currentPage = 1;
  if (e) {
    const button = e.target;
    if (button.classList.contains(`exercises-button-active`)) return;
    typeOfFilter = button.dataset.name;
    document
      .querySelector(`.exercises-button-active`)
      .classList.remove(`exercises-button-active`);
    button.classList.add(`exercises-button-active`);
  }
  getExercisesFromServer(typeOfFilter);
}
async function getExercisesFromServer(typeOfFilter) {
  const list = await searchImageOnServer(
    `filters`,
    typeOfFilter,
    currentPage,
    perPage
  )
    .then(response => response)
    .catch(error => console.log(error));
  renderExercises(list.results, list.totalPages);
}

function renderExercises(arrow, totalPages) {
  if (arrow[0]._id) {
    let listCodeCards = arrow.reduce(
      (
        acum,
        { _id, rating, name: names, burnedCalories, time, bodyPart, target }
      ) => {
        return (acum += `<li class="exer-card-item">
          <div class="exer-card-background">
            <div class="card-workout-wrapper">
              <p class="exer-workout-text">WORKOUT</p>
              <p class="exer-card-rating">${rating}</p>
              <svg class="card-rating-svg" width="16" height="16">
                <use href="../img/symbol-defs.svg#icon-star"></use>
              </svg>
              <button class="card-start-button" data-id="${_id}">
                Start
                <svg class="card-arrow-svg" width="14" height="14" data-id="${_id}">
                  <use href="./img/symbol-defs.svg#icon-arrow" data-id="${_id}"></use>
                </svg>
              </button>
            </div>
            <div class="card-runing-men-wrapper">
              <svg class="card-runing-men-svg" width="24" height="24">
                <use href="../img/symbol-defs.svg#icon-running-men"></use>
              </svg>
              <span class="card-name-traning">${names}
            </span></div>
            <p class="card-burned-calories-text">Burned calories:
            <span class="card-burned-calories-span">${burnedCalories} / ${time} min</span>
            </p>
            
            <p class="card-body-part-text">Body part:
               <span class="card-burned-calories-span">${bodyPart}</span>
            </p>
            <p class="card-target-text">Target:
              <span class="card-burned-calories-span">${target}</span>
            </p>

          </div>
        </li>`);
      },
      ``
    );
    exercisesList.innerHTML = listCodeCards;
  }
  if (!arrow[0]._id) {
    let listCode = arrow.reduce(
      (list, { filter, imgUrl, name: nameMusculs }) => {
        formCard.dataset.filter = filter;
        return (list += `<li class="exercises-item" data-type="${nameMusculs}" style="background-image: linear-gradient(
      0deg,
      rgba(16, 16, 16, 0.7) 0%,
      rgba(16, 16, 16, 0.7) 100%
    ),url(${imgUrl}); ">
          <p class="exercises-item-text" data-type="${nameMusculs}">${nameMusculs}</p>
          <p class="exercises-item-text-second" data-type="${nameMusculs}">${filter}</p>
        </li>`);
      },
      ``
    );
    exercisesList.innerHTML = listCode;
  }

  if (
    !exercisesListPages.textContent ||
    typeOfFilter !==
      document.querySelector(`.exercises-pages-button`).dataset.type ||
    formCard.dataset.status
  ) {
    formCard.dataset.status = ``;
    addNumberOfPages();
  }

  //   ======================================
  function addNumberOfPages() {
    formCard.dataset.status = ``;
    let numberOfPages = ``;
    for (let i = 1; i < totalPages + 1; i++) {
      numberOfPages += `<li>
          <button class="exercises-pages-button" data-card="${filterTypeCads}" data-number="${i}" data-type="${typeOfFilter}">${i}</button>
        </li>`;
    }
    exercisesListPages.innerHTML = numberOfPages;
    document
      .querySelector(`.exercises-pages-button`)
      .classList.add(`select-pages-ative`);
  }
  //   ========================================================================
}
function showsExercisesPages(e) {
  if (e.target.dataset.type) {
    if (currentPage == e.target.dataset.number) return;
    const pageNumber = document.querySelector(`.select-pages-ative`);
    pageNumber.classList.remove(`select-pages-ative`);
    e.target.classList.add(`select-pages-ative`);
    currentPage = e.target.dataset.number;
    if (filterTypeCads == ``) {
      getExercisesFromServer(e.target.dataset.type);
      return;
    }
    console.log(userTextSearch);
    getCardsFromServer(
      e.target.dataset.type,
      e.target.dataset.card,
      userTextSearch
    );
  }
}
// ==================================================================
function makeTypeOfTrainingCards(e) {
  if (e.target.dataset.type) {
    exercisesList.innerHTML = `<div class="loader"></div>`;
    let filter = document.querySelector(`.exercises-button-active`).dataset
      .name;
    if (filter === `Body parts`) filter = `Body part`;
    filterTypeCads = e.target.dataset.type;
    currentPage = 1;
    formCard.classList.remove(`form-is-hiden`);

    exercisesListPages.innerHTML = ``;
    buttonList.classList.add(`form-is-open`);

    exercisesTitle.innerHTML = `<span class="exer-title-slash">/</span> ${filterTypeCads
      .slice(0, 1)
      .toUpperCase()}${filterTypeCads.slice(1)}`;

    getCardsFromServer(filter, filterTypeCads);
  }

  if (e.target.dataset.id) {
    // =========================call modal window
  }
}
async function getCardsFromServer(filter, filterType, keytext = ``) {
  try {
    const answer = await searchImageOnServer(
      `exercises`,
      filter,
      currentPage,
      perPage,
      filterType,
      keytext
    );
    if (answer) renderExercises(answer.results, answer.totalPages);
  } catch (error) {
    console.log(error);
  }
}
function searchCardsByKeyWord(e) {
  e.preventDefault();
  userTextSearch = e.target.elements.usertext.value.trim();
  if (userTextSearch.length !== 0) {
    const filter = e.target.dataset.filter;
    e.target.dataset.status = `ok`;
    formCard.reset();
    getCardsFromServer(filter, filterTypeCads, userTextSearch);
  }
}

// =-======================exercises
function addsNumberOfPages(totalPages) {
  formCard.dataset.status = ``;
  let numberOfPages = ``;
  if (totalPages > 5) {
  }
  for (let i = 1; i < totalPages + 1; i++) {
    numberOfPages += `<li>
          <button class="exercises-pages-button" data-card="${filterTypeCads}" data-number="${i}" data-type="${typeOfFilter}">${i}</button>
        </li>`;
  }
  exercisesListPages.innerHTML = numberOfPages;
  document
    .querySelector(`.exercises-pages-button`)
    .classList.add(`select-pages-ative`);
}
