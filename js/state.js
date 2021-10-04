let state = {
  gameStatus: "menus",
  dino: document.querySelector("#dino"),
  dinoResults: document.querySelector("#dinoResults"),
  agave: document.querySelector("#agave"),
  bonus: document.querySelector("#bonus"),
  scoreTable: document.querySelector("#score"),
  livesTable: document.querySelector("#lives"),
  pauseTable: document.querySelector("#pause"),
  score: Number,
  lives: Number,
};

export { state };
