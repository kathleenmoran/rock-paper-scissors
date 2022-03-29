function computerPlay() {
    let moves = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) return 'Tie!';

    switch (playerSelection) {
        case 'rock':
            return (computerSelection === 'paper') ? 'You Lose! Paper beats Rock'
            : 'You Win! Rock beats Scissors'
        case 'paper':
            return (computerSelection === 'scissors') ? 'You Lose! Scissors beats Paper'
            : 'You Win! Paper beats Rock'
        case 'scissors':
            return (computerSelection == 'rock') ? 'You Lose! Rock beats Scissors'
            : 'You Win! Scissors beats Paper'
        default:
            return 'The move you have entered is not valid. Please enter "rock", "paper", or "scissors".'
    }
}