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


 //Sticky scroll Effect
 window.addEventListener('scroll', function() {
  var nav = document.querySelector('nav');
  if (window.scrollY > 0) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

/* Script for slider */
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
showSlides(slideIndex += n);
}

function currentSlides(n){
showSlides(slideIndex = n);
}

function showSlides(n){
var i;
var slides = document.getElementsByClassName("slides");
var dots = document.getElementsByClassName("dot");
if(n > slides.length){
slideIndex = 1;
}
if(n < 1){
slideIndex = slides.length;
}
for(i = 0; i < slides.length; i++){
slides[i].style.display = "none";
}
for(i = 0; i < dots.length; i++){
dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
}

// Automatic slideshow
var slideIndex = 0;
showSlidesAuto();

function showSlidesAuto() {
var i;
var slides = document.getElementsByClassName("slides");
var dots = document.getElementsByClassName("dot");
for(i = 0; i < slides.length; i++){
slides[i].style.display = "none";
}
slideIndex++;
if(slideIndex > slides.length){
slideIndex = 1;
}
for(i = 0; i < dots.length; i++){
dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
setTimeout(showSlidesAuto, 3000); // Change image every 3 seconds
}

const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
console.log(entry)
if(entry.isIntersecting){
    entry.target.classList.add('show');
}else{
    entry.target.classList.remove('show');
}

});
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


