import { state } from "./state.js";

const setDefaultPositions = function () {
  state.dino.style.left = "0px";
  state.agave.style.animation = "none";
  setTimeout(function () {
    state.agave.style.animation = "";
  }, 10);
  state.bonus.style.left = "-100px";
  state.bonus.className = "";
};

export { setDefaultPositions };
