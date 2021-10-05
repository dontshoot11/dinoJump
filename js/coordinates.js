import { state } from "./state.js";

const getDinoLeft = function() {
    return state.dino.getBoundingClientRect().left;
};
const getDinoRight = function() {
    return state.dino.getBoundingClientRect().right;
};
const getDinoBottom = function() {
    return state.dino.getBoundingClientRect().bottom;
};
const getObstacleLeft = function() {
    return state.obstacle.getBoundingClientRect().left;
};
const getObstacleTop = function() {
    return state.obstacle.getBoundingClientRect().top;
};
const getBonusLeft = function() {
    return state.bonus.getBoundingClientRect().left;
};
const getBonusTop = function() {
    return state.bonus.getBoundingClientRect().top;
};

export {
    getDinoLeft,
    getDinoRight,
    getDinoBottom,
    getObstacleLeft,
    getObstacleTop,
    getBonusLeft,
    getBonusTop,
};