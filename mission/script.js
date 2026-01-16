const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const logo = document.getElementById('main-logo');

const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    logo.src = 'images/byui-logo-black.png';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    let theme = 'light';
    if (body.classList.contains('dark-mode')) {
        theme = 'dark';
        logo.src = 'images/byui-logo-black.png';
    } else {
        logo.src = 'images/byui-logo-blue.webp';
    }
    localStorage.setItem('theme', theme);
});