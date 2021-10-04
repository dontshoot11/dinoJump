import { state } from "../state.js";
import { setDefaultPositions } from "../setDefaultPositions.js";

const exitToMenu = function () {
  state.gameStatus = "menus";
  state.score = 0;
  state.lives = 3;
  state.livesTable.textContent = state.lives;
  state.scoreTable.textContent = state.score;
  state.agave.classList.remove("animate");
  setDefaultPositions();
};

export { exitToMenu };
