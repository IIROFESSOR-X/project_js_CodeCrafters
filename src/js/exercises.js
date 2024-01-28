// ===================exercises
import axios from 'axios';
import { openOnClick } from './modal-window';

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
    exercisesList.innerHTML = `<div class="loader"></div>`;
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
              <svg class="card-rating-svg"  width="16" height="16" viewBox="0 0 14 13" fill="none">
<path d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394
 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601
  8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627
   10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326
    7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989
     5.20389 3.52786L6.04894 0.927052Z" fill="#EEA10C"/>
</svg>            
              <button class="card-start-button" data-id="${_id}">
                Start
                <svg class="card-arrow-svg" data-id="${_id}"  width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M7.5 14L14 7.5M14 7.5L7.5 1M14 7.5H1" stroke="#1B1B1B" stroke-width="1.3" stroke-linecap="round"
                 stroke-linejoin="round"/>
                    </svg>               
               
              </button>
            </div>
            <div class="card-runing-men-wrapper">
            <svg class="card-runing-men-svg"  width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="12" fill="#7E847F"/>
               <path d="M18.8234 8.72544C18.6138 8.47504 18.2403 8.44212 17.9899 8.65092L16.349 10.0294L15.5943
                8.15967C15.5675 8.08949 15.5267 8.03057 15.4799 7.97859C15.3257 7.63549 15.058 7.34091 14.6889
                 7.17023C14.5286 7.09745 14.3631 7.05846 14.1977 7.0394C14.1613 7.02034 14.1283 6.99521 14.0868
                  6.98222L11.199 6.17732C11.037 6.13314 10.8741 6.16173 10.7407 6.2397C10.5821 6.29342 10.4461
                   6.40865 10.3811 6.57587L9.29378 9.37178C9.17594 9.67589 9.3267 10.019 9.63168 10.1386C9.93492
                    10.2564 10.2789 10.1048 10.3976 9.79978L11.316 7.43882L12.6312 7.80444C12.5991 7.85643 12.5645
                     7.90495 12.5385 7.9604L10.8524 11.6149C10.8282 11.6686 10.8152 11.7232 10.7979 11.7787L8.7488
                      15.214L5.31955 16.3611C4.9314 16.6514 4.84909 17.1981 5.13587 17.5862C5.42439 17.9752 5.97282
                       18.0575 6.36011 17.7708L9.86907 16.5621C9.97651 16.4841 10.0545 16.3819 10.1134 16.2719C10.1576
                        16.2251 10.2078 16.1878 10.2416 16.1298L11.4633 14.0816L13.6319 15.9296L11.3116 18.5445C10.9919
                         18.9049 11.024 19.4603 11.3862 19.7791C11.7474 20.1005 12.3011 20.0667 12.6225 19.7046L15.5181
                          16.4426C15.6082 16.342 15.6619 16.2259 15.6983 16.1047C15.7199 16.0388 15.7199 15.9704 15.7251
                           15.9019C15.7251 15.8673 15.7381 15.8361 15.7355 15.804C15.7277 15.5649 15.6307 15.3327 15.4349
                            15.1672L13.4395 13.4656C13.5834 13.3287 13.7055 13.1658 13.7939 12.9743L15.0866 10.1749L15.5007
                             11.2779C15.5181 11.3758 15.551 11.472 15.6203 11.5525C15.6827 11.627 15.7624 11.6764 15.8473
                              11.7111C15.856 11.7154 15.8664 11.7163 15.8768 11.7189C15.9305 11.7379 15.9851 11.7561 16.0414
                               11.7587C16.1081 11.7648 16.1757 11.7561 16.2441 11.7371C16.2459 11.7362 16.2467 11.7362 16.2467
                                11.7362C16.2649 11.7319 16.2831 11.7353 16.3013 11.7275C16.3975 11.6912 16.4711 11.6296 16.5344
                                 11.5577L18.8893 9.55892C19.1397 9.34838 19.034 8.97583 18.8234 8.72544Z" fill="#F6F6F6"/>
               <path d="M15.8448 7.30102C16.7564 7.30102 17.4954 6.56206 17.4954 5.65051C17.4954 4.73896 16.7564 4 15.8448
                4C14.9333 4 14.1943 4.73896 14.1943 5.65051C14.1943 6.56206 14.9333 7.30102 15.8448 7.30102Z" fill="#F6F6F6"/>
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
      getExercisesFromServer(e.target.dataset.type);
      return;
    }

    getCardsFromServer(
      e.target.dataset.type,
      e.target.dataset.card,
      userTextSearch
    );
  }
}

function formatNumericOfPages(cPage, tPage) {
  cPage = Number.parseInt(cPage);
  let leftErrow = `<svg class="page-choice-svg" width="18" height="18" data-card="${filterTypeCads}" data-id="left" data-type="${typeOfFilter}" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M17.17,24a1,1,0,0,1-.71-.29L8.29,15.54a5,5,0,0,1,0-7.08L16.46.29a1,1,0,1,1,1.42,1.42L9.71,9.88a3,3,0,0,0,0,4.24l8.17,8.17a1,1,0,0,1,0,1.42A1,1,0,0,1,17.17,24Z"/></svg>

  `;
  let rightErrow = `<svg class="page-choice-svg" data-id="right" data-type="${typeOfFilter}" data-card="${filterTypeCads}" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M7,24a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l8.17-8.17a3,3,0,0,0,0-4.24L6.29,1.71A1,1,0,0,1,7.71.29l8.17,8.17a5,5,0,0,1,0,7.08L7.71,23.71A1,1,0,0,1,7,24Z"/></svg>
`;
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
          <button class="exercises-pages-button select-pages-ative" data-card="${filterTypeCads}"
           data-number="${i}" data-type="${typeOfFilter}">${i}</button>
        </li>`;
      }
      if (cPage != i) {
        r += `<li>
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
