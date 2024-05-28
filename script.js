let secretNumber = Math.trunc(Math.random() * 10) + 1;
let score = 20;
let highScore = 0;
console.log(secretNumber);
document.querySelector(".btn").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);

  if (guess === secretNumber) {
    document.querySelector(".set").textContent = "Correct";
    document.querySelector(".secretNum").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent =
        "Highscore: " + highScore;
    }
  } else if (!guess) {
    document.querySelector(".set").textContent = "Please enter a number";
  } else if (guess > secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector(".set").textContent = "Too big";
      document.querySelector(".attempts").textContent = "Score: " + score;
    } else {
      document.querySelector(".set").textContent = "You Lost!";
      document.querySelector(".attempts").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#E40000";
      document.querySelector(".secretNum").textContent = secretNumber;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector(".set").textContent = "Too small";
      document.querySelector(".attempts").textContent = "Score: " + score;
    } else {
      document.querySelector(".set").textContent = "You Lost!";
      document.querySelector(".attempts").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#E40000";
      document.querySelector(".secretNum").textContent = secretNumber;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 10) + 1;
  console.log(secretNumber);
  document.querySelector("body").style.backgroundColor = "#FFFFFF";
  document.querySelector(".set").textContent = "Start guessing...";
  document.querySelector(".secretNum").textContent = "???";
  document.querySelector(".guess").value = "";
  document.querySelector(".attempts").textContent = "Score: " + score;
});
