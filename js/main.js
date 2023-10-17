const toggleBtn = document.querySelector('.navbar_toggleBtn');
const right = document.querySelector('.navbar_right');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');

toggleBtn. addEventListener('click', () => {
    right.classList.toggle('active');
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});
