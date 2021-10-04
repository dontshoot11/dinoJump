import { getDinoLeft } from "./coordinates.js";
import { state } from "./state.js";

const jump = function () {
  const dinoJumped = state.dino.classList.contains("jump");
  if (!dinoJumped) {
    state.dino.classList.add("jump");
  }
  setTimeout(() => {
    state.dino.classList.remove("jump");
  }, 500);
};

const goRight = function () {
  if (getDinoLeft() + 10 < 600) {
    state.dino.style.left = `${getDinoLeft() + 10}px`;
  }
};

const goLeft = function () {
  if (getDinoLeft() - 10 >= 0) {
    state.dino.style.left = `${getDinoLeft() - 10}px`;
  }
};

export { jump, goRight, goLeft };
