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

// sticky btn


// ----------------------NavBar-------------------
const toggleButton = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

toggleButton.addEventListener('click', () => {
  navbar.classList.toggle('active');
});



// ---------------FAQ--------------
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
