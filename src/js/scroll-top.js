export { scrollingTop}

function scrollingTop() {
    document.body.insertAdjacentHTML("beforeend",
    `<button class="scroll-top-btn">
      <svg class="scroll-top-icon" width="15" height="15">
        <use href="./img/icons.svg#icon-arrow-top"></use>
      </svg>
    </button>
    `)
    const upButton = document.querySelector(".scroll-top-btn");
    const scrollHeight = document.documentElement.clientHeight;

    window.addEventListener("scroll", () => {
    if (window.scrollY > scrollHeight) {
        upButton.classList.add("show");
    } else if (window.scrollY < scrollHeight){
        upButton.classList.remove("show");
    }
    });    
    upButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
}



