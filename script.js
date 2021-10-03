const dino = document.querySelector("#dino");
const agave = document.querySelector("#agave");
const scoreTable = document.querySelector("#score");
const livesTable = document.querySelector("#lives");
let score = 0;
let lives = 3;

const getDinoLeft = function() {
    return parseInt(window.getComputedStyle(dino).getPropertyValue("left"));
};

const setDefaultSettings = function() {
    dino.style.left = "0px";
    agave.style.animation = "none";
    setTimeout(function() {
        agave.style.animation = "";
    }, 10);
};

document.addEventListener("keydown", (e) => {
    e.preventDefault();
    if (e.key === "ArrowUp") {
        jump();
    }
    if (e.key === "ArrowRight") {
        if (getDinoLeft() + 10 < 600) {
            dino.style.left = `${getDinoLeft() + 10}px`;
        }
    }
    if (e.key === "ArrowLeft") {
        if (getDinoLeft() - 10 >= 0) {
            dino.style.left = `${getDinoLeft() - 10}px`;
        }
    }
});

const jump = function() {
    const dinoJumped = dino.classList.contains("jump");
    if (!dinoJumped) {
        dino.classList.add("jump");
    }
    setTimeout(() => {
        dino.classList.remove("jump");
    }, 300);
};

let checkStatus = setInterval(() => {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let dinoRight = getDinoLeft() + 50;
    let agaveLeft = parseInt(
        window.getComputedStyle(agave).getPropertyValue("left")
    );
    if (lives >= 0) {
        if (agaveLeft < dinoRight && agaveLeft > getDinoLeft() && dinoTop >= 140) {
            lives -= 1;
            livesTable.textContent = lives;
            setDefaultSettings();
        } else if (
            agaveLeft < dinoRight &&
            agaveLeft > getDinoLeft() &&
            dinoTop < 140
        ) {
            score += 1;
            scoreTable.textContent = score;
        }
    } else {
        alert("Game Over");
    }
}, 10);