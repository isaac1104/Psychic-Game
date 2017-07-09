var letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var generateRandom = Math.floor(Math.random() * letterArray.length);

var computerPick = letterArray[generateRandom];
console.log(computerPick);

$(document).ready(function() {
  var tries = 10;
  var buttonPressed = [];
  $("#guesses").html("Number of Tries Left: " + tries);
  $("button").on("click", function() {
    var keyInput = $(this).attr("value");
    if (buttonPressed.indexOf(keyInput) === -1) {
      tries--;
      buttonPressed.push(keyInput);
      console.log(buttonPressed);
      $("#guessedLetters").html(buttonPressed.join(" "));
    }
    $("#guesses").html("Number of Tries Left: " + tries);
    if (keyInput.toString() === computerPick.toString()) {
      alert("You are correct!: " + "The answer is: " + computerPick);
      location.reload();
    } else if (tries === 0) {
      alert("You've Lost! " + "The answer is: " + computerPick);
      location.reload();
    }
  });
});
