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

