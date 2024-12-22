// Secret number (randomly generated)
const secretNumber = Math.floor(Math.random() * 100) + 1;

document.getElementById("start-btn").addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const nameSection = document.getElementById("name-section");
    const gameSection = document.getElementById("game-section");

    if (!name) {
        alert("Please enter a valid name!");
        return;
    }

    // Hide name section, show game section
    nameSection.style.display = "none";
    gameSection.style.display = "block";
});

document.getElementById("submit-btn").addEventListener("click", () => {
    const guess = parseInt(document.getElementById("guess").value);
    const name = document.getElementById("name").value;
    const resultElement = document.getElementById("result");

    if (!guess || guess < 1 || guess > 100) {
        resultElement.textContent = "Please enter a valid number!";
        resultElement.style.color = "red";
        return;
    }

    if (guess === secretNumber) {
        resultElement.textContent = `🎉 Congratulations, ${name}! You guessed the number correctly!`;
        resultElement.style.color = "limegreen";
    } else if (guess < secretNumber) {
        resultElement.textContent = `${name}, too low! Try again.`;
        resultElement.style.color = "yellow";
    } else {
        resultElement.textContent = `${name}, too high! Try again.`;
        resultElement.style.color = "orange";
    }
});
