
    let currentSlide = 0;
    const slides = document.querySelectorAll(".swipe-slide");

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) slide.classList.add("active");
      });
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }

    // Swipe support for mobile
    let startX;
    document.querySelector(".swipe-container").addEventListener("touchstart", e => {
      startX = e.touches[0].clientX;
    });
    document.querySelector(".swipe-container").addEventListener("touchend", e => {
      let endX = e.changedTouches[0].clientX;
      if (startX - endX > 50) nextSlide();
      if (endX - startX > 50) prevSlide();
    });


//swipe//
  const carousel = document.querySelector('#autoCarousel');
  let touchStartX = 0;
  let touchEndX = 0;

  carousel.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
  });

  carousel.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchEndX < touchStartX) {
      bootstrap.Carousel.getInstance(carousel).next();
    }
    if (touchEndX > touchStartX) {
      bootstrap.Carousel.getInstance(carousel).prev();
    }
  });


// small interaction: focus input
document.querySelector('.subscribe-input').addEventListener('keydown', (e)=>{
if(e.key === 'Enter'){
e.preventDefault();
alert('Thanks for subscribing! (demo)');
}
});