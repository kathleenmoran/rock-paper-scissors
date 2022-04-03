let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const MOVES = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * MOVES.length);
    return MOVES[randomIndex];
}

function didPlayerWinRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return null;
    }

    switch (playerSelection) {
        case 'rock':
            return computerSelection === 'scissors';
        case 'paper':
            return computerSelection === 'rock';
        case 'scissors':
            return computerSelection === 'paper';
        default:
            return null;
    }
}

function generateRoundMessage(playerWon, playerSelection, computerSelection, playerScore, computerScore) {
    if (playerSelection.toLowerCase() === computerSelection) {
        return 'It\'s a tie!';
    }
    else if (playerWon === null) {
        return 'You entered an invalid move. Please enter either "rock", "paper", or scissors".';
    }
    else {
        const didPlayerWinMessage = `You ${playerWon ? 'won' : 'lost'}!`;
        const winnerMove = playerWon ? playerSelection : computerSelection;
        const loserMove = playerWon ? computerSelection : playerSelection;
        const beatMessage = `${winnerMove.charAt(0).toUpperCase()}${winnerMove.substring(1)} beats ${loserMove.toLowerCase()}.`;
        playerWon ? ++playerScore : ++computerScore;
        return `${didPlayerWinMessage} ${beatMessage}`;
    }
}

function generateFinalMessage() {
    const didPlayerWinMessage = (playerScore > computerScore) ? 'You won!' : 
            (computerScore > playerScore) ? 'You lost!' : 'It\'s a tie!';
    const scoreMessage = `Final score: You - ${playerScore}; Computer - ${computerScore}.`;
    const resultContainer = document.querySelector('.result-container');
    resultContainer.textContent = `GAME OVER. ${didPlayerWinMessage} ${scoreMessage}`;
}

function playerPlay(e) {
    const playerMove = e.target.value;
    const computerMove = computerPlay();
    const playerWon = didPlayerWinRound(playerMove, computerMove);

    const resultContainer = document.querySelector('.result-container');
    resultContainer.textContent = generateRoundMessage(playerWon, playerMove, computerMove);

    if (playerWon === true) ++playerScore;
    else if (playerWon === false) ++computerScore;

    if (playerScore === 5 || computerScore === 5) generateFinalMessage();
}

function game() {
    playerScore = 0;
    computerScore = 0;
    const moveButtons = document.querySelectorAll('.move-button');
    moveButtons.forEach(button => button.addEventListener('click', playerPlay));
}

game();