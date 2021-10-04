import { state } from "../state.js";

const startNewGame = function () {
  state.gameStatus = "running";
  state.score = 0;
  state.lives = 3;
  state.livesTable.textContent = state.lives;
  state.scoreTable.textContent = state.score;
  state.agave.classList.add("animate");
};

export { startNewGame };
