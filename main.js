// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

let modal = document.querySelector('#modal')
modal.classList.add('hidden')

function clickHandler(){
  document.addEventListener('click', function(e){
    if(e.target.matches('.like-glyph')){
      if(e.target.textContent === EMPTY_HEART){
        mimicServerCall()
        .then(resp => {
          e.target.innerText = FULL_HEART
          e.target.classList.add('.activated-heart')
        })
        .catch(err => {
          modal.classList.remove('hidden')
          modal.querySelector('#modal-message').innerText = err
          setTimeout(() => modal.classList.add('hidden'), 5000)
        })
      }else{
        mimicServerCall()
        .then(resp => {
          e.target.innerText = EMPTY_HEART
          e.target.classList.remove('.activated-heart')
        })
        .catch(err => {
          modal.classList.remove('hidden')
          modal.querySelector('#modal-message').innerText = err
          setTimeout(() => modal.classList.add('hidden'), 5000)
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
