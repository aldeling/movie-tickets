// Business Logic

function Ticket(movieName, movieTime, movieAge, moviePrice) {
  this.movieName = movieName;
  this.moveTime = movieTime;
  this.movieAge = movieAge;
  this.moviePrice = moviePrice;
}

// UI logic

function handleFormSubmission(event) {
  event.preventDefault();
  let moviePrice = new function(e) {
    let a = document.getElementById("new-movie-age").value
    let b = "$5.00"
    let c = "$10.00"
    let d = "$7.00"

    if (a <= 5 && a >=1) {
      document.querySelector(".movie-price").innerText = b
    }else if (a > 5 && a < 55) {
      document.querySelector(".movie-price").innerText = c
    }else if (a >= 55) {
      document.querySelector(".movie-price").innerText = d
    }else {
      document.querySelector(".movie-price").innerText = "Error please input a reasonable age!"
    }
  };
}

window.addEventListener("load", function (){
  document.querySelector("form#new-ticket").addEventListener("submit", handleFormSubmission);
});