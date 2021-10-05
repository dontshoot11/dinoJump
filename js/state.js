let state = {
    gameStatus: "menus",
    game: document.querySelector("#game"),
    asteroid: document.querySelector("#asteroid"),
    dino: document.querySelector("#dino"),
    dinoResults: document.querySelector("#dinoResults"),
    obstacle: document.querySelector("#obstacle"),
    bonus: document.querySelector("#bonus"),
    scoreTable: document.querySelector("#score"),
    livesTable: document.querySelector("#lives"),
    pauseTable: document.querySelector("#pause"),
    dinoJumped: false,
    dinoMoveX: Number,
    dinoMoveY: Number,
    score: Number,
    lives: Number,
};

export { state };