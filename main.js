// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const errorModal = document.getElementById('modal')
errorModal.classList.add('hidden')

function clickHandler() {
  document.addEventListener('click', function(e){
    if (e.target.matches('.like-glyph')) {
      if (e.target.dataset.liked === "true"){
        e.target.classList.remove('activated-heart')
        e.target.dataset.liked = "false"
      } else {
        mimicServerCall()
        .then(response => {
          if (response === "Pretend remote server notified of action!"){
            e.target.classList.add('activated-heart')
            e.target.dataset.liked = "true"
          } else {}
        })

      }
    }
  })

}

clickHandler()

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
