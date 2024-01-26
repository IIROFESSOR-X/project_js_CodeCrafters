function onChangedBtn() {
    const btnFavorites = document.querySelector(".header-btn-favorites");
    const btnContainer = document.querySelector(".header-nav");
    const btnHome = document.querySelector(".header-btn-home");

    btnFavorites.addEventListener("mouseover", () => {
        btnContainer.style.border = "1px solid rgba(95, 101, 96, 0.2)";
    });
    btnFavorites.addEventListener("mouseout", () => {
        btnContainer.style.border = "";
    });
    btnFavorites.addEventListener("click", () => {
        btnFavorites.style.background = "#ffffff";
        btnFavorites.style.color = "#1B1B1B";
        btnFavorites.style.padding = "6px 14px 6px 14px";
        btnHome.style.background = "#7E847F";
        btnHome.style.color = "#f6f6f6";
    });
}
onChangedBtn();