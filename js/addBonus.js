import { state } from "./state.js";
import { showDinoResults } from "./showDinoResults.js";

const addBonus = function () {
  state.bonus.style.left = "-100px";
  if (state.bonus.classList.contains("health")) {
    state.lives += 1;
    state.livesTable.textContent = lives;
    showDinoResults("+1");
    state.bonus.className = "";
    return;
  } else {
    const bonusScore = Number(state.bonus.classList[1]);
    state.score += bonusScore;
    state.scoreTable.textContent = state.score;
    showDinoResults(`+${bonusScore}`);
    state.bonus.className = "";
    return;
  }
};

export { addBonus };
