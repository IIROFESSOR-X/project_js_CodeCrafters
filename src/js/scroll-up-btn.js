document.addEventListener('DOMContentLoaded', function () {
  // Отримуємо посилання на кнопку
  let scrollToTopBtn = document.querySelector('.scroll-up-btn');

  // Додаємо подію click на кнопку
  scrollToTopBtn.addEventListener('click', scrollToTop);

  // Перевірка прокрутки сторінки
  // window.onscroll = function () {
  //   showScrollButton();
  // };

  // function showScrollButton() {
  //   // Показати або приховати кнопку в залежності від положення прокрутки
  //   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  //     scrollToTopBtn.style.display = 'block';
  //   } else {
  //     scrollToTopBtn.style.display = 'none';
  //   }
  // }

  function scrollToTop() {
    // Анімовано прокрутити сторінку на початок
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
});
