// ===================exercises
import axios from 'axios';
import { openOnClick } from './modal-window';
import { scrollingTop } from './scroll-up-btn';
// ===
import exerIcons from '../img/symbol-defs.svg';
const exercisesTitle = document.querySelector(`.exercises-title-span`);
const exercisesList = document.querySelector(`.exercises-list`);
const exercisesListPages = document.querySelector(`.exercises-list-pages`);
exercisesListPages.addEventListener(`click`, showsExercisesPages);
exercisesList.addEventListener(`click`, makeTypeOfTrainingCards);
const formCard = document.querySelector(`.exercises-form`);
formCard.addEventListener(`submit`, searchCardsByKeyWord);
formCard.addEventListener(`input`, validatorForUserSearchText);
const buttonList = document.querySelector(`.exercises-button-list`);
const resetFormTextButton = document.querySelector(`.form-reset-text-button`);
resetFormTextButton.addEventListener(`click`, e => {
  formCard.reset();
  resetFormTextButton.classList.add(`reset-button-close`);
});
let currentPage = 1,
  perPage = 8,
  typeOfFilter = `Muscles`,
  filterTypeCads = ``,
  userTextSearch = ``,
  totalPageAvailable = 0;

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

  if (document.body.clientWidth >= 768 && !filterType) params.limit = 12;
  if (document.body.clientWidth <= 768 && filterType) params.limit = 8;
  if (document.body.clientWidth >= 1440 && filterType) params.limit = 9;

  // ========================
  let parameters = new URLSearchParams(params).toString();

  try {
    const response = await axios.get(
      `https://energyflow.b.goit.study/api/${getType}?${parameters}`
    );

    totalPageAvailable = response.data.totalPages;
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
  buttonList.classList.remove(`form-is-open`);
  formCard.classList.add(`form-is-hiden`);
  filterTypeCads = ``;
  exercisesTitle.innerHTML = ``;
  currentPage = 1;
  if (e) {
    const button = e.target;

    // if (button.classList.contains(`exercises-button-active`)) return;
    exercisesList.innerHTML = `<div class="loder-container" ><div class="loader"></div></div>`;
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
                       <use href="${exerIcons}#icon-star"></use>
                </svg>            
              <button class="card-start-button" data-id="${_id}">
                Start
                <svg class="card-arrow-svg" width="16" height="16" data-id="${_id}">
                     <use href="${exerIcons}#icon-arrow" data-id="${_id}"></use>
                </svg>               
               
              </button>
            </div>
            <div class="card-runing-men-wrapper">
            <svg class="card-runing-men-svg" width="24" height="24">
                 <use href="${exerIcons}#icon-running-men"></use>
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
    exercisesList.classList.add(`card-row-gap-js`);
    exercisesList.innerHTML = listCodeCards;

    addNumberOfPages();
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
    formCard.dataset.status = '';
    exercisesList.classList.remove(`card-row-gap-js`);
    exercisesList.innerHTML = listCode;
    addNumberOfPages(arrow.filter);
  }

  //   ======================================
  function addNumberOfPages(filter) {
    formCard.dataset.status = ``;

    exercisesListPages.innerHTML = formatNumericOfPages(
      currentPage,
      totalPages,
      filter
    );
  }
  //   ========================================================================
}
function showsExercisesPages(e) {
  const data = e.target.dataset;

  if (e.target.dataset.type || data.id) {
    if (currentPage == e.target.dataset.number) return;
    currentPage = e.target.dataset.number;
    if (data.id) {
      currentPage = totalPageAvailable;
      if (data.id == `left`) currentPage = 1;
    }
    document
      .querySelector(`.exercises-section`)
      .scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (filterTypeCads == ``) {
      exercisesList.innerHTML = `<div class="loder-container" ><div class="loader"></div></div>`;
      getExercisesFromServer(e.target.dataset.type);
      return;
    }
    exercisesList.innerHTML = `<div class="loder-container-card" ><div class="loader"></div></div>`;
    getCardsFromServer(
      e.target.dataset.type,
      e.target.dataset.card,
      userTextSearch
    );
  }
}

function formatNumericOfPages(cPage, tPage) {
  cPage = Number.parseInt(cPage);
  let leftErrow = `<li data-id="left"><svg  class="page-choice-svg"  width="18"  height="18"  data-card="${filterTypeCads}"  data-id="left"  data-type="${typeOfFilter}"
                      xmlns="http://www.w3.org/2000/svg"  id="Outline"  viewBox="0 0 24 24"  width="512"  height="512">  <path    d="M17.17,24a1,1,0,0,1-.71-.29L8.29,15.54a5,5,0,0,1,0-7.08L16.46.29a1,1,0,1,1,1.42,1.42L9.71,9.88a3,3,0,0,0,0,4.24l8.17,8.17a1,1,0,0,1,0,1.42A1,1,0,0,1,17.17,24Z"
                      />
                    </svg></li> `;
  let rightErrow = `<li data-id="right"><svg class="page-choice-svg" data-id="right" data-type="${typeOfFilter}" data-card="${filterTypeCads}" xmlns="http://www.w3.org/2000/svg" id="Outline"
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
        r += `<li data-type="${typeOfFilter} data-number="${i}">
          <button class="exercises-pages-button select-pages-ative" data-card="${filterTypeCads}"
           data-number="${i}" data-type="${typeOfFilter}">${i}</button>
        </li>`;
      }
      if (cPage != i) {
        r += `<li data-type="${typeOfFilter}" data-number="${i}">
          <button class="exercises-pages-button" data-card="${filterTypeCads}"
           data-number="${i}" data-type="${typeOfFilter}">${i}</button>
        </li>`;
      }
    }
    return r;
  }
}
// ==================================================================
function makeTypeOfTrainingCards(e) {
  if (e.target.dataset.type) {
    exercisesList.innerHTML = `<div class="loder-container-card" ><div class="loader"></div></div>`;
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
    openOnClick(e.target.dataset.id);
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
function validatorForUserSearchText(e) {
  const text = e.target.value;
  if (text.length > 2) {
    resetFormTextButton.classList.remove(`reset-button-close`);
  } else {
    resetFormTextButton.classList.add(`reset-button-close`);
  }
}
scrollingTop();
