const toggleBtn = document.getElementById("toggle-btn-theme");
const body = document.body;

function toggleTheme() {
  if (toggleBtn.checked) {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
  } else {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
  }
}

function applyTheme() {
  if (window.innerWidth <= 767) {
    const elements = document.querySelectorAll(".header-social-list");
    elements.forEach(element => {
      element.classList.remove("visible");
    });

    const toggleContainer = document.querySelector(".toggle-btn-theme");
    toggleContainer.classList.add("visible");

    const headerSocialItems = document.querySelectorAll(".header-social-item");
    headerSocialItems.forEach(item => {
      if (!item.classList.contains("toggle-container")) {
        item.classList.add("hidden");
      }
    });
  }
}

window.addEventListener("DOMContentLoaded", applyTheme);
toggleBtn.addEventListener("change", toggleTheme);
