import { openOnClick } from './modal-window';

let savedCards;
let parsedCards;

const ref = {
  favoritesList: document.querySelector('.favorites-list'),
  gymInfo: document.querySelector('.gym-info'),
};

window.addEventListener('load', windowLoad);

export const   = parsedData => {
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
        <svg class="card-btn-delete-svg" width="16" height="16" viewBox="0 0 32 32" data-action="delete" data-id="${_id}">
<path data-action="delete" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.6" d="M21.333 8v-1.067c0-1.493 0-2.24-0.291-2.811-0.256-0.502-0.664-0.91-1.165-1.165-0.57-0.291-1.317-0.291-2.811-0.291h-2.133c-1.493 0-2.24 0-2.811 0.291-0.502 0.256-0.91 0.664-1.165 1.165-0.291 0.57-0.291 1.317-0.291 2.811v1.067M13.333 15.333v6.667M18.667 15.333v6.667M4 8h24M25.333 8v14.933c0 2.24 0 3.36-0.436 4.216-0.384 0.753-0.995 1.365-1.748 1.748-0.856 0.436-1.976 0.436-4.216 0.436h-5.867c-2.24 0-3.36 0-4.216-0.436-0.753-0.384-1.365-0.995-1.748-1.748-0.436-0.856-0.436-1.976-0.436-4.216v-14.933"></path>        </svg>
      </button>
      <button class="card-start-button" data-action="start" data-id="${_id}">
         Start
        <svg class="card-arrow-svg" data-action="start" data-id="${_id}"  width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path data-action="start" d="M7.5 14L14 7.5M14 7.5L7.5 1M14 7.5H1" stroke="#1B1B1B" stroke-width="1.3" stroke-linecap="round"
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
    console.log('renderFavorites');
  };
};

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

  const idCardforDelete = event.target.dataset.id;
  // console.log(idCardforDelete);
  const findCard = parsedCards.find(({ _id }) => _id === idCardforDelete);
  // console.log(findCard);
  // console.log(indexOfCard);
  const indexOfCard = parsedCards.indexOf(findCard);
  parsedCards.splice(indexOfCard, 1);
  localStorage.setItem('favorites', JSON.stringify(parsedCards));

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
