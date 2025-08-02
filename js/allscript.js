// ---------------- Scrolling Effect -------------------
let ticking = false;
window.addEventListener("scroll", function () {
  if (!ticking) {
    window.requestAnimationFrame(function () {
      optimizedScrollFn();
      ticking = false;
    });
    ticking = true;
  }
});


// --------------------Nav Bar---------------------------
window.addEventListener('scroll', function () {
        const header = document.getElementById('main-header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });


// ----------------------NavBar-------------------
const toggleButton = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

toggleButton.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Close navbar when any nav link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
  });
});

// ----------------------Home Carousel ------------------------
// Select DOM elements
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const carousel = document.querySelector(".carousel");
const list = document.querySelector(".list");
const items = Array.from(document.querySelectorAll(".item"));
const runningTimeBar = document.querySelector(".carousel .timeRunning");

// Timing configurations
const TIME_RUNNING = 9000; // Animation duration for the transition
const TIME_AUTO_NEXT = 9000; // Auto-slide duration

// Initialize timeout variables
let transitionTimeout;
let autoNextTimeout;

// Create and append the progress bar
const arrowsDiv = document.querySelector(".arrows");
const progressBarContainer = document.createElement("div");
progressBarContainer.className = "progress-bar-container";

const progressBar = document.createElement("div");
progressBar.className = "progress-bar";

progressBarContainer.appendChild(progressBar);
arrowsDiv.appendChild(progressBarContainer);

// Event listeners for navigation buttons
nextBtn.addEventListener("click", () => handleSliderNavigation("next"));
prevBtn.addEventListener("click", () => handleSliderNavigation("prev"));

// Add attribute to each item
items.forEach((item, index) => {
  item.querySelector(".title").setAttribute("data-item", index + 1);
});

// Automatically navigate to the next slide
autoNextTimeout = setTimeout(() => {
  nextBtn.click();
}, TIME_AUTO_NEXT);

// Start the initial running time animation and progress bar
resetAnimation();
afterSlideChange();

// Resets the running time animation
function resetAnimation() {
  runningTimeBar.style.animation = "none"; // Remove current animation
  runningTimeBar.offsetHeight; // Trigger reflow to restart animation
  runningTimeBar.style.animation = `runningTime ${
    TIME_AUTO_NEXT / 1000
  }s linear forwards`; // Restart animation
}

// Handles slider navigation (next/prev)
function handleSliderNavigation(direction) {
  const sliderItems = list.querySelectorAll(".item"); // Get all current items in the list

  if (direction === "next") {
    list.appendChild(sliderItems[0]); // Move the first item to the end of the list
    carousel.classList.add("next"); // Add the "next" class for transition
  } else if (direction === "prev") {
    list.prepend(sliderItems[sliderItems.length - 1]); // Move the last item to the start of the list
    carousel.classList.add("prev"); // Add the "prev" class for transition
  }

  afterSlideChange(); // Log the active slide index
}

// Logs the current active slide's original index
function afterSlideChange() {
  const slideNumberElement = document.querySelector(".slide-number");
  if (slideNumberElement) slideNumberElement.remove();

  const sliderItems = Array.from(list.querySelectorAll(".item")); // Get the current visible order of items
  const activeItem = parseInt(
    sliderItems[1].querySelector(".title").getAttribute("data-item")
  ); // The first visible item is the active one

  const activeIndex =
    activeItem < 10 ? `0${activeItem}` : activeItem.toString();

  const div = document.createElement("div");
  div.classList.add("slide-number");
  div.textContent = `${activeIndex}/${sliderItems.length}`;

  arrowsDiv.appendChild(div);

  console.log(`Current active slide original index: ${activeIndex}`);

  updateProgressBar();
  resetCarouselState();
}

// Updates the progress bar based on the active slide index
function updateProgressBar() {
  const totalSlides = items.length;

  const sliderItems = Array.from(list.querySelectorAll(".item")); // Get the current visible order of items
  const activeItem = parseInt(sliderItems[0].querySelector(".title").getAttribute("data-item")) + 1; // The first visible item is the active one

  const progressPercentage = (activeItem / totalSlides) * 100; // Calculate progress percentage
  progressBar.style.width = `${progressPercentage}%`; // Update the progress bar's width
}

// Resets the carousel state after navigation
function resetCarouselState() {
  // Clear existing timeouts for transitions and auto-slide
  clearTimeout(transitionTimeout);
  clearTimeout(autoNextTimeout);

  // Remove the transition class after the animation duration
  transitionTimeout = setTimeout(() => {
    carousel.classList.remove("next");
    carousel.classList.remove("prev");
  }, TIME_RUNNING);

  // Restart the auto-slide timer
  autoNextTimeout = setTimeout(() => {
    nextBtn.click();
  }, TIME_AUTO_NEXT);

  // Reset the running time bar animation
  resetAnimation();
}

// --------------------Who's This Space for---------------------
jQuery(document).ready(function($) {

  //Count nr. of square classes
  var countSquare = $('.square').length;

  //For each Square found add BG image
  for (i = 0; i < countSquare; i++) {
    var firstImage = $('.square').eq([i]);
    var secondImage = $('.square2').eq([i]);

    var getImage = firstImage.attr('data-image');
    var getImage2 = secondImage.attr('data-image');

    firstImage.css('background-image', 'url(' + getImage + ')');
    secondImage.css('background-image', 'url(' + getImage2 + ')');
  }
});

// ---------------------FAQ----------------------------
let question = document.querySelectorAll(".question");

question.forEach(question => {
  question.addEventListener("click", event => {
    const active = document.querySelector(".question.active");
    if (active && active !== question) {
      active.classList.toggle("active");
      active.nextElementSibling.style.maxHeight = 0;
    }
    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    if (question.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  })
})


// -----------------Slide Panel--------------------
const panels = document.querySelectorAll(".panel")

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses()
    panel.classList.add("active")
  })
})

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active")
  })
}


// -----------------------------to top scroller------------------------------------
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})


// -----------------------------Register  Now Btn------------------------------------
const rbtn = document.querySelector(".register-container");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})

