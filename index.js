import { state } from "./js/state.js";
import { jump, goRight, goLeft } from "./js/movement.js";
import {
	getDinoLeft,
	getDinoRight,
	getDinoBottom,
	getObstacleLeft,
	getObstacleTop,
	getBonusLeft,
	getBonusTop,
} from "./js/coordinates.js";
import { getRandomNumber } from "./js/randomNumber.js";
import { addBonus } from "./js/bonuses/addBonus.js";
import { startNewGame } from "./js/gameStatus/startNewGame.js";
import { pauseSwitch } from "./js/gameStatus/pauseSwitch.js";
import { exitToMenu } from "./js/gameStatus/exitToMenu.js";
import { setDefaultPositions } from "./js/setDefaultPositions.js";
import { showDinoResults } from "./js/showDinoResults.js";
import { setDoomsday } from "./js/setDoomsday.js";
import { setObstacleSpeed } from "./js/setObstacleSpeed.js";

document.addEventListener("keydown", (e) => {
	e.preventDefault();
	if (e.code === "Space") {
		state.gameStatus === "menus" ? startNewGame() : pauseSwitch();
	}
	if (state.gameStatus === "running") {
		if (e.code === "ArrowUp") {
			jump();
		}
		if (e.code === "ArrowRight") {
			goRight();
		}
		if (e.code === "ArrowLeft") {
			goLeft();
		}
	}
});

function gameLoop() {
	if (state.gameStatus === "running") {
		setObstacleSpeed();
		if (state.lives >= 0) {
			setDoomsday(state.lives);
			if (
				getDinoBottom() >= getObstacleTop() &&
				getObstacleLeft() < getDinoRight() &&
				getObstacleLeft() > getDinoLeft()
			) {
				state.lives--;
				state.livesTable.textContent = state.lives;
				showDinoResults("Ouch!");
				setDefaultPositions();
			} else if (
				getDinoBottom() < getObstacleTop() &&
				getObstacleLeft() < getDinoRight() &&
				getObstacleLeft() > getDinoLeft()
			) {
				state.score++;
				state.scoreTable.textContent = state.score;
			}
			if (
				state.bonus.classList.contains("activeBonus") &&
				getDinoBottom() >= getBonusTop() &&
				getBonusLeft() < getDinoRight() &&
				getBonusLeft() > getDinoLeft()
			) {
				addBonus();
			}
		} else {
			setDoomsday(666);
			alert(`Game Over. Your score is ${state.score}`);
			exitToMenu();
		}
	}
	requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

let spawnBonus = setInterval(() => {
	if (state.gameStatus === "running") {
		state.bonus.className = "";
		const getBonusPosition = function () {
			return getRandomNumber(1, 15) * 45;
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
	}
}, 5000);
