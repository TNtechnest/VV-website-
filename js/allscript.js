document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".faq-question");
  const viewMoreBtn = document.getElementById("viewMore");
  const viewLessBtn = document.getElementById("viewLess");
  const hiddenFaqs = document.querySelectorAll(".faq-item.hidden");

  let index = 0;
  const batchSize = 3; // Show 3 questions at a time

  // Toggle FAQ answers and rotate arrow
  questions.forEach((button) => {
    button.addEventListener("click", function () {
      let answer = this.nextElementSibling;
      let arrow = this.querySelector(".arrow");

      if (answer.style.display === "block") {
        answer.style.display = "none";
        arrow.style.transform = "rotate(0deg)";
      } else {
        answer.style.display = "block";
        arrow.style.transform = "rotate(180deg)";
      }
    });
  });

  // Show next batch of 3 FAQs
  viewMoreBtn.addEventListener("click", function () {
    for (let i = index; i < index + batchSize && i < hiddenFaqs.length; i++) {
      hiddenFaqs[i].style.display = "block";
    }
    index += batchSize;

    if (index >= hiddenFaqs.length) {
      viewMoreBtn.style.display = "none";
      viewLessBtn.style.display = "inline-block";
    }
  });

  // Hide extra FAQs
  viewLessBtn.addEventListener("click", function () {
    hiddenFaqs.forEach((faq) => (faq.style.display = "none"));
    index = 0;
    viewMoreBtn.style.display = "inline-block";
    viewLessBtn.style.display = "none";
  });
});


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
