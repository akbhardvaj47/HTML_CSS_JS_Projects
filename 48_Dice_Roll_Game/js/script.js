
function rollDice() {
    // Generate a random number between 1 and 6
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    // Get the dice image element
    const dice = document.querySelector('#dice');

    // Set the image source based on the random number
    dice.innerHTML = `<img src='./images/${randomNumber}.jpg' width='150px' height='150px' alt='Dice ${randomNumber}' />`;

    document.querySelector('#result').innerText=`Your Number is ${randomNumber}`
}