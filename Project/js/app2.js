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


$(function(){
    $(".toggle").on("click", function(){
      if($(".menu").hasClass("active")){
        $(".menu").removeClass("active")
        $(this).find("a").html("<ion-icon name='menu'></ion-icon>");
      }else{
        $(".menu").addClass("active");
        $(this).find("a").html("<ion-icon name='close'></ion-icon>");
      }
    });
  });


 

