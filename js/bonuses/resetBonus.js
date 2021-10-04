import { state } from "../state.js";

const resetBonus = function () {
  state.bonus.style.left = "-100px";
  state.bonus.className = "";
};

export { resetBonus };
