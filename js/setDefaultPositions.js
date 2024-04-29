import { state } from "./state.js";

const setDefaultPositions = function () {
	state.dinoMoveX = 0;
	state.dino.style.left = "0px";
	state.obstacle.style.animation = "none";
	setTimeout(function () {
		state.obstacle.style.animation = "";
	}, 10);
};

export { setDefaultPositions };
