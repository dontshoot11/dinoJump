import { state } from "./state.js";

const setDoomsday = function(status) {
    state.game.className = `apocalypse${status}`;
    state.asteroid.className = `apocalypse${status}`;
};

export { setDoomsday };