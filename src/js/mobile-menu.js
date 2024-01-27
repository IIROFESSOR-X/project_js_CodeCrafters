const refs = {
  mobileMenu: document.querySelector('[data-mobile-menu]'),
  mobileMenuBtnClose: document.querySelector('[data-mobile-menu-close]'),
  mobileMenuBtnOpen: document.querySelector('[data-modal-open]'),
};

if (refs.mobileMenu.classList.contains('is-hidden')) {
  refs.mobileMenuBtnOpen.addEventListener('click', onMobileMenuBtnOpenClick);
}

function onMobileMenuBtnOpenClick() {
  refs.mobileMenu.classList.remove('is-hidden');
  refs.mobileMenuBtnClose.addEventListener('click', onMobileMenuBtnCloseClick);
  refs.mobileMenuBtnOpen.removeEventListener('click', onMobileMenuBtnOpenClick);
}

function onMobileMenuBtnCloseClick() {
  refs.mobileMenu.classList.add('is-hidden');
  refs.mobileMenuBtnClose.removeEventListener(
    'click',
    onMobileMenuBtnCloseClick
  );
  refs.mobileMenuBtnOpen.addEventListener('click', onMobileMenuBtnOpenClick);
}
