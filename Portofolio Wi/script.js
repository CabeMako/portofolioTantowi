const menuIcon = document.querySelector('#menu=icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onCilck = () => {
    navLinks.classList.toggle('active');
}