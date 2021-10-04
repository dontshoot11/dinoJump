import { state } from "./state.js";

const showDinoResults = function (result) {
  state.dinoResults.textContent = result;
  state.dinoResults.classList.add("animate");
  setTimeout(() => {
    state.dinoResults.classList.remove("animate"),
      (state.dinoResults.textContent = "");
  }, 500);
};

export { showDinoResults };
