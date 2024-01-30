import axios from 'axios';
import iziToast from 'izitoast';
import { openOnClick, closeModal } from './modal-window';
import "izitoast/dist/css/iziToast.min.css";
let idForOpenModal = '';
let ratingActive;
let ratingValue;

export function startRatingModal(id) {
  idForOpenModal = id;
  document
    .querySelector('.modal-button-rating')
  
.addEventListener('click', e => {
    closeModal();
    openSecondModal();
  });
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
          <p class="rating-value rating-modal-value">0.0</p>
          <div class="rating_body rating-modal-body">
            <div class="rating-active rating-modal-active"></div>
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
  const container = document.querySelector('.container-for-modal');
  container.innerHTML = secondModalMarkup;

  const modalBackdrop = document.querySelector('.rating-modal-backdrop');
  const closeButtons = document.querySelectorAll('.rating-modal-backdrop .rating-modal-close-button');
  closeButtons.forEach((button) => {
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
  tryToSend();
}

function closeSecondModal() {
  const secondModal = document.querySelector('.rating-modal-backdrop');
  if (secondModal) {
    secondModal.remove();
    openOnClick(idForOpenModal)
  }
}

function initRating() {
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

      ratingItem.addEventListener('mouseenter', function (e) {
        initRatingVars(rating);
        setRatingActiveWidth(ratingItem.value);
      });

      ratingItem.addEventListener('mouseleave', function (e) {
        setRatingActiveWidth();
      });

      ratingItem.addEventListener('click', function (e) {
        initRatingVars(rating);
        const fractionalPart =
          (e.clientX - ratingItem.getBoundingClientRect().left) /
          ratingItem.clientWidth;
        const newValue = Math.min(5, index + fractionalPart);;
        ratingValue.innerHTML = newValue.toFixed(1);
        setRatingActiveWidth(newValue);
      });
    }

    rating.addEventListener('mouseleave', function (e) {
      rating.classList.remove('interacting');
    });
  }
}

function tryToSend() {
  const sendButton = document.querySelector('.button-modal-rating-send');
  sendButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const emailInput = document.getElementById('email-modal');
    const commentInput = document.getElementById('user-comment');
    const ratingValue = parseFloat(document.querySelector('.rating-value').innerText);

    if (emailInput.checkValidity() && commentInput.checkValidity() && ratingValue >= 0) {
      let data = {
        rate: ratingValue,
        email: emailInput.value,
        review: commentInput.value,
      };
      try {
        await axios.patch(`https://energyflow.b.goit.study/api/exercises/${idForOpenModal}/rating/`, data);
        closeSecondModal();
      } catch (error) {
        console.error(error.response.data);
        iziToast.error({
          title: 'Error',
          message: 'Failed to submit the rating. Please try again later.',
        });
      }
    } else {
      iziToast.warning({
        title: 'Warning',
        message: 'Please fill in all the required fields.',
      });
    }
  });
}
