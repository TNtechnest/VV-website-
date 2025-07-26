// --------------------Nav Bar---------------------------
window.addEventListener('scroll', function () {
        const header = document.getElementById('main-header');
        if (window.scrollY > 50) {
            header.classList.remove('transparent');
            header.classList.add('scrolled');
        } else {
            header.classList.add('transparent');
            header.classList.remove('scrolled');
        }
    });

    // On page load, make sure the transparent class is applied
    window.addEventListener('load', function () {
        const header = document.getElementById('main-header');
        header.classList.add('transparent');
    });

// -----------------------------Home Swiping Cards------------------------------------


const Cards = ((() => {

  
  window.addEventListener('DOMContentLoaded', () => {setTimeout(init,1)}, true);

  
  function init(e)
  {
    if(document.querySelector(".cards"))
    {
      let cards = document.querySelector(".cards");
      cards.addEventListener('click', clicked, false);
      document.querySelectorAll(".cards .card")[1].click();
    }
  }

  
  function clicked(e)
  {
    let card = e.target;
    if(card.getAttribute("data-card")){rearrange(card.getAttribute("data-card"));}
  }

  
  function rearrange(card)
  {
    let cards = document.querySelectorAll(".cards .card");
    for(let n = 0; n < cards.length; n++)
    {
      cards[n].classList.remove("card--left");
      cards[n].classList.remove("card--center");
      cards[n].classList.remove("card--right");
    }
    cards[card].classList.add("card--center");
    if(card == 0)
    {
      cards[2].classList.add("card--left");
      cards[1].classList.add("card--right");
    }
    if(card == 1)
    {
      cards[0].classList.add("card--left");
      cards[2].classList.add("card--right");
    }
    if(card == 2)
    {
      cards[1].classList.add("card--left");
      cards[0].classList.add("card--right");
    }
  }

  return {
    init
  }
})());


// -----------------------------Tagline---------------------------------------

(function(){
  var words = [
    'Fix a Fishing Net. See How Everything Connects.',
    'Get Hands-Deep in Clay. Get Head-Deep in Ideas.',
    'The Beach is Your Classroom. The Sea, Your Case Study.'
  ], i = 0;
  setInterval(function(){
    $('#changingword').fadeOut(function(){
      $(this).html(words[i=(i+1)%words.length]).fadeIn();
    });
  }, 14000); 
})();

// --------------Second Tagline---------------------------------------

let placeholder = document.getElementById("text");

let words = ["What Holds a Net Together Holds a System Together Too.", "Journey Through Villages. Design The Future.", "Learn from tides, people, and places."];

let index = 0;
function type(word){
    let i = 0;
    let writing = setInterval(()=>{
        placeholder.innerHTML += word.charAt(i);
        i ++;
        if(i>=word.length){
            clearInterval(writing);
            setTimeout(erase, 8000);
        }
    }, 75)

}

function erase(){
    let deleting = setInterval(() => {
        placeholder.innerHTML = placeholder.innerHTML.slice(0,-1);
        if(placeholder.innerHTML.length <= 0){
            clearInterval(deleting);
            index++;
						if(index>=words.length){
                index = 0;
            }
            type(words[index])
        }
    
        
    }, 25);

}

type(words[index]);


// -----------------------------to top scroller------------------------------------
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})




// ----------------------------------review slider---------------------------------------
// var swiper = new Swiper(".review-slider", {
//     loop:true, 
//     grabCursor:true,
//     spaceBetween: 20,
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     breakpoints: {
//         0: {
//           slidesPerView: 1,
//         },
//         640: {
//           slidesPerView: 2,
//         },
//         768: {
//           slidesPerView: 3,
//         },
//     },
// });

// var swiper = new Swiper(".blogs-slider", {
//     loop:true, 
//     grabCursor:true,
//     spaceBetween: 10,
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     breakpoints: {
//         0: {
//           slidesPerView: 1,
//         },
//         768: {
//           slidesPerView: 2,
//         },
//         991: {
//           slidesPerView: 3,
//         },
//     },
// });

// var swiper = new Swiper(".clients-slider", {
//     loop:true, 
//     grabCursor:true,
//     spaceBetween: 20,
//     breakpoints: {
//         0: {
//           slidesPerView: 1,
//         },
//         640: {
//           slidesPerView: 2,
//         },
//         768: {
//           slidesPerView: 3,
//         },
//         1024: {
//           slidesPerView: 4,
//         },
//     },
// });






// ----------------------------------products homepage js-------------------------------------------

// var bg = document.querySelector('.item-bg');
// var items = document.querySelectorAll('.news__item');
// var item = document.querySelector('.news__item');

// function cLog(content) {
//     console.log(content)
// }

// if($(window).width() > 800) {
//     $(document).on("mouseover", ".news__item", function (_event, _element) {

//         var newsItem = document.querySelectorAll('.news__item');
//         newsItem.forEach(function (element, index) {
//             element.addEventListener('mouseover', function () {
//                 var x = this.getBoundingClientRect().left;
//                 var y = this.getBoundingClientRect().top;
//                 var width = this.getBoundingClientRect().width;
//                 var height = this.getBoundingClientRect().height;

//                 $('.item-bg').addClass('active');
//                 $('.news__item').removeClass('active');
//                 // $('.news__item').removeClass('active');


//                 bg.style.width = width + 'px';
//                 bg.style.height = height + 'px';
//                 bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
//             });

//             element.addEventListener('mouseleave', function () {
//                 $('.item-bg').removeClass('active');
//                 $('.news__item').removeClass('active');
//             });

//         });

//     });
// }


// var swiper = new Swiper('.news-slider', {
//     effect: 'coverflow',
//     grabCursor: true,
//     loop: true,
//     centeredSlides: true,
//     keyboard: true,
//     spaceBetween: 0,
//     slidesPerView: 'auto',
//     speed: 300,
//     coverflowEffect: {
//         rotate: 0,
//         stretch: 0,
//         depth: 0,
//         modifier: 3,
//         slideShadows: false
//     },
//     breakpoints: {
//         480: {
//             spaceBetween: 0,
//             centeredSlides: true
//         }
//     },
//     simulateTouch: true,
//     navigation: {
//         nextEl: '.news-slider-next',
//         prevEl: '.news-slider-prev'
//     },
//     pagination: {
//         el: '.news-slider__pagination',
//         clickable: true
//     },
//     on: {
//         init: function () {
//             var activeItem = document.querySelector('.swiper-slide-active');

//             var sliderItem = activeItem.querySelector('.news__item');

//             $('.swiper-slide-active .news__item').addClass('active');

//             var x = sliderItem.getBoundingClientRect().left;
//             var y = sliderItem.getBoundingClientRect().top;
//             var width = sliderItem.getBoundingClientRect().width;
//             var height = sliderItem.getBoundingClientRect().height;


//             $('.item-bg').addClass('active');

//             bg.style.width = width + 'px';
//             bg.style.height = height + 'px';
//             bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
//         }
//     }
// });

// swiper.on('touchEnd', function () {
//     $('.news__item').removeClass('active');
//     $('.swiper-slide-active .news__item').addClass('active');
// });

// swiper.on('slideChange', function () {
//     $('.news__item').removeClass('active');
// });

// swiper.on('slideChangeTransitionEnd', function () {
//     $('.news__item').removeClass('active');
//     var activeItem = document.querySelector('.swiper-slide-active');

//     var sliderItem = activeItem.querySelector('.news__item');

//     $('.swiper-slide-active .news__item').addClass('active');

//     var x = sliderItem.getBoundingClientRect().left;
//     var y = sliderItem.getBoundingClientRect().top;
//     var width = sliderItem.getBoundingClientRect().width;
//     var height = sliderItem.getBoundingClientRect().height;


//     $('.item-bg').addClass('active');

//     bg.style.width = width + 'px';
//     bg.style.height = height + 'px';
//     bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
// });


// FAQ
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


