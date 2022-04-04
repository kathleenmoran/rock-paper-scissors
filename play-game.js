let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const MOVES = ['Rock', 'Paper', 'Scissors'];
    // generates a random index in order to select a randon rps move
    const randomIndex = Math.floor(Math.random() * MOVES.length);
    return MOVES[randomIndex];
}

function didPlayerWinRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return null;
    }

    switch (playerSelection) {
        case 'Rock':
            return computerSelection === 'Scissors';
        case 'Paper':
            return computerSelection === 'Rock';
        case 'Scissors':
            return computerSelection === 'Paper';
        default:
            return null;
    }
}

function generateRoundMessage(playerWon, playerSelection, computerSelection) {
    const resultHeading = document.querySelector('.result-heading');
    const resultSubheading = document.querySelector('.result-subheading');

    if (playerWon === null) {
        resultHeading.textContent = 'It\'s a Tie!'
        resultSubheading.textContent = `You and the Computer Both Selected ${playerSelection}`;
    }
    else {
        // updates heading to indicate who won round
        resultHeading.textContent = `You ${playerWon ? 'Won' : 'Lost'}!`;

        // updates subheading to indicate which move beat the other move 
        const winnerMove = playerWon ? playerSelection : computerSelection;
        const loserMove = playerWon ? computerSelection : playerSelection;
        resultSubheading.textContent = `${winnerMove} Beats ${loserMove}`;
    }
}

function generateFinalMessage() {

    // updates heading to GAME OVER
    const resultHeading = document.querySelector('.result-heading');
    resultHeading.textContent = `GAME OVER`;

    // updates subheading to indicate who won game and how to play again
    const didPlayerWinMessage = (playerScore > computerScore) ? 'You Won!' : 
            (computerScore > playerScore) ? 'You Lost!' : 'It\'s a Tie!';
    const resultSubheading = document.querySelector('.result-subheading');
    resultSubheading.textContent = `${didPlayerWinMessage} Choose a Move to Play Again:`;
}

function resetScores() {
    playerScore = 0;
    computerScore = 0;
}

function updateMoveMade(selection, isPlayer) {
    const moveDisplay = isPlayer ? document.querySelector('.player-move') :
            document.querySelector('.computer-move');

    switch (selection) {
        case 'Rock':
            moveDisplay.textContent = '✊';
            break;
        case 'Paper':
            moveDisplay.textContent = '✋';
            break;
        case 'Scissors':
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

    generateRoundMessage(playerWon, playerMove, computerMove);

    updateMoveMade(playerMove, true);
    updateMoveMade(computerMove, false);
    updateScores(playerWon);

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