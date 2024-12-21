let n = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const feedback = document.getElementById('feedback');
    const result = document.getElementById('result');
    const guess = parseInt(guessInput.value);
    
    attempts++;
    
    if (guess > n) {
        feedback.textContent = Enter a number lesser than ${guess};
    } else if (guess < n) {
        feedback.textContent = Enter a number greater than ${guess};
    } else {
        result.textContent = You guessed it right in ${attempts} attempts! The number is ${n};
        feedback.textContent = '';
    }

    if (attempts >= 5 && guess !== n) {
        result.textContent = GAME OVER. BETTER LUCK NEXT TIME! The number was ${n};
        feedback.textContent = '';
    }
}
