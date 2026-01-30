const menuButton = document.querySelector('.menu-btn');
const navMenu = document.querySelector('nav');

menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('hide');
    menuButton.classList.toggle('change');
});