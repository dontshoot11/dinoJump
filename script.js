const dino = document.querySelector("#dino");
const dinoResults = document.querySelector("#dinoResults");
const agave = document.querySelector("#agave");
const bonus = document.querySelector("#bonus");
const scoreTable = document.querySelector("#score");
const livesTable = document.querySelector("#lives");
let score = Number;
let lives = Number;

const startNewGame = function() {
    score = 0;
    lives = 3;
    livesTable.textContent = lives;
    scoreTable.textContent = score;
};

startNewGame();

const getDinoLeft = function() {
    return parseInt(window.getComputedStyle(dino).getPropertyValue("left"));
};
const getDinoRight = function() {
    return getDinoLeft() + 50;
};
const getDinoBottom = function() {
    return parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));
};
const getAgaveLeft = function() {
    return parseInt(window.getComputedStyle(agave).getPropertyValue("left")) + 20;
};
const getBonusLeft = function() {
    return parseInt(window.getComputedStyle(bonus).getPropertyValue("left")) + 20;
};

const getRandomNumber = function(min, max) {
    console.log(min, max);
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

const setDefaultPositions = function() {
    dino.style.left = "0px";
    agave.style.animation = "none";
    setTimeout(function() {
        agave.style.animation = "";
    }, 10);
};

const addBonus = function() {
    bonus.style.left = "-100px";
    if (bonus.classList.contains("health")) {
        lives += 1;
        livesTable.textContent = lives;
        showDinoResults("+1");
        bonus.className = "";
        return;
    } else {
        const bonusScore = Number(bonus.classList[1]);
        score += bonusScore;
        scoreTable.textContent = score;
        showDinoResults(`+${bonusScore}`);
        bonus.className = "";
        return;
    }
};

const showDinoResults = function(result) {
    dinoResults.textContent = result;
    dinoResults.classList.add("animate");
    setTimeout(() => {
        dinoResults.classList.remove("animate"), (dinoResults.textContent = "");
    }, 500);
};

document.addEventListener("keydown", (e) => {
    e.preventDefault();
    if (e.key === "ArrowUp") {
        jump();
    }
    if (e.key === "ArrowRight") {
        goRight();
    }
    if (e.key === "ArrowLeft") {
        goLeft();
    }
});

const jump = function() {
    const dinoJumped = dino.classList.contains("jump");
    if (!dinoJumped) {
        dino.classList.add("jump");
    }
    setTimeout(() => {
        dino.classList.remove("jump");
    }, 500);
};

const goRight = function() {
    if (getDinoLeft() + 10 < 600) {
        dino.style.left = `${getDinoLeft() + 10}px`;
    }
};

const goLeft = function() {
    if (getDinoLeft() - 10 >= 0) {
        dino.style.left = `${getDinoLeft() - 10}px`;
    }
};

const checkStatus = setInterval(() => {
    if (lives >= 0) {
        if (
            getDinoBottom() <= 30 &&
            getAgaveLeft() < getDinoRight() &&
            getAgaveLeft() > getDinoLeft()
        ) {
            lives--;
            livesTable.textContent = lives;
            setDefaultPositions();
        } else if (
            getDinoBottom() > 30 &&
            getAgaveLeft() < getDinoRight() &&
            getAgaveLeft() > getDinoLeft()
        ) {
            score++;
            scoreTable.textContent = score;
            console.log(score);
        }
        if (
            bonus.classList.contains("activeBonus") &&
            getDinoBottom() <= 30 &&
            getBonusLeft() < getDinoRight() &&
            getBonusLeft() > getDinoLeft()
        ) {
            addBonus();
        }
    } else {
        alert(`Game Over. Your score is ${score}`);
        startNewGame();
    }
}, 10);

let spawnBonus = setInterval(() => {
    bonus.className = "";
    const getBonusPosition = function() {
        return getRandomNumber(1, 13) * 45;
    };
    const getBonusType = function() {
        const randomType = getRandomNumber(1, 3);
        if (randomType === 1) {
            return "health";
        } else {
            return "points";
        }
    };
    bonus.style.left = `${getBonusPosition()}px`;
    if (getBonusType() === "health") {
        bonus.className = "activeBonus health";
    } else {
        const randomNumber = getRandomNumber(1, 5) * 50;
        bonus.className = `activeBonus ${randomNumber}`;
    }
}, 25000);