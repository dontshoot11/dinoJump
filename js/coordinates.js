import { state } from "./state.js";

const getDinoLeft = function () {
  return parseInt(window.getComputedStyle(state.dino).getPropertyValue("left"));
};
const getDinoRight = function () {
  return getDinoLeft() + 50;
};
const getDinoBottom = function () {
  return parseInt(
    window.getComputedStyle(state.dino).getPropertyValue("bottom")
  );
};
const getAgaveLeft = function () {
  return (
    parseInt(window.getComputedStyle(state.agave).getPropertyValue("left")) + 20
  );
};
const getBonusLeft = function () {
  return (
    parseInt(window.getComputedStyle(state.bonus).getPropertyValue("left")) + 20
  );
};

export { getDinoLeft, getDinoRight, getDinoBottom, getAgaveLeft, getBonusLeft };
