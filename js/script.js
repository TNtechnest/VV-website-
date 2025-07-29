

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

