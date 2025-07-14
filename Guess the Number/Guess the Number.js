let random = Math.floor(Math.random() * 100) + 1;

let guess = -1;
let attempts = 0;

while (guess !== random && attempts < 5) {
    guess = Number(prompt("Guess the number between 1 and 100.\n Attempt " + (attempts + 1)));

    if (isNaN(guess) || guess < 1 || guess > 100) {
        console.log("Invalid input. Enter a number between 1 and 100.");
        continue;
    }

    attempts++;

    if (guess > random) {
        console.log("Too high, try again");
    } else if (guess < random) {
        console.log("Too low, try again");
    } else {
        console.log("Congrats! You guessed it right: " + guess);
        break;
    }
}

if (guess !== random) {
    console.log("Sorry! You used all 5 attempts. The number was " + random);
}
