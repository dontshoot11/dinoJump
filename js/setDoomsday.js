import { state } from "./state.js";

const setDoomsday = function (status) {
	state.game.className = status >= 3 ? `apocalypse${3}` : `apocalypse${status}`;
};

export { setDoomsday };
