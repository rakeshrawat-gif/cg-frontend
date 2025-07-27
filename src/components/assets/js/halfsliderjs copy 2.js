
  // const slides = document.getElementById("slides");
  // const slideText = document.getElementById("slide-text");
  // const pagination = document.getElementById("pagination");
  // const carousel = document.getElementById("carousel");

  // const texts = [
  //   "Welcome to <b>Slide 1</b>",
  //   "Here's <b>Slide 2's</b><br/> information",
  //   "Discover more on Slide 3",
  //   "Discover more on Slide 4"
  // ];

  // let currentIndex = 0;
  // let autoPlayInterval;

  // function updateSlide() {
  //   slides.style.transform = `translateX(-${currentIndex * 100}%)`;

  //   slideText.textContent = texts[currentIndex];
  //   document.getElementById("slide-text").innerHTML = slideText.textContent;
  //   // Fade out text
  // slideText.classList.add('fade-out');

  // // Wait for fade out, then change text and fade in
  // setTimeout(() => {
  //   slideText.textContent = texts[currentIndex];
  //   slideText.classList.remove('fade-out');
  // }, 300); // Less than the 500ms transition to avoid visual delay
  //   updateDots();
  // }

  // function nextSlide() {
  //   currentIndex = (currentIndex + 1) % texts.length;
  //   updateSlide();
  // }

  // function prevSlide() {
  //   currentIndex = (currentIndex - 1 + texts.length) % texts.length;
  //   updateSlide();
  // }

  // function goToSlide(index) {
  //   currentIndex = index;
  //   updateSlide();
  // }

  // function createDots() {
  //   texts.forEach((_, index) => {
  //     const dot = document.createElement("div");
  //     dot.classList.add("dot");
  //     dot.addEventListener("click", () => {
  //       goToSlide(index);
  //       resetAutoplay();
  //     });
  //     pagination.appendChild(dot);
  //   });
  //   updateDots();
  // }

  // function updateDots() {
  //   const dots = document.querySelectorAll(".dot");
  //   dots.forEach((dot, index) => {
  //     dot.classList.toggle("active", index === currentIndex);
  //   });
  // }

  // // function startAutoplay() {
  // //   autoPlayInterval = setInterval(nextSlide, 4000);
  // // }

  // // function stopAutoplay() {
  // //   clearInterval(autoPlayInterval);
  // // }

  // // function resetAutoplay() {
  // //   stopAutoplay();
  // //   startAutoplay();
  // // }

  // // Drag functionality
  // let isDragging = false;
  // let startPos = 0;
  // let currentTranslate = 0;
  // let prevTranslate = 0;
  // let animationID;

  // carousel.addEventListener('mousedown', dragStart);
  // carousel.addEventListener('mouseup', dragEnd);
  // carousel.addEventListener('mouseleave', dragEnd);
  // carousel.addEventListener('mousemove', dragAction);

  // function dragStart(e) {
  //   isDragging = true;
  //   startPos = e.clientX;
  //   stopAutoplay();
  //   carousel.style.cursor = 'grabbing';
  // }

  // function dragEnd(e) {
  //   if (!isDragging) return;
  //   isDragging = false;
  //   const movedBy = e.clientX - startPos;

  //   if (movedBy < -50) nextSlide();
  //   else if (movedBy > 50) prevSlide();
  //   else updateSlide();

  //   carousel.style.cursor = 'grab';
  //   resetAutoplay();
  // }

  // function dragAction(e) {
  //   if (!isDragging) return;
  //   const currentPosition = e.clientX;
  //   const diff = currentPosition - startPos;
  //   slides.style.transform = `translateX(-${currentIndex * 100 - (diff / carousel.offsetWidth) * 100}%)`;
  // }

  // // Initialize everything
  // createDots();
  // updateSlide();
  // // startAutoplay();



const slides = document.getElementById("slides");
const slideText = document.getElementById("slide-text");
const pagination = document.getElementById("pagination");
const carousel = document.getElementById("carousel");

const texts = [
  "Discover what’s<br/> <b>within</b>",
  "<b>Precision</b> isn’t just<br/> for machines",
  "Where tomorrow’s<br/> <b>science</b> meets<br/> <b>timeless wisdom</b>",
  "Age <b>better</b>.<br/> Live <b>fuller</b>.<br/> Stay <b>sharper</b>."
];

let currentIndex = 0;
let autoPlayInterval = null;

function updateSlide() {
  slides.style.transition = "transform 0.5s ease";
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  slideText.innerHTML = texts[currentIndex];

  // Fade out/in animation
  slideText.classList.add('fade-out');
  setTimeout(() => {
    slideText.innerHTML = texts[currentIndex];
    slideText.classList.remove('fade-out');
  }, 300);

  updateDots();
}
 function nextSlide() {
    currentIndex = (currentIndex + 1) % texts.length;
    updateSlide();
  }

function prevSlide() {
    currentIndex = (currentIndex - 1 + texts.length) % texts.length;
    updateSlide();
  }

function goToSlide(index) {
  currentIndex = index;
  updateSlide();
    resetAutoplay(); // Uncomment if you want autoplay to reset on dot click
}

function createDots() {
  texts.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.addEventListener("click", () => {
      goToSlide(index);
      resetAutoplay();
    });
    pagination.appendChild(dot);
  });
  updateDots();
}

function updateDots() {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

// Drag functionality
let isDragging = false;
let startPos = 0;

carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mouseup', dragEnd);
carousel.addEventListener('mouseleave', dragEnd);
carousel.addEventListener('mousemove', dragAction);

function dragStart(e) {
  isDragging = true;
  startPos = e.clientX;
  carousel.style.cursor = 'grabbing';
}

function dragEnd(e) {
  if (!isDragging) return;
  isDragging = false;
  const movedBy = e.clientX - startPos;

  if (movedBy < -50 && currentIndex < texts.length - 1) {
    currentIndex++;
  } else if (movedBy > 50 && currentIndex > 0) {
    currentIndex--;
  }

  updateSlide();
  carousel.style.cursor = 'grab';
}

function dragAction(e) {
  if (!isDragging) return;
  const currentPosition = e.clientX;
  const diff = currentPosition - startPos;
  slides.style.transition = "none";
  slides.style.transform = `translateX(-${currentIndex * 100 - (diff / carousel.offsetWidth) * 100}%)`;
}

 function startAutoplay() {
    autoPlayInterval = setInterval(nextSlide, 4000);
  }

  function stopAutoplay() {
    clearInterval(autoPlayInterval);
  }

  function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

// Initialize slider
createDots();
updateSlide();
startAutoplay();
