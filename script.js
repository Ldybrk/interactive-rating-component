function getRating(event) {
  var btnRating = event.target.id;
  var btnScore = btnRating[3];
  var thankText = document.getElementById("thank-text");
  console.log(btnScore);
  thankText.innerHTML = `You selected ${btnScore} out of 5`;
}

var ratingCard = document.getElementById("rating-state-card");
var thankCard = document.getElementById("thank-card");

function thankYouMessage() {
  ratingCard.style.display = "none";
  thankCard.style.display = "flex";
}
