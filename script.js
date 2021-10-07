"use strict";

// refactor to avoid code duplication.
let number = Math.trunc(Math.random() * 20) + 1;
let score = Number(document.querySelector("span").textContent);
let highscore = Number(document.querySelector(".highscore").textContent);

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  if (guess <= 0 || guess > 20) {
    document.querySelector(".message").textContent = "⛔ Wrong Number!!";
    document.querySelector("body").style.backgroundColor = "red";
  } else {
    if (guess !== number) {
      if (score > 1) {
        document.querySelector(".message").textContent =
          guess > number ? "⏬ Lower!!" : "⏫ Higher!!";
        document.querySelector("body").style.backgroundColor = "#222";
        score--;
        document.querySelector("span").textContent = score;
      } else {
        document.querySelector(".message").textContent = " 😢 You Loose!!";
        document.querySelector("body").style.backgroundColor = "red";
      }
      /*if (guess > number) {
      if (score > 1) {
        document.querySelector(".message").textContent = "⏬ Lower!!";
        document.querySelector("body").style.backgroundColor = "#222";
        score--;
        document.querySelector("span").textContent = score;
      } else {
        document.querySelector(".message").textContent = " 😢 You Loose!!";
        document.querySelector("body").style.backgroundColor = "red";
      }
    } else if (guess < number) {
      if (score > 1) {
        document.querySelector(".message").textContent = "⏫ Higher!!";
        document.querySelector("body").style.backgroundColor = "#222";
        score--;
        document.querySelector("span").textContent = score;
      } else {
        document.querySelector(".message").textContent = " 😢 You Loose!!";
        document.querySelector("body").style.backgroundColor = "red";
      }
    }*/
    } else {
      document.querySelector(".message").textContent = "🕺 You Win!!";
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      document.querySelector(".number").textContent = number;
      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = score;
      }
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  number = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
});
