import { state } from "./js/state.js";
import { jump, goRight, goLeft } from "./js/movement.js";
import {
  getDinoLeft,
  getDinoRight,
  getDinoBottom,
  getAgaveLeft,
  getBonusLeft,
} from "./js/coordinates.js";
import { getRandomNumber } from "./js/randomNumber.js";
import { addBonus } from "./js/addBonus.js";
import { startNewGame } from "./js/startNewGame.js";
import { setDefaultPositions } from "./js/setDefaultPositions.js";

startNewGame();

document.addEventListener("keydown", (e) => {
  e.preventDefault();
  if (e.key === "ArrowUp") {
    jump();
  }
  if (e.key === "ArrowRight") {
    goRight();
  }
  if (e.key === "ArrowLeft") {
    goLeft();
  }
});

const checkStatus = setInterval(() => {
  if (state.lives >= 0) {
    if (
      getDinoBottom() <= 30 &&
      getAgaveLeft() < getDinoRight() &&
      getAgaveLeft() > getDinoLeft()
    ) {
      state.lives--;
      state.livesTable.textContent = state.lives;
      setDefaultPositions();
    } else if (
      getDinoBottom() > 30 &&
      getAgaveLeft() < getDinoRight() &&
      getAgaveLeft() > getDinoLeft()
    ) {
      state.score++;
      state.scoreTable.textContent = state.score;
    }
    if (
      state.bonus.classList.contains("activeBonus") &&
      getDinoBottom() <= 30 &&
      getBonusLeft() < getDinoRight() &&
      getBonusLeft() > getDinoLeft()
    ) {
      addBonus();
    }
  } else {
    alert(`Game Over. Your score is ${state.score}`);
    startNewGame();
  }
}, 10);

let spawnBonus = setInterval(() => {
  state.bonus.className = "";
  const getBonusPosition = function () {
    return getRandomNumber(1, 13) * 45;
  };
  const getBonusType = function () {
    const randomType = getRandomNumber(1, 3);
    if (randomType === 1) {
      return "health";
    } else {
      return "points";
    }
  };
  state.bonus.style.left = `${getBonusPosition()}px`;
  if (getBonusType() === "health") {
    state.bonus.className = "activeBonus health";
  } else {
    const randomNumber = getRandomNumber(1, 5) * 50;
    state.bonus.className = `activeBonus ${randomNumber}`;
  }
}, 25000);