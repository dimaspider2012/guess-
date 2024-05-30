const random = Math.floor(Math.random() * 20) + 1;
const number = document.querySelector(".number");
const messagi = document.querySelector(".messagi");
const button = document.querySelector("button");
button.addEventListener("click", () => {
  const guess = Number(document.querySelector("input").value);
  console.log(guess);
  if (!guess) {
    messagi.textContent = "Ти вів не число";
  } else if (guess === random) {
    messagi.textContent = "Ти вгадав";
    number.textContent = random;
  } else if (random > guess) {
    messagi.textContent = "загадане число більше";
  } else if (random < guess) {
    messagi.textContent = "загадане число менше";
  }
});
