// Slideshow functionality
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slide');
  const navButtons = document.querySelectorAll('.slideshow-nav-button');
  let currentSlide = 0;
  let slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
  
  // Manual navigation
  navButtons.forEach(button => {
    button.addEventListener('click', function() {
      clearInterval(slideInterval);
      goToSlide(parseInt(this.getAttribute('data-slide')));
      slideInterval = setInterval(nextSlide, 5000);
    });
  });
  
  // Go to specific slide
  function goToSlide(slideIndex) {
    slides[currentSlide].classList.remove('active');
    navButtons[currentSlide].classList.remove('active');
    
    currentSlide = slideIndex;
    
    slides[currentSlide].classList.add('active');
    navButtons[currentSlide].classList.add('active');
  }
  
  // Next slide function
  function nextSlide() {
    let nextSlideIndex = currentSlide + 1;
    if (nextSlideIndex >= slides.length) {
      nextSlideIndex = 0;
    }
    goToSlide(nextSlideIndex);
  }
});

