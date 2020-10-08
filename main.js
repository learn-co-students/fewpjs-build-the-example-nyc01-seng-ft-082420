// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const likeHandler = (like) => {
  const likeBtn = like.querySelector('.like-glyph')
  mimicServerCall("http://mimicServer.example.com")
  .then(success => {
    console.log(success)
    if (likeBtn.textContent === '♡') {
      likeBtn.textContent = FULL_HEART
    } else {
      likeBtn.textContent = EMPTY_HEART
    }
  })

  .catch(error => {
    const modal = document.querySelector('#modal')
    modal.classList.remove('hidden')
    modal.textContent = error
    setTimeout(function(){
      modal.classList.add('hidden')
    }, 5000)
  })
}

document.addEventListener("click", e => {
  if(e.target.matches('.like')) {
    likeHandler(e.target)
  }
})


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
  })
}

