//Slide Show
let imageIndex=1;
function plusSlides(n) {
  showSlides(imageIndex += n);
}

function currentSlide(n) {
  showSlides(imageIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("item");
  let dots = document.getElementsByClassName("dot");  
  if (n > slides.length) {imageIndex = 1}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[imageIndex-1].style.display = "block";  
  dots[imageIndex-1].className += " active";
}