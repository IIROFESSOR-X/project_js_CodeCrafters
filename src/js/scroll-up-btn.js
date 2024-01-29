export { scrollingTop };

function scrollingTop() {
  document.body.insertAdjacentHTML(
    'beforeend',
    `<button class="scroll-top-btn">
      <svg class="scroll-top-icon" width="15" height="15">
        <use href="./img/icons.svg#icon-arrow-top"></use>
      </svg>
    </button>
    `
  );
  const upButton = document.querySelector('.scroll-top-btn');
  const scrollHeight = document.documentElement.clientHeight;

  window.addEventListener('scroll', () => {
    if (window.scrollY > scrollHeight) {
      upButton.classList.add('show');
    } else if (window.scrollY < scrollHeight) {
      upButton.classList.remove('show');
    }
  });
  upButton.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}

scrollingTop();
// document.addEventListener('DOMContentLoaded', function () {
//   // Отримуємо посилання на кнопку
//   let scrollToTopBtn = document.querySelector('.scroll-up-btn');

//   // Додаємо подію click на кнопку
//   scrollToTopBtn.addEventListener('click', scrollToTop);

//   // Перевірка прокрутки сторінки
//   // window.onscroll = function () {
//   //   showScrollButton();
//   // };

//   // function showScrollButton() {
//   //   // Показати або приховати кнопку в залежності від положення прокрутки
//   //   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//   //     scrollToTopBtn.style.display = 'block';
//   //   } else {
//   //     scrollToTopBtn.style.display = 'none';
//   //   }
//   // }

//   function scrollToTop() {
//     // Анімовано прокрутити сторінку на початок
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     });
//   }
// });
