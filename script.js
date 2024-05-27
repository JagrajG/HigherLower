let secretNumber = Math.trunc(Math.random() * 10) + 1;
console.log(secretNumber);
document.querySelector(".btn").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);

  if (guess === secretNumber) {
    document.querySelector(".set").textContent = "Correct";
    document.querySelector(".secretNum").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
  } else if (!guess) {
    document.querySelector(".set").textContent = "Please enter a number";
  } else if (guess > secretNumber) {
    document.querySelector(".set").textContent = "To big";
  } else if (guess < secretNumber) {
    document.querySelector(".set").textContent = "To small";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 10) + 1;
  console.log(secretNumber);
  document.querySelector("body").style.backgroundColor = "#FFFFFF";
  document.querySelector(".set").textContent = "Start guessing...";
  document.querySelector(".secretNum").textContent = "???";
  document.querySelector(".guess").value = "";
});
