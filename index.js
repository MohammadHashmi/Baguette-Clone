
// When the hamburger menu is clicked, this function runs thus toggling the menu
function toggleMenu() {
  let navLinks = document.querySelector('.nav-links')
  let centerText = document.querySelector('.center-text')
  navLinks.classList.toggle('show')
  centerText.classList.toggle('show')
}

// Create sa function that shows the slides in slideshow
let slideIndex = 0;

document.addEventListener("DOMContentLoaded", function showSlides() {

  // Creates an array of all the slides
  let slides = document.getElementsByClassName("slide") 

  for (i = 0; i < slides.length; i++) {
    slides.item(i).style.display = 'none'
  }

  // Iterates through the numbers of slides
  slideIndex++;

  // Makes sure slideIndex doesn't equal a value that doesn't exist
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides.item([slideIndex - 1]).style.display = 'flex';
  setTimeout(showSlides, 2000);
}
)
//document.addEventListener("DOMContentLoaded", showSlides);