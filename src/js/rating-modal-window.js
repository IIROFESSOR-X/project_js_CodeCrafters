
const ratingButton = document.querySelector('#modal2');
let isFirstModalOpen = false;

ratingButton.addEventListener('click', () => {
  closeFirstModal();
  openSecondModal();
});

export function closeFirstModal() {
  const firstModal = document.querySelector('.container-for-modal');
  if (firstModal) {
    firstModal.remove();
  }
}

function openSecondModal() {
  const secondModalMarkup = `
    <div class="rating-modal-backdrop">
      <div class="rating-modal-window">
        <button type="button" class="close-button rating-modal-close-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M19.8334 8.16666L8.16675 19.8333M8.16675 8.16666L19.8334 19.8333" stroke="#1B1B1B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <p class="paragraph-rating rating-modal-paragraph-rating">Rating</p>
        <div class="rating-container rating-set rating-modal-container">
          <div class="rating-active rating-modal-active"></div>
          <p class="rating-value rating-modal-value">0.0</p>
          <div class="rating_body rating-modal-body">
            <div class="rating_active rating-modal-active"></div>
            <div class="rating-items rating-modal-items">
              <input type="radio" class="rating-item rating-modal-item" name="rating" value="1" />
              <input type="radio" class="rating-item rating-modal-item" name="rating" value="2" />
              <input type="radio" class="rating-item rating-modal-item" name="rating" value="3" />
              <input type="radio" class="rating-item rating-modal-item" name="rating" value="4" />
              <input type="radio" class="rating-item rating-modal-item" name="rating" value="5" />
            </div>
          </div>
        </div>
        <form class="modal-form" name="leave-your-contacts-form">
          <input type="email" id="email-modal" class="input-modal-form input-modal-form-modal" name="email" placeholder="Email" required>
          <textarea name="user-comment" rows="5" cols="5" placeholder="Text input" id="user-comment" class="user-comment user-comment-modal"></textarea>
          <button class="button-modal-rating-send button-modal-rating-send">Send</button>
        </form>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', secondModalMarkup);

  const modalBackdrop = document.querySelector('.rating-modal-backdrop');
  const closeButtons = document.querySelectorAll('.rating-modal-backdrop .rating-modal-close-button');
  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      closeSecondModal();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeSecondModal();
    }
  });

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeSecondModal();
    }
  });

  initRating();
}

function closeSecondModal() {
  const secondModal = document.querySelector('.rating-modal-backdrop');
  if (secondModal) {
    secondModal.remove();
  }
}

function initRating() {
  let ratingActive, ratingValue;

  const rating = document.querySelector('.rating-container.rating-set.rating-modal-container');
  if (rating) {
    initRatingVars(rating);
    setRatingActiveWidth();
    setRating(rating);
  }

  function initRatingVars(rating) {
    ratingActive = rating.querySelector('.rating-active.rating-modal-active');
    ratingValue = rating.querySelector('.rating-value.rating-modal-value');
  }

  function setRatingActiveWidth(index = ratingValue.innerHTML) {
    const ratingActiveWidth = index / 0.05;
    ratingActive.style.width = `${ratingActiveWidth}%`;
  }

  function setRating(rating) {
    const ratingItems = rating.querySelectorAll('.rating-item.rating-modal-item');

    for (let index = 0; index < ratingItems.length; index++) {
      const ratingItem = ratingItems[index];

      ratingItem.addEventListener("mouseenter", function (e) {
        initRatingVars(rating);
        setRatingActiveWidth(ratingItem.value);
      });

      ratingItem.addEventListener("mouseleave", function (e) {
        setRatingActiveWidth();
      });

      ratingItem.addEventListener("click", function (e) {
        initRatingVars(rating);
        const fractionalPart = (e.clientX - ratingItem.getBoundingClientRect().left) / ratingItem.clientWidth;
        const newValue = index + fractionalPart;
        ratingValue.innerHTML = newValue.toFixed(1);
        setRatingActiveWidth(newValue);
      });
    }

    rating.addEventListener("mouseleave", function (e) {
      // rating.classList.remove('interacting');
    });
  }
}
function showToast(message, type = 'error') {
  iziToast.show({
    message: message,
    position: 'topRight',
    timeout: 3000, // Время, в течение которого сообщение будет отображаться (в миллисекундах)
    color: type === 'error' ? 'red' : 'green', // Цвет сообщения
  });
}

const sendButton = document.querySelector('.button-modal-rating-send');
sendButton.addEventListener('click', () => {
  const emailInput = document.getElementById('email-modal');
  const commentInput = document.getElementById('user-comment');
  const ratingValue = parseFloat(document.querySelector('.rating-value').innerText);

  if (emailInput.checkValidity() && commentInput.checkValidity() && ratingValue > 0) {
    const requestData = {
      rate: ratingValue,
      email: emailInput.value,
      review: commentInput.value,
    };

    axios.post(`https://energyflow.b.goit.study/api/exercises/${exerciseId}/rate`, requestData)
      .then((response) => {
        closeSecondModal();
      })
      .catch((error) => {
        console.error(error);
      });
  } else {
    showToast('Please fill in all the required fields.');
  }
});
