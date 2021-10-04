import { state } from "../state.js";
import { getDinoBottom } from "../coordinates.js";

const pauseSwitch = function () {
  if (state.gameStatus === "running") {
    state.gameStatus = "paused";
    state.dino.style.animationPlayState = "paused";
    state.dino.style.bottom = `${getDinoBottom()}px`;
    state.agave.style.animationPlayState = "paused";
    state.pauseTable.textContent = "pause";
  } else if (state.gameStatus === "paused") {
    state.gameStatus = "running";
    state.dino.style.animationPlayState = "running";
    state.agave.style.animationPlayState = "running";
    state.dino.style.bottom = `${0}px`;
    state.pauseTable.textContent = "";
  }
};

export { pauseSwitch };
