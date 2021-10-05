import { state } from "./state.js";

const jump = function() {
    if (!state.dinoJumped) {
        state.dinoJumped = true;
        state.dino.classList.add("jump");
        setTimeout(() => {
            state.dino.classList.remove("jump");
            state.dinoJumped = false;
        }, 750);
    }
};

const goRight = function() {
    if (state.dinoMoveX + 15 < 600) {
        state.dinoMoveX += 15;
        state.dino.style.left = `${state.dinoMoveX}px`;
    }
};

const goLeft = function() {
    if (state.dinoMoveX - 15 >= 0) {
        state.dinoMoveX -= 15;
        state.dino.style.left = `${state.dinoMoveX}px`;
    }
};

export { jump, goRight, goLeft };