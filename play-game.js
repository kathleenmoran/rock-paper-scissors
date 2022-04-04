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
    console.log('im here');
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

function generateRoundMessage(playerWon, playerSelection, computerSelection) {
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

function resetScores() {
    playerScore = 0;
    computerScore = 0;
}

function updateMoveMade(selection, isPlayer) {
    const moveDisplay = isPlayer ? document.querySelector('.player-move') :
            document.querySelector('.computer-move');

    switch (selection) {
        case 'rock':
            moveDisplay.textContent = '✊';
            break;
        case 'paper':
            moveDisplay.textContent = '✋';
            break;
        case 'scissors':
            moveDisplay.textContent = '✌️';
            break;
        default:
            moveDisplay.textContent = '?';
    }
}

function updateScores(playerWon) {
    if (playerWon === true) ++playerScore;
    else if (playerWon === false) ++computerScore;

    const playerScoreDisplay = document.querySelector('.player-score');
    playerScoreDisplay.textContent = `Player: ${playerScore}`;

    const computerScoreDisplay = document.querySelector('.computer-score');
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;
}

function playerPlay(e) {
    const playerMove = e.target.value;
    const computerMove = computerPlay();
    const playerWon = didPlayerWinRound(playerMove, computerMove);

    const resultContainer = document.querySelector('.result-container');
    resultContainer.textContent = generateRoundMessage(playerWon, playerMove, computerMove);

    updateMoveMade(playerMove, true);
    updateMoveMade(computerMove, false);
    updateScores(playerWon);
    console.log(playerScore);
    console.log(computerScore);

    if (playerScore === 5 || computerScore === 5) {
        generateFinalMessage();
        resetScores();
    }
}

function game() {
    const moveButtons = document.querySelectorAll('.move-button');
    moveButtons.forEach(button => button.addEventListener('click', playerPlay));
}

game();