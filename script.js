// Secret number (randomly generated)
const secretNumber = Math.floor(Math.random() * 100) + 1;

document.getElementById("submit-btn").addEventListener("click", () => {
    const guess = parseInt(document.getElementById("guess").value);
    const name = document.getElementById("name").value;
    const resultElement = document.getElementById("result");

    if (!guess || guess < 1 || guess > 100 || !name) {
        resultElement.textContent = "Please enter a valid number and your name!";
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
