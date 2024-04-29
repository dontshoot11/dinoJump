import { state } from "../state.js";

const startNewGame = function () {
	state.gameStatus = "running";
	state.dinoMoveX = 0;
	state.dinoMoveY = 0;
	state.score = 0;
	state.lives = 3;
	state.livesTable.textContent = state.lives;
	state.scoreTable.textContent = state.score;
	state.obstacle.classList.add("animate");
};

export { startNewGame };
