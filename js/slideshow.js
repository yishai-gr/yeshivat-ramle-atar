var slideIndex = 1;
showSlides(slideIndex);
var my_timer;
function auto_next() {
  my_timer = setInterval(function () {
    document.getElementsByClassName("next")[0].click();
  }, 4000);
}
auto_next();
// Next/previous controls
function plusSlides(n) {
  clearTimeout(my_timer);
  showSlides((slideIndex += n));
  auto_next();
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
