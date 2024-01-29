let savedCards = localStorage.getItem('favorites');
let parsedCards;

const ref = {
  favoritesList: document.querySelector('.favorites-list'),
  gymInfo: document.querySelector('.gym-info'),
};

window.addEventListener('load', windowLoad);
ref.favoritesList.addEventListener('click', onDeleteBtnClick);

function parsingCards() {
  try {
    parsedCards = JSON.parse(savedCards);
  } catch (error) {
    console.log(error);
    parsedCards = [];
  }
  return parsedCards;
}

function onDeleteBtnClick(event) {
  if (
    event.target.nodeName !== 'BUTTON' ||
    event.target.dataset.action !== 'delete'
  ) {
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
  renderFavorites();
  // console.log('renderFavorites');
}

function windowLoad() {
  parsingCards();
  if (parsedCards.length) {
    ref.gymInfo.classList.add('is-hidden');
    renderFavorites();
  } else {
    ref.gymInfo.classList.remove('is-hidden');
  }
}

function renderFavorites() {
  const favoritesCardString = parsedCards.reduce(
    (
      html,
      { _id, rating, name: names, burnedCalories, time, bodyPart, target }
    ) => {
      return (
        html +
        `<li class="exer-card-item">
  <div class="exer-card-background">
    <div class="card-workout-wrapper">
      <p class="exer-workout-text">WORKOUT</p>
      <button class="card-btn-delete" data-action="delete" data-id="${_id}">
        <svg class="card-btn-delete-svg" width="16" height="16">
          <use xlink:href="/img/symbol-defs.svg#icon-trash"></use>
        </svg>
      </button>
      <button class="card-start-button" data-id="${_id}">
        Start
        <svg class="card-arrow-svg" width="14" height="14" data-id="${_id}">
          <use
            xlink:href="/img/symbol-defs.svg#icon-arrow"
            data-id="${_id}"
          ></use>
        </svg>
      </button>
    </div>
    <div class="card-runing-men-wrapper">
      <svg class="card-runing-men-svg" width="24" height="24">
        <use xlink:href="/img/symbol-defs.svg#icon-running-men"></use>
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

scrollingTop();
