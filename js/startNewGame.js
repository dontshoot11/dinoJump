import { state } from "./state.js";

const startNewGame = function () {
  state.score = 0;
  state.lives = 3;
  state.livesTable.textContent = state.lives;
  state.scoreTable.textContent = state.score;
};

export { startNewGame };
