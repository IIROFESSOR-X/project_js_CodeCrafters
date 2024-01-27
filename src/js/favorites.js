const savedCards = localStorage.getItem('favorites'); 
console.log(savedTheme);

const parsedCards = JSON.parse(savedCards);




function renderFavorites(arrow, totalPages) {
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
                <use xlink:href="/img/symbol-defs.svg#icon-star"></use>
              </svg>
              <button class="card-start-button" data-id="${_id}">
                Start
                <svg class="card-arrow-svg" width="14" height="14" data-id="${_id}">
                  <use xlink:href="/img/symbol-defs.svg#icon-arrow" data-id="${_id}"></use>
                </svg>
              </button>
            </div>
            <div class="card-runing-men-wrapper">
              <svg class="card-runing-men-svg" width="24" height="24">
                <use xlink:href="/img/symbol-defs.svg#icon-running-men"></use>
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
    exercisesList.innerHTML = listCode;
    addNumberOfPages(arrow.filter);
  }

  // if (
  //   !exercisesListPages.textContent ||
  //   typeOfFilter !==
  //     document.querySelector(`.exercises-pages-button`).dataset.type ||
  //   formCard.dataset.status
  // ) {
  //   formCard.dataset.status = ``;
  //   addNumberOfPages();
  // }

  //   ======================================
  function addNumberOfPages(filter) {
    formCard.dataset.status = ``;
    let numberOfPages = ``;
    console.log(currentPage, totalPages);
    exercisesListPages.innerHTML = formatNumericOfPages(
      currentPage,
      totalPages,
      filter
    );
    // for (let i = 1; i < totalPages + 1; i++) {
    //   numberOfPages += `<li>
    //       <button class="exercises-pages-button" data-card="${filterTypeCads}"
    //        data-number="${i}" data-type="${typeOfFilter}">${i}</button>
    //     </li>`;
    // }

    // exercisesListPages.innerHTML = numberOfPages;
    // if (totalPages > 5) formatNumericOfPages(currentPage, totalPages);
    // if ((currentPage = 1))
    //   document
    //     .querySelector(`.exercises-pages-button`)
    //     .classList.add(`select-pages-ative`);
  }
  //   ========================================================================
}