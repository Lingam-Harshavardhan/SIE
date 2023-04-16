/* Function to toggle the navbar on mobile view */
function myFunction() {
    var x = document.getElementById("myNavbar");
    var menuIcon = document.getElementById("menuIcon");
    if (x.className === "navbar") {
      x.className += " responsive";
      menuIcon.className = "icon ion-md-close";
    } else {
      x.className = "navbar";
      menuIcon.className = "icon ion-md-menu";
    }
  }
  
        // Hamburger menu
$(function() {
  if (typeof jQuery === "undefined") {
      console.log("jQuery is not loaded");
  } else {
      console.log("jQuery is loaded");
      $(".toggle").on("click", function() {
          if ($(".menu").hasClass("active")) {
              $(".menu").removeClass("active");
              $(this).find("a").html("<ion-icon name='menu'></ion-icon>");
          } else {
              $(".menu").addClass("active");
              $(this).find("a").html("<ion-icon name='close'></ion-icon>");
          }
      });
  }
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



