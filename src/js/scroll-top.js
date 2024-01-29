export { scrollingTop}

function scrollingTop() {
    const upButton = document.querySelector(".scroll-top-btn");
    window.addEventListener('scroll', function () {
    if (window.scrollY > 700) {
        upButton.classList.add('show');
    } else if (window.scrollY < 700){
        upButton.classList.remove('show');
    }
    });    
    upButton.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
}

scrollingTop();


