function guessingGame() {
    const target = Math.floor(Math.random() * 100) + 1;
    let guess;
    let attempts = 0;
    
    do {
        guess = parseInt(prompt("Guess a number between 1 and 100:"), 10);
        attempts++;
        
        if (guess < target) {
            console.log("Too low!");
        } else if (guess > target) {
            console.log("Too high!");
        } else {
            console.log(`Correct! The number was ${target}. It took you ${attempts} attempts.`);
        }
    } while (guess !== target);
}

guessingGame();
