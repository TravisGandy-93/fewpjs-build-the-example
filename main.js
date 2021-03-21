// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
  const errorModal = document.getElementById('modal')
  const errorMessage = document.getElementById('modal-message')

 function hideError() {
   errorModal.classList.add('hidden')
   errorMessage.textContent = ''
 }

 function showError(displayError) {
   errorModal.classList.remove('hidden')
   errorMessage.textContent = displayError
 }

 function likeListener() {
   const hearts = document.getElementsByClassName('like-glyph')

   // Iterate over array to access a listener for each like
   for (heart of hearts) {
     clickLike(heart)
   }
 }

 function clickLike(like) {
   like.addEventListener("click", () => {
     // Server call replacing a fetch
     mimicServerCall()
    
     .then((response) => {
       updateLikes(like)
     })
     
     .catch((error) => {
       showError(error);
      
       setTimeout(hideError, 5000);
     })
   })
 }

 function updateLikes(specificLike) {
  specificLike.classList.toggle('activated-heart')
 }

 function main() {
   hideError()
   likeListener()
 }

 main()




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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
