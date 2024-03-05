document.addEventListener('DOMContentLoaded', function () {
  const openMenuBtn = document.getElementById('open-mobmenu');
  const closeMenuBtn = document.getElementById('close-mobmenu');
  const mobileMenu = document.querySelector('.mobil-menu');

  openMenuBtn.addEventListener('click', function () {
    mobileMenu.classList.add('is-open');
  });

  closeMenuBtn.addEventListener('click', function () {
    mobileMenu.classList.remove('is-open');
  });
});
