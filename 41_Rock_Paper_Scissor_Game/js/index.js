
var buttons = document.querySelectorAll('button');
let userScore = 0;
let compScore = 0;  // These are the global scope accessible for all function
let userMessage=document.getElementById('message1')
let compMessage=document.getElementById('message2')
// Loop through all the buttons and add click event listeners
buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        let playerChoice = btn.id; // Get the player's choice (button ID)
        let computerChoice = compStep(); // Get the computer's choice
        
        userMessage.innerText= ("Player's choice: " + playerChoice); 
        compMessage.innerText= ("Computer's choice: " + computerChoice);
        
        finalResult(playerChoice, computerChoice); // Pass both choices to finalResult
    });
});

function compStep() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice]; // Return the choice of Computer values of choices of the random index (Rock, Paper, or Scissors)
}

function finalResult(playerChoice, computerChoice) {
    // Compare player choice to computer choice
    if (playerChoice === computerChoice) {
        alert("It's a Tie!");  // If PlayerChoice and Computer Choice are the same
    } 
    else  if (
        (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
        (playerChoice === 'Paper' && computerChoice === 'Rock') ||
        (playerChoice === 'Scissors' && computerChoice === 'Paper')) {
            userScore++; // Increase user rank by one when user won!
            document.getElementById('rank1').innerText = userScore;
            alert("You won!");
        }
         
       else {
           compScore++;  // Increase computer rank by one when computer won!
           document.getElementById('rank2').innerText = compScore; // Update the computer's score display
           alert("Computer won!");
        }
    }