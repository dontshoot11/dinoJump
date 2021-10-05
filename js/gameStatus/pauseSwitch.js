import { state } from "../state.js";
import { getDinoBottom } from "../coordinates.js";

const pauseSwitch = function() {
    if (state.gameStatus === "running") {
        const dinoBottom = parseInt(
            window.getComputedStyle(state.dino).getPropertyValue("bottom")
        );
        state.gameStatus = "paused";
        state.dino.style.animationPlayState = "paused";
        state.dino.style.bottom = `${dinoBottom}px`;
        state.obstacle.style.animationPlayState = "paused";
        state.pauseTable.textContent = "pause";
    } else if (state.gameStatus === "paused") {
        state.gameStatus = "running";
        state.dino.style.animationPlayState = "running";
        state.obstacle.style.animationPlayState = "running";
        state.dino.style.bottom = `${0}px`;
        state.pauseTable.textContent = "";
    }
};

export { pauseSwitch };