function guessingGame() {
    const target = Math.floor(Math.random() * 100) + 1;
    let guess = 0;
    let attempts = 0;
    
    while (guess !== target) {
        guess = parseInt(prompt("Guess a number between 1 and 100:"), 10);
        attempts++;
        
        if (guess < target) {
            alert("Too low!");
        } else if (guess > target) {
            alert("Too high!");
        } else {
            alert(`Correct! The number was ${target}. It took you ${attempts} attempts.`);
        }
    }
}

guessingGame();
