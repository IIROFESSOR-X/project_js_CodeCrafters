import axios from "axios";
import { renderFavorites } from './favorites';

const modalWindow = document.querySelector('.container-for-modal');

export const openOnClick = (id) => {
    try {
        const exerciseId = id;

        axios({
            method: 'get',
            url: `https://energyflow.b.goit.study/api/exercises/${exerciseId}`,
        })
        .then((response) => {
            renderModalMarkup(response.data);
            getRatingColoring(response.data.rating);
            checkObjectInLocalStorage(response.data)
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            modalWindow.removeEventListener('click', openOnClick);
            document.addEventListener('click', closeModalOnClick);
            document.addEventListener('keydown', closeModalOnEsc);
        });
    } catch (error) {
        console.error(error);
    }
}

function renderModalMarkup(exercise = {}) {
    const markup = `
        <div class="overlay">
            <div class="modal-window">
                <span class="modal-close-button">x</span>
                <div class="modal-photo">
                    <!-- Photo -->
                    <img src="${exercise.gifUrl}" alt="${exercise.name}">
                </div>
                <!-- Info -->
                <div class="modal-info">
                    <h1 class="modal-title">${exercise.name}</h1>
                    <div class="rating">
                        <!-- Rating -->
                        <p class="rating-text">${exercise.rating}</p>
                        <div class="stars-outer">
                            <div class="stars-inner"></div>
                        </div>
                    </div>
                    <div class="modal-line"></div>
                    <div class="section-info">
                        <p class="item-info">Target<br><b>${exercise.target}</b></p>
                        <p class="item-info">Body Part<br><b>${exercise.bodyPart}</b></p>
                        <p class="item-info">Equipment<br><b>${exercise.equipment}</b></p>
                        <p class="item-info">Popular<br><b>${exercise.popularity}</b></p>
                        <p class="item-info">Burned calories<br><b>${exercise.burnedCalories}/${exercise.time} min</b></p>
                    </div>
                    
                    <div class="modal-line"></div>
                    <p class="modal-text">${exercise.description}</p>
                    <div class="modal-buttons">
                        <button class="modal-button-favorites"><span class="btn-text">Add to favorites</span><span class="heart">&#9825;</span></button>
                        <button class="modal-button-rating" id="modal2">Give a rating</button>
                    </div>
                </div>
            </div>
        </div>`;
    
    modalWindow.innerHTML = markup;
}

function getRatingColoring(exerciseRating) {
    const starPersentage = (exerciseRating / 5) * 100;
    const starPersentageRounded = `${Math.round(starPersentage / 10) * 10}%`;

    document.querySelector('.rating .stars-inner').style.width = starPersentageRounded;
}

// close

function closeModalOnClick(e) {
    if (e.target.classList.contains('modal-close-button')) {
        closeModal();
    } else if (e.target.classList.contains('overlay')) {
        closeModal();
    }
}

function closeModalOnEsc(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
}

function closeModal() {
    modalWindow.innerHTML = '';
    document.removeEventListener('keydown', closeModalOnEsc);
    document.removeEventListener('click', closeModalOnClick);
}

// favorites

function checkObjectInLocalStorage(data) {
    const localStorageData = localStorage.getItem('favorites') || '[]'; 
    const newObject = data;

    let objects;

    try {
        objects = JSON.parse(localStorageData);
    } catch (error) {
        console.log(error);
        objects = [];
    }

    if (!Array.isArray(objects)) {
        objects = [];
    }

    const favoritesBtn = modalWindow.querySelector('.modal-button-favorites');
    const favoritesBtnName = favoritesBtn.querySelector('.btn-text');

    const deleteObj = () => {
        const filteredObjects = objects.filter((obj) => obj._id !== newObject._id);

        localStorage.setItem('favorites', JSON.stringify(filteredObjects));
        favoritesBtnName.textContent = "Add to favorites";
        renderFavorites(objects);

        favoritesBtn.removeEventListener('click', deleteObj);
        favoritesBtn.addEventListener('click', addObj);
    };

    const addObj = () => {
        let isObjectAdded = false;

        if (!isObjectAdded) {
            const foundObject = objects.find((obj) => obj._id === newObject._id);

            if (!foundObject) {
                objects.push(newObject);

                localStorage.setItem('favorites', JSON.stringify(objects));
                favoritesBtnName.textContent = 'Remove from';
                renderFavorites(objects);

                isObjectAdded = true;

                favoritesBtn.removeEventListener('click', addObj);
                favoritesBtn.addEventListener('click', deleteObj);
            } else {
                localStorage.setItem('favorites', JSON.stringify(objects));
                favoritesBtnName.textContent = 'Remove from';
                renderFavorites(objects);

                favoritesBtn.removeEventListener('click', addObj);
                favoritesBtn.addEventListener('click', deleteObj);
            }
        }
    };

    favoritesBtn.removeEventListener('click', deleteObj);
    favoritesBtn.removeEventListener('click', addObj);

    const foundObject = objects.find((obj) => obj._id === newObject._id);

    if (foundObject) {
        favoritesBtn.addEventListener('click', deleteObj);
        favoritesBtnName.textContent = 'Remove from';
    } else {
        favoritesBtn.addEventListener('click', addObj);
        favoritesBtnName.textContent = "Add to favorites";
    }
}