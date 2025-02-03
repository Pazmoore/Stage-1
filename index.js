const colorBox = document.querySelector(".color-box");
const colorOptionsContainer = document.getElementById("colorOptions");
const gameStatus = document.querySelector("[data-testid='gameStatus']");
const scoreDisplay = document.querySelector("[data-testid='score']");
const newGameButton = document.querySelector("[data-testid='newGameButton']");

let score = 0;
let targetColor = "";
const colors = ["red", "blue", "green", "yellow", "purple", "orange", "black", "pink", "red"];

function startRound() {
    gameStatus.textContent = "";
    targetColor = colors[Math.floor(Math.random() * colors.length)];
    colorBox.style.backgroundColor = targetColor;
    updateColorOptions();
}

function updateColorOptions() {
    colorOptionsContainer.innerHTML = "";
    const shuffledColors = [...colors].sort(() => Math.random() - 0.5);
    shuffledColors.forEach(color => {
        const button = document.createElement("button");
        button.classList.add("color-option");
        button.style.backgroundColor = color;
        button.setAttribute("data-testid", "colorOption");
        button.addEventListener("click", () => checkGuess(color));
        colorOptionsContainer.appendChild(button);
    });
}

function checkGuess(selectedColor) {
    if (selectedColor === targetColor) {
        gameStatus.textContent = "Correct!";
        score++;
        scoreDisplay.textContent = score;
        setTimeout(startRound, 1000);
    } else {
        gameStatus.textContent = "Wrong! Try again.";
    }
}

newGameButton.addEventListener("click", () => {
    score = 0;
    scoreDisplay.textContent = score;
    startRound();
});

startRound();