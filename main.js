// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


function addLikeIds() {
  const likeButtons = document.getElementsByClassName('like-glyph')
  let count = 0
  for (const element of likeButtons) {
      element.dataset.buttonNo = count
      count += 1
  }
  
}

addLikeIds()
runtime()
//likeListener()


function runtime() {
  mimicServerCall("http://somewebsite").then(function(response) {
    return response
  }).then(function() {
    likeListener()
  }).catch(function(error) {
    const divHidden = document.getElementById('modal')
    divHidden.hidden = false
    const messageDiv = document.createElement('div')
    divHidden.append('div')
    messageDiv.innerHTML = `${error.message}`
    setTimeout(function(){
      divHidden.hidden = true
    }, 5000)

  })
}


//Watch out for Class Overwrite From now on!!!!

function likeListener(){
  document.addEventListener("click", function(e) {
    if (e.target.matches(".like-glyph")){
      const likeButton = e.target
      //const buttonId = likeButton.dataset.buttonNo
      likeButton.innerHTML = FULL_HEART
      likeButton.classList.add("activated-heart")
      likeButton.classList.remove("like-glyph")
  
    }
    else if (e.target.matches(".activated-heart")){
      const like = e.target
      like.innerHTML = EMPTY_HEART
      like.classList.remove("activated-heart")
      like.classList.add("like-glyph")
    } else {
      console.log("something wrong, check code")
    }
  })
}








function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300)
  });
}


