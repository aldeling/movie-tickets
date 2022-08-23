// Business Logic

let moviePrice = function(a) {
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

let movieTitle = function(title) {
  let title1 = "The Lord of the Rings"
  let title2 = "Princess Bride"
  let title3 = "The Witch"
  let title4 = "Frozen"

  if (title1 === title1) {
    document.querySelector(".movies").innerText = title1
  }else if (title2 === title2) {
    document.querySelector(".movies").innerText = title2
  }else if (title3 === title3) {
    document.querySelector(".movies").innerText = title3
  }else if (title4 === title4) {
    document.querySelector(".movies").innerText = title4
  } else {
    document.querySelector(".movies").innerText = "Error"
  }
};

// UI logic

function handleFormSubmission(event) {
  event.preventDefault();
  let title = document.getElementById("movies").value
  let a = document.getElementById("new-movie-age").value
  moviePrice(a);
  movieTitle(title);

}

window.addEventListener("load", function (){
  document.querySelector("form#new-ticket").addEventListener("submit", handleFormSubmission);
});