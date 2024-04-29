import { state } from "./state.js";

const setObstacleSpeed = function () {
	state.obstacle.style.animationDuration = `${
		state.score < 500 ? state.obstacleSpeed - state.score / 1000 : 1
	}s`;
};

export { setObstacleSpeed };
