const navbarToggle = document.querySelector('.navbar-toggle');
	const navbarMenu = document.querySelector('.navbar-menu');
    navbarToggle.addEventListener('click', () => {
	navbarMenu.classList.toggle('is-active');
});
window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 0);
    var menu = document.querySelector(".navbar-menu");
    menu.classList.toggle("scrolled", window.scrollY > 0);
    var logo = document.querySelector(".navbar-logo");
    logo.classList.toggle("scrolled", window.scrollY > 0); 
    var toggle = document.querySelector(".navbar-toggle");
    toggle.classList.toggle("scrolled", window.scrollY > 0);
    var link = document.querySelector(a);
    link.classList.toggle("scrolled", window.scrollY > 0);  
});