import { state } from "../state.js";
import { setDefaultPositions } from "../setDefaultPositions.js";
import { resetBonus } from "../bonuses/resetBonus.js";
import { setDoomsday } from "../setDoomsday.js";

const exitToMenu = function() {
    state.gameStatus = "menus";
    state.score = 0;
    state.lives = 3;
    state.livesTable.textContent = state.lives;
    state.scoreTable.textContent = state.score;
    state.obstacle.classList.remove("animate");
    setDoomsday(1);
    resetBonus();
    setDefaultPositions();
};

export { exitToMenu };